const withNextIntl = require('next-intl/plugin')({
  i18n: {
    locales: ['es', 'en'],
    defaultLocale: 'es',
    localeDetection: false
  }
})

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [new URL('https://cdn.sanity.io/**')],
    domains: ['cdn.sanity.io'],
    formats: ['image/avif', 'image/webp']
  },
  experimental: {
    typedRoutes: true
  },
  eslint: {
    ignoreDuringBuilds: true
  },
  typescript: {
    ignoreBuildErrors: false
  },
  trailingSlash: false
}

module.exports = withNextIntl(nextConfig)
