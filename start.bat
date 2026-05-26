@echo off
REM ====================================================================
REM  Portafolio Joseph Corcuera — arranque rapido
REM  Doble click sobre este archivo:
REM    1) Construye la imagen Docker (si hace falta)
REM    2) Levanta el contenedor en segundo plano
REM    3) Abre el portafolio en el navegador
REM ====================================================================

setlocal
chcp 65001 >nul
cd /d "%~dp0"

echo.
echo ============================================================
echo   Portafolio Joseph Corcuera — arrancando con Docker
echo ============================================================
echo.

REM Verifica que Docker este disponible
docker --version >nul 2>&1
if errorlevel 1 (
    echo [ERROR] Docker no esta instalado o no esta en el PATH.
    echo         Instala Docker Desktop desde https://docker.com
    pause
    exit /b 1
)

REM Verifica que el daemon este corriendo
docker info >nul 2>&1
if errorlevel 1 (
    echo [ERROR] Docker Desktop no esta corriendo.
    echo         Abrelo y vuelve a ejecutar este script.
    pause
    exit /b 1
)

echo [1/3] Construyendo imagen...
docker compose build web
if errorlevel 1 (
    echo [ERROR] Fallo el build. Revisa los mensajes arriba.
    pause
    exit /b 1
)

echo.
echo [2/3] Levantando contenedor en http://localhost:8080 ...
docker compose up -d web
if errorlevel 1 (
    echo [ERROR] No se pudo levantar el contenedor.
    pause
    exit /b 1
)

echo.
echo [3/3] Esperando que Nginx responda...
set /a INTENTOS=0
:wait_loop
set /a INTENTOS+=1
curl -s -o nul -w "" http://localhost:8080/healthz >nul 2>&1
if not errorlevel 1 goto ready
if %INTENTOS% GEQ 15 (
    echo [WARN] El contenedor tarda mas de lo normal. Abriendo de todos modos...
    goto open
)
timeout /t 1 /nobreak >nul
goto wait_loop

:ready
echo [OK] Portafolio listo.

:open
echo.
echo Abriendo navegador...
start "" http://localhost:8080
echo.
echo ============================================================
echo   Listo. El portafolio esta corriendo en:
echo   http://localhost:8080
echo.
echo   Para detenerlo:  docker compose down
echo   Para ver logs:   docker compose logs -f web
echo ============================================================
echo.
pause
endlocal
