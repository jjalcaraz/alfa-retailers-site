import { Metadata } from 'next'

// TODO(lawyer): draft pending legal review before launch.
export const metadata: Metadata = {
  title: 'SMS Terms | Alfa Retailers LLC',
  description:
    'Alfa Retailers LLC does not send marketing text messages. Get Always Answered messaging is described at getalwaysanswered.com/sms-terms.',
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://www.alfaretailers.com/sms-terms' },
}

// TODO(lawyer): draft pending legal review before launch.
export default function SmsTermsPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <main className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <section className="mb-12 text-center">
            <p className="text-sm uppercase tracking-[0.25em] text-amber-500 mb-2">SMS Terms</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">SMS Terms</h1>
          </section>

          <article className="rounded-2xl border border-slate-200 shadow-[0_16px_40px_-28px_rgba(15,23,42,0.35)] p-6 sm:p-8 bg-white">
            <p className="text-slate-700 leading-relaxed">
              Alfa Retailers LLC does not send marketing text messages. The Get Always Answered
              missed-call reply program is described at{' '}
              <a
                href="https://getalwaysanswered.com/sms-terms"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-blue underline hover:text-brand-blue/80"
              >
                https://getalwaysanswered.com/sms-terms
              </a>
              .
            </p>
          </article>

          <div className="mt-12 text-sm text-slate-500 text-center">
            Last updated: October 10, 2026. For questions, contact us at juanalcaraz@alfaretailers.com or (210) 526-1401.
          </div>
        </div>
      </main>
    </div>
  )
}
