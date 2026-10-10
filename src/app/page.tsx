import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Alfa Retailers LLC',
  description: 'Alfa Retailers LLC — property services company in San Antonio, Texas.',
  alternates: {
    canonical: 'https://www.alfaretailers.com',
  },
}

export default function HoldingPage() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-6 py-24 text-center">
      <img
        src="/images/logo-alfa.png"
        alt="Alfa Retailers LLC logo"
        className="mb-10 h-16 w-auto"
      />
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
        Alfa Retailers LLC
      </h1>
      <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-600">
        Our website is currently being updated. Please check back soon.
      </p>
      <p className="mt-10 text-base text-gray-500">
        For inquiries, contact us at{' '}
        <a
          href="mailto:info@alfaretailers.com"
          className="font-medium text-brand-blue underline hover:text-brand-blue/80"
        >
          info@alfaretailers.com
        </a>{' '}
        or call{' '}
        <a
          href="tel:+12105261401"
          className="font-medium text-brand-blue underline hover:text-brand-blue/80"
        >
          (210) 526-1401
        </a>
        .
      </p>
    </main>
  )
}
