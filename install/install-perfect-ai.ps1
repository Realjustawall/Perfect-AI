#requires -version 5.1
<#
.SYNOPSIS
  Install all Perfect AI (formerly Perfect_AI) Codex skills non-destructively.
.DESCRIPTION
  By default, previews the changes. Pass -Execute to copy skills into
  <ProjectPath>\.agents\skills. Existing skill folders are never replaced.
  Optional -CopyExtensionAssets adds each extension to
  <ProjectPath>\.perfect-ai\extensions only when the destination is absent.
.EXAMPLE
  .\install\install-perfect-ai.ps1 -ProjectPath 'C:\Projects\MySite' -Execute -CopyExtensionAssets
#>
[CmdletBinding()]
param(
  [Parameter(Mandatory=$true)][string]$ProjectPath,
  [switch]$Execute,
  [switch]$CopyExtensionAssets
)
$ErrorActionPreference = 'Stop'
$root = (Resolve-Path -LiteralPath (Join-Path $PSScriptRoot '..')).Path
$proj = [System.IO.Path]::GetFullPath($ProjectPath)
if (-not (Test-Path -LiteralPath $proj -PathType Container)) { throw "ProjectPath does not exist: $proj" }
$dest = Join-Path $proj '.agents\skills'
$sources = New-Object 'System.Collections.Generic.List[string]'
$primary = Join-Path $root 'skills'
if (-not (Test-Path -LiteralPath $primary -PathType Container)) { throw 'No main skills folder found.' }
$sources.Add($primary)
$extRoot = Join-Path $root 'extensions'
if (Test-Path -LiteralPath $extRoot) {
  Get-ChildItem -LiteralPath $extRoot -Directory | Sort-Object Name | ForEach-Object {
    $s = Join-Path $_.FullName 'skills'
    if (Test-Path -LiteralPath $s -PathType Container) { $sources.Add($s) }
  }
}
$added=0; $skipped=0; $seen=@{}
foreach ($folder in $sources) {
  foreach ($skill in (Get-ChildItem -LiteralPath $folder -Directory | Sort-Object Name)) {
    if (-not (Test-Path -LiteralPath (Join-Path $skill.FullName 'SKILL.md'))) { continue }
    if ($seen.ContainsKey($skill.Name)) { throw "Duplicate skill name detected: $($skill.Name)" }
    $seen[$skill.Name] = $true
    $target = Join-Path $dest $skill.Name
    if (Test-Path -LiteralPath $target) {
      $skipped++
      Write-Host "SKIP existing: $target"
      continue
    }
    if ($Execute) {
      if (-not (Test-Path -LiteralPath $dest)) { New-Item -ItemType Directory -Path $dest -Force | Out-Null }
      Copy-Item -LiteralPath $skill.FullName -Destination $target -Recurse -ErrorAction Stop
    }
    $added++
    Write-Host "$(if($Execute){'ADDED'}else{'PREVIEW'}) $($skill.Name)"
  }
}
if ($CopyExtensionAssets -and (Test-Path -LiteralPath $extRoot)) {
  $assetDest = Join-Path $proj '.perfect-ai\extensions'
  foreach ($ext in (Get-ChildItem -LiteralPath $extRoot -Directory | Sort-Object Name)) {
    $target = Join-Path $assetDest $ext.Name
    if (Test-Path -LiteralPath $target) {
      Write-Host "SKIP existing extension assets: $($ext.Name)"
      continue
    }
    if ($Execute) {
      if (-not (Test-Path -LiteralPath $assetDest)) { New-Item -ItemType Directory -Path $assetDest -Force | Out-Null }
      Copy-Item -LiteralPath $ext.FullName -Destination $target -Recurse -ErrorAction Stop
    }
    Write-Host "$(if($Execute){'ADDED'}else{'PREVIEW'}) extension assets: $($ext.Name)"
  }
}
Write-Host "Perfect AI: new=$added, already-present=$skipped, total-discovered=$($seen.Count), executed=$Execute"
Write-Host 'Note: external npm/Python tools are installed separately as needed. Restart Codex.'
