export function SkeletonLoader() {
  return (
    <div className="flex items-center gap-2">
      <div className="skeleton-loader size-6 min-w-6 rounded-full"></div>
      <div className="skeleton-loader h-5 w-full rounded-sm"></div>
    </div>
  );
}
