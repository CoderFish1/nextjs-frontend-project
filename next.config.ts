import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["images.unsplash.com"],
  },
  eslint: {
    // ✅ This disables ESLint checks during the Vercel build
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
