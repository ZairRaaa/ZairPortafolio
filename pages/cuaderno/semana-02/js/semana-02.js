// Galerías y visor de evidencias de la semana 2.
(() => {
  'use strict';
  const dialog = document.querySelector('#evidence-dialog');
  if (dialog && typeof dialog.showModal === 'function') {
    const fullImage = dialog.querySelector('#evidence-full');
    const title = dialog.querySelector('#evidence-title');
    const description = dialog.querySelector('#evidence-description');
    const position = dialog.querySelector('#evidence-position');
    let gallery = [];
    let current = 0;
    let trigger = null;

    function getVisibleItems() {
      return [...document.querySelectorAll('.evidence-shot:not([hidden]) button')];
    }

    function display(index) {
      if (gallery.length === 0) return;
      current = (index + gallery.length) % gallery.length;
      const btn = gallery[current];
      const img = btn.querySelector('img');
      const figcaption = btn.closest('figure')?.querySelector('figcaption');
      fullImage.src = img.src;
      fullImage.alt = img.alt;
      title.textContent = figcaption?.textContent || img.alt || 'Evidencia';
      description.textContent = img.alt || '';
      position.textContent = `${current + 1} / ${gallery.length} · Evidencias`;
      dialog.querySelector('.viewer-stage').scrollTop = 0;
    }

    document.querySelectorAll('.evidence-shot').forEach(figure => {
      figure.hidden = false; // Asegurar que sea visible
      const button = figure.querySelector('button');
      if (!button) return;
      button.addEventListener('click', event => {
        trigger = event.currentTarget;
        gallery = getVisibleItems();
        display(gallery.indexOf(trigger));
        dialog.showModal();
        document.documentElement.classList.add('evidence-open');
      });
    });

    dialog.querySelector('#evidence-close')?.addEventListener('click', () => dialog.close());
    dialog.querySelector('#evidence-prev')?.addEventListener('click', () => display(current - 1));
    dialog.querySelector('#evidence-next')?.addEventListener('click', () => display(current + 1));
    dialog.addEventListener('keydown', event => {
      if (!['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
      event.preventDefault();
      display(current + (event.key === 'ArrowRight' ? 1 : -1));
    });
    dialog.addEventListener('click', event => {
      const rect = dialog.getBoundingClientRect();
      if (event.target === dialog && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) dialog.close();
    });
    dialog.addEventListener('close', () => {
      document.documentElement.classList.remove('evidence-open');
      if (trigger) trigger.focus();
    });
  }
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
