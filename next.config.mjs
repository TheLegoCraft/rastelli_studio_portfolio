// Set by the GitHub Pages workflow (see src/lib/basePath.js); empty locally and on a custom domain
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Plain HTML/CSS/JS in out/, served by GitHub Pages
  output: 'export',
  basePath: BASE_PATH,
  // GitHub Pages has no image optimisation server
  images: { unoptimized: true },
};

export default nextConfig;
