import { useLayoutEffect, useRef } from 'react';
import { portraits } from '../../data/portraits.js';
import { EditorialPhoto } from './EditorialPhoto.jsx';
import { observeReveal } from './reveal.js';

export function About() {
  const introduction = useRef(null);
  const personalNote = useRef(null);

  useLayoutEffect(() => observeReveal([introduction.current, personalNote.current]), []);

  return (
    <>
      <div className="section-marker">01 / SOBRE MÍ</div>
      <div className="about-grid" ref={introduction}>
        <h2>Entender primero.<br />Construir <em>después.</em></h2>
        <div>
          <p className="lead">Soy Zair Ken Rojas Cerron, estudiante de Ingeniería de Sistemas en la Universidad Nacional del Centro del Perú.</p>
          <p>Me interesa entender cómo funcionan las cosas y cómo hacerlas mejor. Mi formación combina análisis de datos, desarrollo de software y automatización de información.</p>
          <p>Me identifico con el pensamiento analítico, la empatía y el trabajo en equipo. Busco seguir creciendo en proyectos donde la tecnología resuelva necesidades reales.</p>
          <div className="values">
            <span>↗ Pensamiento analítico</span>
            <span>↗ Trabajo en equipo</span>
            <span>↗ Mejora continua</span>
          </div>
        </div>
      </div>
      <div className="personal-note" ref={personalNote}>
        <figure className="editorial-photo san-blas-photo">
          <EditorialPhoto photo={portraits.sanBlas} />
        </figure>
        <div>
          <span className="section-marker">MÁS ALLÁ DE LA PANTALLA</span>
          <p className="photo-thought">Cambiar de lugar.<br />Encontrar otra <em>perspectiva.</em></p>
          <p>Este portafolio también guarda un poco de mí: los lugares, las pausas y los momentos que acompañan el camino.</p>
        </div>
      </div>
    </>
  );
}
