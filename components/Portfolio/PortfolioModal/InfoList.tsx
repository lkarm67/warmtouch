import css from './InfoList.module.css';

interface Props {
  items: string[];
  variant?: 'default' | 'badges';
}

export default function InfoList({
  items,
  variant = 'default',
}: Props) {
  return (
    <ul
      className={
        variant === 'badges'
          ? `${css.list} ${css.badges}`
          : css.list
      }
    >
      {items.map(item => (
        <li
          key={item}
          className={
            variant === 'badges'
              ? css.badge
              : css.item
          }
        >
          {item}
        </li>
      ))}
    </ul>
  );
}