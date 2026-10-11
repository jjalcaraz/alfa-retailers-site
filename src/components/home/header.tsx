import { mono } from './ui'

const links = [
  { href: '#services', label: 'Services' },
  { href: '#projects', label: 'Projects' },
  { href: '#process', label: 'Process' },
  { href: '#contact', label: 'Contact' },
]

export function HomeHeader() {
  return (
    <header className="sticky top-0 z-20 border-b-2 border-[rgba(230,235,245,0.2)] bg-[rgba(10,15,28,0.88)] backdrop-blur-[10px]">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-6 px-[clamp(20px,4vw,40px)] py-4"
      >
        <a
          href="#top"
          className="flex items-center gap-[10px] text-[16px] font-extrabold tracking-[-0.01em] text-[#e6ebf5] no-underline"
        >
          <span aria-hidden="true" className="block h-[14px] w-[14px] bg-[#22d3ee]" />
          Alfa Retailers LLC
        </a>
        <div className={`${mono} flex flex-wrap gap-6 text-[13px]`}>
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[#a9b4ca] no-underline transition-colors duration-200 hover:text-[#e6ebf5]"
            >
              {l.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}
