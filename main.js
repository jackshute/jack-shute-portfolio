/* Page behaviour: fills in the case studies, nav colour, scroll reveals.
   You shouldn't need to edit this file to add new work. */
(function () {
  var indexEl = document.getElementById('work-index');
  var listEl = document.getElementById('case-studies');

  // Add ?drafts to the page address to preview archivedStats
  var showDrafts = /[?&]drafts\b/.test(location.search);
  var built = window.buildWork(window.CASE_STUDIES, showDrafts);

  // index.html already contains a pre-built copy of the work section, so
  // search engines and link previews can read it without running JavaScript.
  // Only replace it if case-studies.js has changed since that copy was made.
  function update(el, markup) {
    var fresh = document.createElement('div');
    fresh.innerHTML = markup;
    var current = el.innerHTML.replace(/<!--[\s\S]*?-->/g, ''); // ignore the BUILD markers
    if (fresh.innerHTML !== current) el.innerHTML = markup;
  }
  update(indexEl, built.index);
  update(listEl, built.html);
  document.getElementById('year').textContent = new Date().getFullYear();

  /* ---- Nav: switch colour when over light sections ---- */
  var nav = document.getElementById('nav');
  var darkSections = document.querySelectorAll('.hero, .contact, .case__band');
  function updateNav() {
    var y = 40;
    var onDark = false;
    darkSections.forEach(function (s) {
      var r = s.getBoundingClientRect();
      if (r.top <= y && r.bottom > y) onDark = true;
    });
    nav.classList.toggle('nav--light', !onDark);
  }
  window.addEventListener('scroll', updateNav, { passive: true });
  window.addEventListener('resize', updateNav);
  updateNav();

  /* ---- Gentle reveal on scroll ---- */
  var items = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    items.forEach(function (el) { el.classList.add('is-in'); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });
  items.forEach(function (el) { io.observe(el); });
})();
