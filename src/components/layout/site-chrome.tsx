'use client'

import { usePathname } from 'next/navigation'

/**
 * Renders the global header/footer on every route except the home page,
 * which ships its own header and footer.
 */
export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  if (pathname === '/') return null
  return <>{children}</>
}
