import { useLocale } from 'next-intl';
import Link from "next/link"
export default function LocalizedLink({ href, children, className, ...props }: {
    href: string,
    children: React.ReactNode,
    className?: string,
    [key: string]: any
}) {
    const locale = useLocale();
    // 如果是外部链接，不处理
    if (href.startsWith('http') || href.startsWith('#')) {
        return (
            <a href={href} className={className} {...props}>
                {children}
            </a>
        );
    }
    // 如果是内部链接，加上语言前缀
    return (
        <Link href={`/${locale + href}`} className={className} {...props}>
            {children}
        </Link>
    );
}