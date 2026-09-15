import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Clock } from 'lucide-react';
import { getBlogPostBySlug, getBlogPosts } from '@/lib/content';
import PostBody from '@/components/PostBody';

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.title,
    description: post.description,
  };
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="container" style={{ paddingTop: '120px', paddingBottom: '80px' }}>
      <div style={{ maxWidth: '760px', margin: '0 auto' }}>
        <Link href="/blog" style={{ color: '#5B3FD9', fontWeight: 700, marginBottom: '20px', display: 'inline-flex', gap: '8px', alignItems: 'center' }}>
          ← Back to Blog
        </Link>

        <article>
          <div
            style={{
              borderRadius: '24px',
              minHeight: '200px',
              // Scrim over the gradient keeps the white title readable
              // even on lighter cover colours.
              background: `linear-gradient(to top, rgba(13, 11, 38, 0.55) 0%, rgba(13, 11, 38, 0) 85%), ${post.imageGradient}`,
              padding: '28px',
              display: 'flex',
              alignItems: 'flex-end',
              boxShadow: '0 18px 45px rgba(91, 63, 217, 0.12)',
              marginBottom: '24px',
            }}
          >
            <div>
              <p style={{ color: '#fff', textTransform: 'uppercase', letterSpacing: '0.14em', fontSize: '12px', fontWeight: 700 }}>
                {post.category}
              </p>
              <h1 style={{ color: '#fff', fontSize: 'clamp(1.8rem, 3.6vw, 2.8rem)', marginTop: '6px' }}>{post.title}</h1>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#6B6880', fontSize: '0.9rem', marginBottom: '28px' }}>
            <span>{post.date}</span>
            <span aria-hidden="true">·</span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <Clock size={13} strokeWidth={2} />
              {post.readTime}
            </span>
          </div>

          <PostBody
            contentHtml={post.contentHtml}
            titleFa={post.titleFa}
            contentHtmlFa={post.contentHtmlFa}
          />
        </article>
      </div>
    </main>
  );
}
