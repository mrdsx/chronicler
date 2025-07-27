export function IntroductionSection({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-(--home-background) py-10 pt-14">
      <div className="mx-auto max-w-3xl text-center lg:px-8 lg:py-10">
        {children}
      </div>
    </div>
  );
}
