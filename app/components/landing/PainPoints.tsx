import type { LandingContent } from '@/lib/landing'
import SectionHeading from './SectionHeading'
import { sectionWrap } from './ui'

/** 02 — The three production problems the closed loop removes. */
export default function PainPoints({ content }: { content: LandingContent['pains'] }) {
    return (
        <section id='problems' className='scroll-mt-24 bg-[#f4f1ec] py-16 md:py-28'>
            <div className={sectionWrap}>
                <SectionHeading {...content} />

                <div className='mt-12 grid gap-x-8 gap-y-12 md:mt-18 md:grid-cols-3'>
                    {content.items.map((item, index) => (
                        <article key={item.title} className='group border-t border-[#0a0a36]/20 pt-5'>
                            <div className='flex items-baseline justify-between gap-4'>
                                <span className='font-[family-name:var(--font-geist-mono)] text-[11px] tracking-[0.2em] text-[#0a0a36]/35'>
                                    0{index + 1}
                                </span>
                                <span className='border border-[#0a0a36]/15 px-2 py-1 font-[family-name:var(--font-geist-mono)] text-[9.5px] uppercase tracking-[0.18em] text-[#0a0a36]/60'>
                                    {item.tag}
                                </span>
                            </div>

                            <h3 className='mt-7 text-balance text-[22px] font-semibold leading-[1.2] tracking-[-0.02em] text-[#0a0a36]'>
                                {item.title}
                            </h3>
                            <p className='mt-3 text-pretty text-[13.5px] leading-[1.75] text-[#0a0a36]/65 md:text-[14px]'>
                                {item.body}
                            </p>

                            <div className='mt-8 border-t border-dashed border-[#0a0a36]/15 pt-4'>
                                <p className='font-[family-name:var(--font-geist-mono)] text-[28px] leading-none text-[#0270c2] md:text-[32px]'>
                                    {item.metric}
                                </p>
                                <p className='mt-2.5 text-[10.5px] uppercase leading-[1.4] tracking-[0.14em] text-[#0a0a36]/55'>
                                    {item.metricLabel}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>

                <p className='mt-14 max-w-2xl border-l-2 border-[#0270c2] pl-4 text-[13.5px] leading-[1.75] text-[#0a0a36]/70 md:mt-20 md:text-[14.5px]'>
                    {content.footnote}
                </p>
            </div>
        </section>
    )
}
