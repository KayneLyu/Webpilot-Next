
import Image from "next/image";
import Marquee from '@/components/common/marquee';
import { useTranslations } from 'next-intl'
export default function Honors() {
    const t = useTranslations('home')
    const honors = [
        {
            icons: "/focus.svg",
            title: "20+",
            text: "honor1"
        },
        {
            icons: "/iso.svg",
            title: "tech",
            text: "honor2"
        },
        {
            icons: "/line.svg",
            title: "200+",
            text: "honor3"
        },
        {
            icons: "/team.svg",
            title: "30+",
            text: "honor4"
        },

    ]
    return (
        <>
            <div className="w-full bg-5/60 py-[70px] md:py-[80px]">
                <div className="max-w-main mx-auto text-center px-6 xl:px-0">
                    <div className="w-full text-start">
                        <h1 className="section-title">{t("brief")}</h1>
                    </div>
                    <ul className="overflow-x-auto flex mt-20 pb-3">
                        {
                            honors.map((item, index) => (
                                <li key={index} className="flex flex-col  items-center">
                                    <div className="w-[130px] md:w-full text-center md:px-15 mx-2">
                                        <div>
                                            <Image className="mx-auto w-[50px] md:w-[100px] h-auto" src={item.icons} alt="honor" width={100} height={100} />
                                        </div>
                                        <div className="text-3  text-[26px] md:text-[46px] mt-8">
                                            {index == 1 ? t(item.title) : item.title}
                                        </div>
                                        <div className="text-4  text-[14px] md:text-[18px] mt-8">
                                            { t(item.text) }
                                        </div>
                                    </div>
                                </li>
                            )
                            )
                        }
                    </ul>
                    <div>
                        <Marquee />
                    </div>
                </div>
            </div>
        </>
    )
}