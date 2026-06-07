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
        <div className="flex flex-col items-center text-center mb-16">
          <Badge variant="outline" className="mb-4">About Me</Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Know Who I Am</h2>
          <p className="mt-4 text-muted-foreground max-w-[700px]">
            A passionate developer building impactful digital experiences
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-lg text-muted-foreground">
            <p>
              I&apos;m <strong>Abhisar Sharma</strong>, a BTech Computer Science & Information Technology student at{" "}
              <strong>Symbiosis University of Applied Sciences</strong>, Indore (IV semester).
              I am an aspiring <strong>Data Scientist</strong> with professional experience working as a 
              <strong> MERN Stack Developer</strong>.
            </p>
            <p>
              With hands-on experience in building web applications and a strong academic focus on data analytics,
              I specialize in bridging the gap between robust software engineering and data-driven intelligence.
              I was a <strong>Web Developer Intern at UptoSkills</strong> and am an active <strong>IEEE student member</strong>.
            </p>
            <p>
              Currently working on <strong>&quot;A Distributed Framework for Mobile-Based Data Collection&quot;</strong>
              {' '}— a mobile-first distributed survey platform featuring offline-first sync, conflict resolution, and secure authentication.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              {highlights.map((item) => (
                <div key={item.label} className="flex items-center gap-3 rounded-lg border bg-muted/30 p-4">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{item.label}</div>
                    <div className="text-sm font-bold text-foreground">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative rounded-2xl border bg-muted/50 p-6 font-mono text-sm shadow-2xl overflow-hidden">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-3 w-3 rounded-full bg-destructive" />
              <div className="h-3 w-3 rounded-full bg-yellow-400" />
              <div className="h-3 w-3 rounded-full bg-green-500" />
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
                <div className="mt-1 text-muted-foreground">Data Science + MERN Stack</div>
              </div>
              <div>
                <span className="text-primary">$ </span>
                <span className="text-foreground">ls skills/</span>
                <div className="mt-1 text-muted-foreground">
                  Python/ ML/ Pandas/ SQL/<br />
                  MongoDB/ Express/ React/ Node/
                </div>
              </div>
              <div>
                <span className="text-primary">$ </span>
                <span className="text-foreground">cat motto.txt</span>
                <div className="mt-1 text-muted-foreground">&quot;Build it offline-first, sync it later.&quot; ⚡</div>
              </div>
              <div>
                <span className="text-primary">$ </span>
                <span className="animate-pulse inline-block h-4 w-2 bg-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
