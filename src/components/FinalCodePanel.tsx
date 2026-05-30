import { useRef, type ChangeEvent, type KeyboardEvent } from "react";
import { revealedAccessCode } from "../data/experiments";
import type { CodeStatus } from "../types";

type FinalCodePanelProps = {
  codeDigits: string[];
  status: CodeStatus;
  onDigitChange: (index: number, value: string) => void;
  onSubmit: () => void;
};

export function FinalCodePanel({ codeDigits, status, onDigitChange, onSubmit }: FinalCodePanelProps) {
  const inputsRef = useRef<Array<HTMLInputElement | null>>([]);

  const handleChange = (index: number, event: ChangeEvent<HTMLInputElement>) => {
    const digit = event.target.value.replace(/\D/g, "").slice(-1);
    onDigitChange(index, digit);

    if (digit && index < codeDigits.length - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Backspace" && !codeDigits[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }

    if (event.key === "Enter") {
      onSubmit();
    }
  };

  return (
    <section className="final-panel" id="kod-eksperymentu" aria-labelledby="final-code-heading">
      <div>
        <h2 className="section-title text-lg" id="final-code-heading">
          Kod eksperymentu
        </h2>
        <p className="mt-2 text-sm leading-6 text-archive-paper">
          Po prawidłowym odtworzeniu wszystkich pięciu danych, wpisz 5-cyfrowy kod eksperymentu.
        </p>
      </div>

      <div className="mt-4 grid gap-4 2xl:grid-cols-[auto_1fr] 2xl:items-end">
        <div className="flex flex-wrap gap-3" role="group" aria-label="Pięciocyfrowy kod eksperymentu">
          {codeDigits.map((digit, index) => (
            <label className="block" key={index}>
              <span className="sr-only">Cyfra kodu {index + 1}</span>
              <input
                ref={(element) => {
                  inputsRef.current[index] = element;
                }}
                aria-label={`Cyfra kodu ${index + 1}`}
                className="code-input"
                inputMode="numeric"
                maxLength={1}
                pattern="[0-9]*"
                value={digit}
                onChange={(event) => handleChange(index, event)}
                onKeyDown={(event) => handleKeyDown(index, event)}
              />
            </label>
          ))}
        </div>
        <button className="archive-button h-12 w-full xl:max-w-xs" type="button" onClick={onSubmit}>
          Zatwierdź kod
        </button>
      </div>

      {status === "success" ? (
        <div className="mt-4 access-message access-granted" role="status">
          <p className="font-display text-lg uppercase tracking-[0.14em]">
            Kod dostępu 4-cyfrowy
          </p>
          <p className="mt-1 text-sm text-archive-paper">do dalszej części</p>
          <p className="mt-2 font-display text-4xl tracking-[0.24em] text-archive-success">
            {revealedAccessCode}
          </p>
        </div>
      ) : null}

      {status === "error" ? (
        <div className="mt-4 access-message access-denied" role="alert">
          <p className="font-display text-lg uppercase tracking-[0.14em]">Kod nieprawidłowy</p>
          <p>Sprawdź odtworzone dane eksperymentalne.</p>
        </div>
      ) : null}
    </section>
  );
}
