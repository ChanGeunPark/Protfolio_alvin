import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["imagedelivery.net"],
    qualities: [100, 75, 80],
  },
};

export default nextConfig;
