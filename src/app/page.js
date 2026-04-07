import { AppCard } from "@/components/AppCard";
import { HubShell } from "@/components/HubShell";
import { apps } from "@/data/apps";

function sortApps(list) {
  return [...list].sort((a, b) => {
    if (a.featured !== b.featured) return b.featured ? 1 : -1;
    return a.name.localeCompare(b.name, "pt-BR");
  });
}

export default function Home() {
  const ordered = sortApps(apps);

  return (
    <HubShell>
      <section id="projetos" aria-labelledby="projetos-title">
        <div className="mb-5 flex items-end justify-between gap-4">
          <h2
            id="projetos-title"
            className="text-2xl font-semibold text-[var(--foreground)]"
          >
            Projetos em destaque
          </h2>
          <p className="text-sm text-[var(--neutral-500)]">
            {ordered.length} projetos publicados
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {ordered.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
      </section>
    </HubShell>
  );
}
