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
  titleFa?: string;
  contentHtmlFa?: string;
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
    title: 'How to Speed Up the Initial Load of a Large App',
    slug: 'how-to-speed-up-the-initial-load-of-a-large-app',
    description:
      'A question I was asked in a front-end interview: if you have a large app, how do you make the first load faster? Here is the full answer, from measuring first to SSR, code splitting, caching, and app shells.',
    date: '2026-09-15',
    readTime: '3 min read',
    category: 'Performance',
    imageGradient: 'linear-gradient(135deg, #5a487a 0%, #6d5794 55%, #9485b7 100%)',
    contentHtml: `
      <p>If you have a large app and you want the very first load — the moment a user lands on your site — to feel fast, what do you do?</p>
      <p>This is one of the questions I was asked in a front-end developer interview. The answer is not a single trick; it is a combination of the following.</p>

      <h2>0. Measure before you optimize</h2>
      <p>Before doing anything, find out where it is actually slow. Use Lighthouse or the browser's Performance tab. Metrics like <strong>LCP</strong> and <strong>TTI</strong> tell you whether the problem is the initial render or the amount of JavaScript you are shipping. Optimizing without measuring is just guessing.</p>

      <h2>1. Server-Side Rendering (SSR) or SSG</h2>
      <p>The server sends ready-made HTML, so the user sees content immediately. JavaScript arrives afterwards and hydration makes the page interactive. This is exactly what Next.js and Nuxt.js do.</p>

      <h2>2. Lazy loading and route-based code splitting</h2>
      <p>Instead of shipping the whole app, load only the page the user is currently looking at. Next.js and Nuxt.js do this automatically per route.</p>

      <h2>3. Critical CSS and resource hints</h2>
      <p>Inline only the CSS needed for above-the-fold content, and use <code>preconnect</code>, <code>dns-prefetch</code>, and <code>preload</code> for fonts and critical APIs so the browser starts fetching them earlier.</p>

      <h2>4. CDN and edge caching</h2>
      <p>Serve static files (JS, CSS, images) from the server geographically closest to the user.</p>

      <h2>5. Image optimization</h2>
      <p>Use modern formats (WebP/AVIF), lazy-load images below the fold, and serve responsive sizes instead of one oversized file.</p>

      <h2>6. Cut down third-party scripts</h2>
      <p>Analytics, chatbots, ads — these are very often the single biggest reason large apps feel slow. Audit them and drop or defer what you do not need on first load.</p>

      <h2>7. Skeletons and an app shell</h2>
      <p>Show a lightweight interface instantly while the real data is on its way. It is the experience you see on apps like Digikala or Snapp: the layout is there before the content is.</p>

      <h2>In short</h2>
      <p>Start by measuring, then render early (SSR/SSG), ship less JavaScript (code splitting), deliver assets from closer and in smaller formats (CDN, images), and keep the user looking at something meaningful while the rest loads (app shell). That combination is what makes a large app feel fast on the very first visit.</p>
    `,
    titleFa: 'چطور لود اولیه‌ی سایت را در یک اپ بزرگ سریع‌تر کنیم؟',
    contentHtmlFa: `
      <p>اگه یه اپ بزرگ داشته باشیم و بخوایم همون اول که کاربر وارد می‌شه لود اولیه سریع‌تر باشه، باید چیکار کنیم؟</p>
      <p>این یکی از سوالاتیه که توی مصاحبه‌ی فرانت‌اند دولوپر از من پرسیده شد. جواب، ترکیبی از این موارده.</p>

      <h2>۰. قبل از هر کاری، اندازه‌گیری</h2>
      <p>قبل از هر کاری اول باید ببینیم دقیقاً کجا کنده؛ با Lighthouse یا تب Performance مرورگر. متریک‌هایی مثل <strong>LCP</strong> و <strong>TTI</strong> بهمون می‌گن مشکل از رندر اولیه‌ست یا از حجم جاوااسکریپت.</p>

      <h2>۱. استفاده از SSR یا SSG</h2>
      <p>سرور HTML خام رو می‌فرسته، کاربر محتوا رو فوراً می‌بینه، بعد جاوااسکریپت میاد و صفحه hydrate و تعاملی می‌شه. این دقیقاً همون کاریه که Next.js و Nuxt.js انجام می‌دن.</p>

      <h2>۲. Lazy Loading و Code Splitting بر اساس route</h2>
      <p>فقط همون صفحه‌ای که کاربر داره می‌بینتش لود بشه، نه کل اپ. Next.js و Nuxt.js این کار رو خودکار برای هر route انجام می‌دن.</p>

      <h2>۳. Critical CSS و Resource Hints</h2>
      <p>فقط CSS مورد نیاز بالای صفحه رو inline کن؛ از <code>preconnect</code>، <code>dns-prefetch</code> و <code>preload</code> برای فونت‌ها و API‌های حیاتی استفاده کن.</p>

      <h2>۴. CDN و Edge Caching</h2>
      <p>فایل‌های استاتیک (JS، CSS، تصاویر) رو از نزدیک‌ترین سرور جغرافیایی به کاربر سرو کن.</p>

      <h2>۵. بهینه‌سازی تصاویر</h2>
      <p>فرمت‌های مدرن (WebP/AVIF)، lazy loading تصاویر پایین صفحه، و سایز responsive به جای یک فایل بزرگ.</p>

      <h2>۶. کاهش حجم third-party scripts</h2>
      <p>آنالیتیکس، چت‌بات، تبلیغات — این‌ها اغلب بزرگ‌ترین علت کندی سوپراپ‌ها هستن.</p>

      <h2>۷. Skeleton و App Shell</h2>
      <p>یه رابط سبک فوری نشون بده تا دیتای واقعی بیاد — تجربه‌ای که توی دیجی‌کالا و اسنپ می‌بینی.</p>

      <h2>جمع‌بندی</h2>
      <p>اول اندازه‌گیری، بعد رندر زودهنگام (SSR/SSG)، جاوااسکریپت کمتر (code splitting)، رسوندن فایل‌ها از نزدیک‌تر و سبک‌تر (CDN و تصاویر)، و نگه داشتن کاربر با یه رابط معنادار تا بقیه لود بشه (app shell). همین ترکیبه که یه اپ بزرگ رو توی اولین بازدید سریع نشون می‌ده.</p>
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