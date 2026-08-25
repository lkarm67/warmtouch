'use client';

import { useState } from 'react';

import css from './Portfolio.module.css';
import { works } from './portfolioData';

import PortfolioCard from './PortfolioCard';
import PortfolioFilter from './PortfolioFilter';
import PortfolioModal from './PortfolioModal/PortfolioModal';
import Pagination from './Pagination';

import type { Work } from '@/types/portfolio.types';

const ITEMS_PER_PAGE = 4;

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('Усі');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedWork, setSelectedWork] = useState<Work | null>(null);

  // Фільтрація робіт за категорією
  const filteredWorks =
    activeCategory === 'Усі'
      ? works
      : works.filter((work) =>
          work.categories.includes(activeCategory)
        );

  // Загальна кількість сторінок
  const totalPages = Math.ceil(
    filteredWorks.length / ITEMS_PER_PAGE
  );

  // Індекс першої роботи на поточній сторінці
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;

  // Роботи для поточної сторінки
  const paginatedWorks = filteredWorks.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  // Зміна категорії
  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  // Перехід на сторінку
  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;

    setCurrentPage(page);

    // Повертаємо користувача до початку галереї
    const grid = document.querySelector(`.${css.grid}`);

    if (grid) {
      const top =
        grid.getBoundingClientRect().top + window.scrollY - 100;

      window.scrollTo({
        top,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className={`${css.portfolio} container`}>
      <h2 className={css.title}>Виконані роботи</h2>

      <div className={css.dividerContainer}>
        <hr className={css.divider} />

        <svg className={css.icon_fire}>
          <use href="/icons.svg#icon-fire" />
        </svg>

        <hr className={css.divider} />
      </div>

      <p className={css.description}>
        Від невеликого каміна до великої барбекю-зони — кожен проєкт
        створюється індивідуально, з увагою до деталей, безпеки та
        довговічності.
      </p>

      {/* Фільтр */}
      <div className={css.filter}>
        <PortfolioFilter
          activeCategory={activeCategory}
          setActiveCategory={handleCategoryChange}
        />
      </div>

      {/* Галерея */}
      <div className={css.grid}>
        {paginatedWorks.map((work) => (
          <PortfolioCard
            key={work.id}
            work={work}
            onOpen={() => setSelectedWork(work)}
          />
        ))}
      </div>

      {/* Пагінація */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />

      {/* Модальне вікно */}
      <PortfolioModal
        work={selectedWork}
        isOpen={selectedWork !== null}
        onClose={() => setSelectedWork(null)}
      />
    </section>
  );
}