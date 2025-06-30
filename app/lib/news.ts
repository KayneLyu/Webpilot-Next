import fs from 'fs';
import path from 'path';
import { parseMarkdown } from './markdown.ts';

export async function getAllNews(locale: string) {
  const newsDirectory = path.join(process.cwd(), 'content', locale, 'news');
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

export async function getNewsBySlug(locale: string, slug: string) {
  const fullPath = path.join(process.cwd(), 'content', locale, 'news', `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;
  const { metadata, contentHtml } = await parseMarkdown(fullPath);
  return {
    slug,
    metadata,
    contentHtml,
  };
}
