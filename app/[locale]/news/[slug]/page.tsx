import { getNewsBySlug } from '@/lib/news';
import { notFound } from 'next/navigation';
import dayjs from 'dayjs';
import BackButton from '@/components/common/BackButton';

export default async function NewsDetail({ params }: { params: Promise<{ locale: string, slug: string }> }) {
    const { locale, slug } = await params;
    const news = await getNewsBySlug(locale, slug);
    if (!news) return notFound();
    return (
        <article>
            <div className=" max-w-[1100px] min-h-[800px] mx-auto p-6">
                <div className='hidden sm:block'>
                    <BackButton />
                </div>
                
                <h1 className="text-[20px] text-3 md:text-3xl font-bold">{news.metadata.title}</h1>
                <p className="text-sm text-gray-500">{dayjs(news.metadata.date).format("YYYY-MM-DD")}</p>
                <div
                    className="prose flex flex-col gap-6 mt-6 text-[16px] md:text-[20px]"
                    dangerouslySetInnerHTML={{ __html: news.contentHtml }}
                />
            </div>
        </article>
    );
}
