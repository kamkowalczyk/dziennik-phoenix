import { useState, type FormEvent } from "react";

type AccessGateProps = {
  onUnlock: () => void;
};

const accessPassword = "ORBITAL";

export function AccessGate({ onUnlock }: AccessGateProps) {
  const [password, setPassword] = useState("");
  const [hasError, setHasError] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (password.trim().toUpperCase() === accessPassword) {
      onUnlock();
      return;
    }

    setHasError(true);
  };

  return (
    <main className="min-h-screen bg-archive-ink text-archive-moss">
      <div className="fixed inset-0 -z-10 bg-archive-grid" aria-hidden="true" />
      <div className="fixed inset-0 -z-10 bg-archive-vignette" aria-hidden="true" />
      <section className="mx-auto flex min-h-screen max-w-2xl items-center px-5 py-12">
        <form className="access-gate" onSubmit={handleSubmit}>
          <div className="mb-7 flex items-center gap-4">
            <div className="access-gate-mark" aria-hidden="true">
              713
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-archive-dim">
                Dziennik zabezpieczony
              </p>
              <h1 className="mt-2 font-display text-3xl uppercase tracking-[0.1em] text-archive-moss">
                Projekt PHOENIX
              </h1>
            </div>
          </div>

          <label className="block" htmlFor="archive-password">
            <span className="section-title">Hasło dostępu do strony</span>
            <input
              autoComplete="off"
              className="archive-input mt-3"
              id="archive-password"
              type="password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
                setHasError(false);
              }}
            />
          </label>

          {hasError ? (
            <p className="mt-3 feedback feedback-wrong" role="alert">
              Dostęp odrzucony. Sprawdź hasło i spróbuj ponownie.
            </p>
          ) : null}

          <button className="archive-button mt-5 w-full" type="submit">
            Otwórz dziennik
          </button>
        </form>
      </section>
    </main>
  );
}
