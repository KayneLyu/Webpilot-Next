// app/[locale]/about/head.tsx
import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

export const generateMetadata = async (): Promise<Metadata> => {
  const t = await getTranslations();

  return {
    title: t('seo.home.title'), // 来自你的 zh.json / en.json
    description: t('seo.home.description'),
    alternates: {
      canonical: 'https://jinjiutech.com/zh/about',
      languages: {
        zh: 'https://jinjiutech.com/zh/about',
        en: 'https://jinjiutech.com/en/about'
      }
    }
  };
};
