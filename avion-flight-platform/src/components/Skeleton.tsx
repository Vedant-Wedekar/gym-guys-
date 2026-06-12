export default function SkeletonCard() {
  return (
    <div className="rounded-panel border border-line bg-white p-5 shadow-card animate-pulse">
      <div className="flex items-center gap-4">
        <div className="h-10 w-10 rounded-2xl bg-line" />
        <div className="h-4 w-32 rounded bg-line" />
        <div className="ml-auto h-6 w-24 rounded bg-line" />
      </div>
      <div className="mt-5 grid grid-cols-3 gap-4">
        <div className="h-8 rounded bg-line" />
        <div className="h-8 rounded bg-line" />
        <div className="h-8 rounded bg-line" />
      </div>
    </div>
  );
}
