import type { Metadata } from 'next';
import { getProjects } from '@/lib/content';
import ProjectCard from '@/components/ProjectCard';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'A collection of my latest work in product design and web development.',
};

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <main className={styles.main}>
      <div className={`container ${styles.header}`}>
        <h1 className={`text-heading ${styles.title}`}>Selected Work</h1>
        <p className={styles.subtitle}>
          A showcase of products I&apos;ve designed and engineered. From interactive platforms 
          to complex CRM dashboards, here&apos;s what I&apos;ve been working on.
        </p>
      </div>

      <div className={`container ${styles.grid}`}>
        {projects.map((project, index) => (
          <div 
            key={project.slug} 
            className={styles.projectWrapper}
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <ProjectCard project={project} priority={index < 2} />
          </div>
        ))}
      </div>
    </main>
  );
}
