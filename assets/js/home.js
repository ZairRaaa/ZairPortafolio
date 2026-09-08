(() => {
  'use strict';
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const menuButton = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('#navigation');
  menuButton.hidden = false;
  document.querySelector('.header').classList.add('js-menu');
  const closeMenu = () => { navigation.classList.remove('open'); menuButton.setAttribute('aria-expanded', 'false'); };
  menuButton.addEventListener('click', () => {
    const open = navigation.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(open));
  });
  navigation.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && navigation.classList.contains('open')) { closeMenu(); menuButton.focus(); }
  });
  const photos = [
    ['assets/images/perfil/foto_perfil3.jpg', 'Zair Ken frente a una iglesia de piedra en Cusco', '50% 42%'],
    ['assets/images/perfil/foto_perfil.jpg', 'Zair Ken junto a un mural de colibríes en San Blas', '50% 55%'],
    ['assets/images/perfil/foto_perfil1.jpg', 'Zair Ken en un mirador con la ciudad iluminada de noche', '50% 50%']
  ];
  const photo = document.querySelector('#hero-photo');
  document.querySelectorAll('[data-photo]').forEach(button => {
    button.addEventListener('click', () => {
      const [src, alt, position] = photos[Number(button.dataset.photo)];
      photo.src = src; photo.alt = alt; photo.style.objectPosition = position;
      document.querySelectorAll('[data-photo]').forEach(item => {
        item.classList.toggle('selected', item === button);
        item.setAttribute('aria-pressed', String(item === button));
      });
    });
  });
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
  if ('IntersectionObserver' in window) {
    if (!reducedMotion.matches) {
      const reveal = new IntersectionObserver(entries => entries.forEach(entry => {
        if (entry.isIntersecting) { entry.target.classList.add('revealed'); reveal.unobserve(entry.target); }
      }), { threshold: 0.08 });
      document.querySelectorAll('.about-grid, .skills, .project-card, .education-grid, .notebook-inner, .contact-grid').forEach(element => {
        element.classList.add('reveal-ready'); reveal.observe(element);
      });
    }
    const links = [...navigation.querySelectorAll('a')];
    const activeSection = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) links.forEach(link => {
        const active = link.hash === `#${entry.target.id}`;
        link.classList.toggle('active', active);
        if (active) link.setAttribute('aria-current', 'location'); else link.removeAttribute('aria-current');
      });
    }), { rootMargin: '-10% 0px -55% 0px', threshold: 0 });
    document.querySelectorAll('main section[id]').forEach(section => activeSection.observe(section));
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
  document.querySelector('#year').textContent = new Date().getFullYear();
})();
