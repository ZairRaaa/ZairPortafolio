(() => {
  'use strict';
  let appearanceTimer;
  const animateAppearance = () => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    clearTimeout(appearanceTimer);
    document.documentElement.classList.add('appearance-transition');
    appearanceTimer = setTimeout(() => document.documentElement.classList.remove('appearance-transition'), 650);
  };
  const updateBrowserColor = () => {
    document.querySelector('meta[name="theme-color"]').content = getComputedStyle(document.documentElement).getPropertyValue('--paper').trim();
  };
  const paletteButton = document.querySelector('.palette-toggle');
  paletteButton.hidden = false;
  paletteButton.setAttribute('aria-pressed', String(document.documentElement.dataset.palette === 'red'));
  paletteButton.addEventListener('click', () => {
    animateAppearance();
    const next = document.documentElement.dataset.palette === 'red' ? 'green' : 'red';
    document.documentElement.dataset.palette = next;
    paletteButton.setAttribute('aria-pressed', String(next === 'red'));
    try { localStorage.setItem('portfolio-palette', next); } catch { /* Funciona también sin almacenamiento. */ }
    updateBrowserColor();
  });
  const themeButton = document.querySelector('.theme-toggle');
  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');
  let themeChosen = false;
  try { themeChosen = ['light', 'dark'].includes(localStorage.getItem('portfolio-theme')); } catch { /* Storage is optional. */ }
  const applyTheme = theme => {
    const dark = theme === 'dark';
    document.documentElement.dataset.theme = theme;
    themeButton.setAttribute('aria-pressed', String(dark));
    updateBrowserColor();
  };
  themeButton.hidden = false;
  applyTheme(document.documentElement.dataset.theme || (systemTheme.matches ? 'dark' : 'light'));
  themeButton.addEventListener('click', () => {
    const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    themeChosen = true;
    animateAppearance();
    applyTheme(next);
    try { localStorage.setItem('portfolio-theme', next); } catch { /* The theme still works for this visit. */ }
  });
  systemTheme.addEventListener('change', event => {
    if (!themeChosen) { animateAppearance(); applyTheme(event.matches ? 'dark' : 'light'); }
  });
})();
