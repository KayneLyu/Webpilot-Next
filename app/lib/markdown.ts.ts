import fs from 'fs';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
type IMeteData = {
  title: string
  date: string
  cover: string
  excerpt: string
  tag: string
  description?: string
}
export async function parseMarkdown(filePath: string) {
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);
  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();
  return {
    metadata: data as IMeteData,
    contentHtml,
  };
}
