import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl'
import { usePathname } from '../../../i18n/navigation';
import { localePath } from '@/lib/locale';

export default function DropdownMenuRadioGroupDemo() {
    const locale = useLocale()

    // next-intl's usePathname strips the locale prefix, so it returns
    // `/about` for both `/about` (English) and `/zh/about`.
    const pathname = usePathname();
    const router = useRouter();

    const t = useTranslations('nav')
    const languages = [
        {
            label: "中文",
            value: "zh",
            path: "/china.svg"
        },
        {
            label: "English",
            value: "en",
            path: "/english.svg"
        },
        {
            label: "Русский",
            value: "ru",
            path: "/ru.svg"
        },
        {
            label: "한국어",
            value: "ko",
            path: "/ko.svg"
        },
        {
            label: "Tiếng Việt",
            value: "vi",
            path: "/vi.svg"
        },
        {
            label: "Türkçe",
            value: "tr",
            path: "/tr.svg"
        },
    ];


    const handleSwitch = (targetLocale: string) => {
        // English resolves to the bare path; other locales get their prefix.
        router.push(localePath(targetLocale, pathname || '/'));
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <div className="h-[90%] md:h-hull md:ml-3 cursor-pointer px-4 flex items-center">
                    <Image src="/i18n.svg" alt="change lang"
                        aria-hidden
                        width={28}
                        height={28}
                        className="md:w-8 h-auto"
                        priority
                    />
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="">
                <DropdownMenuLabel>{t('lang')}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup value={locale}>
                    {
                        languages.map((item) => (
                            <DropdownMenuRadioItem key={item.value} value={item.value} onClick={() => handleSwitch(item.value)}>
                                <Image src={item.path} alt="lang"
                                    aria-hidden
                                    width={10}
                                    height={1}
                                    className="w-6 md:w-8 h-auto"
                                />
                                {item.label}
                            </DropdownMenuRadioItem>
                        ))
                    }
                </DropdownMenuRadioGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
