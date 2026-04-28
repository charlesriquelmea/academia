/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  onDemandEntries: {
    maxInactiveAge: 15000,
    pagesBufferLength: 5,
  },
  // Force rebuild: 2026-03-31
}

export default nextConfig
