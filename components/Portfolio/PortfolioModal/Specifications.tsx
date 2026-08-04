import type { Specification } from '@/types/portfolio.types';

interface Props {
  specification?: Specification;
}

export default function Specifications({
  specification,
}: Props) {
  if (!specification) return null;

  return (
    <dl>
      {specification.heatedArea && (
        <>
          <dt>Площа обігріву</dt>

          <dd>
            {specification.heatedArea.min}–
            {specification.heatedArea.max} м²
          </dd>
        </>
      )}

      {specification.chimney && (
        <>
          <dt>Димохід</dt>
          <dd>{specification.chimney}</dd>
        </>
      )}

      {specification.durationDays && (
        <>
          <dt>Термін робіт</dt>
          <dd>{specification.durationDays} днів</dd>
        </>
      )}

      {specification.completedYear && (
        <>
          <dt>Рік</dt>
          <dd>{specification.completedYear}</dd>
        </>
      )}

      {specification.location && (
        <>
          <dt>Локація</dt>
          <dd>{specification.location}</dd>
        </>
      )}
    </dl>
  );
}