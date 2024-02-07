/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: "build",

  images: {
    domains: ["cdn.sanity.io"],
  },
}

export default nextConfig
