import css from './Benefits.module.css';

interface Props {
  benefits?: string[];
}

export default function Benefits({ benefits }: Props) {
  if (!benefits?.length) return null;

  return (
    <ul className={css.list}>
      {benefits.map(item => (
        <li className={css.item} key={item}>
          <span className={css.icon}>✓</span>
          {item}
        </li>
      ))}
    </ul>
  );
}