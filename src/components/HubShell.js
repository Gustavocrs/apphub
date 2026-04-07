export function HubShell({ children }) {
  const year = new Date().getFullYear();

  return (
    <div className="flex min-h-full flex-1 flex-col bg-[var(--background)]">
      <header className="border-b border-[var(--card-border)] px-4 py-5 sm:px-6 lg:px-8">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4">
          <a href="/" className="inline-flex items-center gap-3">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--primary-100)] text-sm font-semibold text-[var(--primary-700)]">
              AH
            </span>
            <span className="font-semibold text-sm text-[var(--foreground)] sm:text-base">
              AppHub
            </span>
          </a>
          <nav
            aria-label="Navegacao principal"
            className="flex items-center gap-4 text-sm text-[var(--neutral-600)]"
          >
            <a
              className="transition-colors hover:text-[var(--primary-500)]"
              href="#projetos"
            >
              Projetos
            </a>
            <a
              className="transition-colors hover:text-[var(--primary-500)]"
              href="#sobre"
            >
              Sobre
            </a>
            <a
              className="transition-colors hover:text-[var(--primary-500)]"
              href="#contato"
            >
              Contato
            </a>
          </nav>
        </div>
      </header>
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-10 sm:px-6 lg:px-8">
        <section className="mb-12 rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] px-6 py-8 shadow-sm sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--primary-500)]">
            Portfolio tecnico
          </p>
          <h1 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-5xl">
            Projetos de valor que automatizam rotinas e geram resultados.
          </h1>
          <p className="mt-4 max-w-2xl text-base text-[var(--neutral-600)] sm:text-lg">
            O AppHub organiza produtos e plataformas com impacto real no fluxo
            tecnico da equipe.
          </p>
        </section>
        {children}
        <section
          id="sobre"
          className="mt-12 rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] px-6 py-7 sm:px-8"
        >
          <h2 className="text-2xl font-semibold text-[var(--foreground)]">
            Sobre
          </h2>
          <p className="mt-3 text-[var(--neutral-600)]">
            Centralizamos o portfolio para acelerar descoberta de ferramentas,
            reduzir contexto perdido e padronizar acessos entre times tecnicos.
          </p>
        </section>
        <section
          id="contato"
          className="mt-6 rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] px-6 py-7 sm:px-8"
        >
          <h2 className="text-2xl font-semibold text-[var(--foreground)]">
            Contato
          </h2>
          <p className="mt-3 text-[var(--neutral-600)]">
            Quer incluir um novo projeto no hub? Fale com a equipe Systech e
            compartilhe objetivo, stack e responsavel tecnico.
          </p>
        </section>
      </main>
      <footer className="border-t border-[var(--card-border)] px-4 py-6 text-center text-sm text-[var(--neutral-500)] sm:px-6">
        {year} AppHub - portfolio tecnico da Systech. Links abrem em nova aba.
      </footer>
    </div>
  );
}
