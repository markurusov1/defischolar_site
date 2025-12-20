# Local setup and installation

This document describes how to install all prerequisites and run the DeFi Scholar site locally, and how to build and publish updates. Commands below use PowerShell on Windows; adapt as needed for macOS/Linux shells.

## Prerequisites

Install the following software (order recommended):

1) PowerShell 7+
   - Download: https://aka.ms/powershell
   - Use PowerShell 7 (not the legacy “Windows PowerShell”).

2) Git
   - GitHub account (https://github.com/markurusov1)
   - GitHub repo: https://github.com/markurusov1/defischolar_site
   - Download: https://git-scm.com/downloads
   - After instal, restart your terminal so `git` is on PATH.
     
   - Before the first commit, do this: 
   - git config --global user.email "urusov.mark@gmail.com"
   - git config --global user.name "markurusov1"
   - then use token (having generated one) to login for the first push

3) Go 1.20+
   - Download: https://go.dev/dl/
   - Verify:
     ```powershell
     go version
     # go version go1.xx.x windows/amd64
     ```
   - Ensure `GOBIN`/`GOROOT` are handled by the installer; default install is fine.

4) Hugo (extended) v0.111+
   - Download: https://gohugo.io/installation/
   - Windows users: prefer the official Extended release zip or Scoop/Chocolatey formulas that provide the Extended variant.
   - Verify you have the Extended build:
     ```powershell
     hugo version
     # Hugo Static Site Generator vX.Y.Z-XXXXXXX+extended ...
     ```

5) IDE
   - IntelliJ: https://www.jetbrains.com/idea/download/?section=windows
   - Plugins: 
     - Go (https://plugins.jetbrains.com/plugin/9568-go)
     - PowerShell (https://plugins.jetbrains.com/plugin/14206-powershell)
     - Junie (https://plugins.jetbrains.com/plugin/26104-junie-the-ai-coding-agent-by-jetbrains)
     - Copilot (https://plugins.jetbrains.com/plugin/17718-github-copilot--your-ai-pair-programmer)

## Clone the repository

```powershell
git clone https://github.com/markurusov1/defischolar_site.git
cd defischolar_site
```

## Fetch the theme via Hugo Modules

This project uses the Book theme as a Hugo Module (see `go.mod`). Fetch/update modules:

```powershell
hugo mod get -u
```

If this is your first time using Hugo Modules, ensure Go is installed and on PATH (see prerequisites).

## Run the development server

```powershell
# Include drafts (-D) if you want to preview content marked as draft
hugo server -D
```

- Local site: http://localhost:1313/
- Changes to content/layouts reload automatically.

## Build for production

```powershell
hugo
```

- The static output is written to `public/`.
- Hugo also refreshes `resources/` (Hugo Pipes/cache and processed assets).
- Important: In this repository, both `public/` and `resources/` are intentionally tracked in Git and are re-generated on each build. Commit changes in both directories after building.

## Publish to GitHub Pages (summary)

The site is configured to be served from GitHub Pages with `baseURL` set to:
- https://markurusov1.github.io/defischolar_site/

Typical flow:
```powershell
# 1) Make content/config changes

# 2) Run local preview (optional)
hugo server -D

# 3) Build production assets
hugo

# 4) Commit and push changes (including public/ and resources/)
git add .
git commit -m "Update site"
git push origin main
```

### Git Pages setup

Ensure GitHub Pages is enabled for the repository in GitHub settings (if not already). This repo keeps the generated `public/` in the same branch by design.
Refer to https://github.com/markurusov1/defischolar_site/settings/pages 

#### Github workflow
- The site is deployed to Git Pages via a Github Actions
- Set the page source to this workflow: https://github.
  com/markurusov1/defischolar_site/actions/runs/20285693753/workflow

## Verifying your environment

Quick checks:
- `go version` shows Go 1.20+.
- `hugo version` includes the word `extended`.
- `hugo mod get -u` completes without errors.
- `hugo server -D` serves the site at http://localhost:1313/.

## Troubleshooting

- Hugo isn’t the Extended build
  - Symptom: SCSS/SASS processing or some theme assets fail.
  - Fix: Reinstall Hugo “Extended” variant and confirm via `hugo version`.

- Module/theme not loading
  - Run: `hugo mod get -u`
  - Ensure Go is installed and on PATH.

- Broken links or assets on GitHub Pages
  - Confirm `baseURL` in `hugo.toml` matches the Pages URL.
  - Rebuild with `hugo`, then commit `public/` and `resources/` again.

- Cache hiccups while developing
  - Stop the dev server and restart `hugo server -D`.

## Theme information

This site uses the Hugo Book theme via Hugo Modules:
- Theme repo and installation notes: https://github.com/alex-shpak/hugo-book#installation

### Themes considered but not used
- Perplex
- Hugo Relearn Theme
- Hugoplate
- Mainroad
- Hinode

## Repositories and URLs

- Site repository: https://github.com/markurusov1/defischolar_site
- Live site (GitHub Pages): https://markurusov1.github.io/defischolar_site/
- Related (code) repo: https://markurusov1.github.io/defischolar (TBD)
