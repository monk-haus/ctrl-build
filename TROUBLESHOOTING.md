# Troubleshooting 404 Error on Cloudflare Pages

## Common Causes

1. **Deployment Not Completed Successfully**
   - Check Cloudflare Pages dashboard for build status
   - Verify the build completed without errors
   - Check build logs for any failures

2. **Incorrect Build Output Directory**
   - For Next.js on Cloudflare Pages, the output directory should be `.next`
   - Verify in Cloudflare Pages settings: Build output directory = `.next`

3. **Domain Not Configured**
   - Ensure custom domain is properly set up in Cloudflare Pages
   - Check DNS records are pointing correctly
   - Verify SSL/TLS is enabled

4. **Node.js Version Mismatch**
   - Ensure Node.js 20 is selected in Cloudflare Pages settings
   - Check `.nvmrc` file is set to `20`

## Quick Fixes

### Option 1: Verify Build Settings in Cloudflare Dashboard

1. Go to Cloudflare Dashboard → Pages → Your Project
2. Go to Settings → Builds & deployments
3. Verify:
   - **Framework preset**: Next.js
   - **Build command**: `npm run build`
   - **Build output directory**: `.next`
   - **Node.js version**: 20

### Option 2: Check Deployment Status

1. Go to Cloudflare Dashboard → Pages → Your Project
2. Check the "Deployments" tab
3. Verify the latest deployment shows "Success" (green checkmark)
4. If it shows "Failed", click on it to see error logs

### Option 3: Verify Domain Configuration

1. Go to Cloudflare Dashboard → Pages → Your Project → Custom domains
2. Ensure `ctrl-build.com` is listed and shows "Active"
3. Check DNS records in Cloudflare DNS settings
4. Verify the CNAME or A record points to your Pages project

### Option 4: Try the Pages.dev URL

1. Check your Cloudflare Pages project URL (e.g., `https://ctrl-build.pages.dev`)
2. If the `.pages.dev` URL works but custom domain doesn't, it's a DNS/domain issue
3. If neither works, it's a build/deployment issue

## If Build is Failing

Check the build logs for:
- Node.js version errors (should be 20+)
- Missing dependencies
- TypeScript errors
- Build command failures

## Next Steps

If the issue persists:
1. Check Cloudflare Pages build logs
2. Verify all files are committed and pushed to GitHub
3. Try redeploying from the Cloudflare dashboard
4. Contact Cloudflare support if needed

