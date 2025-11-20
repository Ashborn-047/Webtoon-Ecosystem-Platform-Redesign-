/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  output: 'export', // Required for GitHub Pages static export

  // Must match EXACT GitHub repo name
  basePath: '/Webtoon-Ecosystem-Platform-Redesign',
  assetPrefix: '/Webtoon-Ecosystem-Platform-Redesign/',

  images: {
    unoptimized: true, // Required for static export
  },

  trailingSlash: true, // Fixes routing on GitHub Pages
};

module.exports = nextConfig;

