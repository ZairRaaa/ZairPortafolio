import { StrictMode } from 'react';
import { hydrateRoot } from 'react-dom/client';
import { WeekNine } from '../pages/weeks/WeekNine.jsx';

hydrateRoot(document.getElementById('week-root'), <StrictMode><WeekNine /></StrictMode>);
