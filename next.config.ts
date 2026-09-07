import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async redirects() {
    return [{ source: '/pachakama', destination: '/pachakana', permanent: true }];
  },
};

export default nextConfig;
