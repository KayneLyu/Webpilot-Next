import Image from 'next/image';
import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import BackButton from '@/components/common/BackButton';
import ProductSpecial from '@/components/common/ProductDetail';
import MoreCases from './components/cases';
import AutomaticAirRing from "./components/airRing";
import { pageMetadata } from '@/lib/seo';
import { PRODUCT_SEO } from '@/lib/keywords';

// Without this the route would inherit the layout's canonical, i.e. every
// product page would tell search engines it is a copy of the home page.
export const generateMetadata = async ({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> => {
    const t = await getTranslations();
    const { locale, slug } = await params;
    const name = t(`product.${slug}`)
    // Overseas search copy is curated in English; other locales keep their
    // translated name + description instead of showing English to visitors.
    const englishSeo = locale === 'en' ? PRODUCT_SEO[slug] : undefined
    return pageMetadata({
        locale,
        path: `/product/${slug}`,
        title: englishSeo?.title ?? name,
        // Prefixing the product name keeps each detail page's description unique
        // instead of sharing the product-index wording verbatim.
        description: englishSeo?.description ?? t('seo.productDescription', { name }),
        siteName: t('seo.brand'),
    });
};

export default async function ProductDetail({ params }: { params: Promise<{ locale: string, slug: string }> }) {
    const t = await getTranslations();
    const { slug } = await params;
    return (
        <div className="w-full py-10 md:pb-20">
            <div className='main-container hidden sm:block'>
                <BackButton />
            </div>
            
            <div className="max-w-[1200px] mx-auto px-5 sm:px-0">
                <h1 className='h1-span w-full text-[18px]  text-center text-2 mb-10'>{t(`product.${slug}`)}</h1>
                <div className='flex flex-wrap px-5'>
                    <div className='basis-full sm:basis-1/2 pr-5'>
                        <Image src={`/products/${slug}.png`}
                            alt="product"
                            width={1920}
                            height={1080}
                            className='w-full h-auto rounded-lg '
                        />
                    </div>
                    <div className='basis-full sm:basis-1/2 md:pl-5 mt-0 md:mt-10'>
                        <ProductSpecial product={slug} />
                    </div>
                </div>

                <div className='mt-12'>
                    { (slug == "automatic_air_ring" || slug == "lift_automatic_air_ring") && <AutomaticAirRing /> }
                </div>
            </div>

            <div className='mt-10 md:mt-25'>
                <MoreCases />
            </div>
        </div>
    )
}