#requires -version 5.1
# Deprecated compatibility entrypoint. Perfect AI by JustAWall.
param([Parameter(Mandatory=$true)][string]$ZipPath)
& (Join-Path $PSScriptRoot 'push-perfect-ai.ps1') -ZipPath $ZipPath
