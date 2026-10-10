import { Metadata } from 'next'

// TODO(lawyer): draft pending legal review before launch.
export const metadata: Metadata = {
  title: 'Privacy Policy | Alfa Retailers LLC',
  description:
    'Alfa Retailers LLC Privacy Policy — how we collect, use, and protect your personal information.',
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://www.alfaretailers.com/privacy-policy' },
}

// TODO(lawyer): draft pending legal review before launch.
const sections = [
  {
    title: 'Introduction',
    body: `Alfa Retailers LLC (https://www.alfaretailers.com) provides AI automation and revenue operations services for local service businesses, including our missed-call text-back service, Get Always Answered. This Privacy Policy describes what information we collect through this website, why we collect it, how we use it, and your choices. By using our website you agree to the collection and use of information as described here.`,
  },
  {
    title: 'Information We Collect',
    body: `We collect information you provide directly when you contact us by email or phone — such as your name, email address, phone number, and the contents of your inquiry. Our website hosting provider also keeps standard server logs, which may include IP addresses, browser type, and pages visited. This site does not use cookies, analytics, or tracking scripts, and it has no contact forms or account sign-ups.`,
  },
  {
    title: 'Text Messaging',
    body: `Alfa Retailers LLC does not send marketing text messages, and this website does not collect SMS consent. The Get Always Answered missed-call reply program — which sends a text in response to an unanswered call to a participating business — is described at https://getalwaysanswered.com/sms-terms.`,
  },
  {
    title: 'How We Use Your Information',
    body: `We use the information we collect to respond to your inquiries, provide customer support, deliver the services described in your service agreement, comply with legal obligations, and protect the security of our website. We do not use your information for marketing lists or advertising profiles.`,
  },
  {
    title: 'Information Sharing',
    body: `We do not sell your personal information. We may share information only with service providers that help us operate (for example, website hosting and email delivery) under contractual limits, when you explicitly authorize it, or when required by law.`,
  },
  {
    title: 'Data Retention & Security',
    body: `We retain personal data only as long as needed for the purposes described here or as required by law, and we use reasonable technical and organizational measures to protect it. No system is completely secure; if you believe your interaction with us is no longer secure, contact us immediately.`,
  },
  {
    title: 'Your Rights',
    body: `You may request access to, correction of, or deletion of your personal information, or a machine-readable export, subject to legal retention obligations. Contact us using the details below and we will respond within 30 days.`,
  },
  {
    title: 'Contact Us',
    body: `Alfa Retailers LLC · 12506 Ponder Ranch, San Antonio, TX 78245 · juanalcaraz@alfaretailers.com · (210) 526-1401.`,
  },
  {
    title: 'Policy Updates',
    body: `We may update this Privacy Policy from time to time. We will post the revised policy on this page and update the "Last updated" date. Continued use of our services after changes take effect constitutes acceptance.`,
  },
]

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <main className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <section className="mb-12 text-center">
            <p className="text-sm uppercase tracking-[0.25em] text-amber-500 mb-2">Privacy</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">Privacy Policy</h1>
            <p className="text-slate-600 max-w-2xl mx-auto">
              How Alfa Retailers LLC collects, uses, and protects your personal information.
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
