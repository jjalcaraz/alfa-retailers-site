import Link from 'next/link'
import { mono } from './ui'

const linkClass =
  'text-[#c3cbdb] underline underline-offset-[3px] transition-colors duration-200 hover:text-[#22d3ee]'

export function HomeFooter() {
  return (
    <footer className="border-t-2 border-[rgba(230,235,245,0.2)]">
      <div
        className={`${mono} mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-x-8 gap-y-4 px-[clamp(20px,4vw,40px)] py-7 text-[13px]`}
      >
        <p className="m-0 text-[#c3cbdb]">© Alfa Retailers LLC</p>
        <nav aria-label="Legal" className="flex flex-wrap gap-6">
          <Link href="/privacy-policy" className={linkClass}>
            Privacy Policy
          </Link>
          <Link href="/terms" className={linkClass}>
            Terms
          </Link>
          <Link href="/sms-terms" className={linkClass}>
            SMS Terms
          </Link>
        </nav>
      </div>
    </footer>
  )
}
