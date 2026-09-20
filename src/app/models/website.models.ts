export interface NavItem {
  label: string;
  link: string;
  children?: { label: string; link: string }[];
}

export interface HeroSlide {
  id: string;
  badge: string;
  category: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  projectTarget?: string;
  actionLink: string;
}

export interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  category: 'activities' | 'news' | 'campaigns' | 'statements';
  categoryLabel: string;
  image: string;
  date: string;
  readTime: string;
  featured?: boolean;
  author: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  status: 'ongoing' | 'completed' | 'future' | 'needs';
  statusLabel: string;
  sector: 'shelter' | 'health' | 'education' | 'food' | 'water' | 'debris' | 'damage-assessment' | string;
  sectorLabel: string;
  progressPercentage: number;
  targetedBudget: string;
  raisedBudget: string;
  beneficiaries: string;
  location: string;
  image: string;
}

export interface MediaItem {
  id: string;
  type: 'video' | 'photo' | 'report' | 'interview';
  title: string;
  date: string;
  image: string;
  videoUrl?: string;
  duration?: string;
  fileSize?: string;
  downloadUrl?: string;
  speaker?: string;
  description?: string;
  tags?: string[];
}

export interface Partner {
  id: string;
  name: string;
  code: string;
  logo: string;
  category: string;
  categoryKey: 'un' | 'gov' | 'eng';
  description: string;
  role: string;
  iconType: string;
}

export interface StatItem {
  value: string;
  label: string;
  sublabel: string;
  icon: string;
}
