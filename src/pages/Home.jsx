import { useLayoutEffect, useRef } from 'react';
import { Footer } from '../components/layout/Footer.jsx';
import { Header } from '../components/layout/Header.jsx';
import { ReadingProgress } from '../components/layout/ReadingProgress.jsx';
import { portraits } from '../data/portraits.js';
import { About } from '../sections/home/About.jsx';
import { Contact } from '../sections/home/Contact.jsx';
import { Education } from '../sections/home/Education.jsx';
import { EditorialPhoto } from '../sections/home/EditorialPhoto.jsx';
import { Hero } from '../sections/home/Hero.jsx';
import { JourneyMap } from '../sections/home/JourneyMap.jsx';
import { NotebookSummary } from '../sections/home/NotebookSummary.jsx';
import { Projects } from '../sections/home/Projects.jsx';
import { observeReveal } from '../sections/home/reveal.js';

export function Home() {
  const main = useRef(null);
  const learningPause = useRef(null);

  useLayoutEffect(() => observeReveal([learningPause.current]), []);

  return (
    <>
      <a className="skip" href="#contenido">Saltar al contenido</a>
      <ReadingProgress />
      <Header main={main} />
      <main id="contenido" ref={main}>
        <Hero />
        <JourneyMap />
        <section className="about wrap section" id="sobre-mi"><About /></section>
        <section className="projects section" id="proyectos">
          <div className="wrap"><Projects /></div>
        </section>
        <figure className="city-photo editorial-photo wrap">
          <EditorialPhoto photo={portraits.city}>
            <span>FUERA DE LA RUTINA</span>La misma ciudad.<br />Otra forma de mirar.
          </EditorialPhoto>
        </figure>
        <section className="education wrap section" id="formacion"><Education /></section>
        <div className="learning-pause wrap" ref={learningPause}>
          <div>
            <span className="section-marker">EL CAMINO TAMBIÉN CUENTA</span>
            <p className="photo-thought">Paso a paso.<br />Dentro y fuera<br />del <em>aula.</em></p>
            <p>Aprender, poner en práctica y volver a intentarlo. Así se va construyendo este cuaderno.</p>
          </div>
          <figure className="editorial-photo street-photo">
            <EditorialPhoto photo={portraits.street} />
          </figure>
        </div>
        <section className="notebook wrap" id="cuaderno"><NotebookSummary /></section>
        <section className="contact wrap section" id="contacto"><Contact /></section>
      </main>
      <Footer />
    </>
  );
}
