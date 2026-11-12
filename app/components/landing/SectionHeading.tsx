import { type ReactNode } from 'react'

type SectionHeadingProps = {
    index: string
    kicker: string
    title: string
    subtitle: string
    /** Set on navy sections. */
    inverted?: boolean
    children?: ReactNode
}

/**
 * Shared section masthead: a numbered rule, an editorial headline and a short
 * standfirst. Every section of the page uses the same rhythm, which is what
 * makes a long landing page feel like one document instead of ten blocks.
 */
export default function SectionHeading({
    index,
    kicker,
    title,
    subtitle,
    inverted = false,
    children,
}: SectionHeadingProps) {
    const line = inverted ? 'border-white/15' : 'border-[#0a0a36]/15'
    const kickerColor = inverted ? 'text-white/60' : 'text-[#0a0a36]/55'
    const titleColor = inverted ? 'text-white' : 'text-[#0a0a36]'
    const bodyColor = inverted ? 'text-white/65' : 'text-[#0a0a36]/65'

    return (
        <div>
            <div className={`flex items-center gap-4 border-t ${line} pt-4`}>
                <span
                    className={`font-[family-name:var(--font-geist-mono)] text-[11px] tracking-[0.24em] ${
                        inverted ? 'text-[#5ec8ff]' : 'text-[#0270c2]'
                    }`}
                >
                    /{index}
                </span>
                <span
                    className={`font-[family-name:var(--font-geist-mono)] text-[11px] uppercase tracking-[0.22em] ${kickerColor}`}
                >
                    {kicker}
                </span>
                <span className={`ml-auto hidden h-px flex-1 sm:block ${inverted ? 'bg-white/15' : 'bg-[#0a0a36]/15'}`} />
            </div>

            <div className='mt-7 grid gap-x-10 gap-y-6 md:mt-10 md:grid-cols-12 md:items-end'>
                <h2
                    className={`text-balance text-[32px] font-semibold leading-[1.06] tracking-[-0.03em] sm:text-[40px] md:col-span-8 md:text-[54px] ${titleColor}`}
                >
                    {title}
                </h2>
                <p className={`text-pretty text-[15px] leading-[1.65] md:col-span-4 md:pb-1.5 md:text-[15px] ${bodyColor}`}>
                    {subtitle}
                </p>
            </div>

            {children}
        </div>
    )
}
