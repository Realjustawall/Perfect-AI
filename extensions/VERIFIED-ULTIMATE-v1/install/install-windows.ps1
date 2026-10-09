[CmdletBinding()]
param(
  [Parameter(Mandatory=$true)][string]$ProjectPath,
  [switch]$Execute,
  [switch]$CopyReferences
)
$ErrorActionPreference='Stop'
$extension = (Resolve-Path (Join-Path $PSScriptRoot '..')).Path
$project = [System.IO.Path]::GetFullPath($ProjectPath)
$skills = Join-Path $extension 'skills'
$targetSkills = Join-Path $project '.agents\skills'
$targetExtras = Join-Path $project '.perfect-ai-extensions\VERIFIED-ULTIMATE-v1'
if (!(Test-Path $project)) { throw 'ProjectPath does not exist' }
$items = @(Get-ChildItem -LiteralPath $skills -Directory)
$added=0;$skipped=0
foreach($item in $items){
  $dest=Join-Path $targetSkills $item.Name
  if(Test-Path -LiteralPath $dest){Write-Host "SKIP present: $dest"; $skipped++;continue}
  if($Execute){New-Item -ItemType Directory -Force -Path $targetSkills | Out-Null;Copy-Item -LiteralPath $item.FullName -Destination $dest -Recurse -ErrorAction Stop}
  Write-Host ("{0}: {1}" -f $(if($Execute){'ADD'}else{'PREVIEW'}),$dest);$added++
}
if($CopyReferences){
 if(Test-Path -LiteralPath $targetExtras){Write-Warning "Resources already exist; preserving unchanged: $targetExtras"}
 else{
  if($Execute){New-Item -ItemType Directory -Force -Path $targetExtras | Out-Null
   foreach($sub in @('scripts','references','examples','data')){ $source=Join-Path $extension $sub; if(Test-Path $source){Copy-Item -LiteralPath $source -Destination (Join-Path $targetExtras $sub) -Recurse -ErrorAction Stop} }
  }
  Write-Host "$(if($Execute){'ADD'}else{'PREVIEW'}) resources $targetExtras"
 }
}
Write-Host "New-or-preview: $added; existing preserved: $skipped; execution: $Execute. Use -Execute to actually install."
