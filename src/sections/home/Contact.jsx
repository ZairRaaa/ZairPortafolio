import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { portraits } from '../../data/portraits.js';
import { EditorialPhoto } from './EditorialPhoto.jsx';
import { observeReveal } from './reveal.js';

const email = 'a3278811@gmail.com';

export function Contact() {
  const grid = useRef(null);
  const [canCopy, setCanCopy] = useState(false);
  const [copyStatus, setCopyStatus] = useState('');

  useLayoutEffect(() => observeReveal([grid.current]), []);
  useEffect(() => {
    setCanCopy(window.isSecureContext && typeof navigator.clipboard?.writeText === 'function');
  }, []);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopyStatus('Correo copiado. ¡Conversemos!');
    } catch {
      setCopyStatus('No se pudo copiar. Puedes seleccionar el correo o pulsarlo para escribir.');
    }
  }

  return (
    <>
      <div className="section-marker">05 / CONTACTO</div>
      <div className="contact-grid" ref={grid}>
        <div>
          <h2>Las buenas ideas<br />empiezan con un <em>hola.</em></h2>
          <figure className="editorial-photo contact-photo">
            <EditorialPhoto photo={portraits.contact} />
          </figure>
        </div>
        <div>
          <p>Me interesa colaborar, aprender de otras personas y aportar en proyectos de desarrollo y análisis de datos.</p>
          <a className="email" href={'mailto:' + email}>{email}{' '}<span aria-hidden="true">↗</span></a>
          <button className="copy-email" type="button" hidden={!canCopy} onClick={copyEmail}>
            Copiar correo <span aria-hidden="true">⧉</span>
          </button>
          <p className="copy-status" role="status">{copyStatus}</p>
        </div>
      </div>
    </>
  );
}
