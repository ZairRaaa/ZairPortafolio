# Semana 06 · Componentes que conectan

Página del cuaderno generada con React. Conserva la portada, el índice lateral, los tres trabajos, la reflexión y la navegación entre semanas.

## Contenido

- Órbita: diseño por componentes y transmisión de un objeto a través de cuatro niveles.
- Nido: vistas de inicio, catálogo y consultas; contexto del laboratorio de SPA, routing y API.
- TecnoAndes: recuperación de la práctica de la semana 05, incluida en la semana 06 por indicación del autor.

La redacción se basa en `Informacion/practica6.md` y las nueve capturas proporcionadas. Los repositorios enlazados no se pudieron inspeccionar durante esta implementación. Se distingue el contenido visible de las capturas de los requisitos de la guía.

## Archivos

- `index.html` es la entrada de Vite. El HTML generado incluye las galerías y sus enlaces nativos.
- `css/semana-06.css` conserva el diseño adaptable y los colores de `assets/css/home.css`.
- `src/pages/weeks/WeekSix.jsx` compone la semana con el layout y el visor compartidos.
- `src/data/week-six-evidence.js` reúne las tres capturas por trabajo. La portada reutiliza una de Órbita.

## Verificación

- Rutas locales y anclas sin destinos faltantes; IDs sin duplicados.
- Lint y build verificados.
- Revisión en navegador a 1440 y 390 px; sin desbordamiento horizontal medido.
- Las nueve imágenes cargan. Apertura del visor, navegación y cierre con Escape comprobados.
- Índice lateral identifica TecnoAndes al navegar a su sección.
- Sin errores de consola registrados durante la revisión.

No se ejecutaron auditorías Lighthouse o WAVE de esta página ni pruebas de los proyectos React externos.
