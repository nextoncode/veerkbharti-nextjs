/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "unsplash.it",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
