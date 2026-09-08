import type { Metadata } from 'next';
import { Sparkles, Terminal, CheckCircle2 } from 'lucide-react';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'About | Mahtab Azimzadeh',
  description: 'Front-end developer focused on building clean, thoughtful and user-friendly web interfaces.',
};

export default function AboutPage() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        {/* Hero Section */}
        <div className={styles.hero}>
          <h1 className={styles.title}>Hi, I'm Mahtab.</h1>
          
          <p className={styles.subtitle}>
            I’m a front-end developer who enjoys building clean, thoughtful and user-friendly web interfaces.
          </p>
          <p className={styles.subtitle}>
            I work mainly with React, Next.js, TypeScript and Tailwind CSS, and I care about both the code and the product experience behind it. In my projects, I often start from the idea and visual direction, then turn it into responsive, accessible and polished interfaces.
          </p>
          <p className={styles.subtitle}>
            Recently, I’ve been expanding my backend skills with Node.js, Express and PostgreSQL while building practical projects like Renewal Radar. My goal is to grow into a stronger front-end developer with a solid understanding of full-stack product development.
          </p>
        </div>

        {/* Two Column Lists */}
        <div className={styles.listGrid}>
          <div className={styles.listBlock}>
            <h3 className={styles.listTitle}>What I care about</h3>
            <ul className={styles.checkList}>
              <li className={styles.checkListItem}>
                <CheckCircle2 size={20} className={styles.checkIcon} />
                <span>Clean and usable interfaces</span>
              </li>
              <li className={styles.checkListItem}>
                <CheckCircle2 size={20} className={styles.checkIcon} />
                <span>Responsive and accessible layouts</span>
              </li>
              <li className={styles.checkListItem}>
                <CheckCircle2 size={20} className={styles.checkIcon} />
                <span>Product clarity and simple user flows</span>
              </li>
              <li className={styles.checkListItem}>
                <CheckCircle2 size={20} className={styles.checkIcon} />
                <span>Maintainable front-end code</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Design & Product Mindset */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <Sparkles className="text-accent" /> Design & Product mindset
          </h2>
          <p className={styles.textBlock}>
            I don’t only implement UI from a finished design. In many of my personal projects, I shape the idea, user flow, visual direction, and front-end implementation myself.
          </p>
        </div>

        {/* Skills */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <Terminal className="text-accent" /> Tech Stack
          </h2>
          <div className={styles.skillsGrid}>
            <div className={styles.skillCategory}>
              <h3 className={styles.skillCategoryTitle}>Front-End</h3>
              <ul className={styles.skillList}>
                <li className={styles.skillListItem}><div className={styles.skillBullet} />React</li>
                <li className={styles.skillListItem}><div className={styles.skillBullet} />Next.js</li>
                <li className={styles.skillListItem}><div className={styles.skillBullet} />Vue.js</li>
                <li className={styles.skillListItem}><div className={styles.skillBullet} />Nuxt.js</li>
                <li className={styles.skillListItem}><div className={styles.skillBullet} />TypeScript</li>
                <li className={styles.skillListItem}><div className={styles.skillBullet} />JavaScript</li>
                <li className={styles.skillListItem}><div className={styles.skillBullet} />Tailwind CSS</li>
              </ul>
            </div>
            
            <div className={styles.skillCategory}>
              <h3 className={styles.skillCategoryTitle}>Currently Learning</h3>
              <ul className={styles.skillList}>
                <li className={styles.skillListItem}><div className={styles.skillBullet} />Node.js</li>
                <li className={styles.skillListItem}><div className={styles.skillBullet} />Express.js</li>
                <li className={styles.skillListItem}><div className={styles.skillBullet} />PostgreSQL</li>
                <li className={styles.skillListItem}><div className={styles.skillBullet} />Prisma</li>
              </ul>
            </div>

            <div className={styles.skillCategory}>
              <h3 className={styles.skillCategoryTitle}>Design & Workflow</h3>
              <ul className={styles.skillList}>
                <li className={styles.skillListItem}><div className={styles.skillBullet} />UI/UX thinking</li>
                <li className={styles.skillListItem}><div className={styles.skillBullet} />Product thinking</li>
                <li className={styles.skillListItem}><div className={styles.skillBullet} />Responsive design</li>
                <li className={styles.skillListItem}><div className={styles.skillBullet} />Git & GitHub</li>
                <li className={styles.skillListItem}><div className={styles.skillBullet} />Docker basics</li>
                <li className={styles.skillListItem}><div className={styles.skillBullet} />AI-assisted development</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
