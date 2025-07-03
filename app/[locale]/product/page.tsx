import Image from 'next/image';
import ProductComponent from '@/components/common/ProductList';
export default function ProductPage() {
    const products = [
        {
            src: '/products/auto_air_ring.webp',
            alt: 'profile_control',
            name: 'auto_air_ring',
            link: '/',
            hover: ''
        },
        {
            src: '/products/lift_auto_air_ring.webp',
            alt: 'lift_profile_control',
            name: 'lift_auto_air_ring',
            link: '/',
            hover: ''
        },
        {
            src: '/products/Cross-Direction_Scanning_Thickness_Gauge.webp',
            alt: 'profile_measurement',
            name: 'Cross-Direction_Scanning_Thickness_Gauge',
            link: '/',
            hover: ''
        },
        {
            src: '/products/rotary_thickness_gauge.webp',
            alt: 'rotary_thickness_gauge',
            name: 'rotary_thickness_gauge',
            link: '/',
            hover: ''
        },
        {
            src: '/products/X-Ray_rotary_thickness_gauge.webp',
            alt: 'profile_measurement',
            name: 'X-Ray_rotary_thickness_gauge',
            link: '/',
            hover: ''
        },
        {
            src: '/products/dosing.webp',
            alt: 'dosing',
            name: 'dosing',
            link: '/',
            hover: ''
        },
        {
            src: '/products/Single_Loss-in-Weight.webp',
            alt: 'single_Loss-in-Weight',
            name: 'single_Loss-in-Weight',
            link: '/',
            hover: ''
        },
        {
            src: '/products/solution.webp',
            alt: 'solution',
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
                            <ProductComponent products={products} tittle='section' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
