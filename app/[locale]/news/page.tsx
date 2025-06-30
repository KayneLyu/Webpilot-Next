import { getAllNews } from '@/lib/news';
import Link from 'next/link';
import Image from 'next/image';
import JumpComponent from '@/components/common/Jump';
import dayjs from 'dayjs';
export default async function NewsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const newsList = await getAllNews(locale);
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
            <div className='pt-10 md:pt-25'>
              <ul className="space-y-6 news-list flex flex-wrap gap-6">
                {newsList.map((news) => (
                  <li key={news.slug} className='news-item basis-full sm:basis-1/3'>
                    <Link href={`/${locale}/news/${news.slug}`}>
                      <div className='group bg-white rounded-2xl overflow-hidden cursor-pointer'>
                        <div className='h-[340px] overflow-hidden'>
                          <Image
                            src={news.cover}
                            width={1200}
                            height={1200}
                            alt='News'
                            className='w-full h-full object-cover group-hover:scale-112 transition duration-300 ease-in-out'
                          />
                        </div>
                        <div className='px-5 md:px-10 text-2'>
                          <p className='flex justify-between my-3 mt-5'>
                            <span></span>
                            <span className='font-semibold italic'>{dayjs(news.date).format("YYYY-MM-DD")}</span>
                          </p>
                          <p className='font-semibold  text-[18px] md:text-[22px] line-clamp-2 overflow-hidden text-ellipsis'>{news.title}</p>
                          <p className='my-3 line-clamp-3 overflow-hidden text-ellipsis'>{news.excerpt}</p>
                          <div className='mt-12 mb-8'>
                            <JumpComponent text='more'/>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>



          <div className='w-full bg-9 pt-10 md:pt-20'>
            <div className='max-w-main mx-auto'>
              {/* <MapComponent /> */}
            </div>
          </div>
        </div>

      </div>
    </>


  );
}
