import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "imagedelivery.net",
        port: "",
        pathname: "/**",
        search: "",
      },
    ],
    qualities: [100, 75, 80],
  },
};

export default nextConfig;
