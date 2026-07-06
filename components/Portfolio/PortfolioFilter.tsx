import { works } from "./portfolioData";

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
        <div className="filter">
            {categories.map(category => (
                <button
                    key={category}
                    className={activeCategory === category ? 'active' : ''}
                    onClick={() => setActiveCategory(category)}
                >
                    {category}
                </button>
            ))}
        </div>
    );
}
