import { notFound } from 'next/navigation'
import type { ReactNode } from 'react'

import LandingHeader from '@/components/landing/LandingHeader'
import LandingFooter from '@/components/landing/LandingFooter'
import LandingSectionNav from '@/components/landing/LandingSectionNav'
import StickyCta from '@/components/landing/StickyCta'
import { getLandingContent, isLandingLocale } from '@/lib/landing'

/**
 * Standalone shell for paid-traffic landing pages.
 *
 * It intentionally does not render the site header, footer, back-to-top button
 * or floating contact rail: every link that is not the quote form, WhatsApp,
 * email or a product detail is a way for an ad click to leave the funnel.
 */
export default async function LandingLayout({
    children,
    params,
}: {
    children: ReactNode
    params: Promise<{ locale: string }>
}) {
    const { locale } = await params
    if (!isLandingLocale(locale)) notFound()

    const content = getLandingContent(locale)

    return (
        <div className='min-h-screen bg-[#f4f1ec] font-[family-name:var(--font-Public-Sans)] text-[#0a0a36] antialiased'>
            <LandingHeader content={content.header} locale={locale} />
            <main>{children}</main>
            <LandingFooter content={content.footer} locale={locale} />
            <StickyCta content={content.sticky} />
            <LandingSectionNav content={content.nav} />
        </div>
    )
}
