/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
   // 🔹 Redirección del subdominio promo.protecciontotal.pro → /promo
   async redirects() {
    return [
      {
        source: '/',
        has: [
          {
            type: 'host',
            value: 'landing.protecciontotal.pro',
          },
        ],
        destination: '/promo',
        permanent: false,
      },
    ];
  },

  // ⚙️ Configuración recomendada de imágenes para evitar errores de quality
  images: {
    formats: ['image/webp', 'image/avif'],
    qualities: [75, 90, 95],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.ajax.systems',
      },
    ],
  },

  // 🧠 Seguridad y cabeceras recomendadas
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
