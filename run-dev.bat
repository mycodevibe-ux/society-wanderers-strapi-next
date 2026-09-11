@echo off
set "PATH=%SystemRoot%\system32;%SystemRoot%;%PATH%"
title HSW Global Development Launcher
echo ==========================================
echo   HSW Global - Starting Backend ^& Frontend
echo ==========================================
echo.

:: Free ports if already occupied
for /f "tokens=5" %%a in ('netstat -aon ^| findstr ":1337" ^| findstr "LISTENING"') do taskkill /f /pid %%a >nul 2>&1
for /f "tokens=5" %%a in ('netstat -aon ^| findstr ":3000" ^| findstr "LISTENING"') do taskkill /f /pid %%a >nul 2>&1

echo [1/2] Launching Strapi CMS Backend (Port 1337)...
start "HSW Strapi Backend (Port 1337)" cmd /k "cd /d "%~dp0backend" && npm run develop"

echo [2/2] Launching Next.js Frontend (Port 3000)...
start "HSW Next.js Frontend (Port 3000)" cmd /k "cd /d "%~dp0frontend" && npm run dev"

echo.
echo ==========================================
echo   Both services started in separate windows!
echo   - Backend:  http://localhost:1337/admin
echo   - Frontend: http://localhost:3000
echo ==========================================
echo.
pause
