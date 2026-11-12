import Image from 'next/image'
import Link from 'next/link'
import { Globe2, Phone } from 'lucide-react'

import Logo from '@/assets/images/logo/logo.webp'
import { LANDING_PATH, type LandingContent, type LandingLocale } from '@/lib/landing'
import { localePath } from '@/lib/locale'
import { siteContact } from '@/lib/site'
import { btnPrimary, sectionWrap } from './ui'

/**
 * Focused header: identity, language, phone and one action. The site-wide
 * navigation is deliberately absent so an ad click has nowhere else to go.
 */
export default function LandingHeader({
    content,
    locale,
}: {
    content: LandingContent['header']
    locale: LandingLocale
}) {
    const otherLocale: LandingLocale = locale === 'en' ? 'zh' : 'en'
    const phone = siteContact.mobiles[0]

    return (
        <header className='sticky top-0 z-40 border-b border-[#0a0a36]/10 bg-[#f4f1ec]/90 backdrop-blur-md'>
            <div className={`${sectionWrap} flex h-16 items-center justify-between gap-4 md:h-20`}>
                <Link href={localePath(locale, '/')} aria-label={content.mainSite} className='flex shrink-0 items-center'>
                    <Image src={Logo} alt='JINJIU Automation' className='h-12 w-auto md:h-14' priority />
                </Link>

                <div className='flex items-center gap-1.5 sm:gap-3'>
                    <a
                        href={`tel:${phone.tel}`}
                        className='hidden items-center gap-2 text-[13px] font-medium text-[#0a0a36]/70 transition-colors hover:text-[#0a0a36] md:flex'
                    >
                        <Phone size={14} aria-hidden='true' />
                        {phone.label}
                    </a>

                    <Link
                        href={localePath(otherLocale, LANDING_PATH)}
                        hrefLang={otherLocale}
                        aria-label={content.switchLabel}
                        className='flex items-center gap-1.5 whitespace-nowrap px-2 py-2 text-[13px] font-semibold text-[#0a0a36]/70 transition-colors hover:text-[#0a0a36]'
                    >
                        <Globe2 size={15} aria-hidden='true' />
                        {content.switchTo}
                    </Link>

                    <a href='#quote' className={`${btnPrimary} whitespace-nowrap px-4 py-2.5 text-[13px]`}>
                        {content.quote}
                    </a>
                </div>
            </div>
        </header>
    )
}
