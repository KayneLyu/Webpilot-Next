
import { Roboto_Condensed, Geist_Mono, Public_Sans, Lexend_Exa, Roboto } from "next/font/google";
import { useLocale } from 'next-intl'
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

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode,
}>) {
    const locale = useLocale();
    return (
        <html lang={locale}>
            <head>
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
