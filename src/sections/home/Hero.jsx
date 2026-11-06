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

export function Hero() {
  const hero = useRef(null);
  const { paused, togglePaused, motionPaused, showPauseControl } = useHeroMotion(hero);

  return (
    <>
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
          <div className="university-badge">
            <img src="assets/images/logos/Logo_uncp.webp" alt="Escudo de la UNCP" width="52" height="52" />
            <div><strong>Ingeniería de Sistemas</strong><span>UNCP · 9.º semestre</span></div>
            <span className="badge-spark" aria-hidden="true">✳</span>
          </div>
        </div>
      </section>
      <div className="discipline-strip">
        <div className="wrap">
          <span>DESARROLLO DE SOFTWARE</span><i>✳</i><span>ANÁLISIS DE DATOS</span><i>✳</i>
          <span>APRENDIZAJE CONTINUO</span><i>✳</i><span>INNOVACIÓN</span>
        </div>
      </div>
    </>
  );
}
