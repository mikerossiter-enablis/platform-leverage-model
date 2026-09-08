// Present mode + presenter notes for the deck-stage deck.
//   F  full screen: thumbnail rail and nav footer hidden, the slide fills the display. Esc leaves.
//      Also kicks in for the browser's own full screen (View > Enter Full Screen / F11).
//   N  presenter notes window (current notes, next slide, elapsed clock).
//      Open it BEFORE pressing F: browsers drop full screen when a page opens a new window.
// Arrow keys in either window move both.
(function () {
  var win = null, timerStart = null, tick = null, presenting = false;
  function deck() { return document.querySelector('deck-stage'); }
  function slides() { var d = deck(); return d ? Array.prototype.slice.call(d.querySelectorAll(':scope > section')) : []; }
  function index() { var s = slides(); for (var i = 0; i < s.length; i++) { if (s[i].hasAttribute('data-deck-active')) return i; } return 0; }
  function esc(t) { return String(t).replace(/[&<>]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c]; }); }
  function render() {
    if (!win || win.closed) return;
    var s = slides(), i = index(), cur = s[i], nxt = s[i + 1], d = win.document;
    if (!d.getElementById('pv-num')) return;
    var lines = ((cur && cur.getAttribute('data-speaker-notes')) || '').split('\n').map(function (l) { return l.trim().replace(/^•\s*/, ''); }).filter(Boolean);
    d.getElementById('pv-num').textContent = (i + 1) + ' / ' + s.length;
    d.getElementById('pv-label').textContent = (cur && cur.getAttribute('data-label')) || '';
    d.getElementById('pv-next').textContent = nxt ? ((i + 2) + ' · ' + (nxt.getAttribute('data-label') || '')) : 'End of deck';
    d.getElementById('pv-notes').innerHTML = lines.map(function (l) { return '<li>' + esc(l) + '</li>'; }).join('') || '<li style="opacity:.5">No notes</li>';
  }
  function fmt(ms) { var s = Math.floor(ms / 1000), m = Math.floor(s / 60); s = s % 60; return (m < 10 ? '0' : '') + m + ':' + (s < 10 ? '0' : '') + s; }
  var DOC = '<' + 'html><head><meta charset="utf-8"><title>Presenter notes</title>' +
    '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300..800&family=JetBrains+Mono:wght@500;700&display=swap">' +
    '<style>html,body{margin:0;background:#000;color:#fff;font-family:"Open Sans",system-ui,sans-serif;height:100%}' +
    'body{display:flex;flex-direction:column;padding:32px 40px;box-sizing:border-box;gap:24px}' +
    '.top{display:flex;justify-content:space-between;align-items:baseline;border-bottom:1px solid rgba(255,255,255,.12);padding-bottom:16px}' +
    '.mono{font-family:"JetBrains Mono",monospace;font-weight:500;letter-spacing:.12em;text-transform:uppercase;font-size:15px;color:#5BC0BE}' +
    '#pv-num{font-weight:800;font-size:40px;letter-spacing:-.03em;margin-left:10px}#pv-label{font-weight:600;font-size:22px;color:rgba(255,255,255,.75);margin-left:18px}' +
    '#pv-clock{font-family:"JetBrains Mono",monospace;font-size:34px;cursor:pointer}' +
    '#pv-notes{flex:1;overflow:auto;margin:0;padding:0 0 0 28px;font-size:30px;font-weight:330;line-height:1.45}#pv-notes li{margin:0 0 18px}#pv-notes li::marker{color:#EB5160}' +
    '.bottom{display:flex;justify-content:space-between;align-items:baseline;gap:24px;border-top:1px solid rgba(255,255,255,.12);padding-top:16px;font-size:20px;color:rgba(255,255,255,.7)}' +
    '#pv-next{font-weight:600;color:#fff;margin-left:14px}.hint{font-family:"JetBrains Mono",monospace;font-size:13px;letter-spacing:.1em;text-transform:uppercase;color:rgba(255,255,255,.4);text-align:right}</style></head><body>' +
    '<div class="top"><div><span class="mono">Slide</span><span id="pv-num"></span><span id="pv-label"></span></div><div id="pv-clock" title="Click to reset">00:00</div></div>' +
    '<ul id="pv-notes"></ul>' +
    '<div class="bottom"><div><span class="mono">Next</span><span id="pv-next"></span></div><span class="hint">F in the deck window: full screen &middot; &larr; &rarr; move both windows &middot; click the clock to reset</span></div></body></' + 'html>';
  function open() {
    if (win && !win.closed) { win.focus(); render(); return; }
    win = window.open('', 'plm-presenter', 'width=980,height=740');
    if (!win) return;
    var d = win.document;
    d.open(); d.write(DOC); d.close();
    d.addEventListener('keydown', function (e) {
      var dk = deck(); if (!dk) return;
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') { dk.goTo(Math.min(index() + 1, slides().length - 1)); e.preventDefault(); setTimeout(render, 60); }
      else if (e.key === 'ArrowLeft' || e.key === 'PageUp') { dk.goTo(Math.max(index() - 1, 0)); e.preventDefault(); setTimeout(render, 60); }
    });
    d.getElementById('pv-clock').addEventListener('click', function () { timerStart = Date.now(); });
    timerStart = timerStart || Date.now();
    clearInterval(tick);
    tick = setInterval(function () { if (!win || win.closed) { clearInterval(tick); return; } var c = win.document.getElementById('pv-clock'); if (c) c.textContent = fmt(Date.now() - timerStart); }, 500);
    setTimeout(render, 80);
  }

  // ---- Present mode. deck-stage hides its rail + nav footer when told the page is presenting
  // (the message its editor host sends). Send it ourselves for any kind of full screen: the
  // Fullscreen API (F key / Present button) or the browser's own (View > Enter Full Screen, F11),
  // which we detect via display-mode or the viewport matching the display.
  function isFull() {
    if (document.fullscreenElement || document.webkitFullscreenElement) return true;
    try { if (matchMedia('(display-mode: fullscreen)').matches) return true; } catch (e) {}
    return Math.abs(window.innerWidth - screen.width) <= 2 && Math.abs(window.innerHeight - screen.height) <= 2;
  }
  function sync() {
    var f = isFull();
    if (f === presenting) return;
    presenting = f;
    try { window.postMessage({ __omelette_presenting: f }, '*'); } catch (e) {}
    var b = presentBtn(); if (b) b.setAttribute('aria-pressed', f ? 'true' : 'false');
  }
  function toggleFull() {
    if (document.fullscreenElement || document.webkitFullscreenElement) {
      (document.exitFullscreen || document.webkitExitFullscreen).call(document);
      return;
    }
    var el = document.documentElement, req = el.requestFullscreen || el.webkitRequestFullscreen;
    if (!req) return;
    try { var p = req.call(el, { navigationUI: 'hide' }); if (p && p.catch) p.catch(function () {}); } catch (e) {}
  }
  function later() { setTimeout(sync, 0); }
  document.addEventListener('fullscreenchange', later);
  document.addEventListener('webkitfullscreenchange', later);
  window.addEventListener('resize', later);
  try { matchMedia('(display-mode: fullscreen)').addEventListener('change', later); } catch (e) {}

  // "Present" button in deck-stage's nav footer (its shadow DOM), after Reset.
  function presentBtn() { var d = deck(); return d && d.shadowRoot ? d.shadowRoot.querySelector('.btn.present') : null; }
  function addButton() {
    var d = deck(), root = d && d.shadowRoot, ov = root && root.querySelector('.overlay');
    if (!ov) return false;
    if (root.querySelector('.btn.present')) return true;
    var st = document.createElement('style');
    st.textContent = '.btn.present{font-size:11px;font-weight:500;letter-spacing:.02em;padding:0 10px 0 12px;gap:6px}' +
      '.btn.present .kbd{display:inline-flex;align-items:center;justify-content:center;min-width:16px;height:16px;padding:0 4px;font-family:ui-monospace,"SF Mono",Menlo,Consolas,monospace;font-size:10px;line-height:1;color:rgba(255,255,255,.88);background:rgba(255,255,255,.12);border-radius:4px}';
    root.appendChild(st);
    var div = document.createElement('span'); div.className = 'divider';
    var b = document.createElement('button');
    b.className = 'btn present'; b.type = 'button'; b.title = 'Full screen (F)'; b.setAttribute('aria-label', 'Present full screen');
    b.innerHTML = 'Present<span class="kbd">F</span>';
    b.addEventListener('click', toggleFull);
    ov.appendChild(div); ov.appendChild(b);
    sync();
    return true;
  }
  var tries = 0, poll = setInterval(function () { if (addButton() || ++tries > 150) clearInterval(poll); }, 100);

  window.addEventListener('message', function (e) { if (e.data && typeof e.data.slideIndexChanged === 'number') setTimeout(render, 30); });
  window.addEventListener('keydown', function (e) {
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    var t = e.target; if (t && (t.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName))) return;
    if (e.key === 'n' || e.key === 'N') open();
    else if (e.key === 'f' || e.key === 'F') toggleFull();
  });
  window.__openPresenterNotes = open;
  window.__togglePresent = toggleFull;
})();
