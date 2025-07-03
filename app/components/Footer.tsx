// components/Footer.tsx
import Link from "next/link"
import { useTranslations } from 'next-intl'
import EmailComponent from "@/components/common/EAddress";
import LetterComponent from "@/components/common/Letter";
export function Footer() {
  const t = useTranslations('nav')
  return (
    <footer className="px-6 xl:px-0 w-full text-[18px] bg-7 py-[85px] text-white text-center text-sm font-[family-name:var(--font-Public-Sans)]">
      <div className="max-w-main mx-auto">
        <section className="flex flex-wrap justify-between gap-y-10 text-start">
          <div className="w-full sm:w-1/2 md:w-auto max-w-xs">
            <h1 className="font-bold text-lg">{t("contact")}</h1>
            <div className="mt-6 text-white/85">
              <address style={{ whiteSpace: 'pre-line' }}>
                {t("address")}
              </address>
              <div className="mt-5">
                <EmailComponent />
              </div>
              <p className="mt-5">+86 0769-22991396</p>
            </div>
          </div>

          <div className="w-full sm:w-1/2 md:w-full max-w-xs">
            <h1 className="font-bold text-lg">{t("email")}</h1>
            <div className="mt-6">
              <LetterComponent />
            </div>
          </div>

          <div className="w-full sm:w-1/2 md:w-auto max-w-xs">
            <h1 className="font-bold text-lg">{t("menu")}</h1>
            <ul className="grid gap-3 text-white/85">
              <li className="mt-6">
                <Link href="#">{t("home")}</Link>
              </li>
              <li>
                <Link href="#">{t("about")}</Link>
              </li>
              <li>
                <Link href="#">{t("product")}</Link>
              </li>
              <li>
                <Link href="#">{t("case")}</Link>
              </li>
              <li>
                <Link href="#">{t("news")}</Link>
              </li>
              <li>
                <Link href="#">{t("contact")}</Link>
              </li>
            </ul>
          </div>

          <div className="w-full sm:w-1/2 md:w-auto max-w-xs">
            <h1 className="font-bold text-lg">{t("follow")}</h1>
            <ul className="grid gap-2 text-white/85">
              <li className="mt-6">
                <Link href="#">Facebook</Link>
              </li>
              <li>
                <Link href="https://www.youtube.com/@Jinjiu999" target="_blank" rel="noopener noreferrer">Youtube</Link>
              </li>
              <li>
                <Link  href="https://x.com/AmeliaGu60137" target="_blank" rel="noopener noreferrer">X</Link>
              </li>
              <li>
                <Link href="#">Instagram</Link>
              </li>

            </ul>
          </div>
        </section>

        <section className="text-start mt-20 pr-5">
          © 2025 by Kane. Powered and secured by JJSK
        </section>
      </div>
    </footer>
  )
}
