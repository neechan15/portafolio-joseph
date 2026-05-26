export default function BackgroundFX() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Grid */}
      <div className="absolute inset-0 bg-grid opacity-50" />

      {/* Radial glow top */}
      <div className="absolute left-1/2 top-0 h-[600px] w-[1200px] -translate-x-1/2 bg-radial-glow" />

      {/* Animated blobs */}
      <div
        className="absolute -left-32 top-32 h-[420px] w-[420px] rounded-full opacity-30 blur-3xl animate-blob"
        style={{ background: 'radial-gradient(circle, #22d3ee 0%, transparent 70%)' }}
      />
      <div
        className="absolute -right-24 top-[40%] h-[480px] w-[480px] rounded-full opacity-30 blur-3xl animate-blob"
        style={{
          background: 'radial-gradient(circle, #8b5cf6 0%, transparent 70%)',
          animationDelay: '-4s',
        }}
      />
      <div
        className="absolute bottom-0 left-1/3 h-[500px] w-[500px] rounded-full opacity-20 blur-3xl animate-blob"
        style={{
          background: 'radial-gradient(circle, #ec4899 0%, transparent 70%)',
          animationDelay: '-8s',
        }}
      />

      {/* Vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg" />
    </div>
  );
}
