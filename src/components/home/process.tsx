import { SectionHeading } from './section-heading'
import { container, mono, sectionRule } from './ui'

const steps = [
  {
    title: 'Discover',
    body: 'We learn how your business runs today and find the tasks worth automating.',
  },
  {
    title: 'Build',
    body: 'We build the smallest working version and test it against your real process.',
  },
  {
    title: 'Automate',
    body: 'We connect it to your tools and switch it on, with you reviewing every step.',
  },
  {
    title: 'Support',
    body: 'We monitor it, fix issues and adjust it as your business changes.',
  },
]

export function Process() {
  return (
    <section
      id="process"
      aria-labelledby="process-title"
      className={`scroll-mt-16 ${sectionRule}`}
    >
      <div className={`${container} py-[clamp(64px,9vw,112px)]`}>
        <SectionHeading id="process-title" label="03 / How we work">
          Four steps, start to finish.
        </SectionHeading>
        <ol className="m-0 grid list-none grid-cols-[repeat(auto-fit,minmax(min(100%,220px),1fr))] border-t-2 border-[#22d3ee] p-0">
          {steps.map((s, i) => (
            <li
              key={s.title}
              data-reveal=""
              className="flex flex-col gap-3 pb-2 pl-0 pr-6 pt-7"
            >
              <span className={`${mono} text-[13px] text-[#22d3ee]`}>
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="m-0 text-[22px] font-extrabold leading-[1.12] tracking-[-0.015em] text-[#f4f7fc]">
                {s.title}
              </h3>
              <p className="m-0 text-[15px] leading-[1.6] text-[#b4bed0]">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
