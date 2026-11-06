import { StrictMode } from 'react';
import { hydrateRoot } from 'react-dom/client';
import { WeekFive } from '../pages/weeks/WeekFive.jsx';

hydrateRoot(document.getElementById('week-root'), <StrictMode><WeekFive /></StrictMode>);
