/* ArdSoft Solutions — Portfolio page behaviour
   1) scroll-driven palette (background, text, web tint, ambient glows) from data-bg / data-fg / data-net / data-b1 / data-b2
   2) case constellations: parallax (scroll + cursor) and the live "network" lines between text and screenshots
   3) video loops that only load/play while visible, 4) case details toggles, 5) lightbox, 6) localised <title>/meta.
   To add a case: copy an <article class="case"> block in portfolio.html, give it its own data-* palette,
   add images under img/portfolio/<case>/ and its text keys (cN_*) to portfolio-i18n.js. No JS changes needed. */
(function () {
  const body = document.body;
  const still = matchMedia("(prefers-reduced-motion:reduce)").matches;
  const fine = matchMedia("(hover:hover) and (pointer:fine)").matches;
  const saveData = !!(navigator.connection && navigator.connection.saveData);
  const t = k => (window.ArdSoft ? ArdSoft.t(k) : "");

  /* ---------- colour helpers (mixing in OKLab keeps transitions clean, no muddy greys) ---------- */
  const hex = h => [1, 3, 5].map(i => parseInt(h.slice(i, i + 2), 16));
  const lin = c => { c /= 255; return c <= .04045 ? c / 12.92 : Math.pow((c + .055) / 1.055, 2.4); };
  const gam = c => { c = c <= .0031308 ? 12.92 * c : 1.055 * Math.pow(c, 1 / 2.4) - .055; return Math.round(Math.max(0, Math.min(1, c)) * 255); };
  function toLab([r, g, b]) {
    r = lin(r); g = lin(g); b = lin(b);
    const l = Math.cbrt(.4122214708 * r + .5363325363 * g + .0514459929 * b),
          m = Math.cbrt(.2119034982 * r + .6806995451 * g + .1073969566 * b),
          s = Math.cbrt(.0883024619 * r + .2817188376 * g + .6299787005 * b);
    return [.2104542553 * l + .793617785 * m - .0040720468 * s, 1.9779984951 * l - 2.428592205 * m + .4505937099 * s, .0259040371 * l + .7827717662 * m - .808675766 * s];
  }
  function fromLab([L, a, b]) {
    const l = Math.pow(L + .3963377774 * a + .2158037573 * b, 3), m = Math.pow(L - .1055613458 * a - .0638541728 * b, 3), s = Math.pow(L - .0894841775 * a - 1.291485548 * b, 3);
    return [gam(4.0767416621 * l - 3.3077115913 * m + .2309699292 * s), gam(-1.2684380046 * l + 2.6097574011 * m - .3413193965 * s), gam(-.0041960863 * l - .7034186147 * m + 1.707614701 * s)];
  }
  const mix = (A, B, k) => A.map((v, i) => v + (B[i] - v) * k);
  const luminance = rgb => { const [r, g, b] = rgb.map(lin); return .2126 * r + .7152 * g + .0722 * b; };
  const smooth = x => x * x * (3 - 2 * x);

  /* ---------- 1. scroll-driven palette ---------- */
  const zones = [...document.querySelectorAll("[data-bg]")].map(el => {
    const bg = hex(el.dataset.bg), fg = hex(el.dataset.fg);
    return { el, lab: toLab(bg), bg, fg, net: el.dataset.net.split(",").map(Number), b1: el.dataset.b1, b2: el.dataset.b2, light: luminance(bg) > .4 };
  });
  window.ArdWeb = window.ArdWeb || {};
  let lastZone = -1, lastFg = "", lastLight = null;

  function paint() {
    const vc = innerHeight / 2, EDGE = .16;
    let i = zones.length - 1, p = 1;
    for (let k = 0; k < zones.length; k++) {
      const r = zones[k].el.getBoundingClientRect();
      if (r.bottom >= vc) { i = k; p = Math.max(0, Math.min(1, (vc - r.top) / Math.max(1, r.height))); break; }
    }
    let a = zones[i], b = a, k = 0;
    if (p < EDGE && i > 0) { a = zones[i - 1]; b = zones[i]; k = .5 + p / (2 * EDGE); }
    else if (p > 1 - EDGE && i < zones.length - 1) { a = zones[i]; b = zones[i + 1]; k = (p - (1 - EDGE)) / (2 * EDGE); }
    k = smooth(Math.max(0, Math.min(1, k)));
    const bg = fromLab(mix(a.lab, b.lab, k));
    const near = k < .5 ? a : b;
    const light = luminance(bg) > .36;
    body.style.setProperty("--pf-bg", `rgb(${bg.join(",")})`);
    const fg = (light ? (a.light ? a : b) : (a.light ? b : a)).fg.join(",");
    if (fg !== lastFg) { body.style.setProperty("--pf-fg", `rgb(${fg})`); body.style.setProperty("--pf-fg-rgb", fg); lastFg = fg; }
    if (light !== lastLight) { body.classList.toggle("is-light", light); lastLight = light; }
    const net = mix(a.net, b.net, k).map(v => Math.round(v / 12) * 12); // quantised: the web caches one sprite per colour
    window.ArdWeb.rgb = net.join(","); window.ArdWeb.light = light;
    const zi = zones.indexOf(near);
    if (zi !== lastZone) { body.style.setProperty("--pf-b1", near.b1); body.style.setProperty("--pf-b2", near.b2); lastZone = zi; }
  }

  /* ---------- 2. case constellations ---------- */
  const NS = "http://www.w3.org/2000/svg";
  const cases = [...document.querySelectorAll(".case")].map(el => {
    const stage = el.querySelector(".case-stage"), text = el.querySelector(".case-text"), wrap = el.querySelector(".case-shots"), svg = el.querySelector(".case-links");
    const shots = [...el.querySelectorAll(".shot")].map(s => ({ el: s, d: parseFloat(getComputedStyle(s).getPropertyValue("--d")) || .5, x: 0, y: 0 }));
    const mk = (tag, cls) => { const n = document.createElementNS(NS, tag); if (cls) n.setAttribute("class", cls); svg.appendChild(n); return n; };
    const order = shots.slice().sort((a, b) => a.el.offsetTop - b.el.offsetTop);
    const mesh = order.slice(1).map(() => mk("path", "mesh"));
    const links = shots.map(() => mk("path"));
    const dots = shots.map(() => { const c = mk("circle"); c.setAttribute("r", "2.6"); return c; });
    const hub = mk("circle", "hub"); hub.setAttribute("r", "4");
    return { el, stage, text, wrap, svg, shots, order, mesh, links, dots, hub, flip: el.classList.contains("case--flip"), visible: false };
  });

  let mx = 0, my = 0;
  if (fine && !still) addEventListener("pointermove", e => { mx = e.clientX / innerWidth * 2 - 1; my = e.clientY / innerHeight * 2 - 1; }, { passive: true });

  function updateCase(c, snap) {
    const wide = innerWidth > 900;
    const r = c.stage.getBoundingClientRect();
    const prog = Math.max(-1.2, Math.min(1.2, (innerHeight / 2 - (r.top + r.height / 2)) / innerHeight));
    for (const s of c.shots) {
      let tx = 0, ty = 0;
      if (!still) {
        ty = -prog * (wide ? 110 : 34) * s.d;
        if (wide) { tx = mx * 24 * s.d; ty += my * 14 * s.d; }
      }
      s.x += (tx - s.x) * (snap ? 1 : .09); s.y += (ty - s.y) * (snap ? 1 : .09);
      s.el.style.transform = `translate3d(${s.x.toFixed(1)}px,${s.y.toFixed(1)}px,0)`;
    }
    if (!wide) return;
    const ox = c.wrap.offsetLeft, oy = c.wrap.offsetTop;
    const ax = c.flip ? c.text.offsetLeft - 18 : c.text.offsetLeft + c.text.offsetWidth + 18;
    const ay = c.text.offsetTop + c.text.offsetHeight / 2;
    const P = s => ({ x: ox + s.el.offsetLeft + s.el.offsetWidth / 2 + s.x, y: oy + s.el.offsetTop + s.y, hw: s.el.offsetWidth / 2, hh: s.el.offsetHeight / 2 });
    c.hub.setAttribute("cx", ax); c.hub.setAttribute("cy", ay);
    c.shots.forEach((s, i) => {
      const q = P(s), dx = q.x - ax, dy = q.y - ay;
      c.links[i].setAttribute("d", `M${ax.toFixed(1)} ${ay.toFixed(1)}L${q.x.toFixed(1)} ${q.y.toFixed(1)}`);
      const f = 1 - Math.min(dx ? q.hw / Math.abs(dx) : 1, dy ? q.hh / Math.abs(dy) : 1, 1); // where the link meets the screenshot edge
      c.dots[i].setAttribute("cx", (ax + dx * f).toFixed(1)); c.dots[i].setAttribute("cy", (ay + dy * f).toFixed(1));
    });
    c.order.slice(1).forEach((s, i) => {
      const a = P(c.order[i]), b = P(s);
      c.mesh[i].setAttribute("d", `M${a.x.toFixed(1)} ${a.y.toFixed(1)}L${b.x.toFixed(1)} ${b.y.toFixed(1)}`);
    });
  }

  const io = new IntersectionObserver(es => es.forEach(e => { const c = cases.find(c => c.el === e.target); if (c) c.visible = e.isIntersecting; }), { rootMargin: "20% 0px" });
  cases.forEach(c => io.observe(c.el));

  let ticking = false;
  function loop() {
    paint();
    cases.forEach(c => { if (c.visible) updateCase(c); });
    if (!still) requestAnimationFrame(loop);
  }
  if (still) {
    const once = () => { if (ticking) return; ticking = true; requestAnimationFrame(() => { ticking = false; paint(); cases.forEach(c => updateCase(c, true)); }); };
    addEventListener("scroll", once, { passive: true }); addEventListener("resize", once);
    paint(); cases.forEach(c => updateCase(c, true));
  } else {
    cases.forEach(c => updateCase(c, true));
    requestAnimationFrame(loop);
  }
  addEventListener("resize", () => cases.forEach(c => updateCase(c, true)));

  /* ---------- 3. video loops ---------- */
  const vids = [...document.querySelectorAll(".shot-video")];
  if (!still && !saveData && "IntersectionObserver" in window) {
    const vio = new IntersectionObserver(es => es.forEach(e => {
      const v = e.target;
      if (e.isIntersecting) {
        if (!v.src) { v.src = v.dataset.src; v.addEventListener("playing", () => v.classList.add("on"), { once: true }); }
        const pr = v.play(); if (pr && pr.catch) pr.catch(() => {});
      } else if (!v.paused) v.pause();
    }), { threshold: .35 });
    vids.forEach(v => vio.observe(v));
  } else vids.forEach(v => v.remove());

  /* ---------- 4. case details ---------- */
  document.querySelectorAll(".case-more").forEach(btn => {
    const panel = document.getElementById(btn.getAttribute("aria-controls")), label = btn.querySelector("span");
    btn.addEventListener("click", () => {
      const open = btn.getAttribute("aria-expanded") !== "true";
      btn.setAttribute("aria-expanded", open);
      panel.hidden = !open;
      label.dataset.i18n = open ? "pf_hide" : "pf_details";
      label.textContent = t(label.dataset.i18n);
      const c = cases.find(c => c.el.contains(btn)); if (c) requestAnimationFrame(() => updateCase(c, true));
    });
  });

  /* ---------- 5. lightbox ---------- */
  const lb = document.getElementById("lightbox"), lbImg = document.getElementById("lb-img"), lbCap = document.getElementById("lb-cap");
  let group = [], idx = 0, opener = null;
  function show(i) {
    idx = (i + group.length) % group.length;
    const s = group[idx], img = s.querySelector("img"), title = s.closest(".case").querySelector(".case-title").textContent;
    lbImg.src = s.dataset.full; lbImg.alt = img.alt;
    lbCap.textContent = `${title} — ${img.alt}  (${idx + 1}/${group.length})`;
  }
  if (lb && lb.showModal) {
    document.querySelectorAll(".shot").forEach(s => s.addEventListener("click", () => {
      group = [...s.closest(".case").querySelectorAll(".shot")]; opener = s;
      show(group.indexOf(s)); lb.showModal();
    }));
    lb.addEventListener("click", e => {
      const b = e.target.closest("[data-act]");
      if (b) { const a = b.dataset.act; if (a === "close") lb.close(); else show(idx + (a === "next" ? 1 : -1)); }
      else if (e.target === lb) lb.close();
    });
    lb.addEventListener("keydown", e => { if (e.key === "ArrowRight") show(idx + 1); else if (e.key === "ArrowLeft") show(idx - 1); });
    lb.addEventListener("close", () => { lbImg.removeAttribute("src"); if (opener) opener.focus(); });
  } else document.querySelectorAll(".shot").forEach(s => s.addEventListener("click", () => window.open(s.dataset.full, "_blank", "noopener")));

  /* ---------- 6. localised title & description ---------- */
  if (window.ArdSoft) ArdSoft.onLang(() => {
    const tt = t("pf_meta_title"), dd = t("pf_meta_desc");
    if (tt) document.title = tt;
    if (dd) document.querySelector('meta[name="description"]').setAttribute("content", dd);
  });
})();
