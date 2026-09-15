import type { MetadataRoute } from 'next';
import { getBlogPosts, getProjects } from '@/lib/content';

const SITE = 'https://mahtabazim.ir';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [posts, projects] = await Promise.all([getBlogPosts(), getProjects()]);

  const staticPages: MetadataRoute.Sitemap = [
    { url: SITE, changeFrequency: 'monthly', priority: 1 },
    { url: `${SITE}/projects`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE}/blog`, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${SITE}/about`, changeFrequency: 'yearly', priority: 0.5 },
  ];

  const blogPages: MetadataRoute.Sitemap = posts.flatMap((post) => {
    const url = `${SITE}/blog/${post.slug}`;
    const lastModified = new Date(post.date);

    // Both languages are listed, each pointing at the other, so search
    // engines treat them as translations rather than duplicates.
    const languages = post.contentHtmlFa
      ? { en: url, fa: `${url}/fa` }
      : undefined;

    const entries: MetadataRoute.Sitemap = [
      {
        url,
        lastModified,
        changeFrequency: 'yearly',
        priority: 0.7,
        ...(languages ? { alternates: { languages } } : {}),
      },
    ];

    if (post.contentHtmlFa) {
      entries.push({
        url: `${url}/fa`,
        lastModified,
        changeFrequency: 'yearly',
        priority: 0.7,
        alternates: { languages },
      });
    }

    return entries;
  });

  const projectPages: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${SITE}/projects/${project.slug}`,
    lastModified: new Date(project.date),
    changeFrequency: 'yearly',
    priority: 0.6,
  }));

  return [...staticPages, ...blogPages, ...projectPages];
}
