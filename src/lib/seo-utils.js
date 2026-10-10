// Force production URL to prevent Vercel deployment URLs
const PRODUCTION_URL = 'https://www.alfaretailers.com'

// Get the absolute URL for the site
function getAbsoluteUrl(path = '') {
  // Always use production URL to prevent Vercel deployment URLs in canonical tags
  let baseUrl = PRODUCTION_URL

  // Only use the environment variable when it is explicitly our www production
  // host — an apex value (https://alfaretailers.com) would otherwise override
  // the www default and emit redirecting URLs into canonicals and the sitemap.
  const envUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, '')
  if (envUrl && (envUrl === PRODUCTION_URL || envUrl.startsWith(`${PRODUCTION_URL}/`))) {
    baseUrl = envUrl
  }

  // Normalize path to avoid double slashes
  const cleanPath = path.startsWith('/') ? path : `/${path}`

  return `${baseUrl}${cleanPath}`
}

// Get the canonical URL with proper normalization
function getCanonicalUrl(path = '') {
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

exports.getAbsoluteUrl = getAbsoluteUrl
exports.getCanonicalUrl = getCanonicalUrl
