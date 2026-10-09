@echo off
setlocal
if "%~1"=="" (echo Usage: START-AUDIT-WINDOWS.cmd http://127.0.0.1:5173 evidence_folder & exit /b 2)
if "%~2"=="" (echo Please specify evidence directory & exit /b 2)
py -3 "%~dp0..\scripts\audit_browser.py" --url "%~1" --out "%~2" 
