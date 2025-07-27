export function Header({ children }: { children: React.ReactNode }) {
  // TODO: add items-center in <nav />
  return (
    <header className="border-border border-b-1">
      <div className="mx-auto flex justify-between bg-(--home-background) px-4 py-2.5 lg:px-6">
        {children}
      </div>
    </header>
  );
}
