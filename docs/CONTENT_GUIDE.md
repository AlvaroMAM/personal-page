# Guía práctica para actualizar el contenido

Esta guía explica cómo mantener la web sin modificar layouts HTML ni estilos CSS. La información personal se guarda en YAML o Markdown y Jekyll genera automáticamente las páginas, los listados y la portada.

## Mapa rápido

| Contenido | Archivo o carpeta |
| --- | --- |
| Titular, subtítulo y textos de portada | `_data/home.yml` |
| Biografía breve de portada | `_pages/about.md` |
| Biografía completa | `_pages/about-profile.md` |
| Nombre, fotografía, afiliación, correo y perfiles | `_config.yml`, sección `author` |
| Líneas de investigación | `_data/research.yml` |
| Publicaciones | `_publications/` |
| Proyectos y software | `_projects/` |
| Congresos, charlas y entrevistas | `_talks/` |
| Artículos del blog | `_posts/` |
| Vídeos de YouTube | `_videos/` |
| CV web | `_pages/cv.md` |
| PDF del CV y otros documentos | `files/` |

No es necesario editar `_layouts/`, `_includes/`, `_sass/` ni `assets/css/` para actualizar contenido.

## Previsualizar antes de publicar

Desde la raíz del repositorio:

```powershell
git switch codex/redesign-v1
docker compose up
```

Abre `http://localhost:4000/personal-page/`. Los cambios en Markdown y YAML se regeneran automáticamente, aunque el tema puede tardar unos segundos. Si modificas `_config.yml`, detén el servidor con `Ctrl+C` y vuelve a ejecutar `docker compose up`.

Antes de guardar cambios:

```powershell
docker compose run --rm --no-deps site bundle exec jekyll build --trace
git status
git diff
```

## Reglas básicas de Markdown y YAML

- El bloque situado entre las dos líneas `---` se llama *front matter* y está escrito en YAML.
- Usa fechas ISO: `2026-10-18`.
- Usa `lang: "en"` o `lang: "es"` para indicar el idioma.
- Pon entre comillas los textos que contengan `:`, `#` u otros signos especiales.
- Los nombres de archivo y *slugs* deben ir en minúsculas, sin espacios ni tildes: `mi-articulo.md`.
- No cambies un `permalink` que ya esté publicado. Si una URL debe cambiar, conserva la antigua mediante `redirect_from`.
- Los valores `REEMPLAZAR_...` de los ejemplos son marcadores; no deben publicarse literalmente.

## Biografía y presentación

### Portada

Edita `_data/home.yml` para cambiar el titular, el subtítulo, los dos bloques de presentación y otros textos breves de la portada:

```yaml
eyebrow: "REEMPLAZAR_TEMA_GENERAL"
headline: "REEMPLAZAR_TITULAR"
subtitle: "REEMPLAZAR_SUBTITULO"
```

La biografía corta situada junto a la fotografía se escribe como Markdown en `_pages/about.md`, debajo del segundo `---`.

### Página About

Edita el texto de `_pages/about-profile.md`. Puedes usar Markdown normal:

```markdown
## Research interests

REEMPLAZAR_DESCRIPCION

## Background

REEMPLAZAR_TRAYECTORIA
```

Conserva el bloque inicial de metadatos y el `permalink: /about/` para no romper la URL.

## Fotografía y afiliación académica

1. Copia la nueva fotografía a `images/`, por ejemplo `images/profile-2026.jpg`.
2. Edita la sección `author` de `_config.yml`:

```yaml
author:
  avatar: "profile-2026.jpg"
  name: "REEMPLAZAR_NOMBRE"
  bio: "REEMPLAZAR_DESCRIPCION_BREVE"
  location: "REEMPLAZAR_UBICACION"
  employer: "REEMPLAZAR_UNIVERSIDAD_O_ENTIDAD"
  department: "REEMPLAZAR_DEPARTAMENTO"
  research_group: "REEMPLAZAR_GRUPO"
  affiliation: "REEMPLAZAR_AFILIACION_VISIBLE_EN_PORTADA"
  email: "REEMPLAZAR_CORREO"
```

La propiedad `avatar` solo contiene el nombre del archivo, no `images/`. La misma fotografía se reutiliza automáticamente en la portada y en los componentes académicos heredados.

## Líneas de investigación

Edita `_data/research.yml`. Cada elemento de `areas` aparece tanto en la portada como en `/research/`:

```yaml
areas:
  - slug: "REEMPLAZAR_IDENTIFICADOR"
    label: "REEMPLAZAR_ETIQUETA_CORTA"
    title: "REEMPLAZAR_NOMBRE_DEL_AREA"
    summary: "REEMPLAZAR_RESUMEN_PARA_LA_PORTADA"
    description: "REEMPLAZAR_DESCRIPCION_COMPLETA"
```

Para añadir o eliminar un área, añade o elimina un bloque completo respetando la indentación. No es necesario modificar `_pages/research.md`.

## Publicaciones científicas

Crea un archivo por publicación en `_publications/`. Usa como referencia las publicaciones reales que ya existen y conserva sus archivos.

Nombre recomendado:

```text
_publications/2026-10-18-titulo-breve.md
```

Plantilla:

```markdown
---
title: "REEMPLAZAR_TITULO"
collection: publications
permalink: /publication/2026-10-18-titulo-breve
date: 2026-10-18
venue: "REEMPLAZAR_REVISTA_O_CONGRESO"
paperurl: "https://REEMPLAZAR_URL_DEL_ARTICULO"
citation: "REEMPLAZAR_CITA_COMPLETA"
excerpt: "REEMPLAZAR_RESUMEN_BREVE"
---

REEMPLAZAR_RESUMEN_O_INFORMACION_ADICIONAL_EN_MARKDOWN
```

La publicación más reciente por fecha aparece automáticamente como *Featured Work* en la portada. La lista completa se genera en `/publications/`.

## Proyectos de investigación y software

Crea un archivo Markdown en `_projects/`:

```markdown
---
title: "REEMPLAZAR_NOMBRE_DEL_PROYECTO"
date: 2026-10-18
status: "REEMPLAZAR_ESTADO"
role: "REEMPLAZAR_ROL"
excerpt: "REEMPLAZAR_DESCRIPCION_CORTA"
collaborators:
  - "REEMPLAZAR_COLABORADOR_O_ENTIDAD"
repository: "https://github.com/REEMPLAZAR"
website: "https://REEMPLAZAR"
---

REEMPLAZAR_DESCRIPCION_COMPLETA, OBJETIVOS, RESULTADOS Y TECNOLOGIAS.
```

Los campos sin información pueden omitirse. Los proyectos se ordenan por fecha y aparecen automáticamente en `/projects/`. No atribuyas colaboradores, financiación o roles hasta haberlos verificado.

## Congresos, charlas y entrevistas

Utiliza `_talks/` para ponencias, participaciones en congresos, seminarios, entrevistas y actividades similares.

```markdown
---
title: "REEMPLAZAR_TITULO_DE_LA_PARTICIPACION"
collection: talks
type: "REEMPLAZAR_TIPO"
permalink: /talks/2026-10-18-titulo-breve
venue: "REEMPLAZAR_EVENTO"
date: 2026-10-18
location: "REEMPLAZAR_CIUDAD_Y_PAIS"
---

REEMPLAZAR_DESCRIPCION

[Event website](https://REEMPLAZAR_URL)
```

Estas entradas aparecen automáticamente en `/talks/` y en la sección correspondiente del CV. No elimines la entrevista existente; es contenido real y mantiene su URL pública.

## Artículos de blog

Crea cada artículo en `_posts/`. El nombre debe comenzar por la fecha:

```text
_posts/2026-10-18-titulo-del-articulo.md
```

Plantilla:

```markdown
---
title: "REEMPLAZAR_TITULO"
date: 2026-10-18
content_type: blog
lang: "es"
permalink: /blog/2026/10/titulo-del-articulo/
excerpt: "REEMPLAZAR_ENTRADILLA"
categories:
  - divulgacion
tags:
  - REEMPLAZAR_ETIQUETA
---

REEMPLAZAR_CONTENIDO_DEL_ARTICULO

## Un apartado

Texto, [enlaces](https://REEMPLAZAR_URL), listas y otros elementos Markdown.
```

`content_type: blog` es obligatorio para que el artículo aparezca en la nueva portada y en `/blog/`. Los posts de demostración heredados no tienen este campo: conservan sus URLs, pero no se presentan como artículos personales.

Para insertar una imagen, cópiala a `images/blog/` y usa:

```markdown
![REEMPLAZAR_TEXTO_ALTERNATIVO]({{ '/images/blog/archivo.jpg' | relative_url }})
```

## Vídeos de YouTube

Crea un archivo en `_videos/` por cada vídeo validado:

```markdown
---
title: "REEMPLAZAR_TITULO_DEL_VIDEO"
date: 2026-10-18
lang: "es"
youtube_id: "REEMPLAZAR_ID_DE_YOUTUBE"
format: "REEMPLAZAR_FORMATO"
event: "REEMPLAZAR_EVENTO_SI_PROCEDE"
excerpt: "REEMPLAZAR_DESCRIPCION_CORTA"
---

REEMPLAZAR_DESCRIPCION_COMPLETA, ENLACES Y REFERENCIAS.
```

El ID es la parte situada después de `v=` en una URL como `https://www.youtube.com/watch?v=REEMPLAZAR_ID_DE_YOUTUBE`. El vídeo se integra automáticamente mediante el dominio de privacidad mejorada de YouTube. La entrada más reciente aparece también en la portada.

## CV y enlaces profesionales

### CV web

Edita `_pages/cv.md`. Sustituye el bloque provisional por secciones Markdown verificadas, por ejemplo:

```markdown
## Education

- **REEMPLAZAR_TITULACION**, REEMPLAZAR_INSTITUCION, REEMPLAZAR_FECHAS.

## Experience

- **REEMPLAZAR_PUESTO**, REEMPLAZAR_ENTIDAD, REEMPLAZAR_FECHAS.
```

Las publicaciones y charlas se incorporan automáticamente desde `_publications/` y `_talks/`; no es necesario duplicarlas manualmente.

### PDF del CV

1. Copia el documento a `files/`, por ejemplo `files/cv.pdf`.
2. Configura en `_config.yml`:

```yaml
author:
  cv_pdf: "/files/cv.pdf"
```

El enlace de descarga aparecerá automáticamente en About y CV. Mantén estable el nombre del PDF si ya se ha compartido públicamente.

### Enlaces profesionales

Actualiza la sección `author` de `_config.yml`:

```yaml
author:
  googlescholar: "https://REEMPLAZAR"
  orcid: "https://orcid.org/REEMPLAZAR"
  researchgate: "https://REEMPLAZAR"
  github: "REEMPLAZAR_USUARIO"
  linkedin: "REEMPLAZAR_USUARIO"
  youtube: "REEMPLAZAR_CANAL"
```

Deja vacío cualquier servicio que no utilices. No escribas `#`, `@` o una URL completa cuando el comentario de `_config.yml` indique que el campo espera únicamente un nombre de usuario.

## Proteger las URLs existentes

- No renombres ni elimines archivos de publicaciones, charlas o posts ya publicados sin revisar su `permalink`.
- Si necesitas sustituir una URL, añade las anteriores a `redirect_from`:

```yaml
redirect_from:
  - /url-anterior/
  - /otra-url-anterior.html
```

- Comprueba siempre la web localmente bajo `/personal-page/`, no solo desde `/`.
- No edites la rama `master` ni la configuración de GitHub Pages hasta aprobar el despliegue.

## Lista de comprobación antes de hacer commit

1. No quedan textos `REEMPLAZAR_` ni datos provisionales involuntarios.
2. Los títulos, autores, fechas, afiliaciones, roles y enlaces se han verificado.
3. Cada contenido bilingüe tiene `lang: "en"` o `lang: "es"`.
4. Las imágenes incluyen texto alternativo descriptivo.
5. Los enlaces funcionan desde `http://localhost:4000/personal-page/`.
6. `bundle exec jekyll build` termina sin errores dentro de Docker.
7. `git diff` solo contiene los cambios de contenido esperados.
