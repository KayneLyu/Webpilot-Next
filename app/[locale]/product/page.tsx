import Image from 'next/image';
import { useTranslations } from 'next-intl'
export default function ProductPage() {
    const t = useTranslations("about")

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

                <div className='w-full h-90 md:h-180'>
                </div>

                <div className='bg-white h-500'>



                </div>
            </div>
        </>
    )
}
