/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['monkeyislandbochum.de'],
  }
}

module.exports = nextConfig