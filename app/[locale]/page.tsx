import SwiperComponent from '@/components/Home/swiper';
import SolutionComponent from '@/components/Home/solution';
import OfferComponent from '@/components/Home/offer';
import ProductsComponent from '@/components/Home/product';

export default function HomePage() {
  return (
    <>
      <section>
        <SwiperComponent />
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
