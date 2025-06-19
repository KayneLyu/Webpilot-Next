'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';

import 'swiper/css';                  // 必须引入基础样式
import 'swiper/css/pagination';     // 分页器样式
import 'swiper/css/navigation';     // 导航按钮样式
import 'swiper/css/effect-fade';

export default function Carousel() {
  return (
    <div className="relative">
      <Swiper
        navigation={{
          nextEl: '.custom-next',
          prevEl: '.custom-prev',
        }}
        //   spaceBetween={0}
        centeredSlides
        loop
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        speed={1000}
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        className="mySwiper"
        effect="fade"
        fadeEffect={{ crossFade: true }}
      >

        <SwiperSlide>
          <picture>
            <source
              media="(min-width: 1024px)"
              srcSet="/swiper/banner1.jpg"
            />
            <source
              media="(max-width: 1023px)"
              srcSet="/swiper/banner1_m.webp"
            />
            <img
              src="/swiper/banner1_m.webp"
              alt="solutions"
              className="w-full object-cover"
            />
          </picture>
        </SwiperSlide>
        <SwiperSlide>
          <picture>
            <source
              media="(min-width: 1024px)"
              srcSet="/swiper/banner2.jpg"
            />
            <source
              media="(max-width: 1023px)"
              srcSet="/swiper/banner2_m.webp"
            />
            <img
              src="/swiper/banner2_m.webp"
              alt="solutions"
              className="w-full object-cover"
            />
          </picture>
        </SwiperSlide>
        <SwiperSlide>
          <picture>
            <source
              media="(min-width: 1024px)"
              srcSet="/swiper/banner3.jpg"
            />
            <source
              media="(max-width: 1023px)"
              srcSet="/swiper/banner3_m.webp"
            />
            <img
              src="/swiper/banner3_m.webp"
              alt="solutions"
              className="w-full object-cover"
            />
          </picture>
        </SwiperSlide>

      </Swiper>
      {/* 自定义左右按钮 */}
      <div className="custom-next absolute top-1/2 right-10 text-center transform -translate-y-1/2 z-10   p-4 text-4xl text-black cursor-pointer hover:bg-6/20 transition md:block hidden">
        ❯
      </div>

      <div className="custom-prev absolute top-1/2 left-10 text-center transform -translate-y-1/2 z-10   p-4 text-4xl cursor-pointer hover:bg-6/20 transition md:block hidden">
        ❮
      </div>
    </div>
  );
}