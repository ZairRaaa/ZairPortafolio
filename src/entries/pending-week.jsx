import { StrictMode } from 'react';
import { hydrateRoot } from 'react-dom/client';
import { weeks } from '../data/weeks.js';
import { PendingWeek } from '../pages/weeks/PendingWeek.jsx';

const root = document.getElementById('week-root');
const week = weeks[Number(root.dataset.week) - 1];

hydrateRoot(root, <StrictMode><PendingWeek week={week} /></StrictMode>);
