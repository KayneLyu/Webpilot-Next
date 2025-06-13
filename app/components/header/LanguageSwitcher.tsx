
import Image from "next/image";
import { usePathname, useRouter } from 'next/navigation';

export default function LocaleSwitcher() {
    const pathname = usePathname();
    const router = useRouter();
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
    ];


    const handleSwitch = (targetLocale: string) => {
        const segments = pathname.split('/');
        segments[1] = targetLocale;
        const newPath = segments.join('/');
        router.push(newPath); // ✅ 客户端无感跳转
    };

    return (
        <div>
            {
                languages.map((item) => (
                    <p
                        className='h-13 flex items-center leading-13 text-base border-t border-8'
                        key={item.value}
                        onClick={() => handleSwitch(item.value)}
                    >
                        <Image src={item.path} alt="lang"
                            aria-hidden
                            width={28}
                            height={1}
                            className="mr-4 w-8 md:w-20 h-auto  md:h-15"
                        />
                        <span>{item.label}</span>
                    </p>
                ))
            }

        </div>
    );
}