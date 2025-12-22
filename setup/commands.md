# Various commands/scripts for setup

This page collects handy commands for working on the DeFi Scholar site. Examples use PowerShell on Windows.

## Hugo

### Development server

```powershell
# Start server (default)
hugo server

# Include drafts and future-dated content
hugo server -D -F

# Force a full rebuild on each change (disable fast render)
hugo server --disableFastRender
```

### Build for production

```powershell
# Default production build (writes to public/ and updates resources/)
hugo

# Clean destination directory before writing (removes stale files in public/)
hugo --cleanDestinationDir

# Production-ish flags often used together
hugo --gc --minify --cleanDestinationDir

# Override baseURL just for this build (useful for previews)
hugo --baseURL "http://localhost:1313/"
```

Flags used above:
- `--gc` — run the asset garbage collector (cleans unused resources)
- `--minify` — minify output where applicable
- `--cleanDestinationDir` — remove files from `public/` not present in the current build

### Cleaning generated folders

```powershell
# Remove generated output and Hugo Pipes cache (recreated on next build)
Remove-Item -Recurse -Force resources, public
```

### Hugo Modules

```powershell
# Fetch/update theme and other modules to the latest allowed versions
hugo mod get -u

# Tidy go.mod/go.sum entries for modules
hugo mod tidy

# Show module dependency graph (diagnostics)
hugo mod graph

# Clean module cache (if you suspect a corrupted module cache)
hugo mod clean
```

### Diagnostics

```powershell
# Show full version and confirm "extended" build is installed
hugo version

# Verbose build output (helpful for debugging)
hugo --verbose
```

## Git (common workflow)

```powershell
# Check what changed
git status

#Pushing to github 
# Step 1: Stage all changes (including generated public/ and resources/ per project policy)
git add .

# Step2: Commit
git commit -m "Update site"

# Step3: Push to main
git push origin main
```

## Go (environment checks for Hugo Modules)

```powershell
# Verify Go is installed and on PATH
go version

# Inspect key Go environment variables (optional)
go env GOPATH GOMODCACHE GOROOT
```

## Short reference

- Preview drafts: `hugo server -D`
- Full rebuild while serving: `hugo server --disableFastRender`
- Production build (clean + minified): `hugo --gc --minify --cleanDestinationDir`
- Update modules: `hugo mod get -u` then `hugo mod tidy`