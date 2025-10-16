/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost', 'images.unsplash.com'],
  },
  // Enable React strict mode
  reactStrictMode: true,
  // Set output file tracing root to avoid workspace warnings
  outputFileTracingRoot: __dirname,
}

module.exports = nextConfig
