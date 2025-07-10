import Image from 'next/image';
import { useTranslations } from 'next-intl'
import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

export const generateMetadata = async ({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> => {
  const t = await getTranslations();
  const { locale } = await params;
  return {
    title: t('seo.about.title'), // 来自你的 zh.json / en.json
    keywords: ['air ring', 'auto air ring', 'automatic air ring', '风环', '自动风环', '测厚仪', '吹膜机', '吹膜自动化', 'jinjiu', '金久'],
    description: t('seo.about.description'),
    alternates: {
      canonical: `https://jinjiutech.com/${locale}/about`,
      languages: {
        zh: 'https://jinjiutech.com/zh/about',
        en: 'https://jinjiutech.com/en/about',
        ko: 'https://jinjiutech.com/ko/about',
        ru: 'https://jinjiutech.com/ru/about',
        vi: 'https://jinjiutech.com/vi/about',
        tr: 'https://jinjiutech.com/tr/about'
      }
    }
  };
};

export default function AboutPage() {
  const t = useTranslations("about")
  return (
    <>
      <div className='w-full '>
        <section className='fixed w-full z-[-1]'>
          <Image
            alt="about"
            src="/images/about.webp"
            width={1500}
            height={1000}
            className='w-full object-cover h-100 md:h-200'
          />
        </section>

        <div className='w-full h-90 md:h-180'>
        </div>

        <div className='bg-9'>
          <div className='w-full pt-10 md:pt-25'>
            <div className=" max-w-main mx-auto flex flex-wrap w-full ">
              <div className="w-full md:w-1/2 p-5">
                <div className="flex flex-col gap-2 h-full xl:mx-[74px] text-[14px] md:text-[18px] leading-[24px]  md:leading-[30px] text-4">
                  <h1 className="about-title mb-5">{t("tittle1")}</h1>
                  <p className='indent-two-chars' style={{ whiteSpace: 'pre-line'}}>
                    {t('part1')}
                  </p>
                </div>
              </div>

              <div className="flex items-center w-full md:w-1/2 p-5">
                <Image
                  src="/about/1.webp"
                  alt="about"
                  width={1500}
                  height={1}
                  className="w-full h-auto rounded3"
                  priority={true}
                />
              </div>
            </div>
          </div>

          <div className='w-full pt-10 md:pt-25'>
            <div className=" max-w-main mx-auto flex flex-wrap w-full ">
              <div className="flex items-center w-full md:w-1/2 p-5">
                <Image
                  src="/about/2.webp"
                  alt="about"
                  width={1500}
                  height={1}
                  className="w-full h-auto rounded3"
                  priority={true}
                />
              </div>

              <div className="w-full md:w-1/2 p-5">
                <div className="flex flex-col gap-2 h-full xl:mx-[74px] text-[14px] leading-[24px] md:text-[18px] md:leading-[30px] text-4">
                  <h1 className="about-title mb-5">{t("tittle2")}</h1>
                  <p style={{ whiteSpace: 'pre-line' }}>
                    {t('part2')}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className='w-full pt-10 md:pt-20 pb-25'>
            <div className=" max-w-main mx-auto flex flex-wrap w-full ">
              <div className="w-full md:w-1/2 p-5">
                <div className="flex flex-col gap-2 h-full xl:mx-[74px] text-[14px] leading-[24px] md:text-[18px] md:leading-[30px] text-4">
                  <h1 className="about-title mb-5">{t("tittle3")}</h1>
                  <p style={{ whiteSpace: 'pre-line' }}>
                    {t('part3')}
                  </p>
                </div>
              </div>

              <div className="flex items-center w-full md:w-1/2 p-5">
                <Image
                  src="/about/3.webp"
                  alt="about"
                  width={1500}
                  height={1}
                  className="w-full h-auto rounded3"
                  priority={true}
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}
