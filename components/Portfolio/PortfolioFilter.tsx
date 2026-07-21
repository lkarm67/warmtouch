import { works } from "./portfolioData";
import css from "./Portfolio.module.css";

interface Props {
    activeCategory: string;
    setActiveCategory: (category: string) => void;
}

export default function PortfolioFilter({ activeCategory, setActiveCategory }: Props) {
    const categories = [
        'Усі',
        ...new Set(works.map(work => work.category))
    ];

    return (
        <div className={css.filter}>
            {categories.map(category => (
                <button
                    key={category}
                    className={
                        activeCategory === category
                            ? `${css.button} ${css.active}`
                            : css.button
                 }
                    onClick={() => setActiveCategory(category)}
                >
                    {category}
                </button>
            ))}
        </div>
    );
}
