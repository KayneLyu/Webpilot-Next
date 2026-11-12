import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTranslations } from 'next-intl/server'

import Hero from '@/components/landing/Hero'
import PainPoints from '@/components/landing/PainPoints'
import LoopSection from '@/components/landing/LoopSection'
import ProductStack from '@/components/landing/ProductStack'
import CaseSection from '@/components/landing/CaseSection'
import Advantages from '@/components/landing/Advantages'
import Specs from '@/components/landing/Specs'
import Faq from '@/components/landing/Faq'
import QuoteForm from '@/components/landing/QuoteForm'
import FinalCta from '@/components/landing/FinalCta'
import {
    LANDING_PATH,
    LP_LOCALES,
    getLandingContent,
    isLandingLocale,
} from '@/lib/landing'
import { pageMetadata, SITE_URL } from '@/lib/seo'
import { siteContact } from '@/lib/site'

/**
 * Paid landing pages are deliberately `noindex`: the page exists to convert ad
 * traffic, and indexing it would put it in competition with the product and
 * homepage copy that already targets the same queries. `follow` stays on so
 * the product links still pass equity.
 */
export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>
}): Promise<Metadata> {
    const { locale } = await params
    if (!isLandingLocale(locale)) return {}

    const content = getLandingContent(locale)
    const t = await getTranslations({ locale })
    const meta = pageMetadata({
        locale,
        path: LANDING_PATH,
        title: content.meta.title,
        description: content.meta.description,
        siteName: t('seo.brand'),
        keywords: content.meta.keywords,
        locales: LP_LOCALES,
    })

    return {
        ...meta,
        // Absolute so the locale layout's `%s | brand` template does not push
        // the title past the snippet length.
        title: { absolute: content.meta.title },
        robots: { index: false, follow: true },
        openGraph: {
            ...meta.openGraph,
            images: [
                {
                    url: `${SITE_URL}/case/automatic_air_ring_1.webp`,
                    alt: content.hero.videoAlt,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: content.meta.title,
            description: content.meta.description,
            images: [`${SITE_URL}/case/automatic_air_ring_1.webp`],
        },
    }
}

export default async function AutomaticAirRingLandingPage({
    params,
}: {
    params: Promise<{ locale: string }>
}) {
    const { locale } = await params
    if (!isLandingLocale(locale)) notFound()

    const content = getLandingContent(locale)
    const pageUrl = `${SITE_URL}/${locale}${LANDING_PATH}`

    const jsonLd = {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'Organization',
                '@id': `${SITE_URL}/#organization`,
                name: content.footer.company,
                alternateName: 'JINJIU Automation',
                url: SITE_URL,
                logo: `${SITE_URL}/apple-touch-icon.png`,
                email: siteContact.email,
                telephone: siteContact.tels[0].label,
                address: {
                    '@type': 'PostalAddress',
                    streetAddress: content.footer.address,
                    addressLocality: 'Dongguan',
                    addressRegion: 'Guangdong',
                    addressCountry: 'CN',
                },
            },
            {
                '@type': 'Product',
                name:
                    locale === 'zh'
                        ? '吹膜自动风环与厚度闭环控制系统'
                        : 'Automatic Air Ring for Blown Film',
                description: content.meta.description,
                image: [`${SITE_URL}/products/automatic_air_ring.png`],
                brand: { '@type': 'Brand', name: 'JINJIU' },
                manufacturer: { '@id': `${SITE_URL}/#organization` },
                url: pageUrl,
            },
            {
                '@type': 'FAQPage',
                mainEntity: content.faq.items.map((item) => ({
                    '@type': 'Question',
                    name: item.q,
                    acceptedAnswer: { '@type': 'Answer', text: item.a },
                })),
            },
        ],
    }

    return (
        <>
            <script
                type='application/ld+json'
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
            />
            <Hero content={content.hero} />
            <PainPoints content={content.pains} />
            <LoopSection content={content.loop} />
            <ProductStack content={content.products} locale={locale} />
            <CaseSection content={content.cases} locale={locale} />
            <Advantages content={content.advantages} />
            <Specs content={content.specs} />
            <Faq content={content.faq} />
            <QuoteForm content={content.form} locale={locale} />
            <FinalCta content={content.final} />
        </>
    )
}
