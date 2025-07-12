import SwiperComponent from '@/components/Home/swiper';
import ProductsComponent from '@/components/common/ProductList';
import AboutComponent from '@/components/Home/about';
import HonorComponent from '@/components/Home/honor';
import NewsComponent from '@/components/Home/news';
import { getAllNews } from '@/lib/news';
import dynamic from 'next/dynamic'
import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

export const generateMetadata = async ({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> => {
  const t = await getTranslations();
  const { locale } = await params;
  return {
    title: t('seo.home.title'), 
    description: t('seo.home.description'),
    alternates: {
      canonical: `https://jinjiutech.com/${locale}/`,
      languages: {
        zh: 'https://jinjiutech.com/zh',
        en: 'https://jinjiutech.com/en',
        ko: 'https://jinjiutech.com/ko',
        ru: 'https://jinjiutech.com/ru',
        vi: 'https://jinjiutech.com/vi',
        tr: 'https://jinjiutech.com/tr'
      }
    }
  };
};

// 开启懒加载 + 显示加载中占位
const HomeCase = dynamic(() => import('@/components/Home/cases'), {
  // ssr: false, 
  loading: () => <p>Loading cases...</p>,
})

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const newsList = await getAllNews(locale);
  const products = [
    {
      src: '/products/automatic_air_ring.png',
      alt: 'automatic air ring',
      name: 'automatic_air_ring',
      hover: ''
    },
    {
      src: '/products/lift_automatic_air_ring.png',
      alt: 'lift automatic air ring',
      name: 'lift_automatic_air_ring',
      hover: ''
    },
    {
      src: '/products/Cross-Direction_Scanning_Thickness_Gauge.png',
      alt: 'profile measurement',
      name: 'Cross-Direction_Scanning_Thickness_Gauge',
      hover: ''
    },
    {
      src: '/products/rotary_thickness_gauge.png',
      alt: 'rotary thickness gauge',
      name: 'rotary_thickness_gauge',
      hover: ''
    },
    {
      src: '/products/X-Ray_rotary_thickness_gauge.png',
      alt: 'profile measurement',
      name: 'X-Ray_rotary_thickness_gauge',
      hover: ''
    },
    {
      src: '/products/dosing.png',
      alt: 'dosing',
      name: 'dosing',
      hover: ''
    },
  ]
  return (
    <>
      <section>
        <SwiperComponent />
      </section>
      <section className='max-w-main mx-auto px-[10px] my-8 md:my-24'>
        <AboutComponent />
      </section>
      <section>
        <HonorComponent />
      </section>
      <section className='pt-22'>
        <ProductsComponent products={products} tittle='product' showMore />
      </section>
      <section>
        <HomeCase />
      </section>
      <section>
        <NewsComponent items={newsList} />
      </section>
    </>
  )
}
