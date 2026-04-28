import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/placementindia',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
