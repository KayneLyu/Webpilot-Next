import SwiperComponent from '@/components/Home/swiper';
import ProductsComponent from '@/components/common/ProductList';
import AboutComponent from '@/components/Home/about';
import HonorComponent from '@/components/Home/honor';
import NewsComponent from '@/components/Home/news';
import { getAllNews } from '@/lib/news';
import dynamic from 'next/dynamic'

// 开启懒加载 + 显示加载中占位
const HomeCase = dynamic(() => import('@/components/Home/cases'), {
  // ssr: false, // 如果组件是客户端交互的可以加这个
  loading: () => <p>Loading cases...</p>,
})

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const newsList = await getAllNews(locale);
  const products = [
    {
      src: '/products/auto_air_ring.webp',
      alt: 'profile_control',
      name: 'auto_air_ring',
      link: '/',
      hover: ''
    },
    {
      src: '/products/lift_auto_air_ring.webp',
      alt: 'lift_profile_control',
      name: 'lift_auto_air_ring',
      link: '/',
      hover: ''
    },
    {
      src: '/products/Cross-Direction_Scanning_Thickness_Gauge.webp',
      alt: 'profile_measurement',
      name: 'Cross-Direction_Scanning_Thickness_Gauge',
      link: '/',
      hover: ''
    },
    {
      src: '/products/rotary_thickness_gauge.webp',
      alt: 'rotary_thickness_gauge',
      name: 'rotary_thickness_gauge',
      link: '/',
      hover: ''
    },
    {
      src: '/products/X-Ray_rotary_thickness_gauge.webp',
      alt: 'profile_measurement',
      name: 'X-Ray_rotary_thickness_gauge',
      link: '/',
      hover: ''
    },
    {
      src: '/products/dosing.webp',
      alt: 'dosing',
      name: 'dosing',
      link: '/',
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
