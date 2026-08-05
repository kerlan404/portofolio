/* ==========================================================================
   EASTER EGG: DINO RUN bertema developer
   Rintangan: `{ }`, `404`, bug · Lompat: spasi / tap · Lazy saat terlihat
   Skor & status tampil di bilah judul jendela terminal
   ========================================================================== */
(() => {
  'use strict';

  const canvas = document.getElementById('game');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const els = {
    score: document.getElementById('game-score'),
    best: document.getElementById('game-best'),
    status: document.getElementById('game-status'),
    overlay: document.getElementById('game-overlay'),
    overTitle: document.getElementById('over-title'),
    overScore: document.getElementById('over-score'),
    restart: document.getElementById('game-restart'),
  };

  /* Pixel art — dino dua frame (lari) & bug */
  const DINO_A = [
    '...XXX..',
    '..XXXX..',
    '.XXXXX..',
    '.XXXXXX.',
    'XXXXXXX.',
    '.XXXXXX.',
    '.XXX....',
    'XXXX....',
    'XXX.....',
    'XX.X....',
    'X..X....',
    'X...X...',
  ];
  const DINO_B = [
    '...XXX..',
    '..XXXX..',
    '.XXXXX..',
    '.XXXXXX.',
    'XXXXXXX.',
    '.XXXXXX.',
    '.XXX....',
    'XXXX....',
    'XXX.....',
    'XX.XX...',
    'X..X.X..',
    'X..X..X.',
  ];
  const BUG = [
    '..XX..',
    '.XXXX.',
    'XXXXXX',
    'XX..XX',
    'XXXXXX',
    'X.XX.X',
    '.X..X.',
  ];

  const PX = 6;
  const DINO_H = DINO_A.length * PX;

  const GRAVITY = 2500;
  const JUMP_V = 840;
  const GROUND_OFFSET = 52;
  const DINO_X = 64;

  const SCENERY_TOKENS = ['const', '=>', '{ }', '() =>', 'async', 'await', '404', 'npm', 'flutter', 'null', '...', '=>'];

  let W = 0, H = 190, dpr = 1;
  let groundY = 0;

  const cssVar = (name) => getComputedStyle(document.documentElement).getPropertyValue(name).trim() || '#888';
  const colors = () => ({ accent: cssVar('--accent'), ink: cssVar('--ink'), border: cssVar('--border'), muted: cssVar('--ink-muted') });

  const state = {
    mode: 'idle',
    dinoY: 0, vy: 0,
    speed: 3.4,
    score: 0,
    obstacles: [],
    spawnAt: 1100,
    best: 0,
    leg: 0,
    legT: 0,
    dashOffset: 0,
    gridOffset: 0,
    tokens: [],
    tokenAt: 1800,
    dust: [],
    lastScoreShown: -1,
    lastBestShown: -1,
  };

  try {
    state.best = parseInt(sessionStorage.getItem('pf-dino-best') || '0', 10) || 0;
  } catch (e) { /* ignore */ }

  /* ---------- SIZING ---------- */
  const resize = () => {
    const box = canvas.parentElement.getBoundingClientRect();
    dpr = window.devicePixelRatio || 1;
    W = Math.max(280, box.width - 20); // kurangi padding wrap agar selaras overlay
    canvas.width = Math.round(W * dpr);
    canvas.height = Math.round(H * dpr);
    canvas.style.width = W + 'px';
    canvas.style.height = H + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    groundY = H - GROUND_OFFSET;
  };
  window.addEventListener('resize', resize);
  resize();

  /* ---------- UI SYNC (bilah judul & overlay) ---------- */
  const setStatus = () => {
    if (!els.status) return;
    const map = { idle: 'game.status.idle', running: 'game.status.run', over: 'game.status.over' };
    els.status.textContent = reduceMotion
      ? t('game.status.static')
      : t(map[state.mode] || 'game.status.run');
  };

  const syncMeta = () => {
    const s = Math.floor(state.score);
    if (els.score && s !== state.lastScoreShown) {
      els.score.textContent = String(s).padStart(4, '0');
      state.lastScoreShown = s;
    }
    if (els.best && state.best !== state.lastBestShown) {
      els.best.textContent = String(state.best).padStart(4, '0');
      state.lastBestShown = state.best;
    }
  };

  const showOverlay = (show) => {
    if (!els.overlay) return;
    els.overlay.hidden = !show;
    if (show) {
      if (els.overTitle) els.overTitle.textContent = t('game.over');
      if (els.overScore) {
        els.overScore.textContent = t('game.score') + ' ' +
          String(Math.floor(state.score)).padStart(4, '0') + ' · BEST ' +
          String(state.best).padStart(4, '0');
      }
    }
  };

  const refreshUI = () => { setStatus(); syncMeta(); showOverlay(state.mode === 'over'); };

  // Aksesibilitas: umumkan hasil game ke screen reader
  if (els.overlay && !els.overlay.hasAttribute('role')) els.overlay.setAttribute('role', 'alert');
  window.__gameRefreshUI = refreshUI; // dipanggil saat bahasa berubah

  /* ---------- STATE ---------- */
  const reset = () => {
    state.mode = 'running';
    state.dinoY = 0; state.vy = 0;
    state.speed = 3.4; state.score = 0;
    state.obstacles = []; state.spawnAt = 1100;
    state.tokens = []; state.tokenAt = 1800;
    state.dust = [];
    state.lastScoreShown = -1;
    showOverlay(false);
    setStatus(); syncMeta();
  };

  const spawnDust = () => {
    for (let i = 0; i < 4; i++) {
      state.dust.push({
        x: DINO_X + 16 + Math.random() * 16,
        y: groundY + 4,
        vx: -(30 + Math.random() * 70),
        vy: -(20 + Math.random() * 60),
        life: 0.3 + Math.random() * 0.15,
        max: 0.45,
      });
    }
  };

  const spawnObstacle = () => {
    const r = Math.random();
    const type = r < 0.4 ? 'braces' : r < 0.72 ? '404' : 'bug';
    const sizes = { braces: { w: 54, h: 40 }, '404': { w: 62, h: 40 }, bug: { w: 42, h: 42 } };
    state.obstacles.push({ x: W + 60, type, ...sizes[type] });
  };

  const jump = () => {
    if (state.mode === 'over') { reset(); return; }
    if (state.mode === 'idle') { state.mode = 'running'; setStatus(); }
    if (state.dinoY <= 1) state.vy = -JUMP_V;
  };

  const gameOver = () => {
    state.mode = 'over';
    state.best = Math.max(state.best, Math.floor(state.score));
    try { sessionStorage.setItem('pf-dino-best', String(state.best)); } catch (e) { /* ignore */ }
    syncMeta();
    setStatus();
    showOverlay(true);
  };

  /* ---------- MENGGAMBAR ---------- */
  const drawDino = (x, y) => {
    const frame = state.leg ? DINO_B : DINO_A;
    ctx.fillStyle = colors().accent;
    frame.forEach((row, r) => {
      for (let col = 0; col < row.length; col++) {
        if (row[col] === 'X') ctx.fillRect(x + col * PX, y + r * PX, PX, PX);
      }
    });
  };

  const drawObstacle = (o) => {
    const c = colors();
    const y = groundY - o.h + 8;
    if (o.type === 'bug') {
      ctx.fillStyle = c.ink;
      BUG.forEach((row, r) => {
        for (let col = 0; col < row.length; col++) {
          if (row[col] === 'X') ctx.fillRect(o.x + col * PX, y + r * PX, PX, PX);
        }
      });
    } else {
      ctx.font = '700 34px "JetBrains Mono", monospace';
      ctx.fillStyle = c.ink;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'alphabetic';
      ctx.fillText(o.type === 'braces' ? '{ }' : '404', o.x + o.w / 2, y + o.h);
    }
  };

  const draw = () => {
    const c = colors();
    ctx.clearRect(0, 0, W, H);

    // latar: grid vertikal paralaks sangat samar
    ctx.globalAlpha = 0.3;
    ctx.strokeStyle = c.border;
    ctx.lineWidth = 1;
    const gridW = 44;
    for (let x = -state.gridOffset; x < W; x += gridW) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, groundY);
      ctx.stroke();
    }
    ctx.globalAlpha = 1;

    // garis tanah putus-putus yang ikut bergerak
    ctx.strokeStyle = c.border;
    ctx.lineWidth = 2;
    ctx.setLineDash([10, 8]);
    ctx.lineDashOffset = -state.dashOffset;
    ctx.beginPath();
    ctx.moveTo(0, groundY + 4);
    ctx.lineTo(W, groundY + 4);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.lineDashOffset = 0;

    // scenery: token kode melayang
    ctx.font = '500 12px "JetBrains Mono", monospace';
    ctx.textAlign = 'left';
    ctx.fillStyle = c.muted;
    ctx.globalAlpha = 0.5;
    state.tokens.forEach((tk) => {
      ctx.fillText(tk.text, tk.x, tk.y);
    });
    ctx.globalAlpha = 1;

    // dino
    drawDino(DINO_X, groundY - DINO_H + 4 - state.dinoY);

    // rintangan
    state.obstacles.forEach(drawObstacle);

    // debu saat mendarat
    ctx.fillStyle = c.muted;
    state.dust.forEach((p) => {
      ctx.globalAlpha = Math.max(0, p.life / p.max);
      ctx.fillRect(p.x, p.y, 3, 3);
    });
    ctx.globalAlpha = 1;
  };

  /* ---------- GAME LOOP (delta-time) ---------- */
  let raf = 0, last = 0, running = false, visible = false;

  const loop = (now) => {
    if (!visible || !running) { raf = 0; return; }
    const dt = Math.min((now - last) / 1000, 0.033);
    last = now;

    if (state.mode === 'running') {
      state.score += dt * 10;
      state.speed = Math.min(3.4 + state.score / 1400, 8.6);

      // fisika dino
      state.vy -= GRAVITY * dt;
      state.dinoY += state.vy * dt;
      if (state.dinoY <= 0) {
        if (state.dinoY < 0) spawnDust(); // mendarat → debu
        state.dinoY = 0; state.vy = 0;
      }

      // animasi kaki (hanya saat di tanah)
      if (state.dinoY <= 0) {
        state.legT += dt;
        if (state.legT > 0.13) { state.legT = 0; state.leg = state.leg ? 0 : 1; }
      }

      // spawn
      state.spawnAt -= dt * 1000;
      if (state.spawnAt <= 0) {
        spawnObstacle();
        state.spawnAt = 900 + Math.random() * 800;
      }

      // gerak rintangan, tanah & latar
      const step = state.speed * 60 * dt;
      state.obstacles.forEach((o) => { o.x -= step; });
      state.obstacles = state.obstacles.filter((o) => o.x + o.w > -30);
      state.dashOffset = (state.dashOffset + step * 0.5) % 18;
      state.gridOffset = (state.gridOffset + step * 0.35) % 44;

      // scenery: token kode melayang dari kanan
      state.tokenAt -= dt * 1000;
      if (state.tokenAt <= 0) {
        state.tokenAt = 1400 + Math.random() * 1200;
        state.tokens.push({
          text: SCENERY_TOKENS[Math.floor(Math.random() * SCENERY_TOKENS.length)],
          x: W + 30,
          y: 34 + Math.random() * (groundY - 90),
        });
      }
      state.tokens.forEach((tk) => { tk.x -= step * 0.45; });
      state.tokens = state.tokens.filter((tk) => tk.x > -90);

      // partikel debu
      state.dust.forEach((p) => {
        p.x += p.vx * dt;
        p.y += p.vy * dt;
        p.vy += 480 * dt;
        p.life -= dt;
      });
      state.dust = state.dust.filter((p) => p.life > 0);

      // tabrakan (AABB dengan sedikit inset agar adil)
      const dx = DINO_X + 6, dw = 40;
      const dy = groundY - DINO_H + 4 - state.dinoY + 12, dh = DINO_H - 16;
      for (const o of state.obstacles) {
        const ox = o.x + 6, oy = groundY - o.h + 8 + 4, ow = o.w - 12, oh = o.h - 8;
        if (dx < ox + ow && dx + dw > ox && dy < oy + oh && dy + dh > oy) {
          gameOver();
          break;
        }
      }
      syncMeta();
    }

    draw();
    raf = requestAnimationFrame(loop);
  };

  const startLoop = () => {
    if (reduceMotion) { drawStaticScene(); return; }
    if (running) return;
    running = true;
    last = performance.now();
    raf = requestAnimationFrame(loop);
  };

  const stopLoop = () => {
    running = false;
    if (raf) { cancelAnimationFrame(raf); raf = 0; }
  };

  /* ---------- REDUCED MOTION: tampilan statis ---------- */
  let staticDrawn = false;
  const drawStaticScene = () => {
    if (staticDrawn) return;
    staticDrawn = true;
    state.mode = 'idle';
    state.obstacles = [{ x: W * 0.58, type: 'braces', w: 54, h: 40 }];
    draw();
    setStatus();
    syncMeta();
  };

  /* ---------- LAZY: hanya jalan saat terlihat ---------- */
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      visible = en.isIntersecting;
      if (visible) {
        if (state.mode === 'idle' && !reduceMotion) { state.mode = 'running'; setStatus(); }
        startLoop();
      } else {
        stopLoop();
      }
    });
  }, { threshold: 0.15 });
  io.observe(canvas);

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) { stopLoop(); return; }
    if (visible && state.mode === 'running') startLoop();
  });

  /* ---------- KONTROL ---------- */
  if (els.restart) els.restart.addEventListener('click', reset);
  canvas.addEventListener('click', jump);
  canvas.addEventListener('touchstart', (e) => { e.preventDefault(); jump(); }, { passive: false });
  canvas.addEventListener('keydown', (e) => {
    if (e.code === 'Space' || e.code === 'ArrowUp') { e.preventDefault(); jump(); }
  });

  window.addEventListener('keydown', (e) => {
    if (e.code !== 'Space' && e.code !== 'ArrowUp') return;
    // Hanya blokir saat sedang mengetik di form — bukan karena tombol yang
    // sempat diklik (fokus tombol tidak boleh menonaktifkan lompatan)
    const tag = e.target ? e.target.tagName : '';
    if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return;
    if (!visible) return; // di luar area game, Space tetap dipakai scroll biasa
    e.preventDefault();
    jump();
    if (state.mode === 'running') startLoop();
  });

  /* Inisialisasi */
  if (reduceMotion) drawStaticScene();
  else draw();
  syncMeta();
  setStatus();
})();
