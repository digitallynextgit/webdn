/** @type {import('next').NextConfig} */
const nextConfig = {
  // Use a different dist directory to avoid Windows permission issues with .next
  distDir: '.next-dev',
  // Silence workspace root warning by explicitly setting the tracing root
  outputFileTracingRoot: __dirname,
};

module.exports = nextConfig;