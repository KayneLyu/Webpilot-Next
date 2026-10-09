import HonorList from './honorList';
import BackButton from '@/components/common/BackButton';
import { getTranslations } from 'next-intl/server'
import type { Metadata } from "next";
import { pageMetadata } from '@/lib/seo';
export const generateMetadata = async ({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> => {
  const t = await getTranslations();
  const { locale } = await params;
  return pageMetadata({
    locale,
    path: '/honor',
    title: t('seo.honor.title'),
    description: t('seo.honor.description'),
    siteName: t('seo.brand'),
  });
};


export default function HonorsPage() {

  const cases = [
    "/honor/1.webp",
    "/honor/2.webp",
    "/honor/3.webp",
    "/honor/4.webp",
    "/honor/5.webp",
    "/honor/6.webp",
    "/honor/7.webp",
    "/honor/8.webp",
    "/honor/9.webp",
    "/honor/10.webp",
    "/honor/11.webp",
    "/honor/12.webp",
  ]
  return (
    <div className='max-w-main mx-auto py-10 md:py-20'>
      <div className='px-5 hidden md:block'>
        <BackButton />
      </div>
      <div  className=''>
        <HonorList cases={cases} />
      </div>
    </div>
  )
}