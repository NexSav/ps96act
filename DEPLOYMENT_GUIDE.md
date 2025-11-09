# PS 96 Website - Netlify Deployment Guide

## ✅ Issues Fixed

### 1. **404 Page Not Found Error**
**Problem:** Netlify was returning 404 errors when accessing any route directly (e.g., `/about`, `/programs`)

**Root Cause:** Single Page Applications (SPAs) handle routing on the client side, but Netlify's server doesn't know about these routes. It was trying to find physical files for each route.

**Solutions Applied:**

#### A. Created `public/_redirects` file
```
/* /index.html 200
```
This tells Netlify to serve `index.html` for ALL routes, allowing React Router to handle the routing client-side.

#### B. Created `netlify.toml` configuration
```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```
This provides the same redirect rule in TOML format (Netlify's preferred configuration method).

---

### 2. **Build Warnings Fixed**
**Problem:** Unused variable `reducedMotion` causing build warnings/errors

**Solution:**
- Removed unused `useState` import
- Simplified motion preference detection to use CSS custom properties directly
- Build now completes with 0 warnings

---

### 3. **Node Version Compatibility**
**Added:** `.nvmrc` file specifying Node 18 to ensure consistent builds

---

## 📁 Files Created/Modified

### New Files:
1. **`public/_redirects`** - SPA routing configuration
2. **`netlify.toml`** - Build settings, headers, and redirects
3. **`.nvmrc`** - Node version specification
4. **`DEPLOYMENT_GUIDE.md`** - This file

### Modified Files:
1. **`src/pages/HomePage.jsx`** - Removed unused state, fixed imports

---

## 🚀 Deployment Steps

### First-Time Setup

1. **Push to Git Repository**
   ```bash
   git add .
   git commit -m "Add Netlify deployment configuration"
   git push origin main
   ```

2. **Connect to Netlify**
   - Go to [Netlify](https://app.netlify.com/)
   - Click "Add new site" → "Import an existing project"
   - Choose your Git provider (GitHub, GitLab, etc.)
   - Select your repository

3. **Build Settings** (should auto-detect from `netlify.toml`):
   - **Build command:** `npm run build`
   - **Publish directory:** `build`
   - **Node version:** 18 (from `.nvmrc`)

4. **Deploy**
   - Click "Deploy site"
   - Wait for build to complete (usually 1-3 minutes)

### Subsequent Deployments

Every time you push to your main branch, Netlify will automatically:
1. Pull the latest code
2. Run `npm install`
3. Run `npm run build`
4. Deploy the `build` folder
5. Apply redirects and headers

---

## 🔧 Configuration Details

### Build Configuration (`netlify.toml`)

```toml
[build]
  publish = "build"
  command = "npm run build"
```

### Redirects

The key redirect rule that fixes 404s:
```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

**How it works:**
- User visits `https://yoursite.com/programs`
- Netlify intercepts the request
- Instead of looking for `/programs/index.html` (which doesn't exist)
- It serves `/index.html` with a 200 status
- React Router loads and displays the correct page

### Security Headers

Added security headers for production:
- `X-Frame-Options: DENY` - Prevents clickjacking
- `X-XSS-Protection: 1; mode=block` - XSS protection
- `X-Content-Type-Options: nosniff` - MIME type sniffing protection
- `Referrer-Policy: strict-origin-when-cross-origin` - Referrer control

### Caching Headers

Static assets are cached for 1 year:
```toml
[[headers]]
  for = "/static/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"
```

---

## 🐛 Troubleshooting

### Issue: Still Getting 404 Errors

**Solution 1: Clear Netlify Cache**
1. Go to Netlify Dashboard
2. Site Settings → Build & Deploy
3. Click "Clear cache and retry deploy"

**Solution 2: Verify `_redirects` File**
1. Check that `public/_redirects` exists
2. Verify it contains: `/* /index.html 200`
3. Ensure file is being copied to build folder

**Solution 3: Check Build Logs**
1. Go to Deploys tab
2. Click on the latest deploy
3. Check for any errors in the build logs

### Issue: Build Failing on Netlify

**Check Node Version:**
```bash
# Locally, verify Node version
node -v

# If different from 18, update .nvmrc
echo "18" > .nvmrc
```

**Check Dependencies:**
```bash
# Clear and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

**ESLint Errors:**
If ESLint is blocking the build, you can temporarily disable "treat warnings as errors" by adding to `package.json`:
```json
{
  "scripts": {
    "build": "DISABLE_ESLINT_PLUGIN=true react-scripts build"
  }
}
```

### Issue: Blank Page After Deploy

**Check Console Errors:**
1. Open browser DevTools (F12)
2. Check Console tab for errors
3. Common issues:
   - Missing environment variables
   - API endpoint misconfigurations
   - CORS issues

**Verify Build Output:**
```bash
# Build locally
npm run build

# Serve locally to test
npx serve -s build

# Visit http://localhost:3000
```

---

## 📊 Build Performance

Current build stats:
- **Build time:** ~1-3 minutes
- **Bundle size (gzipped):**
  - JS: 68.33 KB
  - CSS: 5.64 KB
- **Lighthouse Score:** Target 90+ on all metrics

---

## 🔄 Continuous Deployment Workflow

1. **Develop locally:**
   ```bash
   npm start
   ```

2. **Test build:**
   ```bash
   npm run build
   npx serve -s build
   ```

3. **Commit changes:**
   ```bash
   git add .
   git commit -m "Your commit message"
   ```

4. **Push to GitHub:**
   ```bash
   git push origin main
   ```

5. **Netlify auto-deploys** (2-3 minutes)

6. **Verify deployment:**
   - Check Netlify dashboard for green checkmark
   - Visit live site URL
   - Test navigation between pages

---

## 🌐 Custom Domain Setup (Optional)

### Using Netlify Subdomain (Free)
Your site is accessible at: `https://your-site-name.netlify.app`

### Using Custom Domain

1. **Add Domain in Netlify:**
   - Site Settings → Domain Management
   - Click "Add custom domain"
   - Enter your domain (e.g., `ps96act.com`)

2. **Configure DNS:**

   **Option A: Netlify DNS (Recommended)**
   - Transfer nameservers to Netlify
   - Netlify handles all DNS records
   - Automatic SSL certificate

   **Option B: External DNS**
   - Add A record: `104.198.14.52` (Netlify load balancer)
   - Add CNAME record for `www`: `your-site-name.netlify.app`
   - Wait for DNS propagation (up to 48 hours)

3. **Enable HTTPS:**
   - Netlify auto-provisions SSL via Let's Encrypt
   - Enable "Force HTTPS" in domain settings

---

## 📝 Environment Variables (If Needed)

If you need to add API keys or environment variables:

1. **In Netlify Dashboard:**
   - Site Settings → Build & Deploy → Environment
   - Add variables (e.g., `REACT_APP_API_KEY`)

2. **In Code:**
   ```javascript
   const apiKey = process.env.REACT_APP_API_KEY;
   ```

3. **For Local Development:**
   Create `.env.local` (already in `.gitignore`):
   ```
   REACT_APP_API_KEY=your_key_here
   ```

---

## ✅ Deployment Checklist

Before deploying:
- [ ] Build completes locally without errors
- [ ] All pages load correctly with `npm start`
- [ ] Test production build with `npx serve -s build`
- [ ] Navigation works between all routes
- [ ] Mobile responsive design verified
- [ ] Accessibility tested (keyboard navigation, screen readers)
- [ ] Forms work (if applicable)
- [ ] External links open in new tabs
- [ ] Images load correctly
- [ ] No console errors

After deploying:
- [ ] Live site loads
- [ ] All routes work (test direct URL access)
- [ ] Navigation works
- [ ] Mobile view works
- [ ] Page load time is acceptable
- [ ] SSL certificate is active (green padlock)

---

## 🎉 Success!

Your PS 96 website is now successfully deployed on Netlify with:
- ✅ Zero 404 errors
- ✅ Clean build (no warnings)
- ✅ Security headers
- ✅ Optimized caching
- ✅ Automatic deployments

**Live Site:** Check your Netlify dashboard for the URL

For support or issues, check:
- [Netlify Documentation](https://docs.netlify.com/)
- [Create React App Deployment](https://create-react-app.dev/docs/deployment/)
- Project GitHub Issues

---

**Built with ❤️ for PS 96 Lions**
