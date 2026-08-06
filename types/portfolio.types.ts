// ======================================================================
// Portfolio Types
// ======================================================================

export interface Image {
  src: string;
  alt: string;
  caption?: string;
}

export interface Review {
  author: string;
  text: string;
  rating?: number; // 1–5
  date?: string;
}

export interface Contribution {
  projectType: string; // id з PROJECT_TYPES
  roles: string[]; // id з MASTER_ROLES
  note?: string;
}

export interface Specification {
  heatedArea?: {
    min: number;
    max: number;
  };

  chimney?: string;
  durationDays?: number;
  completedYear?: number;
  location?: string;
}

export interface SEO {
  title?: string;
  description?: string;
  keywords?: string[];
}

export interface Work {
  // ----------------------------------------------------
  // Основна інформація
  // ----------------------------------------------------

  id: number;
  slug: string;

  title: string;
  subtitle?: string;

  images: Image[];

  // ----------------------------------------------------
  // Класифікація
  // ----------------------------------------------------

  categories: string[];
  features: string[];
  capabilities: string[];
  materials: string[];
  fuels: string[];
  purposes: string[];

  // ----------------------------------------------------
  // Опис
  // ----------------------------------------------------

  description?: string;
  clientTask?: string;
  solution?: string;

  // ----------------------------------------------------
  // Технічні характеристики
  // ----------------------------------------------------

  specifications: Specification;

  // ----------------------------------------------------
  // Участь майстра
  // ----------------------------------------------------

  contribution: Contribution;

  // ----------------------------------------------------
  // Переваги
  // ----------------------------------------------------

  benefits: string[];

  // ----------------------------------------------------
  // Відгуки
  // ----------------------------------------------------

  reviews: Review[];

  // ----------------------------------------------------
  // SEO
  // ----------------------------------------------------

  seo?: SEO;

  // ----------------------------------------------------
  // Системні поля
  // ----------------------------------------------------

  featured?: boolean;
  isPublished: boolean;
}