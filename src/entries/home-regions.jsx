import { Header } from '../components/layout/Header.jsx';
import { Footer } from '../components/layout/Footer.jsx';
import { portraits } from '../data/portraits.js';
import { About } from '../sections/home/About.jsx';
import { Education } from '../sections/home/Education.jsx';
import { EditorialPhoto } from '../sections/home/EditorialPhoto.jsx';

export const homeRegions = {
  'home-header-root': <Header />,
  'home-intro-photo-root': <EditorialPhoto photo={portraits.intro} />,
  'home-about-root': <About />,
  'home-city-photo-root': (
    <EditorialPhoto photo={portraits.city}>
      <span>FUERA DE LA RUTINA</span>La misma ciudad.<br />Otra forma de mirar.
    </EditorialPhoto>
  ),
  formacion: <Education />,
  'home-street-photo-root': <EditorialPhoto photo={portraits.street} />,
  'home-contact-photo-root': <EditorialPhoto photo={portraits.contact} />,
  'home-footer-root': <Footer />,
};
