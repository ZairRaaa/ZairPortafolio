# Semana 3 · Huellitas

Laboratorio educativo sobre Bootstrap y Tailwind, con temática de perritos ficticios.

## Archivos

- `index.html`: presentación de la semana, panel de cinco pasos y vista previa.
- `laboratorio.html`: ejercicio aislado con Bootstrap 5.3.3 y Tailwind Play CDN 3.4.17.
- `css/semana-03.css`: diseño del contenedor y del panel.
- `css/laboratorio.css`: identidad visual de Huellitas. Sus distribuciones adaptables utilizan las clases de los frameworks.
- `js/semana-03.js`: controles y sincronización con la vista previa.
- `js/laboratorio.js`: selección de perritos, visibilidad de partes y validación local.
- `js/tailwind-config.js`: prefijo `tw-` y Preflight desactivado.
- `images/huellitas.png`: imagen generada con ImageGen; prompt y procedencia en `images/README.md`.

## Funcionamiento

Los cinco pasos son independientes. Desactivar el primero oculta la franja introductoria, pero conserva metadatos y frameworks para mantener el ejercicio operativo. Se pueden activar todos o ninguno.

La vista previa usa un iframe para evitar conflictos con el CSS del portafolio. El panel y el ejercicio comprueban el origen y la ventana emisora de cada mensaje. Las preferencias de color y modo se sincronizan desde el portafolio.

El formulario no envía solicitudes ni guarda información. Usa datos de ejemplo. Los enlaces de las tarjetas activan el paso del formulario si estaba oculto y seleccionan al perrito correspondiente.

Se necesita conexión para cargar los CDN. Tailwind Play CDN es una herramienta de desarrollo utilizada por la guía; para un despliegue de producción se debería compilar únicamente el CSS necesario.

## Comprobaciones realizadas

- Activar y desactivar los cinco pasos; contador y vista previa sincronizados.
- Mostrar únicamente el primer paso.
- Vista de 390 px y apertura del menú de Bootstrap.
- Formulario vacío con mensajes vinculados y foco en el primer error.
- Seleccionar a Luna desde su tarjeta y validar con datos de ejemplo.
- Limpiar el formulario.
- Revisión visual de la imagen y la composición.

Lighthouse, WAVE y la comprobación formal de contraste siguen pendientes. No se presentan puntuaciones de auditoría como resultados obtenidos.
