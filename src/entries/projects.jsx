import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Projects } from '../sections/home/Projects.jsx';

createRoot(document.getElementById('projects-root')).render(
  <StrictMode>
    <Projects />
  </StrictMode>,
);
