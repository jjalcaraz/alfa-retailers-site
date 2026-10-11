import { SectionHeading } from './section-heading'
import { container, mono, sectionRule } from './ui'

const iconProps = {
  width: 26,
  height: 26,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: '#22d3ee',
  strokeWidth: 1.6,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
}

const services = [
  {
    letter: 'A',
    title: 'AI call and text automation',
    body: 'We build systems that respond when a call goes unanswered or a customer needs a quick reply. Each response is tied to a real customer request, and you keep a clear record of every one.',
    icon: (
      <svg {...iconProps}>
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    letter: 'B',
    title: 'Workflow and lead-capture automation',
    body: 'We connect the forms, inboxes and spreadsheets you already use so new inquiries land in one place. Routine steps like data entry and handoffs then run on their own.',
    icon: (
      <svg {...iconProps}>
        <rect x="3" y="3" width="6" height="6" />
        <rect x="15" y="15" width="6" height="6" />
        <path d="M9 6h4a2 2 0 0 1 2 2v7" />
      </svg>
    ),
  },
  {
    letter: 'C',
    title: 'Custom software and integrations',
    body: "When off-the-shelf tools don't fit, we build small, focused software for the job. We also connect the systems you rely on so data moves between them reliably.",
    icon: (
      <svg {...iconProps}>
        <path d="M16 18l6-6-6-6" />
        <path d="M8 6l-6 6 6 6" />
      </svg>
    ),
  },
]

export function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className={`scroll-mt-16 ${sectionRule}`}
    >
      <div className={`${container} py-[clamp(64px,9vw,112px)]`}>
        <SectionHeading id="services-title" label="01 / What we do">
          Automation that does one job well.
        </SectionHeading>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] gap-4">
          {services.map((s) => (
            <article
              key={s.title}
              data-reveal=""
              className="flex flex-col gap-5 border border-[rgba(230,235,245,0.18)] bg-[#0e1527] px-7 pb-9 pt-8 hover:border-[rgba(34,211,238,0.6)] hover:shadow-[0_0_0_1px_rgba(34,211,238,0.25),0_12px_40px_-12px_rgba(34,211,238,0.35)]"
            >
              <div className="flex items-center justify-between">
                {s.icon}
                <span aria-hidden="true" className={`${mono} text-[12px] text-[#8592ad]`}>
                  {s.letter}
                </span>
              </div>
              <h3 className="m-0 text-[22px] font-extrabold leading-[1.12] tracking-[-0.015em] text-[#f4f7fc]">
                {s.title}
              </h3>
              <p className="m-0 text-[16px] leading-[1.6] text-[#b4bed0] [text-wrap:pretty]">
                {s.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
