// components/Footer.tsx
import Links from "@/components/common/Links";
import { useTranslations } from 'next-intl'
import EmailComponent from "@/components/common/EAddress";
import LetterComponent from "@/components/common/Letter";
export function Footer() {
  const t = useTranslations('nav')
  return (
    <footer className="px-6 xl:px-0 w-full text-[18px] bg-7 py-[85px] pb-[20px] text-white text-center text-sm font-[family-name:var(--font-Public-Sans)]">
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
              <p className="">+86 186 0769 1396</p>
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
                <Links href="/">{t("home")}</Links>
              </li>
              <li>
                <Links href="/about">{t("about")}</Links>
              </li>
              <li>
                <Links href="/product">{t("product")}</Links>
              </li>
              <li>
                <Links href="/case">{t("case")}</Links>
              </li>
              <li>
                <Links href="/news">{t("news")}</Links>
              </li>
              <li>
                <Links href="/contact">{t("contact")}</Links>
              </li>
            </ul>
          </div>

          <div className="w-full sm:w-1/2 md:w-auto max-w-xs">
            <h1 className="font-bold text-lg">{t("follow")}</h1>
            <ul className="grid gap-2 text-white/85">
              <li className="mt-6">
                <Links href="#">Facebook</Links>
              </li>
              <li>
                <Links href="https://www.youtube.com/@Jinjiu999" target="_blank" rel="noopener noreferrer">Youtube</Links>
              </li>
              <li>
                <Links href="https://x.com/AmeliaGu60137" target="_blank" rel="noopener noreferrer">X</Links>
              </li>
              <li>
                <Links href="#">Instagram</Links>
              </li>

            </ul>
          </div>
        </section>

        <section className="text-white/75 flex gap-4 md:gap-12 flex-wrap text-[14px]  text-start mt-25 pr-5">
          <p className="">
            Copyright © 2025 东莞市金久自动化科技有限公司 版权所有
          </p>
          <p>
            <a href="https://beian.miit.gov.cn" target="_blank">
              备案号: 粤ICP备2025366217号
            </a>
          </p>
        </section>
      </div>
    </footer>
  )
}
