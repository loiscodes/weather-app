/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['developer.accuweather.com']
  }
}

module.exports = nextConfig
