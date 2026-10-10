import { Metadata } from 'next'

// TODO(lawyer): draft pending legal review before launch.
export const metadata: Metadata = {
  title: 'Terms of Service | Alfa Retailers LLC',
  description: 'Terms of Service for Alfa Retailers LLC and its automation services.',
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://www.alfaretailers.com/terms' },
}

// TODO(lawyer): draft pending legal review before launch.
const sections = [
  {
    title: 'Services & Scope',
    body: `Alfa Retailers LLC builds and operates automation systems for local service businesses, including our missed-call text-back service, Get Always Answered, and custom automation projects. The specific scope, deliverables, and timeline for any project are defined in the applicable service agreement.`,
  },
  {
    title: 'Fees & Engagements',
    body: `Fees and payment terms for custom projects are as set out in the applicable service agreement. Any third-party service costs required for your project (e.g., texting, hosting, or software subscriptions) are handled as described in that agreement.`,
  },
  {
    title: 'Client Responsibilities',
    body: `You agree to provide accurate information, timely feedback, and any account access reasonably required to deliver the agreed scope. You are responsible for how you use the systems we build, including compliance with laws and platform rules that apply to your business.`,
  },
  {
    title: 'Third-Party Services',
    body: `Our services may rely on third-party providers (e.g., telephony, email, hosting, analytics). Those providers’ terms and privacy policies apply to their services, and we are not responsible for their availability or actions.`,
  },
  {
    title: 'Term & Termination',
    body: `Either party may terminate an engagement with 30 days written notice unless your service agreement states otherwise. Upon termination, we will hand over work product and access as described in that agreement.`,
  },
  {
    title: 'Liability',
    body: `To the fullest extent permitted by law, our liability is limited to direct damages up to the fees paid to us in the three months preceding the event giving rise to the claim. We are not liable for indirect or consequential damages, loss of income, or loss of goodwill.`,
  },
  {
    title: 'Privacy & Data',
    body: `We handle personal data in accordance with our Privacy Policy. You agree to use any systems we provide lawfully and not to send unsolicited messages through them.`,
  },
  {
    title: 'Governing Law',
    body: `These Terms are governed by the laws of the State of Texas, without regard to conflicts of law principles. Any disputes will be resolved in state or federal courts located in Bexar County, Texas.`,
  },
  {
    title: 'Updates',
    body: `We may update these Terms from time to time. Continued use of our services after changes take effect constitutes acceptance of the revised Terms. If a material change affects your rights, we will notify you through reasonable means.`,
  },
]

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <main className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <section className="mb-12 text-center">
            <p className="text-sm uppercase tracking-[0.25em] text-amber-500 mb-2">Terms of Service</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">Service Terms & Conditions</h1>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Terms for using our website and services. These apply alongside any signed service agreement.
            </p>
          </section>

          <div className="space-y-8">
            {sections.map((section) => (
              <article key={section.title} className="rounded-2xl border border-slate-200 shadow-[0_16px_40px_-28px_rgba(15,23,42,0.35)] p-6 sm:p-8 bg-white">
                <h2 className="text-2xl font-semibold text-slate-900 mb-3">{section.title}</h2>
                <p className="text-slate-700 leading-relaxed">{section.body}</p>
              </article>
            ))}
          </div>

          <div className="mt-12 text-sm text-slate-500 text-center">
            Last updated: October 10, 2026. For questions, contact us at juanalcaraz@alfaretailers.com or (210) 526-1401.
          </div>
        </div>
      </main>
    </div>
  )
}
