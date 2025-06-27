
import Image from "next/image";
import Marquee from '@/components/common/marquee';
export default function Honors() {
    const honors = [
        {
            icons: "/focus.svg",
            title: "10+",
            text: "Years of experience in the film extrusion automation industry."
        },
        {
            icons: "/iso.svg",
            title: "CERTIFIED",
            text: "ISO 9001 certified; core technologies protected by multiple utility model patents."
        },
        {
            icons: "/line.svg",
            title: "200+",
            text: "Blown film production lines equipped with Jinjiu's intelligent control systems."
        },
        {
            icons: "/team.svg",
            title: "30+",
            text: "Employees specializing in R&D, manufacturing, and technical service."
        },

    ]
    return (
        <>
            <div className="w-full bg-5/60 py-[70px] md:py-[80px]">
                <div className="max-w-main mx-auto text-center px-6 xl:px-0">
                    <div className="w-full text-start">
                        <h1 className="section-title">JINJIU IN BRIEF</h1>
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
                                            {item.title}
                                        </div>
                                        <div className="text-4  text-[14px] md:text-[18px] mt-8">
                                            {item.text}
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