import { useTranslations } from 'next-intl'
import SectionTittle from '@/components/common/Section-title';
export default function News() {
    const t = useTranslations()
    return (
        <>
            <div>
                <div>
                    <SectionTittle text={t("nav.news")} textColor='text-black' spanBgColor='bg-white' />
                </div>
                <div>

                </div>
            </div>
        </>
    )
}