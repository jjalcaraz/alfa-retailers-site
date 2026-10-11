import styles from './home.module.css'
import { btnPrimary, btnSecondary, mono, sectionRule } from './ui'

function HeroNetwork() {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 1200 640"
      preserveAspectRatio="xMidYMid slice"
      className="pointer-events-none absolute inset-0 h-full w-full"
    >
      <defs>
        <pattern id="ar-grid" width="48" height="48" patternUnits="userSpaceOnUse">
          <path d="M48 0H0V48" fill="none" stroke="rgba(230,235,245,0.06)" strokeWidth="1" />
        </pattern>
        <linearGradient id="ar-fade" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stopColor="#0a0f1c" stopOpacity="1" />
          <stop offset="0.45" stopColor="#0a0f1c" stopOpacity="0.55" />
          <stop offset="1" stopColor="#0a0f1c" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="1200" height="640" fill="url(#ar-grid)" />
      <g fill="none" stroke="#22d3ee" strokeOpacity="0.35" strokeWidth="1.25">
        <path d="M720 96H864V192H1008" />
        <path d="M864 192V336H960V432H1104" />
        <path d="M672 288H816V336H864" />
        <path d="M960 336H1056V240H1152" />
        <path d="M768 480H912V432H960" />
        <path d="M1008 192V96H1104" />
        <path d="M816 336V528H1008" />
      </g>
      <g fill="#0a0f1c" stroke="#22d3ee" strokeWidth="1.5">
        <rect x="714" y="90" width="12" height="12" />
        <rect x="858" y="186" width="12" height="12" />
        <rect x="1002" y="186" width="12" height="12" />
        <rect x="954" y="330" width="12" height="12" />
        <rect x="666" y="282" width="12" height="12" />
        <rect x="1098" y="426" width="12" height="12" />
        <rect x="1146" y="234" width="12" height="12" />
        <rect x="762" y="474" width="12" height="12" />
        <rect x="1098" y="90" width="12" height="12" />
        <rect x="1002" y="522" width="12" height="12" />
      </g>
      <g fill="#22d3ee">
        <rect x="861" y="189" width="6" height="6" />
        <rect x="957" y="333" width="6" height="6" />
        <rect x="1101" y="429" width="6" height="6" />
      </g>
      <rect width="1200" height="640" fill="url(#ar-fade)" />
    </svg>
  )
}

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className={`relative overflow-hidden ${sectionRule}`}>
      <div
        aria-hidden="true"
        className={`${styles.glow} pointer-events-none absolute -right-[15%] -top-[30%] h-[75vw] max-h-[1000px] w-[75vw] max-w-[1000px] bg-[radial-gradient(closest-side,rgba(34,211,238,0.2),rgba(34,211,238,0.06)_55%,transparent_75%)]`}
      />
      <HeroNetwork />
      <div className="relative mx-auto max-w-[1200px] px-[clamp(20px,4vw,40px)] pb-[clamp(64px,10vw,120px)] pt-[clamp(72px,12vw,148px)]">
        <p
          data-reveal=""
          className={`${mono} mb-7 flex flex-wrap gap-3 text-[13px] uppercase tracking-[0.06em] text-[#22d3ee]`}
        >
          <span>AI Automation &amp; Projects</span>
          <span aria-hidden="true" className="text-[#5b6782]">
            /
          </span>
          <span className="text-[#a9b4ca]">San Antonio, TX</span>
        </p>
        <h1
          id="hero-title"
          data-reveal=""
          className="mb-7 max-w-[11ch] text-[length:clamp(44px,8.4vw,108px)] font-extrabold leading-[0.98] tracking-[-0.035em] text-[#f4f7fc]"
        >
          Alfa Retailers LLC
        </h1>
        <p
          data-reveal=""
          className="mb-10 max-w-[34ch] text-[length:clamp(18px,2.1vw,23px)] leading-[1.45] text-[#c3cbdb] [text-wrap:pretty]"
        >
          Practical AI automation and software for local businesses, built to handle the calls,
          leads and busywork your team doesn&apos;t have time for.
        </p>
        <div data-reveal="" className="flex flex-wrap items-center gap-3">
          <a href="#projects" className={`${btnPrimary} min-w-[220px]`}>
            See our projects
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
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
          <a href="#contact" className={btnSecondary}>
            Contact
          </a>
        </div>
      </div>
    </section>
  )
}
