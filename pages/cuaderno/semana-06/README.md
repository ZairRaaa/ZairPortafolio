# Semana 06 · Componentes que conectan

Página estática del cuaderno con el formato de las semanas anteriores: portada, índice lateral con sección activa, tres trabajos, reflexión y navegación entre semanas.

## Contenido

- Órbita: diseño por componentes y transmisión de un objeto a través de cuatro niveles.
- Nido: vistas de inicio, catálogo y consultas; contexto del laboratorio de SPA, routing y API.
- TecnoAndes: recuperación de la práctica de la semana 05, incluida en la semana 06 por indicación del autor.

La redacción se basa en `Informacion/practica6.md` y las nueve capturas proporcionadas. Los repositorios enlazados no se pudieron inspeccionar durante esta implementación. Se distingue el contenido visible de las capturas de los requisitos de la guía.

## Archivos

- `index.html`: contenido y galerías accesibles mediante enlaces nativos.
- `css/semana-06.css`: diseño adaptable con los colores de `assets/css/home.css`.
- `js/semana-06.js`: seguimiento de la sección activa del índice.
- `js/evidencias.js`: visor con galerías independientes, flechas, Escape y devolución del foco.
- `images/`: tres capturas por trabajo. La portada reutiliza una de Órbita.

## Verificación

- Rutas locales y anclas sin destinos faltantes; IDs sin duplicados.
- Sintaxis de ambos scripts verificada con Node.
- Revisión en navegador a 1440 y 390 px; sin desbordamiento horizontal medido.
- Las nueve imágenes cargan. Apertura del visor, navegación y cierre con Escape comprobados.
- Índice lateral identifica TecnoAndes al navegar a su sección.
- Sin errores de consola registrados durante la revisión.

No se ejecutaron auditorías Lighthouse o WAVE de esta página ni pruebas de los proyectos React externos.
