'use client';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import Image from "next/image";
import profile_control from "@/assets/images/products/profile_control.jpg";
import lift_control from "@/assets/images/products/lift_profile_control.jpg";
import gauge from "@/assets/images/products/gauge.jpg";
import ring_gauge from "@/assets/images/products/ring_gauge.jpg";
import dosing from "@/assets/images/products/dosing.jpg";
import xRing_gauge from "@/assets/images/products/Xring_gauge.jpg";
import { useTranslations } from 'next-intl'
import SectionTittle from '@/components/common/Section-title';

function AnimatedListItem({ children }: { children: React.ReactNode }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    return (
        <motion.li
            ref={ref}
            initial={{ opacity: 0, y: 70 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut' }}
        >
            {children}
        </motion.li>
    );
}

export default function ProductSection() {
    const products = [
        {
            src: profile_control,
            alt: 'profile_control',
            name: 'ring',
            link: '/',
            hover: ''
        },
        {
            src: lift_control,
            alt: 'lift_profile_control',
            name: 'lift_ring',
            link: '/',
            hover: ''
        },
        {
            src: gauge,
            alt: 'profile_measurement',
            name: 'horizon',
            link: '/',
            hover: ''
        },
        {
            src: ring_gauge,
            alt: 'profile_measurement',
            name: 'round',
            link: '/',
            hover: ''
        },
        {
            src: dosing,
            alt: 'dosing',
            name: 'dosing',
            link: '/',
            hover: ''
        },
    ]
    const t = useTranslations('product')
    return (
        <>
            <div className="bg-5/90">
                <div>
                    <SectionTittle text={t("product")} textColor='text-black' spanBgColor='bg-white' />
                </div>

                <div className='w-full mt-[50px] md:mt-[70px]'>
                    <ul className='w-[80%] gap-5 md:gap-10 m-[auto] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:w-[76%]'>
                        {products.map((product, index) => (
                            <AnimatedListItem key={index}>
                                <Image
                                    src={product.src}
                                    alt={product.alt}
                                    width={1500}
                                    height={1000}
                                    className="m-auto w-full md:w-400 h-auto rounded-lg"
                                />
                                <p className="font-semibold md:text-2xl font-[family-name:var(--font-Public-Sans)] text-white text-center my-5">{ t(product.name) }</p>
                            </AnimatedListItem>
                        ))}

                        <AnimatedListItem>
                            <div className='hidden sm:block '>
                                <Image
                                    src={xRing_gauge}
                                    alt="solution"
                                    width={1500}
                                    height={1000}
                                    className="m-auto w-full md:w-400 h-auto rounded-lg"
                                />
                                <p className="font-semibold md:text-2xl font-[family-name:var(--font-Public-Sans)] text-white text-center my-5">{t('XRayRing')}</p>
                            </div>
                        </AnimatedListItem>
                    </ul>
                </div>
            </div>
        </>
    )
}
