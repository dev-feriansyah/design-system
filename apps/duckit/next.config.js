/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["@acme/core", "tailwindconfig"],
}

module.exports = nextConfig
