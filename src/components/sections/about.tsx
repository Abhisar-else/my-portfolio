import { Badge } from "@/components/ui/badge";

const highlights = [
  { icon: "🎓", label: "University", value: "SUAS, Indore" },
  { icon: "📍", label: "Location", value: "Greater Indore, India" },
  { icon: "💼", label: "Experience", value: "Web Dev Intern" },
  { icon: "🏅", label: "IEEE", value: "Active Member" },
];

export function About() {
  return (
    <section id="about" className="py-24">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-16 fade-in-up">
          <Badge variant="outline" className="mb-4 border-primary/30 bg-primary/5">About Me</Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl gradient-text">Know Who I Am</h2>
          <p className="mt-4 text-muted-foreground max-w-[700px]">
            A passionate developer building impactful digital experiences
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-lg text-muted-foreground fade-in-left">
            <p>
              I&apos;m <strong className="text-foreground">Abhisar Sharma</strong>, a BTech Computer Science &amp; Information Technology student at{" "}
              <strong className="text-foreground">Symbiosis University of Applied Sciences</strong>, Indore (IV semester).
              I am an aspiring <strong className="text-foreground">Data Scientist</strong> with professional experience working as a 
              <strong className="text-foreground"> MERN Stack Developer</strong>.
            </p>
            <p>
              With hands-on experience in building web applications and a strong academic focus on data analytics,
              I specialize in bridging the gap between robust software engineering and data-driven intelligence.
              I was a <strong className="text-foreground">Web Developer Intern at UptoSkills</strong> and am an active <strong className="text-foreground">IEEE student member</strong>.
            </p>
            <p>
              Currently working on <strong className="text-foreground">&quot;A Distributed Framework for Mobile-Based Data Collection&quot;</strong>
              {' '}— a mobile-first distributed survey platform featuring offline-first sync, conflict resolution, and secure authentication.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              {highlights.map((item, i) => (
                <div key={item.label} className={`flex items-center gap-3 rounded-xl border border-primary/10 bg-muted/30 p-4 neon-glow-hover neon-border transition-all hover:-translate-y-0.5 fade-in-up delay-${(i + 1) * 100}`}>
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{item.label}</div>
                    <div className="text-sm font-bold text-foreground">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative rounded-2xl border border-primary/20 bg-muted/30 p-6 font-mono text-sm shadow-2xl overflow-hidden backdrop-blur-xl neon-glow-hover fade-in-right">
            {/* Terminal window dots */}
            <div className="flex items-center gap-2 mb-6">
              <div className="h-3 w-3 rounded-full bg-destructive shadow-[0_0_6px_hsl(0,84%,60%,0.5)]" />
              <div className="h-3 w-3 rounded-full bg-yellow-400 shadow-[0_0_6px_hsl(50,96%,53%,0.5)]" />
              <div className="h-3 w-3 rounded-full bg-green-500 shadow-[0_0_6px_hsl(142,71%,45%,0.5)]" />
              <div className="ml-2 text-muted-foreground">abhisar@portfolio ~ %</div>
            </div>
            
            <div className="space-y-4">
              <div>
                <span className="text-primary">$ </span>
                <span className="text-foreground">whoami</span>
                <div className="mt-1 text-muted-foreground">Abhisar Sharma</div>
              </div>
              <div>
                <span className="text-primary">$ </span>
                <span className="text-foreground">cat role.txt</span>
                <div className="mt-1 text-secondary">Data Science + MERN Stack</div>
              </div>
              <div>
                <span className="text-primary">$ </span>
                <span className="text-foreground">ls skills/</span>
                <div className="mt-1 text-muted-foreground">
                  <span className="text-primary/80">Python/</span> <span className="text-secondary/80">ML/</span> <span className="text-primary/80">Pandas/</span> <span className="text-secondary/80">SQL/</span><br />
                  <span className="text-secondary/80">MongoDB/</span> <span className="text-primary/80">Express/</span> <span className="text-secondary/80">React/</span> <span className="text-primary/80">Node/</span>
                </div>
              </div>
              <div>
                <span className="text-primary">$ </span>
                <span className="text-foreground">cat motto.txt</span>
                <div className="mt-1 text-muted-foreground">&quot;Build it offline-first, sync it later.&quot; ⚡</div>
              </div>
              <div>
                <span className="text-primary">$ </span>
                <span className="animate-pulse inline-block h-4 w-2 bg-primary rounded-sm" />
              </div>
            </div>

            {/* Subtle corner decorations */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/5 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-secondary/5 to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
