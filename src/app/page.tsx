import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowUpRight, ArrowRight, Code2, Palette, Zap,
  Circle, Radio, FileText, Server, ChevronDown,
  BookOpen, Layers
} from 'lucide-react';
import { getProjects, getBlogPosts } from '@/lib/content';
import ProjectCard from '@/components/ProjectCard';
import BlogCard from '@/components/BlogCard';
import HeroIllustration from '@/components/HeroIllustration';
import styles from './page.module.css';

/* ─── Custom Skill Icons ─── */
const ReactIcon = () => (
  <svg width="14" height="14" viewBox="-11.5 -10.23174 23 20.46348" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="0" cy="0" r="2.05" fill="#61DAFB"/>
    <g stroke="#61DAFB" strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2"/>
      <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
      <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
    </g>
  </svg>
);

const NextjsIcon = () => (
  <svg width="14" height="14" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="90" cy="90" r="86" stroke="currentColor" strokeWidth="8"/>
    <path d="M149.508 157.52L69.142 54H54v72h14.4V68.219l68.79 88.081a90.3 90.3 0 0012.318-18.78zM126 54h-14.4v72H126V54z" fill="currentColor"/>
  </svg>
);

const VueIcon = () => (
  <svg width="14" height="14" viewBox="0 0 256 221" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M204.8 0H256L128 220.8L0 0h97.92L128 51.2L157.44 0h47.36z" fill="#41B883"/>
    <path d="M0 0l128 220.8L256 0h-51.2L128 132.48L50.56 0H0z" fill="#34495E"/>
  </svg>
);

const NuxtIcon = () => (
  <svg width="14" height="14" viewBox="0 0 256 168" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M143.618 167.834h95.166c3.023 0 5.992-.777 8.61-2.253a17.1 17.1 0 006.302-6.157 16.8 16.8 0 002.304-8.408c0-2.951-.795-5.85-2.306-8.407L189.778 33.263a17.1 17.1 0 00-6.3-6.155 17.5 17.5 0 00-8.608-2.253c-3.023 0-5.991.777-8.609 2.253a17.1 17.1 0 00-6.3 6.155l-16.343 27.678-31.95-54.09a17.1 17.1 0 00-6.304-6.155A17.5 17.5 0 0096.754 0c-3.024 0-5.992.777-8.61 2.253a17.1 17.1 0 00-6.303 6.155L2.306 142.609A16.8 16.8 0 000 151.016c0 2.951.794 5.85 2.305 8.408a17.1 17.1 0 006.303 6.157 17.5 17.5 0 008.61 2.253h59.737c23.667 0 41.14-10.28 53.15-30.185l29.152-49.32 15.615-26.4 46.87 79.505h-62.48zm-67.36-26.428-41.688-.01 62.5-105.82 31.191 52.916-20.878 35.354c-7.976 13.03-17.037 17.56-31.125 17.56z" fill="#00DC82"/>
  </svg>
);

const TypeScriptIcon = () => (
  <svg width="14" height="14" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="100" rx="12" fill="#3178C6"/>
    <path d="M38.2 73.1H31.1V39.4h-9.9v-5.6h26.9v5.6h-9.9v33.7zm28.8-13c0 7.8-5.9 13.5-14.5 13.5-5 0-9-1.9-11.4-4.5l4-4.2c1.9 2 4.6 3.3 7.5 3.3 4.9 0 7.3-2.9 7.3-6.9 0-11-16.7-5.5-16.7-18 0-6.8 5.1-12.7 13.1-12.7 4.5 0 8.1 1.6 10.4 4l-3.8 4.3c-1.8-1.8-3.9-2.9-6.6-2.9-4.2 0-6.1 2.8-6.1 5.9 0 9.8 16.7 4.7 16.7 17.5z" fill="white"/>
  </svg>
);

const FigmaIcon = () => (
  <svg width="14" height="14" viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 0H9.5C4.25 0 0 4.25 0 9.5C0 14.75 4.25 19 9.5 19H19V0Z" fill="#F24E1E"/>
    <path d="M9.5 19C4.25 19 0 23.25 0 28.5C0 33.75 4.25 38 9.5 38H19V19H9.5Z" fill="#A259FF"/>
    <path d="M9.5 38C4.25 38 0 42.25 0 47.5C0 52.75 4.25 57 9.5 57C14.75 57 19 52.75 19 47.5V38H9.5Z" fill="#0ACF83"/>
    <path d="M19 19H28.5C33.75 19 38 14.75 38 9.5C38 4.25 33.75 0 28.5 0H19V19Z" fill="#FF7262"/>
    <path d="M28.5 19C33.75 19 38 23.25 38 28.5C38 33.75 33.75 38 28.5 38C25.9804 38 23.5641 37.001 21.7825 35.2215C20.0009 33.442 19 31.0298 19 28.5V19H28.5Z" fill="#1ABC9C"/>
  </svg>
);

const LogoStar = ({ size = 8 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
  </svg>
);

export const metadata: Metadata = {
  title: 'Mahtab Azimzadeh — Front-End Developer & Product Designer',
  description:
    'Front-End Developer crafting thoughtful digital products. I build responsive, accessible and delightful web experiences with clean code and a design-minded approach.',
};

const skills = [
  { label: 'React', color: '#61DAFB', icon: ReactIcon },
  { label: 'Next.js', color: 'var(--text-body)', icon: NextjsIcon },
  { label: 'Vue.js', color: '#41B883', icon: VueIcon },
  { label: 'Nuxt.js', color: '#00DC82', icon: NuxtIcon },
  { label: 'TypeScript', color: '#3178C6', icon: TypeScriptIcon },
  { label: 'UI/UX', color: '#F24E1E', icon: FigmaIcon },
  { label: 'Product Design', color: '#FF6B6B', icon: Layers },
];

const currentlyBuilding = [
  {
    icon: Radio,
    title: 'Building Renewal Radar',
    subtitle: 'Domain monitoring & renewal alerts',
    isLive: true,
  },
  {
    icon: FileText,
    title: 'Writing on the blog',
    subtitle: 'Notes from projects I actually shipped',
    isLive: false,
  },
  {
    icon: Server,
    title: 'Shipping full-stack features',
    subtitle: 'Node.js, Express & PostgreSQL',
    isLive: false,
  },
];

const designPillars = [
  { icon: Palette, title: 'Design first', description: 'User-centered design approach' },
  { icon: Code2, title: 'Clean code', description: 'Maintainable, scalable & fast' },
  { icon: Zap, title: 'Performance', description: 'Optimized for speed & SEO' },
  { icon: BookOpen, title: 'Accessibility', description: 'Inclusive experiences for everyone' },
];

export default async function HomePage() {
  const [allProjects, allPosts] = await Promise.all([getProjects(), getBlogPosts()]);
  const featuredProjects = allProjects.filter(p => p.featured).slice(0, 3);
  const latestPosts = allPosts.slice(0, 3);

  return (
    <div className={styles.page}>

      {/* ══════════════════════════════════════
          HERO
      ══════════════════════════════════════ */}
      <section className={styles.hero} aria-label="Hero introduction">

        {/* ─── Background: large soft-purple halo covering the entire hero ─── */}
        <div className={styles.heroBg} aria-hidden="true">
          <div className={styles.haloBlob} />
          <div className={styles.gridOverlay} />
        </div>

        <div className="container">
          <div className={styles.heroInner}>

            {/* ─── LEFT: Content ─── */}
            <div className={styles.heroContent}>
              {/* Role badge */}
              <div className={styles.roleBadge}>
                <Circle size={6} fill="currentColor" className={styles.roleDot} aria-hidden="true" />
                Front-End Developer &amp; Product Designer
              </div>

              <h2 className={styles.heroPreTitle}>
                Mahtab Azimzadeh
              </h2>

              <h1 className={styles.heroTitle}>
                I design and build thoughtful <span className="gradient-text">digital products.</span>
              </h1>

              <p className={styles.heroText}>
                Responsive, accessible, and polished interfaces built with clean code and product thinking.
              </p>

              <div className={styles.heroCtas}>
                <Link href="/projects" className={`btn btn-primary ${styles.ctaPrimary}`} id="hero-view-projects">
                  <ArrowUpRight size={16} strokeWidth={2.5} aria-hidden="true" />
                  View Projects
                </Link>
                <Link href="/blog" className={`btn btn-secondary ${styles.ctaSecondary}`} id="hero-read-blog">
                  <BookOpen size={15} strokeWidth={2} aria-hidden="true" />
                  Read Blog
                </Link>
              </div>
            </div>

            {/* ─── RIGHT: Interactive 3D Illustration ─── */}
            <div className={styles.heroIllustrationWrap}>
              <HeroIllustration />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          ABOUT
      ══════════════════════════════════════ */}
      <section className={`section ${styles.about}`} id="about" aria-label="About me">
        {/* Curved White Wave Separator - Wave Type A (Left lower, right higher) */}
        <div className={styles.waveSeparator}>
          <svg viewBox="0 0 1440 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0,80 C480,110 960,20 1440,40 L1440,100 L0,100 Z"
              fill="#F3F0F9"
            />
            <path
              d="M0,80 C480,110 960,20 1440,40"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="4"
              style={{ filter: 'drop-shadow(0px -2px 10px rgba(255,255,255,1)) drop-shadow(0px 4px 15px rgba(255,255,255,0.8))' }}
            />
          </svg>
        </div>

        <div className="container">
          <div className={styles.aboutGrid}>

            {/* Left Column: Floating Monogram + Glassy Card */}
            <div className={styles.buildingCardWrapper}>
              
              {/* Orbiting Rings (Behind Card) */}
              <div className={styles.aboutRingsWrap}>
                <div className={styles.aboutMonogramRing} />
                <div className={styles.aboutMonogramRing2} />
                <div className={styles.aboutMonogramRing3} />
              </div>

              {/* Floating Monogram (Above Card) */}
              <div className={styles.aboutMonogramWrap}>
                <div className={styles.monogramSparkle1}><LogoStar size={10} /></div>
                <div className={styles.monogramSparkle2}><LogoStar size={6} /></div>
                
                <div className={styles.aboutMonogram}>
                  <div className={styles.monogramLogo}>
                    <span className={styles.monoM}>M</span>
                    <span className={styles.monoA}>A</span>
                    <span className={styles.monoStar}>
                      <LogoStar size={8} />
                    </span>
                  </div>
                </div>
              </div>

              {/* Glassy building card */}
              <div className={styles.buildingCard} id="currently-building">
                <span className="section-eyebrow">Currently building</span>

              <div className={styles.buildingItems}>
                {currentlyBuilding.map((item, i) => (
                  <div key={i} className={`${styles.buildingItem} ${item.isLive ? styles.itemLive : ''}`}>
                    <div className={styles.itemIcon}>
                      <item.icon size={14} strokeWidth={1.75} />
                    </div>
                    <div className={styles.itemText}>
                      <span className={styles.itemTitle}>{item.title}</span>
                      <span className={styles.itemSub}>{item.subtitle}</span>
                    </div>
                    {item.isLive ? (
                      <div className={styles.liveChip}>
                        <span className="live-dot" />
                        Live
                      </div>
                    ) : (
                      <div className={styles.spinnerWrap} aria-hidden="true">
                        <div className={styles.spinner} />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Decorative dots */}
              <div className={styles.decoDots} aria-hidden="true">
                {[...Array(4)].map((_, i) => (
                  <span key={i} className={styles.decoPlus}>+</span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: About text + skills */}
            <div className={styles.aboutContent}>
              <span className="section-eyebrow">About me</span>
              <p className={styles.aboutText}>
                I’m a front-end developer focused on building clean, responsive and user-friendly web interfaces with React, Next.js and TypeScript.
              </p>
              <p className={styles.aboutText}>
                I care about the product behind the interface — how it feels, how it works, and how clearly it solves a real problem. I enjoy shaping ideas into polished digital experiences, from visual direction to front-end implementation.
              </p>
              <div className={styles.skills} role="list" aria-label="Skills">
                {skills.map((skill) => (
                  <div key={skill.label} className={styles.skillBadge} role="listitem">
                    <span className={styles.skillIcon} style={{ color: skill.color }} aria-hidden="true">
                      <skill.icon />
                    </span>
                    {skill.label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SELECTED PROJECTS
      ══════════════════════════════════════ */}
      <section className={`section ${styles.projects}`} aria-label="Selected projects">
        {/* Curved White Wave Separator - Wave Type B (Left higher, right lower) */}
        <div className={styles.waveSeparator}>
          <svg viewBox="0 0 1440 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0,40 C480,20 960,110 1440,80 L1440,100 L0,100 Z"
              fill="#F7F5F0"
            />
            <path
              d="M0,40 C480,20 960,110 1440,80"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="3.5"
              style={{ filter: 'drop-shadow(0px 2px 4px rgba(255,255,255,0.85))' }}
            />
          </svg>
        </div>
        <div className="container">
          <div className={styles.sectionHeader}>
            <div>
              <span className="section-eyebrow">Selected Projects</span>
              <h2 className="text-heading">Things I've built</h2>
            </div>
            <Link href="/projects" className="btn btn-ghost" id="view-all-projects">
              View all projects <ArrowRight size={16} strokeWidth={2} />
            </Link>
          </div>
          <div className={styles.projectsGrid}>
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} priority={index === 0} />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          DESIGN + DEVELOPMENT
      ══════════════════════════════════════ */}
      <section className={`section ${styles.designDev}`} aria-label="Design and development philosophy">
        {/* Curved White Wave Separator - Wave Type A (Left lower, right higher) */}
        <div className={styles.waveSeparator}>
          <svg viewBox="0 0 1440 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0,80 C480,110 960,20 1440,40 L1440,100 L0,100 Z"
              fill="#F3F0F9"
            />
            <path
              d="M0,80 C480,110 960,20 1440,40"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="3.5"
              style={{ filter: 'drop-shadow(0px 2px 4px rgba(255,255,255,0.85))' }}
            />
          </svg>
        </div>
        <div className="container">
          <div className={styles.designDevInner}>
            <div className={styles.designDevLeft}>
              <span className="section-eyebrow">Design + Development</span>
              <h2 className={`text-heading ${styles.designDevTitle}`}>The perfect balance</h2>
              <p className={styles.designDevText}>
                I blend design thinking with clean code to deliver products that are
                not only beautiful but also usable, accessible and scalable.
              </p>
              <div className={styles.decoShapeWrap} aria-hidden="true">
                <div className={styles.decoShapeBottom} />
                <div className={styles.decoShapeTop} />
              </div>
            </div>
            <div className={styles.pillarsGrid}>
              {designPillars.map((p) => (
                <div key={p.title} className={styles.pillarCard}>
                  <div className={styles.pillarIcon}><p.icon size={20} strokeWidth={1.75} /></div>
                  <span className={styles.pillarTitle}>{p.title}</span>
                  <span className={styles.pillarDesc}>{p.description}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          BLOG PREVIEW
      ══════════════════════════════════════ */}
      <section className={`section ${styles.blog}`} aria-label="Latest blog posts">
        {/* Curved White Wave Separator - Wave Type B (Left higher, right lower) */}
        <div className={styles.waveSeparator}>
          <svg viewBox="0 0 1440 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0,40 C480,20 960,110 1440,80 L1440,100 L0,100 Z"
              fill="#F7F5F0"
            />
            <path
              d="M0,40 C480,20 960,110 1440,80"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="3.5"
              style={{ filter: 'drop-shadow(0px 2px 4px rgba(255,255,255,0.85))' }}
            />
          </svg>
        </div>
        <div className="container">
          <div className={styles.sectionHeader}>
            <div>
              <span className="section-eyebrow">From the Blog</span>
              <h2 className="text-heading">Latest thoughts</h2>
            </div>
            <Link href="/blog" className="btn btn-ghost" id="visit-blog">
              Visit blog <ArrowRight size={16} strokeWidth={2} />
            </Link>
          </div>
          <div className={styles.blogGrid}>
            {latestPosts.map((post) => <BlogCard key={post.slug} post={post} />)}
          </div>
        </div>
      </section>

    </div>
  );
}
