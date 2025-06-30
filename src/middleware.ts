import createMiddleware from 'next-intl/middleware'
import { routing } from './i18n/routing'

export default createMiddleware(routing)

export const config = {
  matcher: [
    /*
     Excluye rutas estáticas y archivos públicos (como `_next`, `favicon.ico`, etc.)
     Esto evita que el middleware se ejecute en ellos.
    */
    '/((?!_next|favicon.ico|robots.txt|sitemap.xml|images|.*\\..*).*)'
  ]
}
