import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true,
      },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  async redirects() {
    return [
      {
        source: '/', // The incoming request path
        destination: '/login', // The home page destination
        permanent: false, // Use 308 for permanent redirect, 307 for temporary
      },
    ];
  },
  /* config options here */
};

export default nextConfig;
