@echo off
title STAT 2251: Inferential Statistics Course Portal Launcher
echo ===============================================================
echo   STAT 2251: Inferential Statistics for Development Studies
echo   Starting Local Learning & Exam Preparation Portal...
echo ===============================================================
echo.

cd /d "%~dp0"

echo Launching local server on http://localhost:8085 ...
start powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0server.ps1"

timeout /t 2 /nobreak >nul

echo Opening browser...
start http://localhost:8085/

echo.
echo Portal is active! You can close this window. The server PowerShell window will remain running.
echo To close the server later, just close the server PowerShell window.
exit
