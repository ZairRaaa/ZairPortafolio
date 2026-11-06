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
- Vite genera la portada completa a partir de `src/pages/Home.jsx`. `src/entries/home.jsx` la hidrata en una sola raíz, `#home-root`.
- Vite genera el índice del cuaderno a partir de `src/pages/NotebookIndex.jsx` y los metadatos de `src/data/weeks.js`. El índice se sirve como HTML estático.
- Las semanas 5 a 10 usan `WeekLayout`, `WeekIndex` y `WeekPagination`. Se generan como HTML en sus URL habituales y se hidratan con sus entradas en `src/entries/`.
- Las fotografías comparten un solo ciclo de animación para el desplazamiento. Sus componentes conservan el texto alternativo, las dimensiones y la estrategia de carga.
- `theme.js` aplica las preferencias antes del primer pintado. Los controles React de la portada y de las semanas migradas usan la misma lógica de apariencia y las mismas claves guardadas que las semanas con controles clásicos.
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

## Validación de la portada consolidada

- Ocho capturas completas coincidieron con el commit `5a21e57` en escritorio y móvil, con ambos temas y paletas. También coincidieron la geometría y los enlaces. Se usaron fuentes de reserva.
- Se comprobó el contenido inicial antes de la hidratación, el menú móvil por teclado, las anclas directas, la navegación activa y las animaciones de entrada con y sin movimiento reducido.
- La barra de lectura se verificó del 0 al 100 %, al cambiar el tamaño de la ventana y al abrir o cerrar el desplegable de Formación.
- Lint y build pasaron con 18 páginas y 212 recursos. El build comprueba que la cabecera, el contenido principal y el pie están en la raíz de la portada.

## Validación del índice y la semana piloto

- El índice conserva sus 15 enlaces y sus textos. Se comprobó que todas las semanas resuelven bajo `/ZairPortafolio/`.
- Coincidieron las capturas del índice en escritorio y móvil y las de la semana 8 en ambos temas y paletas, con los cuatro desplegables abiertos y cerrados. La comparación se hizo con el commit `a50a95a` y fuentes de reserva.
- Se verificaron los desplegables por teclado antes de hidratar, el índice activo, el acceso directo, la recarga y la navegación por teclado entre las semanas 7, 8 y 9. La apariencia elegida en la semana 8 se conserva al pasar a la semana 9 y volver.
- Lint y build pasaron con 18 páginas y 211 recursos. El script clásico de la semana 8 se retiró.

## Validación del visor y la semana 6

- Los tres proyectos conservan sus nueve WebP, textos y enlaces directos. Se probó el acceso a un WebP por teclado desde el HTML inicial y sin soporte de `showModal()`.
- Se verificaron los grupos independientes, el contador, las flechas, los botones, el cierre por Escape y clic fuera y el retorno del foco. La paginación a la semana 7 y su visor clásico también se comprobaron.
- Las capturas completas de la página y las dimensiones del visor coincidieron con el commit `67f60f2` en escritorio y móvil, con ambos temas y paletas. En algunas capturas móviles se observó una diferencia de rasterizado de un píxel en el borde y el contorno de foco.
- Lint y build pasaron con 18 páginas y 209 recursos. Se retiraron los dos scripts clásicos de la semana 6.

## Validación de la semana 7

- El índice conserva las seis secciones, incluido el acceso directo a `#biblioteca`. Se comprobó la recarga y la paginación por teclado hacia las semanas 6 y 8.
- Las 15 imágenes WebP conservan sus enlaces directos. El visor compartido mantiene separados los tres grupos de Biblioteca, Apex Motors y TaskMaster Pro. Se comprobaron el contador, las flechas, los botones, el cierre y el retorno del foco.
- El mapa de hooks conserva los ocho desplegables nativos. Coincidieron las 16 capturas de la página y el visor en escritorio y móvil, con ambos temas y paletas. La referencia fue el commit `ed2657f` con fuentes de reserva.
- Lint y build pasaron con 18 páginas y 207 recursos. Se retiraron los dos scripts clásicos de la semana 7.

## Validación de la semana 5

- Se conservan la tabla de React, Vite y Next.js, los dos árboles de archivos y los cinco desplegables nativos. La tabla se puede desplazar por teclado en móvil.
- Se probaron la validación del formulario, las tres respuestas, el borrado del mensaje al cambiar de opción y la respuesta visible con JavaScript desactivado.
- Las 16 capturas coincidieron con el commit `83b205e` en escritorio y móvil, con ambos temas y paletas y los desplegables abiertos y cerrados. Se usaron fuentes de reserva.
- Se verificaron el acceso directo, la recarga y los enlaces a las semanas 4 y 6. Lint y build pasaron con 18 páginas y 206 recursos.

## Validación de las semanas 9 y 10

- Se conservaron las prácticas, las tablas, las anclas y los 27 enlaces directos a WebP. Las tarjetas mantienen sus dimensiones y el diseño de ambas semanas.
- Se verificaron las cuatro galerías independientes, el contador, las flechas, el cierre con Escape y el retorno del foco. El visor conservó sus dimensiones al pasar entre capturas de diferentes tamaños.
- Las 32 capturas de las páginas y del visor coincidieron con el commit `052c9da` en escritorio y móvil, con ambos temas y paletas y fuentes de reserva.
- Se comprobó la recarga y la paginación entre las semanas 8 a 11, además de la apariencia guardada al pasar de la 9 a la 10. Lint y build pasaron con 18 páginas y 204 recursos.

## Validación de la semana 1

- La semana conserva su portada, la sección de docentes y el índice de ocho apartados. React reutiliza el índice activo, la apariencia y la barra de lectura dentro de esa estructura.
- Se verificaron los cinco pasos de la petición web, la vuelta al primer paso, el reinicio y las respuestas de la pregunta de DNS por teclado. El HTML inicial conserva los pasos explicativos y la respuesta de reserva.
- Se comprobaron las cinco capturas, la barra de lectura, el acceso directo, la recarga y el enlace a la semana 2. Al simular errores de imagen se mantuvo el recuadro de la práctica y se ocultó la infografía que falló.
- Las 16 capturas coincidieron con el commit `99933bb` en escritorio y móvil, con ambos temas y paletas y fuentes de reserva. Lint y build pasaron con 18 páginas y 203 recursos.

## Validación de la semana 2

- Se conservaron las tres prácticas, el desplegable, el índice activo, la barra de lectura y la paginación hacia las semanas 1 y 3.
- Las 14 capturas WebP se pueden abrir desde el HTML inicial. Los filtros HTML, WAVE y Lighthouse limitan el recorrido del visor a las capturas visibles y conservan las cinco imágenes generales. Se comprobaron Enter, Espacio, las flechas, Escape y el retorno del foco.
- Las 24 capturas de la página, la vista filtrada y el visor coincidieron con el commit `415f50d` en escritorio y móvil, con ambos temas y paletas. Se usaron fuentes de reserva.
- Se verificaron el enlace directo a `#galeria`, la recarga y la navegación. También se volvió a probar la semana 8 en `#balance` y sus desplegables. Lint y build pasaron con 18 páginas y 202 recursos.

## Siguiente avance

La etapa 7 continúa con las evidencias de la semana 3 y la revisión del laboratorio Huellitas.
