import type { ExperimentConfig } from "../types";

export const revealedAccessCode = "2357";

export const experiments: ExperimentConfig[] = [
  {
    id: "kmno4-ph",
    number: "01",
    title: "KMnO4 / pH",
    description: "Badanie właściwości manganianu(VII) potasu - wpływ pH środowiska.",
    question: "W której probówce obserwujemy wpływ 1M NaOH na KMnO4?",
    type: "select",
    options: [
      { value: "1", label: "Probówka 1" },
      { value: "2", label: "Probówka 2" },
      { value: "3", label: "Probówka 3" },
    ],
    correctAnswer: "2",
    unlockedDigit: "2",
    isKeyExperiment: true,
    visual: {
      imageId: "kmno4",
      alt: "Probówki z manganianem(VII) potasu w różnych środowiskach reakcji.",
    },
  },
  {
    id: "tollens",
    number: "02",
    title: "Próba Tollensa",
    description: "Wykrywanie aldehydów za pomocą odczynnika Tollensa.",
    question: "Która probówka dała wynik pozytywny?",
    type: "select",
    options: [
      { value: "1", label: "Probówka 1" },
      { value: "2", label: "Probówka 2" },
      { value: "3", label: "Probówka 3" },
    ],
    correctAnswer: "2",
    unlockedDigit: "2",
    isKeyExperiment: true,
    visual: {
      imageId: "tollens",
      alt: "Trzy probówki próby Tollensa, środkowa z efektem srebrnego lustra.",
    },
  },
  {
    id: "trommer",
    number: "03",
    title: "Próba Trommera",
    description: "Wykrywanie aldehydów i cukrów redukujących.",
    question: "Która probówka dała wynik pozytywny?",
    type: "select",
    options: [
      { value: "1", label: "Probówka 1" },
      { value: "2", label: "Probówka 2" },
      { value: "3", label: "Probówka 3" },
    ],
    correctAnswer: "3",
    unlockedDigit: "3",
    isKeyExperiment: true,
    visual: {
      imageId: "trommer",
      alt: "Trzy probówki próby Trommera: niebieska, żółta i ceglastoczerwona.",
    },
  },
  {
    id: "polyhydric-alcohols",
    number: "04",
    title: "Alkohole polihydroksylowe",
    description:
      "Który z przedstawionych wzorów półstrukturalnych przedstawia alkohol polihydroksylowy?",
    question: "Wybierz poprawną strukturę.",
    type: "structure",
    options: [
      { value: "1", label: "Struktura 1" },
      { value: "2", label: "Struktura 2" },
      { value: "3", label: "Struktura 3" },
      { value: "4", label: "Struktura 4" },
    ],
    correctAnswer: "1",
    unlockedDigit: "1",
    isKeyExperiment: true,
    visual: {
      imageId: "polyhydricAlcohols",
      alt: "Cztery karty ze wzorami półstrukturalnymi alkoholi.",
    },
  },
  {
    id: "liquid-nitrogen",
    number: "05",
    title: "Ciekły azot",
    description: "Podczas eksperymentu temperatura próbki gwałtownie spada do -196°C.",
    question: "Który odczynnik został użyty do schłodzenia probówki?",
    type: "radio",
    options: [
      { value: "1", label: "1: suchy lód" },
      { value: "2", label: "2: lód wodny" },
      { value: "3", label: "3: ciekły azot" },
    ],
    correctAnswer: "3",
    unlockedDigit: "3",
    isKeyExperiment: true,
    visual: {
      imageId: "liquidNitrogen",
      alt: "Zlewka w zimnej mgle i kartka z temperaturą końcową -196°C.",
    },
  },
];

export const finalAccessCode = experiments
  .filter((experiment) => experiment.isKeyExperiment)
  .map((experiment) => experiment.unlockedDigit)
  .join("");
