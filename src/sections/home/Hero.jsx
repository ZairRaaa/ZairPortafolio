import { Fragment, useRef } from 'react';
import { portraits } from '../../data/portraits.js';
import { EditorialPhoto } from './EditorialPhoto.jsx';
import { useHeroMotion } from './useHeroMotion.js';

const wordRows = [
  { depth: 18, words: ['React', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'Vite', 'Next.js', 'componentes'] },
  { depth: 24, words: ['ideas', 'diseñar', 'construir', 'aprender', 'crear', 'explorar', 'conectar', 'innovar'] },
  { depth: 30, words: ['Python', 'SQL', 'datos', 'Power BI', 'análisis', 'automatización', 'software', 'sistemas'] },
  { depth: 36, words: ['<code />', '{ ideas }', 'desarrollo', 'UNCP', 'curiosidad', 'frontend', 'interfaces', 'tecnología'] },
];

function WordGroup({ words }) {
  return (
    <div className="word-group">
      {words.map(word => (
        <Fragment key={word}><span>{word}</span><i>✧</i></Fragment>
      ))}
    </div>
  );
}

function HeroDepth() {
  return (
    <div className="hero-depth" aria-hidden="true">
      {wordRows.map(({ depth, words }, index) => (
        <div key={depth} className={'depth-row depth-row-' + (index + 1)} data-depth={depth}>
          <div className="word-track">
            <WordGroup words={words} />
            <WordGroup words={words} />
          </div>
        </div>
      ))}
    </div>
  );
}

const portraitOrbit = 'M28 430 C56 296 231 112 415 63 C516 36 591 65 586 123 C579 231 403 439 232 526 C113 586 38 568 28 518';

function PortraitOrbit() {
  return (
    <svg className="portrait-orbit" viewBox="0 0 620 620" preserveAspectRatio="none" data-depth="16" aria-hidden="true" focusable="false">
      <path className="orbit-guide" d={portraitOrbit} />
      <path className="orbit-sweep" d={portraitOrbit} pathLength="100" />
      <path className="orbit-guide orbit-secondary" d="M45 352 C104 227 258 91 409 43 C503 14 565 33 574 85 M108 551 C239 552 438 404 527 285" />
      <circle className="orbit-node" cx="415" cy="63" r="4" />
      <circle className="orbit-node" cx="232" cy="526" r="3" />
      <path className="orbit-crosshair" d="M415 49v28m-14-14h28M28 421v18m-9-9h18" />
    </svg>
  );
}

export function Hero() {
  const hero = useRef(null);
  const { paused, togglePaused, motionPaused, showPauseControl } = useHeroMotion(hero);

  return (
    <section
      className="hero wrap"
      id="inicio"
      aria-labelledby="hero-title"
      data-motion-paused={motionPaused ? '' : undefined}
      ref={hero}
    >
      <HeroDepth />
      <button
        className="hero-motion"
        type="button"
        aria-pressed={paused}
        hidden={!showPauseControl}
        onClick={togglePaused}
      >
        {paused ? 'Activar animación' : 'Pausar animación'}
      </button>
      <div className="hero-copy">
        <div className="eyebrow">PORTAFOLIO PERSONAL · INGENIERÍA DE SISTEMAS</div>
        <h1 id="hero-title">
          <span className="greeting-light">Hola, soy</span><br /><span className="name-light">Zair Ken<span className="name-dot">.</span></span>
        </h1>
        <p className="hero-statement">La curiosidad me mueve.<br />La tecnología me permite <em>crear.</em></p>
        <p className="hero-description">Estudiante de la UNCP. Conecto el desarrollo de software, los datos y las ganas de aprender para convertir ideas en soluciones útiles.</p>
        <div className="hero-actions">
          <a className="button primary" href="#proyectos">Explora mis proyectos <span aria-hidden="true">↗</span></a>
          <a className="text-link" href="pages/cuaderno/index.html">Mi cuaderno <span aria-hidden="true">↗</span></a>
        </div>
        <div className="hero-location">
          <span aria-hidden="true">◎</span> Chupaca, Junín · Perú <span className="location-line"></span> Aprendiendo y construyendo
        </div>
      </div>
      <div className="hero-visual portrait-intro">
        <figure className="editorial-photo intro-photo">
          <EditorialPhoto photo={portraits.intro} />
        </figure>
        <PortraitOrbit />
        <div className="university-badge">
          <img src="assets/images/logos/Logo_uncp.webp" alt="Escudo de la UNCP" width="52" height="52" />
          <div><strong>Ingeniería de Sistemas</strong><span>UNCP · 9.º semestre</span></div>
          <span className="badge-spark" aria-hidden="true">✳</span>
        </div>
      </div>
    </section>
  );
}
