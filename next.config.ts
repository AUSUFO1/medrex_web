import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  allowedDevOrigins: ['10.53.243.104'],
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
