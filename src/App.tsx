import { useRef, useState } from "react";
import { AccessGate } from "./components/AccessGate";
import { AppLayout } from "./components/AppLayout";
import { ExperimentCard } from "./components/ExperimentCard";
import { FinalCodePanel } from "./components/FinalCodePanel";
import { Header } from "./components/Header";
import { PaperNote } from "./components/PaperNote";
import { Sidebar } from "./components/Sidebar";
import { experiments } from "./data/experiments";
import { useArchiveGame } from "./hooks/useArchiveGame";

function getExperimentGridSpan(index: number) {
  return index < 3 ? "2xl:col-span-2" : "2xl:col-span-3";
}

export default function App() {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const finalPanelRef = useRef<HTMLDivElement | null>(null);
  const {
    changeCodeDigit,
    codeDigits,
    codeStatus,
    confirmAnswer,
    completedExperimentCount,
    experimentState,
    selectAnswer,
    submitCode,
    totalExperimentCount,
  } = useArchiveGame();

  const scrollToFinalCode = () => {
    finalPanelRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  if (!isUnlocked) {
    return <AccessGate onUnlock={() => setIsUnlocked(true)} />;
  }

  return (
    <AppLayout
      header={<Header />}
      sidebar={
        <Sidebar
          totalDigits={totalExperimentCount}
          completedCount={completedExperimentCount}
          isCodeReady={completedExperimentCount === totalExperimentCount}
          onSubmitCode={scrollToFinalCode}
        />
      }
    >
      <section
        className="grid gap-4 xl:grid-cols-2 2xl:grid-cols-6"
        id="eksperymenty"
        aria-label="Karty eksperymentów"
      >
        {experiments.map((experiment, index) => (
          <div className={getExperimentGridSpan(index)} key={experiment.id}>
            <ExperimentCard
              experiment={experiment}
              state={experimentState[experiment.id]}
              onConfirm={confirmAnswer}
              onSelect={selectAnswer}
            />
          </div>
        ))}
      </section>

      <div className="mt-4 grid gap-4 2xl:grid-cols-[1fr_420px]">
        <div ref={finalPanelRef}>
          <FinalCodePanel
            codeDigits={codeDigits}
            status={codeStatus}
            onDigitChange={changeCodeDigit}
            onSubmit={submitCode}
          />
        </div>
        <PaperNote compact signature="" title="Ostatni wpis">
          Jeśli dotarłaś aż tutaj, oznacza to, że potrafisz dostrzec więcej niż same wyniki.
          W nauce odpowiedzi bywają cenne. Jednak to pytania prowadzą do odkryć.
        </PaperNote>
      </div>
    </AppLayout>
  );
}
