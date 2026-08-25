import css from './Portfolio.module.css';
import { CATEGORIES } from '@/lib/config/portfolio.config';

interface Props {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

export default function PortfolioFilter({
  activeCategory,
  setActiveCategory,
}: Props) {
  return (
    <div className={css.filter}>
      <button
        type="button"
        className={
          activeCategory === 'Усі'
            ? `${css.button} ${css.active}`
            : css.button
        }
        onClick={() => setActiveCategory('Усі')}
      >
        Усі
      </button>

      {CATEGORIES.map((category) => (
        <button
          key={category.id}
          type="button"
          className={
            activeCategory === category.id
              ? `${css.button} ${css.active}`
              : css.button
          }
          onClick={() => setActiveCategory(category.id)}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
}