# Plan de migración gradual a React

Estado: preparación iniciada en `codex/migracion-react`, con respaldo y worktree separado. Ver `docs/migracion/INICIO.md` y `ENTORNO.md`. Ninguna sección está convertida todavía.
Fecha: 27 de octubre de 2026.

## 1. ¿Conviene migrar?

Sí, como inversión en organización, reutilización y aprendizaje. El portafolio ya tiene interacciones y varias semanas que repiten estructura. React permitirá mantener esas piezas en un solo lugar y separar contenido, presentación y comportamiento.

React no es automáticamente mejor para todo: el sitio actual es estático, funciona sin compilación y gran parte de su contenido no necesita un framework. Migrar añadirá dependencias, JavaScript y un proceso de construcción. No se promete una mejora de velocidad ni de posicionamiento por cambiar de tecnología.

**Recomendación:** React + Vite, con JavaScript y JSX al principio, conservando CSS y diseño. TypeScript puede adoptarse después, como una tarea separada. No necesitamos añadir Next.js, Redux, una librería de animación ni un framework CSS para esta migración.

## 2. Punto de partida real

- `index.html`: portada, presentación, herramientas, proyectos, formación, cuaderno y contacto.
- `assets/css/home.css`: base visual y estilos compartidos; mezcla reglas generales y de portada.
- `assets/css/hero-depth.css` y `assets/js/hero-depth.js`: palabras en movimiento, reacción al cursor y destello del nombre.
- `assets/js/home.js`: menú, progreso de lectura, aparición de secciones, movimiento de fotos y copia del correo.
- `assets/js/theme.js` y `appearance.js`: tema claro/oscuro, paleta verde/roja y preferencias persistidas.
- `pages/cuaderno/index.html`: índice de quince semanas.
- Semanas 1–8: contenido desarrollado, con estructuras e interacciones distintas.
- Semanas 9–15: plantillas pendientes; no inventar contenido al migrarlas.
- Semana 3: incluye `laboratorio.html`, CSS propio y configuración de Tailwind; requiere revisión independiente.
- Semanas 3, 6 y 7: galerías que pueden compartir un visor.
- `scripts/convertir_webp.py`: herramienta independiente que se conserva.
- `Informacion/`: material local excluido de Git; nunca incluirlo en el artefacto publicado.

## 3. Estrategia para mantener el sitio funcionando

### Una migración por secciones y páginas

Empezar en una rama `codex/migracion-react` creada desde `main` actualizado. Durante la preparación, la web publicada continúa con su versión actual.

Vite utilizará inicialmente los HTML existentes como entradas de una aplicación multipágina. Cada página seguirá teniendo su archivo y dirección. En la portada, React se incorporará en contenedores concretos, una sección por vez. El resto seguirá siendo HTML hasta que llegue su turno.

**Regla de convivencia:** cada fragmento del DOM tiene un solo responsable. Al migrar una sección a React, retirar de los scripts antiguos los listeners y las modificaciones que actúan sobre ese fragmento. No ejecutar ambos comportamientos sobre los mismos nodos.

Las primeras secciones migradas deberán estar completas y utilizables, no ser placeholders. Al terminar la portada se podrá consolidar en una única raíz React. Los montajes temporales no se convertirán en la arquitectura definitiva.

### Mantener las URL

Conservar `/index.html`, `/pages/cuaderno/index.html`, `/pages/cuaderno/semana-XX/index.html` y `/pages/cuaderno/semana-03/laboratorio.html`. También conservar anclas como `#proyectos`, `#cuaderno` y `#biblioteca`.

No introducir React Router en esta primera migración. React no exige convertir el sitio en una SPA. Mantener entradas HTML permite abrir y recargar las semanas directamente en GitHub Pages sin depender de redirecciones especiales.

### No mezclar migración y rediseño

Primero reproducir el diseño y comportamiento actuales. Cualquier rediseño, cambio de textos o nueva funcionalidad se propone en otro avance. El criterio de éxito es mantener lo que funciona y reducir duplicaciones.

## 4. Estructura objetivo orientativa

```text
src/
  entries/              # Montaje de portada, cuaderno y semanas
  components/
    layout/             # Header, Footer, controles de apariencia
    notebook/           # WeekLayout, WeekIndex, WeekPagination
    gallery/            # EvidenceGallery y EvidenceViewer
  sections/home/        # Hero, About, Skills, Projects, Education, Contact...
  pages/weeks/          # Composición y contenido específico de cada semana
  hooks/                # Apariencia, movimiento reducido, sección activa
  data/                 # Herramientas, cursos y metadatos de semanas
  styles/               # Variables, base y estilos compartidos
assets/                 # Recursos existentes durante la transición
pages/cuaderno/         # Entradas HTML con sus URL actuales
scripts/                # Conversión de imágenes y verificaciones necesarias
vite.config.js
package.json
package-lock.json
```

No crear componentes para cada etiqueta. Extraer una pieza cuando tenga comportamiento propio, se repita o represente una sección comprensible. Los textos largos y las particularidades de cada práctica pueden permanecer en JSX; no forzar todas las semanas a un esquema rígido de datos.

## 5. Etapas y entregables

Cada casilla representa un avance revisable; puede necesitar más de un commit pequeño.

### Etapa 0 · Registrar la referencia

- [ ] Capturar portada y páginas representativas en escritorio y móvil, con las dos paletas y ambos temas.
- [x] Inventariar enlaces, recursos y anclas, incluida la página de laboratorio.
- [x] Identificar scripts que comparten selectores y responsabilidades.
- [x] Registrar el commit estable previo a la migración como referencia de regreso.

Salida: listado de comportamientos que deben mantenerse y comparación visual de referencia.
Commit sugerido: `Registro la base de mi migración`.

### Etapa 1 · Preparar React y Vite

- [x] Verificar la versión de Node compatible con Vite en el momento de comenzar.
- [x] Añadir React, React DOM y las herramientas de desarrollo, con archivo de bloqueo.
- [x] Configurar `dev`, `build`, `preview` y `lint`; ignorar `node_modules/` y `dist/`.
- [x] Declarar todas las entradas HTML actuales, incluidas las semanas pendientes y el laboratorio.
- [x] Resolver imágenes y enlaces para el prefijo `/ZairPortafolio/`.
- [x] Auditar los recursos que no procesa Vite, como enlaces de galería: copiarlos explícitamente o importarlos mediante un catálogo de URL. No copiar el repositorio completo a `dist/`.
- [x] Validar la construcción sin alterar todavía la publicación de Pages.

Salida: el sitio completo abre desde la vista previa de producción; ninguna página desaparece del resultado.
Commit sugerido: `Preparo React y Vite`.

### Etapa 2 · Migrar una sección sencilla

- [ ] Migrar primero herramientas o proyectos a componentes y datos locales.
- [ ] Mantener clases CSS, textos, enlaces e imágenes originales.
- [ ] Comprobar las interacciones existentes y evitar montajes dentro de nodos que otro script reemplaza.

Salida: una sección real en React, visualmente equivalente y aislada del resto.
Commit sugerido: `Convierto mis proyectos en componentes`.

### Etapa 3 · Apariencia y estructura común

- [ ] Extraer variables y reglas globales de CSS sin cambiar su valor visual.
- [ ] Migrar cabecera, menú, controles de apariencia y pie.
- [ ] Conservar `portfolio-theme` y `portfolio-palette`, la preferencia del sistema y el funcionamiento sin almacenamiento disponible.
- [ ] Mantener una inicialización mínima del tema antes del render para evitar el destello del tema incorrecto.
- [ ] Usar un proveedor de apariencia por raíz cuando corresponda. Durante la convivencia, centralizar la actualización del documento y evitar estados independientes que se contradigan.

Salida: controles sincronizados, navegación por teclado y preferencias persistentes.
Commit sugerido: `Comparto la apariencia de mi portafolio`.

### Etapa 4 · Completar la portada por bloques

Orden propuesto, con un commit por bloque:

1. Sobre mí y fotografías.
2. Herramientas y proyectos que falten.
3. Formación y certificados.
4. Resumen del cuaderno y contacto.
5. Hero: palabras continuas, destello, pausa y reacción al cursor.
6. Progreso de lectura, aparición de secciones y navegación activa.

Las animaciones CSS se conservan. React controla estado y ciclo de vida; las coordenadas del cursor se actualizan con refs y `requestAnimationFrame`, sin renderizar toda la portada por cada movimiento.

Salida: portada completa en una raíz React y retirada de los comportamientos antiguos que ya fueron reemplazados.
Commits sugeridos: `Migro mi formación a React`, `Integro las animaciones de mi portada`.

### Etapa 5 · Cuaderno y semana piloto

- [ ] Convertir el índice de semanas en una lista de metadatos.
- [ ] Crear `WeekLayout`, índice activo y paginación compartidos.
- [ ] Migrar primero la semana 8: es pequeña y permite validar la estructura sin galerías complejas.
- [ ] Conservar su consolidación de notas y sus desplegables nativos.

Salida: acceso directo, recarga y navegación S7 → S8 → S9 correctos.
Commits sugeridos: `Organizo mi cuaderno en React`, `Migro mi semana ocho`.

### Etapa 6 · Galerías y semanas similares

- [ ] Extraer un visor accesible usando `dialog` y una galería de datos por proyecto.
- [ ] Mantener título, descripción, contador, anterior/siguiente, Escape y retorno del foco.
- [ ] Migrar semana 6 y después semana 7, cada una en su avance.
- [ ] Migrar semana 5 reutilizando únicamente las piezas que encajen.

Salida: galerías independientes, rutas WebP válidas y ninguna captura perdida.
Commits sugeridos: `Comparto el visor de mis evidencias`, `Migro mi semana seis`.

### Etapa 7 · Semanas con interacciones particulares

- [ ] Semana 1: revisar y migrar recorrido interactivo y preguntas.
- [ ] Semana 2: preservar su estructura y contenido propios.
- [ ] Semana 3: separar la página de evidencias del laboratorio; auditar la configuración de Tailwind y evitar que sus estilos contaminen otras páginas.
- [ ] Semana 4: inventariar primero las interacciones reales; adaptar las que existan sin implementar de nuevo los proyectos que solo se documentan.
- [ ] Pasar las plantillas 9–15 al layout compartido, conservando su estado pendiente.

Salida: las diferencias entre semanas se mantienen; no todo se reduce a una plantilla genérica.
Commits sugeridos: `Migro mi semana uno`, `Adapto mi laboratorio de la semana tres`.

### Etapa 8 · Publicación y limpieza

- [ ] Revisar la configuración real de Pages antes de modificarla.
- [ ] Configurar GitHub Actions para instalar con `npm ci`, comprobar, construir y desplegar solamente `dist/`.
- [ ] Usar `base: '/ZairPortafolio/'` mientras el sitio se publique bajo ese repositorio; revisar este valor si cambia el dominio o nombre.
- [ ] Ejecutar la validación del build completo y publicar cuando el primer lote coherente esté listo. Si se publican fases intermedias, incluir siempre todas las páginas aún no migradas.
- [ ] Confirmar el éxito de Actions y abrir portada, semana y laboratorio desde sus URL públicas.
- [ ] Eliminar archivos obsoletos solo después de comprobar que ninguna página depende de ellos.
- [ ] Actualizar README: instalación, comandos, estructura, publicación y forma de añadir semanas.

Salida: despliegue comprobado, contenido completo y una forma clara de seguir trabajando.
Commits sugeridos: `Publico mi portafolio con Vite`, `Retiro los scripts que ya migré`.

## 6. Comprobaciones por avance

- Comparación visual del área modificada en escritorio y móvil, sin desbordamiento horizontal.
- Enlaces, anclas, imágenes, títulos y contenido conservados.
- Teclado, foco, menú, galerías y desplegables según corresponda.
- Tema y paleta persistentes; movimiento reducido y pausa respetados.
- Consola sin errores y limpieza de listeners, observers, timers y frames en efectos. Verificar también el montaje de desarrollo con StrictMode.
- Lint y build correctos. Probar el resultado con `preview`, no solo el servidor de desarrollo.
- Verificar enlaces bajo `/ZairPortafolio/`, no únicamente bajo `/`.
- Pruebas automatizadas enfocadas en lógica compartida y recorridos críticos; evitar tests que solo repitan el HTML.
- Comparar peso de JavaScript y carga de imágenes con la referencia inicial; no descargar todas las semanas para abrir la portada.

El contenido principal debe seguir siendo indexable y accesible. Al reemplazar HTML por renderizado cliente habrá que evaluar la pérdida de contenido sin JavaScript; si es un requisito conservarlo, añadir prerenderizado como decisión explícita antes del despliegue final. Vite por sí solo no prerenderiza JSX.

## 7. Riesgos y respuesta

| Riesgo | Medida |
| --- | --- |
| Scripts antiguos y React controlan los mismos nodos | Migrar propiedad del DOM por sección y retirar listeners antiguos en ese avance. |
| Imágenes o semanas ausentes en producción | Verificar todas las entradas y el manifiesto de recursos del build. |
| Rutas rotas en GitHub Pages | Conservar entradas HTML, prefijo del repositorio y probar acceso directo. |
| CSS compartido cambia semanas aún no migradas | Mantener clases y aislar cambios; extraer estilos en pasos revisables. |
| Animaciones duplicadas o lentas | Limpiar efectos y mantener trabajo por frame fuera del estado React. |
| Proyecto demasiado genérico o difícil de mantener | Componentes pequeños por responsabilidad y contenido específico por semana. |

## 8. Commits, revisión y regreso

Trabajar un bloque por vez: implementar, comprobar y hacer un commit corto en primera persona. No acumular toda la migración en un único commit ni hacer push automáticamente por crear este plan.

Antes de integrar una etapa, revisar su diff y sus comprobaciones. Si falla, corregirla antes de continuar. Para regresar a una publicación anterior, revertir el cambio en un nuevo commit o desplegar el artefacto estable. Si también se cambió el origen de Pages, restaurar una combinación compatible de configuración y artefacto; revertir solamente el código podría no bastar. No usar force push ni borrar el historial.

## 9. Primera sesión propuesta

**Hacer únicamente las etapas 0 y 1**, sin migrar todavía toda la portada. El objetivo es demostrar que React y Vite pueden convivir con el sitio y que la construcción conserva todas las páginas. La siguiente sesión migraría una sección sencilla.

## Fuentes oficiales

- [React: añadir React a un proyecto existente](https://react.dev/learn/add-react-to-an-existing-project): adopción gradual en partes de una página.
- [Vite: construcción de producción y múltiples páginas](https://vite.dev/guide/build): entradas HTML y recursos del build.
- [Vite: publicación de sitios estáticos](https://vite.dev/guide/static-deploy): configuración de base y despliegue en GitHub Pages.
