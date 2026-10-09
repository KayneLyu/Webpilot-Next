import { getNewsBySlug, newsLocales } from '@/lib/news';
import { notFound } from 'next/navigation';
import BackButton from '@/components/common/BackButton';
import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { pageMetadata } from '@/lib/seo';

// Without this the route would inherit the layout's canonical, i.e. every
// article would tell search engines it is a copy of the home page.
export const generateMetadata = async ({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> => {
    const t = await getTranslations();
    const { locale, slug } = await params;
    const news = await getNewsBySlug(locale, slug);
    if (!news) return {};
    return pageMetadata({
        locale,
        path: `/news/${slug}`,
        title: news.metadata.title,
        description: news.metadata.excerpt || t('seo.news.description'),
        siteName: t('seo.brand'),
        type: 'article',
        locales: newsLocales(slug),
    });
};

export default async function NewsDetail({ params }: { params: Promise<{ locale: string, slug: string }> }) {
    const { locale, slug } = await params;
    const news = await getNewsBySlug(locale, slug);
    if (!news) return notFound();
    return (
        <article>
            <div className="max-w-[1100px] min-h-[800px] mx-auto p-6 md:pb-20">
                <div className='hidden sm:block'>
                    <BackButton />
                </div>
                
                <h1 className="text-[20px] text-3 md:text-3xl font-bold">{news.metadata.title}</h1>
                {/* <p className="text-sm text-gray-500">{dayjs(news.metadata.date).format("YYYY-MM-DD")}</p> */}
                <div
                    className="prose flex flex-col gap-6 mt-6 text-[16px] md:text-[20px]"
                    dangerouslySetInnerHTML={{ __html: news.contentHtml }}
                />
            </div>
        </article>
    );
}
