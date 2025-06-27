'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import JumpComponent from '@/components/common/JumpTo';
import Image from 'next/image';
import { useTranslations } from 'next-intl'

import 'swiper/css';                  // 必须引入基础样式
import 'swiper/css/pagination';     // 分页器样式
import 'swiper/css/navigation';     // 导航按钮样式

export default function Cases() {
    const t = useTranslations()
    return (
        <div className='w-full mt-10 md:mt-20 py-[40px] md:py-[65px] px-6 xl:px-0 '>
            <div className='max-w-main mx-auto md:px-0'>
                <h1 className='section-title'>{t("nav.case")}</h1>
                <p className='text-2 text-[14px] md:w-[50%] md:text-[18px]'>
                    {t('home.case')}
                </p>
                <div className='mt-5 md:mt-15'>
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
                        className="mySwiper"
                        effect="slide"
                    >
                        <SwiperSlide>
                            <div className='full group  relative cursor-pointer rounded-2xl overflow-hidden'>
                                <div className='w-full h-100'>
                                    <Image
                                        src="/case/case1.jpg"
                                        width={1200}
                                        height={1200}
                                        alt='News'
                                        className='w-full h-full object-cover '
                                    />
                                </div>

                                <div className='flex justify-center items-end case-info text-white absolute bottom-0 left-0  w-full h-[40%] group-hover:h-[100%] transition-all duration-300 ease-in'>
                                    <p className='mb-5 text-2xl group-hover:mb-[30%] transition-all duration-300 ease-in'>在线称重混料系统</p>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className='full group  relative cursor-pointer rounded-2xl overflow-hidden'>
                                <div className='w-full h-100'>
                                    <Image
                                        src="/case/case1.jpg"
                                        width={1200}
                                        height={1200}
                                        alt='News'
                                        className='w-full h-full object-cover '
                                    />
                                </div>

                                <div className='flex justify-center items-end case-info text-white absolute bottom-0 left-0  w-full h-[40%] group-hover:h-[100%] transition-all duration-300 ease-in'>
                                    <p className='mb-5 text-2xl group-hover:mb-[30%] transition-all duration-300 ease-in'>在线称重混料系统</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='full group  relative cursor-pointer rounded-2xl overflow-hidden'>
                                <div className='w-full h-100'>
                                    <Image
                                        src="/case/case1.jpg"
                                        width={1200}
                                        height={1200}
                                        alt='News'
                                        className='w-full h-full object-cover '
                                    />
                                </div>

                                <div className='flex justify-center items-end case-info text-white absolute bottom-0 left-0  w-full h-[40%] group-hover:h-[100%] transition-all duration-300 ease-in'>
                                    <p className='mb-5 text-2xl group-hover:mb-[30%] transition-all duration-300 ease-in'>在线称重混料系统</p>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className='full group  relative cursor-pointer rounded-2xl overflow-hidden'>
                                <div className='w-full h-100'>
                                    <Image
                                        src="/case/case1.jpg"
                                        width={1200}
                                        height={1200}
                                        alt='News'
                                        className='w-full h-full object-cover '
                                    />
                                </div>

                                <div className='flex justify-center items-end case-info text-white absolute bottom-0 left-0  w-full h-[40%] group-hover:h-[100%] transition-all duration-300 ease-in'>
                                    <p className='mb-5 text-2xl group-hover:mb-[30%] transition-all duration-300 ease-in'>在线称重混料系统</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>

                <div className='mt-5 md:mt-10'>
                    <JumpComponent text='cases' link='/case' />
                </div>
            </div>
        </div>
    )
}