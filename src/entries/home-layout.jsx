import { StrictMode } from 'react';
import { hydrateRoot } from 'react-dom/client';
import { homeRegions } from './home-regions.jsx';

for (const [id, content] of Object.entries(homeRegions)) {
  hydrateRoot(document.getElementById(id), <StrictMode>{content}</StrictMode>);
}
