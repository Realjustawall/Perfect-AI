param(
    [Parameter(Mandatory=$true)][string]$ProjectPath,
    [switch]$WhatIf
)
$ErrorActionPreference='Stop'
$extensionRoot=Split-Path -Parent $PSScriptRoot
$source=Join-Path $extensionRoot 'skills'
$project= (Resolve-Path -LiteralPath $ProjectPath -ErrorAction Stop).Path
$target=Join-Path $project '.agents\skills'
$runtimeParent=Join-Path $project '.perfect-ai'
$runtimeTarget=Join-Path $runtimeParent 'ROLE-INTELLIGENCE-v1'
if (Test-Path -LiteralPath $runtimeTarget) {
    Write-Warning "Runtime already exists, will NOT overwrite: $runtimeTarget"
} else {
    Write-Host "ADD runtime/config/test assets => $runtimeTarget"
    if (-not $WhatIf) {
        New-Item -ItemType Directory -Force -Path $runtimeParent | Out-Null
        Copy-Item -LiteralPath $extensionRoot -Destination $runtimeTarget -Recurse -ErrorAction Stop
    }
}
if (-not (Test-Path -LiteralPath $target)) {
    if (-not $WhatIf) { New-Item -ItemType Directory -Force -Path $target | Out-Null }
}
$installed=0; $skipped=0
Get-ChildItem -LiteralPath $source -Directory | ForEach-Object {
    $dest=Join-Path $target $_.Name
    if (Test-Path -LiteralPath $dest) { $skipped++; Write-Host "SKIP existing: $($_.Name)" }
    else {
        Write-Host "ADD skill: $($_.Name)"
        if (-not $WhatIf) { Copy-Item -LiteralPath $_.FullName -Destination $dest -Recurse -ErrorAction Stop }
        $installed++
    }
}
Write-Host "Done. Added skills: $installed. Skipped existing: $skipped. No existing files overwritten."
Write-Host "Run: python `"$runtimeTarget\orchestrator\team.py`" plan --site-type ecommerce --project `"$project`" --out `"C:\Temp\ztx-agent-review`""
