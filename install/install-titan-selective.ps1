param([string]$ProjectPath = (Get-Location).Path,[string[]]$Domains=@('anime','three','native','motion','gsap'),[switch]$Core,[switch]$Force)
$ErrorActionPreference='Stop';$root=Split-Path -Parent $PSScriptRoot
if(-not (Test-Path $ProjectPath -PathType Container)){throw "No such project: $ProjectPath"}
$dest=Join-Path $ProjectPath '.agents\skills';New-Item -Type Directory -Path $dest -Force|Out-Null
$allow=@('anime','three','native','motion','gsap')
foreach($d in $Domains){if($d -notin $allow){throw "Unsupported domain $d. Allowed: $($allow -join ', ')"}}
$names=@();if($Core){$names+=@('perfect-ai-master')}
foreach($d in $Domains){$names+=@(Get-ChildItem (Join-Path $root 'skills') -Directory | Where-Object { $_.Name -like "ztp-$d-*" } | Select-Object -ExpandProperty Name)}
if(-not $Core -and $names.Count -eq 0){throw 'Nothing selected'}
$count=0
foreach($name in ($names|Select-Object -Unique)){
 $src=Join-Path $root "skills\$name";$to=Join-Path $dest $name
 if(Test-Path $to){if(-not $Force){Write-Host "SKIP $name";continue};Remove-Item $to -Force -Recurse}
 Copy-Item $src $to -Recurse -Force;$count++
}
Write-Host "Installed $count skills into $dest. No MCP used. Restart Codex."
