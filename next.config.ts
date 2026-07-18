import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // No special config needed
};

export default nextConfig;

import('@opennextjs/cloudflare').then(m => m.initOpenNextCloudflareForDev());
