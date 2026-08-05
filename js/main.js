/* ==========================================================================
   PORTFOLIO — interaksi utama
   ========================================================================== */
(() => {
  'use strict';

  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const root = document.documentElement;

  const ICON_SUN = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>';
  const ICON_MOON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';

  /* ---------- THEME ---------- */
  const themeBtn = $('#theme-toggle');
  let currentTheme = root.getAttribute('data-theme') || 'dark';

  const applyTheme = () => {
    root.setAttribute('data-theme', currentTheme);
    try { localStorage.setItem('pf-theme', currentTheme); } catch (e) { /* private mode */ }
    if (themeBtn) {
      themeBtn.innerHTML = currentTheme === 'dark' ? ICON_SUN : ICON_MOON;
      themeBtn.setAttribute('aria-label', currentTheme === 'dark' ? t('theme.toLight') : t('theme.toDark'));
    }
  };
  if (themeBtn) themeBtn.addEventListener('click', () => {
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme();
  });

  /* ---------- BAHASA ---------- */
  const setLang = (lang, save = true) => {
    CURRENT_LANG = lang;
    root.setAttribute('lang', lang);
    if (save) {
      try { localStorage.setItem('pf-lang', lang); } catch (e) { /* ignore */ }
    }
    applyTranslations();
    applyTheme(); // re-render label ikon sesuai bahasa
    $$('.lang-btn').forEach((b) => b.classList.toggle('active', b.dataset.lang === lang));
  };

  const applyTranslations = () => {
    $$('[data-i18n]').forEach((el) => { el.textContent = t(el.dataset.i18n); });
    $$('[data-i18n-placeholder]').forEach((el) => { el.placeholder = t(el.dataset.i18nPlaceholder); });
    const game = $('#game');
    if (game) game.setAttribute('aria-label', t('game.aria'));
    const logo = $('#logo-name');
    if (logo) logo.textContent = CONFIG.nameShort;
    const footerName = $('#footer-name');
    if (footerName) footerName.textContent = CONFIG.nameShort;
    document.title = t('meta.title');
  };

  $$('.lang-btn').forEach((b) => b.addEventListener('click', () => setLang(b.dataset.lang)));

  /* ---------- LOADING SCREEN ---------- */
  const loader = $('#loader');
  const loaderWord = $('#loader-word');
  const loaderProgress = $('#loader-progress');
  const WORD_MS = 340; // per kata: 200ms tampil + 140ms fade
  let playedAnimation = false;

  const finishLoader = (instant) => {
    if (instant) {
      if (loader) loader.style.display = 'none';
      startHero();
      return;
    }
    if (loader) {
      loader.classList.add('done');
      loader.setAttribute('aria-hidden', 'true');
      setTimeout(() => { loader.style.display = 'none'; }, 700);
    }
    startHero();
  };

  const runLoader = () => {
    if (!loader) { startHero(); return; }
    if (reduceMotion) { finishLoader(true); return; }
    try {
      if (sessionStorage.getItem('pf-loaded')) { finishLoader(true); return; }
    } catch (e) { /* ignore */ }

    playedAnimation = true;
    const total = LOADER_WORDS.length * WORD_MS;
    requestAnimationFrame(() => {
      loaderProgress.style.transition = `width ${total}ms linear`;
      loaderProgress.style.width = '100%';
    });

    const showWord = (i) => {
      loaderWord.textContent = LOADER_WORDS[i];
      loaderWord.classList.add('show');
      setTimeout(() => {
        loaderWord.classList.remove('show');
        setTimeout(() => {
          if (i + 1 < LOADER_WORDS.length) showWord(i + 1);
          else finishLoader(false);
        }, 140);
      }, 200);
    };
    showWord(0);
  };

  /* ---------- HERO: TYPING EFFECT (sekali per kunjungan) ---------- */
  let heroStarted = false;
  const startHero = () => {
    if (heroStarted) return;
    heroStarted = true;
    const nameEl = $('#hero-name');
    if (!nameEl) return;
    const cursor = $('#name-cursor');
    const extras = ['#hero-tagline', '#hero-actions', '#hero-scroll'];

    const revealExtras = () => {
      extras.forEach((sel) => { const el = $(sel); if (el) el.classList.add('shown'); });
    };

    if (playedAnimation && !reduceMotion) {
      const full = CONFIG.name;
      if (cursor) cursor.hidden = false;
      let i = 0;
      const type = () => {
        nameEl.textContent = full.slice(0, ++i);
        if (i < full.length) {
          setTimeout(type, 55 + Math.random() * 45);
        } else {
          setTimeout(() => { if (cursor) cursor.hidden = true; }, 900);
          revealExtras();
        }
      };
      type();
    } else {
      nameEl.textContent = CONFIG.name;
      revealExtras();
    }
  };

  /* ---------- NAVBAR ---------- */
  const navbar = $('#navbar');
  const onScroll = () => navbar && navbar.classList.toggle('scrolled', window.scrollY > 24);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  const burger = $('#nav-toggle');
  const navLinks = $('#nav-links');
  if (burger && navLinks) {
    burger.addEventListener('click', () => {
      const open = navLinks.classList.toggle('open');
      burger.classList.toggle('active', open);
      burger.setAttribute('aria-expanded', String(open));
    });
    $$('.nav-link').forEach((a) => a.addEventListener('click', () => {
      navLinks.classList.remove('open');
      burger.classList.remove('active');
      burger.setAttribute('aria-expanded', 'false');
    }));
  }

  /* ---------- SCROLL SPY: nav link aktif ---------- */
  const navMap = new Map();
  $$('.nav-link').forEach((a) => navMap.set(a.getAttribute('href').slice(1), a));
  const spy = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) {
        $$('.nav-link').forEach((a) => a.classList.remove('active'));
        const link = navMap.get(en.target.id);
        if (link) link.classList.add('active');
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });
  ['tentang', 'pengalaman', 'proyek', 'kontak'].forEach((id) => {
    const sec = document.getElementById(id);
    if (sec) spy.observe(sec);
  });

  /* ---------- REVEAL: judul section saja ---------- */
  const revealObs = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) { en.target.classList.add('revealed'); revealObs.unobserve(en.target); }
    });
  }, { threshold: 0.2 });
  $$('.section-label').forEach((el) => revealObs.observe(el));

  /* ---------- KONTAK: FORM (Netlify Forms) ---------- */
  const form = $('#contact-form');
  const status = $('#form-status');
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (!form.checkValidity()) { form.reportValidity(); return; }
      status.textContent = t('contact.sending');
      status.className = 'form-status';
      try {
        const res = await fetch(form.getAttribute('action') || '/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams(new FormData(form)).toString(),
        });
        if (res.ok) {
          status.textContent = t('contact.sent');
          status.classList.add('ok');
          form.reset();
        } else {
          throw new Error('form failed');
        }
      } catch (err) {
        status.textContent = t('contact.error');
        status.classList.add('err');
      }
    });
  }

  /* ---------- FOOTER ---------- */
  const year = $('#footer-year');
  if (year) year.textContent = new Date().getFullYear();

  /* ---------- INIT ---------- */
  const init = () => {
    let lang = 'id';
    try { lang = localStorage.getItem('pf-lang') || 'id'; } catch (e) { /* ignore */ }
    setLang(lang === 'en' ? 'en' : 'id', false);
    applyTheme();
    runLoader();
  };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
