
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
                <link rel="icon" href="/favicon.ico" sizes="any" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
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
