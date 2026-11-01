import { ArrowUpRight, Github } from "lucide-react";
import type { Project } from "@/data/portfolio";
import { Badge, Reveal } from "./Reveal";

export function FeaturedProject({ p, index }: { p: Project; index: number }) {
  const flip = index % 2 === 1;
  const primary = p.live ?? p.github;
  return (
    <Reveal>
      <article className="group grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
        <a href={primary} target="_blank" rel="noreferrer" className={`relative block overflow-hidden rounded-2xl border bg-surface p-2 lg:col-span-7 ${flip ? "lg:order-2" : ""}`}>
          <div className="overflow-hidden rounded-xl">
            <img src={p.image} alt={`${p.name} screenshot`} loading="lazy" width={1440} height={900} className="aspect-[16/10] w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.035]" />
          </div>
        </a>
        <div className="lg:col-span-5">
          <p className="eyebrow mb-3"><span className="text-primary">0{index + 1}</span> · {p.category}</p>
          <h3 className="font-display text-4xl md:text-5xl">{p.name}</h3>
          <p className="mt-2 text-sm text-primary/90">{p.tagline}</p>
          <p className="mt-5 leading-relaxed text-muted-foreground">{p.description}</p>
          {p.features && (
            <ul className="mt-5 grid grid-cols-1 gap-x-4 gap-y-1.5 text-sm text-secondary-foreground sm:grid-cols-2">
              {p.features.map((f) => <li key={f} className="flex gap-2"><span className="text-primary">—</span>{f}</li>)}
            </ul>
          )}
          <div className="mt-6 flex flex-wrap gap-2">{p.tech.map((t) => <Badge key={t}>{t}</Badge>)}</div>
          <div className="mt-7 flex flex-wrap gap-3">
            {p.live && <a href={p.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5">Live Demo <ArrowUpRight className="h-4 w-4" /></a>}
            {p.github && <a href={p.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm transition-colors hover:border-primary hover:text-primary"><Github className="h-4 w-4" /> GitHub</a>}
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export function ArchiveCard({ p }: { p: Project }) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
      <div className="flex items-start justify-between gap-4">
        <span className="eyebrow">{p.category}</span>
        <div className="flex gap-1">
          {p.github && <a href={p.github} target="_blank" rel="noreferrer" aria-label={`${p.name} on GitHub`} className="rounded-full p-1.5 text-muted-foreground hover:text-foreground"><Github className="h-4 w-4" /></a>}
          {p.live && <a href={p.live} target="_blank" rel="noreferrer" aria-label={`${p.name} live demo`} className="rounded-full p-1.5 text-muted-foreground hover:text-primary"><ArrowUpRight className="h-4 w-4" /></a>}
        </div>
      </div>
      <h3 className="mt-5 font-display text-3xl">{p.name}</h3>
      <p className="mt-1 text-sm text-primary/90">{p.tagline}</p>
      <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
      <div className="mt-6 flex flex-wrap gap-2">{p.tech.map((t) => <Badge key={t}>{t}</Badge>)}</div>
    </article>
  );
}
