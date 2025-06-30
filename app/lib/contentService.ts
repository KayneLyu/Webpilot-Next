import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const CONTENT_DIR = path.join(process.cwd(), 'public', 'content');

export function getMarkdownContent(type: string, slug:string) {
  const filePath = path.join(CONTENT_DIR, type, `${slug}.md`);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);
  return { frontMatter: data, content };
}

export function getAllMarkdownSlugs(type: string) {
  const dirPath = path.join(CONTENT_DIR, type);
  return fs.readdirSync(dirPath).map((fileName) => ({
    params: { slug: fileName.replace(/\.md$/, '') },
  }));
}