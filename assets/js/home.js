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
    document.querySelectorAll('.education-grid, .notebook-inner, .contact-grid, .learning-pause').forEach(element => {
      element.classList.add('reveal-ready'); reveal.observe(element);
    });
  }
  const copy = document.querySelector('.copy-email');
  const status = document.querySelector('.copy-status');
  if (navigator.clipboard && window.isSecureContext) {
    copy.hidden = false;
    copy.addEventListener('click', async () => {
      try { await navigator.clipboard.writeText('a3278811@gmail.com'); status.textContent = 'Correo copiado. ¡Conversemos!'; }
      catch { status.textContent = 'No se pudo copiar. Puedes seleccionar el correo o pulsarlo para escribir.'; }
    });
  }
})();
