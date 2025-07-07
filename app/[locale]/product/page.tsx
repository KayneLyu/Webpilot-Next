import Image from 'next/image';
import ProductComponent from '@/components/common/ProductList';

import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { useTranslations } from 'next-intl'
export const generateMetadata = async (): Promise<Metadata> => {
    const t = await getTranslations();

    return {
        title: t('seo.products.title'), // 来自你的 zh.json / en.json
        description: t('seo.products.description'),
        alternates: {
            canonical: 'https://jinjiutech.com/zh/product',
            languages: {
                zh: 'https://jinjiutech.com/zh/product',
                en: 'https://jinjiutech.com/en/product'
            }
        }
    };
};

export default function ProductPage() {
    const t = useTranslations("product");
    const products = [
        {
            src: '/products/automatic_air_ring.png',
            alt: 'automatic air ring',
            name: 'auto_air_ring',
            link: '/',
            hover: ''
        },
        {
            src: '/products/lift_auto_air_ring.png',
            alt: 'lift automatic air ring',
            name: 'lift_auto_air_ring',
            link: '/',
            hover: ''
        },
        {
            src: '/products/Cross-Direction_Scanning_Thickness_Gauge.png',
            alt: 'profile measurement',
            name: 'Cross-Direction_Scanning_Thickness_Gauge',
            link: '/',
            hover: ''
        },
        {
            src: '/products/rotary_thickness_gauge.png',
            alt: 'rotary_thickness_gauge',
            name: 'rotary_thickness_gauge',
            link: '/',
            hover: ''
        },
        {
            src: '/products/X-Ray_rotary_thickness_gauge.png',
            alt: 'profile measurement',
            name: 'X-Ray_rotary_thickness_gauge',
            link: '/',
            hover: ''
        },
        {
            src: '/products/dosing.png',
            alt: 'dosing',
            name: 'dosing',
            link: '/',
            hover: ''
        },
        {
            src: '/products/single_Loss-in-Weight.png',
            alt: 'single Loss-in-Weight',
            name: 'single_Loss-in-Weight',
            link: '/',
            hover: ''
        },
        {
            src: '/products/solutions.png',
            alt: 'automatic air ring solution',
            name: 'solutions',
            link: '/',
            hover: ''
        },
    ]

    return (
        <>
            <div className='w-full'>
                <section className='fixed w-full z-[-1]'>
                    <Image
                        alt="about"
                        src="/images/product.webp"
                        width={1500}
                        height={1000}
                        className='w-full object-cover h-100 md:h-200'
                    />
                </section>

                <div className='w-full md:h-180'>
                </div>

                <div className='bg-9  py-6 md:py-15 '>
                    <div className='max-w-main mx-auto'>
                        <div>
                            <h1 className='section-title'>{t("product")}</h1>
                        </div>
                        <div>
                            <p className='text-2 text-[14px] md:w-[50%] md:text-[18px]'>
                                {t('description')}
                            </p>
                        </div>
                        <div>
                            <ProductComponent products={products} tittle='section' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
