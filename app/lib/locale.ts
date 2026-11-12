import { routing } from '../../i18n/routing'

/**
 * Prefix an internal path with the active locale.
 *
 * English is the default locale and lives on the bare domain, so `/about` is
 * English and `/zh/about` is Chinese. Every internal link in the app goes
 * through this helper (via <Links>) instead of hand-building `/${locale}/...`,
 * which would produce `/en/about` and a redirect on every click.
 */
export function localePath(locale: string, href: string) {
    // External URLs, hashes, mailto: and tel: are not localized.
    if (!href.startsWith('/')) return href

    if (locale === routing.defaultLocale) {
        return href
    }

    return `/${locale}${href === '/' ? '' : href}`
}
