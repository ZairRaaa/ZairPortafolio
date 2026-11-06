# Entorno de migración React + Vite

Esta copia pertenece a la rama `codex/migracion-react`. La versión estable permanece en su carpeta original y en `main`. Consulta [INICIO.md](INICIO.md) para recuperar el respaldo.

## Ejecutar

Desde la carpeta de esta copia, con Node 22.12 o superior:

```powershell
npm ci
npm run dev
```

Abrir la dirección que muestra Vite y añadir `/ZairPortafolio/` si fuera necesario.

## Comprobar la publicación sin publicarla

```powershell
npm run lint
npm run build
npm run preview
```

La vista previa normal estará en `http://127.0.0.1:4173/ZairPortafolio/` (Vite indicará otro puerto si está ocupado).

El build verifica que las 18 entradas HTML, recursos y enlaces locales existan bajo el prefijo del repositorio. `dist/` no se guarda en Git. No se cambió la configuración de Pages ni se publica esta rama automáticamente.

## Convivencia temporal

- React y React DOM están instalados; el plugin de Vite está preparado para JSX.
- Proyectos se monta en `#projects-root` desde `src/entries/projects.jsx`. React controla las tarjetas y su aparición al hacer scroll.
- Vite genera la cabecera y el pie en el HTML de la portada. `src/entries/home-layout.jsx` hidrata ambos componentes y activa el menú, la sección actual y los controles de apariencia.
- `theme.js` aplica las preferencias antes del primer pintado. `appearance.js` comparte el estado entre la portada y los controles clásicos del cuaderno.
- Todos los HTML existentes son entradas de Vite, incluido el laboratorio.
- Los scripts clásicos conservan su orden y atributos. Vite advierte que no los empaqueta como módulos; el plugin `preserve-legacy-assets` garantiza que existan en sus rutas originales.
- Los recursos de `assets/` y `pages/` se copian con una lista de extensiones permitidas. En esta fase se conservan también los originales PNG y versiones sin hash, aunque Vite genere otros archivos optimizados. Es una duplicación temporal para proteger enlaces y galerías; reducirla después de migrar sus consumidores.
- `Informacion/`, configuración Git, documentación y dependencias no se publican.
- El laboratorio conserva sus dependencias CDN de Bootstrap y Tailwind y requiere conexión para ellas.

## Inventario y controles

`docs/migracion/inventario.json` es la referencia original: hashes, anclas, enlaces y recursos. No regenerarlo para ocultar diferencias durante la migración. El comando `npm run inventory` permite actualizarlo solo si se decide establecer expresamente una nueva referencia.

`npm run lint` revisa los scripts, la configuración y los componentes, con reglas para hooks. `npm run build` comprueba recursos y enlaces del resultado. Las capturas completas de referencia, pruebas de todas las apariencias y auditoría de accesibilidad se harán antes de migrar cada sección; los controles estructurales no sustituyen esas revisiones.

## Validación de Proyectos

- Referencia visual tomada del commit `2da18d0`, con las semanas 9 y 10 ya integradas. Las capturas de la sección coinciden a 1440 y 390 px, en los dos temas y ambas paletas, con fuentes de reserva para aislar las solicitudes externas.
- Se comprobó el acceso directo a `#proyectos`, la navegación activa, los desplegables por teclado y el movimiento reducido en desarrollo con StrictMode y en la vista previa.
- `npm run lint` y `npm run build` pasaron. El build verificó 18 páginas y 213 recursos. En las galerías de las semanas 9 y 10 se comprobó la carga de WebP, el avance con flechas y el retorno del foco con Escape.
- Las tarjetas se renderizan en el navegador y requieren JavaScript. La decisión sobre prerenderizado queda pendiente antes de publicar.

## Validación de la estructura y la apariencia

- Las capturas de cabecera y pie coincidieron con el commit `404df61` en dos tamaños, ambos temas y ambas paletas. También coincidieron las capturas del menú abierto en móvil. Se usaron fuentes de reserva para aislar las solicitudes externas.
- Se comprobó el HTML de cabecera y pie antes de hidratar, el menú por teclado, el retorno del foco con Escape, la navegación por anclas y el movimiento reducido.
- Se verificó la persistencia de tema y paleta entre la portada y las diez semanas con controles. También se probaron los cambios del sistema y el funcionamiento con almacenamiento bloqueado.
- Lint y build pasaron. El build verificó 18 páginas y 214 recursos e incluye una comprobación de la cabecera y el pie en el HTML de la portada.

## Siguiente avance

La etapa 4 continúa con Sobre mí y las fotografías. Cada bloque de portada se migra y se comprueba por separado.
