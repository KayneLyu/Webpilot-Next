import Image from 'next/image';
import CaseList from './caseList';

import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

export const generateMetadata = async ({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> => {
  const t = await getTranslations();
  const { locale } = await params;
  return {
    title: t('seo.cases.title'),  
    keywords: ['air ring', 'auto air ring', 'automatic air ring', '风环', '自动风环', '测厚仪', '吹膜机', '吹膜自动化', 'jinjiu', '金久'],
    description: t('seo.cases.description'),
    alternates: {
      canonical: `https://jinjiutech.com/${locale}/case`,
      languages: {
        zh: 'https://jinjiutech.com/zh/case',
        en: 'https://jinjiutech.com/en/case',
        ko: 'https://jinjiutech.com/ko/case',
        ru: 'https://jinjiutech.com/ru/case',
        vi: 'https://jinjiutech.com/vi/case',
        tr: 'https://jinjiutech.com/tr/case'
      }
    }
  };
};

export default function CasePage() {
  const cases = [
    { id: 1, type: 'image', title: 'dosing', src: '/case/case1.jpg' },
    { id: 2, type: 'image', title: 'airRing&dosing', src: '/case/solution1.png' },
    { id: 3, type: 'video', title: 'thick_gauge', src: '/case/horizon_thick_gauge.mp4', poster: '/case/horizon_thick_gauge.webp' },
    { id: 4, type: 'video', title: 'airRing', src: '/case/automatic_air_ring_video1.mp4', poster: '/case/automatic_air_ring_1.jpg' },
    { id: 5, type: 'image', title: 'rotary_gauge', src: '/case/rotate_gauge1.jpg' },
    { id: 6, type: 'image', title: 'airRing', src: '/case/air_ring2.webp' },
    { id: 7, type: 'video', title: 'rotary_gauge', src: '/case/rotate_gauge2.mp4', poster: '/case/rotate_gauge2.jpg' },
    { id: 8, type: 'image', title: 'airRing', src: '/case/air_ring3.webp' },
    { id: 9, type: 'image', title: 'dosing', src: '/case/dosing1.webp' },
    { id: 10, type: 'video', title: 'airRing', src: '/case/automatic_air_ring_video2.mp4', poster: '/case/automatic_air_ring_2.jpg' },
  ]
  return (
    <>
      <div className='w-full'>
        <section className='fixed w-full z-[-1]'>
          <Image
            alt="about"
            src="/images/product.webp"
            width={1800}
            height={1800}
            className='w-full object-cover h-100 md:h-200'
          />
        </section>

        <div className='w-full h-90 md:h-180'>
        </div>

        <div className='bg-9 py-10 md:py-20'>
          <div className='max-w-main mx-auto px-5'>
            <CaseList cases={cases.reverse()} />
          </div>
        </div>
      </div>
    </>
  )
}
