import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Award, Download, Github, GraduationCap, Linkedin, Mail, MapPin } from "lucide-react";
import { achievements, certificates, profile, projects, services, skills } from "@/data/portfolio";
import { Badge, Reveal, SectionHead } from "@/components/site/Reveal";
import { FeaturedProject } from "@/components/site/ProjectCard";
import { ContactForm } from "@/components/site/ContactForm";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rishabh — Full Stack Developer & Freelance Web Developer" },
      { name: "description", content: "Rishabh is a Full Stack Developer from India building modern web apps, scalable backends and e-commerce platforms. Open to freelance projects." },
      { property: "og:title", content: "Rishabh — Full Stack Developer" },
      { property: "og:description", content: "Turning ideas into digital experiences through code. Selected work, skills and freelance services." },
    ],
  }),
  component: Index,
});

const btnPrimary = "group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5";
const btnGhost = "inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm transition-colors hover:border-primary hover:text-primary";

function Hero() {
  const reduce = useReducedMotion();
  const words = "Turning Ideas Into Digital Experiences Through Code.".split(" ");
  return (
    <section id="home" className="grain-bg relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="container-page grid items-center gap-14 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <Reveal>
            <div className="mb-8 flex flex-wrap items-center gap-3 text-sm">
              <span className="inline-flex items-center gap-2 rounded-full border bg-surface px-3 py-1.5">
                <span className="pulse-dot h-2 w-2 rounded-full bg-success" /> Available for freelance
              </span>
              <span className="inline-flex items-center gap-1.5 text-muted-foreground"><MapPin className="h-3.5 w-3.5" /> {profile.location}</span>
            </div>
          </Reveal>
          <h1 className="font-display text-[3.2rem] leading-[0.98] tracking-tight sm:text-7xl lg:text-[5.6rem]">
            {words.map((w, i) => (
              <motion.span
                key={i}
                className={`mr-[0.22em] inline-block ${w === "Digital" || w === "Experiences" ? "italic text-primary" : ""}`}
                initial={reduce ? false : { opacity: 0, y: 30, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.7, delay: 0.1 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              >
                {w}
              </motion.span>
            ))}
          </h1>
          <Reveal delay={0.5}>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
              I'm Rishabh, a Full Stack Developer building modern web applications, scalable backend systems, and meaningful digital products.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href="#work" className={btnPrimary}>View My Work <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></a>
              <a href={profile.resume} target="_blank" rel="noreferrer" className={btnGhost}><Download className="h-4 w-4" /> Resume</a>
              <a href="#contact" className={btnGhost}>Contact Me</a>
            </div>
            <div className="mt-10 flex items-center gap-5 text-sm text-muted-foreground">
              <a href={profile.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-foreground"><Github className="h-4 w-4" /> rishabh-ydv23</a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-foreground"><Linkedin className="h-4 w-4" /> LinkedIn</a>
            </div>
          </Reveal>
        </div>
        <Reveal delay={0.35} className="lg:col-span-5">
          <CodeVisual />
        </Reveal>
      </div>
    </section>
  );
}

function CodeVisual() {
  const lines: [string, string][] = [
    ["kw", "const"], ["", " rishabh = {"],
  ];
  void lines;
  return (
    <div className="relative">
      <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-primary/5 blur-2xl" />
      <div className="rounded-2xl border bg-card shadow-2xl">
        <div className="flex items-center gap-2 border-b px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
          <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
          <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
          <span className="ml-3 font-mono text-xs text-muted-foreground">rishabh.ts</span>
        </div>
        <pre className="overflow-x-auto p-5 font-mono text-[0.8rem] leading-7 text-muted-foreground">
<span className="text-primary">const</span> <span className="text-foreground">developer</span> = {"{"}{"\n"}
{"  "}name: <span className="text-success">"Rishabh"</span>,{"\n"}
{"  "}role: <span className="text-success">"Full Stack Developer"</span>,{"\n"}
{"  "}education: <span className="text-success">"B.Tech CSE · LPU"</span>,{"\n"}
{"  "}stack: [{"\n"}
{"    "}<span className="text-success">"React"</span>, <span className="text-success">"Next.js"</span>,{"\n"}
{"    "}<span className="text-success">"Node"</span>, <span className="text-success">"Express"</span>,{"\n"}
{"    "}<span className="text-success">"MongoDB"</span>, <span className="text-success">"Docker"</span>{"\n"}
{"  "}],{"\n"}
{"  "}openToWork: <span className="text-primary">true</span>,{"\n"}
{"}"};{"\n"}
{"\n"}
<span className="text-primary">await</span> <span className="text-foreground">developer</span>.build(<span className="text-success">"your idea"</span>);
        </pre>
      </div>
      <div className="absolute -bottom-6 -left-4 hidden rounded-xl border bg-surface px-4 py-3 sm:block">
        <p className="font-display text-3xl text-primary">350+</p>
        <p className="text-xs text-muted-foreground">DSA problems solved</p>
      </div>
    </div>
  );
}

function Work() {
  const featured = projects.filter((p) => p.featured);
  return (
    <section id="work" className="py-24 md:py-32">
      <div className="container-page">
        <SectionHead index="01" label="Selected Work" title={<>Products I've designed<br className="hidden md:block" /> and <em className="text-primary">shipped</em>.</>} />
        <div className="flex flex-col gap-24 md:gap-32">
          {featured.map((p, i) => <FeaturedProject key={p.slug} p={p} index={i} />)}
        </div>
        <Reveal className="mt-24 flex justify-center">
          <Link to="/archive" className={btnGhost}>Browse the full archive <ArrowRight className="h-4 w-4" /></Link>
        </Reveal>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="border-t bg-surface/40 py-24 md:py-32">
      <div className="container-page grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionHead index="02" label="About" title={<>A developer who builds the <em className="text-primary">whole thing</em>.</>} />
        </div>
        <Reveal className="space-y-5 text-lg leading-relaxed text-muted-foreground lg:col-span-7 lg:pt-14">
          <p>I'm Rishabh, a Full Stack Developer passionate about building modern web applications and digital products. I work across frontend, backend, and databases to turn ideas into scalable and functional experiences.</p>
          <p>My journey started with computer science fundamentals at Lovely Professional University — data structures, operating systems, databases — and grew into building complete products: healthcare platforms, e-commerce stores, student communities and the pipelines that deploy them.</p>
          <p>I like practical problems. I break them down, pick the simplest architecture that will hold up, and keep learning whatever the product needs — from Docker and CI/CD to new frameworks. Today I take on freelance work for businesses and founders who want a reliable partner from first sketch to launch.</p>
          <div className="flex items-center gap-3 pt-4 text-base text-foreground">
            <GraduationCap className="h-5 w-5 text-primary" />
            B.Tech Computer Science & Engineering · LPU · 2023–2027
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32">
      <div className="container-page">
        <SectionHead index="03" label="Experience & Skills" title={<>Achievements & <em className="text-primary">toolkit</em>.</>} />
        <div className="grid gap-px overflow-hidden rounded-2xl border bg-border md:grid-cols-3">
          {achievements.map((a, i) => (
            <Reveal key={a.label} delay={i * 0.08} className="bg-background p-8">
              <p className="font-display text-6xl text-primary">{a.value}</p>
              <p className="mt-3 text-sm text-muted-foreground">{a.label}</p>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-8 flex items-start gap-4 rounded-2xl border p-6">
          <GraduationCap className="mt-1 h-5 w-5 shrink-0 text-primary" />
          <div>
            <p className="font-medium">B.Tech, Computer Science & Engineering</p>
            <p className="text-sm text-muted-foreground">Lovely Professional University · 2023 – 2027</p>
          </div>
        </Reveal>
        <div className="mt-16 grid gap-x-10 gap-y-10 md:grid-cols-2">
          {skills.map((s, i) => (
            <Reveal key={s.group} delay={(i % 2) * 0.06} className="border-t pt-5">
              <p className="eyebrow mb-4">{s.group}</p>
              <div className="flex flex-wrap gap-2">{s.items.map((t) => <Badge key={t}>{t}</Badge>)}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="border-t bg-surface/40 py-24 md:py-32">
      <div className="container-page">
        <SectionHead index="04" label="Freelance" title={<>Open to freelance projects<br className="hidden md:block" /> & <em className="text-primary">collaboration</em>.</>} />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 0.06}>
              <div className="h-full rounded-2xl border bg-card p-7 transition-colors hover:border-primary/40">
                <p className="font-mono text-xs text-primary">0{i + 1}</p>
                <h3 className="mt-6 font-display text-3xl">{s.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-14 flex flex-col items-start justify-between gap-6 rounded-2xl border bg-background p-8 md:flex-row md:items-center md:p-10">
          <p className="font-display text-3xl md:text-4xl">Have an idea? <em className="text-primary">Let's build something together.</em></p>
          <a href="#contact" className={btnPrimary}>Contact Me <ArrowUpRight className="h-4 w-4" /></a>
        </Reveal>
      </div>
    </section>
  );
}

function Certificates() {
  return (
    <section id="certificates" className="py-24 md:py-32">
      <div className="container-page">
        <SectionHead index="05" label="Certificates" title={<>Credentials.</>} />
        <div className="divide-y border-y">
          {certificates.map((c, i) => (
            <Reveal key={c.name} delay={i * 0.05}>
              <div className="group flex flex-col gap-2 py-6 md:flex-row md:items-center md:justify-between">
                <div className="flex items-center gap-4">
                  <Award className="h-5 w-5 text-primary" />
                  <p className="text-lg">{c.name}</p>
                </div>
                <div className="flex items-center gap-4 pl-9 md:pl-0">
                  <p className="text-sm text-muted-foreground">{c.issuer}</p>
                  {c.url && <a href={c.url} target="_blank" rel="noreferrer" className="text-sm text-primary">View credential</a>}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="grain-bg border-t py-24 md:py-32">
      <div className="container-page grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionHead index="06" label="Contact" title={<>Let's talk about your <em className="text-primary">project</em>.</>} />
          <Reveal className="space-y-4 text-sm">
            <a href={`mailto:${profile.email}`} className="flex items-center gap-3 text-muted-foreground hover:text-foreground"><Mail className="h-4 w-4 text-primary" /> {profile.email}</a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-foreground"><Github className="h-4 w-4 text-primary" /> github.com/rishabh-ydv23</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-foreground"><Linkedin className="h-4 w-4 text-primary" /> linkedin.com/in/rishabh-ydv23</a>
          </Reveal>
        </div>
        <Reveal className="rounded-2xl border bg-card p-6 md:p-8 lg:col-span-7">
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}

function Index() {
  return (
    <main>
      <Hero />
      <Work />
      <About />
      <Experience />
      <Services />
      <Certificates />
      <Contact />
    </main>
  );
}
