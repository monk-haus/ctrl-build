# Cloudflare Pages Setup Checklist

## Pre-Deployment Checklist

- [x] Next.js configuration updated for Cloudflare
- [x] Images set to unoptimized (Cloudflare CDN handles optimization)
- [x] Security headers configured in `public/_headers`
- [x] Caching headers configured for static assets
- [x] `wrangler.toml` created for Cloudflare configuration
- [x] `.nvmrc` file specifies Node.js version
- [x] Build scripts updated in `package.json`

## Cloudflare Pages Dashboard Setup

### 1. Create New Project
- Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
- Navigate to **Pages** → **Create a project**
- Select **Connect to Git**

### 2. Connect Repository
- Choose your Git provider (GitHub, GitLab, or Bitbucket)
- Select the `ctrl-build` repository
- Select the branch to deploy (usually `main` or `master`)

### 3. Configure Build Settings
```
Framework preset: Next.js
Build command: npm run build
Build output directory: .next
Root directory: / (leave empty if root)
Node.js version: 18 (or as specified in .nvmrc)
```

### 4. Environment Variables (if needed)
Add any required environment variables:
- `NODE_ENV=production` (usually set automatically)
- Any API keys or secrets your app needs

### 5. Deploy
- Click **Save and Deploy**
- Wait for build to complete
- Your site will be live at `https://your-project.pages.dev`

## Custom Domain Setup

1. In Cloudflare Pages → Your Project → **Custom domains**
2. Click **Set up a custom domain**
3. Enter your domain name
4. Follow DNS configuration instructions
5. SSL/TLS will be automatically configured

## Post-Deployment Verification

- [ ] Site loads correctly
- [ ] All pages are accessible
- [ ] Images load properly
- [ ] Navigation works
- [ ] Forms submit correctly (if applicable)
- [ ] SEO metadata is present (check page source)
- [ ] Favicons display correctly
- [ ] Mobile responsive design works
- [ ] Performance is acceptable

## Troubleshooting

### Build Fails
- Check build logs in Cloudflare dashboard
- Verify Node.js version matches `.nvmrc`
- Ensure all dependencies are in `package.json`
- Check for TypeScript errors: `npm run lint`

### Images Not Loading
- Verify image paths are relative to `public/` directory
- Check `_headers` file for proper MIME types
- Ensure images are committed to repository

### Routing Issues
- Verify all routes are properly defined
- Check `_redirects` file if using custom redirects
- Ensure dynamic routes are properly configured

## Manual Deployment (Alternative)

If you prefer to deploy manually using Wrangler CLI:

```bash
# Install Wrangler
npm install -g wrangler

# Login
wrangler login

# Build
npm run build

# Deploy
wrangler pages deploy .next --project-name=ctrl-build
```

## Support Resources

- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/)
- [Next.js on Cloudflare](https://developers.cloudflare.com/pages/framework-guides/nextjs/)
- [Wrangler CLI Documentation](https://developers.cloudflare.com/workers/wrangler/)

