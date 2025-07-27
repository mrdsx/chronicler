export function NotesArea({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex w-full rounded-md border-1 border-(--border-color)">
      {children}
    </div>
  );
}
