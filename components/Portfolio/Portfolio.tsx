'use client';

import { useState } from 'react';
import css from './Portfolio.module.css';
import { works } from './portfolioData';
import PortfolioCard from './PortfolioCard';
import PortfolioFilter from './PortfolioFilter';

export default function Portfolio () {
    const [activeCategory, setActiveCategory] = useState('Усі');

const filteredWorks =
  activeCategory === 'Усі'
    ? works
    : works.filter(work =>
        work.categories.includes(activeCategory)
    );

 
    return(
        <section className={css.portfolio + ' container'}>
            <h2 className={css.title}>Виконані роботи</h2>
            <div className={css.dividerContainer}>
                <hr className={css.divider}/>
                    <svg className={css.icon_fire}>
                        <use href="/icons.svg#icon-fire"></use>
                    </svg>
                <hr className={css.divider}/>
            </div>  
            <p className={css.description}>Від невеликого каміна до великої барбекю-зони 
                 — кожен проєкт створюється індивідуально, з увагою до деталей, безпеки 
                 та довговічності.
            </p>

             {/* Фільтр */}
            <div className={css.filter}>
                <PortfolioFilter
                    activeCategory={activeCategory}
                    setActiveCategory={setActiveCategory}
    />
            </div>

            {/* Галерея */}
            <div className={css.grid}>
                {filteredWorks.map(work => (
                    <PortfolioCard
                        key={work.id} 
                        work={work}
                    />
                ))}
            </div>

        </section>
    )
}

