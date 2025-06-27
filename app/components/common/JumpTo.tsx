import { ChevronRight } from "lucide-react"
import { useTranslations } from 'next-intl'
export default function JumpTo({
    link = '#',
    text = '',
    color = 'text-3'
}) {
    const t = useTranslations("button")

    return (
        <a href={link}>
            <span className="group">
                <span className={`${color} text-[16px] md:text-[20px] font-[family-name:var(--font-Roboto-Condensed)] inline-block transition-all duration-300 ease-in-out group-hover:translate-x-4 mr-6`}>{t(`${text}`)}</span>
                <span>
                    <button className=" group-hover:border-6/50   group-hover:bg-6/50 cursor-pointer overflow-hidden w-10 h-10 border-[2px] border-3 rounded-[50%] p-1">
                        <p className="flex h-[44px] mt-[-8px] items-center   transform translate-x-[-30px] transition duration-300 ease-in-out group-hover:translate-x-[6px] ">
                            <span className="mr-[15px]"><ChevronRight color="#fff" size={20} /></span>
                            <span><ChevronRight color="#1C1E8C" size={20} /></span>
                        </p>
                    </button>
                </span>
            </span>
        </a>
    )
}
