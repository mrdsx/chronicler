export function FeaturesSection({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-primary py-10 sm:py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">{children}</div>
    </div>
  );
}
