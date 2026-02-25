import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['github.com', 'avatars.githubusercontent.com'],
  },
  async headers() {
    return [
      {
        source: '/demos/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'Content-Security-Policy',
            value: "frame-ancestors 'self'",
          },
        ],
      },
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          }
        ]
      }
    ];
  },
  async redirects() {
    return [
      {
        source: '/services',
        destination: '/process',
        permanent: true,
      },
      {
        source: '/plans',
        destination: '/process',
        permanent: true,
      },
      {
        source: '/book',
        destination: '/process',
        permanent: true,
      },
      {
        source: '/portfolio',
        destination: '/work',
        permanent: true,
      },
      {
        source: '/login',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
