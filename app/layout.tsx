
import type { Metadata } from "next";
import { Roboto_Condensed, Geist_Mono, Public_Sans, Lexend_Exa, Roboto } from "next/font/google";
import { getTranslations } from 'next-intl/server'
import "./globals.css";

const PublicSans = Public_Sans({
    variable: "--font-Public-Sans",
    subsets: ["latin"],
});

const RecursiveFont = Lexend_Exa({
    variable: "--font-Recursive",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

const RobotoFont = Roboto({
    variable: "--font-Roboto",
    subsets: ["latin"],
});

const RobotoCondensed = Roboto_Condensed({
    variable: "--font-Roboto-Condensed",
    subsets: ["latin"],
});


// meta data
export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale });
    return {
        title: {
            default: t('seo.defaultTitle'),
            template: `%s | ${t('seo.brand')}`
        },
        keywords: ['air ring', 'auto air ring', 'automatic air ring', '风环', '自动风环', '测厚仪', '吹膜机', '吹膜自动化', 'jinjiu', '金久'],
        description: t('seo.defaultDescription'),
        icons: '/favicon.ico',
        metadataBase: new URL('https://jinjiutech.com'),
        alternates: {
            canonical: `https://jinjiutech.com/${locale}`,
            languages: {
                zh: 'https://jinjiutech.com/zh',
                en: 'https://jinjiutech.com/en',
                ko: 'https://jinjiutech.com/ko',
                ru: 'https://jinjiutech.com/ru',
                vi: 'https://jinjiutech.com/vi',
                tr: 'https://jinjiutech.com/tr'
            }
        },

        openGraph: {
            url: 'https://www.jinjiutech.com',
            title: t('seo.defaultTitle'),
            description: t('seo.defaultDescription'),
            siteName: t('seo.brand'),
            locale: locale,
            type: 'website'
        }
    };
}

export default async function RootLayout({
    children,
    params,
}: Readonly<{
    children: React.ReactNode,
    params: Promise<{ locale: string }>;
}>) {
    const { locale } = await params;
    return (
        <html lang={locale}>
            <head>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
                <link rel="icon" href="/favicon.ico" sizes="any" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <meta name="theme-color" content="#ffffff" />
            </head>
            <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
            <body
                className={`${RobotoCondensed.variable} ${RobotoFont.variable} ${PublicSans.variable} ${RecursiveFont.variable} ${geistMono.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
