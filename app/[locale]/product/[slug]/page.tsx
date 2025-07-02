import Image from 'next/image';
export default async function ProductDetail({ params }: { params: Promise<{ locale: string, slug: string }> }) {
    const { slug } = await params;
    return (
        <div className="w-full py-10 md:py-20">
            <div className="max-w-[1000px] mx-auto">
                <div className='flex flex-wrap px-5'>
                    <div className='basis-full sm:basis-1/2'>
                        <Image src={`/products/${slug}.webp`}
                            alt="product"
                            width={1920}
                            height={1080}
                            className='w-150 h-auto rounded-lg '
                        />
                    </div>
                    <div className='basis-full sm:basis-1/2 md:pl-5'>
                        data
                    </div>
                </div>
            </div>
        </div>
    )
}