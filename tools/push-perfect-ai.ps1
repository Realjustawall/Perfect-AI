#requires -version 5.1
<#
.SYNOPSIS
  Publish Perfect AI by JustAWall from its full verified ZIP.
#>
[CmdletBinding()]
param(
 [Parameter(Mandatory=$true)][string]$ZipPath,
 [switch]$KeepWorkdir
)
$ErrorActionPreference='Stop'
$expected='FBE8FD334217717A0E5B059382C262E70990A2A9F8510A4C5DE7AA0865514F23'
$zip=(Resolve-Path -LiteralPath $ZipPath).Path
$actual=(Get-FileHash -LiteralPath $zip -Algorithm SHA256).Hash
if ($actual -ne $expected) { throw "Wrong archive SHA-256: $actual" }
$tmp=Join-Path ([IO.Path]::GetTempPath()) ('perfect-ai-stage-'+[guid]::NewGuid().ToString('N'))
New-Item -ItemType Directory -Path $tmp -Force | Out-Null
try {
 Add-Type -AssemblyName System.IO.Compression.FileSystem
 [IO.Compression.ZipFile]::ExtractToDirectory($zip,$tmp)
 $inner=Join-Path $tmp 'Perfect-AI\tools\push-perfect-ai.ps1'
 if (-not (Test-Path -LiteralPath $inner)) { throw 'Archive is missing its internal upload script.' }
 & $inner -ZipPath $zip -KeepWorkdir:$KeepWorkdir
 if (-not $?) { throw 'Internal uploader failed.' }
} finally {
 Remove-Item -LiteralPath $tmp -Recurse -Force -ErrorAction SilentlyContinue
}
