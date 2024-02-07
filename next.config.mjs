/** @type {import('next').NextConfig} */
const nextConfig = {
  ignoreDuringBuilds: true,
  reactStrictMode: true,
  distDir: "build",

  images: {
    domains: ["cdn.sanity.io"],
  },
}

export default nextConfig
