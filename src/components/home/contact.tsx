import { SectionHeading } from './section-heading'
import { container, mono } from './ui'

const box = 'flex flex-col gap-3 border border-[rgba(230,235,245,0.18)] p-7'
const linkBox = `${box} text-[#f4f7fc] no-underline transition-[border-color,box-shadow] duration-[250ms] hover:border-[rgba(34,211,238,0.6)] hover:shadow-[0_12px_40px_-12px_rgba(34,211,238,0.35)]`
const label = `${mono} text-[12px] tracking-[0.04em] text-[#8592ad]`

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="scroll-mt-16">
      <div className={`${container} py-[clamp(64px,9vw,112px)]`}>
        <SectionHeading id="contact-title" label="04 / Contact">
          Talk to us about your project.
        </SectionHeading>
        <address
          data-reveal=""
          className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,260px),1fr))] gap-4 not-italic"
        >
          <div className={box}>
            <span className={label}>Location</span>
            <span className="text-[20px] font-semibold text-[#f4f7fc]">San Antonio, TX</span>
          </div>
          <a href="mailto:juan@getalwaysanswered.com" className={linkBox}>
            <span className={label}>Email</span>
            <span className="text-[length:clamp(15px,1.5vw,18px)] font-semibold [overflow-wrap:normal]">
              juan@<wbr />
              getalwaysanswered.com
            </span>
          </a>
          <a href="tel:+12105261401" className={linkBox}>
            <span className={label}>Phone</span>
            <span className="text-[20px] font-semibold">(210) 526-1401</span>
          </a>
        </address>
      </div>
    </section>
  )
}
