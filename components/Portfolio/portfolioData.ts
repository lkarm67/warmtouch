export interface Work {
  id: number;
  title: string;
  subtitle: string;

  categories: string[];

  features?: string[];

  description?: string;

  cover: string;
  images: string[];
}

export const works: Work[] = [
  {
    id: 1,
    title: 'Міжкімнатна груба з варильною плитою',
    subtitle: 'Опалення двох приміщень і приготування їжі',

    categories: [
      'Печі',
      'Груби'
    ],

    features: [
      'Міжкімнатна',
      'Варильна плита',
      'Теплоакумулююча'
    ],

    description:
      'Цегляна міжкімнатна груба з чавунною варильною плитою. Призначена для ефективного опалення суміжних приміщень та щоденного приготування їжі. Чавунна плита зі знімними кільцями дозволяє використовувати посуд різного діаметра, зокрема казан.',
  
    cover: '/images/portfolio/pich/gruba_plita_3.jpg',
    images: [
      '/images/portfolio/pich/gruba_plita_3.jpg'
    ],
  },
  {
    id: 2,
    title: 'Кахельна груба із плитою',
    subtitle: 'Облицювання ручної роботи',
    categories: [
      'Печі',
      'Груби',
      'Кахельні'
    ],
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
    categories: ['Каміни'],
    cover: '/images/portfolio/kamin/kamin_6.jpg',
    images: ['/images/portfolio/kamin/kamin_6.jpg'],
  },
  {
    id: 4,
    title: 'Барбекю-комплекс',
    subtitle: 'Піч, плита, мийка, коптильня та стільниці',
    categories: ['Барбекю'],
    cover: '/images/portfolio/barbecue/barbecue_8.jpg',
    images: ['/images/portfolio/barbecue/barbecue_8.jpg'],
  },
  {
    id: 5,
    title: 'Кутовий камін',
    subtitle: 'Облицювання ручної роботи',
    categories: ['Каміни'],
    cover: '/images/portfolio/kamin/kamin_1a.jpg',
    images: [
      '/images/portfolio/kamin/kamin_1a.jpg',
      '/images/portfolio/kamin/kamin_1b.jpg',      
    ],
  }

];