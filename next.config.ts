/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Ayuda a detectar problemas en dev
  swcMinify: true, // Usa SWC para minificar (más rápido que Terser)

  images: {
    domains: [], // 👈 Si después cargas imágenes externas, agregás dominios acá
    formats: ['image/avif', 'image/webp'] // Optimizaciones modernas
  },

  experimental: {
    appDir: true, // Usamos la carpeta /app en Next.js 14+
    typedRoutes: true // Ayuda a detectar errores de rutas mal escritas
  },

  eslint: {
    // Permite que el build pase incluso si hay errores de ESLint
    ignoreDuringBuilds: true
  },

  typescript: {
    // Permite que el build pase aunque haya errores de TypeScript
    ignoreBuildErrors: false // 👈 Mejor en false, para forzarte a corregir errores
  },

  trailingSlash: false // URL limpias (sin / al final)
}

export default nextConfig
