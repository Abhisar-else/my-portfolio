"use client";

import { useEffect, useRef, useState } from "react";
import {
  Menu,
  X,
  ArrowDown,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  GraduationCap,
  Briefcase,
  Users,
  Trophy,
  Factory,
  Smartphone,
  Cpu,
  Layers,
  Award,
  Send,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { projects } from "@/data/projects";

/* ------------------------------------------------------------------ */
/* Content — edit these to update copy without touching the layout.   */
/* Projects live in a separate file: src/data/projects.ts             */
/* ------------------------------------------------------------------ */

const NAV_LINKS = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];
const NAV_IDS = NAV_LINKS.map((l) => l.id);

const TYPED_ROLES = [
  "Frontend Developer",
  "Mobile App Builder",
  "MERN Stack Engineer",
  "Flutter Developer",
];

const SKILL_GROUPS = [
  {
    title: "Frontend & Mobile",
    icon: Smartphone,
    items: ["Flutter", "MERN Stack", "React", "Bootstrap", "HTML/CSS/JS"],
  },
  {
    title: "Backend & Core",
    icon: Cpu,
    items: ["Java", "Python", "C# / .NET", "ASP.NET Core MVC", "Node.js"],
  },
  {
    title: "Tools & Frameworks",
    icon: Layers,
    items: ["Git & GitHub", "Firebase", "NLTK", "WEKA", "Scilab"],
  },
];

const CERTIFICATIONS = [
  { title: "Python for Data Science", org: "Infosys Springboard · Coursera" },
  { title: "Cybersecurity & AI", org: "IBM · Coursera" },
  { title: "KNIME Data Literacy", org: "Low-Code / No-Code Analytics" },
  { title: "The Global FinTech Ecosystem", org: "Professional Certification" },
];

const EXPERIENCE = [
  {
    role: "MERN Stack Developer Intern",
    org: "UptoSkills",
    period: "Jun – Sep 2025",
    desc: "Built and optimized full-stack web applications with MongoDB, Express, React, and Node.js; integrated REST APIs and handled server-side logic for production features.",
    icon: Briefcase,
  },
  {
    role: "Active IEEE Student Member",
    org: "IEEE Student Branch, SUAS",
    period: "2024 – Present",
    desc: "Participating in technical events, workshops, and hackathons across the student tech community.",
    icon: Users,
  },
];

const ACHIEVEMENTS = [
  {
    title: "Smart India Hackathon 2025",
    desc: "3rd Runner-Up in the internal institutional round, competing with a real-world problem-statement solution.",
    icon: Trophy,
  },
  {
    title: "Industrial Visit — Webvillee Technology",
    desc: "Gained first-hand insight into professional agile workflows and production software deployment pipelines.",
    icon: Factory,
  },
];

const CONTACT_LINKS = [
  {
    icon: Mail,
    label: "Email",
    value: "abhisarsharma2006@gmail.com",
    href: "mailto:abhisarsharma2006@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Abhisar Sharma",
    href: "https://www.linkedin.com/in/abhisar-sharma-670107321/",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "Abhisar-else",
    href: "https://github.com/Abhisar-else",
  },
];

/* ------------------------------------------------------------------ */
/* Hooks                                                               */
/* ------------------------------------------------------------------ */

function useTypewriter(
  words: string[],
  typingSpeed = 85,
  deletingSpeed = 45,
  pause = 1600
) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === "") {
      setDeleting(false);
      setWordIndex((i) => (i + 1) % words.length);
    } else {
      const next = deleting
        ? current.slice(0, text.length - 1)
        : current.slice(0, text.length + 1);
      timeout = setTimeout(
        () => setText(next),
        deleting ? deletingSpeed : typingSpeed
      );
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, typingSpeed, deletingSpeed, pause]);

  return text;
}

function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { rootMargin: "-40% 0px -50% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, [ids]);

  return active;
}

/* ------------------------------------------------------------------ */
/* Small building blocks                                              */
/* ------------------------------------------------------------------ */

function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn("reveal", visible && "in-view", className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function SectionHeading({
  index,
  label,
  title,
  description,
}: {
  index: string;
  label: string;
  title: React.ReactNode;
  description?: string;
}) {
  return (
    <div className="mb-12 max-w-2xl">
      <div className="mb-3 flex items-center gap-3 font-code text-xs uppercase tracking-[0.2em] text-[var(--ember)]">
        <span>{index}</span>
        <span className="h-px w-8 bg-[var(--ember)]/40" />
        <span>{label}</span>
      </div>
      <h2 className="font-display text-3xl font-semibold tracking-tight text-[var(--paper)] sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-[var(--paper-dim)]">{description}</p>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Nav                                                                 */
/* ------------------------------------------------------------------ */

function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(NAV_IDS);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled
          ? "border-b border-[var(--paper)]/10 bg-[var(--ink)]/90 backdrop-blur"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="font-display text-lg font-semibold tracking-tight text-[var(--paper)]"
        >
          Abhisar<span className="text-[var(--ember)]">.</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => go(link.id)}
              className={cn(
                "font-code text-xs uppercase tracking-widest transition-colors",
                active === link.id
                  ? "text-[var(--ember)]"
                  : "text-[var(--paper-dim)] hover:text-[var(--paper)]"
              )}
            >
              {link.label}
            </button>
          ))}
          <a
            href="https://www.linkedin.com/in/abhisar-sharma-670107321/"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ variant: "outline", size: "sm" }))}
          >
            Let&apos;s Talk
          </a>
        </div>

        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-[var(--paper)] md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-[var(--paper)]/10 bg-[var(--ink)] px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => go(link.id)}
                className="text-left font-code text-sm uppercase tracking-widest text-[var(--paper-dim)]"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */

function Hero() {
  const typed = useTypewriter(TYPED_ROLES);

  return (
    <section
      id="top"
      className="relative flex min-h-[100dvh] items-center px-6 pb-16 pt-24"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-16 lg:grid-cols-[1.2fr_1fr]">
        <Reveal>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--paper)]/15 bg-[var(--paper)]/[0.04] px-4 py-1.5 font-code text-xs uppercase tracking-widest text-[var(--paper-dim)]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--ember)] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--ember)]" />
            </span>
            Open to Opportunities
          </div>

          <h1 className="font-display text-5xl font-semibold leading-[1.05] tracking-tight text-[var(--paper)] sm:text-6xl lg:text-7xl">
            Abhisar Sharma
          </h1>

          <div className="mt-5 flex h-8 items-center font-code text-lg text-[var(--paper-dim)] sm:text-xl">
            <span>{typed}</span>
            <span className="caret ml-0.5 inline-block h-6 w-[2px] bg-[var(--ember)]" />
          </div>

          <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-[var(--paper-dim)] sm:text-base">
            BTech Computer Science &amp; IT student at Symbiosis University of
            Applied Sciences, Indore — 4th semester, ~7.6 CGPA. I build
            full-stack web architectures and mobile-first apps, and I&apos;m
            drawn to the interactive system logic underneath both.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <button
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className={cn(buttonVariants({ variant: "default" }))}
            >
              View My Work <ArrowDown className="h-4 w-4" />
            </button>
            <a
              href="https://www.linkedin.com/in/abhisar-sharma-670107321/"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ variant: "outline" }))}
            >
              Connect on LinkedIn <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="relative rounded-2xl border border-[var(--paper)]/10 bg-[var(--ink-raised)] p-8">
            <div className="absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-[var(--ember)] to-transparent" />

            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[var(--ember)] font-display text-xl font-semibold text-[var(--ink)]">
                AS
              </div>
              <div>
                <div className="font-display text-lg font-semibold text-[var(--paper)]">
                  Abhisar Sharma
                </div>
                <div className="flex items-center gap-1.5 font-code text-xs text-[var(--paper-dim)]">
                  <MapPin className="h-3 w-3" /> Greater Indore, India
                </div>
              </div>
            </div>

            <Separator className="my-6" />

            <div className="grid grid-cols-3 gap-3 text-center">
              {[
                ["4th", "Semester"],
                ["7.6", "CGPA"],
                ["5", "Projects"],
              ].map(([n, l]) => (
                <div
                  key={l}
                  className="rounded-lg border border-[var(--paper)]/10 py-3"
                >
                  <div className="font-display text-xl font-semibold text-[var(--ember)]">
                    {n}
                  </div>
                  <div className="mt-1 font-code text-[10px] uppercase tracking-wider text-[var(--paper-dim)]">
                    {l}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {["Flutter", "React", "Node.js", "C#", "Firebase"].map((t) => (
                <Badge key={t} variant="outline">
                  {t}
                </Badge>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* About                                                               */
/* ------------------------------------------------------------------ */

function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="01"
          label="About Me"
          title="Building systems, not just screens."
        />

        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal className="space-y-5 text-[15px] leading-relaxed text-[var(--paper-dim)] sm:text-base">
            <p>
              I&apos;m a Computer Science &amp; Information Technology
              student, currently in my 4th semester at{" "}
              <span className="text-[var(--paper)]">
                Symbiosis University of Applied Sciences
              </span>
              , Indore, holding a ~7.6 CGPA/SGPA average.
            </p>
            <p>
              My focus sits at the intersection of full-stack web
              architecture and mobile frameworks — I&apos;ve shipped
              MERN-stack applications, built offline-first Flutter apps, and
              dug into the interactive system logic that holds both
              together. I balance building practical, working software with
              a continuous drive to learn the layer underneath it.
            </p>
            <p>
              Outside coursework, I&apos;m an active{" "}
              <span className="text-[var(--paper)]">IEEE student member</span>
              , competed in{" "}
              <span className="text-[var(--paper)]">
                Smart India Hackathon 2025
              </span>
              , and interned as a MERN Stack Developer at UptoSkills.
            </p>

            <div className="!mt-8 flex flex-wrap gap-3">
              {[
                { icon: GraduationCap, label: "SUAS, Indore" },
                { icon: MapPin, label: "Greater Indore, India" },
                { icon: Briefcase, label: "MERN Intern @ UptoSkills" },
              ].map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--paper)]/10 px-3.5 py-1.5 font-code text-xs text-[var(--paper-dim)]"
                >
                  <Icon className="h-3.5 w-3.5 text-[var(--ember)]" />
                  {label}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="overflow-hidden rounded-2xl border border-[var(--paper)]/10 bg-[var(--ink-raised)]">
              <div className="flex items-center gap-2 border-b border-[var(--paper)]/10 px-5 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-[var(--paper)]/30" />
                <span className="h-2.5 w-2.5 rounded-full bg-[var(--paper)]/20" />
                <span className="h-2.5 w-2.5 rounded-full bg-[var(--paper)]/10" />
                <span className="ml-2 font-code text-[11px] text-[var(--paper-faint)]">
                  about.sh
                </span>
              </div>
              <div className="space-y-3 p-6 font-code text-[13px] leading-loose text-[var(--paper-dim)]">
                <div>
                  <span className="text-[var(--ember)]">$</span> whoami
                </div>
                <div className="pl-4 text-[var(--paper)]">Abhisar Sharma</div>
                <div>
                  <span className="text-[var(--ember)]">$</span> cat
                  education.txt
                </div>
                <div className="pl-4 text-[var(--paper)]">
                  BTech CSIT · SUAS Indore · Sem 4 · 7.6 CGPA
                </div>
                <div>
                  <span className="text-[var(--ember)]">$</span> cat
                  focus.txt
                </div>
                <div className="pl-4 text-[var(--paper)]">
                  MERN Stack · Flutter · Systems Logic
                </div>
                <div>
                  <span className="text-[var(--ember)]">$</span>{" "}
                  <span className="caret inline-block h-4 w-[7px] bg-[var(--ember)]" />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Skills & Certifications                                             */
/* ------------------------------------------------------------------ */

function Skills() {
  return (
    <section
      id="skills"
      className="border-t border-[var(--paper)]/[0.06] px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="02"
          label="Skills & Certifications"
          title="The stack I build with."
          description="Technologies I reach for daily, and the courses that filled in the gaps."
        />

        <div className="grid