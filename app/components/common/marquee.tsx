'use client';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';
export default function HonorMarquee() {
    const honors = [
        '/honor/1.webp',
        '/honor/2.webp',
        '/honor/3.webp',
        '/honor/4.webp',
        '/honor/5.webp',
        '/honor/6.webp',
        '/honor/7.webp',
        '/honor/8.webp',
    ];

    return (
        <div className="mt-8">
            <Marquee gradientWidth={50} gradientColor='#7A82B7' pauseOnHover={false} speed={80} gradient={true}>
                {honors.map((src, i) => (
                    <div key={i} className="mx-2 md:mx-6">
                        <Image src={src} alt={`Honor ${i + 1}`} width={200} height={80}
                            className='w-[100px] h-auto md:w-[250px]'
                        />
                    </div>
                ))}
            </Marquee>
        </div>
    );
}
