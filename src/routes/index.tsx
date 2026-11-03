import { ClientOnly, createFileRoute, Link } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import { Button } from "@/components/ui/button";
const TechKeyboard = lazy(() => import("@/components/site/TechKeyboard"));
import { ArrowRight, ArrowUpRight, Award, Github, GraduationCap, Linkedin, Mail, MapPin } from "lucide-react";
import { achievements, certificates, profile, projects, services, skills } from "@/data/portfolio";
import { Badge, Reveal, SectionHead } from "@/components/site/Reveal";
import { FeaturedProject } from "@/components/site/ProjectCard";
import { ContactForm } from "@/components/site/ContactForm";
import portrait from "@/assets/rishabh_portrait.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rishabh — Full Stack Developer & Freelance Web Developer" },
      { name: "description", content: "Rishabh is a Full Stack Developer from India building modern web apps, scalable backends and e-commerce platforms. Open to freelance projects." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: "Rishabh — Full Stack Developer" },
      { property: "og:description", content: "Turning ideas into digital experiences through code. Selected work, skills and freelance services." },
    ],
  }),
  component: Index,
});

const btnPrimary = "group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5";
const btnGhost = "inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm transition-colors hover:border-primary hover:text-primary";

function Hero() {
  return (
    <section id="home" className="portfolio-hero relative overflow-hidden">
      <div className="container-page hero-content">
        <div className="hero-intro">
          <Reveal>
            <div className="mb-7 flex items-center gap-2 font-mono text-xs text-muted-foreground"><span className="h-2 w-2 rounded-full bg-success" /> AVAILABLE FOR FREELANCE</div>
            <p className="mb-3 text-lg text-muted-foreground">Hey, I'm</p>
            <h1 className="hero-name font-display font-bold">Rishabh<span className="text-primary">.</span></h1>
            <p className="mt-5 text-xl font-medium">Full Stack Developer</p>
            <p className="mt-4 max-w-md text-sm leading-7 text-muted-foreground">Turning ideas into thoughtful digital experiences. From the first pixel to the last line of code.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="h-12 rounded-md px-6"><a href="#work">Explore my work <ArrowUpRight /></a></Button>
              <Button asChild variant="outline" size="lg" className="h-12 rounded-md px-6"><a href="#contact">Let's talk <ArrowRight /></a></Button>
            </div>
            <div className="mt-7 flex items-center gap-3">
              <Button asChild variant="ghost" size="icon"><a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" title="GitHub"><Github /></a></Button>
              <Button asChild variant="ghost" size="icon"><a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" title="LinkedIn"><Linkedin /></a></Button>
              <span className="ml-2 flex items-center gap-2 text-xs text-muted-foreground"><MapPin className="h-3.5 w-3.5" />{profile.location}</span>
            </div>
          </Reveal>
        </div>
        <div className="hero-portrait">
          <img src={portrait.url} alt="Portrait of Rishabh" className="hero-portrait-img" />
          <div className="hero-portrait-card">
            <span className="h-2 w-2 rounded-full bg-success" />
            <div><p className="text-sm font-medium">Rishabh</p><p className="text-xs text-muted-foreground">Full Stack · LPU '27</p></div>
          </div>
        </div>
      </div>
      <p aria-hidden className="hero-watermark font-display">Rishabh</p>
      <div className="container-page hero-bottom"><span className="font-mono text-xs text-muted-foreground">DESIGN. DEVELOP. DELIVER.</span><a href="#work" className="flex items-center gap-3 text-xs text-muted-foreground">Selected work <ArrowRight className="h-4 w-4 rotate-90" /></a></div>
    </section>
  );
}

function Toolkit3D() {
  return (
    <section aria-label="Interactive toolkit" className="border-b py-16">
      <div className="container-page">
        <p className="eyebrow mb-4">— Play with my stack</p>
        <div className="h-[420px]">
          <ClientOnly fallback={<div className="tech-scene" />}><Suspense fallback={<div className="tech-scene" />}><TechKeyboard /></Suspense></ClientOnly>
        </div>
      </div>
    </section>
  );
}

function Manifesto() {
  const words = ["Design", "Develop", "Deploy", "Full Stack", "Freelance"];
  return (
    <section aria-label="Manifesto" className="border-b py-20 md:py-28">
      <div className="container-page">
        <Reveal>
          <p className="eyebrow mb-6">— Manifesto</p>
          <p className="font-display text-5xl md:text-8xl">I build front<span className="text-primary">.</span> I build back<span className="text-primary">.</span><br /><span className="text-primary">I ship it all.</span></p>
        </Reveal>
      </div>
      <div className="mt-16 overflow-hidden border-y bg-primary py-4 text-primary-foreground">
        <div className="marquee font-display text-3xl md:text-4xl">
          {[...words, ...words, ...words, ...words].map((w, i) => <span key={i} className="flex items-center gap-8 pr-8">{w}<span>✦</span></span>)}
        </div>
      </div>
    </section>
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
      <Toolkit3D />
      <Manifesto />
      <Work />
      <About />
      <Experience />
      <Services />
      <Certificates />
      <Contact />
    </main>
  );
}
