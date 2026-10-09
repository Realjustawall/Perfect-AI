param([Parameter(Mandatory=$true)][string]$ProjectPath,[switch]$Execute)
$ErrorActionPreference = 'Stop'
$here = Split-Path -Parent $MyInvocation.MyCommand.Path
$ext = (Resolve-Path (Join-Path $here '..')).Path
$src = Join-Path $ext 'skills'
if (-not (Test-Path $ProjectPath)) { throw 'Target project directory does not exist.' }
$target = Join-Path (Resolve-Path $ProjectPath).Path '.agents\skills'
Write-Host ('Perfect_AI VERIFIED ENGINE -> ' + $target)
Write-Host 'Dry-run by default. Add -Execute to install. Existing folders will NEVER be overwritten.'
if ($Execute) { New-Item -ItemType Directory -Path $target -Force | Out-Null }
$added=0; $skipped=0
Get-ChildItem -LiteralPath $src -Directory | ForEach-Object {
 $dest = Join-Path $target $_.Name
 if (Test-Path -LiteralPath $dest) { Write-Host ('SKIP existing: ' + $_.Name); $script:skipped++ }
 else {
  Write-Host ('ADD: ' + $_.Name)
  if ($Execute) { Copy-Item -LiteralPath $_.FullName -Destination $dest -Recurse -ErrorAction Stop }
  $script:added++
 }
}
Write-Host ("Planned/added=$added skipped=$skipped")
Write-Host 'Note: The framework examples and CLI scripts remain inside the extracted ZIP extension; no existing project files are modified.'
