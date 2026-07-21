export interface Work {
    id: number;
    title: string;
    subtitle: string;
    category: string;
    cover: string;
    images: string[];
}

export const works: Work[] = [
  {
    id: 1,
    title: 'Цегляна груба',
    subtitle: 'Міжкімнатна груба з плитою',
    category: 'Печі',
    cover: '/images/portfolio/pich/gruba_plita_3.jpg',
    images: [
      '/images/portfolio/pich/gruba_plita_3.jpg'
    ],
  },
  {
    id: 2,
    title: 'Кахельна груба із плитою',
    subtitle: 'Облицювання ручної роботи',
    category: 'Кахельні',
    cover: '/images/portfolio/kahelna/kahelna_pich_1a.jpg',
    images: [
      '/images/portfolio/kahelna/kahelna_pich_1a.jpg',
      '/images/portfolio/kahelna/kahelna_pich_1b.jpg',
    ],
  },
  {
    id: 3,
    title: 'Кутовий камін',
    subtitle: 'Облицювання цеглою',
    category: 'Каміни',
    cover: '/images/portfolio/kamin/kamin_6.jpg',
    images: ['/images/portfolio/kamin/kamin_6.jpg'],
  },
  {
    id: 4,
    title: 'Барбекю-комплекс',
    subtitle: 'Піч, плита, мийка, коптильня та стільниці',
    category: 'Барбекю',
    cover: '/images/portfolio/barbecue/barbecue_8.jpg',
    images: ['/images/portfolio/barbecue/barbecue_8.jpg'],
  },
  {
    id: 5,
    title: 'Кутовий камін',
    subtitle: 'Облицювання ручної роботи',
    category: 'Каміни',
    cover: '/images/portfolio/kamin/kamin_1a.jpg',
    images: [
      '/images/portfolio/kamin/kamin_1a.jpg',
      '/images/portfolio/kamin/kamin_1b.jpg',      
    ],
  }

];