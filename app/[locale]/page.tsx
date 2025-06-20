import SwiperComponent from '@/components/Home/swiper';
import SolutionComponent from '@/components/Home/solution';
import OfferComponent from '@/components/Home/offer';
import ProductsComponent from '@/components/Home/product';
import AboutComponent from '@/components/Home/about';
export default function HomePage() {
  return (
    <>
      <section>
        <SwiperComponent />
      </section>
      <section className='max-w-[1675px] mx-auto px-[10px] my-8 md:my-24'>
        <AboutComponent />
      </section>
      <section>
        <OfferComponent />
      </section>
      <section>
        <SolutionComponent />
      </section>
      <section className='mt-10'>
        <ProductsComponent />
      </section>
    </>
  )
}
