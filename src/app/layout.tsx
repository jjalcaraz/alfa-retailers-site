import type { Metadata } from 'next'
import Link from 'next/link'
import './globals.css'

// Canonical production URL for metadata
const PRODUCTION_URL = 'https://www.alfaretailers.com'

export const metadata: Metadata = {
  title: {
    default: 'Alfa Retailers LLC',
    template: '%s | Alfa Retailers LLC',
  },
  description: 'Alfa Retailers LLC — property services company in San Antonio, Texas.',
  authors: [{ name: 'Alfa Retailers LLC' }],
  metadataBase: new URL(PRODUCTION_URL),
  alternates: {
    canonical: PRODUCTION_URL,
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased bg-white text-gray-900 flex min-h-screen flex-col">
        {children}
        <footer className="mt-auto border-t border-gray-100 py-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
            <p>© {new Date().getFullYear()} Alfa Retailers LLC. All rights reserved.</p>
            <nav className="flex gap-6" aria-label="Legal">
              <Link href="/privacy-policy" className="hover:text-gray-900">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-gray-900">
                Terms of Service
              </Link>
              <Link href="/cookies" className="hover:text-gray-900">
                Cookies
              </Link>
            </nav>
          </div>
        </footer>
      </body>
    </html>
  )
}
