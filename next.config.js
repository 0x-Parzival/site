/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com', 'avatars.githubusercontent.com'], // Add any other domains you use for images
  },
  // Enable static exports for static site generation
  output: 'export',
  // Optional: Add a trailing slash to all paths
  trailingSlash: true,
  // Optional: Change the output directory
  distDir: 'out',
  // Optional: Enable static HTML export
  images: {
    unoptimized: true, // Required for static export
  },
};

module.exports = nextConfig;
