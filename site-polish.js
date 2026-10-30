(function(){
if (window.__mhPolish) return; window.__mhPolish = true;
var E='cubic-bezier(.22,.61,.36,1)';
var RM = matchMedia('(prefers-reduced-motion: reduce)').matches;
var HOME='index.html';

var css = `
/* 1 type: unified label + nav spec */
header nav > a, header nav .wdd > a { font: 600 12px/1.2 Archivo, sans-serif !important; letter-spacing: 0.1em !important; }
h1, h2, h3 { text-wrap: balance; }
p { text-wrap: pretty; }

/* 4 tiles: zoom + label slides up */
.tile img { transition: transform 600ms ${E}; will-change: transform; }
.tile:hover img { transform: scale(1.045); }
html body .tile .tile-scrim { inset: auto 0 0 0 !important; display: flex !important; justify-content: flex-start !important; align-items: center !important; padding: 14px 18px !important; text-align: left !important; opacity: 1 !important; transform: translateY(101%); transition: transform 320ms ${E} !important; }
html body .tile .tile-scrim > span { align-items: flex-start !important; font-size: clamp(13px,1.05vw,17px) !important; padding-left: 0 !important; }
html body .tile .tile-scrim::after { content: "\\2192"; margin-left: auto; padding-left: 12px; font: 700 18px/1 Archivo, sans-serif; color: inherit; }
html body .tile:hover .tile-scrim, html body .tile:focus-visible .tile-scrim { transform: none; }
html body .tile .tile-scrim > span, html body .tile .tile-scrim::after { color: #3A2BF5; }

/* 6 scroll reveal */
[data-rv] { opacity: 0; transform: translateY(18px); transition: opacity 700ms ${E}, transform 700ms ${E}; }
[data-rv="on"] { opacity: 1; transform: none; }

/* 8 mini header */
#mh-bar { position: fixed; top: 0; left: 0; right: 0; z-index: 9000; background: rgba(58,43,245,0.96); -webkit-backdrop-filter: blur(10px); backdrop-filter: blur(10px); transform: translateY(-100%); transition: transform 320ms ${E}; }
#mh-bar.on { transform: none; }
#mh-bar > div { max-width: 1560px; margin: 0 auto; box-sizing: border-box; padding: 10px clamp(16px,1.6vw,28px); display: flex; align-items: center; justify-content: space-between; gap: 20px; }
#mh-bar .nm { font: 400 21px/0.82 'Oldport Script', Caster, 'Kaushan Script', cursive; color: #F972C3 !important; display: inline-flex; flex-direction: column; align-items: flex-start; padding: 2px 4px; transform: rotate(-8deg); transition: transform 240ms ${E}; white-space: nowrap; }
#mh-bar .nm span + span { padding-left: 0.55em; }
@media (max-width: 900px) { #mh-bar > div { padding-top: 14px; padding-bottom: 14px; } }
@media (min-width: 901px) { #mh-bar > div { padding-top: 21px; padding-bottom: 21px; } #mh-bar .nm { font-size: 25px; } }
#mh-bar .nm:hover { transform: rotate(2deg) scale(1.06); }
#mh-bar nav { display: flex; gap: clamp(16px,2.4vw,32px); align-items: center; }
#mh-bar nav a { font: 600 12px/1.2 Archivo, sans-serif; letter-spacing: 0.1em; text-transform: uppercase; color: #F2F3FB !important; padding: 8px 0; background-image: linear-gradient(#E3F24A,#E3F24A); background-repeat: no-repeat; background-size: 0% 2px; background-position: 0 100%; transition: background-size 240ms ${E}; }
#mh-bar nav a:hover, #mh-bar nav a.cur { background-size: 100% 2px; }

/* 9 footer */
[data-ft-mail] { background-image: linear-gradient(currentColor,currentColor); background-repeat: no-repeat; background-size: 0% 3px; background-position: 50% 100%; padding-bottom: 6px; transition: background-size 320ms ${E}; }
[data-ft-mail]:hover { background-size: 100% 3px; }

/* 10 one hidden delight: footer name wiggles */
footer > div:has(> span + span) { transition: transform 300ms ${E}; }
footer > div:has(> span + span):hover { transform: rotate(-3deg) scale(1.05) !important; }


/* nav scales up on big screens instead of staying tiny */
@media (min-width: 1100px) {
  html body header nav > a, html body header nav .wdd > a { font-size: clamp(12px, 0.95vw, 18px) !important; }
  html body header nav { gap: clamp(28px, 2.4vw, 44px) !important; }
  html body .wdd-m a { font-size: clamp(12px, 0.85vw, 16px) !important; }
}
/* header nav underline (desktop hover + mobile tap + current page) */
header nav > a, header nav .wdd > a { background-image: linear-gradient(currentColor,currentColor); background-repeat: no-repeat; background-size: 0% 2px; background-position: 0 100%; padding-bottom: 5px !important; transition: background-size 240ms ${E}, opacity 200ms ${E}, transform 200ms ${E} !important; }
header nav > a:hover, header nav .wdd > a:hover, header nav > a:active, header nav .wdd > a:active, header nav > a:focus-visible, header nav .wdd > a:focus-visible, header nav a[data-cur] { background-size: 100% 2px; }
header nav > a:hover, header nav .wdd > a:hover { opacity: 1 !important; }
#mh-bar nav a:active, #mh-bar nav a:focus-visible { background-size: 100% 2px; }
/* dropdown escapes clipped headers */
html body .wdd .wdd-m[data-fixed] { position: fixed !important; z-index: 9500 !important; }
/* touch: no hover dropdown, so Work taps straight through */
@media (hover: none) { html body .wdd:is(:hover, :focus-within) .wdd-m, html body .wdd .wdd-m { display: none !important; } }
/* phones: stacked stagger items show without the scroll-linked fade (it could leave items invisible on some phones) */ @media (max-width: 760px) { html body [data-stagger] > * { animation: none !important; opacity: 1 !important; } } /* touch: tile labels always visible */
@media (hover: none) { html body .tile .tile-scrim { transform: none !important; } .tile:hover img { transform: none; } } /* touch: label strip covers the bottom, so lift each tile image by half the strip to centre the logo in the visible area */ @media (hover: none) { html body .tile > img { top: calc(var(--tile-strip, 46px) / -3.2) !important; bottom: auto !important; } }
@media (prefers-reduced-motion: reduce) { [data-rv] { opacity: 1 !important; transform: none !important; } .tile img, #mh-bar { transition: none !important; } }
`;
var st = document.createElement('style'); st.setAttribute('data-mh-polish',''); st.textContent = css;
(document.head || document.documentElement).appendChild(st);

function ready(fn){ if (document.readyState !== 'loading') setTimeout(fn, 0); else document.addEventListener('DOMContentLoaded', fn); }

ready(function(){
  /* tile strip height, used to lift tile images on touch screens */
  var tileStrip = function(){ document.querySelectorAll('.tile').forEach(function(t){ var sc = t.querySelector('.tile-scrim'); if (sc && sc.offsetHeight) t.style.setProperty('--tile-strip', sc.offsetHeight + 'px'); }); };
  tileStrip(); setTimeout(tileStrip, 400); setTimeout(tileStrip, 1500); addEventListener('resize', tileStrip);
  /* 8 mini header */
  var file = decodeURIComponent(location.pathname.split('/').pop() || '');
  if (!file) file = 'index.html'; else if (!/\.html$/.test(file)) file += '.html';
  var isHome = file === HOME, isAbout = file === 'about.html';
  var bar = document.createElement('div'); bar.id = 'mh-bar';
  bar.innerHTML = '<div><a class="nm" href="' + HOME + '" aria-label="Megan Hannaford, home"><span>Megan</span><span>Hannaford</span></a><nav>' +
    '<a href="' + (isHome ? '#work' : HOME + '#work') + '"' + (isHome || (!isAbout) ? ' class="cur"' : '') + '>Work</a>' +
    '<a href="about.html"' + (isAbout ? ' class="cur"' : '') + '>About</a>' +
    '<a href="mailto:meganlillihannaford@gmail.com">Contact</a></nav></div>';
  document.body.appendChild(bar);
  var pinned = !isHome;
  if (pinned) {
    bar.classList.add('on');
    var setH = function(){ document.documentElement.style.setProperty('--mh-bar-h', bar.offsetHeight + 'px'); }; setH(); addEventListener('resize', setH); setTimeout(setH, 300);
    var ps = document.createElement('style');
    ps.textContent = 'html body header nav { visibility: hidden !important; }';
    document.head.appendChild(ps);
  }
  if (file === 'extra-bits.html') {
    var hs = document.createElement('style');
    hs.textContent = '#mh-bar.over-hero { background: transparent !important; -webkit-backdrop-filter: none !important; backdrop-filter: none !important; box-shadow: none !important; border-color: transparent !important; transition: background 200ms ease; }';
    document.head.appendChild(hs);
    var heroCheck = function(){
      var h = document.querySelector('header[data-screen-label="Extra Bits hero"]');
      if (!h) return;
      bar.classList.toggle('over-hero', h.getBoundingClientRect().bottom > bar.offsetHeight);
    };
    addEventListener('scroll', heroCheck, { passive: true });
    addEventListener('resize', heroCheck);
    [0, 300, 1000, 2000].forEach(function(t){ setTimeout(heroCheck, t); });
  }
  function onScroll(){
    if (pinned) return;
    var hd = document.querySelector('header');
    var lim = hd ? hd.getBoundingClientRect().bottom + scrollY - 40 : 400;
    var y = scrollY, past = y > Math.max(lim, 200);
    if (!past) bar.classList.remove('on');
    else if (y < lastY - 4) bar.classList.add('on');
    else if (y > lastY + 4 && !bar.matches(':hover, :focus-within')) bar.classList.remove('on');
    if (Math.abs(y - lastY) > 4) lastY = y;
  }
  var lastY = scrollY;
  if (matchMedia('(hover: hover) and (pointer: fine)').matches) {
    addEventListener('mousemove', function(e){
      var hd = document.querySelector('header');
      var lim = hd ? hd.getBoundingClientRect().bottom + scrollY - 40 : 400;
      if (!pinned && e.clientY < 64 && scrollY > Math.max(lim, 200)) bar.classList.add('on');
    }, { passive: true });
  }
  addEventListener('scroll', onScroll, { passive: true }); onScroll();


  /* current-page underline in header nav (retry until DC renders) */
  function tagCur(){
    document.querySelectorAll('header nav').forEach(function(nv){
      var t = isAbout ? nv.querySelector(':scope > a[href="about.html"]') : (!isHome ? nv.querySelector('.wdd > a') : null);
      if (t) t.setAttribute('data-cur','');
    });
  }
  [0, 250, 800, 1600, 3000].forEach(function(t){ setTimeout(tagCur, t); });
  /* dropdown: delegated, position fixed so clipped headers don't cut it off */
  function place(e){
    var w = e.target && e.target.closest && e.target.closest('.wdd'); if (!w) return;
    var m = w.querySelector('.wdd-m'), a = w.querySelector(':scope > a'); if (!m || !a) return;
    var hd = w.closest('header'); if (!hd || getComputedStyle(hd).overflow === 'visible') return;
    var r = a.getBoundingClientRect(), mw = 264;
    var left = Math.max(8, Math.min(r.left - 19, innerWidth - mw - 8));
    m.setAttribute('data-fixed',''); m.style.top = r.bottom + 'px'; m.style.left = left + 'px';
  }
  document.addEventListener('pointerover', place, true);
  document.addEventListener('focusin', place, true);
  addEventListener('scroll', function(){ var ae = document.activeElement; if (ae && ae.closest && ae.closest('.wdd') && scrollY > 80) ae.blur(); }, { passive: true });
  /* 6 scroll reveal */
  if (RM || !('IntersectionObserver' in window)) return;
  var io = new IntersectionObserver(function(es){ es.forEach(function(en){ if (en.isIntersecting) { en.target.setAttribute('data-rv','on'); io.unobserve(en.target); } }); }, { rootMargin: '0px 0px -8% 0px' });
  function scan(){
    document.querySelectorAll('section img, section video, section iframe, main .tile').forEach(function(el){
      if (el.hasAttribute('data-rv') || el.closest('[data-rv], header, footer, #mh-bar, [data-lightbox], [role="dialog"]')) return;
      var r = el.getBoundingClientRect(); if (!r.width) return;
      if (r.top < innerHeight) return;
      el.setAttribute('data-rv',''); io.observe(el);
    });
  }
  setTimeout(scan, 250); setTimeout(scan, 1200);
});
})();
