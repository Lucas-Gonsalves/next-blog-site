import type { NextConfig } from "next";
import { withContentlayer } from 'next-contentlayer2'

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  reactStrictMode: true,
  turbopack: {}
};

export default withContentlayer(nextConfig);