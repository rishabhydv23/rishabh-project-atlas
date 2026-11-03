import { Link } from "@tanstack/react-router";
import { ArrowUp, Github, Linkedin, Mail, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/portfolio";

const nav = [
  { label: "Home", href: "/#home" },
  { label: "Work", href: "/#work" },
  { label: "Archive", href: "/archive" },
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Certificates", href: "/#certificates" },
  { label: "Contact", href: "/#contact" },
];

function NavLink({ href, label, onClick }: { href: string; label: string; onClick?: () => void }) {
  if (href === "/archive")
    return (
      <Link to="/archive" onClick={onClick} className="text-sm text-muted-foreground transition-colors hover:text-foreground" activeProps={{ className: "text-foreground" }}>
        {label}
      </Link>
    );
  return (
    <a href={href} onClick={onClick} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
      {label}
    </a>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 12);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled || open ? "border-b bg-background/85 backdrop-blur-md" : "border-b border-transparent"}`}>
      <div className="container-page flex h-16 items-center justify-between">
        <a href="/#home" className="font-display text-2xl uppercase">
          Rishabh<span className="text-primary">.</span>
        </a>
        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((n) => <NavLink key={n.label} {...n} />)}
        </nav>
        <div className="flex items-center gap-2">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hidden rounded-full p-2 text-muted-foreground transition-colors hover:text-foreground sm:block"><Github className="h-4 w-4" /></a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hidden rounded-full p-2 text-muted-foreground transition-colors hover:text-foreground sm:block"><Linkedin className="h-4 w-4" /></a>
          <Button variant="ghost" size="icon" className="lg:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>
      {open && (
        <nav className="container-page flex flex-col gap-4 pb-6 pt-2 lg:hidden">
          {nav.map((n) => <NavLink key={n.label} {...n} onClick={() => setOpen(false)} />)}
          <div className="flex gap-4 pt-2 text-sm">
            <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </nav>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t py-14">
      <div className="container-page grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <p className="font-display text-3xl">Rishabh<span className="text-primary">.</span></p>
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">Full Stack Developer building modern web products from India.</p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="eyebrow mb-2">Navigate</p>
          {nav.map((n) => <NavLink key={n.label} {...n} />)}
        </div>
        <div className="flex flex-col gap-3 text-sm">
          <p className="eyebrow mb-1">Elsewhere</p>
          <a href={profile.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-foreground"><Github className="h-4 w-4" />GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-foreground"><Linkedin className="h-4 w-4" />LinkedIn</a>
          <a href={`mailto:${profile.email}`} className="flex items-center gap-2 text-muted-foreground hover:text-foreground"><Mail className="h-4 w-4" />Email</a>
        </div>
      </div>
      <div className="container-page mt-12 flex items-center justify-between border-t pt-6 text-xs text-muted-foreground">
        <span>© {new Date().getFullYear()} Rishabh. All rights reserved.</span>
        <Button variant="ghost" size="sm" onClick={() => window.scrollTo({ top: 0 })}>Back to top <ArrowUp className="h-3.5 w-3.5" /></Button>
      </div>
    </footer>
  );
}
