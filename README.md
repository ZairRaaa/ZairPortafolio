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
| Semanas 02–15 | Páginas preparadas para documentar los siguientes aprendizajes. | 📝 Por desarrollar |

La primera semana incluye un recorrido interactivo de una petición web, una pregunta de repaso y fuentes de consulta.

> Los enlaces a archivos HTML dentro de este README muestran su código en GitHub. Para navegar por las páginas, abre el sitio publicado con GitHub Pages.

## Estructura del proyecto

```text
ZairPortafolio/
├── index.html                       # Portada personal
├── README.md                        # Presentación y guía
├── .gitignore                       # Material local excluido
├── assets/
│   ├── css/
│   │   ├── home.css                 # Diseño de portada y base visual
│   │   └── styles.css               # Base del cuaderno pendiente
│   ├── js/
│   │   ├── theme.js                 # Apariencia inicial guardada
│   │   ├── appearance.js            # Controles de modo y paleta
│   │   ├── home.js                  # Interacciones de portada
│   │   └── main.js                  # Base para próximas páginas
│   ├── images/
│   │   ├── perfil/
│   │   ├── docentes/
│   │   ├── herramientas/
│   │   └── logos/
│   └── documents/
└── pages/
    └── cuaderno/
        ├── index.html               # Índice de las semanas
        ├── semana-01/
        │   ├── index.html
        │   ├── css/semana-01.css
        │   ├── js/semana-01.js
        │   └── images/
        ├── semana-02/
        ├── …
        └── semana-15/
```

## Verlo en tu equipo

No requiere instalar dependencias ni compilar.

1. Clona el repositorio:

   ```bash
   git clone https://github.com/ZairRaaa/ZairPortafolio.git
   cd ZairPortafolio
   ```

2. Abre `index.html` en tu navegador. También puedes abrir la carpeta en VS Code y usar **Live Server**.
3. Explora la portada y entra al cuaderno.

<details>
<summary><strong>Alternativa con Python</strong></summary>

Si tienes Python instalado, ejecuta desde la carpeta del proyecto:

```bash
python -m http.server 5500 --bind 127.0.0.1
```

Abre `http://127.0.0.1:5500` en tu navegador. Detén el servidor con `Ctrl + C`.

</details>

Las tipografías de Google Fonts y las insignias de este README necesitan conexión. Las fotografías y los logos de las herramientas están guardados en el proyecto.

## Publicar en GitHub Pages

1. Sube los commits a la rama `main`:

   ```bash
   git push -u origin main
   ```

2. En el repositorio, abre **Settings → Pages**.
3. En **Build and deployment**, selecciona **Deploy from a branch**.
4. Elige la rama **main** y la carpeta **/(root)**. Pulsa **Save**.
5. Espera a que termine el despliegue y utiliza **Visit site** para copiar la dirección pública.

Con el nombre actual del repositorio y sin un dominio personalizado, la dirección esperada es:

**https://ZairRaaa.github.io/ZairPortafolio/**

Esta dirección estará disponible después de activar Pages y completar el primer despliegue. Las siguientes actualizaciones se publicarán al subir nuevos commits a `main`.

GitHub Free permite usar Pages con repositorios públicos. Consulta la [guía oficial de publicación](https://docs.github.com/es/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

## Continuar el cuaderno

- Completar cada semana con conceptos, procedimientos, evidencias y reflexión.
- Guardar sus imágenes en la carpeta de la semana correspondiente.
- Mantener separados HTML, CSS y JavaScript.
- Registrar avances en commits breves y descriptivos.
- Actualizar el estado de las semanas en este README.

La carpeta local `Informacion` contiene material de referencia y está excluida mediante `.gitignore`; no forma parte del repositorio.

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
