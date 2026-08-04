interface Props {
  benefits?: string[];
}

export default function Benefits({
  benefits,
}: Props) {
  if (!benefits?.length) return null;

  return (
    <ul>
      {benefits.map(item => (
        <li key={item}>
          ✓ {item}
        </li>
      ))}
    </ul>
  );
}