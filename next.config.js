/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // Enable static export for GitHub Pages
  basePath: '/Webtoon-Ecosystem-Platform-Redesign-', // Required for GitHub Pages subdirectory
  assetPrefix: '/Webtoon-Ecosystem-Platform-Redesign-/', // Required for assets
  images: {
    unoptimized: true, // Required for static export
  },
  trailingSlash: true, // Helps with GitHub Pages routing
  // Next.js automatically handles @/ path aliases when tsconfig.json has paths configured
  // No additional configuration needed for path resolution
}

module.exports = nextConfig

