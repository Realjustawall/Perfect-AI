[CmdletBinding()]
param([Parameter(Mandatory=$true)][string]$ProjectPath,[switch]$Execute,[switch]$CopyExamples)
$ErrorActionPreference='Stop'
$extension=(Resolve-Path (Join-Path $PSScriptRoot '..')).Path
$project=[System.IO.Path]::GetFullPath($ProjectPath)
if(!(Test-Path -LiteralPath $project -PathType Container)){throw "ProjectPath does not exist: $project"}
$target=Join-Path $project '.agents\skills'
$resources=Join-Path $project '.perfect-ai-extensions\REALTIME-3D-POWERHOUSE-v1'
if(Test-Path -LiteralPath $resources){ Write-Host "PRESERVE existing extension: $resources";return }
$count=0;$skipped=0
foreach($skill in @(Get-ChildItem -LiteralPath (Join-Path $extension 'skills') -Directory)){
 $dest=Join-Path $target $skill.Name
 if(Test-Path -LiteralPath $dest){Write-Host "PRESERVE existing skill: $dest";$skipped++;continue}
 Write-Host "$(if($Execute){'ADD'}else{'PREVIEW'}) $dest"
 if($Execute){New-Item -ItemType Directory -Path $target -Force | Out-Null;Copy-Item -LiteralPath $skill.FullName -Destination $dest -Recurse -ErrorAction Stop}
 $count++
}
Write-Host "$(if($Execute){'ADD'}else{'PREVIEW'}) resources $resources"
if($Execute){
 New-Item -ItemType Directory -Force -Path $resources | Out-Null
 foreach($name in @('src','tests','tools','references','SKILL-CATALOG.json','SOURCES-AND-LICENSES.md','README.md','README-FA.md')){
  $source=Join-Path $extension $name
  if(Test-Path -LiteralPath $source){Copy-Item -LiteralPath $source -Destination (Join-Path $resources $name) -Recurse -ErrorAction Stop}
 }
 if($CopyExamples){Copy-Item -LiteralPath (Join-Path $extension 'examples') -Destination (Join-Path $resources 'examples') -Recurse -ErrorAction Stop}
}
Write-Host "Skills added/previewed: $count; existing skills skipped: $skipped; executed=$Execute"
