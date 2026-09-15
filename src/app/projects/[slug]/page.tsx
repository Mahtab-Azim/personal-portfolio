import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowUpRight } from 'lucide-react';
import { getProjectBySlug, getProjects } from '@/lib/content';

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      type: 'article',
      url: `/projects/${project.slug}`,
      title: project.title,
      description: project.description,
      ...(project.image ? { images: [project.image] } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title: project.title,
      description: project.description,
      ...(project.image ? { images: [project.image] } : {}),
    },
    alternates: { canonical: `/projects/${project.slug}` },
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="container" style={{ paddingTop: '120px', paddingBottom: '80px' }}>
      <div style={{ maxWidth: '860px', margin: '0 auto' }}>
        <Link href="/projects" style={{ color: '#5B3FD9', fontWeight: 700, marginBottom: '20px', display: 'inline-flex', gap: '8px', alignItems: 'center' }}>
          ← Back to Projects
        </Link>

        <article>
          <div
            style={{
              borderRadius: '24px',
              minHeight: '220px',
              background: project.imageGradient,
              padding: '28px',
              display: 'flex',
              alignItems: 'flex-end',
              boxShadow: '0 18px 45px rgba(91, 63, 217, 0.12)',
              marginBottom: '24px',
            }}
          >
            <div>
              <p style={{ color: 'rgba(255,255,255,0.8)', textTransform: 'uppercase', letterSpacing: '0.14em', fontSize: '12px', fontWeight: 700 }}>
                Project
              </p>
              <h1 style={{ color: '#fff', fontSize: 'clamp(2rem, 4vw, 3.2rem)', marginTop: '6px' }}>{project.title}</h1>
            </div>
          </div>

          <p style={{ color: '#3D3A52', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '20px' }}>
            {project.description}
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '28px' }}>
            {project.technologies.map((tech) => (
              <span key={tech} className="tag" style={{ display: 'inline-flex' }}>
                {tech}
              </span>
            ))}
          </div>

          {project.contentHtml ? (
            <div
              className="prose"
              dangerouslySetInnerHTML={{ __html: project.contentHtml }}
              style={{ color: '#3D3A52', lineHeight: 1.8 }}
            />
          ) : null}

          {(project.liveUrl || project.githubUrl) && (
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '28px' }}>
              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                >
                  Visit Project
                  <ArrowUpRight size={16} strokeWidth={2.5} />
                </a>
              ) : null}

              {project.githubUrl ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-secondary"
                >
                  GitHub
                </a>
              ) : null}
            </div>
          )}
        </article>
      </div>
    </main>
  );
}
