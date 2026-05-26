# Portafolio · Joseph Corcuera

Portafolio personal full-stack con CV interactivo de más de 50 páginas, descargable en PDF, integraciones a redes sociales y diseño responsive.

> **Autor:** Joseph Corcuera · Lima, Perú
> **Contacto:** jcorcuer4@gmail.com · +51 986 501 081

---

## Stack tecnológico

- **React 18** + **Vite** + **TypeScript** (modo estricto)
- **TailwindCSS** para estilos utility-first
- **Framer Motion** para animaciones
- **React Router DOM** para navegación entre páginas
- **@react-pdf/renderer** para generar el CV en PDF descargable
- **Lucide React** para iconografía
- **Docker** + **Nginx** para despliegue en producción

---

## Estructura del proyecto

```
portafolio/
├── Dockerfile              # Build multi-stage para producción (Node + Nginx)
├── Dockerfile.dev          # Imagen de desarrollo con Vite + HMR
├── docker-compose.yml      # Orquestación de servicios prod y dev
├── nginx.conf              # Config de Nginx (SPA fallback, gzip, headers)
├── .dockerignore           # Exclusiones del contexto de build
├── .gitignore
├── index.html
├── package.json
├── public/
└── src/
    ├── components/
    │   ├── sections/       # Hero, About, Skills, Projects, Contact
    │   ├── CVDocument.tsx  # Documento PDF del CV (50+ páginas)
    │   ├── CVDownloadButton.tsx
    │   ├── SocialLinks.tsx # Componente vinculado a redes sociales
    │   ├── Navbar.tsx
    │   ├── Footer.tsx
    │   ├── BackgroundFX.tsx
    │   ├── LightningShader.tsx
    │   ├── ParticleField.tsx
    │   └── ScrollProgress.tsx
    ├── data/
    │   ├── profile.ts      # Datos personales (editar para actualizar)
    │   ├── socials.ts      # Redes sociales (GitHub, LinkedIn, IG, WA)
    │   ├── skills.ts
    │   ├── projects.ts
    │   └── cvContent.ts    # 51 secciones del CV — totalmente editable
    ├── pages/
    │   ├── Home.tsx
    │   ├── CV.tsx          # Vista web del CV + descarga PDF
    │   └── NotFound.tsx
    ├── App.tsx
    └── main.tsx
```

---

## Cómo correr el proyecto

### Opción 0 — La más fácil (recomendada para evaluar)

**Windows**: doble click en `start.bat`
**Mac / Linux**: `./start.sh` en la terminal

El script:
1. Verifica que Docker Desktop esté corriendo
2. Construye la imagen (la primera vez tarda ~1 min)
3. Levanta el contenedor en segundo plano
4. Espera a que Nginx responda
5. **Abre el portafolio automáticamente en el navegador**

Para detenerlo después: `docker compose down`

### Desde Docker Desktop

Una vez levantado el contenedor (con `start.bat` o `docker compose up -d`), Docker Desktop lo muestra en la pestaña **Containers**. En la columna *Port(s)* aparece **`8080:80`** como link — haz click en `8080` y se abre el portafolio en el navegador.

### Opción A — Local con Node

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # genera /dist
npm run preview   # previsualiza el build
```

### Opción B — Docker (producción)

Build y arranque con la imagen optimizada Nginx:

```bash
docker compose up --build
# Disponible en http://localhost:8080
```

Para apagar:

```bash
docker compose down
```

Para reconstruir desde cero (sin cache):

```bash
docker compose build --no-cache web
```

### Opción C — Docker (desarrollo con hot reload)

```bash
docker compose --profile dev up
# Disponible en http://localhost:5173 con HMR activo
```

---

## Actualizar el CV

El CV se renderiza dinámicamente desde **`src/data/cvContent.ts`**. Cada elemento del array `cvSections` corresponde a una página del PDF y a una sección de la vista web.

### Layouts disponibles

| Layout       | Para qué sirve                                                  |
|--------------|-----------------------------------------------------------------|
| `cover`      | Portada con nombre, rol y tagline                               |
| `toc`        | Índice de contenidos                                            |
| `letter`     | Carta de presentación con párrafos y firma                      |
| `profile`    | Tabla de datos personales clave–valor                           |
| `standard`   | Texto corrido con título, subtítulo opcional y párrafos         |
| `bullets`    | Lista de viñetas con intro opcional                             |
| `items`      | Bloques tipo experiencia: título, período, descripción, tags    |
| `skillBars`  | Barras de progreso de habilidades                               |
| `quote`      | Cita destacada + comentario propio                              |
| `twoColumn`  | Dos columnas paralelas con bullets cada una                     |

Para agregar una nueva página, añade un nuevo objeto al array siguiendo el layout deseado. El PDF se regenera automáticamente.

Otros archivos editables:
- `src/data/profile.ts` — nombre, rol, bio, contacto
- `src/data/socials.ts` — enlaces a redes sociales
- `src/data/skills.ts` — stack técnico y nivel
- `src/data/projects.ts` — proyectos del portafolio

---

## Despliegue

### Imagen Docker — producción

La imagen final pesa ~30 MB (Nginx alpine + dist estático). Compatible con:

- **Railway** — `railway up`
- **Fly.io** — `fly launch && fly deploy`
- **Render** — conecta el repo, selecciona Docker
- **Google Cloud Run** — `gcloud run deploy --source .`
- **GHCR / Docker Hub** — push de la imagen `joseph-portafolio:latest`

### Frontend estático

Si prefieres no usar Docker, el `dist/` puede subirse directo a Vercel, Netlify o Cloudflare Pages.

---

## Características destacadas

- **CV de 51 páginas** generadas dinámicamente desde TypeScript, descargables como PDF de calidad imprenta.
- **Diseño responsive** — todas las páginas se adaptan de móvil a escritorio.
- **Animaciones con Framer Motion** — transiciones suaves, scroll progress, efectos hover.
- **Background FX** — partículas, shader de iluminación y efectos visuales propios.
- **Componente `SocialLinks`** — enlaces directos a GitHub, LinkedIn, Instagram, WhatsApp y correo.
- **Build optimizado** — tree-shaking de Vite, gzip de Nginx, cache inmutable para assets con hash.
- **Healthchecks** y headers de seguridad configurados en Nginx.

---

## Licencia

MIT — Joseph Corcuera, 2026.
