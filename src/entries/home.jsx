import { StrictMode } from 'react';
import { hydrateRoot } from 'react-dom/client';
import { Home } from '../pages/Home.jsx';

hydrateRoot(document.getElementById('home-root'), <StrictMode><Home /></StrictMode>);
