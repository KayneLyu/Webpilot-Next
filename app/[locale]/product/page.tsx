import Image from 'next/image';
import { useTranslations } from 'next-intl'
import ProductComponent from '@/components/Home/product';
export default function ProductPage() {
    const t = useTranslations("about")
    const productList = [
        {

        }
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

                <div className='bg-9  py-10'>
                    <div className='max-w-main mx-auto'>
                        <div>
                            <ProductComponent />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
