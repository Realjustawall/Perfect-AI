<# Add ONLY ztx4 skills. No overwrite. No MCP. #>
param([string]$ProjectPath=(Get-Location).Path,[string]$Domain='all',[switch]$DryRun)
$ErrorActionPreference='Stop'
$packRoot=Split-Path -Parent (Split-Path -Parent (Split-Path -Parent $PSScriptRoot))
$source=Join-Path $packRoot 'skills'
$dest=Join-Path $ProjectPath '.agents\skills'
if(-not(Test-Path -LiteralPath $ProjectPath -PathType Container)){throw 'ProjectPath does not exist'}
if(-not(Test-Path -LiteralPath $source -PathType Container)){throw "Skills not found in $source"}
if(-not $DryRun){New-Item -ItemType Directory -Path $dest -Force | Out-Null}
$added=0;$skip=0
Get-ChildItem -LiteralPath $source -Directory | Where-Object { $_.Name -like 'ztx4-*' -and ($Domain -eq 'all' -or $_.Name -like "ztx4-$Domain*") } | ForEach-Object {
 $target=Join-Path $dest $_.Name
 if(Test-Path -LiteralPath $target){$skip++;return}
 if($DryRun){Write-Host "WOULD INSTALL $($_.Name)"} else {Copy-Item -LiteralPath $_.FullName -Destination $target -Recurse}
 $added++
}
Write-Host "New ztx4 skills: $added; preserved/skipped: $skip; overwritten: 0"
