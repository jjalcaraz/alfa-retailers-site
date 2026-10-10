import { MetadataRoute } from 'next'
import { getCanonicalUrl } from '@/lib/seo-utils'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getCanonicalUrl()
  const currentDate = new Date()

  return [
    { url: baseUrl,                     lastModified: currentDate, changeFrequency: 'monthly' as const, priority: 1.0 },
    { url: `${baseUrl}/privacy-policy`, lastModified: currentDate, changeFrequency: 'yearly'  as const, priority: 0.3 },
    { url: `${baseUrl}/terms`,          lastModified: currentDate, changeFrequency: 'yearly'  as const, priority: 0.3 },
    { url: `${baseUrl}/cookies`,        lastModified: currentDate, changeFrequency: 'yearly'  as const, priority: 0.3 },
  ]
}
