'use client';

import { useState } from 'react';
import styles from './PostBody.module.css';

interface PostBodyProps {
  contentHtml?: string;
  titleFa?: string;
  contentHtmlFa?: string;
}

export default function PostBody({ contentHtml, titleFa, contentHtmlFa }: PostBodyProps) {
  const [lang, setLang] = useState<'en' | 'fa'>('en');
  const hasFa = Boolean(contentHtmlFa);
  const isFa = hasFa && lang === 'fa';
  const html = isFa ? contentHtmlFa : contentHtml;

  return (
    <>
      {hasFa ? (
        <div className={styles.switcher} role="group" aria-label="Article language">
          <button
            type="button"
            onClick={() => setLang('en')}
            className={`${styles.option} ${lang === 'en' ? styles.active : ''}`}
            aria-pressed={lang === 'en'}
          >
            English
          </button>
          <button
            type="button"
            onClick={() => setLang('fa')}
            className={`${styles.option} ${lang === 'fa' ? styles.active : ''}`}
            aria-pressed={lang === 'fa'}
            lang="fa"
          >
            فارسی
          </button>
        </div>
      ) : null}

      {isFa && titleFa ? (
        <h2 className={styles.faTitle} lang="fa" dir="rtl">
          {titleFa}
        </h2>
      ) : null}

      {html ? (
        <div
          className={`prose ${isFa ? styles.rtl : ''}`}
          lang={isFa ? 'fa' : 'en'}
          dir={isFa ? 'rtl' : 'ltr'}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      ) : null}
    </>
  );
}
