// Se aplica antes de pintar la página para evitar un destello al cargar.
(() => {
  let saved = null;
  let palette = 'green';
  try { palette = localStorage.getItem('portfolio-palette') === 'red' ? 'red' : 'green'; } catch { /* Preferencia opcional. */ }
  document.documentElement.dataset.palette = palette;
  try { saved = localStorage.getItem('portfolio-theme'); } catch { /* La preferencia del sistema sigue disponible. */ }
  const dark = saved === 'dark' || (saved !== 'light' && window.matchMedia('(prefers-color-scheme: dark)').matches);
  document.documentElement.dataset.theme = dark ? 'dark' : 'light';
})();
