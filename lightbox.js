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
    var it = list[idx]; zs = 1; zx = 0; zy = 0; if (im) { im.style.transition = 'none'; im.style.transform = 'none'; } im.src = it.src; im.alt = it.alt;
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

  // --- touch zoom: pinch, double-tap, drag when zoomed; swipe only when not zoomed ---
  var zs = 1, zx = 0, zy = 0, quietUntil = 0, g = null, lastTap = 0, lastTapX = 0, lastTapY = 0;
  function zApply(anim){ if (!im) return; im.style.transition = anim ? 'transform 260ms cubic-bezier(.22,.61,.36,1)' : 'none'; im.style.transform = 'translate(' + zx + 'px,' + zy + 'px) scale(' + zs + ')'; }
  function zBase(){ var r = im.getBoundingClientRect(); return { cx: r.left + r.width / 2 - zx, cy: r.top + r.height / 2 - zy, w: r.width / zs, h: r.height / zs }; }
  function zClamp(b){
    var mx = Math.max(0, (b.w * zs - window.innerWidth) / 2), my = Math.max(0, (b.h * zs - window.innerHeight) / 2);
    if (zs <= 1.01) { zs = 1; zx = 0; zy = 0; return; }
    // keep the image centred on an axis where it still fits the screen
    var fx = Math.max(0, (b.w * zs - b.w) / 2) , fy = Math.max(0, (b.h * zs - b.h) / 2);
    mx = Math.max(mx, Math.min(fx, Math.abs(window.innerWidth / 2 - b.cx) + mx)); my = Math.max(my, Math.min(fy, Math.abs(window.innerHeight / 2 - b.cy) + my));
    zx = Math.max(-mx, Math.min(mx, zx)); zy = Math.max(-my, Math.min(my, zy));
  }
  function zReset(anim){ zs = 1; zx = 0; zy = 0; zApply(anim); }
  function zZoomAt(px, py, ns){ var b = zBase(); var lx = (px - b.cx - zx) / zs, ly = (py - b.cy - zy) / zs; zs = ns; zx = px - b.cx - lx * zs; zy = py - b.cy - ly * zs; zClamp(b); }
  function dist(t){ var dx = t[0].clientX - t[1].clientX, dy = t[0].clientY - t[1].clientY; return Math.sqrt(dx * dx + dy * dy); }
  function mid(t){ return { x: (t[0].clientX + t[1].clientX) / 2, y: (t[0].clientY + t[1].clientY) / 2 }; }
  function onTS(e){
    if (e.target && e.target.closest && e.target.closest('button')) return;
    var t = e.touches;
    if (t.length >= 2) {
      var m = mid(t), b = zBase();
      g = { mode: 'pinch', d0: dist(t), s0: zs, lx: (m.x - b.cx - zx) / zs, ly: (m.y - b.cy - zy) / zs, multi: true };
      e.preventDefault();
    } else if (t.length === 1) {
      g = { mode: zs > 1.01 ? 'pan' : 'swipe', x0: t[0].clientX, y0: t[0].clientY, tx0: zx, ty0: zy, moved: false, multi: g && g.multi && g.mode === 'pinch' ? true : false, t0: Date.now() };
    }
  }
  function onTM(e){
    if (!g) return; var t = e.touches; e.preventDefault();
    if (g.mode === 'pinch' && t.length >= 2) {
      var m = mid(t), b = zBase();
      zs = Math.max(1, Math.min(5, g.s0 * dist(t) / g.d0));
      zx = m.x - b.cx - g.lx * zs; zy = m.y - b.cy - g.ly * zs;
      if (zs <= 1.01) { zx = 0; zy = 0; }
      zApply(false);
    } else if (t.length === 1) {
      var dx = t[0].clientX - g.x0, dy = t[0].clientY - g.y0;
      if (Math.abs(dx) > 8 || Math.abs(dy) > 8) g.moved = true;
      if (g.mode === 'pan') { zx = g.tx0 + dx; zy = g.ty0 + dy; zClamp(zBase()); zApply(false); }
      else if (g.mode === 'swipe' && !g.multi) { im.style.transition = 'none'; im.style.transform = 'translateX(' + dx * 0.6 + 'px)'; }
    }
  }
  function onTE(e){
    if (!g) return;
    var t = e.touches, c = e.changedTouches[0];
    if (g.mode === 'pinch') {
      quietUntil = Date.now() + 450;
      if (t.length === 1) { g = { mode: zs > 1.01 ? 'pan' : 'swipe', x0: t[0].clientX, y0: t[0].clientY, tx0: zx, ty0: zy, moved: true, multi: true }; return; }
      zClamp(zBase()); zApply(true); g = null; return;
    }
    if (t.length) return;
    var dx = c.clientX - g.x0, dy = c.clientY - g.y0;
    if (g.mode === 'swipe') {
      if (!g.multi && Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.4) { quietUntil = Date.now() + 450; g = null; go(dx < 0 ? 1 : -1); return; }
      zApply(true);
    }
    if (g.moved) { quietUntil = Date.now() + 450; g = null; return; }
    // tap: double-tap toggles zoom where you tap
    var now = Date.now(), onImg = e.target === im;
    if (now - lastTap < 300 && Math.abs(c.clientX - lastTapX) < 30 && Math.abs(c.clientY - lastTapY) < 30) {
      lastTap = 0; quietUntil = now + 450; e.preventDefault();
      if (zs > 1.01) zReset(true); else { zZoomAt(c.clientX, c.clientY, 2.5); zApply(true); }
    } else {
      lastTap = now; lastTapX = c.clientX; lastTapY = c.clientY;
      if (onImg || zs > 1.01) quietUntil = now + 350;
    }
    g = null;
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
    ov.addEventListener('click', function(e){ if (Date.now() < quietUntil || zs > 1.01) { e.stopPropagation(); e.preventDefault(); } }, true);
    ov.style.touchAction = 'none'; ov.style.webkitUserSelect = 'none'; ov.style.userSelect = 'none';
    im.style.touchAction = 'none'; im.style.webkitUserDrag = 'none'; im.draggable = false;
    im.style.transformOrigin = '50% 50%'; im.style.willChange = 'transform';
    ['gesturestart','gesturechange','gestureend'].forEach(function(n){ ov.addEventListener(n, function(e){ e.preventDefault(); }, { passive: false }); });
    ov.addEventListener('touchstart', onTS, { passive: false });
    ov.addEventListener('touchmove', onTM, { passive: false });
    ov.addEventListener('touchend', onTE, { passive: false });
    ov.addEventListener('touchcancel', onTE, { passive: false });
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
    if (e.target && e.target.closest && e.target.closest('[data-no-zoom-click]')) return;
    var t = imgAt(e);
    if (t && t.closest('[data-no-zoom-click]')) return;
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
  st.textContent = 'img:not([data-flat]):not(header img):not(nav img):not(footer img) { cursor: zoom-in; } [data-no-zoom-click] img { cursor: inherit; }';
  document.head.appendChild(st);
})();
