import { StrictMode } from 'react';
import { hydrateRoot } from 'react-dom/client';
import { WeekSix } from '../pages/weeks/WeekSix.jsx';

hydrateRoot(document.getElementById('week-root'), <StrictMode><WeekSix /></StrictMode>);
