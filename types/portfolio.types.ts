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
  projectType: string;      // id з PROJECT_TYPES
  roles: string[];          // id з MASTER_ROLES
  note?: string;
}

export interface Specification {
  heatedArea?: {
  min: number;
  max: number;
};  // 40–60
  chimney?: string;      // Цегляний
  durationDays?: number;     // 14
  completedYear?: number;  // 2024
  location?: string;     // Чернівецька обл.
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

  cover: string;
  images: Image[];

  // ----------------------------------------------------
  // Класифікація
  // ----------------------------------------------------

  categories: string[];   // id з CATEGORIES
  features?: string[];    // id з FEATURES
  capabilities?: string[];  // id з CAPABILITIES
  materials?: string[];   // id з MATERIALS
  fuels?: string[];       // id з FUELS
  purposes?: string[];    // id з PURPOSES

  // ----------------------------------------------------
  // Опис
  // ----------------------------------------------------

  description?: string;

  clientTask?: string;
  solution?: string;

  // ----------------------------------------------------
  // Технічні характеристики
  // ----------------------------------------------------

  specifications?: Specification;

  // ----------------------------------------------------
  // Участь майстра
  // ----------------------------------------------------

  contribution?: Contribution;

  // ----------------------------------------------------
  // Переваги
  // ----------------------------------------------------

  benefits?: string[];

  // ----------------------------------------------------
  // Відгуки
  // ----------------------------------------------------

  reviews?: Review[];

  // ----------------------------------------------------
  // SEO
  // ----------------------------------------------------

  seo?: SEO;

  // ----------------------------------------------------
  // Системні поля
  // ----------------------------------------------------

  featured?: boolean;      // Показувати серед рекомендованих
  isPublished?: boolean;   // Опубліковано на сайті
}