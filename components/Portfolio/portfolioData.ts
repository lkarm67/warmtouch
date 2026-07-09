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
    title: 'Піч',
    subtitle: 'Облицювання ручної роботи',
    category: 'Печі',
    cover: '/portfolio/pich-01.jpg',
    images: ['/portfolio/pich-01.jpg'],
  },
  {
    id: 2,
    title: 'Кахельна піч із лежанкою',
    subtitle: 'Облицювання ручної роботи',
    category: 'Кахельні',
    cover: '/portfolio/kachelna-01.jpg',
    images: ['/portfolio/kachelna-01.jpg'],
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
    subtitle: 'Піч, плита, мийка та стільниця',
    category: 'Барбекю',
    cover: '/portfolio/barbecue-01.jpg',
    images: ['/portfolio/barbecue-01.jpg'],
  },
  {
    id: 5,
    title: 'Кутовий камін',
    subtitle: 'Облицювання ручної роботи',
    category: 'Каміни',
    cover: '/images/portfolio/kamin/kamin_1.5.jpg',
    images: [
      '/images/portfolio/kamin/kamin_1.5.jpg',
      '/images/portfolio/kamin/kamin_1.1.jpg',      
    ],
  }

];