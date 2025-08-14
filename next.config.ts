import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pra prod
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
  
  // Config de imagem
  images: {
    unoptimized: false,
    formats: ['image/webp', 'image/avif'],
  },
  
  // Headers de segurança
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
