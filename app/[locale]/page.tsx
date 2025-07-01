import SwiperComponent from '@/components/Home/swiper';
import ProductsComponent from '@/components/Home/product';
import AboutComponent from '@/components/Home/about';
import HonorComponent from '@/components/Home/honor';
import CaseComponent from '@/components/Home/cases';
import NewsComponent from '@/components/Home/news';
import { getAllNews } from '@/lib/news';
export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const newsList = await getAllNews(locale);
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
      <section>
        <ProductsComponent />
      </section>
      <section>
        <CaseComponent />
      </section>
      <section>
        <NewsComponent items={newsList}/>
      </section>
    </>
  )
}
