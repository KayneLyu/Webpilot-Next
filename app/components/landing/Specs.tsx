import { ArrowDown } from 'lucide-react'

import type { LandingContent } from '@/lib/landing'
import SectionHeading from './SectionHeading'
import { sectionWrap } from './ui'

/** 07 — Fit range, air-ring model table and the five numbers we need to quote. */
export default function Specs({ content }: { content: LandingContent['specs'] }) {
    return (
        <section id='specs' className='scroll-mt-24 bg-[#f4f1ec] py-16 md:py-28'>
            <div className={sectionWrap}>
                <SectionHeading {...content} />

                <div className='mt-12 grid gap-10 md:mt-16 lg:grid-cols-12 lg:gap-12'>
                    <dl className='min-w-0 lg:col-span-5'>
                        {content.fit.map((row) => (
                            <div
                                key={row.label}
                                className='grid grid-cols-[104px_1fr] gap-4 border-b border-[#0a0a36]/12 py-3.5 first:border-t first:border-[#0a0a36]/12'
                            >
                                <dt className='text-[10px] uppercase leading-[1.5] tracking-[0.13em] text-[#0a0a36]/55'>
                                    {row.label}
                                </dt>
                                <dd className='text-[13px] leading-[1.55] text-[#0a0a36]/85'>{row.value}</dd>
                            </div>
                        ))}
                    </dl>

                    <div className='min-w-0 lg:col-span-7'>
                        <h3 className='font-[family-name:var(--font-geist-mono)] text-[10px] uppercase tracking-[0.2em] text-[#0a0a36]/45'>
                            {content.table.caption}
                        </h3>

                        <div className='mt-3 overflow-x-auto border border-[#0a0a36]/12 bg-white'>
                            <table className='w-full min-w-[540px] border-collapse text-left'>
                                <caption className='sr-only'>{content.table.caption}</caption>
                                <thead>
                                    <tr className='bg-[#0a0a36] text-white'>
                                        {content.table.columns.map((column) => (
                                            <th
                                                key={column}
                                                scope='col'
                                                className='whitespace-nowrap px-4 py-3 font-[family-name:var(--font-geist-mono)] text-[9.5px] font-medium uppercase tracking-[0.13em] first:pl-5 last:pr-5'
                                            >
                                                {column}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody className='divide-y divide-[#0a0a36]/10'>
                                    {content.table.rows.map((row) => (
                                        <tr key={row[0]} className='transition-colors hover:bg-[#f4f1ec]'>
                                            {row.map((cell, cellIndex) => (
                                                <td
                                                    key={`${row[0]}-${cellIndex}`}
                                                    className={[
                                                        'whitespace-nowrap px-4 py-3 text-[12px] first:pl-5 last:pr-5',
                                                        cellIndex === 0
                                                            ? 'font-[family-name:var(--font-geist-mono)] text-[11.5px] font-medium text-[#0a0a36]'
                                                            : 'text-[#0a0a36]/65',
                                                    ].join(' ')}
                                                >
                                                    {cell}
                                                </td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <p className='mt-2 text-[10px] text-[#0a0a36]/50 sm:hidden'>{content.table.hint}</p>

                        <p className='mt-4 text-[11.5px] leading-[1.65] text-[#0a0a36]/55'>{content.note}</p>

                        <a
                            href={content.cta.href}
                            className='mt-6 inline-flex items-center gap-2 border-b border-[#0270c2]/50 pb-1 text-[12.5px] font-semibold text-[#0270c2] transition-colors hover:border-[#0270c2]'
                        >
                            {content.cta.label}
                            <ArrowDown size={14} aria-hidden='true' />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
