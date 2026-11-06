import { StrictMode } from 'react';
import { hydrateRoot } from 'react-dom/client';
import { WeekThree } from '../pages/weeks/WeekThree.jsx';

hydrateRoot(document.getElementById('week-root'), <StrictMode><WeekThree /></StrictMode>);
