/* ArdSoft Solutions — shared behaviour */
(function () {
  const LANGS = Object.keys(I18N);
  let lang = "en";
  const listeners = [];

  function store(k, v) {
    try { if (v !== undefined) localStorage.setItem(k, v); return localStorage.getItem(k); }
    catch (e) { return null; }
  }
  function fill(s) { return String(s).replace(/\{(\w+)\}/g, (m, k) => (k in COMPANY ? COMPANY[k] : m)); }
  function t(k) { return fill((I18N[lang] && I18N[lang][k]) || I18N.en[k] || ""); }

  function setLang(l) {
    if (!I18N[l]) l = "en";
    lang = l;
    document.documentElement.lang = l;
    document.querySelectorAll("[data-i18n]").forEach(el => { const v = t(el.dataset.i18n); if (v) el.textContent = v; });
    document.querySelectorAll("[data-i18n-html]").forEach(el => { const v = t(el.dataset.i18nHtml); if (v) el.innerHTML = v; });
    document.querySelectorAll("#langs button").forEach(b => b.classList.toggle("active", b.dataset.lang === l));
    store("ardsoft_lang", l);
    listeners.forEach(fn => fn(l));
  }
  window.ArdSoft = { t, fill, onLang: fn => { listeners.push(fn); fn(lang); }, get lang() { return lang; } };

  const fromUrl = new URLSearchParams(location.search).get("lang");
  const saved = store("ardsoft_lang");
  const browser = (navigator.language || "en").slice(0, 2).toLowerCase();
  setLang(LANGS.includes(fromUrl) ? fromUrl : LANGS.includes(saved) ? saved : LANGS.includes(browser) ? browser : "en");
  document.getElementById("langs").addEventListener("click", e => { const b = e.target.closest("button"); if (b) setLang(b.dataset.lang); });

  // Header & mobile menu
  const header = document.querySelector("header"), menu = document.getElementById("menu");
  const onScroll = () => header.classList.toggle("scrolled", scrollY > 20);
  addEventListener("scroll", onScroll, { passive: true }); onScroll();
  document.getElementById("burger").addEventListener("click", () => { menu.classList.toggle("open"); header.classList.toggle("menu-open"); });
  menu.addEventListener("click", e => { if (e.target.tagName === "A") { menu.classList.remove("open"); header.classList.remove("menu-open"); } });

  // Reveal on scroll
  const io = new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } }), { threshold: .12 });
  document.querySelectorAll(".reveal").forEach(el => io.observe(el));

  // Hover: cursor spotlight + gentle 3D tilt
  const fine = matchMedia("(hover:hover) and (pointer:fine)").matches;
  const still = matchMedia("(prefers-reduced-motion:reduce)").matches;
  document.querySelectorAll(".fx").forEach(el => {
    const max = parseFloat(el.dataset.tilt || 6);
    el.addEventListener("pointermove", e => {
      const r = el.getBoundingClientRect(), x = e.clientX - r.left, y = e.clientY - r.top;
      el.style.setProperty("--mx", x + "px"); el.style.setProperty("--my", y + "px");
      if (fine && !still && max > 0) {
        const rx = ((y / r.height) - .5) * -max, ry = ((x / r.width) - .5) * max;
        el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-4px)`;
      }
    });
    el.addEventListener("pointerleave", () => { el.style.transform = ""; });
  });

  const y = document.getElementById("year"); if (y) y.textContent = new Date().getFullYear();

  // Contact form → Web3Forms → Gmail
  const form = document.getElementById("form");
  if (form) {
    const statusEl = document.getElementById("f-status"), btn = document.getElementById("f-submit");
    form.addEventListener("submit", async e => {
      e.preventDefault();
      statusEl.className = "status";
      const f = form.elements, name = f["name"].value.trim(), email = f["email"].value.trim(), msg = f["message"].value.trim();
      if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !msg || !document.getElementById("f-consent").checked) {
        statusEl.classList.add("err"); statusEl.textContent = t("f_invalid"); return;
      }
      const data = Object.fromEntries(new FormData(form));
      data.language = lang.toUpperCase();
      data.consent = "Accepted privacy policy (" + new Date().toISOString() + ")";
      data.subject = "New request from ardsoftsolutions.com — " + name + (data.company ? " (" + data.company + ")" : "");
      data.replyto = email;
      btn.disabled = true; btn.textContent = t("f_sending");
      try {
        const r = await fetch("https://api.web3forms.com/submit", { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify(data) });
        const j = await r.json();
        if (!j.success) throw new Error(j.message);
        statusEl.classList.add("ok"); statusEl.textContent = t("f_ok"); form.reset();
      } catch (err) {
        statusEl.classList.add("err"); statusEl.textContent = t("f_err");
      } finally {
        btn.disabled = false; btn.textContent = t("f_submit");
      }
    });
  }
})();
