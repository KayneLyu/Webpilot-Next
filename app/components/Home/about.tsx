import Image from "next/image";
import { useTranslations } from 'next-intl'
import JumpComponent from '@/components/common/JumpTo';

export default function AboutSection() {
    const t = useTranslations('home')
    return (
        <>
            <div className="flex flex-wrap w-full ">
                <div className="flex items-center w-full md:w-1/2 p-5">
                    <Image
                        src="/images/offer_pc.webp"
                        alt="about"
                        width={1500}
                        height={1}
                        className="w-full h-auto rounded3"
                        priority={true}
                    />
                </div>
                <div className="w-full md:w-1/2 p-5">
                    <div className="flex flex-col gap-2 md:justify-between  h-full xl:mx-[74px] text-[14px] leading-[24px] md:text-[18px] md:leading-[30px] text-4">
                        <h1 className="section-title">{t("jinjiu")}</h1>
                        <p className="indent-two-chars">{t('about1')}</p>
                        <p className="indent-two-chars">{t('about2')}</p>
                        <p className="indent-two-chars">{t('about3')}</p>
                        <p className="mt-[20px]">
                            <JumpComponent link="/about" text="us" />
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}