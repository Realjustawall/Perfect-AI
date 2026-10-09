param(
  [Parameter(Mandatory=$true)][string]$ProjectPath,
  [switch]$WhatIf
)
$ErrorActionPreference = 'Stop'
$extensionRoot = Split-Path -Parent $PSScriptRoot
$project = (Resolve-Path -LiteralPath $ProjectPath -ErrorAction Stop).Path
$skillsSource = Join-Path $extensionRoot 'skills'
$target = Join-Path $project '.agents\skills'
$runtime = Join-Path $project '.perfect-ai\GITHUB-13-FRONTEND-PRO-v1'
$installCount=0; $skippedCount=0
if (-not (Test-Path -LiteralPath $target) -and -not $WhatIf) {New-Item -ItemType Directory -Force -Path $target | Out-Null}
Get-ChildItem -LiteralPath $skillsSource -Directory | ForEach-Object {
  $to = Join-Path $target $_.Name
  if (Test-Path -LiteralPath $to) {Write-Host "SKIP unchanged: $($_.Name)"; $skippedCount++}
  else {Write-Host "ADD: $($_.Name)"; if(-not $WhatIf){Copy-Item -LiteralPath $_.FullName -Destination $to -Recurse}; $installCount++}
}
if (Test-Path -LiteralPath $runtime) { Write-Host "SKIP runtime: $runtime" }
else {
  Write-Host "ADD runtime: $runtime"
  if(-not $WhatIf){New-Item -ItemType Directory -Force -Path (Split-Path -Parent $runtime)|Out-Null;Copy-Item -LiteralPath $extensionRoot -Destination $runtime -Recurse}
}
Write-Host "Completed. Added: $installCount, skipped: $skippedCount. Existing paths never overwritten."
