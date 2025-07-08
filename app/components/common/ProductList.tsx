'use client';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import Image from "next/image";
import { useTranslations, useLocale } from 'next-intl'
import JumpComponent from '@/components/common/JumpTo';
import { ChevronRight } from "lucide-react"
import Links from "@/components/common/Links";

type IProductList = {
    src: string
    alt: string
    name: string
    link?: string
    hover?: string
}

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

export default function ProductList({ products, tittle, showMore }: { products: IProductList[], tittle: string, showMore?: boolean }) {


    const t = useTranslations('product')

    const locale = useLocale()
    return (
        <div className='w-full px-5 xl:px-0'>
            <div className="pb-10 md:px-0 max-w-main mx-auto ">
                {
                    showMore && (
                        <div>
                            <div>
                                <h1 className='section-title'>{t(tittle)}</h1>
                            </div>
                            <div>
                                <p className='text-2 text-[14px] md:w-[50%] md:text-[18px]'>
                                    {t('tips')}
                                </p>
                            </div>
                        </div>
                    )
                }
                <div className='w-full mt-[40px] md:mt-[60px] '>
                    <ul className='gap-5 md:gap-10 md:w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 '>
                        {products.map((product, index) => (
                            <Links href={`/product/${product.name}`} key={index}>
                                <AnimatedListItem>
                                    <div className={`${(index === 1 || index === 4) && showMore ? 'hidden' : ''} sm:block bg-white filter-bottom-half rounded3 pb-10 cursor-pointer group`}>
                                        <Image
                                            src={product.src}
                                            alt={product.alt}
                                            width={1500}
                                            height={1000}
                                            className="m-auto w-full h-auto group-hover:scale-112 transition-all duration-300 ease-in-out"
                                        />
                                        <p className='w-[60%] uppercase absolute left-4 md:left-10 bottom-3 md:bottom-6 z-1 text-white font-semibold md:text-3xl font-[family-name:var(--font-Public-Sans)]' >
                                            <span>{t(product.name)}</span>
                                        </p>
                                        <div className='opacity-0 absolute  group-hover:opacity-100 transition duration-500 ease-in-out flex items-center justify-center right-4  bottom-7 z-1  w-10  h-10 border-[2px] border-white rounded-[50%]'>
                                            <ChevronRight color="#fff" size={20} />
                                        </div>
                                        {/* <p className="font-semibold md:text-2xl font-[family-name:var(--font-Public-Sans)] text-[red] text-center my-5">{t(product.name)}</p> */}
                                    </div>
                                </AnimatedListItem>
                            </Links>
                        ))}
                    </ul>
                </div>
                {
                    showMore && (
                        <div className='w-full mt-8 text-end'>
                            <JumpComponent link="/product" text="product" />
                        </div>
                    )
                }
            </div>
        </div>
    )
}
