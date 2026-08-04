import type { Work } from '@/types/portfolio.types';
import Image from 'next/image';
import css from './PortfolioCard.module.css';

interface Props {
  work: Work;
  onOpen: () => void;
}

export default function PortfolioCard({
  work,
  onOpen,
}: Props) {
  return (
    <article
      className={css.card}
      onClick={onOpen}
      role="button"
      tabIndex={0}
      aria-label={`Відкрити проєкт "${work.title}"`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onOpen();
        }
      }}
    >
      <Image
        src={work.images[0].src}
        alt={work.images[0].alt}
        fill
        sizes="
          (max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          33vw
        "
        className={css.image}
      />

      <div className={css.overlay}>
        <div className={css.content}>
          <h3>{work.title}</h3>

          {work.subtitle && <p>{work.subtitle}</p>}
        </div>

        <span className={css.arrow} aria-hidden="true">
          →
        </span>
      </div>
    </article>
  );
}