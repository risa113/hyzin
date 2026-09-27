/**
 * PageSkeleton
 * Luxury Atelier Monograph shimmer loading state.
 * Eliminates Cumulative Layout Shift (CLS) and provides immediate perceived responsiveness.
 */
export default function PageSkeleton({ variant = 'page' }) {
  if (variant === 'modal') {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#3A2117]/80 backdrop-blur-md">
        <div className="w-full max-w-3xl bg-[#4A2E22] border border-[#C4A174]/20 p-8 animate-pulse">
          <div className="h-6 w-1/3 bg-[#C4A174]/20 mb-4" />
          <div className="h-64 w-full bg-[#3A2117]/60 mb-6" />
          <div className="h-4 w-3/4 bg-[#C4A174]/15 mb-2" />
          <div className="h-4 w-1/2 bg-[#C4A174]/10" />
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-[70vh] bg-[#3A2117] text-[#EDE3D2] px-4 sm:px-6 lg:px-12 py-16 max-w-7xl mx-auto">
      {/* Editorial Header Skeleton */}
      <div className="space-y-4 mb-12 animate-pulse">
        <div className="h-3 w-32 bg-[#C4A174]/30 rounded-none tracking-widest" />
        <div className="h-10 sm:h-14 w-3/4 max-w-lg bg-[#C4A174]/20 rounded-none" />
        <div className="h-4 w-2/3 max-w-md bg-[#EDE3D2]/10 rounded-none" />
      </div>

      {/* Grid of Skeleton Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div
            key={i}
            className="border border-[#C4A174]/15 bg-[#4A2E22]/60 p-6 flex flex-col justify-between h-80 animate-pulse"
            style={{ animationDelay: `${i * 120}ms` }}
          >
            <div className="w-full h-44 bg-[#3A2117]/80 mb-4 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#C4A174]/10 to-transparent animate-shimmer" />
            </div>
            <div className="space-y-2">
              <div className="h-4 w-3/4 bg-[#EDE3D2]/20" />
              <div className="h-3 w-1/2 bg-[#C4A174]/20" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
