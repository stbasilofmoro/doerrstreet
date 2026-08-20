/* ══════════════════════════════════════════════════════════════════
   DOERR STREET RAIL CO — Concept C-3
   Two behaviors, both deliberate:
     1. one orchestrated load sequence
     2. one scroll sequence — the track panel comes apart
   ══════════════════════════════════════════════════════════════════ */
(() => {
  'use strict';
  const $  = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const NS = 'http://www.w3.org/2000/svg';
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const el = (n, a = {}) => { const e = document.createElementNS(NS, n);
    for (const k in a) e.setAttribute(k, a[k]); return e; };
  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
  const lerp  = (a, b, t) => a + (b - a) * t;
  const easeOut = (t) => 1 - Math.pow(1 - t, 3);

  $('#yr').textContent = new Date().getFullYear();

  /* ── 1 · the load sequence ─────────────────────────────────────── */
  const start = () => document.body.classList.add('ready');
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(() => requestAnimationFrame(start));
    setTimeout(start, 1200);                 // never wait on a slow font
  } else { requestAnimationFrame(start); }

  /* ── the chainage tape ─────────────────────────────────────────
     One period is 1200px = one mile, drawn twice so the loop is
     seamless. Two defects drift past per period.                   */
  (() => {
    const run = $('#tapeRun'); if (!run) return;
    const PERIOD = 1200, MINOR = 24, MAJOR = 120;
    /* the same four findings as the specimen report, at their own mileposts,
       so the tape, Plate I and the report all describe one inspection */
    const HITS = [
      { mp: 0.18, t: '§213.109' },
      { mp: 0.44, t: '§213.113' },
      { mp: 0.71, t: '§213.127' },
      { mp: 0.92, t: '§213.103' }
    ].map((h) => ({ y: Math.round(h.mp * PERIOD), t: h.t }));

    run.appendChild(el('line', { class: 'rule', x1: .5, y1: 0, x2: .5, y2: PERIOD * 2 }));
    for (let y = 0; y < PERIOD * 2; y += MINOR) {
      if (y % MAJOR === 0) continue;
      run.appendChild(el('line', { class: 'mn', x1: 0, y1: y + .5, x2: 11, y2: y + .5 }));
    }
    for (let y = 0; y < PERIOD * 2; y += MAJOR) {
      run.appendChild(el('line', { class: 'mj', x1: 0, y1: y + .5, x2: 24, y2: y + .5 }));
      const t = el('text', { x: 34, y: y + 4.5 });
      t.textContent = 'MP ' + ((y % PERIOD) / PERIOD).toFixed(2);
      run.appendChild(t);
    }
    /* the accent, used the only way it is used anywhere: a defect */
    for (const rep of [0, PERIOD]) {
      for (const h of HITS) {
        const y = h.y + rep, g = el('g', { class: 'hit' });
        g.appendChild(el('line', { x1: 0, y1: y + .5, x2: 30, y2: y + .5 }));
        g.appendChild(el('rect', { x: 0, y: y - 4, width: 8, height: 8 }));
        const t = el('text', { x: 38, y: y + 4.5 });
        t.textContent = h.t;
        g.appendChild(t);
        run.appendChild(g);
      }
    }
  })();

  /* ── masthead: condensed state + chainage for the whole page ────
     The page is one mile. The readout says where on it you are.     */
  const mast = $('#mast'), mastMp = $('#mastMp');
  let mRaf = null;
  const onScroll = () => {
    mRaf = null;
    mast.classList.toggle('tight', scrollY > 24);
    const total = document.documentElement.scrollHeight - innerHeight;
    mastMp.textContent = 'MP ' + clamp(total > 0 ? scrollY / total : 0, 0, 1).toFixed(2);
  };
  addEventListener('scroll', () => { if (!mRaf) mRaf = requestAnimationFrame(onScroll); },
    { passive: true });
  addEventListener('resize', onScroll);
  onScroll();

  /* ── one shared reveal switch for every scroll-triggered section ── */
  const revealIO = new IntersectionObserver((es) => {
    es.forEach((e) => {
      if (!e.isIntersecting) return;
      revealIO.unobserve(e.target);
      e.target.classList.add('in');
      countUp(e.target);
    });
  }, { threshold: 0.16, rootMargin: '0px 0px -4% 0px' });

  /* ── figures roll up, then the "+" lands ── */
  function countUp(scope) {
    $$('[data-count]', scope).forEach((b) => {
      const target = +b.dataset.count, node = b.firstChild;
      if (reduce) { node.nodeValue = target; b.classList.add('counted'); return; }
      const t0 = performance.now(), DUR = 1100;
      const tick = (now) => {
        const k = Math.min(1, (now - t0) / DUR);
        node.nodeValue = Math.round(target * (1 - Math.pow(1 - k, 3)));
        if (k < 1) requestAnimationFrame(tick); else b.classList.add('counted');
      };
      requestAnimationFrame(tick);
    });
  }

  $$('[data-anim]').forEach((n) => revealIO.observe(n));

  /* ── page-length single blocks (eg. privacy) reveal shortly after load
     rather than waiting on the scroll observer's area threshold, which a
     tall single element may never cross early enough to matter ── */
  $$('[data-reveal-on-load]').forEach((n) => {
    if (reduce) { n.classList.add('in'); return; }
    setTimeout(() => n.classList.add('in'), 500);
  });

  /* ── FAQ answers open on a measured height, not a snap ── */
  $$('.faq details').forEach((d) => {
    const sum = $('summary', d), body = $('p', d);
    if (reduce) return;
    let timer = null;
    /* always land in a clean state, even if transitionend never arrives */
    const settle = (close) => {
      clearTimeout(timer);
      const finish = () => {
        clearTimeout(timer);
        if (close) d.open = false;
        body.style.height = ''; body.style.opacity = '';
      };
      body.addEventListener('transitionend', finish, { once: true });
      timer = setTimeout(finish, 600);
    };
    sum.addEventListener('click', (e) => {
      e.preventDefault();
      if (d.open) {
        body.style.height = body.scrollHeight + 'px';
        requestAnimationFrame(() => { body.style.height = '0px'; body.style.opacity = '0'; });
        settle(true);
      } else {
        d.open = true;
        const h = body.scrollHeight;
        body.style.height = '0px'; body.style.opacity = '0';
        requestAnimationFrame(() => { body.style.height = h + 'px'; body.style.opacity = '1'; });
        settle(false);
      }
    });
  });

  const burger = $('#burger'), drawer = $('#drawer');
  const setDrawer = (on) => {
    /* inert backs up the CSS: it keeps the closed drawer's links out of the
       tab order and out of the accessibility tree even mid-transition, and
       it blocks pointer events on the clipped panel. */
    if (!on && drawer.contains(document.activeElement)) burger.focus();
    drawer.inert = !on;
    drawer.classList.toggle('on', on);
    burger.classList.toggle('on', on);
    burger.setAttribute('aria-expanded', String(on));
    document.documentElement.classList.toggle('lock', on);
  };
  drawer.inert = true;
  burger.addEventListener('click', () => setDrawer(!drawer.classList.contains('on')));
  $$('#drawer a').forEach((a) => a.addEventListener('click', () => setDrawer(false)));
  addEventListener('keydown', (e) => { if (e.key === 'Escape') setDrawer(false); });

  /* ══ 2 · THE PANEL ═══════════════════════════════════════════════
     A track panel drawn in axonometric, taken apart on scroll.
     Projection: along-track runs right-and-down, across-track runs
     right-and-up, both at a 2.24:1 ratio.                            */
  (() => {
    const svg = $('#axo'); if (!svg) return;
    const world = $('#axoWorld');

    const PX = 150, L = 340, M = 160;
    const ux = 0.94, uy = 0.42;          // unit along track
    const vx = 0.94, vy = -0.42;         // unit across track
    const U = { x: ux * L, y: uy * L };
    const V = { x: vx * M, y: vy * M };

    /* one axonometric box: origin, along-vector A, across-vector B, depth t */
    const box = (g, o, A, B, t, hot) => {
      const p = (x, y) => `${x.toFixed(1)},${y.toFixed(1)}`;
      const b = el('g', hot ? { class: 'hot' } : {});
      b.appendChild(el('polygon', { class: 'f-front',
        points: [p(o.x, o.y), p(o.x + A.x, o.y + A.y),
                 p(o.x + A.x, o.y + A.y + t), p(o.x, o.y + t)].join(' ') }));
      b.appendChild(el('polygon', { class: 'f-side',
        points: [p(o.x + A.x, o.y + A.y), p(o.x + A.x + B.x, o.y + A.y + B.y),
                 p(o.x + A.x + B.x, o.y + A.y + B.y + t), p(o.x + A.x, o.y + A.y + t)].join(' ') }));
      b.appendChild(el('polygon', { class: 'f-top',
        points: [p(o.x, o.y), p(o.x + A.x, o.y + A.y),
                 p(o.x + A.x + B.x, o.y + A.y + B.y), p(o.x + B.x, o.y + B.y)].join(' ') }));
      g.appendChild(b);
      return b;
    };
    const along  = (d) => ({ x: ux * d, y: uy * d });
    const across = (d) => ({ x: vx * d, y: vy * d });
    const at = (a, c) => ({ x: PX + ux * a + vx * c, y: uy * a + vy * c });

    /* rail seats, as a fraction across the tie */
    const SEAT = [0.24, 0.76];

    /* rest = assembled (composition sits centered); ex = pulled apart.
       The world counter-translates as it opens so the stack stays framed. */
    const LAYERS = [
      /* rest values seat each layer exactly on the one below:
         rail 26 → plate 10 → tie 30 → ballast 34 → subgrade */
      { key:'rail',     n:'01', t:'Rail',        c:'§213.113',
        flag:'Defective rail',         rest:226, ex: 14 },
      { key:'plates',   n:'02', t:'Fastenings',  c:'§213.127',
        flag:'Spikes lifted',          rest:252, ex: 78 },
      { key:'ties',     n:'03', t:'Crossties',   c:'§213.109',
        flag:'Four defective ties',    rest:262, ex:158 },
      { key:'ballast',  n:'04', t:'Ballast',     c:'§213.103',
        flag:'Fouled, ties pumping',   rest:292, ex:242 },
      { key:'subgrade', n:'05', t:'Subgrade',    c:'§213.33',
        flag:'Poor drainage',          rest:326, ex:326 }
    ];
    const RISE = 100;              /* counter-translate on the whole world  */
    const CX = 385, CY = 331;      /* object center, for the camera         */
    const FLAG_X = 14, FLAG_Y = 40;

    /* ── build. Painted far-to-near: subgrade first, rail last. ── */
    [...LAYERS].reverse().forEach((ly) => {
      const g = el('g', { class: 'layer', 'data-k': ly.key });
      /* every defective element lives here, so it can rise out of its own
         layer when that layer comes into focus */
      const lift = el('g', { class: 'hot-lift' });

      if (ly.key === 'subgrade' || ly.key === 'ballast') {
        const t = 34;
        const b = box(g, at(0, 0), U, V, t);
        if (ly.key === 'ballast') {
          const top = b.querySelector('.f-top').cloneNode();
          top.setAttribute('class', 'grit');
          b.appendChild(top);
        }
      }

      /* The lift group is inserted at the defect's own place in the paint
         order, not tacked on the end — otherwise a defect that sits behind
         a sound element paints over it and appears to break the line. */
      if (ly.key === 'ties') {
        for (let k = 0; k < 5; k++) {
          const a = 18 + k * 66;
          const bad = k === 2;
          if (bad) g.appendChild(lift);
          box(bad ? lift : g, at(a, -6), along(30), across(M + 12), 30, bad);
        }
      }

      if (ly.key === 'plates') {
        for (let k = 0; k < 5; k++) {
          const a = 22 + k * 66;
          SEAT.forEach((s, i) => {
            const bad = k === 2 && i === 0;
            if (bad) g.appendChild(lift);
            box(bad ? lift : g, at(a, s * M - 15), along(22), across(30), 10, bad);
          });
        }
      }

      if (ly.key === 'rail') {
        /* Butted flush, with no clearance: a gap along the rail axis reads as
           a step in this projection, because u carries both x and y. */
        /* Each half must stay clearly longer than the rail is deep (26) or it
           reads as a cube and the line loses its direction. 52 × 14 × 26 reads
           as a length of rail. BRK 1.5 keeps the halves touching — a fissure,
           not a rail that has already parted (a worse classification). */
        const D0 = 136, DL = 104, BRK = 1.5;
        const C = SEAT[0] * M - 7;

        const half = (DL - BRK) / 2;
        box(g, at(0, SEAT[1] * M - 7), U, across(14), 26);   // far rail, whole
        box(g, at(0, C), along(D0), across(14), 26);          // sound, behind

        /* the break itself: two pieces of rail, not a line drawn on one */
        g.appendChild(lift);
        box(lift, at(D0, C), along(half), across(14), 26, true);
        box(lift, at(D0 + half + BRK, C), along(half), across(14), 26, true);

        box(g, at(D0 + DL, C), along(L - D0 - DL), across(14), 26);  // sound, in front
      }

      /* leader + caption, hung off the far-right corner of the top face.
         Held back until the stack opens, or all five would collide. */
      const cx = PX + U.x + V.x, cy = U.y + V.y;
      const capG = el('g', { class: 'cap-g', opacity: 0 });
      capG.appendChild(el('path', { class: 'lead',
        d: `M${cx} ${cy} L${cx + 34} ${cy - 26} L${cx + 62} ${cy - 26}` }));
      const cap = el('text', { class: 'cap', x: cx + 70, y: cy - 30 });
      cap.textContent = ly.t;
      const sub = el('text', { class: 'cap-s', x: cx + 70, y: cy - 12 });
      sub.textContent = ly.c;
      capG.appendChild(cap); capG.appendChild(sub);
      g.appendChild(capG);

      /* defect flag. Chips left-align on a common margin; the rect is
         sized from the measured text so nothing is ever clipped. */
      const f = el('g', { class: 'flag' });
      const rect = el('rect', { x: FLAG_X, y: FLAG_Y - 13, height: 26, width: 10 });
      const line = el('line', { x1: FLAG_X, y1: FLAG_Y, x2: FLAG_X, y2: FLAG_Y });
      const ft = el('text', { x: FLAG_X + 12, y: FLAG_Y + 5 });
      ft.textContent = ly.flag;
      f.appendChild(line); f.appendChild(rect); f.appendChild(ft);
      g.appendChild(f);
      ly.parts = { rect, line, ft };

      world.appendChild(g);
      ly.g = g; ly.f = f; ly.cap = capG;
    });

    /* size each chip from its rendered text, then run the leader from the
       chip's right edge to the near corner of that slab */
    const sizeFlags = () => {
      const edge = PX + FLAG_Y / uy + 10;
      LAYERS.forEach((ly) => {
        const { rect, line, ft } = ly.parts;
        const w = Math.ceil(ft.getBBox().width) + 24;
        rect.setAttribute('width', w);
        line.setAttribute('x1', FLAG_X + w);
        line.setAttribute('x2', edge);
      });
    };
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(sizeFlags);
    requestAnimationFrame(sizeFlags);

    /* ── drive ── */
    const track = $('.panel-track'), hint = $('#panelHint');
    const stepN = $('#stepN'), stepT = $('#stepT'), stepC = $('#stepC');
    let raf = null, lastFocus = -1, narrow = null;

    /* Narrow screens can't carry the side captions, so crop to the object
       and let the readout below name the layer and its defect instead. */
    const fitBox = () => {
      const n = innerWidth < 900;
      if (n === narrow) return;
      narrow = n;
      svg.setAttribute('viewBox', n ? '108 -16 588 672' : '0 0 1120 640');
      lastFocus = -1;                       // force the readout to rewrite
    };
    fitBox();

    const render = () => {
      raf = null;
      const r = track.getBoundingClientRect();
      const total = r.height - innerHeight;
      const p = clamp(-r.top / total, 0, 1);

      const spread = easeOut(clamp(p / 0.30, 0, 1));

      /* the camera: close on the assembled panel, pulling back as it opens.
         No zoom on narrow screens — the viewBox is already cropped in. */
      const z = narrow ? 1 : lerp(1.34, 1, spread);
      world.setAttribute('transform',
        `translate(0 ${(RISE * spread).toFixed(1)}) ` +
        `translate(${CX} ${CY}) scale(${z.toFixed(3)}) translate(${-CX} ${-CY})`);
      LAYERS.forEach((ly) => {
        ly.g.setAttribute('transform', `translate(0 ${lerp(ly.rest, ly.ex, spread).toFixed(1)})`);
        ly.cap.setAttribute('opacity', clamp((spread - 0.55) / 0.45, 0, 1).toFixed(2));
      });

      hint.classList.toggle('gone', p > 0.03);

      const focus = p < 0.34 ? -1 : clamp(Math.floor((p - 0.34) / 0.132), 0, 4);
      if (focus !== lastFocus) {
        lastFocus = focus;
        LAYERS.forEach((ly, i) => {
          ly.g.classList.toggle('dim', focus > -1 && i !== focus);
          ly.g.classList.toggle('focus', i === focus);
          ly.f.classList.toggle('on', i === focus);
        });
        const ly = LAYERS[focus > -1 ? focus : 0];
        stepN.textContent = ly.n; stepT.textContent = ly.t;
        stepC.textContent = narrow ? `${ly.c} · ${ly.flag}` : ly.c;
      }
    };
    addEventListener('scroll', () => { if (!raf) raf = requestAnimationFrame(render); }, { passive: true });
    addEventListener('resize', () => { fitBox(); render(); });
    render();
  })();

  /* ── the specimen prints itself once the sheet is on screen ────── */
  (() => {
    const doc = $('.doc'); if (!doc) return;
    if (reduce) { doc.classList.add('printed'); return; }
    const io = new IntersectionObserver((es) => {
      es.forEach((e) => {
        if (!e.isIntersecting) return;
        io.unobserve(e.target);
        e.target.classList.add('printed');
      });
    }, { threshold: 0.2 });
    io.observe(doc);
  })();

  /* ── 3 · the quote — answers change the response, live ─────────── */
  (() => {
    const form = $('#q'); if (!form) return;
    const head = $('#qHead'), note = $('#qNote');

    const update = () => {
      const size = form.querySelector('input[name=size]:checked');
      const urg  = form.querySelector('input[name=urgency]:checked');
      const days = +size.dataset.days, u = +urg.dataset.urgent;

      let h, n;
      if (u === 2) {
        h = 'On site same day or next';
        n = 'Call rather than send this — we mobilize off the phone.';
      } else if (u === 1) {
        h = 'On site inside 2 business days';
        n = 'Ahead of your audit date, with the written report 48 hours after we walk it.';
      } else if (days === 1) {
        h = 'On site inside 1–3 business days';
        n = 'Report in your hands 48 hours after we walk it.';
      } else if (days === 2) {
        h = 'On site inside 3–5 business days';
        n = 'A mile or more takes a full day on the ground. Report still lands in 48 hours.';
      } else {
        h = 'On site inside 5–7 business days';
        n = 'Over three miles we scope it first, then walk it in sections.';
      }
      head.textContent = h; note.textContent = n;
    };
    form.addEventListener('change', update);
    update();

    const FORM_ENDPOINT = 'https://formspree.io/f/mrpzlqab';
    const fine = $('#qFine');
    const fineWas = fine ? fine.innerHTML : '';
    const success = $('#formSuccess');
    const successClose = success ? $('.form-success-close', success) : null;
    let lastFocus = null;

    const closeSuccess = () => {
      if (!success) return;
      success.classList.remove('is-open');
      document.body.classList.remove('success-open');
      setTimeout(() => { success.hidden = true; }, 280);
      if (lastFocus) lastFocus.focus();
    };

    successClose?.addEventListener('click', closeSuccess);
    success?.addEventListener('click', (e) => {
      if (e.target === success) closeSuccess();
    });
    success?.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeSuccess();
    });

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (!form.reportValidity()) return;

      const b = $('.q-send', form), was = b.textContent;
      b.disabled = true; b.textContent = 'Sending…';

      const fd = new FormData(form);
      fd.set('_subject', `Inspection request — ${fd.get('facility') || fd.get('name') || 'website'}`);
      fd.set('indicative_response', `${head.textContent} — ${note.textContent}`);
      const contact = String(fd.get('contact') || '');
      if (contact.includes('@')) fd.set('_replyto', contact);

      try {
        const res = await fetch(FORM_ENDPOINT, {
          method: 'POST', body: fd, headers: { Accept: 'application/json' },
        });
        if (!res.ok) throw new Error('submission rejected');

        b.textContent = 'Request sent';
        if (fine) fine.textContent = 'We reply within one business day. Thank you.';
        form.reset(); update();

        if (success) {
          lastFocus = document.activeElement;
          success.hidden = false;
          document.body.classList.add('success-open');
          requestAnimationFrame(() => {
            success.classList.add('is-open');
            successClose?.focus();
          });
        }

        // stays visible until they act again, rather than reverting on a timer
        let revertTimer;
        const revert = () => {
          clearTimeout(revertTimer);
          form.removeEventListener('input', revert);
          b.disabled = false; b.textContent = was;
          if (fine) fine.innerHTML = fineWas;
        };
        form.addEventListener('input', revert, { once: true });
        revertTimer = setTimeout(revert, 20000);
      } catch (err) {
        b.textContent = 'Try again';
        if (fine) fine.innerHTML = 'That didn’t go through — call us directly on <a href="tel:+17043210802">704 321 0802</a> instead.';
        setTimeout(() => { b.disabled = false; b.textContent = was; }, 2600);
      }
    });
  })();
})();
