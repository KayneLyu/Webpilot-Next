import type { Metadata } from 'next'

import { routing } from '../../i18n/routing'

/**
 * Canonical origin of the public site (apex, no www — www is permanently
 * redirected here by next.config.ts).
 * Keep in sync with `metadataBase` in app/[locale]/layout.tsx.
 */
export const SITE_URL = 'https://jinjiutech.com'

/** Site-wide keywords. Google ignores them; Bing gives them little weight. */
export const SITE_KEYWORDS = [
    'air ring',
    'auto air ring',
    'automatic air ring',
    '风环',
    '自动风环',
    '测厚仪',
    '吹膜机',
    '吹膜自动化',
    'jinjiu',
    '金久',
]

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
    keywords = SITE_KEYWORDS,
    type = 'website',
    locales,
}: {
    locale: string
    path: string
    title: string
    description: string
    /** Brand name shown by social cards (`seo.brand`). */
    siteName: string
    keywords?: string[]
    type?: 'website' | 'article'
    /** Locales that actually publish this page; defaults to every locale. */
    locales?: readonly string[]
}): Metadata {
    const url = localeUrl(locale, path)
    return {
        title,
        description,
        keywords,
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
