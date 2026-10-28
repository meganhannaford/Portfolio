(function () {
  if (window.__mhReveal) return; window.__mhReveal = true;
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var seen = new WeakSet();
  var io = new IntersectionObserver(function (entries) {
    var n = 0;
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      if (e.target.hasAttribute('data-rise') && e.target.parentElement) { var pr = e.target.parentElement.getBoundingClientRect(); if (pr.bottom > window.innerHeight * 0.92) return; }
      var el = e.target; io.unobserve(el);
      el.style.transitionDelay = (n++ * 90) + 'ms';
      el.style.opacity = '1'; el.style.transform = 'none';
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: [0, 0.08, 0.25, 0.5, 0.75, 1] });
  window.addEventListener('scroll', function () { document.querySelectorAll('[data-rise]').forEach(function (el) { if (el.style.transform === 'none' || !el.parentElement) return; var pr = el.parentElement.getBoundingClientRect(); if (pr.bottom <= window.innerHeight * 0.92 && pr.bottom > 0) { el.style.transform = 'none'; io.unobserve(el); } }); }, { passive: true });
  function scan() {
    document.querySelectorAll('img, video').forEach(function (el) {
      if (seen.has(el) || el.closest('header, footer, nav, [data-no-reveal]')) return;
      seen.add(el);
      if (el.hasAttribute('data-rise')) {
        el.style.transform = 'translateY(100%)';
        el.style.transition = 'transform 1100ms cubic-bezier(.22,.61,.36,1)';
      } else {
        el.style.opacity = '0';
        el.style.transform = 'translateY(28px)';
        el.style.transition = 'opacity 700ms cubic-bezier(.22,.61,.36,1), transform 700ms cubic-bezier(.22,.61,.36,1)';
      }
      el.style.willChange = 'opacity, transform';
      io.observe(el);
    });
  }
  function start() { scan(); new MutationObserver(scan).observe(document.body, { childList: true, subtree: true }); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
})();
