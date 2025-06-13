// app/components/LanguageSwitcher.tsx
import { useRouter } from 'next/router';
import Link from 'next/link';

const locales = ['en', 'zh'];

export default function LanguageSwitcher() {
  const { asPath } = useRouter();

  return (
    <div>
      {locales.map((locale) => (
        <Link
          key={locale}
          href={asPath}
          locale={locale}
          className="mx-2 p-2 hover:underline"
          onClick={() => document.documentElement.setAttribute('lang', locale)}
        >
          {locale.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}