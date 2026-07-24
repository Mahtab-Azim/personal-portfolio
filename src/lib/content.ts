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
    technologies: ['Next.js', 'TypeScript', 'REST API', 'Docker', 'Git', 'Vitest'],
    image: '/images/zentro_dashboard_v2.jpg',
    imageGradient: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)',
    liveUrl: 'https://zentro-front.vercel.app/',
    githubUrl: 'https://github.com/mahtab-azim/zentro',
    date: '2026-05-15',
    featured: true,
    contentHtml: `
      <p>Zentro is a minimalist, high-performance dashboard application designed for remote teams who value clarity and efficiency.</p>
      <p>It consolidates task management, project planning, and performance metrics into one interface, with a premium glassmorphism feel and strong focus on usability.</p>
    `,
  },
  {
    title: 'Renewal Radar',
    slug: 'renewal-radar',
    description:
      'A full-stack renewal tracking app for managing domains, subscriptions, and recurring services. Currently being built as a backend-focused project with reminder logic, deadline tracking, and organized renewal workflows.',
    technologies: ['Next.js', 'TypeScript', 'Node.js', 'Express.js', 'PostgreSQL', 'Prisma'],
    image: '/images/renewal_radar_mockup.jpg',
    imageGradient: 'linear-gradient(135deg, #059669 0%, #10b981 100%)',
    liveUrl: '',
    githubUrl: 'https://github.com/Mahtab-Azim/renewal-radar-backend',
    date: '2026-04-28',
    featured: true,
    contentHtml: `
      <p>Renewal Radar is a modern SaaS platform designed to solve forgotten domain and SSL certificate renewal issues.</p>
      <p>It helps users monitor expirations, organize subscriptions, and receive clearer reminder workflows before deadlines are missed.</p>
    `,
  },
  {
    title: 'Personal Portfolio',
    slug: 'portfolio',
    description:
      'A personal portfolio and blog built with Next.js to showcase my front-end projects, design-minded approach, and technical writing through a clean, responsive and soft visual interface.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'MDX', 'Framer Motion'],
    image: '/images/portfolio_mockup.jpg',
    imageGradient: 'radial-gradient(circle at top right, #5b3fd9 0%, #1e1147 100%)',
    liveUrl: 'https://mahtabazim.ir',
    githubUrl: 'https://github.com/Mahtab-Azim/personal-portfolio',
    date: '2026-01-01',
    featured: false,
    contentHtml: `
      <p>This very website serves as a live demonstration of my design aesthetics, technical skills, and attention to detail.</p>
      <p>I built it with Next.js and a custom visual system focused on premium, polished, responsive UI.</p>
    `,
  },
  {
    title: 'Golderin',
    slug: 'goldshop',
    description:
      'A bilingual gold price tracking application built with Nuxt.js and Tailwind CSS, pulling live market data to visualize trends through responsive charts.',
    technologies: ['Vue.js', 'REST API', 'Chart.js', 'Tailwind CSS', 'Pinia'],
    image: '/images/goldshop_mockup.jpg',
    imageGradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
    liveUrl: '',
    githubUrl: 'https://github.com/Mahtab-Azim/Goldshop.Demo',
    date: '2025-01-10',
    featured: true,
    contentHtml: `
      <p>Golderin is a market-tracking platform created for monitoring gold, coin, and currency trends through a clean and responsive interface.</p>
      <p>The experience is centered on real-time data visibility, interactive charts, and fast scanning for market movement.</p>
    `,
  },
  {
    title: 'Quix',
    slug: 'quix',
    description:
      'Computer science class presentation project focused on interactive algorithm learning, built with Django and a frontend experience designed for visual understanding.',
    technologies: ['Django', 'Python', 'JavaScript', 'HTMX'],
    image: '/images/quix_mockup.jpg',
    imageGradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
    liveUrl: '',
    githubUrl: 'https://github.com/aixom/quix',
    date: '2024-05-10',
    featured: true,
    contentHtml: `
      <p>Quix was developed as an interactive university platform for explaining computer science algorithms in a more digestible form.</p>
      <p>My role focused on shaping the front-end experience to make complex concepts feel visual, approachable, and understandable.</p>
    `,
  },
  {
    title: 'Xpot',
    slug: 'xpot',
    description:
      'Educational course platform integrated with SpotPlayer, featuring a responsive UI built with Tailwind CSS, Daisy UI, and HTMX.',
    technologies: ['Tailwind CSS', 'Daisy UI', 'HTMX', 'Docker', 'SpotPlayer'],
    image: '/images/xpot_mockup.jpg',
    imageGradient: 'linear-gradient(135deg, #1e3a8a 0%, #172554 100%)',
    liveUrl: '',
    githubUrl: '',
    date: '2024-02-01',
    featured: false,
    contentHtml: `
      <p>Xpot is an educational e-learning platform tailored for selling and viewing digital courses with a clean and secure interface.</p>
      <p>The front-end was focused on premium dark visuals, responsive layouts, and smooth interaction patterns for learners.</p>
    `,
  },
  {
    title: 'Aixom',
    slug: 'aixom',
    description:
      'Front-end development for Aixum IT Group’s bilingual official website, built to deliver smooth UX and real-time API-driven content.',
    technologies: ['Vue.js', 'JavaScript', 'REST API', 'Tailwind CSS'],
    image: '/images/aixom_mockup.png',
    imageGradient: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
    liveUrl: '',
    githubUrl: '',
    date: '2024-03-01',
    featured: false,
    contentHtml: `
      <p>Aixom is the official bilingual website for Aixum IT Group, built to support both language directions and dynamic content interactions.</p>
      <p>The project emphasized reusable UI components, REST API integration, and a smooth digital experience aligned with the company brand.</p>
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