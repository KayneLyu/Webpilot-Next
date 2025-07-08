import { useTranslations } from 'next-intl';
import BackButton from '@/components/common/BackButton';

import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

export const generateMetadata = async (): Promise<Metadata> => {
    const t = await getTranslations();
    return {
      title: t('seo.home.title'), // 来自你的 zh.json / en.json
      keywords: ['air ring', 'auto air ring', 'automatic air ring', '风环', '自动风环', '测厚仪', '吹膜机', '吹膜自动化', 'jinjiu', '金久'],
      description: t('seo.home.description'),
      alternates: {
        canonical: 'https://jinjiutech.com/en/privacy-policy',
        languages: {
          zh: 'https://jinjiutech.com/zh/privacy-policy',
          en: 'https://jinjiutech.com/en/privacy-policy',
          ko: 'https://jinjiutech.com/ko/privacy-policy',
          ru: 'https://jinjiutech.com/ru/privacy-policy',
          vi: 'https://jinjiutech.com/vi/privacy-policy',
          tr: 'https://jinjiutech.com/tr/privacy-policy'
        }
      }
    };
  };

export default function PrivacyPolicyPage() {
    const t = useTranslations('PrivacyPolicy');
    return (
        <div className='max-w-4xl mx-auto pt-1 pb-10 md:pt-5 px-5 '>
            <BackButton />
            <div className="max-w-4xl mx-auto space-y-6 text-gray-800">
                <h1 className="text-2xl font-bold">{t('title')}</h1>
                <section>
                    <h2 className="text-xl font-semibold">{t('section1.title')}</h2>
                    <p style={{ whiteSpace: 'pre-line' }}>{t('section1.content')}</p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold">{t('section2.title')}</h2>
                    <ul className="list-disc pl-5">
                        <li>{t('section2.list.0')}</li>
                        <li>{t('section2.list.1')}</li>
                        <li>{t('section2.list.2')}</li>
                    </ul>
                    <p style={{ whiteSpace: 'pre-line' }}>{t('section2.note')}</p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold">{t('section3.title')}</h2>
                    <p style={{ whiteSpace: 'pre-line' }}>{t('section3.content')}</p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold">{t('section4.title')}</h2>
                    <ul className="list-disc pl-5">
                        <li>{t('section4.list.0')}</li>
                        <li>{t('section4.list.1')}</li>
                        <li>{t('section4.list.2')}</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-xl font-semibold">{t('section5.title')}</h2>
                    <p style={{ whiteSpace: 'pre-line' }}>{t('section5.content')}</p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold">{t('section6.title')}</h2>
                    <p style={{ whiteSpace: 'pre-line' }}>{t('section6.content')}</p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold">{t('section7.title')}</h2>
                    <p style={{ whiteSpace: 'pre-line' }}>{t('section7.content')}</p>
                </section>

                <section className="text-sm text-gray">
                    <p style={{ whiteSpace: 'pre-line' }}>{t('confirm')}</p>
                </section>
            </div>
        </div>
    );
}
