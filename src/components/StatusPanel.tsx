export function StatusPanel() {
  return (
    <section className="status-panel" aria-label="Status systemu">
      <p className="text-[0.72rem] uppercase tracking-[0.16em] text-archive-moss">
        Status systemu
      </p>
      <p className="mt-1 flex items-center gap-2 text-sm uppercase text-archive-success">
        <span className="h-2 w-2 rounded-full bg-archive-success shadow-[0_0_10px_rgba(163,200,121,0.9)]" />
        Online
      </p>
      <p className="mt-2 text-[0.68rem] uppercase tracking-[0.1em] text-archive-dim">
        Ostatnia aktualizacja:
      </p>
      <time className="text-xs text-archive-paper" dateTime="2023-11-23T02:17:00">
        23.11.2023 / 02:17
      </time>
    </section>
  );
}
