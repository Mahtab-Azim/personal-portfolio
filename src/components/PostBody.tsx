'use client';

import { useCallback, useState, useSyncExternalStore } from 'react';
import styles from './PostBody.module.css';

type Lang = 'en' | 'fa';

/** Subscribes to back/forward navigation so ?lang= stays in sync. */
function subscribe(onChange: () => void) {
  window.addEventListener('popstate', onChange);
  return () => window.removeEventListener('popstate', onChange);
}

function readLangParam() {
  return new URLSearchParams(window.location.search).get('lang');
}

interface PostBodyProps {
  contentHtml?: string;
  titleFa?: string;
  contentHtmlFa?: string;
}

export default function PostBody({ contentHtml, titleFa, contentHtmlFa }: PostBodyProps) {
  // The server always renders English so the static HTML stays crawlable;
  // a ?lang=fa visitor switches over as soon as the page hydrates.
  const langParam = useSyncExternalStore(subscribe, readLangParam, () => null);
  const [chosen, setChosen] = useState<Lang | null>(null);

  const hasFa = Boolean(contentHtmlFa);
  const lang: Lang = chosen ?? (langParam === 'fa' ? 'fa' : 'en');
  const isFa = hasFa && lang === 'fa';
  const html = isFa ? contentHtmlFa : contentHtml;

  const select = useCallback((next: Lang) => {
    setChosen(next);

    // Keep the address bar shareable without adding a history entry.
    const url = new URL(window.location.href);
    if (next === 'fa') {
      url.searchParams.set('lang', 'fa');
    } else {
      url.searchParams.delete('lang');
    }
    window.history.replaceState(null, '', url);
  }, []);

  return (
    <>
      {hasFa ? (
        <div className={styles.switcher} role="group" aria-label="Article language">
          <button
            type="button"
            onClick={() => select('en')}
            className={`${styles.option} ${lang === 'en' ? styles.active : ''}`}
            aria-pressed={lang === 'en'}
          >
            English
          </button>
          <button
            type="button"
            onClick={() => select('fa')}
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
