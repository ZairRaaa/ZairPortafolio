import { StrictMode } from 'react';
import { hydrateRoot } from 'react-dom/client';
import { WeekEight } from '../pages/weeks/WeekEight.jsx';

hydrateRoot(document.getElementById('week-root'), <StrictMode><WeekEight /></StrictMode>);
