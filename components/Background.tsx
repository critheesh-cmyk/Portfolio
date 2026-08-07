import AnimatedGrid from './AnimatedGrid';
import GlowBlob from './GlowBlob';
import ParticleSystem from './ParticleSystem';
import Spotlight from './Spotlight';
import Stars from './Stars';

export default function Background() {
  return (
    <div className="fixed inset-0 overflow-hidden bg-[#050816]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(124,58,237,0.25),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(6,182,212,0.22),transparent_35%)]" />
      <AnimatedGrid className="inset-0" />
      <Stars />
      <ParticleSystem />
      <GlowBlob className="left-[-8rem] top-[-5rem] h-72 w-72 bg-violet-500/30" />
      <GlowBlob className="bottom-[-6rem] right-[-4rem] h-80 w-80 bg-cyan-400/30" />
      <GlowBlob className="left-[30%] top-[30%] h-48 w-48 bg-pink-500/20" />
      <Spotlight />
    </div>
  );
}
