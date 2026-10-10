import { MetadataRoute } from 'next'
import { getCanonicalUrl } from '@/lib/seo-utils'

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date()

  return [
    { url: getCanonicalUrl(),                  lastModified: currentDate, changeFrequency: 'monthly' as const, priority: 1.0 },
    { url: getCanonicalUrl('/privacy-policy'), lastModified: currentDate, changeFrequency: 'yearly'  as const, priority: 0.3 },
    { url: getCanonicalUrl('/terms'),          lastModified: currentDate, changeFrequency: 'yearly'  as const, priority: 0.3 },
    { url: getCanonicalUrl('/cookies'),        lastModified: currentDate, changeFrequency: 'yearly'  as const, priority: 0.3 },
  ]
}
