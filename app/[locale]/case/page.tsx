import Image from 'next/image';
import CaseList from './caseList';

import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

export const generateMetadata = async (): Promise<Metadata> => {
  const t = await getTranslations();

  return {
    title: t('seo.cases.title'), // 来自你的 zh.json / en.json
    description: t('seo.cases.description'),
    alternates: {
      canonical: 'https://jinjiutech.com/zh/case',
      languages: {
        zh: 'https://jinjiutech.com/zh/case',
        en: 'https://jinjiutech.com/en/case'
      }
    }
  };
};

export default function CasePage() {
  const cases = [
    { id: 1, type: 'image', title: 'dosing', src: '/case/case1.jpg' },
    { id: 2, type: 'image', title: 'airRing&dosing', src: '/case/solution1.png' },
    { id: 3, type: 'video', title: 'thick_gauge', src: '/case/horizon_thick_gauge.mp4', poster: '/case/horizon_thick_gauge.webp' },
    { id: 4, type: 'video', title: 'airRing', src: '/case/air_ring1.mp4', poster: '/case/air_ring1.jpg' },
    { id: 5, type: 'image', title: 'rotary_gauge', src: '/case/rotate_gauge1.jpg' },
    { id: 6, type: 'image', title: 'airRing', src: '/case/air_ring2.webp' },
    { id: 7, type: 'video', title: 'rotary_gauge', src: '/case/rotate_gauge2.mp4', poster: '/case/rotate_gauge2.jpg' },
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
            <CaseList cases={cases} />
          </div>
        </div>
      </div>
    </>
  )
}
