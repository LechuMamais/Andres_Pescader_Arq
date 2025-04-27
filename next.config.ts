/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Ayuda a detectar problemas en dev

  images: {
    domains: [], // 👈 Si después cargas imágenes externas, agregás dominios acá
    formats: ['image/avif', 'image/webp'] // Optimizaciones modernas
  },

  experimental: {
    typedRoutes: true // Ayuda a detectar errores de rutas mal escritas
  },

  eslint: {
    // Permite que el build pase incluso si hay errores de ESLint
    ignoreDuringBuilds: true
  },

  typescript: {
    // Permite que el build pase aunque haya errores de TypeScript
    ignoreBuildErrors: false
  },

  trailingSlash: false // URL limpias (sin / al final)
}

export default nextConfig
