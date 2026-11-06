import { StrictMode } from 'react';
import { hydrateRoot } from 'react-dom/client';
import { Header } from '../components/layout/Header.jsx';
import { Footer } from '../components/layout/Footer.jsx';

hydrateRoot(
  document.getElementById('home-header-root'),
  <StrictMode><Header /></StrictMode>,
);

hydrateRoot(
  document.getElementById('home-footer-root'),
  <StrictMode><Footer /></StrictMode>,
);
