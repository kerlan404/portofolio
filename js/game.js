/* ==========================================================================
   EASTER EGG: DINO RUN bertema developer
   Rintangan: `{ }`, `404`, bug · Lompat: spasi / tap · Lazy saat terlihat
   ========================================================================== */
(() => {
  'use strict';

  const canvas = document.getElementById('game');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* Pixel art — dino (siluet biru) & bug */
  const DINO = [
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
  const BUG = [
    '..XX..',
    '.XXXX.',
    'XXXXXX',
    'XX..XX',
    'XXXXXX',
    'X.XX.X',
    '.X..X.',
  ];

  const PX = 6;                       // ukuran piksel dino/bug
  const DINO_W = DINO[0].length * PX;
  const DINO_H = DINO.length * PX;

  const GRAVITY = 2500;               // px/detik^2
  const JUMP_V = 840;                 // px/detik (ke atas)
  const GROUND_OFFSET = 46;           // jarak tanah dari bawah canvas
  const DINO_X = 64;

  let W = 0, H = 170, dpr = 1;
  let groundY = 0;

  const cssVar = (name) => getComputedStyle(document.documentElement).getPropertyValue(name).trim() || '#888';
  const colors = () => ({ accent: cssVar('--accent'), ink: cssVar('--ink'), border: cssVar('--border'), muted: cssVar('--ink-muted') });

  const state = {
    mode: 'idle',                     // idle | running | over
    dinoY: 0, vy: 0,
    speed: 3.4,
    score: 0,
    obstacles: [],
    spawnAt: 1100,
    best: 0,
  };

  try {
    state.best = parseInt(sessionStorage.getItem('pf-dino-best') || '0', 10) || 0;
  } catch (e) { /* ignore */ }

  /* ---------- SIZING ---------- */
  const resize = () => {
    const box = canvas.parentElement.getBoundingClientRect();
    dpr = window.devicePixelRatio || 1;
    W = Math.max(280, box.width);
    canvas.width = Math.round(W * dpr);
    canvas.height = Math.round(H * dpr);
    canvas.style.width = W + 'px';
    canvas.style.height = H + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    groundY = H - GROUND_OFFSET;
  };
  window.addEventListener('resize', resize);
  resize();

  /* ---------- STATE ---------- */
  const reset = () => {
    state.mode = 'running';
    state.dinoY = 0; state.vy = 0;
    state.speed = 3.4; state.score = 0;
    state.obstacles = []; state.spawnAt = 1100;
  };

  const spawnObstacle = () => {
    const r = Math.random();
    const type = r < 0.4 ? 'braces' : r < 0.72 ? '404' : 'bug';
    const sizes = { braces: { w: 54, h: 40 }, '404': { w: 62, h: 40 }, bug: { w: 42, h: 42 } };
    state.obstacles.push({ x: W + 60, type, ...sizes[type] });
  };

  const jump = () => {
    if (state.mode === 'over') { reset(); return; }
    if (state.mode === 'idle') { state.mode = 'running'; }
    if (state.dinoY <= 1) state.vy = -JUMP_V;
  };

  /* ---------- MENGGAMBAR ---------- */
  const drawDino = (x, y) => {
    const c = colors().accent;
    ctx.fillStyle = c;
    DINO.forEach((row, r) => {
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

    // garis tanah putus-putus
    ctx.strokeStyle = c.border;
    ctx.lineWidth = 2;
    ctx.setLineDash([10, 8]);
    ctx.beginPath();
    ctx.moveTo(0, groundY + 4);
    ctx.lineTo(W, groundY + 4);
    ctx.stroke();
    ctx.setLineDash([]);

    // dino
    drawDino(DINO_X, groundY - DINO_H + 4 - state.dinoY);

    // rintangan
    state.obstacles.forEach(drawObstacle);

    // skor
    ctx.font = '500 13px "JetBrains Mono", monospace';
    ctx.fillStyle = c.muted;
    ctx.textAlign = 'right';
    ctx.fillText(t('game.score') + ' ' + String(Math.floor(state.score)).padStart(4, '0'), W - 14, 24);
    if (state.best > 0) ctx.fillText('BEST ' + String(state.best).padStart(4, '0'), W - 14, 42);

    if (state.mode === 'over') {
      ctx.textAlign = 'center';
      ctx.fillStyle = c.ink;
      ctx.font = '700 22px "Space Grotesk", sans-serif';
      ctx.fillText(t('game.over'), W / 2, H / 2 - 6);
      ctx.font = '500 13px "JetBrains Mono", monospace';
      ctx.fillStyle = c.muted;
      ctx.fillText(t('game.restart'), W / 2, H / 2 + 18);
    }
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
      if (state.dinoY <= 0) { state.dinoY = 0; state.vy = 0; }

      // spawn
      state.spawnAt -= dt * 1000;
      if (state.spawnAt <= 0) {
        spawnObstacle();
        state.spawnAt = 900 + Math.random() * 800;
      }

      // gerak rintangan
      state.obstacles.forEach((o) => { o.x -= state.speed * 60 * dt; });
      state.obstacles = state.obstacles.filter((o) => o.x + o.w > -30);

      // tabrakan (AABB dengan sedikit inset agar adil)
      const dx = DINO_X + 6, dw = 40;
      const dy = groundY - DINO_H + 4 - state.dinoY + 12, dh = DINO_H - 16;
      for (const o of state.obstacles) {
        const ox = o.x + 6, oy = groundY - o.h + 8 + 4, ow = o.w - 12, oh = o.h - 8;
        if (dx < ox + ow && dx + dw > ox && dy < oy + oh && dy + dh > oy) {
          state.mode = 'over';
          state.best = Math.max(state.best, Math.floor(state.score));
          try { sessionStorage.setItem('pf-dino-best', String(state.best)); } catch (e) { /* ignore */ }
          break;
        }
      }
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
    ctx.font = '500 12px "JetBrains Mono", monospace';
    ctx.fillStyle = colors().muted;
    ctx.textAlign = 'right';
    ctx.fillText('REDUCED MOTION — NO ANIMATION', W - 14, 62);
  };

  /* ---------- LAZY: hanya jalan saat terlihat ---------- */
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      visible = en.isIntersecting;
      if (visible) {
        if (state.mode === 'idle' && !reduceMotion) state.mode = 'running';
        startLoop();
      } else {
        stopLoop();
      }
    });
  }, { threshold: 0.15 });
  io.observe(canvas);

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) stopLoop();
  });

  /* ---------- KONTROL ---------- */
  canvas.addEventListener('click', jump);
  canvas.addEventListener('touchstart', (e) => { e.preventDefault(); jump(); }, { passive: false });
  canvas.addEventListener('keydown', (e) => {
    if (e.code === 'Space' || e.code === 'ArrowUp') { e.preventDefault(); jump(); }
  });

  window.addEventListener('keydown', (e) => {
    if (e.code !== 'Space' && e.code !== 'ArrowUp') return;
    const tag = document.activeElement ? document.activeElement.tagName : '';
    if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'BUTTON') return;
    e.preventDefault();
    jump();
  });

  /* Initial draw agar canvas tidak kosong sebelum terlihat */
  if (reduceMotion) drawStaticScene();
  else draw();
})();
