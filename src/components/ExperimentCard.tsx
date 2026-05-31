import type { ExperimentConfig, ExperimentState } from "../types";
import { ExperimentImageVisual } from "./ExperimentImageVisual";

type ExperimentCardProps = {
  experiment: ExperimentConfig;
  state: ExperimentState;
  onSelect: (experimentId: string, value: string) => void;
  onConfirm: (experiment: ExperimentConfig) => void;
};

type ConfirmButtonProps = {
  disabled: boolean;
  label: string;
  onClick: () => void;
};

export function ExperimentCard({ experiment, state, onSelect, onConfirm }: ExperimentCardProps) {
  const isSolved = state.solved;
  const inputId = `${experiment.id}-answer`;
  const confirmLabel = `Zatwierdź odpowiedź: ${experiment.title}`;

  return (
    <article
      className={`experiment-card ${isSolved ? "experiment-card-solved" : ""}`}
      id={experiment.id}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="font-display text-xl tracking-[0.08em] text-archive-moss">
            {experiment.number}. {experiment.title}
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-archive-paper">
            {experiment.description}
          </p>
        </div>
        <span className="damage-label">Dane uszkodzone</span>
      </div>

      <div className="mt-4">
        <ExperimentImageVisual visual={experiment.visual} />
      </div>

      <div className="mt-5">
        <p className="text-sm leading-6 text-archive-paper">
          <span className="text-archive-moss">Pytanie:</span> {experiment.question}
        </p>

        {experiment.type === "select" ? (
          <div className="mt-3 grid gap-3 sm:grid-cols-[1fr_auto]">
            <label className="sr-only" htmlFor={inputId}>
              {experiment.question}
            </label>
            <select
              className="archive-select"
              disabled={isSolved}
              id={inputId}
              value={state.selectedAnswer}
              onChange={(event) => onSelect(experiment.id, event.target.value)}
            >
              <option value="">wybierz próbkę</option>
              {experiment.options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <ConfirmButton
              disabled={!state.selectedAnswer || isSolved}
              label={confirmLabel}
              onClick={() => onConfirm(experiment)}
            />
          </div>
        ) : null}

        {experiment.type === "radio" ? (
          <div className="mt-3 grid gap-3 md:grid-cols-[1fr_auto]">
            <RadioOptions
              experiment={experiment}
              isSolved={isSolved}
              selectedAnswer={state.selectedAnswer}
              onSelect={onSelect}
            />
            <div className="self-end">
              <ConfirmButton
                disabled={!state.selectedAnswer || isSolved}
                label={confirmLabel}
                onClick={() => onConfirm(experiment)}
              />
            </div>
          </div>
        ) : null}

        {experiment.type === "structure" ? (
          <>
            <RadioOptions
              experiment={experiment}
              isSolved={isSolved}
              selectedAnswer={state.selectedAnswer}
              variant="compact"
              onSelect={onSelect}
            />
            <div className="mt-4 flex justify-end">
              <ConfirmButton
                disabled={!state.selectedAnswer || isSolved}
                label={confirmLabel}
                onClick={() => onConfirm(experiment)}
              />
            </div>
          </>
        ) : null}

        <Feedback experiment={experiment} state={state} />
      </div>
    </article>
  );
}

function RadioOptions({
  experiment,
  isSolved,
  selectedAnswer,
  variant = "stacked",
  onSelect,
}: {
  experiment: ExperimentConfig;
  isSolved: boolean;
  selectedAnswer: string;
  variant?: "stacked" | "compact";
  onSelect: (experimentId: string, value: string) => void;
}) {
  return (
    <fieldset className={variant === "compact" ? "structure-answer-grid" : "space-y-2"}>
      <legend className="sr-only">{experiment.question}</legend>
      {experiment.options.map((option) => (
        <label
          className={variant === "compact" ? "structure-answer-option" : "radio-row"}
          key={option.value}
        >
          <input
            checked={selectedAnswer === option.value}
            disabled={isSolved}
            name={experiment.id}
            type="radio"
            value={option.value}
            onChange={() => onSelect(experiment.id, option.value)}
          />
          <span>{option.label}</span>
        </label>
      ))}
    </fieldset>
  );
}

function ConfirmButton({ disabled, label, onClick }: ConfirmButtonProps) {
  return (
    <button
      aria-label={label}
      className="archive-button min-w-36"
      disabled={disabled}
      type="button"
      onClick={onClick}
    >
      Zatwierdź
    </button>
  );
}

function Feedback({ experiment, state }: { experiment: ExperimentConfig; state: ExperimentState }) {
  if (state.feedback === "idle") {
    return null;
  }

  if (state.feedback === "correct") {
    return (
      <p className="mt-3 feedback feedback-correct" role="status">
        Dane odtworzone
        {experiment.unlockedDigit ? (
          <>
            . Odblokowana cyfra: <span>{experiment.unlockedDigit}</span>
          </>
        ) : (
          ". Kontrola wiedzy zaliczona."
        )}
      </p>
    );
  }

  return (
    <p className="mt-3 feedback feedback-wrong" role="alert">
      Wynik niezgodny z dziennikiem laboratoryjnym. Spróbuj ponownie.
    </p>
  );
}
