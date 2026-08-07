export default function Stars() {
  const stars = Array.from({ length: 24 });
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {stars.map((_, index) => (
        <div
          key={index}
          className="absolute h-1 w-1 rounded-full bg-white/80"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `pulseGlow ${2 + (index % 3)}s ease-in-out infinite`,
          }}
        />
      ))}
    </div>
  );
}
