[CmdletBinding()]
param([Parameter(Mandatory=$true)][string]$ProjectPath,[switch]$Execute,[switch]$CopyExamples)
$ErrorActionPreference = 'Stop'
$extensionRoot=(Resolve-Path -LiteralPath (Join-Path $PSScriptRoot '..')).Path
$project=[IO.Path]::GetFullPath($ProjectPath)
if (-not (Test-Path -LiteralPath $project -PathType Container)) { throw "Missing ProjectPath: $project" }
$source=Join-Path $extensionRoot 'skills'
$dest=Join-Path $project '.agents\skills'
$assets=Join-Path $project '.perfect-ai-extensions\GITHUB-CRAFT-AGENTS-v1'
$added=0;$skipped=0
foreach($folder in Get-ChildItem -LiteralPath $source -Directory) {
  $to=Join-Path $dest $folder.Name
  if(Test-Path -LiteralPath $to){ $skipped++;Write-Host "PRESERVE existing skill: $to";continue }
  Write-Host "$(if($Execute){'ADD'}else{'PREVIEW'}) $to"
  if($Execute){New-Item -ItemType Directory -Path $dest -Force | Out-Null;Copy-Item -LiteralPath $folder.FullName -Destination $to -Recurse -ErrorAction Stop}
  $added++
}
if(Test-Path -LiteralPath $assets){Write-Host "PRESERVE existing runtime: $assets"}
else {
  Write-Host "$(if($Execute){'ADD'}else{'PREVIEW'}) runtime $assets"
  if($Execute){
    New-Item -ItemType Directory -Path $assets -Force | Out-Null
    foreach($x in @('tools','tests','SOURCE-MANIFEST.json','LICENSES-AND-SOURCES.md','README-FA.md','README.md')){
      $p=Join-Path $extensionRoot $x
      if(Test-Path -LiteralPath $p){Copy-Item -LiteralPath $p -Destination (Join-Path $assets $x) -Recurse -ErrorAction Stop}
    }
    if($CopyExamples){Copy-Item -LiteralPath (Join-Path $extensionRoot 'examples') -Destination (Join-Path $assets 'examples') -Recurse -ErrorAction Stop}
  }
}
Write-Host "New skills: $added; existing protected: $skipped; execute=$Execute; no existing files overwritten."
Write-Host 'Restart Codex; invoke $ztgc-github-design-engineering-master. External CLI tools require separate installation.'
