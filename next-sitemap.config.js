/** @type {import('next-sitemap').IConfig} */
const sitemapConfig = {
  siteUrl: 'https://andres-pescader-arq.vercel.app/', // 🔥 CAMBIAR por tu dominio real
  generateRobotsTxt: true, // ✅ Crea automáticamente robots.txt
  generateIndexSitemap: true, // ✅ Agrupa múltiples sitemaps si hace falta
  sitemapSize: 5000, // Default, cada sitemap puede tener hasta 5000 URLs

  exclude: ['/admin/*', '/dashboard/*', '/login', '/register', '/404', '/500'], // ❌ No queremos que estas rutas aparezcan en Google

  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin', '/dashboard', '/login', '/register']
      }
    ],
    additionalSitemaps: ['https://tudominio.vercel.app/sitemap.xml']
  }
}

export default sitemapConfig
