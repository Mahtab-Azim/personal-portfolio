import Link from 'next/link';
import { Clock } from 'lucide-react';
import type { BlogPost } from '@/lib/content';
import styles from './ArticleView.module.css';

interface ArticleViewProps {
  post: BlogPost;
  lang: 'en' | 'fa';
}

export default function ArticleView({ post, lang }: ArticleViewProps) {
  const isFa = lang === 'fa';
  const hasFa = Boolean(post.contentHtmlFa);
  const html = isFa ? post.contentHtmlFa : post.contentHtml;
  const heading = isFa ? post.titleFa ?? post.title : post.title;

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
            <div style={{ width: '100%' }}>
              <p style={{ color: '#fff', textTransform: 'uppercase', letterSpacing: '0.14em', fontSize: '12px', fontWeight: 700 }}>
                {post.category}
              </p>
              <h1
                className={isFa ? styles.faHeading : undefined}
                lang={isFa ? 'fa' : 'en'}
                dir={isFa ? 'rtl' : 'ltr'}
                style={{ color: '#fff', fontSize: 'clamp(1.8rem, 3.6vw, 2.8rem)', marginTop: '6px' }}
              >
                {heading}
              </h1>
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

          {/* Plain links, so each language is a real server-rendered URL
              rather than a client-side swap. */}
          {hasFa ? (
            <nav className={styles.switcher} aria-label="Article language">
              <Link
                href={`/blog/${post.slug}`}
                className={`${styles.option} ${isFa ? '' : styles.active}`}
                aria-current={isFa ? undefined : 'page'}
                hrefLang="en"
              >
                English
              </Link>
              <Link
                href={`/blog/${post.slug}/fa`}
                className={`${styles.option} ${isFa ? styles.active : ''}`}
                aria-current={isFa ? 'page' : undefined}
                hrefLang="fa"
                lang="fa"
              >
                فارسی
              </Link>
            </nav>
          ) : null}

          {html ? (
            <div
              className={`prose ${isFa ? styles.rtl : ''}`}
              lang={isFa ? 'fa' : 'en'}
              dir={isFa ? 'rtl' : 'ltr'}
              dangerouslySetInnerHTML={{ __html: html }}
            />
          ) : null}
        </article>
      </div>
    </main>
  );
}
