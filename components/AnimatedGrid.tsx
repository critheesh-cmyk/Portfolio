export default function AnimatedGrid({ className = '' }: { className?: string }) {
  return <div className={`pointer-events-none absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:36px_36px] ${className}`} />;
}
