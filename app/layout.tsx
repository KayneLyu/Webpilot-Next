
// import { Roboto_Condensed, Geist_Mono, Public_Sans, Lexend_Exa, Roboto } from "next/font/google";
import { useLocale } from 'next-intl'
import localFont from "next/font/local";

import "./globals.css";

const PublicSans = localFont({
    variable: "--font-Public-Sans",
    src: [
        {
            path: "./../public/fonts/PublicSans-Regular.ttf",
            weight: "400",
            style: "normal",
        },
        {
            path: "./../public/fonts/PublicSans-Medium.ttf",
            weight: "500",
            style: "normal",
        },
        {
            path: "./../public/fonts/PublicSans-Bold.ttf",
            weight: "700",
            style: "normal",
        }
    ]
});

const RecursiveFont = localFont({
    variable: "--font-Lexend_Exa",
    src: [
        {
            path: "./../public/fonts/LexendExa-Regular.ttf",
            weight: "400",
            style: "normal",
        },
        {
            path: "./../public/fonts/LexendExa-Medium.ttf",
            weight: "500",
            style: "normal",
        },
        {
            path: "./../public/fonts/LexendExa-Bold.ttf",
            weight: "700",
            style: "normal",
        }
    ]
});

const geistMono = localFont({
    variable: "--font-geist-mono",
    src: [
        {
            path: "./../public/fonts/GeistMono-Regular.ttf",
            weight: "400",
            style: "normal",
        },
        {
            path: "./../public/fonts/GeistMono-Medium.ttf",
            weight: "500",
            style: "normal",
        },
        {
            path: "./../public/fonts/GeistMono-Bold.ttf",
            weight: "700",
            style: "normal",
        }
    ]
});

const RobotoFont = localFont({
    variable: "--font-Roboto",
    src: [
        {
            path: "./../public/fonts/Roboto-Regular.ttf",
            weight: "400",
            style: "normal",
        },
        {
            path: "./../public/fonts/Roboto-Medium.ttf",
            weight: "500",
            style: "normal",
        },
        {
            path: "./../public/fonts/Roboto-Bold.ttf",
            weight: "700",
            style: "normal",
        },
    ],
});

const RobotoCondensed = localFont({
    variable: "--font-Roboto-Condensed",
    src: [
        {
            path: "./../public/fonts/RobotoCondensed-Regular.ttf",
            weight: "400",
            style: "normal",
        },
        {
            path: "./../public/fonts/RobotoCondensed-Bold.ttf",
            weight: "700",
            style: "normal",
        },
    ],
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode,
}>) {
    const locale = useLocale();
    return (
        <html lang={locale}>
            <head>
                <meta name="google-site-verification" content="5Ghtj0OA0vAyCrA_wkSQ4MSQ4az8UP338sF5i96uMOo" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
                {/*
                 * Favicons. Search engines (Google in particular) only show a site
                 * icon in the results when it is square and its size is a multiple
                 * of 48px, so the 48/96/144 entries below are the ones that matter;
                 * 16/32 keep browser tabs sharp and apple-touch-icon covers iOS.
                 * All URLs are relative so they stay valid on every host/locale.
                 */}
                <link rel="icon" href="/favicon.ico" sizes="any" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png" />
                <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
                <link rel="icon" type="image/png" sizes="144x144" href="/favicon-144x144.png" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <meta name="theme-color" content="#ffffff" />
                <script defer src="https://cloud.umami.is/script.js" data-website-id="493f4932-294a-46b6-be6d-e0d345832a41"></script>
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
