
import { NextIntlClientProvider, hasLocale } from 'next-intl'
import { SITE_KEYWORDS, SITE_URL, languageAlternates, localeUrl } from "@/lib/seo";
import { routing } from '../../i18n/routing';
import { notFound } from 'next/navigation'
import { getTranslations } from 'next-intl/server'
import type { Metadata } from "next";

// meta data
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale });
  return {
      title: {
          default: t('seo.defaultTitle'),
          template: `%s | ${t('seo.brand')}`
      },
      // Site-wide fallbacks, used by any route that does not define its own
      // metadata. Regular pages build theirs with pageMetadata() in @/lib/seo,
      // which keeps canonical, hreflang and og:url pointing at the same URL.
      keywords: SITE_KEYWORDS,
      description: t('seo.defaultDescription'),
      // Icons are declared once, in app/layout.tsx (full square icon set).
      metadataBase: new URL(SITE_URL),
      alternates: {
          canonical: localeUrl(locale, '/'),
          languages: languageAlternates('/')
      },
      openGraph: {
          url: localeUrl(locale, '/'),
          title: t('seo.defaultTitle'),
          description: t('seo.defaultDescription'),
          siteName: t('seo.brand'),
          locale: locale,
          type: 'website'
      }
  };
}

/**
 * Locale shell.
 *
 * Only the providers live here. The public website chrome (header, footer,
 * floating contact rail) is in the (site) route group, so the Google Ads
 * landing page in (landing) can render a focused, navigation-free shell while
 * still sharing locale validation and next-intl context.
 */
export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode,
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  return (
    <NextIntlClientProvider>
      {children}
    </NextIntlClientProvider>
  );
}
