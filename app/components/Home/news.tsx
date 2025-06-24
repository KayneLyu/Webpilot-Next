'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { useTranslations } from 'next-intl'
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import JumpComponent from '@/components/common/JumpTo';
import Image from 'next/image';

import 'swiper/css';                  // 必须引入基础样式
import 'swiper/css/pagination';     // 分页器样式
import 'swiper/css/navigation';     // 导航按钮样式

export default function News() {
    const t = useTranslations()

    const newsList = t.raw('news.list') as {
        id: string;
        title: string;
        date: string;
        content: string;
        image: string;
        tag: string
    }[];
    return (
        <div className='w-full mt-10 md:mt-20 py-[40px] md:py-[65px]'>
            <div className='max-w-main mx-auto px-5 lg:px-0'>
                <h1 className='section-title'>{t("nav.news")}</h1>
                <div className='my-5 md:my-10'>
                    <JumpComponent text='SEE MORE NEWS' link='/news' />
                </div>
                <div className='relative'>

                    <Swiper
                        navigation={{
                            nextEl: '.custom-next',
                            prevEl: '.custom-prev',
                        }}
                        centeredSlides
                        loop
                        breakpoints={{
                            // 当视口宽度 ≥ 768px（如平板和PC）
                            768: {
                                slidesPerView: 3,
                                slidesPerGroup: 1,
                                spaceBetween: 70
                            },
                            // 默认（小于 768px）
                            0: {
                                slidesPerView: 1,
                                slidesPerGroup: 1,
                                spaceBetween: 10,
                            },
                        }}
                        speed={1000}
                        pagination={{
                            clickable: true,
                            el: ".swiper-pagination-custom"
                        }}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper relative"
                        effect="slide"
                    >

                        {
                            newsList.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <div className='group bg-white rounded-2xl overflow-hidden cursor-pointer'>
                                        <div className='h-[340px] overflow-hidden'>
                                            <Image
                                                src={item.image}
                                                width={1200}
                                                height={1200}
                                                alt='News'
                                                className='w-full h-full object-cover group-hover:scale-112 transition duration-300 ease-in-out'
                                            />
                                        </div>
                                        <div className='px-5 md:px-10 text-2'>
                                            <p className='flex justify-between my-3 mt-5'>
                                                <span>{item.tag}</span>
                                                <span className='font-semibold italic'>{item.date}</span>
                                            </p>
                                            <p className='font-semibold  text-[18px] md:text-[22px] line-clamp-2 overflow-hidden text-ellipsis'>{item.title}</p>
                                            <p className='my-3 line-clamp-3 overflow-hidden text-ellipsis'>{item.content}</p>
                                            <div className='mt-12 mb-8'>
                                                <JumpComponent text='READ MORE' link='' />
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))
                        }

                        <div className="swiper-pagination-custom flex justify-center mt-10 space-x-2"> {/* 分页器样式 */}
                            {/* 这个 div 会作为 Swiper 的分页器 */}
                        </div>
                    </Swiper>
                </div>


            </div>
        </div>

    )
}