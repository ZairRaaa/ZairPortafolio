import { StrictMode } from 'react';
import { hydrateRoot } from 'react-dom/client';
import { WeekFour } from '../pages/weeks/WeekFour.jsx';

hydrateRoot(document.getElementById('week-root'), <StrictMode><WeekFour /></StrictMode>);
