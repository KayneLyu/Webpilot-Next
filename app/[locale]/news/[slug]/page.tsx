import { getNewsBySlug } from '@/lib/news';
import { notFound } from 'next/navigation';

export default async function NewsDetail({ params }: { params: { locale: string, slug: string } }) {
    const { locale, slug } = await params;
    const news = await getNewsBySlug(locale, slug);
    if (!news) return notFound();
    return (
        <div className="max-w-3xl mx-auto p-6">
            <h1 className="text-3xl font-bold">{news.metadata.title}</h1>
            <p className="text-sm text-gray-500">{news.metadata.date.toString()}</p>
            <div
                className="prose mt-6"
                dangerouslySetInnerHTML={{ __html: news.contentHtml }}
            />
        </div>
    );
}
