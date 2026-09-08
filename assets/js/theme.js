// Se aplica antes de pintar la página para evitar un destello al cargar.
(() => {
  let saved = null;
  try { saved = localStorage.getItem('portfolio-theme'); } catch { /* La preferencia del sistema sigue disponible. */ }
  const dark = saved === 'dark' || (saved !== 'light' && window.matchMedia('(prefers-color-scheme: dark)').matches);
  document.documentElement.dataset.theme = dark ? 'dark' : 'light';
})();
