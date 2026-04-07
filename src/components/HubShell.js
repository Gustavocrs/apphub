export function HubShell({ children }) {
  return (
    <div className="flex min-h-full flex-1 flex-col bg-zinc-50 dark:bg-zinc-950">
      <header className="border-b border-[var(--card-border)] bg-[var(--background)] px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            Systech
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl">
            AppHub
          </h1>
          <p className="mt-3 max-w-2xl text-base text-zinc-600 dark:text-zinc-400 sm:text-lg">
            Um único lugar para acessar ferramentas, ambientes e serviços do
            time.
          </p>
        </div>
      </header>
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-10 sm:px-6 lg:px-8">
        {children}
      </main>
      <footer className="border-t border-[var(--card-border)] bg-[var(--background)] px-4 py-6 text-center text-sm text-zinc-500 dark:text-zinc-400 sm:px-6">
        AppHub — links abrem em nova aba.
      </footer>
    </div>
  );
}
