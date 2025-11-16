# Deployment Guide - Cloudflare Pages

## Quick Start

### Prerequisites
- Node.js 20+ installed
- Cloudflare account
- Git repository connected

### Deployment Steps

1. **Connect Repository to Cloudflare Pages**
   - Go to Cloudflare Dashboard → Pages
   - Click "Create a project"
   - Connect your Git repository
   - Select the repository and branch

2. **Configure Build Settings**
   - **Framework preset**: Next.js (this will auto-configure most settings)
   - **Build command**: `npm run build` (or leave empty if using framework preset)
   - **Build output directory**: Leave empty (Cloudflare auto-detects for Next.js)
   - **Root directory**: `/` (leave empty if root)
   - **Node.js version**: `20` (IMPORTANT: Must be 20+ for Next.js 16)

3. **Environment Variables** (Optional)
   - Add any environment variables needed
   - Example: `NODE_ENV=production`

4. **Deploy**
   - Click "Save and Deploy"
   - Cloudflare will build and deploy automatically

## Manual Deployment with Wrangler

```bash
# Install Wrangler CLI globally
npm install -g wrangler

# Login to Cloudflare
wrangler login

# Install dependencies
npm install

# Build the project
npm run build

# Deploy to Cloudflare Pages
wrangler pages deploy .next --project-name=ctrl-build
```

## Build Configuration

The project is configured with:
- **Standalone output**: Optimized for production
- **Unoptimized images**: Cloudflare CDN handles optimization
- **Security headers**: Configured in `public/_headers`
- **Caching**: Long-term caching for static assets

## Custom Domain

1. Go to Cloudflare Pages → Your Project → Custom domains
2. Add your domain
3. Update DNS records as instructed
4. SSL/TLS will be automatically configured

## Environment Variables

If you need environment variables:
1. Go to Cloudflare Pages → Your Project → Settings → Environment variables
2. Add variables for Production, Preview, or both
3. Redeploy to apply changes

## Troubleshooting

### Build Fails
- Check Node.js version (requires 20+)
- Verify all dependencies are installed
- Check build logs in Cloudflare dashboard

### Images Not Loading
- Verify image paths are correct
- Check `_headers` file for proper caching
- Ensure images are in `public` directory

### Routing Issues
- Verify `_redirects` file if using custom redirects
- Check Next.js routing configuration
- Ensure all routes are properly exported

## Support

For Cloudflare-specific issues, refer to:
- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages/)
- [Next.js on Cloudflare](https://developers.cloudflare.com/pages/framework-guides/nextjs/)

