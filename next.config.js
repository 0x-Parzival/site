/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com', 'avatars.githubusercontent.com'],
  },
  // Enable trailing slashes for all paths
  trailingSlash: true,
  // Enable static HTML export
  images: {
    unoptimized: true,
  },
  // Enable React strict mode
  reactStrictMode: true,
};

module.exports = nextConfig;
