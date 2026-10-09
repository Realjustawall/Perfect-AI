#requires -version 5.1
<#
.SYNOPSIS
  Publish the exact Perfect AI distribution by JustAWall to GitHub.
.DESCRIPTION
  Validate all files using the self-contained manifest, extract safely, and
  add only new files under package/ and releases/ without overwriting existing data.
.EXAMPLE
  .\tools\push-perfect-ai.ps1 -ZipPath 'C:\Downloads\Perfect_AI_by_JustAWall_All_In_One_Codex_Skills.zip'
#>
[CmdletBinding()]
param(
  [Parameter(Mandatory=$true)][string]$ZipPath,
  [string]$RepoUrl='https://github.com/Realjustawall/Perfect-AI.git',
  [switch]$KeepWorkdir
)
$ErrorActionPreference='Stop'
if (-not (Get-Command git -ErrorAction SilentlyContinue)) { throw 'Install Git for Windows first.' }
$source=(Resolve-Path -LiteralPath $ZipPath).Path
$work=Join-Path ([IO.Path]::GetTempPath()) ('perfect-ai-'+[guid]::NewGuid().ToString('N'))
$extracted=Join-Path $work 'extracted'
$checkout=Join-Path $work 'checkout'
New-Item -ItemType Directory -Path $extracted -Force | Out-Null
try {
  Add-Type -AssemblyName System.IO.Compression.FileSystem
  $archive=[IO.Compression.ZipFile]::OpenRead($source)
  try {
    foreach ($entry in $archive.Entries) {
      $name=$entry.FullName.Replace('\','/')
      if (-not $name.StartsWith('Perfect-AI/',[StringComparison]::Ordinal)) { throw "Unexpected ZIP path: $name" }
      if ($name.Split('/') -contains '..') { throw "Unsafe ZIP entry: $name" }
    }
  } finally { $archive.Dispose() }
  [IO.Compression.ZipFile]::ExtractToDirectory($source,$extracted)
  $root=Join-Path $extracted 'Perfect-AI'
  $manifest=Get-Content -LiteralPath (Join-Path $root 'PERFECT-AI-CURRENT-SHA256.json') -Encoding UTF8 -Raw | ConvertFrom-Json
  $count=0
  foreach($hashEntry in $manifest.sha256.PSObject.Properties) {
    $rel=$hashEntry.Name.Replace('/',[IO.Path]::DirectorySeparatorChar)
    $entryFile=Join-Path $root $rel
    if (-not (Test-Path -LiteralPath $entryFile -PathType Leaf)) { throw "Missing: $rel" }
    $digest=(Get-FileHash -LiteralPath $entryFile -Algorithm SHA256).Hash
    if ($digest -ne $hashEntry.Value) { throw "Corrupt ZIP member: $rel" }
    $count++
  }
  $actualFiles=@(Get-ChildItem -LiteralPath $root -Recurse -File)
  if ($actualFiles.Count -ne $manifest.members -or $actualFiles.Count -ne ($count+$manifest.excluded_from_hashes.Count)) { throw "Unexpected member count: $($actualFiles.Count)" }
  Write-Host "Verified $count files of Perfect AI by JustAWall."
  & git clone --branch main --depth 1 $RepoUrl $checkout
  if ($LASTEXITCODE -ne 0) { throw 'git clone failed: check your credentials.' }
  $sourceFolder=Join-Path $checkout 'package'
  New-Item -ItemType Directory -Path $sourceFolder -Force | Out-Null
  foreach ($file in $actualFiles) {
    $rel=$file.FullName.Substring($root.Length).TrimStart('\','/')
    $target=Join-Path $sourceFolder $rel
    if (Test-Path -LiteralPath $target) {
      if ((Get-FileHash -LiteralPath $target -Algorithm SHA256).Hash -ne (Get-FileHash -LiteralPath $file.FullName -Algorithm SHA256).Hash) {
        throw "Existing content conflict, refusing overwrite: package/$rel"
      }
      continue
    }
    New-Item -ItemType Directory -Path (Split-Path -Parent $target) -Force | Out-Null
    Copy-Item -LiteralPath $file.FullName -Destination $target
  }
  $releaseFolder=Join-Path $checkout 'releases'
  New-Item -ItemType Directory -Path $releaseFolder -Force | Out-Null
  $release=Join-Path $releaseFolder ([IO.Path]::GetFileName($source))
  if (Test-Path -LiteralPath $release) {
    if ((Get-FileHash -LiteralPath $release -Algorithm SHA256).Hash -ne (Get-FileHash -LiteralPath $source -Algorithm SHA256).Hash) { throw 'Release archive conflict.' }
  } else { Copy-Item -LiteralPath $source -Destination $release }
  Push-Location $checkout
  try {
    & git config core.longpaths true
    & git add -- package releases
    if ($LASTEXITCODE -ne 0) { throw 'git add failed.' }
    $staged=@(& git diff --cached --name-status)
    foreach ($change in $staged) { if ($change -notmatch '^A\s') { throw "Non-additive operation detected: $change" } }
    if ($staged.Count -eq 0) { Write-Host 'This release is already present.'; return }
    & git commit -m 'feat: publish complete Perfect AI by JustAWall distribution'
    if ($LASTEXITCODE -ne 0) { throw 'git commit failed; check git identity.' }
    & git push origin main
    if ($LASTEXITCODE -ne 0) { throw 'git push failed; check GitHub authentication.' }
    Write-Host 'Uploaded complete Perfect AI distribution.'
  } finally { Pop-Location }
} finally {
  if ($KeepWorkdir) { Write-Host "Working folder: $work" }
  else { Remove-Item -LiteralPath $work -Recurse -Force -ErrorAction SilentlyContinue }
}
