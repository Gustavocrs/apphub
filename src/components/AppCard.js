import Image from "next/image";

export function AppCard({ app }) {
  const { name, description, url, category, iconSrc, featured } = app;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col rounded-xl border border-[var(--card-border)] bg-[var(--card-bg)] p-5 shadow-sm transition-[border-color,box-shadow,transform] hover:border-[var(--card-border-hover)] hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ring)] active:scale-[0.99] md:p-6"
    >
      {featured
        ? <span className="absolute right-4 top-4 rounded-full bg-[var(--badge-bg)] px-2 py-0.5 text-xs font-medium text-[var(--badge-fg)]">
            Destaque
          </span>
        : null}
      <div className="mb-3 flex items-start gap-3">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-[var(--icon-bg)] p-1.5">
          <Image
            src={iconSrc}
            alt={`Icone do projeto ${name}`}
            width={44}
            height={44}
            className="h-full w-full object-contain"
            unoptimized
          />
        </span>
        <div className="min-w-0 flex-1 pt-0.5">
          <p className="text-xs font-medium uppercase tracking-wide text-[var(--neutral-500)]">
            {category}
          </p>
          <h3 className="mt-1 font-semibold text-lg text-[var(--foreground)] group-hover:text-[var(--primary-600)]">
            {name}
          </h3>
        </div>
      </div>
      <p className="text-sm leading-relaxed text-[var(--neutral-600)]">
        {description}
      </p>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[var(--primary-600)]">
        Abrir
        <span
          aria-hidden
          className="transition-transform group-hover:translate-x-0.5"
        >
          →
        </span>
      </span>
    </a>
  );
}
