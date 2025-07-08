import HonorList from './honorList';
import BackButton from '@/components/common/BackButton';
import { getTranslations } from 'next-intl/server'
import type { Metadata } from "next";
export const generateMetadata = async (): Promise<Metadata> => {
  const t = await getTranslations();
  return {
    title: t('seo.about.title'), // 来自你的 zh.json / en.json
    keywords: ['air ring', 'auto air ring', 'automatic air ring', '风环', '自动风环', '测厚仪', '吹膜机', '吹膜自动化', 'jinjiu', '金久'],
    description: t('seo.about.description'),
    alternates: {
      canonical: 'https://jinjiutech.com/en/honor',
      languages: {
        zh: 'https://jinjiutech.com/zh/honor',
        en: 'https://jinjiutech.com/en/honor',
        ko: 'https://jinjiutech.com/ko/honor',
        ru: 'https://jinjiutech.com/ru/honor',
        vi: 'https://jinjiutech.com/vi/honor',
        tr: 'https://jinjiutech.com/tr/honor'
      }
    }
  };
};


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