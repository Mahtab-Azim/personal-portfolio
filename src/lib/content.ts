export interface Project {
  title: string;
  slug: string;
  description: string;
  technologies: string[];
  imageGradient: string;
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
  date: string;
  featured?: boolean;
  contentHtml?: string;
}

export interface BlogPost {
  title: string;
  slug: string;
  description: string;
  date: string;
  readTime: string;
  category: string;
  imageGradient: string;
  contentHtml?: string;
}

const projects: Project[] = [
  {
    title: 'Zentro',
    slug: 'zentro',
    description:
      'A CRM-style dashboard for managing customers, tasks, communication, and workflows. I designed and developed the front-end experience from idea to interface, with a clean UI and AI-assisted workflow concepts.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'REST API', 'Docker', 'Git'],
    imageGradient: 'linear-gradient(135deg, #312e81 0%, #7c3aed 45%, #c084fc 100%)',
    liveUrl: '',
    githubUrl: '',
    date: '2026-07-01',
    featured: true,
    contentHtml: `
      <p>Zentro is a CRM-style dashboard focused on customers, tasks, communication, and business workflows.</p>
      <p>I worked on the product idea, visual direction, UI structure, and front-end implementation, with a focus on creating a clean and usable dashboard experience.</p>
    `,
  },
  {
    title: 'Renewal Radar',
    slug: 'renewal-radar',
    description:
      'A full-stack renewal tracking app for managing domains, subscriptions, and recurring services. Currently being built as a backend-focused project with reminder logic, deadline tracking, and organized renewal workflows.',
    technologies: ['Next.js', 'TypeScript', 'Node.js', 'Express.js', 'PostgreSQL', 'Prisma'],
    imageGradient: 'linear-gradient(135deg, #064e3b 0%, #10b981 45%, #a7f3d0 100%)',
    liveUrl: '',
    githubUrl: '',
    date: '2026-06-15',
    featured: true,
    contentHtml: `
      <p>Renewal Radar is a renewal tracking application for domains, subscriptions, and recurring services.</p>
      <p>The goal is to help users monitor upcoming expirations, organize renewal details, and avoid missed deadlines with smart reminder logic.</p>
    `,
  },
  {
    title: 'Personal Portfolio',
    slug: 'personal-portfolio',
    description:
      'A personal portfolio and blog built with Next.js to showcase my front-end projects, design-minded approach, and technical writing through a clean, responsive and soft visual interface.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'MDX', 'Framer Motion'],
    imageGradient: 'linear-gradient(135deg, #f5f3ff 0%, #c4b5fd 45%, #7c3aed 100%)',
    liveUrl: 'https://mahtabazim.ir',
    githubUrl: '',
    date: '2026-07-22',
    featured: true,
    contentHtml: `
      <p>This portfolio is my personal digital space for showcasing front-end projects, writing technical notes, and presenting my design-minded development approach.</p>
      <p>It is built with Next.js, TypeScript, Tailwind CSS, and a soft purple visual identity.</p>
    `,
  },
];

const blogPosts: BlogPost[] = [
  {
    title: 'Designing My Personal Portfolio with Next.js',
    slug: 'designing-my-personal-portfolio-with-nextjs',
    description:
      'The design decisions behind my portfolio: soft visuals, product-focused structure, and a blog-first architecture with Next.js.',
    date: '2026-07-22',
    readTime: '4 min read',
    category: 'Portfolio',
    imageGradient: 'linear-gradient(135deg, #f5f3ff 0%, #c4b5fd 45%, #7c3aed 100%)',
    contentHtml: `
      <p>This article is a short starter note about the process of designing and building my personal portfolio with Next.js.</p>
      <p>The goal of the website is to feel minimal, personal, and product-focused while still being useful as a real portfolio and blog.</p>
    `,
  },
  {
    title: 'How I Built Zentro CRM from Idea to Interface',
    slug: 'how-i-built-zentro-crm-from-idea-to-interface',
    description:
      'A behind-the-scenes look at how I designed and developed Zentro CRM, from product idea to UI structure and front-end implementation.',
    date: '2026-07-10',
    readTime: '5 min read',
    category: 'Case Study',
    imageGradient: 'linear-gradient(135deg, #312e81 0%, #7c3aed 45%, #c084fc 100%)',
    contentHtml: `
      <p>Zentro started as an idea for a clean CRM-style dashboard focused on tasks, customers, and workflows.</p>
      <p>This starter post will later become a more complete case study about the product thinking and front-end implementation behind the project.</p>
    `,
  },
  {
    title: 'Building Renewal Radar as My First Backend-Focused Project',
    slug: 'building-renewal-radar-as-my-first-backend-focused-project',
    description:
      'My journey of learning Node.js, Express, PostgreSQL, and backend architecture through a practical renewal tracking app.',
    date: '2026-06-28',
    readTime: '5 min read',
    category: 'Learning',
    imageGradient: 'linear-gradient(135deg, #064e3b 0%, #10b981 45%, #a7f3d0 100%)',
    contentHtml: `
      <p>Renewal Radar is a practical project for learning backend development with Node.js, Express, PostgreSQL, and Prisma.</p>
      <p>The project focuses on renewal tracking, deadline visibility, and reminder logic.</p>
    `,
  },
];

export async function getProjects(): Promise<Project[]> {
  return [...projects].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  return projects.find((project) => project.slug === slug) ?? null;
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  return [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  return blogPosts.find((post) => post.slug === slug) ?? null;
}