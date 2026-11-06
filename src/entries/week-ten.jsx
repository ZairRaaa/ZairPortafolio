import { StrictMode } from 'react';
import { hydrateRoot } from 'react-dom/client';
import { WeekTen } from '../pages/weeks/WeekTen.jsx';

hydrateRoot(document.getElementById('week-root'), <StrictMode><WeekTen /></StrictMode>);
