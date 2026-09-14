// Galerías y seguimiento de lectura exclusivos de la semana 2.
(() => {
  'use strict';
  const dialog = document.querySelector('#capture-dialog');
  const expanded = document.querySelector('#expanded-capture');
  let trigger = null;
  document.querySelectorAll('.evidence-shot').forEach(figure => {
    const image = figure.querySelector('img');
    const update = () => { figure.hidden = !(image.complete && image.naturalWidth > 0); };
    image.addEventListener('load', update);
    image.addEventListener('error', update);
    update();
    figure.querySelector('button').addEventListener('click', event => {
      trigger = event.currentTarget;
      expanded.src = image.src;
      expanded.alt = image.alt;
      document.querySelector('#capture-title').textContent = image.alt;
      dialog.showModal();
    });
  });
  document.querySelector('#close-viewer').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    const rect = dialog.getBoundingClientRect();
    if (event.target === dialog && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) dialog.close();
  });
  dialog.addEventListener('close', () => { if (trigger) trigger.focus(); });
  const filters = [...document.querySelectorAll('[data-filter]')];
  const groups = [...document.querySelectorAll('[data-audit]')];
  document.querySelector('.evidence-filters').hidden = false;
  filters.forEach(button => button.addEventListener('click', () => {
    filters.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    groups.forEach(group => { group.hidden = button.dataset.filter !== 'all' && button.dataset.filter !== group.dataset.audit; });
    document.querySelector('#filter-status').textContent = button.dataset.filter === 'all' ? 'Todas las revisiones.' : `Revisiones de ${button.textContent}.`;
    updateProgress();
  }));
  const progress = document.querySelector('.reading-progress');
  let scheduled = false;
  function updateProgress() {
    const distance = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.transform = `scaleX(${distance > 0 ? Math.min(1, Math.max(0, window.scrollY / distance)) : 0})`;
    scheduled = false;
  }
  window.addEventListener('scroll', () => { if (!scheduled) { scheduled = true; requestAnimationFrame(updateProgress); } }, { passive: true });
  window.addEventListener('resize', updateProgress);
  window.addEventListener('load', updateProgress);
  updateProgress();
  if ('IntersectionObserver' in window) {
    const links = [...document.querySelectorAll('.week-index a')];
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      links.forEach(link => {
        if (link.hash === `#${entry.target.id}`) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    }), { rootMargin: '-5% 0px -60% 0px', threshold: 0 });
    document.querySelectorAll('.lesson[id]').forEach(section => observer.observe(section));
  }
})();
