import { ArrowUpRight, Mail, Phone } from 'lucide-react'

import type { LandingContent } from '@/lib/landing'
import { mailtoHref, siteContact, whatsappHref } from '@/lib/site'
import { sectionWrap } from './ui'
import { WhatsAppIcon } from './WhatsAppIcon'

/** 10 — Final call to action, repeat form entry plus direct channels. */
export default function FinalCta({ content }: { content: LandingContent['final'] }) {
    const phone = siteContact.mobiles[0]

    return (
        <section id='next-step' className='relative scroll-mt-24 overflow-hidden bg-[#0270c2] py-16 text-white md:py-24'>
            <div className='lp-blueprint pointer-events-none absolute inset-0 opacity-20' aria-hidden='true' />
            <div
                className='pointer-events-none absolute -right-24 -top-24 h-[420px] w-[420px] rounded-full bg-[#5ec8ff]/20 blur-[120px]'
                aria-hidden='true'
            />

            <div className={`${sectionWrap} relative`}>
                <div className='flex items-center gap-4 border-t border-white/30 pt-4'>
                    <span className='font-[family-name:var(--font-geist-mono)] text-[11px] tracking-[0.24em] text-white/80'>
                        /{content.index}
                    </span>
                    <span className='font-[family-name:var(--font-geist-mono)] text-[11px] uppercase tracking-[0.22em] text-white/65'>
                        {content.kicker}
                    </span>
                </div>

                <div className='mt-8 grid gap-10 lg:grid-cols-12 lg:items-end'>
                    <div className='lg:col-span-8'>
                        <h2 className='max-w-3xl text-balance text-[32px] font-semibold leading-[1.08] tracking-[-0.03em] sm:text-[42px] md:text-[52px]'>
                            {content.title}
                        </h2>
                        <p className='mt-5 max-w-xl text-pretty text-[14.5px] leading-[1.7] text-white/85'>
                            {content.body}
                        </p>

                        <div className='mt-8 flex flex-col gap-3 sm:flex-row'>
                            <a
                                href={content.primary.href}
                                className='inline-flex items-center justify-center gap-2.5 bg-white px-6 py-3.5 text-[15px] font-semibold leading-none text-[#0a0a36] transition-colors hover:bg-[#f4f1ec]'
                            >
                                {content.primary.label}
                                <ArrowUpRight size={16} aria-hidden='true' />
                            </a>
                            <a
                                href={whatsappHref}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='inline-flex items-center justify-center gap-2.5 border border-white/45 bg-white/5 px-6 py-3.5 text-[15px] font-semibold leading-none text-white transition-colors hover:border-white hover:bg-white/10'
                            >
                                <WhatsAppIcon className='h-[17px] w-[17px]' />
                                {content.secondary.label}
                            </a>
                        </div>

                        <p className='mt-6 text-[10.5px] uppercase tracking-[0.16em] text-white/75'>{content.micro}</p>
                    </div>

                    <div className='lg:col-span-4'>
                        <div className='space-y-5 border-t border-white/30 pt-5'>
                            <a href={mailtoHref} className='group flex items-start justify-between gap-4'>
                                <span>
                                    <span className='block font-[family-name:var(--font-geist-mono)] text-[9.5px] uppercase tracking-[0.2em] text-white/55'>
                                        {content.emailLabel}
                                    </span>
                                    <span className='mt-1.5 flex items-center gap-2 text-[14px] font-medium text-white group-hover:underline'>
                                        <Mail size={14} aria-hidden='true' />
                                        {siteContact.email}
                                    </span>
                                </span>
                                <ArrowUpRight size={16} className='mt-4 text-white/50' aria-hidden='true' />
                            </a>

                            <a href={`tel:${phone.tel}`} className='group flex items-start justify-between gap-4 border-t border-white/20 pt-5'>
                                <span>
                                    <span className='block font-[family-name:var(--font-geist-mono)] text-[9.5px] uppercase tracking-[0.2em] text-white/55'>
                                        {content.phoneLabel}
                                    </span>
                                    <span className='mt-1.5 flex items-center gap-2 text-[14px] font-medium text-white group-hover:underline'>
                                        <Phone size={14} aria-hidden='true' />
                                        {phone.label}
                                    </span>
                                </span>
                                <ArrowUpRight size={16} className='mt-4 text-white/50' aria-hidden='true' />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
