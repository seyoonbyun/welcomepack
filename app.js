/* eslint-disable no-console */

function clamp(num, min, max) {
  return Math.min(max, Math.max(min, num));
}

function svgPlaceholder(label) {
  const safe = String(label ?? "image").slice(0, 36);
  const svg = `
  <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="900" viewBox="0 0 1200 900">
    <defs>
      <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#eceef1"/>
        <stop offset="1" stop-color="#d9dde3"/>
      </linearGradient>
    </defs>
    <rect width="1200" height="900" fill="url(#g)"/>
    <rect x="70" y="70" width="1060" height="760" fill="none" stroke="#9aa3ad" stroke-width="6" opacity="0.35"/>
    <text x="50%" y="52%" dominant-baseline="middle" text-anchor="middle"
      font-family="Noto Sans KR, system-ui, -apple-system, Segoe UI, Roboto, Arial"
      font-size="44" fill="#5b6470" opacity="0.9">${safe}</text>
    <text x="50%" y="59%" dominant-baseline="middle" text-anchor="middle"
      font-family="Noto Sans KR, system-ui, -apple-system, Segoe UI, Roboto, Arial"
      font-size="22" fill="#5b6470" opacity="0.75">assets 폴더에 이미지를 넣으면 자동으로 교체됩니다</text>
  </svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg.trim())}`;
}

function wireImageFallbacks() {
  const imgs = document.querySelectorAll("img[data-fallback]");
  imgs.forEach((img) => {
    img.addEventListener(
      "error",
      () => {
        const label = img.getAttribute("data-fallback") || "image";
        img.src = svgPlaceholder(label);
      },
      { once: true }
    );
  });

  // Hero background image fallback (if hero.jpg missing)
  const heroBg = document.querySelector(".hero-bg");
  if (!heroBg) return;

  // Browser doesn't emit error events for CSS background-image,
  // so we use a small preload probe.
  const probe = new Image();
  probe.onload = () => {};
  probe.onerror = () => {
    heroBg.style.backgroundImage =
      "radial-gradient(1200px 620px at 50% 20%, rgba(255,255,255,0.18), transparent 55%), linear-gradient(135deg, rgba(0,0,0,0.72), rgba(0,0,0,0.2))";
  };
  probe.src = "./assets/hero.jpg";
}

function wireHeaderSolidOnScroll() {
  const header = document.querySelector(".site-header");
  if (!header) return;

  const onScroll = () => {
    const solid = window.scrollY > 40;
    header.classList.toggle("is-solid", solid);
    header.dataset.onHero = String(!solid);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

function wireSmoothAnchors() {
  const anchors = document.querySelectorAll('a[href^="#"]');
  anchors.forEach((a) => {
    a.addEventListener("click", (e) => {
      const href = a.getAttribute("href");
      if (!href || href === "#") return;
      const el = document.querySelector(href);
      if (!el) return;
      e.preventDefault();

      const headerH = document.querySelector(".site-header")?.offsetHeight ?? 0;
      const y =
        el.getBoundingClientRect().top + window.scrollY - clamp(headerH, 0, 88);
      window.scrollTo({ top: y, behavior: "smooth" });
    });
  });
}

function wireToTop() {
  const btn = document.getElementById("toTop");
  if (!btn) return;

  const onScroll = () => {
    btn.classList.toggle("is-on", window.scrollY > 500);
  };
  onScroll();

  window.addEventListener("scroll", onScroll, { passive: true });
  btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

function wireReveal() {
  const els = Array.from(document.querySelectorAll(".reveal"));
  if (!els.length) return;

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-in");
        io.unobserve(entry.target);
      });
    },
    { threshold: 0.16, rootMargin: "0px 0px -8% 0px" }
  );

  els.forEach((el) => io.observe(el));
}

document.addEventListener("DOMContentLoaded", () => {
  wireImageFallbacks();
  wireHeaderSolidOnScroll();
  wireSmoothAnchors();
  wireToTop();
  wireReveal();
});


