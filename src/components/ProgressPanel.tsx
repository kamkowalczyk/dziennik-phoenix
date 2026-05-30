type ProgressPanelProps = {
  completedCount: number;
  isCodeReady: boolean;
  total: number;
  onSubmitCode: () => void;
};

export function ProgressPanel({ completedCount, isCodeReady, total, onSubmitCode }: ProgressPanelProps) {
  return (
    <section className="archive-panel p-4" aria-label="Postęp">
      <h2 className="section-title">Postęp</h2>
      <p className="mt-2 text-sm text-archive-dim">
        poziom dostępu: <span className="text-archive-success">{completedCount}</span> / {total}
      </p>
      <div className="mt-4 grid grid-cols-5 gap-3" aria-label="Poziom dostępu">
        {Array.from({ length: total }).map((_, index) => (
          <div
            className={`digit-slot ${index < completedCount ? "digit-slot-unlocked" : ""}`}
            key={index}
          >
            <span className="sr-only">Etap {index + 1}</span>
            {index < completedCount ? "✓" : ""}
          </div>
        ))}
      </div>
      <button
        className="mt-5 w-full archive-button"
        disabled={!isCodeReady}
        type="button"
        onClick={onSubmitCode}
      >
        <span aria-hidden="true">▣</span>
        Wyślij kod
      </button>
    </section>
  );
}
