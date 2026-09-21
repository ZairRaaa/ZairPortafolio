# Semana 3 · Interfaces que cuentan historias

Laboratorio educativo sobre Bootstrap y Tailwind, con temática de perritos ficticios.

## Archivos

- `index.html`: presentación de la semana, presentación de tres prácticas, panel de seis pasos y vista previa.
- `laboratorio.html`: ejercicio aislado con Bootstrap 5.3.3 y Tailwind Play CDN 3.4.17.
- `css/semana-03.css`: diseño del contenedor y del panel.
- `css/laboratorio.css`: identidad visual de Huellitas. Sus distribuciones adaptables utilizan las clases de los frameworks.
- `js/semana-03.js`: controles y sincronización con la vista previa.
- `js/laboratorio.js`: selección de perritos, visibilidad de partes y validación local.
- `js/tailwind-config.js`: prefijo `tw-` y Preflight desactivado.
- `images/huellitas.png`: imagen generada con ImageGen; prompt y procedencia en `images/README.md`.

## Funcionamiento

Los seis pasos son independientes. Desactivar el primero oculta la franja introductoria, pero conserva metadatos y frameworks para mantener el ejercicio operativo. Se pueden activar todos o ninguno.

La vista previa usa un iframe para evitar conflictos con el CSS del portafolio. El panel y el ejercicio comprueban el origen y la ventana emisora de cada mensaje. Las preferencias de color y modo se sincronizan desde el portafolio.

El formulario no envía solicitudes ni guarda información. Usa datos de ejemplo. Los enlaces de las tarjetas activan el paso del formulario si estaba oculto y seleccionan al perrito correspondiente.

Se necesita conexión para cargar los CDN. Tailwind Play CDN es una herramienta de desarrollo utilizada por la guía; para un despliegue de producción se debería compilar únicamente el CSS necesario.

## Comprobaciones realizadas

- Activar y desactivar los seis pasos; contador y vista previa sincronizados.
- Mostrar únicamente el primer paso.
- Vista de 390 px y apertura del menú de Bootstrap.
- Formulario vacío con mensajes vinculados y foco en el primer error.
- Seleccionar a Luna desde su tarjeta y validar con datos de ejemplo.
- Limpiar el formulario.
- Revisión visual de la imagen y la composición.

Lighthouse, WAVE y la comprobación formal de contraste siguen pendientes. No se presentan puntuaciones de auditoría como resultados obtenidos.

## Prácticas y evidencias

- Huellitas: laboratorio interactivo conservado en `laboratorio.html`.
- Pulso: seis capturas de la práctica grupal, con vistas de escritorio y móvil, tarjetas y auditorías.
- Práctica calificada 2: seis capturas de la portada, listas de mensajes, destinos y tienda de plantas.
- `css/cuaderno.css`: portada de semana, directorio, galerías y visor adaptable.
- `js/evidencias.js`: visor nativo con galerías separadas, flechas de teclado, cierre con Escape y devolución del foco.

Los enlaces a imágenes funcionan sin JavaScript. Las capturas se cargan de forma diferida salvo la imagen de portada.
Los resultados de Pulso se transcriben de las capturas: Lighthouse 80/100/100/100 y WAVE con 0 errores, 0 errores de contraste y 10 alertas. No son auditorías de este cuaderno.
Los enlaces de repositorio, integrantes y aportes individuales están pendientes de proporcionar; no se inventan enlaces ni atribuciones.
