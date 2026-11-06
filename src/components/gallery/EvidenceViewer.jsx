import { createContext, useEffect, useLayoutEffect, useRef, useState } from 'react';

export const EvidenceViewerContext = createContext(null);

export function EvidenceViewer({ children, closeLabel }) {
  const dialog = useRef(null);
  const stage = useRef(null);
  const trigger = useRef(null);
  const [selection, setSelection] = useState(null);
  const image = selection?.images[selection.index];

  function open(images, index, source) {
    if (typeof dialog.current?.showModal !== 'function') return false;
    trigger.current = source;
    setSelection({ images, index });
    return true;
  }

  useLayoutEffect(() => {
    if (!selection) return;
    stage.current.scrollTop = 0;
    if (!dialog.current.open) {
      dialog.current.showModal();
      document.documentElement.classList.add('evidence-open');
    }
  }, [selection]);

  useEffect(() => {
    const element = dialog.current;
    return () => {
      if (element.open) element.close();
      document.documentElement.classList.remove('evidence-open');
    };
  }, []);

  function move(direction) {
    setSelection(current => {
      if (!current) return current;
      const count = current.images.length;
      return { ...current, index: (current.index + direction + count) % count };
    });
  }

  function handleKeyDown(event) {
    if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
    event.preventDefault();
    move(event.key === 'ArrowRight' ? 1 : -1);
  }

  function handleBackdrop(event) {
    if (event.target !== event.currentTarget) return;
    const { left, right, top, bottom } = event.currentTarget.getBoundingClientRect();
    if (event.clientX < left || event.clientX > right || event.clientY < top || event.clientY > bottom) {
      dialog.current.close();
    }
  }

  function handleClose() {
    if (dialog.current.open) return;
    document.documentElement.classList.remove('evidence-open');
    trigger.current?.focus({ preventScroll: true });
    trigger.current = null;
    setSelection(null);
  }

  return (
    <EvidenceViewerContext value={open}>
      {children}
      <dialog
        ref={dialog}
        className="evidence-dialog"
        id="evidence-dialog"
        aria-labelledby="evidence-title"
        aria-describedby="evidence-description"
        onKeyDown={handleKeyDown}
        onClick={handleBackdrop}
        onClose={handleClose}
      >
        <div className="viewer-header">
          <span id="evidence-position" aria-live="polite">
            {selection && ((selection.index + 1) + ' / ' + selection.images.length + ' · Evidencias')}
          </span>
          <button type="button" id="evidence-close" autoFocus onClick={() => dialog.current.close()}>
            {closeLabel ? <>{closeLabel + ' '}<span aria-hidden="true">×</span></> : 'Cerrar ×'}
          </button>
        </div>
        <div className="viewer-stage" ref={stage}><img id="evidence-full" src={image?.src} alt={image?.alt ?? image?.description ?? ''} /></div>
        <div className="viewer-caption">
          <div>
            <h2 id="evidence-title">{image?.title}</h2>
            <p id="evidence-description">{image?.description}</p>
          </div>
          <div className="viewer-controls">
            <button type="button" id="evidence-prev" aria-label="Captura anterior" onClick={() => move(-1)}>←</button>
            <button type="button" id="evidence-next" aria-label="Captura siguiente" onClick={() => move(1)}>→</button>
          </div>
        </div>
      </dialog>
    </EvidenceViewerContext>
  );
}
