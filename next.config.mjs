/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['assets.aceternity.com'],
    unoptimized: true, // This is necessary when exporting static files on GitHub Pages
  },
  output: 'export', // Enable static export
  distDir: 'docs', // Set output directory to 'docs' for GitHub Pages
};

export default nextConfig;