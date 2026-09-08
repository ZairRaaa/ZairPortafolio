# Portafolio electrónico

Proyecto en HTML, CSS y JavaScript, sin dependencias ni compilación.

## Estructura

```text
Portafolio_Electronico/
├── index.html                     # Presentación personal
├── assets/
│   ├── css/styles.css             # Estilos compartidos
│   ├── js/main.js                 # JavaScript compartido
│   ├── images/
│   │   ├── perfil/                # Fotos personales
│   │   ├── docentes/              # Fotos de docentes
│   │   └── logos/                 # Logotipos institucionales
│   └── documents/                # PDF y archivos descargables
├── pages/
│   └── cuaderno/
│       ├── index.html             # Índice de las 15 semanas
│       ├── semana-01/
│       │   ├── index.html         # Aprendizajes de la semana
│       │   └── images/            # Capturas y evidencias de esa semana
│       ├── ...
│       └── semana-15/
│           ├── index.html
│           └── images/
├── Informacion/                   # Material de referencia existente
└── README.md
```

## Cómo abrirlo

Abre `index.html` en un navegador o utiliza Live Server en VS Code.
Desde Inicio puedes acceder al cuaderno y a cualquiera de las 15 semanas.

## Organización del contenido

- Edita la presentación en `index.html`.
- Cada semana tiene su propia página en `pages/cuaderno/semana-NN/index.html`.
- Cada página semanal incluye espacios para tema, aprendizajes, evidencias y reflexión.
- Guarda las imágenes exclusivas de una semana en su carpeta `images/`; enlázalas como `images/nombre-archivo.png`.
- Guarda imágenes compartidas en `assets/images/` y descargables en `assets/documents/`.
- Los estilos y scripts comunes están en `assets/css/styles.css` y `assets/js/main.js`.
- Desde una semana, la ruta a los recursos compartidos empieza con `../../../assets/`.
- Usa nombres nuevos en minúsculas, sin espacios ni tildes, separados con guiones.
- Los archivos `.gitkeep` permiten que Git conserve carpetas todavía vacías; pueden eliminarse al agregar contenido.

El diseño actual es una base provisional. El material de `Informacion/` se conserva como referencia y todavía no se ha incorporado a las páginas.
