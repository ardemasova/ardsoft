/* ArdSoft — animated "web" background: drifting nodes linked into a mesh.
   Two depth layers (fine & coarse); each fades in and out across the screen
   following slow flowing fields, so the web is visible in places and dissolves in others. */
(function () {
  const cv = document.getElementById("web");
  if (!cv || !cv.getContext) return;
  const ctx = cv.getContext("2d");
  const still = matchMedia("(prefers-reduced-motion:reduce)").matches;
  let W = 0, H = 0, dpr = 1, layers = [];

  const LAYERS = [
    { spacing: 70,  link: 105, speed: .10, node: 1.1, alpha: .20, rgb: "120,170,255", phase: 0 },   // fine, far
    { spacing: 150, link: 230, speed: .16, node: 1.9, alpha: .30, rgb: "150,200,255", phase: 2.1 }  // coarse, near
  ];

  // Optional page tint: a page may set window.ArdWeb = { rgb: "r,g,b", light: bool } to recolour the web
  // (used by the portfolio page to follow each case's palette). Without it the web looks exactly as before.
  const sprites = {};
  function sprite(rgb, light) {
    const key = rgb + (light ? "L" : "");
    if (sprites[key]) return sprites[key];
    const c = document.createElement("canvas"); c.width = c.height = 64;
    const g = c.getContext("2d"), r = g.createRadialGradient(32, 32, 0, 32, 32, 32);
    r.addColorStop(0, light ? `rgba(${rgb},1)` : "rgba(235,245,255,1)"); r.addColorStop(.22, `rgba(${rgb},.55)`); r.addColorStop(1, `rgba(${rgb},0)`);
    g.fillStyle = r; g.fillRect(0, 0, 64, 64);
    return (sprites[key] = c);
  }

  function build() {
    dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    W = cv.clientWidth; H = cv.clientHeight;
    cv.width = W * dpr; cv.height = H * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    layers = LAYERS.map(L => {
      const n = Math.round((W * H) / (L.spacing * L.spacing));
      const pts = [];
      for (let i = 0; i < n; i++) {
        const a = Math.random() * Math.PI * 2;
        pts.push({ x: Math.random() * W, y: Math.random() * H, vx: Math.cos(a) * L.speed, vy: Math.sin(a) * L.speed, r: L.node * (.6 + Math.random() * .8), tw: Math.random() * 6.28 });
      }
      return { L, pts };
    });
  }

  // smooth flowing visibility field in [0,1]
  function field(x, y, t, ph) {
    const v = Math.sin(x * .0042 + t * .00011 + ph) * Math.cos(y * .0051 - t * .00008 + ph * 1.7)
            + .6 * Math.sin((x + y) * .0023 - t * .00006 + ph * .5);
    return Math.max(0, Math.min(1, (v + .35) / 1.4));
  }

  function frame(t) {
    ctx.clearRect(0, 0, W, H);
    const tint = window.ArdWeb && window.ArdWeb.rgb, light = !!(tint && window.ArdWeb.light);
    for (const { L, pts } of layers) {
      const rgb = tint || L.rgb, boost = light ? 1.15 : 1;
      const link2 = L.link * L.link;
      for (const p of pts) {
        if (!still) {
          p.x += p.vx; p.y += p.vy;
          if (p.x < -40) p.x = W + 40; else if (p.x > W + 40) p.x = -40;
          if (p.y < -40) p.y = H + 40; else if (p.y > H + 40) p.y = -40;
        }
        p.f = field(p.x, p.y, t, L.phase);
      }
      ctx.lineWidth = .8;
      for (let i = 0; i < pts.length; i++) {
        const a = pts[i]; if (a.f < .02) continue;
        for (let j = i + 1; j < pts.length; j++) {
          const b = pts[j]; if (b.f < .02) continue;
          const dx = a.x - b.x, dy = a.y - b.y, d2 = dx * dx + dy * dy;
          if (d2 > link2) continue;
          const k = (1 - d2 / link2) * Math.min(a.f, b.f) * L.alpha * boost;
          if (k < .01) continue;
          ctx.strokeStyle = `rgba(${rgb},${k.toFixed(3)})`;
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
        }
      }
      const spr = sprite(rgb, light);
      for (const p of pts) {
        if (p.f < .05) continue;
        const tw = .65 + .35 * Math.sin(t * .0015 + p.tw);
        ctx.globalAlpha = Math.min(1, p.f * L.alpha * 3.2 * tw * (light ? .7 : 1));
        const s = p.r * 10;
        ctx.drawImage(spr, p.x - s / 2, p.y - s / 2, s, s);
      }
      ctx.globalAlpha = 1;
    }
    if (!still) requestAnimationFrame(frame);
  }

  let rt; addEventListener("resize", () => { clearTimeout(rt); rt = setTimeout(build, 200); });
  build(); requestAnimationFrame(frame);
})();
