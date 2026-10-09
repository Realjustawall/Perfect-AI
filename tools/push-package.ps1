#requires -version 5.1
<#
.SYNOPSIS
  Push the EXACT Zero_Tech GITHUB DESIGN ENGINEERING package to Perfect-AI.
.DESCRIPTION
  Additive upload: checks the package SHA-256, refuses to overwrite any
  differing existing file, includes source tree + the original ZIP.
  Requires git for Windows with working GitHub authentication.
.EXAMPLE
  .\tools\push-package.ps1 -ZipPath "C:\Downloads\Zero_Tech_GITHUB_DESIGN_ENGINEERING_All_In_One_Codex_Skills.zip"
#>
[CmdletBinding()]
param(
  [Parameter(Mandatory=$true)][string]$ZipPath,
  [string]$RepoUrl = "https://github.com/Realjustawall/Perfect-AI.git",
  [switch]$KeepWorkdir
)

$ErrorActionPreference = 'Stop'
$ExpectedHash = '44A32033BE8898C7FDE06286E4ED3594F606B3E4DBDB7FFF4B972C2D8FD20FF2'
$ArchiveName = 'Zero_Tech_GITHUB_DESIGN_ENGINEERING_All_In_One_Codex_Skills.zip'
$RootName = 'Zero_Tech_TITAN_PLUS_Codex_Skills'
$ExpectedCount = 6571

if (-not (Get-Command git -ErrorAction SilentlyContinue)) { throw 'Git for Windows is required (git.exe not found).' }
$src = (Resolve-Path -LiteralPath $ZipPath).Path
if ([System.IO.Path]::GetFileName($src) -ne $ArchiveName) {
  Write-Warning "The file name differs, but the SHA-256 check is authoritative."
}
$actual = (Get-FileHash -LiteralPath $src -Algorithm SHA256).Hash.ToUpperInvariant()
if ($actual -ne $ExpectedHash) { throw "Archive SHA-256 mismatch! Expected $ExpectedHash; received $actual" }
Write-Host "Archive verified: $actual"

$work = Join-Path ([System.IO.Path]::GetTempPath()) ("zt-publish-" + [guid]::NewGuid().ToString('N'))
$stage = Join-Path $work 'stage'
$checkout = Join-Path $work 'repo'
New-Item -ItemType Directory -Path $stage -Force | Out-Null
try {
  & git clone --branch main --depth 1 $RepoUrl $checkout
  if ($LASTEXITCODE -ne 0) { throw 'Git clone failed. Sign in to GitHub and retry.' }

  Add-Type -AssemblyName System.IO.Compression.FileSystem
  # Trusted exact-hash ZIP; still check entry paths before extraction.
  $zip = [System.IO.Compression.ZipFile]::OpenRead($src)
  try {
    foreach ($entry in $zip.Entries) {
      if ($entry.FullName -notlike "$RootName/*" -and $entry.FullName -ne "$RootName/") {
        throw "Unexpected top-level archive entry: $($entry.FullName)"
      }
      $parts = $entry.FullName.Replace('\','/').Split('/')
      if ($parts -contains '..') { throw "Unsafe archive path: $($entry.FullName)" }
    }
  } finally { $zip.Dispose() }

  [System.IO.Compression.ZipFile]::ExtractToDirectory($src, $stage)
  $sourceRoot = Join-Path $stage $RootName
  if (-not (Test-Path -LiteralPath $sourceRoot)) { throw "Missing $RootName" }
  $files = @(Get-ChildItem -LiteralPath $sourceRoot -Recurse -File)
  if ($files.Count -ne $ExpectedCount) {
    throw "Unexpected file count: $($files.Count) (expected $ExpectedCount)"
  }

  $new = 0
  $existing = 0
  foreach ($f in $files) {
    $relative = $f.FullName.Substring($stage.Length).TrimStart('\','/')
    $dest = Join-Path $checkout $relative
    if (Test-Path -LiteralPath $dest) {
      if ((Get-FileHash -LiteralPath $dest -Algorithm SHA256).Hash -ne (Get-FileHash -LiteralPath $f.FullName -Algorithm SHA256).Hash) {
        throw "Conflict: existing repo file differs, refusing overwrite: $relative"
      }
      $existing++
      continue
    }
    $parent = Split-Path -Parent $dest
    if (-not (Test-Path -LiteralPath $parent)) { New-Item -ItemType Directory -Path $parent -Force | Out-Null }
    Copy-Item -LiteralPath $f.FullName -Destination $dest
    $new++
  }
  $releaseDir = Join-Path $checkout 'releases'
  New-Item -ItemType Directory -Path $releaseDir -Force | Out-Null
  $release = Join-Path $releaseDir $ArchiveName
  if (Test-Path -LiteralPath $release) {
    if ((Get-FileHash -LiteralPath $release -Algorithm SHA256).Hash -ne $actual) {
      throw 'Conflicting release archive exists; refusing overwrite.'
    }
  } else {
    Copy-Item -LiteralPath $src -Destination $release
  }
  Push-Location $checkout
  try {
    & git config core.longpaths true
    & git add -- $RootName 'releases'
    if ($LASTEXITCODE -ne 0) { throw 'git add failed.' }
    $changes = @(& git diff --cached --name-status)
    foreach ($line in $changes) {
      if ($line -notmatch '^A\s') {
        throw "Non-additive change detected. Aborting: $line"
      }
    }
    if ($changes.Count -eq 0) {
      Write-Host 'All package files were already uploaded. Nothing to commit.'
    } else {
      Write-Host "New files: $new; identical existing files: $existing; staged paths: $($changes.Count)"
      & git commit -m "feat: add Zero_Tech 2702 skills and complete all-in-one archive"
      if ($LASTEXITCODE -ne 0) { throw 'git commit failed. Check git user.name/user.email.' }
      & git push origin main
      if ($LASTEXITCODE -ne 0) { throw 'git push failed. Check repository write authorization.' }
      Write-Host 'Success: uploaded source and verified original ZIP.'
    }
  } finally { Pop-Location }
} finally {
  if ($KeepWorkdir) {
    Write-Host "Working directory retained: $work"
  } else {
    Remove-Item -LiteralPath $work -Recurse -Force -ErrorAction SilentlyContinue
  }
}
