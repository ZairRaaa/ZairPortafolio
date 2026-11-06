(() => {
  'use strict';
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const progress = document.querySelector('.reading-progress');
  let scheduled = false;
  const updateProgress = () => {
    const distance = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.transform = `scaleX(${distance > 0 ? Math.min(1, Math.max(0, window.scrollY / distance)) : 0})`;
    scheduled = false;
  };
  window.addEventListener('scroll', () => { if (!scheduled) { scheduled = true; requestAnimationFrame(updateProgress); } }, { passive: true });
  window.addEventListener('resize', updateProgress);
  updateProgress();
  if ('IntersectionObserver' in window && !reducedMotion.matches) {
    const reveal = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('revealed'); reveal.unobserve(entry.target); }
    }), { threshold: 0.08 });
    const pause = document.querySelector('.learning-pause');
    pause.classList.add('reveal-ready');
    reveal.observe(pause);
  }
})();
