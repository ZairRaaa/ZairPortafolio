<div align="center">

<img src="assets/images/logos/Logo_uncp.png" alt="Universidad Nacional del Centro del Perú" width="95">

# Zair Ken · Portafolio electrónico

### La curiosidad me mueve. La tecnología me permite crear.

Estudiante de **Ingeniería de Sistemas** en la **UNCP** · IX ciclo · Perú

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Cuaderno](https://img.shields.io/badge/Cuaderno-15_semanas-173F35?style=for-the-badge)

[Sobre el proyecto](#sobre-el-proyecto) · [Cuaderno](#cuaderno-de-aprendizaje) · [Ejecutar](#verlo-en-tu-equipo) · [Publicar](#publicar-en-github-pages)

</div>

---

## Sobre el proyecto

Soy **Zair Ken Rojas Cerron** y este es mi espacio para compartir quién soy, lo que construyo y lo que voy aprendiendo.

El portafolio reúne mi presentación, herramientas, formación y proyectos. El cuaderno documenta mi recorrido en **Desarrollo de Aplicaciones Web**, con resúmenes en mis propias palabras, actividades y reflexiones.

> Entender primero. Construir después. Y dejar registro del camino.

## Una página con personalidad

| Detalle | Qué encontrarás |
| --- | --- |
| ☀️ Claro y oscuro | Cambio suave de apariencia y preferencia guardada en el navegador. |
| 🎨 Dos paletas | Verde y rojo, combinables con ambos modos. |
| 📷 Un poco de mí | Cinco fotografías repartidas por la página, con movimiento sutil. |
| 🧰 Herramientas | Logos y barras por categoría de nivel, sin porcentajes de dominio. |
| 🎓 Formación | Cursos, certificaciones y participación académica. |
| 📖 Cuaderno | Una página independiente para cada una de las 15 semanas. |
| 📱 Diseño adaptable | Distribución para computadoras y celulares. |
| ♿ Accesibilidad | Enlaces de salto, navegación por teclado y respeto al movimiento reducido. |

<details>
<summary><strong>Explorar los proyectos presentados</strong></summary>

### Datos en movimiento

Sistema de rastreo GPS de vehículos de residuos sólidos para la **Municipalidad de Chilca**. Participación en análisis de rutas, control de datos y tableros de indicadores con Python, SQL y Power BI.

### Tecnología que conecta

**Qhichwa-Band**, proyecto de brazalete traductor inteligente de quechua de la UNCP. Participación en documentación, diseño de base de datos y organización de información.

</details>

## Cuaderno de aprendizaje

**Asignatura:** Desarrollo de Aplicaciones Web · IS093A · 2026-II  
**Docente:** Dr. Jaime Suasnábar Terrel  
**Jefe de práctica:** Mg. Miguel Elías Aguilar Coronación

| Entrada | Contenido | Estado |
| --- | --- | --- |
| [Semana 01](pages/cuaderno/semana-01/index.html) | Fundamentos web, estándares, DNS y HTTP, roles de desarrollo, VS Code y reflexión. | ✅ Desarrollada |
| [Semana 02](pages/cuaderno/semana-02/index.html) | Prácticas de requerimientos, interfaces HTML/CSS y revisión de una galería, con 14 capturas. | ✅ Desarrollada |
| [Semana 03](pages/cuaderno/semana-03/index.html) | Huellitas: laboratorio con seis pasos activables. Evidencias de Pulso y de la práctica calificada 2, con galerías ampliables. | ✅ Desarrollada |
| [Semana 04](pages/cuaderno/semana-04/index.html) | Aula Virtual (ruleta y sorteo de equipos en JS puro) y Órbita (animaciones en Canvas API con closures y Delta Time). | ✅ Desarrollada |
| [Semana 05](pages/cuaderno/semana-05/index.html) | Creación de plantillas: React, Vite y Next.js. Comparación de sus funciones y temas del sílabo pendientes. | ✅ Documentada |
| [Semana 06](pages/cuaderno/semana-06/index.html) | Órbita: componentes y props. Nido: SPA y catálogo. TecnoAndes: recuperación de la semana 5. Nueve capturas ampliables. | ✅ Documentada |
| [Semana 07](pages/cuaderno/semana-07/index.html) | Biblioteca universitaria, Apex Motors y TaskMaster Pro. Mapa de hooks y quince capturas ampliables. | ✅ Documentada |
| [Semana 08](pages/cuaderno/semana-08/index.html) | Consolidación de notas y recorrido desplegable por las semanas anteriores. El parcial se realizó en la semana 7. | ✅ Documentada |
| [Semana 09](pages/cuaderno/semana-09/index.html) | Patio y Registro de contactos: PHP, JSP, sesiones, ciclo HTTP y despliegue local. Quince capturas ampliables. | ✅ Documentada |
| [Semana 10](pages/cuaderno/semana-10/index.html) | Gestor de productos en Python y Almacén, una API REST con Express y MySQL. Doce capturas ampliables. | ✅ Documentada |
| Semanas 11–15 | Páginas preparadas para documentar los siguientes aprendizajes. | 📝 Por desarrollar |

La primera semana incluye un recorrido interactivo de una petición web, una pregunta de repaso y fuentes de consulta.

> Los enlaces a archivos HTML dentro de este README muestran su código en GitHub. Para navegar por las páginas, abre el sitio publicado con GitHub Pages.

## Estructura del proyecto

```text
ZairPortafolio/
├── index.html                  # Entrada de la portada
├── pages/cuaderno/             # Índice, 15 semanas y laboratorio Huellitas
├── src/
│   ├── entries/                # Entradas que activan las interacciones de React
│   ├── pages/                  # Portada, cuaderno y páginas de las semanas
│   ├── components/             # Layout, navegación y visor de evidencias
│   ├── data/                   # Datos de semanas, proyectos y evidencias
│   ├── hooks/
│   └── sections/home/          # Secciones de la portada
├── assets/                     # Estilos, scripts compartidos e imágenes
├── scripts/                    # Inventario y verificación del build
├── vite.config.js              # Entradas HTML y prefijo de publicación
└── .github/workflows/pages.yml # Verificación y publicación de dist/
```

## Verlo en tu equipo

Usa Node.js 22.13 o una versión posterior de la serie 22. Instala las dependencias y arranca Vite.

```bash
git clone https://github.com/ZairRaaa/ZairPortafolio.git
cd ZairPortafolio
npm ci
npm run dev
```

Abre [la vista local del portafolio](http://127.0.0.1:5173/ZairPortafolio/) o el puerto que indique Vite. Para comprobar la compilación de producción, ejecuta:

```bash
npm run lint
npm run build
npm run preview
```

La vista previa suele estar en [el puerto 4173](http://127.0.0.1:4173/ZairPortafolio/). Detén el servidor con `Ctrl+C`.

## Publicar en GitHub Pages

Selecciona **GitHub Actions** como **Source** en **Settings → Pages** antes de integrar esta versión en `main`. El workflow comprueba las pull requests y publica `dist/` cuando los cambios llegan a `main` y el build pasa. Revisa el resultado en **Actions** y abre la portada, una semana y Huellitas desde el sitio. [Configuración de Pages](https://github.com/ZairRaaa/ZairPortafolio/settings/pages) · [Workflow](.github/workflows/pages.yml) · [Sitio público](https://zairraaa.github.io/ZairPortafolio/)

El prefijo `/ZairPortafolio/` en `vite.config.js` corresponde a esa URL. Revisa también el prefijo que usa `scripts/verificar-build.mjs` si cambia el dominio o el nombre del repositorio.

## Continuar el cuaderno

- Para completar una semana pendiente, toma `src/pages/weeks/PendingWeek.jsx` como punto de partida y crea una página propia con `WeekLayout`. Dale su entrada en `src/entries/` y añade su ruta después de la lista de plantillas en `vite.config.js` para asignarle el componente nuevo. Apunta el módulo de su HTML a la nueva entrada para hidratar el mismo componente.
- Conserva la URL de la semana y guarda las evidencias en su carpeta `images/`. Actualiza los datos de `src/data/weeks.js` cuando corresponda y el estado de la semana en este README.
- Ejecuta lint y build y comprueba en la vista previa el acceso directo a la semana y sus enlaces.

La carpeta local `Informacion` contiene material de referencia y está excluida mediante `.gitignore`.

## Créditos

- Contenido y portafolio: **Zair Ken Rojas Cerron**.
- Formación académica: **Universidad Nacional del Centro del Perú**.
- Logos de herramientas: [Simple Icons](https://github.com/simple-icons/simple-icons), con atribución en su carpeta.
- Tipografías: **DM Sans** y **Manrope**, servidas mediante Google Fonts.
- Las marcas y fotografías pertenecen a sus respectivos titulares; su presencia no implica autorización para reutilizarlas.

---

<div align="center">

**Aprendiendo y construyendo, desde Perú.**

[Mi perfil en GitHub](https://github.com/ZairRaaa) · [Escríbeme](mailto:a3278811@gmail.com)

</div>
