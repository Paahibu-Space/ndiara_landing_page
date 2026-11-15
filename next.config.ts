import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Serve AVIF (smallest) with WebP fallback instead of the default WebP-only.
    formats: ["image/avif", "image/webp"],
    // Cache optimized images for 31 days; source images in /public are versioned by filename.
    minimumCacheTTL: 2678400,
  },
};

export default nextConfig;
