/* Cuenta trazable · V2. Movimiento progresivo, reversible y ajeno al cálculo. */
(() => {
  'use strict';
  if (!window.matchMedia || !document.body) return;

  const desktop = matchMedia('(min-width: 1024px) and (pointer: fine)');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const root = document.documentElement;
  const pauseKey = 'cds-motion-paused';
  const animations = new Set();
  const timers = new Set();
  const clockTasks = new Set();
  const revealed = new WeakSet();
  const heroValues = [...document.querySelectorAll('.hero-stat-value')];
  const heroFinal = heroValues.map(el => el.textContent.trim());
  const golf = document.querySelector('#golfBody');
  const filter = document.querySelector('#golfFilter');
  let paused = false;
  let active = false;
  let frame = 0;
  let progressDirty = true;
  let observer = null;
  let mutation = null;
  let previousGolfRects = null;
  let heroPlayed = false;

  try { paused = localStorage.getItem(pauseKey) === 'true'; } catch (_) { /* Optional persistence. */ }

  const tools = document.createElement('div');
  tools.className = 'motion-tools';
  const button = document.createElement('button');
  button.type = 'button';
  tools.append(button);
  document.querySelector('#main')?.prepend(tools);

  const progress = document.createElement('div');
  progress.className = 'motion-progress';
  progress.setAttribute('role', 'progressbar');
  progress.setAttribute('aria-label', 'Progreso de lectura');
  progress.setAttribute('aria-valuemin', '0');
  progress.setAttribute('aria-valuemax', '100');
  document.body.append(progress);

  const golfResult = document.createElement('p');
  if (golf) {
    golfResult.className = 'motion-filter-result';
    golfResult.setAttribute('role', 'status');
    golfResult.setAttribute('aria-live', 'polite');
    golf.before(golfResult);
  }

  document.querySelectorAll('.method-block').forEach(block => {
    const note = document.createElement('p');
    note.className = 'motion-note';
    note.textContent = 'Capacidad máxima del bloque · no puntuación obtenida';
    block.querySelector('.method-weight')?.after(note);
  });
  const method = document.querySelector('.method-grid');
  if (method) {
    const note = document.createElement('p');
    note.className = 'motion-note';
    note.textContent = 'Seis criterios salen de datos. A5, A6, B1 y B4 son valoraciones editoriales justificadas; no mediciones automáticas.';
    method.after(note);
  }

  function setGolfCount() {
    if (!golf) return;
    const total = golf.querySelectorAll('.cc').length;
    golfResult.textContent = `${total} ${total === 1 ? 'campo mostrado' : 'campos mostrados'} · selección actual`;
  }

  function updateProgress() {
    progressDirty = false;
    const range = root.scrollHeight - innerHeight;
    const value = range > 0 ? Math.min(1, Math.max(0, scrollY / range)) : 1;
    progress.style.setProperty('--motion-progress', String(value));
    progress.setAttribute('aria-valuenow', String(Math.round(value * 100)));
  }

  function tick(now) {
    frame = 0;
    if (!active) return;
    if (progressDirty) updateProgress();
    clockTasks.forEach(task => { if (task(now) === false) clockTasks.delete(task); });
    if (clockTasks.size || progressDirty) frame = requestAnimationFrame(tick);
  }

  function schedule(task) {
    if (task) clockTasks.add(task);
    if (active && !frame) frame = requestAnimationFrame(tick);
  }

  function scheduleProgress() {
    progressDirty = true;
    schedule();
  }

  function play(el, frames, options) {
    if (!active || !el || typeof el.animate !== 'function') return null;
    let animation;
    try { animation = el.animate(frames, options); } catch (_) { return null; }
    animations.add(animation);
    el.classList.add('motion-running');
    const clean = () => {
      animations.delete(animation);
      el.classList.remove('motion-running');
    };
    animation.onfinish = clean;
    animation.oncancel = clean;
    return animation;
  }

  function later(fn, delay) {
    const timer = setTimeout(() => {
      timers.delete(timer);
      if (active) fn();
    }, delay);
    timers.add(timer);
  }

  function heroText(index, value) {
    if (index === 0) return String(Math.round(14 * value));
    if (index === 1) return String(Math.round(61 * value));
    if (index === 2) {
      const low = Math.round(500 * value);
      const high = Math.round(5 * value * 10) / 10;
      return `€${low}k–${Number.isInteger(high) ? high.toFixed(0) : high.toFixed(1)}M`;
    }
    return `${Math.round(100 * value)} pts`;
  }

  function restoreHero() {
    heroValues.forEach((el, index) => {
      el.textContent = heroFinal[index];
      el.removeAttribute('aria-label');
    });
  }

  function animateHero() {
    if (!active || !heroValues.length || heroPlayed) return;
    heroPlayed = true;
    heroValues.forEach((el, index) => {
      const startAt = performance.now() + index * 120;
      const duration = 1050 + index * 90;
      el.setAttribute('aria-label', heroFinal[index]);
      el.textContent = heroText(index, 0);
      schedule(now => {
        if (now < startAt) return true;
        const raw = Math.min(1, (now - startAt) / duration);
        const eased = 1 - Math.pow(1 - raw, 3);
        el.textContent = raw === 1 ? heroFinal[index] : heroText(index, eased);
        if (raw === 1) el.removeAttribute('aria-label');
        return raw < 1;
      });
    });
  }

  function reveal(el, delay = 0, distance = 28) {
    return play(el, [
      { transform: `translateY(${distance}px)`, opacity: 0, clipPath: 'inset(0 0 18% 0)' },
      { transform: 'translateY(0)', opacity: 1, clipPath: 'inset(0 0 0 0)' }
    ], { duration: 540, delay, easing: 'cubic-bezier(.2,.72,.2,1)', fill: 'backwards' });
  }

  function animateRanking(entries) {
    const visible = entries.filter(entry => entry.isIntersecting).map(entry => entry.target);
    visible.sort((a, b) => [...a.parentElement.children].indexOf(a) - [...b.parentElement.children].indexOf(b));
    visible.forEach((card, index) => {
      observer?.unobserve(card);
      if (revealed.has(card)) return;
      revealed.add(card);
      reveal(card, Math.min(index, 5) * 82, 34);
    });
  }

  function animateMethod(block) {
    reveal(block.querySelector('.method-weight'), 0, 20);
    block.querySelectorAll('.method-row').forEach((row, index) => reveal(row, 90 + index * 52, 22));
  }

  function animateAccount(detail) {
    const panel = detail.querySelector('.account-panel');
    if (!panel || !detail.open) return;
    panel.classList.remove('is-tracing');
    void panel.offsetWidth;
    panel.classList.add('is-tracing');
    reveal(panel.querySelector('[data-motion="evidence"]'), 0, 26);
    panel.querySelectorAll('[data-motion="contribution"]').forEach((el, index) => {
      reveal(el, 120 + index * 110, 26);
      el.querySelectorAll('.measure-fill').forEach(fill => {
        const ratio = Number.parseFloat(getComputedStyle(fill).getPropertyValue('--ratio')) || 0;
        play(fill, [{ transform: 'scaleX(0)' }, { transform: `scaleX(${ratio})` }], {
          duration: 780, delay: 260 + index * 110, easing: 'cubic-bezier(.2,.72,.2,1)'
        });
      });
    });
    reveal(panel.querySelector('[data-motion="result"]'), 380, 26);
    const dial = panel.querySelector('.dial-value');
    const score = Number.parseFloat(detail.querySelector('.score-dial strong')?.textContent) || 0;
    if (dial) play(dial, [
      { strokeDasharray: '0 100', strokeDashoffset: score },
      { strokeDasharray: `${score} 100`, strokeDashoffset: 0 }
    ], { duration: 900, delay: 480, easing: 'cubic-bezier(.2,.72,.2,1)' });
  }

  function animateCriteria(section) {
    section.querySelectorAll('.measure-fill').forEach((fill, index) => {
      const ratio = Number.parseFloat(getComputedStyle(fill).getPropertyValue('--ratio')) || 0;
      play(fill, [{ transform: 'scaleX(0)' }, { transform: `scaleX(${ratio})` }], {
        duration: 620, delay: Math.min(index, 9) * 34, easing: 'cubic-bezier(.2,.72,.2,1)'
      });
    });
  }

  function captureGolfRects() {
    if (!active || !golf) return;
    previousGolfRects = new Map([...golf.querySelectorAll('.cc')].map(card => [card.dataset.courseId, card.getBoundingClientRect()]));
  }

  function flipGolf() {
    if (!golf) return false;
    setGolfCount();
    const oldRects = previousGolfRects;
    previousGolfRects = null;
    const cards = [...golf.querySelectorAll('.cc')];
    if (!active || !oldRects) return false;
    cards.forEach((card, index) => {
      const before = oldRects.get(card.dataset.courseId);
      const after = card.getBoundingClientRect();
      if (before) {
        const dx = before.left - after.left;
        const dy = before.top - after.top;
        play(card, [
          { transform: `translate(${dx}px, ${dy}px)`, opacity: .72 },
          { transform: 'translate(0, 0)', opacity: 1 }
        ], { duration: 480, delay: Math.min(index, 7) * 24, easing: 'cubic-bezier(.2,.72,.2,1)' });
      } else {
        reveal(card, Math.min(index, 7) * 34, 24);
      }
    });
    return false;
  }

  function stop() {
    active = false;
    observer?.disconnect();
    mutation?.disconnect();
    observer = mutation = null;
    timers.forEach(clearTimeout);
    timers.clear();
    animations.forEach(animation => animation.cancel());
    animations.clear();
    clockTasks.clear();
    if (frame) cancelAnimationFrame(frame);
    frame = 0;
    window.removeEventListener('scroll', scheduleProgress);
    window.removeEventListener('resize', scheduleProgress);
    progress.hidden = true;
    progress.setAttribute('aria-hidden', 'true');
    document.querySelectorAll('.account-panel.is-tracing').forEach(el => el.classList.remove('is-tracing'));
    restoreHero();
    setGolfCount();
  }

  function startObservers() {
    if ('IntersectionObserver' in window) {
      observer = new IntersectionObserver(entries => {
        animateRanking(entries.filter(entry => entry.target.matches('details.promo')));
        entries.forEach(entry => {
          if (!entry.isIntersecting || entry.target.matches('details.promo')) return;
          observer?.unobserve(entry.target);
          if (revealed.has(entry.target)) return;
          revealed.add(entry.target);
          if (entry.target.matches('.method-block')) animateMethod(entry.target);
          else reveal(entry.target, 0, 22);
        });
      }, { rootMargin: '0px 0px -5% 0px', threshold: .08 });
      document.querySelectorAll('details.promo, .method-block, .formula-item, .pin-promo-num').forEach(el => observer.observe(el));
    }
    if (golf && 'MutationObserver' in window) {
      mutation = new MutationObserver(() => schedule(flipGolf));
      mutation.observe(golf, { childList: true });
    }
  }

  function sync() {
    stop();
    const eligible = desktop.matches;
    root.classList.toggle('motion-ready', eligible);
    button.disabled = reduced.matches;
    button.textContent = reduced.matches
      ? 'Movimiento reducido · preferencia del sistema'
      : paused ? 'Reanudar movimiento' : 'Pausar movimiento';
    button.setAttribute('aria-pressed', String(paused || reduced.matches));
    if (!eligible || reduced.matches || paused || document.hidden) return;
    active = true;
    progress.hidden = false;
    progress.removeAttribute('aria-hidden');
    progressDirty = true;
    window.addEventListener('scroll', scheduleProgress, { passive: true });
    window.addEventListener('resize', scheduleProgress, { passive: true });
    startObservers();
    animateHero();
    schedule();
  }

  button.addEventListener('click', () => {
    paused = !paused;
    try { localStorage.setItem(pauseKey, String(paused)); } catch (_) { /* Optional persistence. */ }
    sync();
  });

  filter?.addEventListener('click', captureGolfRects, true);
  filter?.addEventListener('click', () => {
    // El render del filtro ocurre en el botón (fase target); al llegar aquí el DOM ya es el nuevo.
    setGolfCount();
    if (active) schedule(flipGolf);
    else previousGolfRects = null;
  });

  document.querySelectorAll('details.promo').forEach(detail => {
    detail.addEventListener('toggle', () => {
      if (!detail.open || !active) return;
      later(() => animateAccount(detail), 420);
    });
    detail.querySelectorAll('.promo-section').forEach(section => {
      section.addEventListener('toggle', () => {
        if (section.open && active && section.querySelector('.criteria-grid')) animateCriteria(section);
      });
    });
  });

  document.addEventListener('visibilitychange', sync);
  [desktop, reduced].forEach(media => {
    if (media.addEventListener) media.addEventListener('change', sync);
    else if (media.addListener) media.addListener(sync);
  });
  setGolfCount();
  sync();
})();
