[CmdletBinding()]
param([Parameter(Mandatory=$true)][string]$ProjectPath,[switch]$Execute,[switch]$CopyExamples)
$ErrorActionPreference='Stop'
$extension=(Resolve-Path (Join-Path $PSScriptRoot '..')).Path
$project=[System.IO.Path]::GetFullPath($ProjectPath)
if(!(Test-Path -LiteralPath $project -PathType Container)){throw "ProjectPath missing: $project"}
$target=Join-Path $project '.agents\skills'
$resources=Join-Path $project '.perfect-ai-extensions\CREATIVE-CINEMA-STUDIO-v1'
$added=0;$skipped=0
foreach($skill in @(Get-ChildItem -LiteralPath (Join-Path $extension 'skills') -Directory)){
 $dest=Join-Path $target $skill.Name
 if(Test-Path -LiteralPath $dest){Write-Host "PRESERVE existing: $dest";$skipped++;continue}
 Write-Host "$(if($Execute){'ADD'}else{'PREVIEW'}) $dest"
 if($Execute){New-Item -Force -ItemType Directory -Path $target | Out-Null;Copy-Item -LiteralPath $skill.FullName -Destination $dest -Recurse -ErrorAction Stop}
 $added++
}
if(Test-Path -LiteralPath $resources){Write-Host "PRESERVE existing resources: $resources"}
else {
 Write-Host "$(if($Execute){'ADD'}else{'PREVIEW'}) resources $resources"
 if($Execute){New-Item -Force -ItemType Directory -Path $resources | Out-Null
   foreach($name in @('src','references','tests','tools','package.json','SKILL-CATALOG.json','README.md','README-FA.md','SOURCES.md')){
     $from=Join-Path $extension $name
     if(Test-Path -LiteralPath $from){Copy-Item -LiteralPath $from -Destination (Join-Path $resources $name) -Recurse -ErrorAction Stop}
   }
   if($CopyExamples){Copy-Item -LiteralPath (Join-Path $extension 'examples') -Destination (Join-Path $resources 'examples') -Recurse -ErrorAction Stop}
 }
}
Write-Host "Installed/previewed $added; skipped existing $skipped. -Execute enabled: $Execute"
