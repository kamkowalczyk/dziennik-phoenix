export type ExperimentImageId =
  | "kmno4"
  | "tollens"
  | "trommer"
  | "polyhydricAlcohols"
  | "liquidNitrogen";

export type ExperimentVisual = {
  alt: string;
  imageId: ExperimentImageId;
  labels?: string[];
};

export type ExperimentOption = {
  value: string;
  label: string;
};

export type ExperimentConfig = {
  id: string;
  number: string;
  title: string;
  description: string;
  question: string;
  type: "select" | "structure" | "radio";
  options: ExperimentOption[];
  correctAnswer: string;
  unlockedDigit?: string;
  isKeyExperiment: boolean;
  visual: ExperimentVisual;
};

export type FeedbackState = "idle" | "correct" | "wrong";
export type CodeStatus = "idle" | "success" | "error";

export type ExperimentState = {
  selectedAnswer: string;
  feedback: FeedbackState;
  solved: boolean;
};

export type ExperimentStateMap = Record<string, ExperimentState>;
