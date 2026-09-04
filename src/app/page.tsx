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

         <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SKILL_GROUPS.map((group, i) => (
            <Reveal key={group.title} delay={i * 90}>
              <Card className="h-full transition-colors hover:border-[var(--paper)]/25">
                <CardHeader>
                  <div className="mb-1 flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--ember)]/10">
                    <group.icon className="h-5 w-5 text-[var(--ember)]" />
                  </div>
                  <CardTitle>{group.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Badge key={item} variant="outline">
                      {item}
                    </Badge>
                  ))}
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>

        <Reveal delay={270} className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Certifications</CardTitle>
              <CardDescription>Verified coursework, in brief.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {CERTIFICATIONS.map((cert) => (
                  <div
                    key={cert.title}
                    className="rounded-lg border border-[var(--paper)]/10 p-4"
                  >
                    <Award className="mb-2 h-4 w-4 text-[var(--paper-dim)]" />
                    <div className="font-ui text-sm font-medium text-[var(--paper)]">
                      {cert.title}
                    </div>
                    <div className="mt-1 font-code text-xs text-[var(--paper-faint)]">
                      {cert.org}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Experience & Achievements                                          */
/* ------------------------------------------------------------------ */

function Experience() {
  return (
    <section
      id="experience"
      className="border-t border-[var(--paper)]/[0.06] px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="03"
          label="Experience & Achievements"
          title="What I've been doing."
        />

        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <h3 className="mb-6 font-code text-xs uppercase tracking-widest text-[var(--paper-dim)]">
              Experience
            </h3>
            <div className="space-y-6 border-l border-[var(--paper)]/10 pl-6">
              {EXPERIENCE.map((item) => (
                <div key={item.role} className="relative">
                  <span className="absolute -left-[29px] top-1.5 flex h-3 w-3 items-center justify-center rounded-full border-2 border-[var(--ember)] bg-[var(--ink)]" />
                  <div className="font-code text-xs text-[var(--ember)]">
                    {item.period}
                  </div>
                  <div className="mt-1 font-display text-lg font-semibold text-[var(--paper)]">
                    {item.role}
                  </div>
                  <div className="font-ui text-sm text-[var(--paper-dim)]">
                    {item.org}
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--paper-faint)]">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <h3 className="mb-6 font-code text-xs uppercase tracking-widest text-[var(--paper-dim)]">
              Achievements
            </h3>
            <div className="space-y-4">
              {ACHIEVEMENTS.map((item) => (
                <Card
                  key={item.title}
                  className="transition-colors hover:border-[var(--paper)]/25"
                >
                  <CardContent className="flex gap-4 p-5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--paper)]/[0.06]">
                      <item.icon className="h-5 w-5 text-[var(--paper-dim)]" />
                    </div>
                    <div>
                      <div className="font-ui text-sm font-semibold text-[var(--paper)]">
                        {item.title}
                      </div>
                      <p className="mt-1 text-sm leading-relaxed text-[var(--paper-faint)]">
                        {item.desc}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Projects — renders directly from src/data/projects.ts              */
/* ------------------------------------------------------------------ */

function Projects() {
  return (
    <section
      id="projects"
      className="border-t border-[var(--paper)]/[0.06] px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="04"
          label="Projects"
          title="Selected work."
          description="Five builds spanning mobile, web, data, and hardware — each solving a real problem end to end."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={(i % 3) * 90}>
              <Card className="group flex h-full flex-col transition-colors hover:border-[var(--ember)]/30">
                <CardHeader>
                  <div className="mb-2 font-code text-xs text-[var(--paper-faint)]">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.tagline}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col">
                  <p className="flex-1 text-sm leading-relaxed text-[var(--paper-dim)]">
                    {project.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <Badge key={t} variant="outline">
                        {t}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex flex-wrap items-center gap-x-5 gap-y-2">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-code text-xs text-[var(--paper)] transition-transform group-hover:translate-x-0.5"
                    >
                      Live demo <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  )}
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-code text-xs text-[var(--ember)] transition-transform group-hover:translate-x-0.5"
                    >
                      {project.linkLabel} <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  ) : (
                    <span className="font-code text-xs text-[var(--paper-faint)]">
                      {project.linkLabel}
                    </span>
                  )}
                </CardFooter>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Contact                                                             */
/* ------------------------------------------------------------------ */

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section
      id="contact"
      className="border-t border-[var(--paper)]/[0.06] px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="05"
          label="Get In Touch"
          title="Let's build something."
          description="Open to internships, collaborations, and interesting problems. Reach out directly, or drop a note below."
        />

        <div className="grid gap-10 lg:grid-cols-2">
          <Reveal className="space-y-3">
            {CONTACT_LINKS.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-xl border border-[var(--paper)]/10 p-4 transition-colors hover:border-[var(--paper)]/25"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[var(--ember)]/10">
                  <c.icon className="h-5 w-5 text-[var(--ember)]" />
                </div>
                <div>
                  <div className="font-code text-[11px] uppercase tracking-wider text-[var(--paper-faint)]">
                    {c.label}
                  </div>
                  <div className="font-ui text-sm font-medium text-[var(--paper)]">
                    {c.value}
                  </div>
                </div>
              </a>
            ))}
          </Reveal>

          <Reveal delay={120}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="space-y-4 rounded-2xl border border-[var(--paper)]/10 p-6"
            >
              <div>
                <label
                  htmlFor="name"
                  className="mb-1.5 block font-code text-xs uppercase tracking-wider text-[var(--paper-dim)]"
                >
                  Name
                </label>
                <input
                  id="name"
                  required
                  className="w-full rounded-lg border border-[var(--paper)]/15 bg-transparent px-3.5 py-2.5 text-sm text-[var(--paper)] outline-none transition-colors focus:border-[var(--ember)]"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-1.5 block font-code text-xs uppercase tracking-wider text-[var(--paper-dim)]"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  className="w-full rounded-lg border border-[var(--paper)]/15 bg-transparent px-3.5 py-2.5 text-sm text-[var(--paper)] outline-none transition-colors focus:border-[var(--ember)]"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-1.5 block font-code text-xs uppercase tracking-wider text-[var(--paper-dim)]"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  className="w-full resize-none rounded-lg border border-[var(--paper)]/15 bg-transparent px-3.5 py-2.5 text-sm text-[var(--paper)] outline-none transition-colors focus:border-[var(--ember)]"
                  placeholder="What are you building?"
                />
              </div>
              <button
                type="submit"
                className={cn(buttonVariants({ variant: "default" }), "w-full")}
              >
                {sent ? "Message noted — thank you!" : "Send Message"}
                {!sent && <Send className="h-4 w-4" />}
              </button>
              {sent && (
                <p className="font-code text-xs text-[var(--paper-dim)]">
                  This form is a placeholder — wire it to an email service
                  (Formspree, Resend) or an API route to actually receive
                  submissions.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Footer                                                              */
/* ------------------------------------------------------------------ */

function Footer() {
  return (
    <footer className="border-t border-[var(--paper)]/[0.06] px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="font-code text-xs text-[var(--paper-faint)]">
          © {new Date().getFullYear()} Abhisar Sharma. Built with Next.js &amp;
          shadcn/ui.
        </p>
        <div className="flex gap-6">
          {[
            { label: "GitHub", href: "https://github.com/Abhisar-else" },
            {
              label: "LinkedIn",
              href: "https://www.linkedin.com/in/abhisar-sharma-670107321/",
            },
            { label: "Email", href: "mailto:abhisarsharma2006@gmail.com" },
          ].map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-code text-xs text-[var(--paper-faint)] transition-colors hover:text-[var(--ember)]"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function Portfolio() {
  return (
    <>
      <a
        href="#top"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-[var(--ember)] focus:px-4 focus:py-2 focus:font-code focus:text-sm focus:text-[var(--ink)]"
      >
        Skip to content
      </a>
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}