/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  basePath: '/Webtoon-Ecosystem-Platform-Redesign-',
  assetPrefix: '/Webtoon-Ecosystem-Platform-Redesign-/',
  images: {
    unoptimized: true,
    domains: [],
  },
  trailingSlash: true,
};

module.exports = nextConfig;

