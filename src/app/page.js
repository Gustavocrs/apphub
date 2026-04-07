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
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {ordered.map((app) => (
          <AppCard key={app.id} app={app} />
        ))}
      </div>
    </HubShell>
  );
}
