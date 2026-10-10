// Force production URL to prevent Vercel deployment URLs
const PRODUCTION_URL = 'https://www.alfaretailers.com'

// Get the absolute URL for the site
export function getAbsoluteUrl(path: string = ''): string {
  // Always use production URL to prevent Vercel deployment URLs in canonical tags
  let baseUrl = PRODUCTION_URL

  // Only use environment variable if it's explicitly set to our production domain
  if (process.env.NEXT_PUBLIC_SITE_URL && process.env.NEXT_PUBLIC_SITE_URL.includes('alfaretailers.com')) {
    baseUrl = process.env.NEXT_PUBLIC_SITE_URL
  }

  // Normalize path to avoid double slashes
  const cleanPath = path.startsWith('/') ? path : `/${path}`

  return `${baseUrl}${cleanPath}`
}

// Get the canonical URL with proper normalization
export function getCanonicalUrl(path: string = ''): string {
  const url = getAbsoluteUrl(path)

  // Remove trailing slash for consistency (except for homepage)
  if (path.length > 1 && url.endsWith('/')) {
    return url.slice(0, -1)
  }

  // Ensure homepage has trailing slash
  if (!path || path === '/') {
    return url.replace(/\/$/, '') + '/'
  }

  return url
}
