import type { Specification } from '@/types/portfolio.types';

import css from './Specifications.module.css';

interface Props {
  specification?: Specification;
}

export default function Specifications({
  specification,
}: Props) {
  if (!specification) return null;

  return (
    <dl className={css.list}>
      {specification.heatedArea && (
        <>
          <dt className={css.term}>Площа обігріву</dt>
          <dd className={css.value}>
            {specification.heatedArea.min}–
            {specification.heatedArea.max} м²
          </dd>
        </>
      )}

      {specification.chimney && (
        <>
          <dt className={css.term}>Димохід</dt>
          <dd className={css.value}>{specification.chimney}</dd>
        </>
      )}

      {specification.durationDays && (
        <>
          <dt className={css.term}>Термін робіт</dt>
          <dd className={css.value}>
            {specification.durationDays} днів
          </dd>
        </>
      )}

      {specification.completedYear && (
        <>
          <dt className={css.term}>Рік</dt>
          <dd className={css.value}>
            {specification.completedYear}
          </dd>
        </>
      )}

      {specification.location && (
        <>
          <dt className={css.term}>Локація</dt>
          <dd className={css.value}>{specification.location}</dd>
        </>
      )}
    </dl>
  );
}