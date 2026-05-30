import { useState } from "react";
import { StatusPanel } from "./StatusPanel";

const navItems = ["Eksperymenty", "Notatki", "Pliki", "Ustawienia"];

export function Header() {
  const [destroyedSection, setDestroyedSection] = useState<string | null>(null);

  return (
    <header className="archive-panel flex flex-col gap-4 px-4 py-4 sm:px-6 xl:flex-row xl:items-center xl:justify-between">
      <div>
        <nav aria-label="Główna nawigacja">
          <ul className="flex flex-wrap gap-2 sm:gap-4">
            {navItems.map((item, index) => (
              <li key={item}>
                {index === 0 ? (
                  <a className="nav-link nav-link-active" href="#eksperymenty">
                    {item}
                  </a>
                ) : (
                  <button className="nav-link" type="button" onClick={() => setDestroyedSection(item)}>
                    {item}
                  </button>
                )}
              </li>
            ))}
          </ul>
        </nav>
        {destroyedSection ? (
          <p className="destroyed-data-note" role="status">
            {destroyedSection}: dane uległy zniszczeniu.
          </p>
        ) : null}
      </div>
      <StatusPanel />
    </header>
  );
}
