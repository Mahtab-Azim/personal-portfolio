import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import type { Project } from '@/lib/content';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.slug}`} className={styles.card} aria-label={`View ${project.title} project`}>
      {/* Image / gradient area */}
      <div className={styles.thumbnail} style={{ background: project.imageGradient }}>
        <div className={styles.thumbnailInner}>
          <span className={styles.thumbnailTitle}>{project.title}</span>
        </div>
        <div className={styles.thumbnailDeco} aria-hidden="true" />
      </div>

      {/* Body */}
      <div className={styles.body}>
        <div className={styles.titleRow}>
          <span className={styles.title}>{project.title}</span>
          <span className={styles.arrow}>
            <ArrowUpRight size={16} strokeWidth={2} />
          </span>
        </div>
        <p className={styles.description}>{project.description}</p>
        <div className={styles.tags}>
          {project.technologies.map((tech) => (
            <span key={tech} className="tag">{tech}</span>
          ))}
        </div>
      </div>
    </Link>
  );
}
