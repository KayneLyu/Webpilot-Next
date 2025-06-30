import { getAllNews } from '@/lib/news';
import { useLocale } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';

export default async function NewsPage({ params }: { params: { locale: string } }) {
  const { locale } = await params;
  const newsList = await getAllNews(locale);
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">News</h1>
      <ul className="space-y-6">
        {newsList.map((news) => (
          <li key={news.slug}>
            <Link href={`/${locale}/news/${news.slug}`}>
              <div className="flex space-x-4">
                <Image src={news.cover} alt={news.title} width={120} height={80} priority  className='w-40 h-auto'/>
                <div>
                  <h2 className="text-xl font-semibold">{news.title}</h2>
                  <p className="text-sm text-gray-500">{news.date.toString()}</p>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
