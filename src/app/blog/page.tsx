import type { Metadata } from 'next';
import { getBlogPosts } from '@/lib/content';
import BlogCard from '@/components/BlogCard';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Thoughts, tutorials, and insights on front-end development and product design.',
};

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <main className={styles.main}>
      <div className={`container ${styles.header}`}>
        <h1 className={`text-heading ${styles.title}`}>Latest Thoughts</h1>
        <p className={styles.subtitle}>
          Writing about front-end development, product design, and my journey 
          building digital experiences. Here are all my published articles.
        </p>
      </div>

      <div className={`container ${styles.grid}`}>
        {posts.map((post, index) => (
          <div 
            key={post.slug} 
            className={styles.blogWrapper}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <BlogCard post={post} />
          </div>
        ))}
      </div>
    </main>
  );
}
