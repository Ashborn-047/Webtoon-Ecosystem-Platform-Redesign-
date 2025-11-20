/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // Enable static export for GitHub Pages
  images: {
    unoptimized: true, // Required for static export
  },
  // Next.js automatically handles @/ path aliases when tsconfig.json has paths configured
  // No additional configuration needed for path resolution
}

module.exports = nextConfig

