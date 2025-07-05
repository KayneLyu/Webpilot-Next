'use client'
import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import JumpComponent from '@/components/common/JumpTo';
import Image from 'next/image';
import { useTranslations } from 'next-intl'
import CaseModal from '@/components/common/CaseModal'
import { CirclePlay } from "lucide-react"

import 'swiper/css';                  // 必须引入基础样式
import 'swiper/css/pagination';     // 分页器样式
import 'swiper/css/navigation';     // 导航按钮样式

export default function Cases() {
    const [selected, setSelected] = useState<null | ICaseList>(null)
    const t = useTranslations()

    const cases = [
        { id: 1, type: 'image', title: '六组分计量称重应用', src: '/case/case1.jpg' },
        { id: 2, type: 'image', title: '在线称重&自动风环解决方案', src: '/case/solution1.png' },
        { id: 3, type: 'video', title: '自动风环横扫测厚仪', src: '/case/horizon_thick_gauge.mp4', poster: '/case/horizon_thick_gauge.webp' },
        { id: 4, type: 'video', title: '自动风环应用', src: '/case/air_ring1.mp4', poster: '/case/air_ring1.jpg' },
        { id: 5, type: 'image', title: '环扫测厚仪应用', src: '/case/rotate_gauge1.jpg' },
        { id: 6, type: 'image', title: '自动风环应用', src: '/case/air_ring2.webp' },
        { id: 7, type: 'video', title: '环扫测厚仪应用', src: '/case/rotate_gauge2.mp4', poster: '/case/rotate_gauge2.jpg' },
    ]
    return (
        <div className='w-full py-[40px] md:py-[65px] px-6 xl:px-0 '>
            <div className='max-w-main mx-auto md:px-0'>
                <h1 className='font-semibold text-2 text-[18px] md:text-[24px] w-full text-left mb-5'>{t("nav.case")}</h1>

                <div className='mt-5 md:mt-10'>
                    <Swiper
                        navigation={{
                            nextEl: '.custom-next',
                            prevEl: '.custom-prev',
                        }}
                        spaceBetween={50}
                        centeredSlides
                        loop
                        autoplay={{
                            delay: 1500,
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
                        {cases.map(item => (
                            <SwiperSlide key={item.id} onClick={() => setSelected(item)} className="cursor-pointer">
                                <div className='full group  relative cursor-pointer rounded-2xl overflow-hidden'>
                                    <div className='w-full h-100 group-hover:scale-115 transition duration-300 ease-in-out'>
                                        {item.type === 'image' ? (
                                            <Image
                                                src={item.src}
                                                alt={item.title}
                                                width={600}
                                                height={600}
                                                className="w-full h-full object-cover " />
                                        ) : (
                                            <div className='w-full h-full'>
                                                <Image
                                                    src={item.poster!}
                                                    alt={item.title}
                                                    width={600}
                                                    height={600}
                                                    className="w-full h-full object-cover filter brightness-60" />
                                                <div className='absolute left-0 top-0 flex justify-center items-center w-full h-full '>
                                                    <CirclePlay size={60} color='#fff' />
                                                </div>
                                            </div>

                                        )}
                                    </div>
                                    <div className='flex justify-center items-end case-info text-white absolute bottom-0 left-0  w-full h-[40%]  transition-all duration-300 ease-in'>
                                        <p className='mb-5 text-2xl transition-all duration-300 ease-in'>{item.title}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                <div className='mt-5 md:mt-10'>
                    <JumpComponent text='cases' link='/case' />
                </div>
            </div>

            {selected && (
                <CaseModal
                    item={selected}
                    onClose={() => setSelected(null)}
                />
            )}
        </div>
    )
}