export interface Project {
  id: number;
  title: string;
  slug: string;
  description: string;
  content?: string;
  image?: string;
  technologies: string[];
  github_url?: string;
  demo_url?: string;
  featured: boolean;
  category: string;
  created_at: string;
}

export interface Experience {
  id: number;
  title: string;
  company: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
  start_date: string;
  end_date?: string;
  is_current: boolean;
  location: string;
}

export interface Skill {
  id: number;
  name: string;
  category: string;
  proficiency: number;
  icon?: string;
  years_experience?: number;
}

export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt?: string;
  content: string;
  cover_image?: string;
  category?: string;
  tags: string[];
  published: boolean;
  views: number;
  created_at: string;
  published_at?: string;
}

export interface ContactMessage {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

export interface ApiResponse<T> {
  data: T;
  meta?: {
    total: number;
    limit: number;
    offset: number;
  };
}
