interface Props {
  items: string[];
}

export default function InfoList({
  items,
}: Props) {
  return (
    <ul>
      {items.map(item => (
        <li key={item}>
          {item}
        </li>
      ))}
    </ul>
  );
}