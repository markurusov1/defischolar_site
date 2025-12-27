### Step-by-Step Setup for Custom Domain (www.defischolar.com) on GitHub Pages

Below is a clear, ordered table with all required actions. Perform the steps in sequence (GitHub and Namecheap steps are interdependent, but start with GitHub to add the domain first). 
Your current GitHub Pages URL is `markurusov1.github.io/defischolar_site/`, so the target for DNS is `markurusov1.github.io.`

| Step | Platform   | Action                                                                 | Specific Values to Enter/Select                                                                 | Notes |
|------|------------|------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|-------|
| 1    | GitHub    | Go to your repository (`defischolar_site`) > Settings > Pages (under "Code and automation") | In "Custom domain", enter: `www.defischolar.com`<br>Click **Save**                                   | This adds a `CNAME` file to your repo root containing `www.defischolar.com`. GitHub will start checking DNS (may show warning initially). |
| 2    | Namecheap | Log in > Domain List > Manage (next to defischolar.com) > Advanced DNS tab | Remove any conflicting records (e.g., existing A, CNAME, or URL Redirect for `@` or `www`).      | Conflicting records will prevent resolution. |
| 3    | Namecheap | In Advanced DNS > Host Records section > Add New Record                | Type: **CNAME Record**<br>Host: `www`<br>Value: `markurusov1.github.io.` (include the trailing dot)<br>TTL: Automatic (or lowest value) | This points www.defischolar.com to your GitHub Pages site. The trailing dot is required for full resolution. |
| 4    | Namecheap | Click **Save All Changes** (green checkmark)                            | -                                                                                               | DNS propagation starts (30 mins to 48 hours, usually 1-2 hours). |
| 5    | GitHub    | Return to repository Settings > Pages                                  | Wait for DNS check to complete (green checkmark next to domain).<br>Once verified, check **Enforce HTTPS** | GitHub auto-provisions a free TLS certificate (may take up to 1 hour). |
| 6    | Both      | Test the site                                                          | Visit `https://www.defischolar.com`<br>Original URL still works: `https://markurusov1.github.io/defischolar_site/` | Use tools like dnschecker.org or whatsmydns.net to check CNAME propagation for `www.defischolar.com`. Clear browser cache if needed. |

If issues arise (e.g., DNS not verifying):
- Double-check for typos (especially the trailing dot in CNAME value).
- Ensure no other records conflict.
- Wait longer for propagation.
- GitHub Pages settings will display specific error messages.

This follows current (2025) official GitHub and Namecheap guidelines for a **www subdomain** setup. Your site should now be live at www.defischolar.com!

### Existing namecheap settings
CNAME record
Host: WWW
Value: parkingpage.namecheap.com
TTL: 30 min

URL Redirect Record
@
Value: http://www.defischolar.com/
Unmasked

### Noteworthy
- git takes time issuing a certificate to namecheap
- when/if gitpages loses the "DNS verified" status, remove and re-add the domain name