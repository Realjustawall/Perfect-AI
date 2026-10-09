<#
Add-only one-click installer for ALL extracted Perfect_AI SKILL.md directories.
No deletes, no overwrites. PowerShell 5.1 / PowerShell 7 compatible.
Usage:
  .\install-all-safe.ps1 -ProjectPath 'C:\Projects\Site' -WhatIf
  .\install-all-safe.ps1 -ProjectPath 'C:\Projects\Site'
#>
param(
  [Parameter(Mandatory=$true)][string]$ProjectPath,
  [switch]$WhatIf,
  [switch]$SkipResourceLibrary
)
$ErrorActionPreference = 'Stop'
$project = [IO.Path]::GetFullPath($ProjectPath).TrimEnd([IO.Path]::DirectorySeparatorChar)
$root = [IO.Path]::GetFullPath((Join-Path $PSScriptRoot '..\..\..')).TrimEnd([IO.Path]::DirectorySeparatorChar)
if (-not (Test-Path -LiteralPath $project -PathType Container)) { throw "Project does not exist: $project" }
if ($project.StartsWith($root + [IO.Path]::DirectorySeparatorChar, [StringComparison]::OrdinalIgnoreCase) -or $project -eq $root) {
  throw 'Project cannot be inside extracted skill archive; this prevents copying into itself.'
}
$target = Join-Path $project '.agents\skills'
if ((-not $WhatIf) -and (-not (Test-Path $target))) { New-Item -ItemType Directory -Path $target -Force | Out-Null }
$all = @(Get-ChildItem -LiteralPath $root -File -Filter 'SKILL.md' -Recurse -ErrorAction Stop)
$names = @{}
$added = 0; $skipped=0
foreach ($item in $all) {
  $skill = $item.Directory.Name
  if ($names.ContainsKey($skill)) { throw "Duplicate skill directory name: $skill. Refusing ambiguous overwrite." }
  $names[$skill] = $item.Directory.FullName
  $destination = Join-Path $target $skill
  if (Test-Path -LiteralPath $destination) { $skipped++;continue }
  if (-not $WhatIf) { Copy-Item -LiteralPath $item.Directory.FullName -Destination $destination -Recurse }
  $added++
}
$resourceBase = Join-Path $project '.agents\perfect-ai-sources'
if (-not $SkipResourceLibrary) {
  if (Test-Path $resourceBase) { Write-Host "SKIP existing resource library: $resourceBase" }
  else {
    if (-not $WhatIf) { New-Item -ItemType Directory -Path $resourceBase -Force | Out-Null }
    # Do not copy the top-level skill directory twice into the sources library.
    foreach ($dir in @(Get-ChildItem -LiteralPath $root -Directory)) {
      if ($dir.Name -in @('skills','install','.agents')) {continue}
      $dest = Join-Path $resourceBase $dir.Name
      if ((-not (Test-Path $dest)) -and (-not $WhatIf)) { Copy-Item -LiteralPath $dir.FullName -Destination $dest -Recurse }
    }
    foreach ($file in @(Get-ChildItem -LiteralPath $root -File)) {
      $dest=Join-Path $resourceBase $file.Name
      if ((-not (Test-Path $dest)) -and (-not $WhatIf)) { Copy-Item -LiteralPath $file.FullName -Destination $dest }
    }
  }
}
Write-Host "Original skill candidates=$($all.Count) Added=$added Existing_skipped=$skipped DryRun=$WhatIf"
Write-Host 'All source files remain untouched; the installer never deletes or overwrites.'
