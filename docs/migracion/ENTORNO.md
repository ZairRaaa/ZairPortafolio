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

La vista previa normal estará en `http://127.0.0.1:4173/ZairPortafolio/` (Vite indicará otro puerto si está ocupado). En esta sesión de revisión se usa el puerto 5510.

El build verifica que las 18 entradas HTML, recursos y enlaces locales existan bajo el prefijo del repositorio. `dist/` no se guarda en Git. No se cambió la configuración de Pages ni se publica esta rama automáticamente.

## Convivencia temporal

- React y React DOM están instalados; el plugin de Vite está preparado para JSX.
- Aún no se ha migrado ninguna sección ni se carga React en las páginas actuales.
- Todos los HTML existentes son entradas de Vite, incluido el laboratorio.
- Los scripts clásicos conservan su orden y atributos. Vite advierte que no los empaqueta como módulos; el plugin `preserve-legacy-assets` garantiza que existan en sus rutas originales.
- Los recursos de `assets/` y `pages/` se copian con una lista de extensiones permitidas. En esta fase se conservan también los originales PNG y versiones sin hash, aunque Vite genere otros archivos optimizados. Es una duplicación temporal para proteger enlaces y galerías; reducirla después de migrar sus consumidores.
- `Informacion/`, configuración Git, documentación y dependencias no se publican.
- El laboratorio conserva sus dependencias CDN de Bootstrap y Tailwind y requiere conexión para ellas.

## Inventario y controles

`docs/migracion/inventario.json` es la referencia original: hashes, anclas, enlaces y recursos. No regenerarlo para ocultar diferencias durante la migración. El comando `npm run inventory` permite actualizarlo solo si se decide establecer expresamente una nueva referencia.

`npm run lint` revisa JavaScript existente y configuración; los futuros componentes tendrán reglas de hooks. `npm run build` comprueba recursos y enlaces del resultado. Las capturas completas de referencia, pruebas de todas las apariencias y auditoría de accesibilidad se harán antes de migrar cada sección; los controles estructurales no sustituyen esas revisiones.

## Siguiente avance

Completar la referencia visual de la sección elegida y migrar una sección sencilla (proyectos o herramientas). Retirar únicamente los selectores antiguos que controlen esa sección. No rediseñar ni migrar todas las semanas en el mismo commit.
## Validación realizada en la preparación

- `npm run lint`: correcto.
- `npm run build`: correcto; 18 páginas y 183 recursos comprobados.
- `npm install`: auditoría sin vulnerabilidades reportadas en esta instalación.
- Vista previa bajo `/ZairPortafolio/`: portada cargada sin errores de consola y navegación a semana 7 correcta.
- Galería de semana 7: dialog abierto y recurso WebP resuelto en la ruta de producción.
- La revisión visual completa en móvil y las cuatro combinaciones de apariencia sigue pendiente para la primera sección que se migre.
