import type { ReactNode } from "react";

type AppLayoutProps = {
  sidebar: ReactNode;
  header: ReactNode;
  children: ReactNode;
};

export function AppLayout({ sidebar, header, children }: AppLayoutProps) {
  return (
    <div className="min-h-screen overflow-hidden bg-archive-ink text-archive-moss">
      <div className="fixed inset-0 -z-10 bg-archive-grid" aria-hidden="true" />
      <div className="fixed inset-0 -z-10 bg-archive-vignette" aria-hidden="true" />
      <div className="pointer-events-none fixed inset-0 z-50 opacity-[0.09]" aria-hidden="true">
        <div className="h-full w-full bg-scanlines" />
      </div>

      <div className="mx-auto grid min-h-screen w-full max-w-[1700px] grid-cols-1 gap-5 p-4 lg:grid-cols-[320px_minmax(0,1fr)] lg:p-7">
        <aside className="lg:sticky lg:top-7 lg:h-[calc(100vh-56px)]">{sidebar}</aside>
        <div className="min-w-0">
          {header}
          <main className="mt-5">{children}</main>
        </div>
      </div>
    </div>
  );
}
