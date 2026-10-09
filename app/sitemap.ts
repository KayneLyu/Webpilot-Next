import type { MetadataRoute } from 'next'

import { routing } from '../i18n/routing'
import { getAllNews } from './lib/news'
import { localeUrl, languageAlternates } from './lib/seo'

/** Pages that exist in every locale. */
const STATIC_PAGES = [
    { path: '/', priority: 1.0, changeFrequency: 'weekly' },
    { path: '/product', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/case', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/about', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/contact', priority: 0.8, changeFrequency: 'yearly' },
    { path: '/news', priority: 0.7, changeFrequency: 'weekly' },
    { path: '/honor', priority: 0.6, changeFrequency: 'yearly' },
    { path: '/privacy-policy', priority: 0.2, changeFrequency: 'yearly' },
] as const

/**
 * Product detail slugs — mirrors the `products` array in
 * app/[locale]/product/page.tsx. Keep the two in sync when a product is added
 * or renamed (the slug is also the /products/<slug>.png file name).
 */
const PRODUCT_SLUGS = [
    'automatic_air_ring',
    'lift_automatic_air_ring',
    'Cross-Direction_Scanning_Thickness_Gauge',
    'rotary_thickness_gauge',
    'X-Ray_rotary_thickness_gauge',
    'dosing',
    'single_Loss-in-Weight',
    'solutions',
] as const

type ChangeFrequency = NonNullable<MetadataRoute.Sitemap[number]['changeFrequency']>

function toDate(value: unknown): Date | undefined {
    const date = value instanceof Date ? value : typeof value === 'string' ? new Date(value) : undefined
    return date && !Number.isNaN(date.getTime()) ? date : undefined
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const entries: MetadataRoute.Sitemap = []

    /** Adds one path for every locale it is available in. */
    const addPage = (
        path: string,
        locales: readonly string[],
        priority: number,
        changeFrequency: ChangeFrequency,
        lastModified?: Date
    ) => {
        for (const locale of locales) {
            entries.push({
                url: localeUrl(locale, path),
                lastModified,
                changeFrequency,
                priority,
                alternates: { languages: languageAlternates(path, locales) },
            })
        }
    }

    // Static pages and product details are translated into every locale.
    for (const page of STATIC_PAGES) {
        addPage(page.path, routing.locales, page.priority, page.changeFrequency)
    }
    for (const slug of PRODUCT_SLUGS) {
        addPage(`/product/${slug}`, routing.locales, 0.7, 'monthly')
    }

    // News articles come from markdown: zh has its own folder while every other
    // locale reuses the English one (see getAllNews in app/lib/news.ts), so the
    // available slugs can differ per locale - only advertise what really exists.
    const articles = new Map<string, { lastModified?: Date; locales: Set<string> }>()
    for (const locale of routing.locales) {
        for (const item of await getAllNews(locale)) {
            const article = articles.get(item.slug) ?? {
                lastModified: toDate(item.date),
                locales: new Set<string>(),
            }
            article.locales.add(locale)
            articles.set(item.slug, article)
        }
    }

    for (const [slug, article] of articles) {
        addPage(`/news/${slug}`, [...article.locales], 0.6, 'yearly', article.lastModified)
    }

    return entries
}
