<#
Install all bundled original Perfect_AI Codex skills into <ProjectPath>/.agents/skills.
No existing directory is overwritten unless -Force is supplied.
Run from PowerShell: .\install\install-codex.ps1 -ProjectPath "C:\path\to\my\project"
#>
param([string]$ProjectPath = (Get-Location).Path,[switch]$Force)
$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent $PSScriptRoot
$source = Join-Path $root 'skills'
$target = Join-Path $ProjectPath '.agents\skills'
if (-not (Test-Path $ProjectPath -PathType Container)) { throw "Project does not exist: $ProjectPath" }
New-Item -ItemType Directory -Path $target -Force | Out-Null
$installed = 0; $skipped = 0
Get-ChildItem -LiteralPath $source -Directory | ForEach-Object {
  if (-not (Test-Path (Join-Path $_.FullName 'SKILL.md'))) { return }
  $dest = Join-Path $target $_.Name
  if ((Test-Path $dest) -and (-not $Force)) { Write-Host "SKIP existing $dest"; $skipped++; return }
  if ((Test-Path $dest) -and $Force) { Remove-Item -LiteralPath $dest -Recurse -Force }
  Copy-Item -LiteralPath $_.FullName -Destination $dest -Recurse -Force
  Write-Host "INSTALLED: $($_.Name)"
  $installed++
}
Write-Host "Done: installed $installed; skipped $skipped; path $target"
Write-Host "Restart Codex or start a new session, then invoke `$perfect-ai-master."
