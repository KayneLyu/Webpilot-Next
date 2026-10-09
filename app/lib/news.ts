import fs from 'fs';
import path from 'path';
import { parseMarkdown } from './markdown.ts';
import { routing } from '../../i18n/routing';

/** Content folder backing a locale: only zh has its own, the rest reuse English. */
function contentDir(locale: string) {
  return locale === 'zh' ? 'zh' : 'en';
}

export async function getAllNews(locale: string) {
  const newsDirectory = path.join(process.cwd(), 'content', contentDir(locale), 'news');
  const fileNames = fs.existsSync(newsDirectory) ? fs.readdirSync(newsDirectory) : [];
  const newsList = await Promise.all(
    fileNames.map(async (fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(newsDirectory, fileName);
      const { metadata } = await parseMarkdown(fullPath);
      return {
        slug,
        ...metadata,
      };
    })
  );
  return newsList.sort((a, b) => (a.date > b.date ? -1 : 1));
}

/**
 * Every locale that actually publishes this article. The content folders
 * currently hold the same slugs, but hreflang should only ever advertise
 * translations that really exist.
 */
export function newsLocales(slug: string) {
  return routing.locales.filter((locale) =>
    fs.existsSync(path.join(process.cwd(), 'content', contentDir(locale), 'news', `${slug}.md`))
  );
}

export async function getNewsBySlug(locale: string, slug: string) {
  const fullPath = path.join(process.cwd(), 'content', contentDir(locale), 'news', `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;
  const { metadata, contentHtml } = await parseMarkdown(fullPath);
  return {
    slug,
    metadata,
    contentHtml,
  };
}
