@echo off
title Petualangan Yaya dan Caca - Launcher Laptop
echo ========================================================
echo    Petualangan Yaya dan Caca - Mengenal Bagian Tanaman
echo ========================================================
echo.
echo Sedang menyiapkan game untuk dibuka di browser...
echo Browser akan otomatis terbuka ke: http://localhost:8000
echo.
echo (JANGAN TUTUP JENDELA INI SELAMA BERMAIN)
echo.

start "" "http://localhost:8000"

python -m http.server 8000
if %ERRORLEVEL% NEQ 0 (
    echo Python tidak ditemukan, mencoba menggunakan Node.js...
    npx -y serve -p 8000
)

pause

