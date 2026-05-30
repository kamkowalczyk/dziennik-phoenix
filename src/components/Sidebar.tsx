import { experiments } from "../data/experiments";
import { PaperNote } from "./PaperNote";
import { ProgressPanel } from "./ProgressPanel";

type SidebarProps = {
  completedCount: number;
  isCodeReady: boolean;
  totalDigits: number;
  onSubmitCode: () => void;
};

export function Sidebar({ completedCount, isCodeReady, totalDigits, onSubmitCode }: SidebarProps) {
  return (
    <div className="archive-panel flex h-full flex-col gap-5 p-5">
      <div className="flex items-start gap-3 border-b border-archive-line/70 pb-5">
        <ArchiveLogo />
        <div className="min-w-0">
          <h1 className="sidebar-title">Dziennik Profesora Alchemicusa</h1>
          <p className="sidebar-subtitle">Projekt PHOENIX</p>
        </div>
      </div>

      <PaperNote title="Notatka badacza" signature="- A.">
        Jesteś coraz bliżej... W moich badaniach nigdy nie ufałem gotowym odpowiedziom.
        Prawda ukrywa się w obserwacji. Patrz uważnie... Analizuj... Wyciągaj wnioski...
      </PaperNote>

      <section className="archive-panel p-4" aria-label="Lista eksperymentów">
        <h2 className="section-title">Lista eksperymentów</h2>
        <ol className="mt-4 space-y-3 text-sm">
          {experiments.map((experiment) => (
            <li key={experiment.id}>
              <a className="experiment-link" href={`#${experiment.id}`}>
                {experiment.number}. {experiment.title}
              </a>
            </li>
          ))}
        </ol>
      </section>

      <ProgressPanel
        total={totalDigits}
        completedCount={completedCount}
        isCodeReady={isCodeReady}
        onSubmitCode={onSubmitCode}
      />
    </div>
  );
}

function ArchiveLogo() {
  return (
    <svg
      aria-hidden="true"
      className="mt-1 h-12 w-12 shrink-0 text-archive-dim"
      fill="none"
      viewBox="0 0 80 80"
    >
      <g stroke="currentColor" strokeWidth="2">
        <path d="M22 9 34 15v14l-12 7-12-7V15z" />
        <path d="M52 7 65 14v15l-13 7-13-7V14z" />
        <path d="M39 36 52 43v15l-13 7-13-7V43z" />
        <path d="M15 45 28 52v15l-13 7-13-7V52z" />
        <path d="M58 45 71 52v15l-13 7-13-7V52z" />
        <path d="m34 24 8-2M28 52l8-8M50 52h-8M23 36l7 9" />
      </g>
    </svg>
  );
}
