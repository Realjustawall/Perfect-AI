<# Selectively install ONLY new NEXUS skills. Keeps previously installed TITAN PLUS skills intact. #>
param([string]$ProjectPath = (Get-Location).Path,[string]$Domain = 'all')
$ErrorActionPreference = 'Stop'
$packRoot = Split-Path -Parent (Split-Path -Parent $PSScriptRoot)
$source = Join-Path $packRoot 'skills'
$destRoot = Join-Path $ProjectPath '.agents\skills'
if (-not (Test-Path $ProjectPath -PathType Container)) { throw 'Project path not found' }
New-Item -ItemType Directory -Path $destRoot -Force | Out-Null
$installed=0;$skipped=0
Get-ChildItem -LiteralPath $source -Directory | Where-Object { $_.Name -like 'ztx3-*' -and ($Domain -eq 'all' -or $_.Name -like "ztx3-$Domain*") } | ForEach-Object {
 if (-not (Test-Path (Join-Path $_.FullName 'SKILL.md'))) { return }
 $dest=Join-Path $destRoot $_.Name
 if(Test-Path $dest){ $skipped++; return }
 Copy-Item -LiteralPath $_.FullName -Destination $dest -Recurse
 $installed++
}
Write-Host "Installed NEXUS $installed skills. Skipped existing $skipped. No overwritten directories."
