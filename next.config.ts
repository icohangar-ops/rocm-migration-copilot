import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Note: `output: "standalone"` removed — it breaks Vercel's node file
  // tracing on Next.js 16 (ENOENT .next/next-server.js.nft.json).
  // Vercel manages its own server output; standalone is only needed
  // for self-hosted Docker-style deploys.
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
};

export default nextConfig;
