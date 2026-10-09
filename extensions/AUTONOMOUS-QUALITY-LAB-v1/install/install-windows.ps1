param(
  [Parameter(Mandatory=$true)][string]$ProjectPath,
  [switch]$WhatIf
)
$ErrorActionPreference = 'Stop'
$project = [System.IO.Path]::GetFullPath($ProjectPath)
$skillRoot = Join-Path $project '.agents\skills'
$source = Join-Path $PSScriptRoot '..\skills'
if (-not (Test-Path $project)) { throw 'Target project directory does not exist.' }
$added=0; $skipped=0
if ((-not (Test-Path $skillRoot)) -and (-not $WhatIf)) { New-Item -ItemType Directory -Force -Path $skillRoot | Out-Null }
Get-ChildItem -Path $source -Directory | ForEach-Object {
  $dst = Join-Path $skillRoot $_.Name
  if (Test-Path $dst) { Write-Host "SKIP existing $dst"; $script:skipped++ }
  else {
    if (-not $WhatIf) { Copy-Item $_.FullName $dst -Recurse }
    Write-Host "ADD $dst"; $script:added++
  }
}
$resources = Join-Path $project '.agents\ztx8-execution-resources'
if (Test-Path $resources) { Write-Host 'SKIP existing resource directory' }
else {
  if (-not $WhatIf) {
    New-Item -ItemType Directory -Force -Path $resources | Out-Null
    foreach ($directory in @('scripts','examples','references','config','tests','recipes')) {
      Copy-Item -Recurse (Join-Path $PSScriptRoot "..\$directory") (Join-Path $resources $directory)
    }
  }
  Write-Host "ADD $resources"
}
Write-Host "Added=$added Skipped=$skipped Preview=$WhatIf"
