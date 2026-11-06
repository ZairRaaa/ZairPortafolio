(() => {
  'use strict';

  const root = document.documentElement;
  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const browserColor = document.querySelector('meta[name="theme-color"]');
  const listeners = new Set();
  let appearanceTimer;
  let themeChosen = false;
  let appearance = {
    theme: root.dataset.theme || (systemTheme.matches ? 'dark' : 'light'),
    palette: root.dataset.palette || 'green',
  };

  try {
    themeChosen = ['light', 'dark'].includes(localStorage.getItem('portfolio-theme'));
  } catch { /* La preferencia del sistema sigue disponible. */ }

  function updateBrowserColor() {
    if (browserColor) browserColor.content = getComputedStyle(root).getPropertyValue('--paper').trim();
  }

  function updateAppearance(key, value) {
    if (appearance[key] === value) return;

    if (!reducedMotion.matches) {
      clearTimeout(appearanceTimer);
      root.classList.add('appearance-transition');
      appearanceTimer = setTimeout(() => root.classList.remove('appearance-transition'), 650);
    }

    appearance = { ...appearance, [key]: value };
    root.dataset[key] = value;
    updateBrowserColor();
    listeners.forEach(listener => listener());
  }

  function persist(key, value) {
    try { localStorage.setItem(key, value); } catch { /* La preferencia dura esta visita. */ }
  }

  function toggleTheme() {
    const next = appearance.theme === 'dark' ? 'light' : 'dark';
    themeChosen = true;
    updateAppearance('theme', next);
    persist('portfolio-theme', next);
  }

  function togglePalette() {
    const next = appearance.palette === 'red' ? 'green' : 'red';
    updateAppearance('palette', next);
    persist('portfolio-palette', next);
  }

  function subscribe(listener) {
    listeners.add(listener);
    return () => listeners.delete(listener);
  }

  window.portfolioAppearance = {
    getSnapshot: () => appearance,
    subscribe,
    toggleTheme,
    togglePalette,
  };

  systemTheme.addEventListener('change', event => {
    if (!themeChosen) updateAppearance('theme', event.matches ? 'dark' : 'light');
  });
  updateBrowserColor();

  // Las páginas migradas conectan sus controles desde React.
  if (document.currentScript?.hasAttribute('data-appearance-store')) return;

  const themeButton = document.querySelector('.theme-toggle');
  const paletteButton = document.querySelector('.palette-toggle');
  if (!themeButton || !paletteButton) return;

  function syncButtons() {
    themeButton.setAttribute('aria-pressed', String(appearance.theme === 'dark'));
    paletteButton.setAttribute('aria-pressed', String(appearance.palette === 'red'));
  }

  syncButtons();
  subscribe(syncButtons);
  themeButton.hidden = false;
  paletteButton.hidden = false;
  themeButton.addEventListener('click', toggleTheme);
  paletteButton.addEventListener('click', togglePalette);
})();
