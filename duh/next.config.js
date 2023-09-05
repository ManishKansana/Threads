/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      serverActions: true,
      serverComponentsExternalPackages: ["mongoose"],
    },
    eslint: {
      // Warning: This allows production builds to successfully complete even if
      // your project has ESLint errors.
      ignoreDuringBuilds: true,
    },
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "img.clerk.com",
          port: ""
        },
        {
          protocol: "https",
          hostname: "images.clerk.dev",
          port: ""
        },
        {
          protocol: "https",
          hostname: "uploadthing.com",
          port: ""
        },
        {
          protocol: "https",
          hostname: "placehold.co",
          port: ""
        },
      ],
    },
  };
  
  module.exports = nextConfig