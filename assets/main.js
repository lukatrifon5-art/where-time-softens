// Where Time Softens — interactions, minimal and dependency-free.
//   1. Load sequence — hero settles out of a soft blur
//   2. Scroll reveals — long-ease fade + gentle un-blur, staggered

(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

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
