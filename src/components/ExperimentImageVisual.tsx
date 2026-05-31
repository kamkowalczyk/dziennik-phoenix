import kmno4Image from "../assets/experiments/sample_01.png";
import tollensImage from "../assets/experiments/sample_02.png";
import trommerImage from "../assets/experiments/sample_03.png";
import structuresImage from "../assets/experiments/sample_04.png";
import nitrogenImage from "../assets/experiments/sample_05.png";
import type { ExperimentVisual } from "../types";

const experimentImages: Record<ExperimentVisual["imageId"], string> = {
  kmno4: kmno4Image,
  tollens: tollensImage,
  trommer: trommerImage,
  polyhydricAlcohols: structuresImage,
  liquidNitrogen: nitrogenImage,
};

type ExperimentImageVisualProps = {
  visual: ExperimentVisual;
};

export function ExperimentImageVisual({ visual }: ExperimentImageVisualProps) {
  return (
    <figure className={`experiment-image-frame experiment-image-${visual.imageId}`}>
      <div className="experiment-image-media">
        <img className="experiment-image" src={experimentImages[visual.imageId]} alt={visual.alt} />
      </div>
      {visual.labels ? (
        <figcaption className="experiment-image-labels">
          {visual.labels.map((label) => (
            <span key={label}>{label}</span>
          ))}
        </figcaption>
      ) : null}
    </figure>
  );
}
