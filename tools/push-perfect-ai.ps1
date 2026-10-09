#requires -version 5.1
<#
.SYNOPSIS
  Upload the complete official Perfect AI ZIP and source to this repo.
.EXAMPLE
  .\tools\push-perfect-ai.ps1 -ZipPath 'C:\Users\YOU\Downloads\Perfect_AI_All_In_One_Codex_Skills.zip'
#>
[CmdletBinding()]
param(
  [Parameter(Mandatory=$true)][string]$ZipPath,
  [switch]$KeepWorkdir
)
$ErrorActionPreference = 'Stop'
$expected='77DFA38D913D6D2308A0FD6F928B811366D0CCDC6BA5D07920DBC32A6DDF5108'
if (-not (Get-Command git -ErrorAction SilentlyContinue)) { throw 'Install Git for Windows first.' }
$src=(Resolve-Path -LiteralPath $ZipPath).Path
$hash=(Get-FileHash -LiteralPath $src -Algorithm SHA256).Hash
if ($hash -ne $expected) { throw "ZIP SHA-256 mismatch: $hash; expected $expected" }
$work=Join-Path ([IO.Path]::GetTempPath()) ('perfect-ai-upload-'+[guid]::NewGuid().ToString('N'))
$unpacked=Join-Path $work 'unpacked'
$repoDir=Join-Path $work 'repo'
New-Item -ItemType Directory -Path $unpacked -Force | Out-Null
try {
  Add-Type -AssemblyName System.IO.Compression.FileSystem
  $zip=[IO.Compression.ZipFile]::OpenRead($src)
  try {
    foreach($entry in $zip.Entries) {
      $p=$entry.FullName.Replace('\','/')
      if (-not $p.StartsWith('Perfect-AI/',[StringComparison]::Ordinal) -or $p.Split('/') -contains '..') { throw "Unsafe/unexpected ZIP entry: $p" }
    }
  } finally { $zip.Dispose() }
  [IO.Compression.ZipFile]::ExtractToDirectory($src,$unpacked)
  $sourceRoot=Join-Path $unpacked 'Perfect-AI'
  $count=@(Get-ChildItem -LiteralPath $sourceRoot -Recurse -File).Count
  if ($count -ne 6577) { throw "Unexpected file count: $count (expected 6577)" }
  & git clone --branch main --depth 1 https://github.com/Realjustawall/Perfect-AI.git $repoDir
  if ($LASTEXITCODE -ne 0) { throw 'git clone failed: login/authentication required' }
  $sourceDest=Join-Path $repoDir 'package'
  New-Item -ItemType Directory -Path $sourceDest -Force | Out-Null
  $added=0
  foreach($f in Get-ChildItem -LiteralPath $sourceRoot -File -Recurse) {
    $rel=$f.FullName.Substring($sourceRoot.Length).TrimStart('\','/')
    $target=Join-Path $sourceDest $rel
    if (Test-Path -LiteralPath $target) {
      $a=(Get-FileHash -LiteralPath $f.FullName -Algorithm SHA256).Hash
      $b=(Get-FileHash -LiteralPath $target -Algorithm SHA256).Hash
      if ($a -ne $b) { throw "Refusing to overwrite existing file: package/$rel" }
      continue
    }
    New-Item -ItemType Directory -Path (Split-Path -Parent $target) -Force | Out-Null
    Copy-Item -LiteralPath $f.FullName -Destination $target
    $added++
  }
  $releaseDir=Join-Path $repoDir 'releases'
  New-Item -ItemType Directory -Path $releaseDir -Force | Out-Null
  $release=Join-Path $releaseDir ([IO.Path]::GetFileName($src))
  if (Test-Path -LiteralPath $release) {
    if ((Get-FileHash -LiteralPath $release -Algorithm SHA256).Hash -ne $expected) { throw 'Release name collision with different ZIP' }
  } else {
    Copy-Item -LiteralPath $src -Destination $release
  }
  Push-Location $repoDir
  try {
    & git config core.longpaths true
    & git add -- package releases
    if ($LASTEXITCODE -ne 0) { throw 'git add failed' }
    $changes=@(& git diff --cached --name-status)
    foreach ($change in $changes) { if ($change -notmatch '^A\s') { throw "Non-additive change detected: $change" } }
    if ($changes.Count -eq 0) { Write-Host 'All package files already published.'; return }
    & git commit -m 'feat: publish complete Perfect AI 2702-skill package'
    if ($LASTEXITCODE -ne 0) { throw 'git commit failed; configure your git name/email' }
    & git push origin main
    if ($LASTEXITCODE -ne 0) { throw 'git push failed; check permissions and branch protection' }
    Write-Host "Published $added new files, archived the original ZIP; SHA-256 verified."
  } finally { Pop-Location }
} finally {
  if ($KeepWorkdir) { Write-Host "Working directory: $work" }
  else { Remove-Item -LiteralPath $work -Recurse -Force -ErrorAction SilentlyContinue }
}
