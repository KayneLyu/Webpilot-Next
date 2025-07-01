'use client';
import { useRouter } from 'next/navigation';
import { ChevronLeft } from 'lucide-react'; // 可选图标库
import { useTranslations } from 'next-intl'

export default function BackButton() {
    const router = useRouter();
    const t = useTranslations()

    return (
        <div onClick={() => router.back()} className='group w-[200px] my-6 mb-10 cursor-pointer'>
            <span>
                <button className=" group-hover:border-6/50   group-hover:bg-6/50 cursor-pointer overflow-hidden w-10 h-10 border-[2px] border-3 rounded-[50%] p-1">
                    <p className="flex h-[44px] mt-[-8px] items-center   transform translate-x-[-30px] transition duration-300 ease-in-out group-hover:translate-x-[6px] ">
                        <span className="mr-[15px]"><ChevronLeft color="#fff" size={20} /></span>
                        <span><ChevronLeft color="#1C1E8C" size={20} /></span>
                    </p>
                </button>
            </span>
            <span className={`text-2 text-[16px] md:text-[22px] font-[family-name:var(--font-Roboto-Condensed)] inline-block transition-all duration-300 ease-in-out group-hover:translate-x-[-15px] ml-6`}>{t(`button.back`)}</span>
        </div>
    );
}
