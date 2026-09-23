/* Cuenta trazable · V2. Movimiento progresivo, reversible y ajeno al cálculo. */
(() => {
  'use strict';
  if (!window.matchMedia || !document.body) return;

  const desktop = matchMedia('(min-width: 1024px) and (pointer: fine)');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const root = document.documentElement;
  const animations = new Set();
  const timers = new Set();
  const clockTasks = new Set();
  const revealed = new WeakSet();
  const heroVideo = document.querySelector('.hero-video');
  const heroValues = [...document.querySelectorAll('.hero-stat-value')];
  const heroFinal = heroValues.map(el => el.textContent.trim());
  const titleLines = [...document.querySelectorAll('.hero-title > span')];
  const titleOriginals = titleLines.map(el => el.innerHTML);
  const golf = document.querySelector('#golfBody');
  const filter = document.querySelector('#golfFilter');
  let active = false;
  let frame = 0;
  let progressDirty = true;
  let observer = null;
  let mutation = null;
  let previousGolfRects = null;
  let heroPlayed = false;
  let titlePlayed = false;
  let heroVideoDone = false;

  heroVideo?.addEventListener('ended', () => { heroVideoDone = true; });

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

  // Titular del hero: entra carácter a carácter, en orden de lectura, una sola vez.
  // El HTML de partida ya es el texto final (SEO, sin JS, movimiento reducido); esto solo lo trocea al vuelo.
  function splitTitleChars() {
    let i = 0;
    function fragmentOf(nodes) {
      const frag = document.createDocumentFragment();
      nodes.forEach(node => {
        if (node.nodeType === Node.TEXT_NODE) {
          [...node.textContent].forEach(ch => {
            const span = document.createElement('span');
            span.className = 'hero-char';
            span.style.setProperty('--i', i++);
            span.textContent = ch === ' ' ? '\u00A0' : ch;
            frag.appendChild(span);
          });
        } else if (node.nodeType === Node.ELEMENT_NODE) {
          const clone = document.createElement(node.tagName.toLowerCase());
          clone.appendChild(fragmentOf([...node.childNodes]));
          frag.appendChild(clone);
        }
      });
      return frag;
    }
    titleLines.forEach(lineEl => {
      const label = lineEl.textContent.trim();
      const built = fragmentOf([...lineEl.childNodes]);
      lineEl.setAttribute('aria-label', label);
      lineEl.innerHTML = '';
      const wrap = document.createElement('span');
      wrap.className = 'hero-split';
      wrap.setAttribute('aria-hidden', 'true');
      wrap.appendChild(built);
      lineEl.appendChild(wrap);
    });
  }

  function animateTitle() {
    if (!active || titlePlayed || !titleLines.length) return;
    titlePlayed = true;
    splitTitleChars();
  }

  function restoreTitle() {
    titleLines.forEach((lineEl, index) => {
      if (lineEl.innerHTML === titleOriginals[index]) return;
      lineEl.innerHTML = titleOriginals[index];
      lineEl.removeAttribute('aria-label');
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

  // Al abrir una ficha entran los dos bloques y sus barras crecen desde cero.
  // Ya no hay panel de cuenta ni dial: la nota vive en la cabecera y el reparto,
  // en la barra de cada bloque.
  function animateChain(svg) {
    if (!svg) return;
    const radios = svg.querySelectorAll('.adn-g');
    // El paso se reparte entre los campos que haya: con cinco se puede ir
    // despacio y con dieciseis no, o la ultima rama entraria muy tarde. La
    // suma total se queda siempre en torno a los tres segundos.
    const paso = Math.max(110, Math.min(230, 1500 / Math.max(radios.length, 1)));
    reveal(svg.querySelector('.adn-base'), 0, 0);
    play(svg.querySelector('.adn-core'), [{ transform: 'scale(.2)', opacity: 0 }, { transform: 'scale(1)', opacity: 1 }],
      { duration: 840, delay: 260, easing: 'cubic-bezier(.2,.9,.3,1.2)' });
    radios.forEach((g, i) => {
      const t = 560 + i * paso;
      play(g.querySelector('.adn-l'), [{ strokeDashoffset: 1 }, { strokeDashoffset: 0 }],
        { duration: 1100, delay: t, easing: 'cubic-bezier(.2,.72,.2,1)' });
      play(g.querySelector('.adn-n'), [{ transform: 'scale(0)' }, { transform: 'scale(1)' }],
        { duration: 720, delay: t + 680, easing: 'cubic-bezier(.2,.9,.3,1.3)' });
      const ref = g.querySelector('.adn-ref');
      if (ref) play(ref, [{ opacity: 0, transform: 'scale(.4)' }, { opacity: 1, transform: 'scale(1)' }],
        { duration: 880, delay: t + 1060, easing: 'cubic-bezier(.2,.9,.3,1.2)' });
    });
  }

  // Cada bloque se anima cuando entra en pantalla, no al abrir la ficha: la
  // ficha mide casi tres pantallas y para cuando llegabas al golf la animacion
  // habia terminado hacia rato. Como la ficha abierta es una capa con scroll
  // propio, el observador mira dentro de ella y no dentro de la ventana.
  function armarFicha(detail) {
    if (!detail.open || !('IntersectionObserver' in window)) return;
    const vistos = new WeakSet();
    const ojo = new IntersectionObserver(entradas => {
      entradas.forEach(e => {
        if (!e.isIntersecting || vistos.has(e.target)) return;
        vistos.add(e.target);
        ojo.unobserve(e.target);
        if (e.target.matches('.adn-svg')) animateChain(e.target);
        else animarBloque(e.target);
      });
    // Umbral cero y margen inferior: un bloque puede medir mas que la ventana,
    // asi que pedir un porcentaje de area visible no dispararia nunca. Salta en
    // cuanto su borde superior entra en el 82 % alto de la capa.
    }, { root: detail, rootMargin: '0px 0px -18% 0px', threshold: 0 });
    // La cadena se observa aparte: vive unos 400 px por debajo del borde del
    // bloque, detras del hero del campo, y arrancaria antes de verse.
    detail.querySelectorAll('.fb, .adn-svg').forEach(b => ojo.observe(b));
    detail.addEventListener('toggle', () => { if (!detail.open) ojo.disconnect(); }, { once: true });
  }

  // Conteo progresivo de las puntuaciones, con el mismo motor que las cifras
  // del hero de la portada. Solo cuenta el primer nodo de texto: el divisor
  // —el <small> con «/40»— se queda quieto mientras la cifra sube.
  function contar(el, duration, delay) {
    const nodo = el.firstChild;
    if (!nodo || nodo.nodeType !== Node.TEXT_NODE) return;
    const final = nodo.nodeValue.trim();
    const meta = Number.parseFloat(final);
    if (!Number.isFinite(meta) || meta <= 0) return;
    const decimales = (final.split(',')[1] || '').length;
    const pintar = v => v.toFixed(decimales).replace('.', ',');
    el.setAttribute('aria-label', el.textContent.trim());
    nodo.nodeValue = pintar(0);
    const arranca = performance.now() + delay;
    schedule(now => {
      if (now < arranca) return true;
      const raw = Math.min(1, (now - arranca) / duration);
      const eased = 1 - Math.pow(1 - raw, 3);
      nodo.nodeValue = raw === 1 ? final : pintar(meta * eased);
      if (raw === 1) el.removeAttribute('aria-label');
      return raw < 1;
    });
  }

  function animarBloque(bloque) {
    reveal(bloque, 0, 24);
    bloque.querySelectorAll('.fb-nota').forEach(el => contar(el, 1500, 220));
    bloque.querySelectorAll('.crit > strong').forEach((el, i) => contar(el, 1100, 520 + Math.min(i, 9) * 105));
    bloque.querySelectorAll('.cm-parte strong').forEach((el, i) => contar(el, 1300, 260 + i * 240));
    bloque.querySelectorAll('.cm-total strong').forEach(el => contar(el, 1700, 620));
    bloque.querySelectorAll('.cm-parte .measure-fill').forEach((fill, i) => {
      const ratio = Number.parseFloat(getComputedStyle(fill).getPropertyValue('--ratio')) || 0;
      play(fill, [{ transform: 'scaleX(0)' }, { transform: `scaleX(${ratio})` }], {
        duration: 1500, delay: 320 + i * 240, easing: 'cubic-bezier(.2,.72,.2,1)'
      });
    });
    bloque.querySelectorAll('.quick-facts dd').forEach((el, i) => contar(el, 1200, 320 + i * 150));
    bloque.querySelectorAll('.fb-cab .measure-fill').forEach(fill => {
      const ratio = Number.parseFloat(getComputedStyle(fill).getPropertyValue('--ratio')) || 0;
      play(fill, [{ transform: 'scaleX(0)' }, { transform: `scaleX(${ratio})` }], {
        duration: 1600, delay: 260, easing: 'cubic-bezier(.2,.72,.2,1)'
      });
    });
    bloque.querySelectorAll('.crit .measure-fill').forEach((fill, index) => {
      const ratio = Number.parseFloat(getComputedStyle(fill).getPropertyValue('--ratio')) || 0;
      play(fill, [{ transform: 'scaleX(0)' }, { transform: `scaleX(${ratio})` }], {
        duration: 1250, delay: 520 + Math.min(index, 9) * 105, easing: 'cubic-bezier(.2,.72,.2,1)'
      });
    });
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
    restoreHero();
    restoreTitle();
    if (heroVideo) { heroVideo.hidden = true; heroVideo.pause(); }
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
    if (!eligible || reduced.matches || document.hidden) return;
    active = true;
    progress.hidden = false;
    progress.removeAttribute('aria-hidden');
    progressDirty = true;
    window.addEventListener('scroll', scheduleProgress, { passive: true });
    window.addEventListener('resize', scheduleProgress, { passive: true });
    startObservers();
    // Si la ficha ya venia abierta por enlace directo, el <details> se abrio
    // en guia.js antes de que esto existiera y su toggle no lo vio nadie.
    const yaAbierta = document.querySelector('details.promo[open]');
    if (yaAbierta) later(() => armarFicha(yaAbierta), 360);
    animateHero();
    animateTitle();
    if (heroVideo) { heroVideo.hidden = false; if (!heroVideoDone) heroVideo.play().catch(() => {}); }
    schedule();
  }

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
      later(() => armarFicha(detail), 360);
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
