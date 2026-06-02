import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  images: { formats: ["image/avif", "image/webp"], domains: ["cdn.simpleicons.org", "skillicons.dev"] },
  compress: true,
  poweredByHeader: false,
};
export default nextConfig;
