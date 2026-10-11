import { SectionHeading } from './section-heading'
import { btnPrimary, container, mono, sectionRule } from './ui'

const steps = [
  'A customer calls the business.',
  "The call isn't answered.",
  'One text reply goes to the caller asking how the business can help.',
  'The business picks up the conversation.',
]

export function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className={`scroll-mt-16 ${sectionRule}`}
    >
      <div className={`${container} py-[clamp(64px,9vw,112px)]`}>
        <SectionHeading id="projects-title" label="02 / Projects">
          What we&apos;ve built and what&apos;s next.
        </SectionHeading>

        <article
          data-reveal=""
          aria-labelledby="gaa-title"
          className="mb-4 grid grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] border border-[rgba(34,211,238,0.45)] bg-[linear-gradient(#0f1a2e_0%,#0c1324_100%)] hover:shadow-[0_0_0_1px_rgba(34,211,238,0.3),0_20px_60px_-20px_rgba(34,211,238,0.4)]"
        >
          <div className="flex flex-col gap-5 p-[clamp(28px,4vw,48px)]">
            <div className={`${mono} flex flex-wrap gap-2 text-[12px] tracking-[0.04em]`}>
              <span className="bg-[#22d3ee] px-2 py-1 font-medium text-[#0a0f1c]">Featured</span>
              <span className="border border-[rgba(230,235,245,0.3)] px-2 py-[3px] text-[#c3cbdb]">
                Live
              </span>
            </div>
            <h3
              id="gaa-title"
              className="m-0 text-[length:clamp(28px,3.4vw,40px)] font-extrabold leading-[1.12] tracking-[-0.025em] text-[#f4f7fc]"
            >
              Get Always Answered
            </h3>
            <p className={`${mono} m-0 text-[13px] text-[#a9b4ca]`}>A service of Alfa Retailers</p>
            <p className="m-0 max-w-[46ch] text-[17px] leading-[1.6] text-[#c3cbdb] [text-wrap:pretty]">
              A missed-call text-back service for local service businesses. When someone calls and
              isn&apos;t answered, it sends one text reply asking how we can help, so the business
              doesn&apos;t lose the lead.
            </p>
            <div className="mt-2">
              <a
                href="https://getalwaysanswered.com"
                rel="noopener"
                className={`${btnPrimary} min-w-[260px]`}
              >
                Visit getalwaysanswered.com
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="square"
                  aria-hidden="true"
                >
                  <path d="M7 17L17 7M8 7h9v9" />
                </svg>
              </a>
            </div>
          </div>
          <div className="flex flex-col justify-center border-l border-[rgba(230,235,245,0.14)] p-[clamp(28px,4vw,48px)]">
            <p className={`${mono} mb-5 text-[12px] tracking-[0.04em] text-[#8592ad]`}>
              How it works
            </p>
            <ol className="m-0 flex list-none flex-col p-0">
              {steps.map((text, i) => (
                <li
                  key={text}
                  className={`grid grid-cols-[40px_1fr] gap-4 border-t border-[rgba(230,235,245,0.14)] py-[18px] ${
                    i === steps.length - 1 ? 'border-b' : ''
                  }`}
                >
                  <span className={`${mono} text-[13px] text-[#22d3ee]`}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-[16px] text-[#e6ebf5]">{text}</span>
                </li>
              ))}
            </ol>
          </div>
        </article>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] gap-4">
          {[0, 1].map((n) => (
            <article
              key={n}
              data-reveal=""
              className="flex min-h-[200px] flex-col gap-4 border border-dashed border-[rgba(230,235,245,0.28)] px-7 py-8"
            >
              <span
                className={`${mono} self-start border border-[rgba(230,235,245,0.3)] px-2 py-[3px] text-[12px] text-[#c3cbdb]`}
              >
                In development
              </span>
              <h3 className="m-0 text-[20px] font-extrabold leading-[1.12] tracking-[-0.015em] text-[#f4f7fc]">
                Project in progress
              </h3>
              <p className="m-0 text-[15px] leading-[1.6] text-[#a9b4ca]">
                Details will be published here when it launches.
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
