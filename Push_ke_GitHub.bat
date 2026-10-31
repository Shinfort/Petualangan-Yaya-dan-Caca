@echo off
title Push Petualangan Yaya dan Caca ke GitHub
echo ========================================================
echo    Push Proyek ke GitHub: Shinfort/Petualangan-Yaya-dan-Caca
echo ========================================================
echo.
echo Sedang mengunggah berkas ke GitHub...
echo (Jika muncul jendela login GitHub di browser, silakan klik 'Sign in with your browser')
echo.
git push -u origin main
echo.
if %ERRORLEVEL% EQU 0 (
    echo ========================================================
    echo  BERHASIL! Seluruh berkas telah ter-upload ke GitHub.
    echo ========================================================
) else (
    echo ========================================================
    echo  Gagal mengunggah. Periksa koneksi atau izin akun GitHub Anda.
    echo ========================================================
)
echo.
pause
