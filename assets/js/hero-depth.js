// Movimiento por capas, sin interceptar los enlaces de la portada.
(() => {
  'use strict';
  const hero = document.querySelector('.hero');
  if (!hero) return;
  const words = [...hero.querySelectorAll('[data-depth]')];
  const button = hero.querySelector('.hero-motion');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const pointer = matchMedia('(hover: hover) and (pointer: fine)');
  let paused = false;
  let frame = 0;
  let x = 0;
  let y = 0;

  function reset() {
    cancelAnimationFrame(frame);
    frame = 0;
    words.forEach(word => {
      word.style.removeProperty('--word-x');
      word.style.removeProperty('--word-y');
    });
  }

  function sync() {
    hero.toggleAttribute('data-motion-paused', paused || reduced.matches || document.hidden);
    button.hidden = reduced.matches;
    button.setAttribute('aria-pressed', String(paused));
    button.textContent = paused ? 'Activar animación' : 'Pausar animación';
    reset();
  }

  hero.addEventListener('pointermove', event => {
    if (paused || reduced.matches || !pointer.matches || event.pointerType === 'touch') return;
    const rect = hero.getBoundingClientRect();
    x = (event.clientX - rect.left) / rect.width - .5;
    y = (event.clientY - rect.top) / rect.height - .5;
    if (frame) return;
    frame = requestAnimationFrame(() => {
      words.forEach(word => {
        const depth = Number(word.dataset.depth);
        word.style.setProperty('--word-x', `${-x * depth}px`);
        word.style.setProperty('--word-y', `${-y * depth}px`);
      });
      frame = 0;
    });
  }, { passive: true });
  hero.addEventListener('pointerleave', reset);
  button.addEventListener('click', () => { paused = !paused; sync(); });
  reduced.addEventListener('change', sync);
  pointer.addEventListener('change', reset);
  document.addEventListener('visibilitychange', sync);
  sync();
})();
