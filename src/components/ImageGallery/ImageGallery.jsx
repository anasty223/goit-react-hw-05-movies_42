export default function ImageGallery({ items }) {
  return (
    <ul>
      {items.map((mouvie) => (
        <li key={mouvie.id}>{mouvie.title}</li>
      ))}
    </ul>
  );
}
