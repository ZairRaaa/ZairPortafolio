import { StrictMode } from 'react';
import { hydrateRoot } from 'react-dom/client';
import { WeekSeven } from '../pages/weeks/WeekSeven.jsx';

hydrateRoot(document.getElementById('week-root'), <StrictMode><WeekSeven /></StrictMode>);
