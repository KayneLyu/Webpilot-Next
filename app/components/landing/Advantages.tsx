import type { LandingContent } from '@/lib/landing'
import SectionHeading from './SectionHeading'
import { sectionWrap } from './ui'

/** 06 — Why a retrofit from JINJIU fits and stays running. */
export default function Advantages({ content }: { content: LandingContent['advantages'] }) {
    return (
        <section id='advantages' className='scroll-mt-24 bg-white py-16 md:py-28'>
            <div className={sectionWrap}>
                <SectionHeading {...content} />

                <div className='mt-12 grid gap-px border border-[#0a0a36]/12 bg-[#0a0a36]/12 sm:grid-cols-2 md:mt-16 lg:grid-cols-4'>
                    {content.items.map((item) => (
                        <div key={item.title} className='flex flex-col bg-white p-6 md:p-7'>
                            <p className='font-[family-name:var(--font-geist-mono)] text-[40px] leading-none tracking-[-0.03em] text-[#0270c2] md:text-[46px]'>
                                {item.metric}
                            </p>
                            <p className='mt-3 text-[9.5px] uppercase leading-[1.45] tracking-[0.15em] text-[#0a0a36]/55'>
                                {item.metricLabel}
                            </p>
                            <h3 className='mt-9 text-[17px] font-semibold leading-[1.3] tracking-[-0.01em] text-[#0a0a36]'>
                                {item.title}
                            </h3>
                            <p className='mt-2.5 text-[12.5px] leading-[1.7] text-[#0a0a36]/65'>{item.body}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
