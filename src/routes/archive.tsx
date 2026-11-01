import { createFileRoute } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import { projects } from "@/data/portfolio";
import { ArchiveCard } from "@/components/site/ProjectCard";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/archive")({
  head: () => ({
    meta: [
      { title: "Project Archive — Rishabh" },
      { name: "description", content: "Every project Rishabh has built: full stack apps, e-commerce, DevOps pipelines and frontend experiments." },
      { property: "og:title", content: "Project Archive — Rishabh" },
      { property: "og:description", content: "Searchable archive of full stack, e-commerce and DevOps projects by Rishabh." },
    ],
  }),
  component: Archive,
});

function Archive() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("All");
  const [tech, setTech] = useState("All");
  const cats = ["All", ...new Set(projects.map((p) => p.category))];
  const techs = ["All", ...[...new Set(projects.flatMap((p) => p.tech))].sort()];

  const list = useMemo(() => {
    const s = q.toLowerCase().trim();
    return projects.filter(
      (p) =>
        (cat === "All" || p.category === cat) &&
        (tech === "All" || p.tech.includes(tech)) &&
        (!s || [p.name, p.tagline, p.description, ...p.tech].join(" ").toLowerCase().includes(s)),
    );
  }, [q, cat, tech]);

  const chip = (active: boolean) =>
    `rounded-full border px-4 py-1.5 text-sm transition-colors ${active ? "border-primary bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`;

  return (
    <main className="grain-bg pt-32 pb-24">
      <div className="container-page">
        <Reveal>
          <p className="eyebrow mb-4"><span className="text-primary">Archive</span> — {projects.length} projects</p>
          <h1 className="font-display text-5xl leading-[1.02] md:text-7xl">Everything I've built.</h1>
          <p className="mt-5 max-w-xl text-muted-foreground">From production platforms to pipelines and experiments — search by name or filter by category and technology.</p>
        </Reveal>

        <div className="mt-12 flex flex-col gap-5">
          <div className="relative max-w-md">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search projects…" aria-label="Search projects" className="w-full rounded-full border bg-surface py-3 pl-11 pr-4 text-sm outline-none focus:border-primary" />
          </div>
          <div className="flex flex-wrap gap-2">{cats.map((c) => <button key={c} onClick={() => setCat(c)} className={chip(cat === c)}>{c}</button>)}</div>
          <label className="flex items-center gap-3 text-sm text-muted-foreground">
            Technology
            <select value={tech} onChange={(e) => setTech(e.target.value)} className="rounded-full border bg-surface px-4 py-1.5 text-sm text-foreground outline-none focus:border-primary">
              {techs.map((t) => <option key={t}>{t}</option>)}
            </select>
          </label>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {list.map((p) => <ArchiveCard key={p.slug} p={p} />)}
        </div>
        {list.length === 0 && <p className="mt-12 text-muted-foreground">No projects match those filters.</p>}
      </div>
    </main>
  );
}
