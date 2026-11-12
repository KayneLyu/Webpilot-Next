import Link from 'next/link'
import Image from 'next/image'
import { ArrowUp, Mail, MapPin, Phone } from 'lucide-react'

import Logo from '@/assets/images/logo/logo.webp'
import type { LandingContent, LandingLocale } from '@/lib/landing'
import { localePath } from '@/lib/locale'
import { mailtoHref, siteContact, whatsappHref } from '@/lib/site'
import { sectionWrap } from './ui'
import { WhatsAppIcon } from './WhatsAppIcon'

/**
 * Compact legal / contact footer. It carries the business identity Google's
 * landing-page policy expects (company, address, email, phone) without the
 * full site's navigation.
 */
export default function LandingFooter({
    content,
    locale,
}: {
    content: LandingContent['footer']
    locale: LandingLocale
}) {
    const year = new Date().getFullYear()
    const phone = siteContact.mobiles[0]

    return (
        <footer className='bg-[#07072a] pb-28 pt-14 text-white md:pb-12 md:pt-16'>
            <div className={sectionWrap}>
                <div className='grid gap-10 border-b border-white/12 pb-12 md:grid-cols-12 md:gap-8'>
                    <div className='md:col-span-5'>
                        <Image src={Logo} alt='JINJIU Automation' className='h-9 w-auto brightness-0 invert' />
                        <p className='mt-5 max-w-xs text-[13px] leading-[1.7] text-white/65'>{content.tagline}</p>
                        <p className='mt-6 text-[13px] font-medium text-white/80'>{content.company}</p>
                        <address className='mt-2 flex max-w-sm items-start gap-2 text-[12.5px] not-italic leading-[1.7] text-white/60'>
                            <MapPin size={14} className='mt-0.5 shrink-0' aria-hidden='true' />
                            <span>{content.address}</span>
                        </address>
                    </div>

                    <div className='md:col-span-4 md:col-start-7'>
                        <p className='font-[family-name:var(--font-geist-mono)] text-[10px] uppercase tracking-[0.24em] text-white/40'>
                            {content.emailLabel} / {content.phoneLabel}
                        </p>
                        <div className='mt-4 flex flex-col gap-3 text-[13.5px]'>
                            <a href={mailtoHref} className='flex items-center gap-2.5 text-white/80 transition-colors hover:text-white'>
                                <Mail size={15} aria-hidden='true' />
                                {siteContact.email}
                            </a>
                            <a href={`tel:${phone.tel}`} className='flex items-center gap-2.5 text-white/80 transition-colors hover:text-white'>
                                <Phone size={15} aria-hidden='true' />
                                {phone.label}
                            </a>
                            <a
                                href={whatsappHref}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='flex items-center gap-2.5 text-white/80 transition-colors hover:text-white'
                            >
                                <WhatsAppIcon className='h-[15px] w-[15px]' />
                                {content.whatsappLabel}
                            </a>
                        </div>
                    </div>

                    <div className='md:col-span-2'>
                        <p className='font-[family-name:var(--font-geist-mono)] text-[10px] uppercase tracking-[0.24em] text-white/40'>
                            {content.linksLabel}
                        </p>
                        <div className='mt-4 flex flex-col gap-3 text-[13.5px]'>
                            <Link href={localePath(locale, '/')} className='text-white/70 transition-colors hover:text-white'>
                                {content.mainSite}
                            </Link>
                            <Link href={localePath(locale, '/case')} className='text-white/70 transition-colors hover:text-white'>
                                {content.caseLabel}
                            </Link>
                            <Link href={localePath(locale, '/privacy-policy')} className='text-white/70 transition-colors hover:text-white'>
                                {content.privacy}
                            </Link>
                            <a href='#top' className='mt-2 inline-flex items-center gap-1.5 text-white/55 transition-colors hover:text-white'>
                                <ArrowUp size={13} aria-hidden='true' />
                                {content.backToTop}
                            </a>
                        </div>
                    </div>
                </div>

                <p className='pt-6 text-[11.5px] leading-[1.6] text-white/50'>
                    {content.copyright.replace('{year}', String(year))}
                </p>
            </div>
        </footer>
    )
}
