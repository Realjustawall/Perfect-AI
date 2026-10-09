param(
  [Parameter(Mandatory=$true)][string]$ProjectPath,
  [switch]$WhatIf
)
$ErrorActionPreference = 'Stop'
$source = Join-Path $PSScriptRoot '..\skills'
$target = Join-Path $ProjectPath '.agents\skills'
if (-not (Test-Path $target)) { if (!$WhatIf) { New-Item -ItemType Directory -Path $target -Force | Out-Null } }
$added=0; $skipped=0
Get-ChildItem -Path $source -Directory | ForEach-Object {
  $destination = Join-Path $target $_.Name
  if (Test-Path $destination) {
    Write-Host "SKIP existing: $destination"; $script:skipped++
  } else {
    if (!$WhatIf) { Copy-Item -Path $_.FullName -Destination $destination -Recurse }
    Write-Host "ADD: $destination"; $script:added++
  }
}

$resourceTarget = Join-Path $ProjectPath '.agents\ztx5-resources'
if (Test-Path $resourceTarget) {
  Write-Host "SKIP existing resources: $resourceTarget"
} else {
  if (!$WhatIf) {
    New-Item -ItemType Directory -Path $resourceTarget -Force | Out-Null
    foreach ($folder in @('references','examples','scripts','tests')) {
      Copy-Item -Path (Join-Path $PSScriptRoot "..\$folder") -Destination $resourceTarget -Recurse
    }
    foreach ($file in @('FONT-ATLAS.json','SOURCES.md','README-FA.md','INSTALL-FA.md')) {
      Copy-Item -Path (Join-Path $PSScriptRoot "..\$file") -Destination $resourceTarget
    }
  }
  Write-Host "ADD resources: $resourceTarget"
}

$resourceTarget = Join-Path $ProjectPath '.agents\ztx5-resources'
if (Test-Path $resourceTarget) {
  Write-Host "SKIP existing resources: $resourceTarget"
} else {
  if (!$WhatIf) {
    New-Item -ItemType Directory -Path $resourceTarget -Force | Out-Null
    foreach ($folder in @('references','examples','scripts','tests')) {
      Copy-Item -Path (Join-Path $PSScriptRoot "..\$folder") -Destination $resourceTarget -Recurse
    }
    foreach ($file in @('FONT-ATLAS.json','SOURCES.md','README-FA.md','INSTALL-FA.md')) {
      Copy-Item -Path (Join-Path $PSScriptRoot "..\$file") -Destination $resourceTarget
    }
  }
  Write-Host "ADD resources: $resourceTarget"
}

$resourceTarget = Join-Path $ProjectPath '.agents\ztx5-resources'
if (Test-Path $resourceTarget) {
  Write-Host "SKIP existing resources: $resourceTarget"
} else {
  if (!$WhatIf) {
    New-Item -ItemType Directory -Path $resourceTarget -Force | Out-Null
    foreach ($folder in @('references','examples','scripts','tests')) {
      Copy-Item -Path (Join-Path $PSScriptRoot "..\$folder") -Destination $resourceTarget -Recurse
    }
    foreach ($file in @('FONT-ATLAS.json','SOURCES.md','README-FA.md','INSTALL-FA.md')) {
      Copy-Item -Path (Join-Path $PSScriptRoot "..\$file") -Destination $resourceTarget
    }
  }
  Write-Host "ADD resources: $resourceTarget"
}
Write-Host "Added=$added Skipped=$skipped Preview=$WhatIf"
