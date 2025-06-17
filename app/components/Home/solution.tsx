import Image from "next/image";
import { useTranslations } from 'next-intl'
import SectionTittle from '@/components/common/Section-title';
export default function SolutionSection() {
    const t = useTranslations('home')
    return (
        <>
            <div>
                <div>
                    <SectionTittle text={t("solution")} />
                </div>
                <div className="mt-10">
                    <Image
                        src="/images/solution.png"
                        alt="solution"
                        width={1500}
                        height={1000}
                        className="m-auto w-full md:w-400 h-auto"
                    />
                </div>
            </div>
        </>
    )
}
