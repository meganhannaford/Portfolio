(function(){
  if (window.__mhLightbox) return; window.__mhLightbox = true;
  var ov, im, cap, ctr, list = [], idx = 0;
  function eligible(t){
    if (!t || t.tagName !== 'IMG') return false;
    if (t.closest('a,button,header,nav,footer,[data-no-zoom],[role="dialog"]')) return false;
    if (t.hasAttribute('data-flat') || t.getAttribute('aria-hidden') === 'true') return false;
    var r = t.getBoundingClientRect();
    return r.width >= 120 && r.height >= 80;
  }
  function collect(){
    var seen = {}, out = [];
    document.querySelectorAll('img').forEach(function(t){
      if (!eligible(t)) return;
      var src = t.currentSrc || t.src; if (seen[src]) return; seen[src] = 1;
      out.push({ src: src, alt: t.alt || '' });
    });
    return out;
  }
  function btn(label, html, css){
    var b = document.createElement('button'); b.type = 'button'; b.setAttribute('aria-label', label); b.innerHTML = html;
    b.style.cssText = 'position:fixed;z-index:2;border:1px solid rgba(242,243,251,0.28);border-radius:999px;background:transparent;color:rgba(242,243,251,0.78);cursor:pointer;display:grid;place-items:center;font:600 11px/1 Archivo,sans-serif;letter-spacing:0.12em;text-transform:uppercase;transition:color 120ms,border-color 120ms,background 120ms;' + css;
    b.addEventListener('mouseenter', function(){ b.style.color = '#F2F3FB'; b.style.borderColor = 'rgba(242,243,251,0.6)'; b.style.background = 'rgba(242,243,251,0.08)'; });
    b.addEventListener('mouseleave', function(){ b.style.color = 'rgba(242,243,251,0.78)'; b.style.borderColor = 'rgba(242,243,251,0.28)'; b.style.background = 'transparent'; });
    return b;
  }
  function show(){
    var it = list[idx]; im.src = it.src; im.alt = it.alt;
    im.style.boxShadow = '0 20px 60px rgba(0,0,0,0.4)'; im.style.borderRadius = '8px';
    var probe = new Image(); probe.onload = function(){ try {
      var c = document.createElement('canvas'); c.width = 8; c.height = 8; var x = c.getContext('2d');
      x.drawImage(probe, 0, 0, probe.naturalWidth, probe.naturalHeight, 0, 0, 8, 8);
      var d = x.getImageData(0, 0, 8, 8).data;
      if (d[3] < 20 || d[31] < 20 || d[227] < 20 || d[255] < 20) { if (list[idx] === it) { im.style.boxShadow = 'none'; im.style.borderRadius = '0'; } }
    } catch(e){} }; probe.src = it.src;
    ctr.textContent = (idx + 1) + ' / ' + list.length;
    var multi = list.length > 1; ov.__p.style.display = ov.__n.style.display = multi ? 'grid' : 'none';
  }
  function go(d){ idx = (idx + d + list.length) % list.length; show(); }
  function close(){ if (ov){ ov.remove(); ov = null; document.documentElement.style.overflow = ''; } }
  function open(src){
    list = collect(); idx = Math.max(0, list.findIndex(function(x){ return x.src === src; }));
    if (!list.length) return;
    ov = document.createElement('div'); ov.setAttribute('role','dialog'); ov.setAttribute('aria-label','Image viewer');
    ov.style.cssText = 'position:fixed;inset:0;z-index:9999;background:rgba(12,12,14,0.94);display:flex;align-items:center;justify-content:center;padding:56px 64px;box-sizing:border-box;cursor:zoom-out';
    im = document.createElement('img');
    im.style.cssText = 'display:block;max-width:100%;max-height:100%;width:auto;height:auto;object-fit:contain;border-radius:8px;cursor:default;box-shadow:0 20px 60px rgba(0,0,0,0.4)';
    im.addEventListener('click', function(e){ e.stopPropagation(); });
    var x = btn('Close', 'Close', 'top:max(14px,env(safe-area-inset-top));right:14px;padding:8px 14px');
    var p = btn('Previous image', '&larr;', 'left:14px;top:50%;margin-top:-18px;width:36px;height:36px;font-size:15px');
    var n = btn('Next image', '&rarr;', 'right:14px;top:50%;margin-top:-18px;width:36px;height:36px;font-size:15px');
    ctr = document.createElement('div');
    ctr.style.cssText = 'position:fixed;left:50%;bottom:max(16px,env(safe-area-inset-bottom));transform:translateX(-50%);color:rgba(242,243,251,0.6);font:600 11px/1 Archivo,sans-serif;letter-spacing:0.14em';
    x.addEventListener('click', function(e){ e.stopPropagation(); close(); });
    p.addEventListener('click', function(e){ e.stopPropagation(); go(-1); });
    n.addEventListener('click', function(e){ e.stopPropagation(); go(1); });
    ov.addEventListener('click', close);
    var sx = null;
    ov.addEventListener('touchstart', function(e){ sx = e.touches[0].clientX; }, { passive: true });
    ov.addEventListener('touchend', function(e){ if (sx === null) return; var dx = e.changedTouches[0].clientX - sx; sx = null; if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1); });
    ov.__p = p; ov.__n = n;
    if (window.innerWidth < 640) ov.style.padding = '56px 8px 48px';
    ov.appendChild(im); ov.appendChild(x); ov.appendChild(p); ov.appendChild(n); ov.appendChild(ctr);
    document.body.appendChild(ov); document.documentElement.style.overflow = 'hidden';
    show();
  }
  function imgAt(e){
    var t = e.target;
    if (t && t.tagName === 'IMG') return t;
    if (t && t.closest && t.closest('a,button,input,textarea,select,header,nav,footer,[data-no-zoom],[role="dialog"]')) return null;
    var els = document.elementsFromPoint ? document.elementsFromPoint(e.clientX, e.clientY) : [];
    for (var i = 0; i < els.length; i++) { if (els[i].tagName === 'IMG') return els[i]; }
    return null;
  }
  document.addEventListener('click', function(e){
    if (ov) return;
    var t = imgAt(e);
    if (!eligible(t)) return;
    e.preventDefault(); e.stopPropagation(); open(t.currentSrc || t.src);
  }, true);
  document.addEventListener('keydown', function(e){
    if (!ov) return;
    if (e.key === 'Escape') close();
    else if (e.key === 'ArrowLeft') { e.stopPropagation(); go(-1); }
    else if (e.key === 'ArrowRight') { e.stopPropagation(); go(1); }
  }, true);
  var st = document.createElement('style');
  st.textContent = 'img:not([data-flat]):not(header img):not(nav img):not(footer img) { cursor: zoom-in; }';
  document.head.appendChild(st);
})();
