// components/SeoHead.tsx
'use client';

import { useLocale } from 'next-intl';
import { useTranslations } from 'next-intl';

export function SeoHead({ pageKey, path }: { pageKey: string; path: string }) {
  const t = useTranslations(`seo.${pageKey}`);
  const locale = useLocale();
  const baseUrl = 'https://jinjiutech.com';

  console.log(123,pageKey, path );
  
  return (
    <>
      <title>{t('title')}</title>
      <meta name="description" content={t('description')} />
      <link rel="canonical" href={`${baseUrl}/${locale !== 'zh' ? locale : ''}${path}`} />
      <link rel="alternate" href={`${baseUrl}/zh${path}`} hrefLang="zh" />
      <link rel="alternate" href={`${baseUrl}/en${path}`} hrefLang="en" />
      <link rel="alternate" href={`${baseUrl}${path}`} hrefLang="x-default" />
    </>
  );
}
