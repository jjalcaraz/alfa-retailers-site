import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Alfa Retailers LLC',
  description: 'AI automation and revenue operations for local service businesses.',
  alternates: {
    canonical: 'https://www.alfaretailers.com',
  },
}

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col">
      {/* Hero */}
      <section className="flex flex-1 flex-col items-center justify-center px-6 py-20 text-center sm:py-28">
        <img
          src="/images/logo-alfa.png"
          alt="Alfa Retailers LLC logo"
          className="mb-8 h-14 w-auto"
        />
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Alfa Retailers LLC
        </h1>
        <p className="mt-4 text-xl font-medium text-brand-blue">
          AI automation and revenue operations for local service businesses.
        </p>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
          We build and run systems that help small businesses answer every lead, follow up
          faster, and keep their pipeline organized.
        </p>
      </section>

      {/* Services */}
      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 text-left">
            <h2 className="text-2xl font-semibold text-gray-900">Get Always Answered</h2>
            <p className="mt-3 leading-relaxed text-gray-600">
              Our missed-call text-back service. When a call goes unanswered, the caller gets a
              text right away so the lead doesn&rsquo;t disappear.
            </p>
            <a
              href="https://getalwaysanswered.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block font-medium text-brand-blue underline hover:text-brand-blue/80"
            >
              getalwaysanswered.com
            </a>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-8 text-left">
            <h2 className="text-2xl font-semibold text-gray-900">Custom projects</h2>
            <p className="mt-3 leading-relaxed text-gray-600">
              Need automation built around your business? Tell us what you&rsquo;re trying to fix.
            </p>
            <a
              href="mailto:juanalcaraz@alfaretailers.com"
              className="mt-4 inline-block font-medium text-brand-blue underline hover:text-brand-blue/80"
            >
              juanalcaraz@alfaretailers.com
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
