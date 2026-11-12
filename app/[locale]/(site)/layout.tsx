import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import BackTop from "@/components/common/BackTop";
import SideBar from "@/components/common/SideBar";
import BrowserCheck from "@/components/BrowserCheck";

/**
 * Public website chrome: every regular page (home, products, cases, news,
 * contact…) renders inside it. Keeping it in a route group means adding a page
 * is a matter of dropping a folder here; it does not affect the landing page.
 */
export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='relative flex flex-col'>
      <Header />
      <BackTop />
      <SideBar />
      <main className="flex-1">
        {children}
        <BrowserCheck />
      </main>
      <Footer />
    </div>
  );
}
