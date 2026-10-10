// Shared Tailwind class strings for the home page.
import styles from './home.module.css'

export const mono = styles.mono

export const container = 'mx-auto max-w-[1200px] px-[clamp(20px,4vw,40px)]'

export const sectionRule = 'border-b-2 border-[rgba(230,235,245,0.2)]'

const btn =
  'inline-flex items-center justify-between gap-6 border border-transparent px-[18px] py-[14px] text-[15px] font-extrabold leading-[1.2] no-underline'

export const btnPrimary = `${btn} bg-[#22d3ee] text-[#0a0f1c] hover:bg-[#06b6d4] active:bg-[#0891b2]`

export const btnSecondary = `${btn} justify-center border-[rgba(230,235,245,0.35)] text-[#e6ebf5] hover:bg-[rgba(230,235,245,0.07)] active:bg-[rgba(230,235,245,0.14)]`
