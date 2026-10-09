<#
Optional import of ONE reviewed third-party GitHub Skill into Codex. No MCP.
No third-party original skill source is bundled in Perfect_AI; verify license for selected path.
Needs Git and network. By design, no overwrite and no execution of repository scripts.
Example: .\import-github-skill.ps1 -ProjectPath "C:\my-app" -Repo "obra/superpowers" -SkillPath "skills/systematic-debugging" -ApproveLicense
#>
param([string]$ProjectPath=(Get-Location).Path,[string]$Repo,[string]$SkillPath,[switch]$ApproveLicense)
$ErrorActionPreference='Stop'
if(-not $ApproveLicense){throw 'Review upstream source and its applicable LICENSE first. Then pass -ApproveLicense.'}
$allowed=@('obra/superpowers','vercel-labs/agent-skills','nextlevelbuilder/ui-ux-pro-max-skill','openai/skills')
if(-not($allowed -contains $Repo)){throw "Repo not in reviewed candidates allowlist: $Repo"}
if($SkillPath -notmatch '^[a-zA-Z0-9_.\-/]+$' -or $SkillPath -match '\.\.'){throw 'Unsafe SkillPath'}
if(-not(Test-Path $ProjectPath -PathType Container)){throw 'Missing project path'}
$tmp=Join-Path ([IO.Path]::GetTempPath()) ('zt-upstream-'+[guid]::NewGuid().ToString('N'))
try {
 git clone --quiet --depth 1 "https://github.com/$Repo.git" $tmp
 if($LASTEXITCODE -ne 0){throw 'git clone failed'}
 $src=Join-Path $tmp $SkillPath
 $file=Join-Path $src 'SKILL.md'
 if(-not(Test-Path $file)){throw "Upstream SKILL.md not found; source may have moved: $SkillPath"}
 $dest=Join-Path $ProjectPath ('.agents\skills\'+(Split-Path $src -Leaf))
 if(Test-Path $dest){throw "Existing skill; refusing overwrite: $dest"}
 New-Item -ItemType Directory -Path (Split-Path $dest -Parent) -Force | Out-Null
 Copy-Item -LiteralPath $src -Destination $dest -Recurse
 Write-Host "Imported $Repo/$SkillPath -> $dest. Inspect generated files before invoking."
} finally { if(Test-Path $tmp){Remove-Item -LiteralPath $tmp -Recurse -Force} }
