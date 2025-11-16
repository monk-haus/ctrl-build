# Cloudflare Pages Deployment Guide

This project is configured for deployment on Cloudflare Pages.

## Deployment Options

### Option 1: Cloudflare Pages (Recommended)

1. **Connect your repository** to Cloudflare Pages
2. **Build settings:**
   - Framework preset: `Next.js`
   - Build command: `npm run build`
   - Build output directory: `.next`
   - Root directory: `/` (or leave empty)

3. **Environment variables** (if needed):
   - Add any required environment variables in Cloudflare Pages dashboard

4. **Deploy:**
   - Cloudflare Pages will automatically build and deploy on every push to your main branch

### Option 2: Using Wrangler CLI

```bash
# Install Wrangler CLI
npm install -g wrangler

# Login to Cloudflare
wrangler login

# Build the project
npm run build

# Deploy to Cloudflare Pages
wrangler pages deploy .next
```

## Build Configuration

- **Output**: Standalone mode for optimized builds
- **Images**: Unoptimized (Cloudflare handles optimization)
- **Static Assets**: Cached with long-term headers

## Files Included

- `_headers`: Security and caching headers for Cloudflare Pages
- `_redirects`: URL redirects configuration
- `wrangler.toml`: Cloudflare Workers/Pages configuration
- `next.config.ts`: Next.js configuration optimized for Cloudflare

## Notes

- The site uses Next.js 16 with App Router
- All images are served unoptimized (Cloudflare CDN handles optimization)
- Static assets are cached for 1 year
- Security headers are configured in `_headers`

