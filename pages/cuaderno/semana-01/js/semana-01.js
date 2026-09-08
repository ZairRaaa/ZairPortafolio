// Interacciones exclusivas de la semana 1.
(() => {
  'use strict';
  const steps = [...document.querySelectorAll('.request-steps li')];
  const next = document.querySelector('#step-next');
  const status = document.querySelector('#step-status');
  let current = -1;
  document.querySelector('.demo-controls').hidden = false;
  const showStep = index => {
    current = index;
    steps.forEach((step, position) => {
      const active = position === current;
      step.classList.toggle('active', active);
      if (active) step.setAttribute('aria-current', 'step'); else step.removeAttribute('aria-current');
    });
    next.textContent = current < 0 ? 'Recorrer paso a paso →' : current === steps.length - 1 ? 'Volver al primer paso ↻' : 'Siguiente paso →';
    status.textContent = current < 0 ? 'Recorrido reiniciado.' : `${current + 1} de ${steps.length}: ${steps[current].querySelector('strong').textContent}`;
  };
  next.addEventListener('click', () => showStep((current + 1) % steps.length));
  document.querySelector('#step-reset').addEventListener('click', () => showStep(-1));
  const quiz = document.querySelector('#review-quiz');
  const feedback = document.querySelector('#quiz-result');
  quiz.querySelector('button').hidden = false;
  quiz.addEventListener('submit', event => {
    event.preventDefault();
    const answer = new FormData(quiz).get('dns');
    feedback.textContent = answer === 'dns'
      ? 'Correcto. DNS resuelve nombres de dominio a direcciones IP; no define el diseño ni la estructura de la página.'
      : 'Vuelve a intentarlo: busco el sistema que resuelve nombres. HTML estructura el contenido y CSS define su presentación.';
  });
  quiz.addEventListener('change', () => { feedback.textContent = ''; });
  const progress = document.querySelector('.reading-progress');
  let scheduled = false;
  const updateProgress = () => {
    const distance = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.transform = `scaleX(${distance > 0 ? Math.min(1, Math.max(0, window.scrollY / distance)) : 0})`;
    scheduled = false;
  };
  window.addEventListener('scroll', () => {
    if (!scheduled) { scheduled = true; requestAnimationFrame(updateProgress); }
  }, { passive: true });
  window.addEventListener('resize', updateProgress);
  window.addEventListener('load', updateProgress);
  updateProgress();
  if ('IntersectionObserver' in window) {
    const links = [...document.querySelectorAll('.week-index a')];
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        links.forEach(link => {
          if (link.hash === `#${entry.target.id}`) link.setAttribute('aria-current', 'location');
          else link.removeAttribute('aria-current');
        });
      });
    }, { rootMargin: '-5% 0px -65% 0px', threshold: 0 });
    document.querySelectorAll('.lesson[id]').forEach(section => observer.observe(section));
  }
})();
