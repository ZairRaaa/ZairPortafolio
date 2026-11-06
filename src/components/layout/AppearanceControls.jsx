export function AppearanceControls({ appearance }) {
  return (
    <div className="appearance-controls">
      <button
        className="theme-toggle"
        type="button"
        aria-pressed={appearance?.theme === 'dark'}
        hidden={!appearance}
        onClick={() => window.portfolioAppearance.toggleTheme()}
      >
        <span aria-hidden="true">◐</span> Modo oscuro
      </button>
      <button
        className="palette-toggle"
        type="button"
        aria-pressed={appearance?.palette === 'red'}
        hidden={!appearance}
        onClick={() => window.portfolioAppearance.togglePalette()}
      >
        <span aria-hidden="true"></span> Paleta roja
      </button>
    </div>
  );
}
