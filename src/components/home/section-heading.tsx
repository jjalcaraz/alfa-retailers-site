import { mono } from './ui'

export function SectionHeading({
  id,
  label,
  children,
}: {
  id: string
  label: string
  children: React.ReactNode
}) {
  return (
    <div
      data-reveal=""
      className="mb-12 grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] items-end gap-x-12 gap-y-4"
    >
      <p className={`${mono} m-0 text-[13px] tracking-[0.04em] text-[#22d3ee]`}>{label}</p>
      <h2
        id={id}
        className="m-0 max-w-[20ch] text-[length:clamp(28px,3.6vw,44px)] font-extrabold leading-[1.12] tracking-[-0.025em] text-[#f4f7fc]"
      >
        {children}
      </h2>
    </div>
  )
}
