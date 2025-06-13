'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';

import 'swiper/css';                  // 必须引入基础样式
import 'swiper/css/pagination';     // 分页器样式
import 'swiper/css/navigation';     // 导航按钮样式

export default function Carousel() {
  return (
    <Swiper
    //   navigation={true}
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
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        <Image
          src="/swiper/banner1.jpg"
          alt="Banner 1"
          width={1200}
          height={400}
          className="w-full h-auto"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/swiper/banner2.jpg"
          alt="Banner 2"
          width={1200}
          height={400}
          className="w-full h-auto"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/swiper/banner3.jpg"
          alt="Banner 3"
          width={1200}
          height={400}
          className="w-full h-auto"
        />
      </SwiperSlide>
    </Swiper>
  );
}