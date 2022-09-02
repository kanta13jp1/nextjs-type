/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    ENABLE_BASIC_AUTH: process.env.ENABLE_BASIC_AUTH,
    BASIC_AUTH_USER: process.env.BASIC_AUTH_USER,
    BASIC_AUTH_PASSWORD: process.env.BASIC_AUTH_PASSWORD,
  },
  experimental: {
    images: {
      allowFutureImage: true,
    },
  },
  images: {
    domains: ['assets.vercel.com', 'new-kokumin.jp'],
    formats: ['image/avif', 'image/webp'],
  },
};

module.exports = nextConfig;
