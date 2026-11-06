import { useContext } from 'react';
import { EvidenceViewerContext } from './EvidenceViewer.jsx';

export function EvidenceLink({ image, images, className, spaceActivates = false, children }) {
  const open = useContext(EvidenceViewerContext);

  function tryOpen(event) {
    if (event.defaultPrevented || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    const index = images.indexOf(image);
    if (index >= 0 && open?.(images, index, event.currentTarget)) event.preventDefault();
  }

  return (
    <a
      className={className}
      href={image.src}
      aria-label={'Ampliar: ' + image.title}
      onClick={event => { if (event.button === 0) tryOpen(event); }}
      onKeyDown={spaceActivates ? event => { if (event.key === ' ') tryOpen(event); } : undefined}
    >
      {children}
    </a>
  );
}
