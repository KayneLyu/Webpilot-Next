/**
 * Keyword clusters for the public site.
 *
 * Important: Google ignores <meta name="keywords">. These lists exist so the
 * same terminology is reused consistently in the places Google *does* read —
 * page titles, descriptions, H1/H2 headings, body copy, image alt text and
 * internal links. Do not treat the array length as a ranking lever.
 *
 * English terms follow how overseas blown-film buyers actually search:
 * - "automatic air ring" / "auto air ring" (the product category)
 * - "air ring for blown film" / "blown film air ring" (application)
 * - "blown film thickness control" / "film thickness gauge" (the outcome)
 * - "gravimetric dosing system" / "loss-in-weight feeder" (adjacent products)
 *
 * Keep every term here backed by real page content. Adding a keyword that the
 * page never mentions is both useless for Google and bad for conversion.
 */

export type SeoPage =
    | 'home'
    | 'about'
    | 'products'
    | 'cases'
    | 'news'
    | 'contact'
    | 'honor'
    | 'privacy'

/** Core English keyword clusters, mapped to the page that should own them. */
export const PAGE_KEYWORDS: Record<SeoPage, string[]> = {
    home: [
        'automatic air ring',
        'auto air ring',
        'air ring for blown film',
        'blown film air ring',
        'air ring control system',
        'blown film thickness control',
        'film thickness control system',
        'automatic air ring manufacturer',
        'blown film automation',
        'blown film machine air ring',
    ],
    about: [
        'automatic air ring manufacturer',
        'auto air ring supplier',
        'air ring manufacturer China',
        'blown film automation company',
        'blown film equipment supplier',
        'JINJIU Automation',
    ],
    products: [
        'blown film air ring',
        'automatic air ring',
        'auto air ring system',
        'air ring control system',
        'blown film thickness gauge',
        'online thickness gauge',
        'cross direction thickness gauge',
        'rotary thickness gauge',
        'X-ray thickness gauge',
        'gravimetric dosing system',
        'loss-in-weight feeder',
        'blown film control system',
    ],
    cases: [
        'automatic air ring application',
        'auto air ring case study',
        'blown film thickness control',
        'blown film line upgrade',
        'film thickness uniformity',
        'blown film production efficiency',
    ],
    news: [
        'blown film industry news',
        'blown film technology',
        'air ring technology',
        'plastics exhibition',
        'film extrusion news',
    ],
    contact: [
        'automatic air ring quotation',
        'auto air ring supplier',
        'air ring selection',
        'custom air ring solution',
        'blown film automation consultation',
    ],
    honor: [
        'automatic air ring patents',
        'blown film control certifications',
        'air ring manufacturer China',
        'high-tech enterprise',
    ],
    privacy: ['privacy policy', 'JINJIU Automation'],
}

/**
 * Product-level clusters. The slug matches `product/[slug]`.
 * One primary term per product, then supporting synonyms/use cases.
 */
export const PRODUCT_KEYWORDS: Record<string, string[]> = {
    automatic_air_ring: [
        'automatic air ring',
        'auto air ring',
        'air ring for blown film',
        'air volume control',
        'air temperature control',
        'automatic film thickness control',
    ],
    lift_automatic_air_ring: [
        'height adjustable air ring',
        'lift automatic air ring',
        'auto air ring',
        'air ring height adjustment',
        'blown film air ring',
    ],
    'Cross-Direction_Scanning_Thickness_Gauge': [
        'cross direction thickness gauge',
        'traversing thickness gauge',
        'blown film thickness gauge',
        'online film thickness measurement',
        'non-contact thickness gauge',
    ],
    rotary_thickness_gauge: [
        'rotary thickness gauge',
        'ring scanning thickness gauge',
        'blown film thickness measurement',
        'online thickness gauge',
    ],
    'X-Ray_rotary_thickness_gauge': [
        'X-ray thickness gauge',
        'X-ray rotary thickness gauge',
        'non-contact film thickness measurement',
        'blown film thickness gauge',
    ],
    dosing: [
        'gravimetric dosing system',
        'multi-component dosing system',
        'blown film dosing system',
        'gravimetric blender',
        'plastic dosing system',
    ],
    'single_Loss-in-Weight': [
        'loss-in-weight feeder',
        'single loss-in-weight feeder',
        'gravimetric feeding system',
        'blown film gravimetric feeder',
        'extruder feeding system',
    ],
    solutions: [
        'blown film automation',
        'blown film control system',
        'film thickness control solution',
        'air ring automation',
        'blown film line upgrade',
    ],
}

/**
 * Local-language core terms. Meta keywords are ignored by Google, but these
 * keep the tag meaningful for Bing and for the local pages' own terminology.
 * English equivalents are appended for B2B buyers who search in English even
 * on a local-language page.
 */
const LOCALIZED_CORE: Record<string, string[]> = {
    zh: [
        '自动风环',
        '吹膜机风环',
        '薄膜厚度控制',
        '在线测厚仪',
        '称重配料系统',
        '吹膜自动化',
        '自动风环厂家',
        '薄膜测厚仪',
    ],
    ru: [
        'автоматическое воздушное кольцо',
        'воздушное кольцо для выдувной пленки',
        'контроль толщины пленки',
        'автоматический контроль толщины',
        'измеритель толщины пленки',
        'автоматизация выдувной пленки',
        'производитель воздушных колец',
    ],
    ko: [
        '자동 에어 링',
        '블로운 필름 에어 링',
        '필름 두께 제어',
        '자동 두께 제어 시스템',
        '필름 두께 측정기',
        '블로운 필름 자동화',
        '에어 링 제조업체',
    ],
    vi: [
        'vòng gió tự động',
        'vòng gió cho màng thổi',
        'kiểm soát độ dày màng',
        'hệ thống đo độ dày màng',
        'tự động hóa màng thổi',
        'nhà sản xuất vòng gió',
    ],
    tr: [
        'otomatik hava halkası',
        'üfleme film hava halkası',
        'film kalınlık kontrolü',
        'otomatik kalınlık kontrol sistemi',
        'film kalınlık ölçüm cihazı',
        'üfleme film otomasyonu',
        'hava halkası üreticisi',
    ],
}

function dedupe(items: string[]): string[] {
    const seen = new Set<string>()
    return items
        .map((item) => item.trim())
        .filter((item) => {
            if (!item || seen.has(item.toLowerCase())) return false
            seen.add(item.toLowerCase())
            return true
        })
}

/**
 * Keywords for a regular page. English pages get the full English cluster;
 * other locales get their local terms plus the four strongest English terms.
 */
export function pageKeywords(locale: string, page: SeoPage): string[] {
    const english = PAGE_KEYWORDS[page] ?? PAGE_KEYWORDS.home
    if (locale === 'en') return english

    const localized = LOCALIZED_CORE[locale] ?? []
    return dedupe([...localized, ...english.slice(0, 4)])
}

/**
 * Keywords for a product detail page. The product name itself is included
 * because overseas buyers often search the exact product category.
 */
export function productKeywords(locale: string, slug: string, productName: string): string[] {
    const specific = PRODUCT_KEYWORDS[slug] ?? []
    if (locale === 'en') {
        return dedupe([productName, ...specific, ...PAGE_KEYWORDS.products.slice(0, 4)])
    }
    return dedupe([...(LOCALIZED_CORE[locale] ?? []), productName, ...specific.slice(0, 3)])
}

/** Site-wide fallback used by the root metadata. */
export const SITE_KEYWORDS = dedupe([
    ...PAGE_KEYWORDS.home,
    'air ring manufacturer',
    'blown film equipment',
])

/**
 * English-only search titles/descriptions for product detail pages.
 *
 * Why only English: these are written for overseas search intent. Other
 * locales keep their translated product name plus the localized product
 * description, so we never show English copy on a Russian/Korean page.
 * Titles intentionally omit the brand — the locale layout appends it once.
 */
export const PRODUCT_SEO: Record<string, { title: string; description: string }> = {
    automatic_air_ring: {
        title: 'Auto Air Ring for Blown Film',
        description:
            'JINJIU automatic air ring for blown film lines: closed-loop air volume and temperature control, ±2–4% thickness deviation, and 10–20% higher output.',
    },
    lift_automatic_air_ring: {
        title: 'Height-Adjustable Air Ring for Blown Film',
        description:
            'Height-adjustable automatic air ring for blown film: change die height without losing profile control. Improve thickness uniformity and reduce scrap.',
    },
    'Cross-Direction_Scanning_Thickness_Gauge': {
        title: 'Cross-Direction Film Thickness Gauge',
        description:
            'Cross-direction scanning thickness gauge for blown film: real-time full-width thickness measurement and closed-loop control for uniform film.',
    },
    rotary_thickness_gauge: {
        title: 'Rotary Film Thickness Gauge',
        description:
            'Rotary thickness gauge for blown film: 360° ring scanning, real-time feedback, and automatic thickness control for stable production.',
    },
    'X-Ray_rotary_thickness_gauge': {
        title: 'X-Ray Rotary Thickness Gauge',
        description:
            'X-ray rotary thickness gauge for blown film: non-contact, high-precision measurement for LDPE, LLDPE, HDPE and multi-layer film.',
    },
    dosing: {
        title: 'Gravimetric Dosing System for Blown Film',
        description:
            'Gravimetric dosing system for blown film: multi-component blending, 0.1–100% dosing range, and stable output for consistent film weight.',
    },
    'single_Loss-in-Weight': {
        title: 'Loss-in-Weight Feeder for Blown Film',
        description:
            'Single loss-in-weight gravimetric feeder for blown film: accurate extruder feeding, lower material usage, and higher production stability.',
    },
    solutions: {
        title: 'Blown Film Automation Solutions',
        description:
            'Blown film automation from JINJIU: automatic air ring, thickness gauges, gravimetric dosing, and central control integrated into one system.',
    },
}
