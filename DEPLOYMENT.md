# Deployment Guide

## GitHub Pages Deployment

This project is configured to automatically deploy to GitHub Pages when you push to the `main` branch.

### How It Works

1. **GitHub Actions Workflow**: `.github/workflows/deploy.yml`
   - Triggers on push to `main` branch
   - Builds the project using `npm run build`
   - Deploys the `dist` folder to GitHub Pages

### Enabling GitHub Pages

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under **Source**, select:
   - **Source**: `GitHub Actions`
4. Save the settings

### Accessing Your Live Site

Once deployed, your site will be available at:
```
https://ashborn-047.github.io/Webtoon-Ecosystem-Platform-Redesign-/
```

### Manual Deployment

If you need to deploy manually:

```bash
# Build the project and refresh the tracked dist/ assets
npm run build

# Commit the regenerated bundle so GitHub Pages can serve it
git add dist
git commit -m "chore: refresh production build"
git push
```

### Keeping GitHub Pages in Sync

If GitHub Actions deployments are disabled or Pages is configured to serve directly from the `main` branch, the new bootstrap logic will load the prebuilt bundle from `dist/assets/app.*`. To avoid a blank page:

1. Run `npm run build` before every push to `main`
2. Commit the updated `dist/` directory
3. Verify the live site after GitHub Pages finishes publishing

This gives you a working live page even when GitHub Pages skips the automated build step.

### Troubleshooting

- **Build fails**: Check the Actions tab in GitHub for error logs
- **Site not updating**: Wait a few minutes for GitHub Pages to rebuild
- **404 errors**: Ensure `base` in `vite.config.ts` matches your repository name

### Alternative: Vercel Deployment

For faster deployments and better performance, consider Vercel:

1. Go to [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Vercel will auto-detect Vite and deploy
4. Your site will be live at `your-project.vercel.app`

---

**Note**: The first deployment may take 2-3 minutes. Subsequent deployments are faster.

