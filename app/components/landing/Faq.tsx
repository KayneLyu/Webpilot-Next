'use client'

import { ArrowUpRight, Mail } from 'lucide-react'

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion'
import type { LandingContent } from '@/lib/landing'
import { mailtoHref, whatsappHref } from '@/lib/site'
import { cn } from '@/lib/utils'
import SectionHeading from './SectionHeading'
import { btnPrimary, sectionWrap } from './ui'
import { WhatsAppIcon } from './WhatsAppIcon'

/** 08 — Objection handling, with a short WhatsApp/email escape hatch. */
export default function Faq({ content }: { content: LandingContent['faq'] }) {
    return (
        <section id='faq' className='scroll-mt-24 bg-white py-16 md:py-28'>
            <div className={sectionWrap}>
                <SectionHeading {...content} />

                <div className='mt-12 grid gap-10 md:mt-16 lg:grid-cols-12 lg:gap-12'>
                    <div className='lg:col-span-8'>
                        <Accordion type='single' collapsible className='border-t border-[#0a0a36]/15'>
                            {content.items.map((item, index) => (
                                <AccordionItem
                                    key={item.q}
                                    value={`faq-${index}`}
                                    className='border-b border-[#0a0a36]/15'
                                >
                                    <AccordionTrigger className='items-start gap-4 py-5 text-left text-[14.5px] font-semibold leading-[1.45] text-[#0a0a36] hover:no-underline md:text-[16px] [&>svg]:mr-0 [&>svg]:mt-1 [&>svg]:text-[#0a0a36]/35'>
                                        <span className='flex gap-4'>
                                            <span className='pt-0.5 font-[family-name:var(--font-geist-mono)] text-[10px] tracking-[0.12em] text-[#0270c2]'>
                                                0{index + 1}
                                            </span>
                                            <span>{item.q}</span>
                                        </span>
                                    </AccordionTrigger>
                                    <AccordionContent className='pb-5 pl-9 pr-2 pt-0 text-[13px] leading-[1.8] text-[#0a0a36]/65 md:text-[13.5px]'>
                                        {item.a}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>

                        <p className='mt-5 text-[11px] text-[#0a0a36]/50'>{content.note}</p>
                    </div>

                    <aside className='lg:col-span-4'>
                        <div className='sticky top-28 bg-[#0a0a36] p-6 text-white md:p-7'>
                            <p className='font-[family-name:var(--font-geist-mono)] text-[9.5px] uppercase tracking-[0.22em] text-[#5ec8ff]'>
                                {content.kicker}
                            </p>
                            <h3 className='mt-4 text-balance text-[22px] font-semibold leading-[1.25]'>{content.aside.title}</h3>
                            <p className='mt-3 text-[13px] leading-[1.7] text-white/70'>{content.aside.body}</p>

                            <a
                                href={whatsappHref}
                                target='_blank'
                                rel='noopener noreferrer'
                                className={cn(btnPrimary, 'mt-6 w-full bg-[#0f7a40] hover:bg-[#0b6434]')}
                            >
                                <WhatsAppIcon className='h-[17px] w-[17px]' />
                                {content.aside.whatsapp}
                            </a>

                            <a
                                href={mailtoHref}
                                className='mt-3 flex w-full items-center justify-between gap-2 border border-white/20 px-4 py-3 text-[12.5px] font-medium text-white/80 transition-colors hover:border-white/45 hover:text-white'
                            >
                                <span className='flex items-center gap-2'>
                                    <Mail size={14} aria-hidden='true' />
                                    {content.aside.email}
                                </span>
                                <ArrowUpRight size={14} aria-hidden='true' />
                            </a>
                        </div>
                    </aside>
                </div>
            </div>
        </section>
    )
}
