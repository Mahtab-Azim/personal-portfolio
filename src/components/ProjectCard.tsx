import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import type { Project } from '@/lib/content';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  project: Project;
  priority?: boolean;
}

export default function ProjectCard({ project, priority = false }: ProjectCardProps) {
  const targetHref = project.liveUrl || project.githubUrl || `/projects/${project.slug}`;
  const isExternal = !!project.liveUrl || !!project.githubUrl;

  return (
    <Link 
      href={targetHref} 
      className={styles.card} 
      aria-label={`View ${project.title} project`}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
    >
      {/* Image / gradient area */}
      <div className={styles.thumbnail} style={!project.image ? { background: project.imageGradient } : undefined}>
        {project.image ? (
          <Image 
            src={project.image} 
            alt={`${project.title} screenshot`} 
            fill 
            className={styles.thumbnailImage} 
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={priority}
          />
        ) : (
          <div className={styles.thumbnailInner}>
            <span className={styles.thumbnailTitle}>{project.title}</span>
          </div>
        )}
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
            <span key={tech} className="tag">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
