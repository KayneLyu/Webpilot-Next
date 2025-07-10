'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Links from "@/components/common/Links";

import JumpComponent from '@/components/common/Jump';

import 'swiper/css';                // 必须引入基础样式
import 'swiper/css/pagination';     // 分页器样式
import 'swiper/css/navigation';     // 导航按钮样式


export default function Carousel() {
  const t = useTranslations('slogan')

  const banners = [
    {
      mobile: '/swiper/banner1_m.webp',
      pc: '/swiper/banner4.webp',
      slogan: "s1",
      link: "/product/automatic_air_ring",
      alt: "automatic air ring"
    },
    {
      mobile: '/swiper/banner2_m.webp',
      pc: '/swiper/banner1.webp',
      slogan: "s5",
      link: "/product/lift_automatic_air_ring",
      alt: "lift automatic air ring"
    },
    {
      mobile: '/swiper/banner3_m.webp',
      pc: '/swiper/banner2.webp',
      slogan: "s4",
      link: "/product/rotary_thickness_gauge",
      alt: "Rotary thickness gauge"
    },
    {
      mobile: '/swiper/banner4_m.webp',
      pc: '/swiper/banner3.webp',
      slogan: "s3",
      link: "/product/Cross-Direction_Scanning_Thickness_Gauge",
      alt: "thickness gauge"
    },
    {
      mobile: '/swiper/banner5_m.webp',
      pc: '/swiper/banner5.webp',
      slogan: "s2",
      link: "/product/solutions",
      alt: "auto air ring solutions"
    },
  ]
  return (
    <div className="relative">
      <Swiper
        navigation={{
          nextEl: '.custom-banner-next',
          prevEl: '.custom-banner-prev',
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
              <Image
                src={item.mobile}
                alt={item.alt}
                width={1920}
                height={840}
                className="object-cover w-full h-full brightness-60"
                priority={index === 0} // ✅ 只有第一张图设置 priority
                quality={75}
              />
            </picture>

            <div className="bottom-[10%] left-5 font-semibold w-[80%] flex md:pl-15 justify-center items-center absolute md:bottom-10 md:left-30 text-white  xl:w-[35vw] xl:h-[35vw] xl:border-[4px] border-white swiper-slogan ">
              <Links href={item.link} className='cursor-pointer'>
                <p className='text-[26px] mb-5 md:mb-15 sm:text-4xl md:text-6xl line-clamp-2'>{t(item.slogan)}</p>
                <JumpComponent color='text-white' text='more' />
              </Links>
            </div>
          </SwiperSlide>
        ))}

      </Swiper>
      {/* 自定义左右按钮 */}
      <div className="custom-banner-next absolute top-1/2 right-10 text-center transform -translate-y-1/2 z-10   p-4 text-4xl text-6 cursor-pointer hover:bg-6/40 transition md:block hidden">
        ❯
      </div>

      <div className="custom-banner-prev absolute top-1/2 left-10 text-center transform -translate-y-1/2 z-10   p-4 text-4xl text-6 cursor-pointer hover:bg-6/40 transition md:block hidden">
        ❮
      </div>
    </div>
  );
}