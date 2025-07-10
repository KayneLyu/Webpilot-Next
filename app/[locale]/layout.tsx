
import { NextIntlClientProvider, hasLocale } from 'next-intl'
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import BackTop from "@/components/common/BackTop";
import BrowserCheck from "@/components/BrowserCheck";
import { routing } from '../../i18n/routing';
import { notFound } from 'next/navigation'
export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode,
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  return (
    <div className='relative flex flex-col'>
      <NextIntlClientProvider>
        <Header />
        <BackTop />
        <main className="flex-1">
          {children}
          <BrowserCheck />
        </main>
        <Footer />
      </NextIntlClientProvider>
    </div>
  );
}
