import fs from 'fs';
import path from 'path';

const CONTENT_PATH = path.join(process.cwd(), '../docs/product-hub/content');

export async function getDocBySlug(slug: string) {
  const filePath = path.join(CONTENT_PATH, `${slug}.md`);
  if (!fs.existsSync(filePath)) {
    return null;
  }
  const source = fs.readFileSync(filePath, 'utf8');
  return source;
}

export async function getAllDocSlugs() {
  if (!fs.existsSync(CONTENT_PATH)) return [];
  const files = fs.readdirSync(CONTENT_PATH);
  return files
    .filter((file) => file.endsWith('.md'))
    .map((file) => file.replace(/\.md$/, ''));
}
