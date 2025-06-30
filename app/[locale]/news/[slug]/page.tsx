import { getNewsBySlug } from '@/lib/news';
import { notFound } from 'next/navigation';

type NewsPageProps = {
    params: Promise<{
        locale: string;
        slug: string;
    }>;
};

export default async function NewsDetail({ params }: NewsPageProps) {
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
