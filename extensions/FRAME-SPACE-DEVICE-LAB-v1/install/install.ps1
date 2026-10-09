param([Parameter(Mandatory=$true)][string]$ProjectPath)
$ErrorActionPreference = 'Stop'
$extensionRoot = Split-Path -Parent $PSScriptRoot
$targetRoot = Join-Path $ProjectPath '.agents\skills'
New-Item -ItemType Directory -Force -Path $targetRoot | Out-Null
$created=0; $skipped=0
Get-ChildItem -LiteralPath (Join-Path $extensionRoot 'skills') -Directory | ForEach-Object {
  $destination = Join-Path $targetRoot $_.Name
  if (Test-Path -LiteralPath $destination) { Write-Host "SKIP (exists): $destination"; $skipped++ }
  else { Copy-Item -LiteralPath $_.FullName -Destination $destination -Recurse -ErrorAction Stop; Write-Host "ADDED: $destination"; $created++ }
}
$resources = Join-Path $ProjectPath '.agents\ztx9-frame-space-device-lab'
if (-not (Test-Path -LiteralPath $resources)) {
  New-Item -ItemType Directory -Path $resources -Force | Out-Null
  foreach ($child in @('references','tools','examples','tests','SOURCES.md','INDEX.md','README-FA.md','package.json')) {
    $source=Join-Path $extensionRoot $child
    if(Test-Path -LiteralPath $source){Copy-Item -LiteralPath $source -Destination $resources -Recurse -ErrorAction Stop}
  }
  Write-Host "Resources installed at $resources"
} else { Write-Host 'Resources already installed; skipped without overwrite.' }
Write-Host "Skills added=$created skipped=$skipped; NO EXISTING DIRECTORY OVERWRITTEN"
