import { Header } from '../components/layout/Header.jsx';
import { Footer } from '../components/layout/Footer.jsx';
import { portraits } from '../data/portraits.js';
import { About } from '../sections/home/About.jsx';
import { Contact } from '../sections/home/Contact.jsx';
import { Education } from '../sections/home/Education.jsx';
import { EditorialPhoto } from '../sections/home/EditorialPhoto.jsx';
import { Hero } from '../sections/home/Hero.jsx';
import { NotebookSummary } from '../sections/home/NotebookSummary.jsx';
import { Projects } from '../sections/home/Projects.jsx';

export const homeRegions = {
  'home-header-root': <Header />,
  'home-hero-root': <Hero />,
  'home-about-root': <About />,
  'projects-root': <Projects />,
  'home-city-photo-root': (
    <EditorialPhoto photo={portraits.city}>
      <span>FUERA DE LA RUTINA</span>La misma ciudad.<br />Otra forma de mirar.
    </EditorialPhoto>
  ),
  formacion: <Education />,
  'home-street-photo-root': <EditorialPhoto photo={portraits.street} />,
  cuaderno: <NotebookSummary />,
  contacto: <Contact />,
  'home-footer-root': <Footer />,
};
