import Link from 'next/link';
import { ArrowRight, Clock } from 'lucide-react';
import type { BlogPost } from '@/lib/content';
import styles from './BlogCard.module.css';

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`} className={styles.card} aria-label={`Read ${post.title}`}>
      {/* Image */}
      <div className={styles.thumbnail} style={{ background: post.imageGradient }} aria-hidden="true">
        <div className={styles.thumbnailOverlay} />
      </div>

      {/* Body */}
      <div className={styles.body}>
        <div className={styles.meta}>
          <span className={styles.date}>{post.date}</span>
          <span className={styles.dot} aria-hidden="true">·</span>
          <span className={styles.category}>{post.category}</span>
        </div>

        <h3 className={styles.title}>{post.title}</h3>
        <p className={styles.description}>{post.description}</p>

        <div className={styles.footer}>
          <div className={styles.readTime}>
            <Clock size={13} strokeWidth={2} />
            {post.readTime}
          </div>
          <span className={styles.arrow}>
            <ArrowRight size={15} strokeWidth={2} />
          </span>
        </div>
      </div>
    </Link>
  );
}
