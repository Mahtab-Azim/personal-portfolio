import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

const contentDirectory = path.join(process.cwd(), 'content');

export interface Project {
  title: string;
  slug: string;
  description: string;
  technologies: string[];
  imageGradient: string;
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

// Ensure directory exists helper
function ensureDirectory(dirPath: string) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

export async function getProjects(): Promise<Project[]> {
  const projectsDir = path.join(contentDirectory, 'projects');
  ensureDirectory(projectsDir);
  const fileNames = fs.readdirSync(projectsDir);
  
  const allProjects = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(projectsDir, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);
      
      return {
        slug,
        title: data.title || '',
        description: data.description || '',
        technologies: data.technologies || [],
        imageGradient: data.imageGradient || 'linear-gradient(135deg, #a78bfa 0%, #7c3aed 100%)',
        liveUrl: data.liveUrl || '',
        githubUrl: data.githubUrl || '',
        date: data.date || '',
        featured: data.featured || false,
      } as Project;
    });

  // Sort projects by date descending
  return allProjects.sort((a, b) => (new Date(b.date).getTime() - new Date(a.date).getTime()));
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  const projectsDir = path.join(contentDirectory, 'projects');
  const fullPath = path.join(projectsDir, `${slug}.md`);
  
  if (!fs.existsSync(fullPath)) {
    return null;
  }
  
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  const contentHtml = await marked.parse(content);
  
  return {
    slug,
    title: data.title || '',
    description: data.description || '',
    technologies: data.technologies || [],
    imageGradient: data.imageGradient || 'linear-gradient(135deg, #a78bfa 0%, #7c3aed 100%)',
    liveUrl: data.liveUrl || '',
    githubUrl: data.githubUrl || '',
    date: data.date || '',
    featured: data.featured || false,
    contentHtml,
  } as Project;
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  const blogDir = path.join(contentDirectory, 'blog');
  ensureDirectory(blogDir);
  const fileNames = fs.readdirSync(blogDir);
  
  const allPosts = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(blogDir, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);
      
      return {
        slug,
        title: data.title || '',
        description: data.description || '',
        date: data.date || '',
        readTime: data.readTime || '',
        category: data.category || '',
        imageGradient: data.imageGradient || 'linear-gradient(135deg, #a78bfa 0%, #7c3aed 100%)',
      } as BlogPost;
    });

  // Sort posts by date descending
  return allPosts.sort((a, b) => (new Date(b.date).getTime() - new Date(a.date).getTime()));
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const blogDir = path.join(contentDirectory, 'blog');
  const fullPath = path.join(blogDir, `${slug}.md`);
  
  if (!fs.existsSync(fullPath)) {
    return null;
  }
  
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  const contentHtml = await marked.parse(content);
  
  return {
    slug,
    title: data.title || '',
    description: data.description || '',
    date: data.date || '',
    readTime: data.readTime || '',
    category: data.category || '',
    imageGradient: data.imageGradient || 'linear-gradient(135deg, #a78bfa 0%, #7c3aed 100%)',
    contentHtml,
  } as BlogPost;
}
