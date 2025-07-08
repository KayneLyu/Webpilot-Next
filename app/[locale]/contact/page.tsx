import Image from 'next/image';
import { useTranslations } from 'next-intl'
import MapComponent from './map';
import Letters from './letters';

import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

export const generateMetadata = async (): Promise<Metadata> => {
  const t = await getTranslations();
  return {
    title: t('seo.contact.title'), // 来自你的 zh.json / en.json
    keywords: ['air ring', 'auto air ring', 'automatic air ring', '风环', '自动风环', '测厚仪', '吹膜机', '吹膜自动化', 'jinjiu', '金久'],
    description: t('seo.contact.description'),
    alternates: {
      canonical: 'https://jinjiutech.com/en/contact',
      languages: {
        zh: 'https://jinjiutech.com/zh/contact',
        en: 'https://jinjiutech.com/en/contact',
        ko: 'https://jinjiutech.com/ko/contact',
        ru: 'https://jinjiutech.com/ru/contact',
        vi: 'https://jinjiutech.com/vi/contact',
        tr: 'https://jinjiutech.com/tr/contact'
      }
    }
  };
};

export default function ContactPage() {
  const t = useTranslations()
  const contacts = [
    {
      icon: '/mobile.svg',
      title: 'mobile',
      value: ['+86 186 0769 1396', '+86 137 1256 7398']
    },
    {
      icon: '/phone.svg',
      title: 'phone',
      value: ['+86-0769-22991395', '+86-0769-22991396']
    },
    {
      icon: '/fax.svg',
      title: 'fax',
      value: ['+86-0769-23185967']
    },
    {
      icon: '/email.svg',
      title: 'email',
      value: ['sales@jinjiutech.com']
    },
    {
      icon: '/address.svg',
      title: 'address',
      value: [t("nav.address")]
    },
  ]

  const mailtoLink = `mailto:sales@jinjiutech.com`;

  return (
    <>
      <div className='w-full'>
        <section className='fixed w-full z-[-1]'>
          <Image
            alt="contact"
            src="/images/contact.webp"
            width={1500}
            height={1000}
            priority
            className='w-full object-cover h-100 md:h-200'
          />
        </section>

        <div className='w-full h-90 md:h-180'>
        </div>

        <div className='w-full bg-9'>

          <div className='max-w-main mx-auto'>
            <div className='pt-10 md:pt-30'>
              <ul className='pl-10 md:pl-0 flex flex-col md:flex-row justify-between '>
                {
                  contacts.map((contact, index) => (
                    <li key={index} className='mb-7 md:text-center text-3 text-[16px] md:text-[18px]'>
                      <div className='w-[40px] h-[40px] md:w-[80px] md:h-[80px] flex md:mx-auto items-center justify-center   rounded-[50%] bg-5'>
                        <Image
                          src={contact.icon}
                          width={50}
                          height={50}
                          alt={contact.title}
                          className='w-5 h-5 md:w-10 md:h-10'
                        />
                      </div>
                      <div className='text-3/80 my-3 md:my-8 text-[20px]  md:text-[24px]'>
                        {t(`contact.${contact.title}`)}
                      </div>
                      {
                        contact.value.map((item, k) => (
                          contact.title == "email" ? <a href={mailtoLink} className='underline font-semibold' key={k}>{item}</a>
                            :
                            <p className='font-semibold' style={{ whiteSpace: 'pre-line' }} key={k}>{item}</p>
                        ))
                      }
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>

          <div className='w-full bg-5/80 p-10 md:py-20 mt-20'>
            <div className='max-w-[1080px] mx-auto'>
              <Letters />
            </div>
          </div>

          <div className='w-full bg-9 py-10 md:pt-20'>
            <div className='max-w-main mx-auto'>
              <MapComponent />
            </div>
          </div>
        </div>

      </div>
    </>
  )
}
