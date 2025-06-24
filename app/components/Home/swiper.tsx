'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useTranslations } from 'next-intl'


import JumpComponent from '@/components/common/JumpTo';

import 'swiper/css';                // 必须引入基础样式
import 'swiper/css/pagination';     // 分页器样式
import 'swiper/css/navigation';     // 导航按钮样式


export default function Carousel() {
  const t = useTranslations('slogan')

  const banners = [
    {
      mobile: '/swiper/banner1_m.webp',
      pc: '/swiper/banner1.webp',
      slogan: "s1"
    },
    {
      mobile: '/swiper/banner2_m.webp',
      pc: '/swiper/banner2.webp',
      slogan: "s2"
    },
    {
      mobile: '/swiper/banner3_m.webp',
      pc: '/swiper/banner3.webp',
      slogan: "s3"
    },
  ]
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
        speed={800}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        effect="slide"
      >
        {banners.map((item, index) => (
          <SwiperSlide className='relative' key={index}>
            <picture>
              <source
                media="(min-width: 1024px)"
                srcSet={item.pc}
              />
              <source
                media="(max-width: 1023px)"
                srcSet={item.mobile}
              />
              <img
                src="/swiper/banner1_m.webp"
                alt="solutions"
                className="w-full object-cover filter brightness-60"
              />
            </picture>

            <div className="bottom-[30%] left-5 font-semibold w-[80%] flex md:pl-15 justify-center items-center absolute md:bottom-10 md:left-30 text-white  xl:w-[35vw] xl:h-[35vw] xl:border-[4px] border-white swiper-slogan ">
              <div>
                <p className='text-[26px] mb-5 md:mb-15 sm:text-4xl md:text-6xl line-clamp-2'>{t(item.slogan)}</p>
                <JumpComponent color='text-white' text='READ MORE' link='' />
              </div>
            </div>
          </SwiperSlide>
        ))}

      </Swiper>
      {/* 自定义左右按钮 */}
      <div className="custom-next absolute top-1/2 right-10 text-center transform -translate-y-1/2 z-10   p-4 text-4xl text-6 cursor-pointer hover:bg-6/40 transition md:block hidden">
        ❯
      </div>

      <div className="custom-prev absolute top-1/2 left-10 text-center transform -translate-y-1/2 z-10   p-4 text-4xl text-6 cursor-pointer hover:bg-6/40 transition md:block hidden">
        ❮
      </div>
    </div>
  );
}