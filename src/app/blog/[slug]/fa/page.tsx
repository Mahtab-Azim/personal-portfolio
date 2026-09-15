import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getBlogPostBySlug, getBlogPosts } from '@/lib/content';
import ArticleView from '@/components/ArticleView';

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.filter((post) => post.contentHtmlFa).map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post?.contentHtmlFa) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.titleFa ?? post.title,
    description: post.descriptionFa ?? post.description,
    alternates: {
      canonical: `/blog/${post.slug}/fa`,
      languages: {
        en: `/blog/${post.slug}`,
        fa: `/blog/${post.slug}/fa`,
      },
    },
    openGraph: {
      locale: 'fa_IR',
      title: post.titleFa ?? post.title,
      description: post.descriptionFa ?? post.description,
    },
  };
}

export default async function BlogDetailPageFa({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post?.contentHtmlFa) {
    notFound();
  }

  return <ArticleView post={post} lang="fa" />;
}
