import { useLocale } from 'next-intl';
import Link from "next/link"

import { localePath } from '@/lib/locale';

export default function LocalizedLink({ href, children, className, ...props }: {
    href: string,
    children: React.ReactNode,
    className?: string,
    [key: string]: any
}) {
    const locale = useLocale();
    // External links, hashes, mailto: and tel: are not localized.
    if (
        href.startsWith('http') ||
        href.startsWith('#') ||
        href.startsWith('mailto:') ||
        href.startsWith('tel:')
    ) {
        return (
            <a href={href} className={className} {...props}>
                {children}
            </a>
        );
    }
    // English has no prefix; other locales get /zh, /ru, …
    return (
        <Link href={localePath(locale, href)} className={className} {...props}>
            {children}
        </Link>
    );
}
