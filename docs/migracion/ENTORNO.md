# Entorno de migración React + Vite

Esta copia pertenece a la rama `codex/migracion-react`. La versión estable permanece en su carpeta original y en `main`. Consulta [INICIO.md](INICIO.md) para recuperar el respaldo.

## Ejecutar

Abre una terminal en esta copia con Node 22.12 o superior. Ejecuta `npm ci` la primera vez o si cambia el archivo de bloqueo, y luego inicia Vite.

```powershell
npm ci
npm run dev
```

Abre `http://127.0.0.1:5173/ZairPortafolio/` o la dirección que muestre Vite si usa otro puerto. Detén el servidor con `Ctrl+C`.

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
- Vite genera la cabecera, el hero, Sobre mí, Herramientas, Proyectos, Formación, el resumen del cuaderno, Contacto, el pie y las cinco fotografías en el HTML de la portada. `src/entries/home-regions.jsx` reúne los componentes que `src/entries/home-layout.jsx` hidrata en el navegador.
- Las fotografías comparten un solo ciclo de animación para el desplazamiento. Sus componentes conservan el texto alternativo, las dimensiones y la estrategia de carga.
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
- Desde la migración de Cuaderno y Contacto, las tarjetas se generan en el HTML inicial. Así la sección ocupa su altura antes del salto del navegador a las anclas posteriores.

## Validación de la estructura y la apariencia

- Las capturas de cabecera y pie coincidieron con el commit `404df61` en dos tamaños, ambos temas y ambas paletas. También coincidieron las capturas del menú abierto en móvil. Se usaron fuentes de reserva para aislar las solicitudes externas.
- Se comprobó el HTML de cabecera y pie antes de hidratar, el menú por teclado, el retorno del foco con Escape, la navegación por anclas y el movimiento reducido.
- Se verificó la persistencia de tema y paleta entre la portada y las diez semanas con controles. También se probaron los cambios del sistema y el funcionamiento con almacenamiento bloqueado.
- Lint y build pasaron. El build verificó 18 páginas y 214 recursos e incluye una comprobación de la cabecera y el pie en el HTML de la portada.

## Validación de Sobre mí y las fotografías

- Sobre mí y las cinco fotos se compararon con el commit `6ae0bdb` en dos tamaños, ambos temas y ambas paletas. Coincidieron las capturas, la geometría y los atributos de carga. Se usaron fuentes de reserva para aislar las solicitudes externas.
- Se comprobó que el texto y las cinco imágenes cargan antes de hidratar React, con prioridad alta para la foto del hero y carga diferida para las otras cuatro.
- Se probaron el enlace directo a `#sobre-mi`, la animación de entrada y el movimiento de las fotos al hacer scroll, incluido el cambio en vivo a movimiento reducido.
- Lint y build pasaron. La compilación verificó 18 páginas y 214 recursos.

## Validación de Herramientas

- Las capturas y la geometría coincidieron con el commit `c860c9c` en las distribuciones de una, dos y cuatro columnas con ambos temas y paletas. Se usaron fuentes de reserva para la comparación.
- Las ocho tarjetas conservaron sus textos, niveles y barras. El HTML inicial incluye las tarjetas y los logos SVG locales con carga diferida.
- Se comprobaron la animación de entrada y el movimiento reducido en desarrollo y en la vista previa. Lint y build pasaron con 18 páginas y 214 recursos verificados.

## Validación de Formación y certificados

- El bloque conserva el escudo, las seis credenciales destacadas y las 16 experiencias adicionales en su orden original. Vite incluye el contenido y el desplegable nativo en el HTML inicial.
- Las capturas y la geometría coincidieron con el commit `8ec8d22` en escritorio y móvil, con ambos temas y paletas y el desplegable abierto y cerrado. Se usaron fuentes de reserva.
- Se verificaron el ancla `#formacion`, la apertura con Enter, el cierre con Espacio y la conservación del estado al hidratar. Lint y build pasaron con 18 páginas y 214 recursos.

## Validación de Cuaderno y Contacto

- Las capturas y la geometría coincidieron con el commit `24f4af3` en escritorio y móvil, con ambos temas y paletas. Se usaron fuentes de reserva.
- El índice y las 15 semanas se verificaron bajo `/ZairPortafolio/`. También se comprobó la navegación por teclado a una semana antes de hidratar React.
- Se corrigió el salto directo a secciones posteriores a Proyectos al generar las tarjetas en el HTML inicial. Se probaron `#cuaderno`, `#contacto` y sus animaciones de entrada.
- Con la API del portapapeles simulada se probaron la copia por teclado, el error, el reintento y el enlace de correo cuando la copia no está disponible. Lint y build pasaron con 18 páginas y 214 recursos.

## Validación del hero

- El título, los enlaces y las imágenes están en el HTML inicial. La fotografía principal conserva su prioridad de carga.
- Las capturas y la geometría coincidieron con el commit `682b886` en escritorio y móvil, con ambos temas y paletas. Se compararon el estado con movimiento reducido y un fotograma fijo de las animaciones CSS, usando fuentes de reserva.
- Se verificaron el movimiento por capas, la salida del cursor, la pausa y reanudación por teclado, la visibilidad de la pestaña y el cambio de movimiento reducido. Las posiciones se actualizan por fotograma sin volver a renderizar el hero.
- Lint y build pasaron con 18 páginas y 213 recursos. El script clásico del hero se retiró.

## Siguiente avance

El último bloque de la etapa 4 reúne el progreso de lectura y las animaciones de entrada restantes, revisa la navegación activa y consolida la portada en una raíz React.
