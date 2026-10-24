import type { Metadata } from 'next'

import { routing } from '../../i18n/routing'
import { pageKeywords, productKeywords, SITE_KEYWORDS, type SeoPage } from './keywords'

/**
 * Canonical origin of the public site (apex, no www — www is permanently
 * redirected here by next.config.ts).
 * Keep in sync with `metadataBase` in app/[locale]/layout.tsx.
 */
export const SITE_URL = 'https://jinjiutech.com'

/**
 * Site-wide keyword fallback. Google ignores the keywords meta tag, so the
 * page-level entries in ./keywords.ts are also the terminology source for
 * titles, descriptions and on-page copy. Re-exported here so existing imports
 * from '@/lib/seo' keep working.
 */
export { SITE_KEYWORDS }

/**
 * Absolute canonical URL for a locale + path pair.
 * The home page lives at /<locale> (no trailing slash) — /<locale>/ redirects to it.
 */
export function localeUrl(locale: string, path: string) {
    return `${SITE_URL}/${locale}${path === '/' ? '' : path}`
}

/** hreflang map for the locales we actually publish this path in. */
export function languageAlternates(path: string, locales: readonly string[] = routing.locales) {
    const languages: Record<string, string> = {}
    for (const locale of locales) languages[locale] = localeUrl(locale, path)
    languages['x-default'] = localeUrl(routing.defaultLocale, path)
    return languages
}

/** Map a route path to the keyword cluster that should own it. */
function pageFromPath(path: string): SeoPage {
    if (path.startsWith('/product')) return 'products'
    if (path.startsWith('/case')) return 'cases'
    if (path.startsWith('/news')) return 'news'
    if (path.startsWith('/about')) return 'about'
    if (path.startsWith('/contact')) return 'contact'
    if (path.startsWith('/honor')) return 'honor'
    if (path.startsWith('/privacy')) return 'privacy'
    return 'home'
}

/**
 * Pick keywords from the route instead of making every caller repeat them.
 * Product detail pages get their own product cluster plus the product name.
 */
function resolveKeywords(locale: string, path: string, title: string): string[] {
    if (path.startsWith('/product/')) {
        const slug = path.split('/')[2] ?? ''
        return productKeywords(locale, slug, title)
    }
    return pageKeywords(locale, pageFromPath(path))
}

/**
 * Metadata for a single page.
 *
 * Everything is derived from `locale` + `path`, which is the whole point: the
 * canonical, the hreflang alternates and `og:url` are computed from one source,
 * so they cannot drift apart. `og:url` always equals the canonical — that is
 * what tells social platforms and search engines the page's own address instead
 * of the site root.
 */
export function pageMetadata({
    locale,
    path,
    title,
    description,
    siteName,
    keywords,
    type = 'website',
    locales,
}: {
    locale: string
    path: string
    title: string
    description: string
    /** Brand name shown by social cards (`seo.brand`). */
    siteName: string
    /** Optional override; defaults to the cluster for this route. */
    keywords?: string[]
    type?: 'website' | 'article'
    /** Locales that actually publish this page; defaults to every locale. */
    locales?: readonly string[]
}): Metadata {
    const url = localeUrl(locale, path)
    return {
        title,
        description,
        keywords: keywords ?? resolveKeywords(locale, path, title),
        alternates: { canonical: url, languages: languageAlternates(path, locales) },
        openGraph: {
            url,
            title,
            description,
            siteName,
            locale,
            type,
        },
    }
}
