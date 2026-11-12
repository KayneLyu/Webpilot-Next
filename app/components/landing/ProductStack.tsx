import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

import type { LandingContent, LandingLocale } from '@/lib/landing'
import { localePath } from '@/lib/locale'
import SectionHeading from './SectionHeading'
import { sectionWrap } from './ui'

/** 04 — The three hardware parts that make the loop. */
export default function ProductStack({
    content,
    locale,
}: {
    content: LandingContent['products']
    locale: LandingLocale
}) {
    return (
        <section id='system' className='scroll-mt-24 bg-white py-16 md:py-28'>
            <div className={sectionWrap}>
                <SectionHeading {...content} />

                <div className='mt-12 grid gap-6 md:mt-16 md:grid-cols-3 md:gap-5'>
                    {content.items.map((item) => (
                        <article
                            key={item.name}
                            className='group flex flex-col border border-[#0a0a36]/12 transition-colors duration-300 hover:border-[#0a0a36]/40'
                        >
                            <div className='relative aspect-[4/3] overflow-hidden bg-[#f7f5f1]'>
                                <span className='absolute left-4 top-4 z-10 border border-[#0a0a36]/15 bg-white px-2 py-1 font-[family-name:var(--font-geist-mono)] text-[9.5px] uppercase tracking-[0.18em] text-[#0a0a36]/60'>
                                    {item.tag}
                                </span>
                                <Image
                                    src={item.image}
                                    alt={item.imageAlt}
                                    fill
                                    sizes='(min-width: 768px) 33vw, 100vw'
                                    className='object-contain p-6 transition-transform duration-500 ease-out group-hover:scale-[1.04] md:p-8'
                                />
                            </div>

                            <div className='flex flex-1 flex-col border-t border-[#0a0a36]/12 p-6'>
                                <h3 className='text-balance text-[21px] font-semibold leading-[1.2] tracking-[-0.02em] text-[#0a0a36]'>
                                    {item.name}
                                </h3>
                                <p className='mt-3 text-pretty text-[13px] leading-[1.7] text-[#0a0a36]/65'>
                                    {item.body}
                                </p>

                                <ul className='mt-5 space-y-2'>
                                    {item.specs.map((spec) => (
                                        <li key={spec} className='flex items-start gap-2.5 text-[11.5px] leading-[1.5] text-[#0a0a36]/60'>
                                            <span className='mt-[7px] h-1 w-1 shrink-0 bg-[#0270c2]' aria-hidden='true' />
                                            {spec}
                                        </li>
                                    ))}
                                </ul>

                                <Link
                                    href={localePath(locale, item.href)}
                                    className='mt-6 inline-flex items-center justify-between gap-2 border-t border-[#0a0a36]/12 pt-4 text-[12.5px] font-semibold text-[#0a0a36] transition-colors hover:text-[#0270c2]'
                                >
                                    {item.cta}
                                    <ArrowUpRight size={15} aria-hidden='true' />
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>

                <p className='mt-8 border-t border-[#0a0a36]/12 pt-4 text-[12px] leading-[1.6] text-[#0a0a36]/55'>
                    {content.note}
                </p>
            </div>
        </section>
    )
}
