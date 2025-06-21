'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import JumpComponent from '@/components/common/JumpTo';

import 'swiper/css';                  // 必须引入基础样式
import 'swiper/css/pagination';     // 分页器样式
import 'swiper/css/navigation';     // 导航按钮样式

export default function Cases() {
    return (
        <div className='w-full mt-10 md:mt-20 py-[40px] md:py-[65px] px-6 xl:px-0 '>
            <div className='max-w-main mx-auto md:px-0'>
                <h1 className='section-title'>CASES</h1>

                <div>
                    <Swiper
                        navigation={{
                            nextEl: '.custom-next',
                            prevEl: '.custom-prev',
                        }}
                        spaceBetween={50}
                        centeredSlides
                        loop
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}

                        breakpoints={{
                            // 当视口宽度 ≥ 768px（如平板和PC）
                            768: {
                                slidesPerView: 3,
                                slidesPerGroup: 1,
                                spaceBetween: 30
                            },
                            // 默认（小于 768px）
                            0: {
                                slidesPerView: 1,
                                slidesPerGroup: 1,
                                spaceBetween: 10,
                            },
                        }}
                        speed={1000}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper h-50"
                        effect="slide"
                    >
                        <SwiperSlide>
                            <div className='full bg-5 h-50'></div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='full bg-5 h-50'></div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='full bg-5 h-50'></div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='full bg-5 h-50'></div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='full bg-5 h-50'></div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='full bg-5 h-50'></div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='full bg-5 h-50'></div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='full bg-5 h-50'></div>
                        </SwiperSlide>
                    </Swiper>
                </div>

                <div className='mt-5 md:mt-10'>
                    <JumpComponent text='SEE ALL CASES' link='/case' />
                </div>
            </div>
        </div>
    )
}