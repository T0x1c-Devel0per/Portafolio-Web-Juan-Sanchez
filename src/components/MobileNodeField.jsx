export default function MobileNodeField() {
  return (
    <div className="mobile-node-field" aria-hidden="true">
      {Array.from({ length: 18 }).map((_, index) => (
        <span
          key={index}
          style={{
            '--i': index,
            left: `${(index * 37) % 96}%`,
            top: `${(index * 23) % 92}%`
          }}
        />
      ))}
    </div>
  );
}
