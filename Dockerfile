# syntax=docker/dockerfile:1.7
# ---------------------------------------------------------------------
# Portafolio Joseph Corcuera — Dockerfile multi-stage
# Stage 1: deps      -> instala dependencias en una capa cacheable
# Stage 2: builder   -> compila TypeScript + Vite y produce /dist
# Stage 3: runner    -> Nginx Alpine sirviendo la SPA con SPA fallback
# ---------------------------------------------------------------------

ARG NODE_VERSION=20-alpine
ARG NGINX_VERSION=1.27-alpine

# ============================ STAGE 1: deps ==========================
FROM node:${NODE_VERSION} AS deps
WORKDIR /app

# Solo copiamos manifests para aprovechar la cache de capas de Docker.
# Si el lock cambia, esta capa se invalida; si solo cambia el código,
# se reutiliza tal cual.
COPY package.json package-lock.json* ./

# npm ci instala exactamente lo del lockfile (build reproducible).
# --no-audit y --no-fund aceleran el install en CI/Docker.
RUN npm ci --no-audit --no-fund

# ========================== STAGE 2: builder =========================
FROM node:${NODE_VERSION} AS builder
WORKDIR /app

ENV NODE_ENV=production

# Reutilizamos los node_modules ya resueltos en la etapa "deps".
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Compila TypeScript y luego ejecuta vite build → /app/dist
RUN npm run build

# Limpieza: dejamos solo /dist en una imagen mínima de export.
RUN rm -rf node_modules src public *.ts *.json *.js *.md \
 && ls -lah /app/dist

# =========================== STAGE 3: runner =========================
FROM nginx:${NGINX_VERSION} AS runner

# Metadatos OCI estándar — útiles para auditoría e integración con
# registries (GHCR, Docker Hub, etc.).
LABEL org.opencontainers.image.title="Portafolio Joseph Corcuera"
LABEL org.opencontainers.image.description="Portafolio personal full-stack — React + Vite + Tailwind"
LABEL org.opencontainers.image.authors="Joseph Corcuera <jcorcuer4@gmail.com>"
LABEL org.opencontainers.image.source="https://github.com/josephcorcuera/portafolio"
LABEL org.opencontainers.image.licenses="MIT"

# Configuración personalizada de Nginx (SPA fallback, gzip, caching).
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copiamos solo el build estático — no hay Node en runtime.
COPY --from=builder /app/dist /usr/share/nginx/html

# Ejecutar como usuario no-root (el imagen base nginx:alpine ya lo soporta
# vía /etc/nginx + permisos). Exponemos 80 dentro del contenedor.
EXPOSE 80

# Healthcheck: si Nginx deja de responder, el orquestador (compose, k8s,
# Railway, Fly.io) marcará el contenedor como unhealthy y lo reiniciará.
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD wget -q --spider http://localhost/ || exit 1

# Modo foreground para que Docker reciba las señales correctamente.
CMD ["nginx", "-g", "daemon off;"]
