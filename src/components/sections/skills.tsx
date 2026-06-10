import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const skillGroups = [
  {
    icon: "🧠",
    title: "Data Science & ML",
    skills: ["Python", "Machine Learning", "Pandas", "NumPy", "Scikit-Learn", "KNIME", "Data Analysis"],
    accent: "from-violet-500 to-purple-600"
  },
  {
    icon: "🌐",
    title: "MERN Stack",
    skills: ["MongoDB", "Express.js", "React", "Node.js", "Redux", "REST APIs", "JWT Auth"],
    accent: "from-cyan-400 to-blue-500"
  },
  {
    icon: "🗄️",
    title: "Database & Storage",
    skills: ["MySQL", "SQLite", "MongoDB", "SQL queries", "SharedPreferences"],
    accent: "from-emerald-400 to-green-600"
  },
  {
    icon: "📱",
    title: "Mobile Development",
    skills: ["Flutter", "Dart", "Android Studio", "Mobile Sync"],
    accent: "from-blue-400 to-indigo-500"
  },
  {
    icon: "🛠️",
    title: "Tools & Platforms",
    skills: ["Git", "GitHub", "VS Code", "Postman", "Google Maps API"],
    accent: "from-orange-400 to-red-500"
  },
  {
    icon: "⚙️",
    title: "Other Skills",
    skills: ["Java", "C#", "Distributed Systems", "Offline-First Sync", "IoT"],
    accent: "from-pink-400 to-rose-500"
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-muted/30 relative">
      {/* Section glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="container">
        <div className="flex flex-col items-center text-center mb-16 fade-in-up">
          <Badge variant="outline" className="mb-4 border-primary/30 bg-primary/5">Tech Stack</Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl gradient-text">Skills & Technologies</h2>
          <p className="mt-4 text-muted-foreground max-w-[700px]">
            Technologies I&apos;ve been working with and continuously learning
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, i) => (
            <Card 
              key={group.title} 
              className={`border border-primary/10 shadow-sm bg-background/50 backdrop-blur-sm transition-all duration-300 hover:bg-background/80 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 neon-border fade-in-scale delay-${(i + 1) * 100}`}
            >
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3 mb-1">
                  <div className={`text-3xl p-2 rounded-xl bg-gradient-to-br ${group.accent} bg-clip-padding`}>
                    {group.icon}
                  </div>
                  <CardTitle className="text-xl font-bold tracking-tight">{group.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="font-medium border border-border/50 hover:border-primary/30 hover:bg-primary/10 transition-all cursor-default">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
