<#
.VibeFarsi official CLI bulk installer (NO MCP).
Safety: dry run by default. -Execute to mutate. Requires React/Tailwind v4 project, node/npm and network for CLI.
Never overwrites project files intentionally. Review upstream CLI effects and backup before use.
Usage: .\install-vibefarsi-all.ps1 -ProjectPath "C:\Work\myapp"
       .\install-vibefarsi-all.ps1 -ProjectPath "C:\Work\myapp" -Execute
       .\install-vibefarsi-all.ps1 -ProjectPath "C:\Work\myapp" -Execute -OnlyCategories animations,backgrounds
#>
param(
  [string]$ProjectPath=(Get-Location).Path,
  [switch]$Execute,
  [string[]]$OnlyCategories=@('components','blocks','charts','animations','backgrounds','templates','sites','design-systems','skills'),
  [switch]$SkipInit
)
$ErrorActionPreference='Stop'; $root=Split-Path -Parent $PSScriptRoot
if(-not(Test-Path -LiteralPath $ProjectPath -PathType Container)){throw "Missing project: $ProjectPath"}
$manifest=Get-Content -LiteralPath (Join-Path $root 'registry-index.json') -Raw -Encoding UTF8 | ConvertFrom-Json
$names=@(); foreach($cat in $OnlyCategories){
  if(-not($manifest.categories.PSObject.Properties.Name -contains $cat)){throw "Unsupported category: $cat"}
  $names+=@($manifest.categories.$cat)
}
$names=@($names | Select-Object -Unique)
Write-Host "VibeFarsi official CLI / no MCP. Selected $($names.Count) slugs."
Write-Host "Target: $ProjectPath; Mode: $(if($Execute){'EXECUTE'}else{'DRY-RUN'})"
Write-Host 'WARNING: Back up or commit your project first. This CLI requires internet and may install npm dependencies.'
Push-Location $ProjectPath
try {
 if(-not $SkipInit){
   if($Execute){ & npx --yes vibefarsi@latest init --dry-run; if($LASTEXITCODE -ne 0){throw 'vibefarsi init dry-run failed'}; & npx --yes vibefarsi@latest init; if($LASTEXITCODE -ne 0){throw 'vibefarsi init failed'} }
   else { Write-Host '[PLAN] npx --yes vibefarsi@latest init --dry-run / init'; }
 }
 $failed=New-Object System.Collections.Generic.List[string]
 foreach($name in $names){
   if(-not $Execute){ Write-Host "[PLAN] npx --yes vibefarsi add $name --dry-run; then add $name"; continue }
   & npx --yes vibefarsi add $name --dry-run
   if($LASTEXITCODE -ne 0){Write-Warning "Skipped unavailable/invalid $name"; $failed.Add($name);continue}
   & npx --yes vibefarsi add $name
   if($LASTEXITCODE -ne 0){Write-Warning "Installation failed: $name"; $failed.Add($name)}
 }
 if($Execute){$failed | Set-Content -LiteralPath 'vibefarsi-install-failures.txt' -Encoding utf8; Write-Host "Install attempted: $($names.Count); failures: $($failed.Count). Run build and review diff."}
} finally {Pop-Location}
