#!/usr/bin/env bash
# ====================================================================
#  Portafolio Joseph Corcuera — arranque rápido (Mac / Linux)
#  Uso: ./start.sh
# ====================================================================
set -euo pipefail

cd "$(dirname "$0")"

echo
echo "============================================================"
echo "  Portafolio Joseph Corcuera — arrancando con Docker"
echo "============================================================"
echo

if ! command -v docker >/dev/null 2>&1; then
  echo "[ERROR] Docker no está instalado o no está en el PATH."
  exit 1
fi

if ! docker info >/dev/null 2>&1; then
  echo "[ERROR] El daemon de Docker no está corriendo. Abre Docker Desktop e intenta de nuevo."
  exit 1
fi

echo "[1/3] Construyendo imagen..."
docker compose build web

echo
echo "[2/3] Levantando contenedor en http://localhost:8080 ..."
docker compose up -d web

echo
echo "[3/3] Esperando que Nginx responda..."
for i in $(seq 1 15); do
  if curl -sf http://localhost:8080/healthz >/dev/null 2>&1; then
    echo "[OK] Portafolio listo."
    break
  fi
  sleep 1
done

# Abre el navegador según el SO
URL="http://localhost:8080"
if [[ "$OSTYPE" == "darwin"* ]]; then
  open "$URL"
elif command -v xdg-open >/dev/null 2>&1; then
  xdg-open "$URL"
fi

echo
echo "============================================================"
echo "  Listo. El portafolio está corriendo en:"
echo "  $URL"
echo
echo "  Para detenerlo:  docker compose down"
echo "  Para ver logs:   docker compose logs -f web"
echo "============================================================"
