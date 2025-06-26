import Image from 'next/image';
import { useTranslations } from 'next-intl'
export default function AboutPage() {
  const t = useTranslations("about")

  return (
    <>
      <div className='w-full'>
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

        <div className='bg-white'>
          
          <div className='w-full pt-10 md:pt-20'>
            <div className=" max-w-main mx-auto flex flex-wrap w-full ">
              <div className="w-full md:w-1/2 p-5">
                <div className="flex flex-col gap-2 h-full xl:mx-[74px] text-[14px] md:text-[18px] leading-[24px]  md:leading-[30px] text-4">
                  <h1 className="about-title mb-5">{t("tittle1")}</h1>
                  <p>
                    {t('part1')}
                  </p>
                </div>
              </div>

              <div className="flex items-center w-full md:w-1/2 p-5">
                <Image
                  src="/about/3.png"
                  alt="about"
                  width={1500}
                  height={1}
                  className="w-full h-auto rounded3"
                  priority={true}
                />
              </div>
            </div>
          </div>

          <div className='w-full pt-10 md:pt-20'>
            <div className=" max-w-main mx-auto flex flex-wrap w-full ">
              <div className="flex items-center w-full md:w-1/2 p-5">
                <Image
                  src="/about/2.png"
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
                  <p>
                    {t('part1')}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className='w-full pt-10 md:pt-20 pb-20'>
            <div className=" max-w-main mx-auto flex flex-wrap w-full ">
              <div className="w-full md:w-1/2 p-5">
                <div className="flex flex-col gap-2 h-full xl:mx-[74px] text-[14px] leading-[24px] md:text-[18px] md:leading-[30px] text-4">
                  <h1 className="about-title mb-5">{t("tittle3")}</h1>
                  <p>
                    {t('part31')}
                  </p>
                  <p>
                    {t('part32')}
                  </p>
                  <p>
                    {t('part33')}
                  </p>
                  <p>
                    {t('part34')}
                  </p>
                </div>
              </div>

              <div className="flex items-center w-full md:w-1/2 p-5">
                <Image
                  src="/about/1.png"
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
