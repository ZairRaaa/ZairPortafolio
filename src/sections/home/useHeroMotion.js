import { useLayoutEffect, useState } from 'react';

function followPointer(hero) {
  const layers = Array.from(hero.querySelectorAll('[data-depth]'), node => ({
    node,
    depth: Number(node.dataset.depth),
  }));
  const pointer = window.matchMedia('(hover: hover) and (pointer: fine)');
  let frame = 0;
  let x = 0;
  let y = 0;

  function reset() {
    cancelAnimationFrame(frame);
    frame = 0;
    for (const { node } of layers) {
      node.style.removeProperty('--word-x');
      node.style.removeProperty('--word-y');
    }
  }

  function move(event) {
    if (!pointer.matches || event.pointerType === 'touch') return;

    const rect = hero.getBoundingClientRect();
    x = (event.clientX - rect.left) / rect.width - 0.5;
    y = (event.clientY - rect.top) / rect.height - 0.5;
    if (frame) return;

    frame = requestAnimationFrame(() => {
      for (const { node, depth } of layers) {
        node.style.setProperty('--word-x', `${-x * depth}px`);
        node.style.setProperty('--word-y', `${-y * depth}px`);
      }
      frame = 0;
    });
  }

  hero.addEventListener('pointermove', move, { passive: true });
  hero.addEventListener('pointerleave', reset);
  pointer.addEventListener('change', reset);

  return () => {
    hero.removeEventListener('pointermove', move);
    hero.removeEventListener('pointerleave', reset);
    pointer.removeEventListener('change', reset);
    reset();
  };
}

export function useHeroMotion(hero) {
  const [paused, setPaused] = useState(false);
  const [environment, setEnvironment] = useState(null);
  const motionPaused = paused || Boolean(environment?.reduced || environment?.hidden);
  const ready = environment !== null;

  useLayoutEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');

    function syncEnvironment() {
      setEnvironment({ reduced: reduced.matches, hidden: document.hidden });
    }

    reduced.addEventListener('change', syncEnvironment);
    document.addEventListener('visibilitychange', syncEnvironment);
    syncEnvironment();

    return () => {
      reduced.removeEventListener('change', syncEnvironment);
      document.removeEventListener('visibilitychange', syncEnvironment);
    };
  }, []);

  useLayoutEffect(() => {
    if (ready && !motionPaused) return followPointer(hero.current);
  }, [hero, ready, motionPaused]);

  return {
    paused,
    motionPaused,
    showPauseControl: ready && !environment.reduced,
    togglePaused: () => setPaused(value => !value),
  };
}
