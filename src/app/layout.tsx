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
  description: 'AI automation and revenue operations for local service businesses.',
  authors: [{ name: 'Alfa Retailers LLC' }],
  metadataBase: new URL(PRODUCTION_URL),
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
          <p className="mx-auto max-w-5xl px-4 text-center text-sm leading-6 text-gray-500 sm:px-6">
            Alfa Retailers LLC · 12506 Ponder Ranch, San Antonio, TX 78245 ·{' '}
            <a
              href="mailto:juanalcaraz@alfaretailers.com"
              className="underline hover:text-gray-900"
            >
              juanalcaraz@alfaretailers.com
            </a>{' '}
            ·{' '}
            <a href="tel:+12105261401" className="underline hover:text-gray-900">
              (210) 526-1401
            </a>{' '}
            ·{' '}
            <Link href="/privacy-policy" className="underline hover:text-gray-900">
              Privacy Policy
            </Link>{' '}
            ·{' '}
            <Link href="/terms" className="underline hover:text-gray-900">
              Terms
            </Link>
          </p>
        </footer>
      </body>
    </html>
  )
}
