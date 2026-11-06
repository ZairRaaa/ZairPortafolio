import { StrictMode } from 'react';
import { hydrateRoot } from 'react-dom/client';
import { WeekTwo } from '../pages/weeks/WeekTwo.jsx';

hydrateRoot(document.getElementById('week-root'), <StrictMode><WeekTwo /></StrictMode>);
