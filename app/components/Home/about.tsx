import Image from "next/image";
import { useTranslations } from 'next-intl'

export default function AboutSection() {
    const t = useTranslations('home')
    return (
        <>
            <div className="flex flex-wrap w-full ">
                <div className="w-full md:w-1/2 p-5">
                    <Image
                        src="/images/offer_pc.webp"
                        alt="about"
                        width={1500}
                        height={1}
                        className="w-full h-auto rounded-tl-[20px] rounded-tr-[20px] rounded-br-[20px] "
                        priority={true}
                    />
                </div>
                <div className="w-full md:w-1/2 p-5">
                    <div className=" sm:ml-[74px] text-[14px] leading-[24px] md:text-[18px] md:leading-[30px] text-4">
                        <h1 className="text-[28px] md:text-[48px]  ">JINJIU</h1>
                        <p>{t('about1')}</p>
                        <p>{t('about2')}</p>
                        <p>{t('about3')}</p>
                    </div>
                </div>
            </div>
        </>
    )
}