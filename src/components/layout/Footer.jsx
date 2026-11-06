import { useEffect, useState } from 'react';

export function Footer() {
  const [year, setYear] = useState(2026);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="wrap footer">
      <a className="brand" href="#inicio" aria-label="Volver al inicio">zk<span>.</span></a>
      <p>© <span id="year">{year}</span> Zair Ken Rojas Cerron<br /><span>Hecho con curiosidad, desde Perú.</span></p>
      <a href="#inicio">Volver arriba ↑</a>
    </footer>
  );
}
