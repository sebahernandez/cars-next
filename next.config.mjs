/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  env: {
    API_URL: process.env.API_URL,
    RESEND_API_KEY: process.env.RESEND_API_KEY,
  },
};

export default nextConfig;
