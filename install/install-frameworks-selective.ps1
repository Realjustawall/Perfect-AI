param([string]$ProjectPath=(Get-Location).Path,[ValidateSet('tailwind','bootstrap','all')][string]$Framework='all',[switch]$IncludeIntegration,[switch]$Force)
$ErrorActionPreference='Stop';$root=Split-Path -Parent $PSScriptRoot
$source=Join-Path $root 'skills';$destRoot=Join-Path $ProjectPath '.agents\skills'
if(-not(Test-Path -LiteralPath $ProjectPath -PathType Container)){throw "Project missing: $ProjectPath"}
New-Item -ItemType Directory -Force -Path $destRoot|Out-Null
$names=@('ztf-framework-master')
if($Framework -eq 'tailwind' -or $Framework -eq 'all'){$names+=@(Get-ChildItem $source -Directory -Filter 'ztf-tw-*'|ForEach-Object Name)}
if($Framework -eq 'bootstrap' -or $Framework -eq 'all'){$names+=@(Get-ChildItem $source -Directory -Filter 'ztf-bs-*'|ForEach-Object Name)}
if($IncludeIntegration){if($Framework -eq 'tailwind' -or $Framework -eq 'all'){$names+=@(Get-ChildItem $source -Directory -Filter 'ztfx-tw-*'|ForEach-Object Name)};if($Framework -eq 'bootstrap' -or $Framework -eq 'all'){$names+=@(Get-ChildItem $source -Directory -Filter 'ztfx-bs-*'|ForEach-Object Name)}}
$installed=0;$skipped=0
foreach($name in ($names|Select-Object -Unique)){
 $src=Join-Path $source $name;$dst=Join-Path $destRoot $name
 if((Test-Path $dst) -and -not $Force){$skipped++;continue}
 if(Test-Path $dst){Remove-Item $dst -Recurse -Force}
 Copy-Item -LiteralPath $src -Destination $dst -Recurse -Force;$installed++
}
Write-Host "Installed $installed; skipped $skipped. Invoke `$ztf-framework-master in Codex."
