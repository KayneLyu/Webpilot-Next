
import { NextIntlClientProvider, hasLocale } from 'next-intl'
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import BackTop from "@/components/common/BackTop";
import BrowserCheck from "@/components/BrowserCheck";
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
      keywords: ['air ring', 'auto air ring', 'automatic air ring', '风环', '自动风环', '测厚仪', '吹膜机', '吹膜自动化', 'jinjiu', '金久'],
      description: t('seo.defaultDescription'),
      icons: '/favicon.ico',
      metadataBase: new URL('https://jinjiutech.com'),
      alternates: {
          canonical: `https://jinjiutech.com/${locale}`,
          languages: {
              zh: 'https://jinjiutech.com/zh',
              en: 'https://jinjiutech.com/en',
              ko: 'https://jinjiutech.com/ko',
              ru: 'https://jinjiutech.com/ru',
              vi: 'https://jinjiutech.com/vi',
              tr: 'https://jinjiutech.com/tr'
          }
      },
      openGraph: {
          url: 'https://www.jinjiutech.com',
          title: t('seo.defaultTitle'),
          description: t('seo.defaultDescription'),
          siteName: t('seo.brand'),
          locale: locale,
          type: 'website'
      }
  };
}

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
    <div className='relative flex flex-col'>
      <NextIntlClientProvider>
        <Header />
        <BackTop />
        <main className="flex-1">
          {children}
          <BrowserCheck />
        </main>
        <Footer />
      </NextIntlClientProvider>
    </div>
  );
}
