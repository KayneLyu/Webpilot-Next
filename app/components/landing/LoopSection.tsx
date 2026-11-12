import Image from 'next/image'
import { Cpu, ScanLine, Wind } from 'lucide-react'

import type { LandingContent } from '@/lib/landing'
import SectionHeading from './SectionHeading'
import { sectionWrap } from './ui'

const STEP_ICONS = [ScanLine, Cpu, Wind]

/**
 * 03 — Closed-loop principle.
 *
 * The three steps are the actual control chain (gauge → controller → air ring).
 * The controller screenshot underneath shows the resulting profile against the
 * target, so the outcome is evidence rather than a marketing claim.
 */
export default function LoopSection({ content }: { content: LandingContent['loop'] }) {
    return (
        <section id='loop' className='scroll-mt-24 bg-[#0a0a36] py-16 text-white md:py-28'>
            <div className={sectionWrap}>
                <SectionHeading {...content} inverted />

                <div className='mt-12 md:mt-18'>
                    <div className='relative'>
                        <div className='absolute left-0 right-0 top-6 hidden h-px bg-white/15 md:block' aria-hidden='true'>
                            <span className='lp-flow-dot absolute -top-[2px] h-[5px] w-[5px] rounded-full bg-[#5ec8ff] shadow-[0_0_14px_2px_rgba(94,200,255,0.55)]' />
                        </div>

                        <div className='grid gap-12 md:grid-cols-3 md:gap-8'>
                            {content.steps.map((step, index) => {
                                const Icon = STEP_ICONS[index] ?? ScanLine
                                return (
                                    <div key={step.title} className='relative'>
                                        <div className='relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-[#5ec8ff]/40 bg-[#0a0a36]'>
                                            <Icon size={19} className='text-[#5ec8ff]' aria-hidden='true' />
                                        </div>

                                        <p className='mt-6 font-[family-name:var(--font-geist-mono)] text-[10px] uppercase tracking-[0.24em] text-[#5ec8ff]'>
                                            0{index + 1} / {step.tag}
                                        </p>
                                        <h3 className='mt-3 text-balance text-[21px] font-semibold leading-[1.2] tracking-[-0.02em] text-white'>
                                            {step.title}
                                        </h3>
                                        <p className='mt-3 text-pretty text-[13.5px] leading-[1.75] text-white/65'>
                                            {step.body}
                                        </p>
                                        <p className='mt-5 inline-flex border border-white/15 px-2.5 py-1.5 font-[family-name:var(--font-geist-mono)] text-[10px] tracking-[0.08em] text-white/65'>
                                            {step.spec}
                                        </p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    <div className='mt-14 border border-white/15 bg-white/[0.03] p-5 md:mt-16 md:p-8'>
                        <div className='flex flex-wrap items-start justify-between gap-x-8 gap-y-4'>
                            <h3 className='max-w-md text-balance text-[17px] font-semibold leading-[1.35] text-white md:text-[19px]'>
                                {content.chart.title}
                            </h3>
                            <div className='flex flex-wrap items-center gap-5'>
                                <span className='flex items-center gap-2 text-[10.5px] uppercase tracking-[0.12em] text-white/55'>
                                    <span className='h-[2px] w-6 bg-[#7b83a8]' aria-hidden='true' />
                                    {content.chart.manualLabel}
                                </span>
                                <span className='flex items-center gap-2 text-[10.5px] uppercase tracking-[0.12em] text-white/75'>
                                    <span className='h-[2px] w-6 bg-[#5ec8ff]' aria-hidden='true' />
                                    {content.chart.closedLabel}
                                </span>
                                <span className='flex items-center gap-2 border border-[#5ec8ff]/30 px-2 py-1 font-[family-name:var(--font-geist-mono)] text-[9.5px] uppercase tracking-[0.16em] text-[#5ec8ff]'>
                                    <span className='h-1.5 w-1.5 animate-pulse rounded-full bg-[#5ec8ff] motion-reduce:animate-none' aria-hidden='true' />
                                    {content.badge}
                                </span>
                            </div>
                        </div>

                        {/* Real controller screen supplied by the client. The
                            light frame keeps the UI labels legible against the
                            dark section instead of letting the screenshot float. */}
                        <div className='mt-8 overflow-hidden rounded-md border border-white/10 bg-white shadow-[0_18px_50px_rgba(0,0,0,0.25)]'>
                            <Image
                                src='/case/charts_case.webp'
                                alt={`${content.chart.title}. ${content.chart.closedLabel}`}
                                width={1000}
                                height={519}
                                sizes='(min-width: 1280px) 1100px, (min-width: 768px) 90vw, 100vw'
                                quality={90}
                                className='block h-auto w-full'
                            />
                        </div>

                        <p className='mt-5 border-t border-white/10 pt-4 text-[11px] leading-[1.6] text-white/50'>
                            {content.chart.caption}
                        </p>
                    </div>

                    <p className='mt-8 max-w-2xl text-[13.5px] leading-[1.75] text-white/65 md:text-[14px]'>
                        {content.note}
                    </p>
                </div>
            </div>
        </section>
    )
}
