import { useState, type FormEvent } from "react";
import { ArrowUpRight } from "lucide-react";
import { profile } from "@/data/portfolio";

const types = ["Business Website", "Full Stack Web App", "E-Commerce", "Admin Dashboard", "API / Backend", "Redesign / Maintenance", "Other"];
type Errors = Partial<Record<"name" | "email" | "type" | "message", string>>;

export function validate(v: { name: string; email: string; type: string; message: string }): Errors {
  const e: Errors = {};
  if (v.name.trim().length < 2) e.name = "Please enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim())) e.email = "Please enter a valid email.";
  if (!v.type) e.type = "Choose a project type.";
  if (v.message.trim().length < 20) e.message = "Tell me a bit more (at least 20 characters).";
  return e;
}

const field = "w-full rounded-lg border bg-surface px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary focus-visible:ring-2 focus-visible:ring-ring";

export function ContactForm() {
  const [v, setV] = useState({ name: "", email: "", type: "", budget: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [opened, setOpened] = useState(false);
  const set = (k: keyof typeof v) => (e: { target: { value: string } }) => setV({ ...v, [k]: e.target.value });

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const errs = validate(v);
    setErrors(errs);
    if (Object.keys(errs).length) return;
    const subject = `${v.type} enquiry from ${v.name}`;
    const body = `Name: ${v.name}\nEmail: ${v.email}\nProject type: ${v.type}\nBudget: ${v.budget || "Not specified"}\n\n${v.message}`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setOpened(true);
  };

  const err = (k: keyof Errors) => errors[k] && <p className="mt-1.5 text-xs text-destructive">{errors[k]}</p>;

  return (
    <form onSubmit={submit} noValidate className="grid gap-5 sm:grid-cols-2">
      <label className="block"><span className="eyebrow mb-2 block">Name</span><input className={field} value={v.name} onChange={set("name")} placeholder="Your name" aria-invalid={!!errors.name} />{err("name")}</label>
      <label className="block"><span className="eyebrow mb-2 block">Email</span><input type="email" className={field} value={v.email} onChange={set("email")} placeholder="you@company.com" aria-invalid={!!errors.email} />{err("email")}</label>
      <label className="block"><span className="eyebrow mb-2 block">Project type</span>
        <select className={field} value={v.type} onChange={set("type")} aria-invalid={!!errors.type}>
          <option value="">Select…</option>
          {types.map((t) => <option key={t}>{t}</option>)}
        </select>{err("type")}
      </label>
      <label className="block"><span className="eyebrow mb-2 block">Budget (optional)</span><input className={field} value={v.budget} onChange={set("budget")} placeholder="e.g. ₹30k – ₹60k" /></label>
      <label className="block sm:col-span-2"><span className="eyebrow mb-2 block">Message</span><textarea rows={5} className={field} value={v.message} onChange={set("message")} placeholder="What are you looking to build?" aria-invalid={!!errors.message} />{err("message")}</label>
      <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-muted-foreground">
          {opened ? "Your email app should now be open with the message ready — just hit send." : "Submitting opens your email app with everything pre-filled."}
        </p>
        <button type="submit" className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 active:translate-y-0">
          Send message <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </button>
      </div>
    </form>
  );
}
