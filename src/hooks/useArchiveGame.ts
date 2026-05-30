import { useMemo, useState } from "react";
import { experiments, finalAccessCode } from "../data/experiments";
import type { CodeStatus, ExperimentConfig, ExperimentStateMap } from "../types";

export const keyExperiments = experiments.filter((experiment) => experiment.isKeyExperiment);

function createInitialExperimentState(): ExperimentStateMap {
  return experiments.reduce<ExperimentStateMap>((state, experiment) => {
    state[experiment.id] = {
      selectedAnswer: "",
      feedback: "idle",
      solved: false,
    };

    return state;
  }, {});
}

export function useArchiveGame() {
  const [experimentState, setExperimentState] = useState<ExperimentStateMap>(
    createInitialExperimentState,
  );
  const [codeDigits, setCodeDigits] = useState<string[]>(() =>
    Array.from({ length: finalAccessCode.length }, () => ""),
  );
  const [codeStatus, setCodeStatus] = useState<CodeStatus>("idle");

  const unlockedDigits = useMemo(
    () =>
      keyExperiments
        .filter((experiment) => experimentState[experiment.id]?.solved)
        .map((experiment) => experiment.unlockedDigit)
        .filter((digit): digit is string => Boolean(digit)),
    [experimentState],
  );

  const completedExperimentCount = useMemo(
    () => experiments.filter((experiment) => experimentState[experiment.id]?.solved).length,
    [experimentState],
  );

  const selectAnswer = (experimentId: string, value: string) => {
    setExperimentState((current) => ({
      ...current,
      [experimentId]: {
        ...current[experimentId],
        selectedAnswer: value,
        feedback: "idle",
      },
    }));
  };

  const confirmAnswer = (experiment: ExperimentConfig) => {
    setExperimentState((current) => {
      const currentState = current[experiment.id];
      const isCorrect = currentState.selectedAnswer === experiment.correctAnswer;

      return {
        ...current,
        [experiment.id]: {
          ...currentState,
          feedback: isCorrect ? "correct" : "wrong",
          solved: currentState.solved || isCorrect,
        },
      };
    });
  };

  const changeCodeDigit = (index: number, value: string) => {
    setCodeDigits((current) =>
      current.map((digit, digitIndex) => (digitIndex === index ? value : digit)),
    );
    setCodeStatus("idle");
  };

  const submitCode = () => {
    setCodeStatus(codeDigits.join("") === finalAccessCode ? "success" : "error");
  };

  return {
    changeCodeDigit,
    codeDigits,
    codeStatus,
    completedExperimentCount,
    confirmAnswer,
    experimentState,
    keyExperimentCount: keyExperiments.length,
    selectAnswer,
    submitCode,
    totalExperimentCount: experiments.length,
    unlockedDigits,
  };
}
