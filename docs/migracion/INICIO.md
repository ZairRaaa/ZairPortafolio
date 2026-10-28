# Inicio de la migración

## Versión estable

- Commit de referencia: `8e8092f` (sitio original y plan).
- Última versión del sitio publicada al comenzar: `ac36b90`.
- Etiqueta local: `respaldo-html-2026-10-27`.
- Rama estable: `main`, en la carpeta original de Downloads.
- Copia Git independiente: `Portafolio_Electronico-respaldo-2026-10-27.bundle`, junto a la carpeta original. Se verificó con `git bundle verify`; incluye el historial completo.
- El bundle guarda archivos versionados. `Informacion/` sigue en la carpeta original, excluida de Git; no se copia al entorno de publicación.

## Trabajo separado

La migración se desarrolla en `codex/migracion-react`, en un worktree independiente:

`C:/Users/NITRO 5/.codex/worktrees/migracion-react/Portafolio_Electronico`

El worktree tiene archivos y dependencias propios; comparte el historial Git con el original. El bundle es una copia independiente de ese historial. No eliminar este worktree mientras contenga avances necesarios.

Para recuperar una copia estable en una carpeta nueva:

```powershell
git clone -b main "C:/Users/NITRO 5/Downloads/9no semestre/DESARROLLO DE APLICACIONES WEB/Portafolio_Electronico-respaldo-2026-10-27.bundle" Portafolio_Restaurado
```

## Responsabilidades que hay que separar al migrar

| Archivo | Responsabilidad actual | Atención al convertir |
| --- | --- | --- |
| theme.js | Tema inicial antes del primer pintado | Mantener ejecución síncrona y claves de almacenamiento. |
| appearance.js | Tema, paleta, listeners y color del navegador | Un responsable por control y limpieza de listeners. |
| home.js | Menú, scroll, fotos, observers, copiar correo | Retirar selectores de cada sección que pase a React. |
| hero-depth.js | Pausa, cursor y visibilidad | Conservar CSS; refs para actualizaciones por frame. |
| semana-XX.js | Índice y funciones propias | Inventariar antes de compartir un hook. |
| evidencias.js | Galerías y dialog | Conservar retorno del foco y grupos independientes. |
| laboratorio.js y tailwind-config.js | Laboratorio Huellitas | Mantener orden de scripts y dependencia externa de Tailwind/Bootstrap. |

## Alcance de este primer avance

Preparar instalación, inventario y build multipágina. No se han convertido secciones a React ni cambiado la configuración de GitHub Pages. El despliegue actual sigue desde la versión estable.

Las capturas visuales completas de referencia en todas las combinaciones de apariencia quedan pendientes antes de migrar la primera sección. El inventario registra las páginas originales, sus hashes, anclas y enlaces para poder contrastar el contenido.
