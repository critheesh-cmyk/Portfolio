export default function ParticleSystem() {
  const particles = Array.from({ length: 18 });
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((_, index) => (
        <div
          key={index}
          className="absolute h-2 w-2 rounded-full bg-cyan-300/40"
          style={{
            top: `${8 + (index % 10) * 8}%`,
            left: `${10 + (index % 6) * 15}%`,
            animation: `float ${3 + (index % 3)}s ease-in-out infinite`,
          }}
        />
      ))}
    </div>
  );
}
