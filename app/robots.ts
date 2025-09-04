import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/login', '/signup', '/auth/'],
      },
    ],
    sitemap: 'https://www.rayankarki.com.np/sitemap.xml',
  }
}
