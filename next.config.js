/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['voltrytech.com', 'res.cloudinary.com'],
  },
  experimental: {
    optimizePackageImports: ['@voltry/design-system'],
  },
}

module.exports = nextConfig
