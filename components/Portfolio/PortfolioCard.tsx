import { Work } from './portfolioData';
import Image from 'next/image';
import css from './PortfolioCard.module.css';

interface Props {
    work: Work;
}

export default function PortfolioCard({ work }: Props) {
    return (
        <article className={css.card}>
            <Image
                src={work.cover}
                alt={work.title}
                fill
                sizes="(max-width: 768px) 100vw,
                       (max-width: 1200px) 50vw,
                       33vw"
                className={css.image}
            />

            <div className={css.overlay}>
                <div className={css.content}>
                    <h3>{work.title}</h3>
                    <p>{work.subtitle}</p>
                </div>

                <span className={css.arrow}>→</span>
            </div>
        </article>
    );
}