'use client';

import { useRef, useState, useEffect, useCallback } from 'react';
import {
  motion,
  useSpring,
  useMotionValue,
  useTransform,
  useAnimationFrame,
} from 'framer-motion';
import { Palette } from 'lucide-react';
import styles from './HeroIllustration.module.css';

/* ─── Constants ─── */
const SPRING = { stiffness: 60, damping: 18, mass: 0.6 };
const MOBILE_BP = 768;
const ORBIT_DURATION = 65; // Much slower orbit (was 50)

/* ─── Sparkle decoration ─── */
function Sparkle({ className }: { className?: string }) {
  return (
    <svg className={className} width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0L14 9.5L24 12L14 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
    </svg>
  );
}

/* ─── Browser Card ─── */
function BrowserCard() {
  return (
    <div className={styles.card}>
      <div className={styles.cardBar}>
        <span className={styles.dot} data-color="purple" />
        <span className={styles.dot} data-color="yellow" />
        <span className={styles.dot} data-color="faint" />
      </div>
      <div className={styles.cardBody}>
        <div className={styles.cardImage}>
          <svg viewBox="0 0 120 80" fill="none" className={styles.mountainSvg}>
            <rect width="120" height="80" rx="8" fill="rgba(196,181,253,0.15)" />
            <path d="M0 80L25 40L45 60L70 25L95 55L120 30V80H0Z" fill="rgba(123,97,255,0.18)" />
            <path d="M0 80L30 50L50 65L80 35L120 60V80H0Z" fill="rgba(91,63,217,0.12)" />
            <circle cx="90" cy="18" r="10" fill="rgba(196,181,253,0.3)" />
          </svg>
        </div>
        <div className={styles.cardText}>
          <div className={styles.textLine} style={{ width: '55%' }} />
          <div className={styles.textLine} style={{ width: '100%' }} />
          <div className={styles.textLine} style={{ width: '85%' }} />
          <div className={styles.textLine} style={{ width: '65%' }} />
          <div className={styles.cardBtn} />
        </div>
      </div>
    </div>
  );
}



/* ─── Main Component ─── */
export default function HeroIllustration() {
  const ref = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < MOBILE_BP);
    check();
    window.addEventListener('resize', check, { passive: true });
    return () => window.removeEventListener('resize', check);
  }, []);

  /* ── Parallax ── */
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, SPRING);
  const sy = useSpring(my, SPRING);
  const rotateY = useTransform(sx, [-0.5, 0.5], ['-14deg', '14deg']);
  const rotateX = useTransform(sy, [-0.5, 0.5], ['10deg', '-10deg']);

  const onMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (isMobile || !ref.current) return;
      const r = ref.current.getBoundingClientRect();
      mx.set((e.clientX - r.left) / r.width - 0.5);
      my.set((e.clientY - r.top) / r.height - 0.5);
    },
    [isMobile, mx, my],
  );

  const onLeave = useCallback(() => {
    mx.set(0);
    my.set(0);
  }, [mx, my]);

  /* ── Mobile auto-sway ── */
  const autoAngle = useMotionValue(0);
  const autoRY = useTransform(autoAngle, (v) => `${Math.sin(v) * 6}deg`);
  const autoRX = useTransform(autoAngle, (v) => `${Math.cos(v * 0.7) * 4}deg`);

  useAnimationFrame((t) => {
    if (!isMobile) return;
    autoAngle.set(t / 2000);
  });

  const sceneRX = isMobile ? autoRX : rotateX;
  const sceneRY = isMobile ? autoRY : rotateY;

  return (
    <div
      ref={ref}
      className={styles.container}
      onMouseMove={isMobile ? undefined : onMove}
      onMouseLeave={isMobile ? undefined : onLeave}
      aria-hidden="true"
    >
      <div className={styles.floater}>
        <motion.div
          className={styles.scene}
          style={{ rotateX: sceneRX, rotateY: sceneRY }}
        >
          {/* Glow */}
          <div className={styles.glow} />

          {/* Browser card */}
          <BrowserCard />

          {/* Orbit System 1 */}
          <div className={`${styles.orbitSystem} ${styles.sys1}`}>
            <div className={styles.orbitRingBorder} />
            <div className={styles.orbitRotator} style={{ animationDelay: '0s' }}>
              <div className={styles.chipContainer}>
                <div className={`${styles.chipCounter} ${styles.counter1}`} style={{ animationDelay: '0s' }}>
                  <div className={`${styles.chipGlass} ${styles.chipCode}`}>
                    <span className={styles.chipCodeText}>&lt;/&gt;</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Orbit System 2 */}
          <div className={`${styles.orbitSystem} ${styles.sys2}`}>
            <div className={styles.orbitRingBorder} />
            
            {/* Palette Chip */}
            <div className={styles.orbitRotator} style={{ animationDelay: '0s' }}>
              <div className={styles.chipContainer}>
                <div className={`${styles.chipCounter} ${styles.counter2}`} style={{ animationDelay: '0s' }}>
                  <div className={`${styles.chipGlass} ${styles.chipDesign}`}>
                    <Palette size={18} strokeWidth={2} color="#fff" />
                  </div>
                </div>
              </div>
            </div>

            {/* Typography (Aa) Chip */}
            <div className={styles.orbitRotator} style={{ animationDelay: '-22.5s' }}>
              <div className={styles.chipContainer}>
                <div className={`${styles.chipCounter} ${styles.counter2}`} style={{ animationDelay: '-22.5s' }}>
                  <div className={`${styles.chipGlass} ${styles.chipAa}`}>
                    <span className={styles.chipAaText}>Aa</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sparkles */}
          <Sparkle className={`${styles.sparkle} ${styles.sparkle1}`} />
          <Sparkle className={`${styles.sparkle} ${styles.sparkle2}`} />
          <Sparkle className={`${styles.sparkle} ${styles.sparkle3}`} />
          
          {/* Outside Sparkles (Right side) */}
          <Sparkle className={`${styles.sparkle} ${styles.sparkle4}`} />
          <Sparkle className={`${styles.sparkle} ${styles.sparkle5} ${styles.desktopOnly}`} />
          <Sparkle className={`${styles.sparkle} ${styles.sparkle6} ${styles.desktopOnly}`} />
        </motion.div>
      </div>
    </div>
  );
}
