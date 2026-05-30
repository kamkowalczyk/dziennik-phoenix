import type { ReactNode } from "react";

type PaperNoteProps = {
  children?: ReactNode;
  compact?: boolean;
  signature?: string;
  title?: string;
};

export function PaperNote({
  children,
  compact = false,
  signature = "- 713",
  title = "Notatka badacza",
}: PaperNoteProps) {
  return (
    <article className={`paper-note ${compact ? "paper-note-compact" : ""}`}>
      <span className="paper-clip" aria-hidden="true" />
      <h2 className="font-display text-sm uppercase tracking-[0.08em] text-[#1d1a13]">
        {title}
      </h2>
      <p>{children}</p>
      <p className="mt-3 text-right font-display text-lg">{signature}</p>
    </article>
  );
}
