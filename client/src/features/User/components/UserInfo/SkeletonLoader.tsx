export function SkeletonLoader() {
  return (
    <div className="flex items-center gap-2">
      <div className="size-6 min-w-6 animate-pulse rounded-full bg-gray-300 dark:bg-gray-600"></div>
      <div className="h-5 w-full animate-pulse rounded-sm bg-gray-300 dark:bg-gray-600"></div>
    </div>
  );
}
