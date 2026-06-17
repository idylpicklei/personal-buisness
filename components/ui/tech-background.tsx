export function TechBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="tech-grid absolute inset-0 opacity-60" />
      <div className="absolute -left-32 top-0 h-[32rem] w-[32rem] rounded-full bg-indigo-600/20 blur-[120px] animate-pulse-glow" />
      <div className="absolute -right-32 top-1/3 h-96 w-96 rounded-full bg-emerald-500/10 blur-[100px] animate-pulse-glow" />
      <div className="absolute bottom-0 left-1/2 h-80 w-[40rem] -translate-x-1/2 rounded-full bg-indigo-500/10 blur-[100px]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-400/40 to-transparent" />
    </div>
  );
}
