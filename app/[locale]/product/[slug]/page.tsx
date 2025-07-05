import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import BackButton from '@/components/common/BackButton';
import ProductSpecial from '@/components/common/ProductDetail';
import MoreCases from './components/cases';
export default async function ProductDetail({ params }: { params: Promise<{ locale: string, slug: string }> }) {
    const t = await getTranslations();
    const { slug } = await params;
    return (
        <div className="w-full py-10 md:pb-20">
            <div className='max-w-main mx-auto hidden sm:block'>
                <BackButton />
            </div>
            <div className="max-w-[1300px] mx-auto">

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
            </div>

            <div className='mt-10 md:mt-25'>
                <MoreCases />
            </div>
        </div>
    )
}