import { StrictMode } from 'react';
import { hydrateRoot } from 'react-dom/client';
import { WeekOne } from '../pages/weeks/WeekOne.jsx';

hydrateRoot(document.getElementById('week-root'), <StrictMode><WeekOne /></StrictMode>);
