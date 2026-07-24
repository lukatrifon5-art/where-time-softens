// Where Time Softens — interactions, minimal and dependency-free.
//   1. Load sequence — hero settles out of a soft blur
//   2. Scroll reveals — long-ease fade + gentle un-blur (page-wide "softening")
//   3. Daylight — a warm wash that deepens as you scroll (time, passing)

(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- 3. Daylight (scroll progress → --day: 0..1) ---------- */
  (function daylight() {
    var root = document.documentElement;
    var ticking = false;
    function update() {
      var max = document.documentElement.scrollHeight - window.innerHeight;
      var p = max > 0 ? window.scrollY / max : 0;
      root.style.setProperty("--day", (p < 0 ? 0 : p > 1 ? 1 : p).toFixed(3));
      ticking = false;
    }
    function onScroll() {
      if (!ticking) { ticking = true; requestAnimationFrame(update); }
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    update();
  })();

  /* ---------- 1. Load sequence ---------- */
  function markLoaded() { document.body.classList.add("loaded"); }
  if (document.readyState === "complete") {
    requestAnimationFrame(markLoaded);
  } else {
    window.addEventListener("load", function () { requestAnimationFrame(markLoaded); });
    // Fallback so the hero never stays hidden if 'load' is slow.
    setTimeout(markLoaded, 1400);
  }

  /* ---------- 2. Scroll reveals ---------- */
  (function reveals() {
    var targets = document.querySelectorAll(".reveal");
    if (!targets.length) return;

    if (reduceMotion || !("IntersectionObserver" in window)) {
      targets.forEach(function (el) { el.classList.add("in-view"); });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    targets.forEach(function (el) { observer.observe(el); });
  })();
})();
