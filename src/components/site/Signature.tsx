import { useEffect, useState } from "react";
import { Reveal } from "@/components/site/Reveal";
import { doors, timeline } from "@/data/portfolio";

const loaderPills = [
  { label: "Rishabh", bg: "var(--card)" },
  { label: "Full stack development", bg: "var(--pill-blue)" },
  { label: "Freelance web projects", bg: "var(--pill-mauve)" },
];

export function Loader() {
  const [n, setN] = useState(0);
  const [done, setDone] = useState(false);
  useEffect(() => {
    const t = setInterval(() => setN((v) => (v >= 100 ? 100 : v + 4)), 40);
    const d = setTimeout(() => setDone(true), 1400);
    return () => { clearInterval(t); clearTimeout(d); };
  }, []);
  return (
    <div className={`loader ${done ? "done" : ""}`} aria-hidden>
      <div className="flex h-full flex-col items-center justify-center pt-12">
        {loaderPills.map((p, i) => (
          <div key={p.label} className="loader-pill" style={{ background: p.bg, animationDelay: `${i * 0.12}s`, zIndex: i }}>{p.label}</div>
        ))}
      </div>
      <div className="absolute bottom-10 left-8 md:left-12">
        <p className="eyebrow tracking-[0.3em]">Opening up the work</p>
        <p className="font-display text-7xl md:text-9xl">{String(n).padStart(3, "0")}</p>
      </div>
    </div>
  );
}

const roles = ["Full Stack Developer", "Web Developer", "Backend Engineer", "Freelancer"];

export function RoleRotator() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % roles.length), 2200);
    return () => clearInterval(t);
  }, []);
  return (
    <span className="inline-flex items-baseline gap-3">
      <span key={i} className="role-swap text-primary">{roles[i]}</span>
      <span className="font-mono text-xs text-muted-foreground">0{i + 1} / 0{roles.length}</span>
    </span>
  );
}

export function Doors() {
  return (
    <section aria-label="Skills" className="border-b py-24 md:py-32">
      <div className="container-page">
        <Reveal className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow mb-4">My work, one door per skill</p>
            <h2 className="font-display text-5xl md:text-7xl">Magic happens<br /><span className="text-muted-foreground">behind the doors</span></h2>
          </div>
          <p className="text-sm text-muted-foreground">Swipe along the wall →</p>
        </Reveal>
      </div>
      <div className="flex snap-x gap-5 overflow-x-auto px-5 pb-6 md:px-[max(2rem,calc((100vw-76rem)/2+2rem))]">
        {doors.map((d, i) => (
          <a key={d.title} href={d.href} className="door group">
            <div className="flex h-full flex-col justify-end p-8">
              <p className="font-mono text-xs text-primary">0{i + 1}</p>
              <p className="mt-3 text-2xl font-semibold">{d.title}</p>
              <p className="mt-2 text-sm text-muted-foreground">{d.body}</p>
            </div>
            <div className="door-panel">
              <span className="door-knob" />
              <p className="absolute left-7 top-7 text-lg font-medium">{d.title}</p>
              <p className="absolute bottom-7 left-7 font-mono text-xs text-muted-foreground">Hover to open</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export function Timeline() {
  return (
    <section id="experience-story" className="border-b py-24 md:py-32">
      <div className="container-page grid gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-4">
          <p className="eyebrow mb-4">My story</p>
          <h2 className="font-display text-5xl md:text-6xl">Let's go back in time.</h2>
        </Reveal>
        <ol className="relative border-l lg:col-span-8">
          {timeline.map((t, i) => (
            <Reveal key={t.title} delay={i * 0.05} className="relative pb-12 pl-8 last:pb-0">
              <li className="list-none">
                <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-primary" />
                <p className="font-mono text-xs text-muted-foreground">{t.when} · 0{i + 1}/0{timeline.length}</p>
                <h3 className="mt-2 text-2xl font-semibold">{t.title}</h3>
                <p className="text-sm text-primary">{t.where}</p>
                <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">{t.points.map((p) => <li key={p}>— {p}</li>)}</ul>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
