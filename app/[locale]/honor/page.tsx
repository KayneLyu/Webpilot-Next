import HonorList from './honorList';
import BackButton from '@/components/common/BackButton';
import { getTranslations } from 'next-intl/server'
import type { Metadata } from "next";
export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale });
  return {
    title: {
      default: t('seo.defaultTitle'),
      template: `%s | ${t('seo.brand')}`
    },
    keywords: ['air ring', 'auto air ring', 'automatic air ring', '风环', '自动风环', '测厚仪', '吹膜机', '吹膜自动化', 'jinjiu', '金久'],
    description: t('seo.defaultDescription'),
    metadataBase: new URL('https://jinjiutech.com'),
    alternates: {
      canonical: `https://jinjiutech.com/${locale}/news`,
      languages: {
        zh: 'https://jinjiutech.com/zh/honor',
        en: 'https://jinjiutech.com/en/honor',
        ko: 'https://jinjiutech.com/ko/honor',
        ru: 'https://jinjiutech.com/ru/honor',
        vi: 'https://jinjiutech.com/vi/honor',
        tr: 'https://jinjiutech.com/tr/honor'
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


export default function HonorsPage() {

  const cases = [
    "/honor/1.webp",
    "/honor/2.webp",
    "/honor/3.webp",
    "/honor/4.webp",
    "/honor/5.webp",
    "/honor/6.webp",
    "/honor/7.webp",
    "/honor/8.webp",
    "/honor/9.webp",
    "/honor/10.webp",
    "/honor/11.webp",
    "/honor/12.webp",
  ]
  return (
    <div className='max-w-main mx-auto py-10 md:py-20'>
      <div className='px-5 hidden md:block'>
        <BackButton />
      </div>
      <div  className=''>
        <HonorList cases={cases} />
      </div>
    </div>
  )
}