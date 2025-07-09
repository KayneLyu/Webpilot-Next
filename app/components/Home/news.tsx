'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { useTranslations, useLocale } from 'next-intl'
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import JumpComponent from '@/components/common/JumpTo';
import Image from 'next/image';
import Links from "@/components/common/Links";
import dayjs from 'dayjs';
import { ArrowRight, ArrowLeft } from 'lucide-react';

import 'swiper/css';                  // 必须引入基础样式
import 'swiper/css/pagination';     // 分页器样式
import 'swiper/css/navigation';     // 导航按钮样式

type IMeteData = {
    title: string
    date: string
    cover: string
    excerpt: string
    tag: string
    slug: string
    description?: string
}
export default function News({ items }: { items: IMeteData[] }) {
    const t = useTranslations()
    const locale = useLocale()

    return (
        <div className='w-full mt-10 md:mt-20 py-[40px] md:py-[65px]'>
            <div className='max-w-main mx-auto px-5 lg:px-0'>
                <h1 className='section-title'>{t("nav.news")}</h1>
                <div className='my-5 md:my-10'>
                    <JumpComponent text='news' link='/news' />
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
                                spaceBetween: 70,
                                initialSlide: 1,
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
                            items.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <Links href={`/news/${item.slug}`}>
                                        <div className='group bg-white rounded-2xl overflow-hidden cursor-pointer'>
                                            <div className='h-[340px] overflow-hidden'>
                                                <Image
                                                    src={item.cover}
                                                    width={1200}
                                                    height={1200}
                                                    alt='News'
                                                    className='w-full h-full object-cover group-hover:scale-112 transition duration-300 ease-in-out'
                                                />
                                            </div>
                                            <div className='px-5 md:px-10 text-2'>
                                                <p className='flex justify-between my-3 mt-5'>
                                                    <span>{item.tag}</span>
                                                    <span className='font-semibold italic'>{dayjs(item.date).format("YYYY-MM-DD")}</span>
                                                </p>
                                                <p className='sm:min-h-[66px] font-semibold  text-[18px] md:text-[22px] line-clamp-2 overflow-hidden text-ellipsis'>{item.title}</p>
                                                <p className='my-3 line-clamp-3 overflow-hidden text-ellipsis'>{item.excerpt}</p>
                                                <div className='mt-12 mb-8'>
                                                    {/* <JumpComponent text='more' link='' /> */}
                                                </div>
                                            </div>
                                        </div>
                                    </Links>
                                </SwiperSlide>
                            ))
                        }

                        <div className="swiper-pagination-custom flex justify-center mt-10 space-x-2"> {/* 分页器样式 */}
                            {/* 这个 div 会作为 Swiper 的分页器 */}
                        </div>
                    </Swiper>
                    <div className="border-[3px]  border-3 p-1 custom-next absolute top-[-60px] right-0 text-center transform  z-10  rounded-full  text-3 cursor-pointer hover:bg-6/40 transition md:block hidden">
                        <ArrowRight size={26} />
                    </div>

                    <div className="border-[3px] border-3 p-1 custom-prev absolute top-[-60px] right-12 text-center transform  z-10  rounded-full  text-3 cursor-pointer hover:bg-6/40 transition md:block hidden">
                        <ArrowLeft  size={26}/>
                    </div>
                </div>
            </div>
        </div>

    )
}