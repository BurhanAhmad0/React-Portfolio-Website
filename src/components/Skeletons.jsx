function SkeletonBlock({ className }) {
  return <div aria-hidden="true" className={`motion-safe:animate-pulse rounded-sm bg-line ${className}`} />;
}

export function BlogListSkeleton() {
  return (
    <div aria-hidden="true" className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }, (_, index) => (
        <article key={index} className="card space-y-4 p-5">
          <SkeletonBlock className="h-4 w-24" />
          <SkeletonBlock className="h-6 w-3/4" />
          <div className="space-y-2">
            <SkeletonBlock className="h-4 w-full" />
            <SkeletonBlock className="h-4 w-5/6" />
            <SkeletonBlock className="h-4 w-2/3" />
          </div>
        </article>
      ))}
    </div>
  );
}

export function BlogPostSkeleton() {
  return (
    <article aria-hidden="true" className="mt-4">
      <SkeletonBlock className="h-10 w-4/5 sm:h-12" />
      <SkeletonBlock className="mt-4 h-4 w-48" />
      <div className="mt-10 space-y-4">
        <SkeletonBlock className="h-5 w-full" />
        <SkeletonBlock className="h-5 w-full" />
        <SkeletonBlock className="h-5 w-5/6" />
        <SkeletonBlock className="h-5 w-full" />
        <SkeletonBlock className="h-5 w-2/3" />
      </div>
    </article>
  );
}

export function PageSkeleton() {
  return (
    <main role="status" aria-label="Loading page" className="container-page min-h-[60vh] py-14">
      <SkeletonBlock className="h-10 w-2/5 sm:h-12" />
      <div className="mt-10 space-y-4">
        <SkeletonBlock className="h-5 w-full" />
        <SkeletonBlock className="h-5 w-full" />
        <SkeletonBlock className="h-5 w-3/4" />
      </div>
    </main>
  );
}
