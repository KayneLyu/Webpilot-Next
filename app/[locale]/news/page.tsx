import fs from 'fs/promises';
import path from 'path';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import { useTranslations } from 'next-intl'

export default async function NewsPage({ params }: { params: { locale: string } }) {
  const { locale } = await params;
  console.log(locale);

  const filePath = path.join(process.cwd(), 'public', 'content', locale, `1.md`);
  const content = await fs.readFile(filePath, 'utf-8');

  // const metadataPath = path.join(process.cwd(), 'public', 'content', locale, 'metadata.json');
  // const metadata = JSON.parse(await fs.readFile(metadataPath, 'utf-8'));
  return (
    <>
      <div className='w-full'>
        <section className='fixed w-full z-[-1]'>
          <Image
            alt="about"
            src="/images/product.webp"
            width={1500}
            height={1000}
            className='w-full object-cover h-100 md:h-200'
          />
        </section>

        <div className='w-full h-90 md:h-180'>
        </div>

        <div className='bg-9 h-500'>
          <div className='max-w-main mx-auto'>
            <div className="prose max-w-none">
              <ReactMarkdown
                // components={{
                //   img({ node, ...props }) {
                //     const src = props.src?.startsWith('./')
                //       ? `/content/${locale}/1/${props.src.slice(2)}`
                //       : props.src;
                //     return <img {...props} src={src} alt={props.alt} />;
                //   }
                // }}
              >
                {content}
              </ReactMarkdown>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
