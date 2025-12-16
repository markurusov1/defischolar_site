# Various commands/scripts for setup

## Hugo 

### clean up generated
- Remove-Item -Recurse -Force resources, public

### start hugo server with full site rebuild
hugo server --disableFastRender

### cleans up  project's Go module files by removing unused dependencies
hugo modl tidy

### site build in default mode
hugo

### server start in default mode
hugo server