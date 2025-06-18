// components/Footer.tsx
import Link from "next/link"
import { useTranslations } from 'next-intl'
export function Footer() {
  const t = useTranslations('nav')
  return (
    <footer className="pl-10 md:px-20 text-[18px] bg-7 py-[85px] md:h-[605px] text-white text-center text-sm font-[family-name:var(--font-Public-Sans)]">
      <section className="flex flex-wrap justify-between gap-y-10 text-start">
        <div className="w-full sm:w-1/2 md:w-auto max-w-xs">
          <h1 className="font-bold text-lg">{t("contact")}</h1>
          <div className="mt-6 text-white/85">
            <address>
              {t("address1")}<br />
              {t("address2")}<br />
              {t("address3")}<br />
              {t("address4")}
            </address>
            <p className="cursor-pointer mt-5 underline md:no-underline hover:underline font-bold"> sales@jinjiutech.com </p>
            <p className="mt-5">+86 0769-22991396</p>
          </div>
        </div>

        <div className="w-full sm:w-1/2 md:w-auto max-w-xs">
          <h1 className="font-bold text-lg">{t("email")}</h1>
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
              <Link  href="#">Youtube</Link>
            </li>
            <li>
              <Link  href="#">X</Link>
            </li>
            <li>
              <Link  href="#">Instagram</Link>
            </li>

          </ul>
        </div>
      </section>

      <section className="text-start mt-20">
        © 2025 by Kane. Powered and secured by JJSK
      </section>



    </footer>
  )
}
