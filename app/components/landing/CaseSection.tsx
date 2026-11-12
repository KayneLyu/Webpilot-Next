import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, Info } from 'lucide-react'

import type { LandingContent, LandingLocale } from '@/lib/landing'
import SectionHeading from './SectionHeading'
import { sectionWrap } from './ui'

/** 05 — One featured retrofit with measured before/after data, plus two shorts. */
export default function CaseSection({
    content,
    locale,
}: {
    content: LandingContent['cases']
    locale: LandingLocale
}) {
    const featured = content.featured

    return (
        <section id='cases' className='scroll-mt-24 bg-[#f4f1ec] py-16 md:py-28'>
            <div className={sectionWrap}>
                <SectionHeading {...content} />

                <div className='mt-12 border border-[#0a0a36]/12 bg-white md:mt-16'>
                    <div className='grid lg:grid-cols-12'>
                        <div className='relative min-h-[300px] overflow-hidden lg:col-span-5 lg:min-h-full'>
                            <Image
                                src={featured.photo}
                                alt={featured.photoAlt}
                                fill
                                sizes='(min-width: 1024px) 42vw, 100vw'
                                className='object-cover'
                            />
                            <div className='absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#07072a] via-[#07072a]/55 to-transparent p-5 pt-16'>
                                <p className='text-[11.5px] leading-[1.5] text-white/75'>{featured.photoCaption}</p>
                            </div>
                        </div>

                        <div className='p-6 sm:p-8 lg:col-span-7 lg:p-10'>
                            <p className='font-[family-name:var(--font-geist-mono)] text-[9.5px] uppercase leading-[1.6] tracking-[0.18em] text-[#0270c2]'>
                                {featured.tag}
                            </p>
                            <h3 className='mt-4 text-balance text-[26px] font-semibold leading-[1.15] tracking-[-0.025em] text-[#0a0a36] md:text-[32px]'>
                                {featured.title}
                            </h3>
                            <p className='mt-4 text-pretty text-[13.5px] leading-[1.75] text-[#0a0a36]/65'>
                                {featured.body}
                            </p>

                            <div className='mt-7 border-t border-[#0a0a36]/12'>
                                <div className='hidden grid-cols-[1.6fr_1fr_1fr_auto] gap-4 pb-2 pt-3 font-[family-name:var(--font-geist-mono)] text-[9px] uppercase tracking-[0.14em] text-[#0a0a36]/50 sm:grid'>
                                    <span>{content.tableHead.metric}</span>
                                    <span>{content.tableHead.before}</span>
                                    <span>{content.tableHead.after}</span>
                                    <span className='text-right'>{content.tableHead.change}</span>
                                </div>
                                <div className='divide-y divide-[#0a0a36]/10 border-y border-[#0a0a36]/10'>
                                    {featured.metrics.map((metric) => (
                                        <div
                                            key={metric.label}
                                            className='grid grid-cols-[1fr_1fr_auto] items-baseline gap-x-4 gap-y-1 py-3 sm:grid-cols-[1.6fr_1fr_1fr_auto]'
                                        >
                                            <span className='col-span-3 text-[12px] leading-[1.5] text-[#0a0a36]/70 sm:col-span-1'>
                                                {metric.label}
                                            </span>
                                            <span className='font-[family-name:var(--font-geist-mono)] text-[12.5px] text-[#0a0a36]/55 line-through decoration-[#0a0a36]/30'>
                                                {metric.before}
                                            </span>
                                            <span className='font-[family-name:var(--font-geist-mono)] text-[14px] font-semibold text-[#0a0a36]'>
                                                {metric.after}
                                            </span>
                                            <span className='justify-self-end whitespace-nowrap border border-[#0f6b3c]/20 bg-[#eaf5ee] px-2 py-0.5 font-[family-name:var(--font-geist-mono)] text-[10px] font-medium text-[#0f6b3c]'>
                                                {metric.delta}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <dl className='mt-6 grid grid-cols-2 gap-x-6 gap-y-3'>
                                {featured.params.map((param) => (
                                    <div key={param.label}>
                                        <dt className='text-[9.5px] uppercase tracking-[0.14em] text-[#0a0a36]/50'>
                                            {param.label}
                                        </dt>
                                        <dd className='mt-1 text-[12px] font-medium leading-[1.4] text-[#0a0a36]/80'>
                                            {param.value}
                                        </dd>
                                    </div>
                                ))}
                            </dl>

                            <p className='mt-6 flex items-start gap-2 border-t border-[#0a0a36]/10 pt-4 text-[11.5px] leading-[1.6] text-[#0a0a36]/50'>
                                <Info size={13} className='mt-0.5 shrink-0' aria-hidden='true' />
                                {featured.note}
                            </p>
                        </div>
                    </div>
                </div>

                <div className='mt-6 grid gap-6 sm:grid-cols-2'>
                    {content.mini.map((item) => (
                        <article key={item.tag} className='group border border-[#0a0a36]/12 bg-white'>
                            <div className='relative aspect-[16/9] overflow-hidden'>
                                <Image
                                    src={item.image}
                                    alt={item.imageAlt}
                                    fill
                                    sizes='(min-width: 640px) 50vw, 100vw'
                                    className='object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]'
                                />
                                <div className='absolute inset-0 bg-gradient-to-t from-[#07072a]/70 via-transparent to-transparent' />
                                <p className='absolute bottom-4 left-5 right-5 font-[family-name:var(--font-geist-mono)] text-[9px] uppercase leading-[1.6] tracking-[0.16em] text-white/80'>
                                    {item.tag}
                                </p>
                            </div>
                            <div className='flex flex-wrap items-center justify-between gap-3 p-5'>
                                <h3 className='text-[16px] font-semibold leading-[1.3] text-[#0a0a36]'>{item.title}</h3>
                                <p className='font-[family-name:var(--font-geist-mono)] text-[10.5px] text-[#0270c2]'>
                                    {item.result}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>

                <div className='mt-8 flex flex-col gap-4 border-t border-[#0a0a36]/15 pt-5 sm:flex-row sm:items-center sm:justify-between'>
                    <p className='flex max-w-2xl items-start gap-2 text-[11px] leading-[1.65] text-[#0a0a36]/55'>
                        <Info size={13} className='mt-0.5 shrink-0' aria-hidden='true' />
                        {content.disclaimer}
                    </p>
                    <Link
                        href={`/${locale}${content.cta.href}`}
                        className='group inline-flex shrink-0 items-center gap-2 border-b border-[#0a0a36]/30 pb-1 text-[12.5px] font-semibold text-[#0a0a36] transition-colors hover:border-[#0270c2] hover:text-[#0270c2]'
                    >
                        {content.cta.label}
                        <ArrowUpRight size={14} aria-hidden='true' />
                    </Link>
                </div>
            </div>
        </section>
    )
}
