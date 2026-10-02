/* Builds the case study sections from case-studies.js.
   You shouldn't need to edit this file to add new work. */
(function () {
  var studies = window.CASE_STUDIES || [];
  var indexEl = document.getElementById('work-index');
  var listEl = document.getElementById('case-studies');

  function pad(n) { return (n < 10 ? '0' : '') + n; }

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  // Escapes text, picks out "Cannes Lion(s)" in gold, and turns \n into a line break
  function lions(s) {
    return esc(s)
      .replace(/Cannes(\s+)Lions?/gi, function (m) { return '<span class="gold">' + m + '</span>'; })
      .replace(/\n/g, '<br>');
  }

  // Stat figures can also break lines on one screen size only:
  //   |  breaks on phones only     ^  breaks on larger screens only
  function figure(s) {
    return lions(s)
      .replace(/\|/g, '<span class="br-phone"></span>')
      .replace(/\^/g, '<span class="br-wide"></span>');
  }

  function slug(s) {
    return String(s).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  }

  function paras(p, cls) {
    if (!p) return '';
    var list = Array.isArray(p) ? p : [p];
    return list.map(function (t) {
      return '<p' + (cls ? ' class="' + cls + '"' : '') + '>' + esc(t) + '</p>';
    }).join('');
  }

  // Accepts "https://vimeo.com/123", "https://vimeo.com/123/abcdef" or just "123"
  function parseVimeo(url) {
    var m = String(url).match(/(?:vimeo\.com\/(?:video\/)?)?(\d{5,})(?:\/([a-z0-9]+))?/i);
    if (!m) return null;
    var hashParam = String(url).match(/[?&]h=([a-z0-9]+)/i);
    return { id: m[1], hash: m[2] || (hashParam && hashParam[1]) || '' };
  }

  function film(f, big) {
    var v = parseVimeo(f.video);
    if (!v) return '';
    var src = 'https://player.vimeo.com/video/' + v.id +
      '?dnt=1&title=0&byline=0&portrait=0&color=F95831' + (v.hash ? '&h=' + v.hash : '');
    var watch = 'https://vimeo.com/' + v.id + (v.hash ? '/' + v.hash : '');
    return '' +
      '<figure class="film' + (big ? ' film--big' : '') + ' reveal">' +
        '<div class="film__frame">' +
          '<iframe src="' + src + '" loading="lazy" title="' + esc(f.title) + '"' +
          ' allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>' +
        '</div>' +
        '<figcaption>' +
          '<span class="film__title">' + lions(f.title) + '</span>' +
          '<a class="film__link" href="' + watch + '" target="_blank" rel="noopener">Vimeo ↗</a>' +
          (f.description ? '<span class="film__desc">' + esc(f.description) + '</span>' : '') +
        '</figcaption>' +
      '</figure>';
  }

  // Add ?drafts to the page address to preview archivedStats
  var showDrafts = /[?&]drafts\b/.test(location.search);

  function statsList(list, draft) {
    if (!list || !list.length) return '';
    var items = list.map(function (s) {
      var wordy = String(s[0]).length > 6; // e.g. "Brand of the Year" — set smaller than a number
      return '<li><span class="stat__num' + (wordy ? ' stat__num--text' : '') + '">' + figure(s[0]) + '</span>' +
        '<span class="stat__text"><span class="stat__label">' + figure(s[1]) + '</span>' +
        (s[2] ? '<span class="stat__note">' + esc(s[2]) + '</span>' : '') + '</span></li>';
    }).join('');
    return '<div class="wrap">' +
      (draft ? '<p class="stats__draft">Archived — hidden on the live site</p>' : '') +
      '<ul class="stats stats--' + Math.min(list.length, 4) + ' reveal">' + items + '</ul></div>';
  }

  function feature(ft) {
    if (!ft) return '';
    return '' +
      '<div class="feature">' +
        '<div class="wrap">' +
          '<h4 class="feature__title reveal">' + esc(ft.title) + '</h4>' +
        '</div>' +
        '<div class="wrap wrap--wide">' + film({ title: ft.title, video: ft.video }, true) + '</div>' +
        '<div class="wrap feature__grid">' +
          (ft.quote ? '<blockquote class="quote reveal"><p>“' + esc(ft.quote.text) + '”</p><cite>' + esc(ft.quote.by) + '</cite></blockquote>' : '') +
          '<div class="feature__body reveal">' + paras(ft.description) + '</div>' +
        '</div>' +
        statsList(ft.stats) +
      '</div>';
  }

  var index = '';
  var html = '';

  studies.forEach(function (cs, i) {
    var n = pad(i + 1);
    var id = slug(cs.client);
    var films = cs.films || [];
    var cols = Math.min(films.length, 4);

    index +=
      '<li><a href="#' + id + '">' +
        '<span class="index__num">' + n + '</span>' +
        '<span class="index__client">' + esc(cs.client) + '</span>' +
        '<span class="index__tag">' + esc(cs.tagline || '') + '</span>' +
        '<span class="index__arrow" aria-hidden="true">↓</span>' +
      '</a></li>';

    html +=
      '<article class="case" id="' + id + '">' +
        '<div class="case__band case__band--' + (i % 4 + 1) + '">' +
          '<div class="case__glow" aria-hidden="true"></div>' +
          '<div class="wrap">' +
            '<header class="case__head reveal">' +
              '<span class="case__num">' + n + '</span>' +
              '<span class="eyebrow eyebrow--light">' + esc(cs.role || '') + '</span>' +
            '</header>' +
            '<h3 class="case__title reveal">' + esc(cs.client) +
              (cs.tagline ? '<em>' + esc(cs.tagline) + '</em>' : '') + '</h3>' +
          '</div>' +
        '</div>' +
        '<div class="wrap">' +
          '<div class="case__intro reveal">' + paras(cs.intro) + '</div>' +
        '</div>' +
        (cs.image ? '<div class="wrap wrap--wide"><img class="case__image reveal" src="' + esc(cs.image) + '" alt="' + esc(cs.client) + '" loading="lazy"></div>' : '') +
        feature(cs.feature) +
        (films.length ?
          '<div class="wrap' + (films.length === 1 ? ' wrap--wide' : '') + '">' +
            (cs.feature ? '<h4 class="films__label reveal">More from the series</h4>' : '') +
            '<div class="films films--' + cols + '">' +
              films.map(function (f) { return film(f, films.length === 1); }).join('') +
            '</div>' +
          '</div>' : '') +
        (cs.stats ? statsList(cs.stats) : showDrafts ? statsList(cs.archivedStats, true) : '') +
      '</article>';
  });

  indexEl.innerHTML = index;
  listEl.innerHTML = html;
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
