import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const skillGroups = [
  {
    icon: "🧠",
    title: "Data Science & ML",
    skills: ["Python", "Machine Learning", "Pandas", "NumPy", "Scikit-Learn", "KNIME", "Data Analysis"]
  },
  {
    icon: "🌐",
    title: "MERN Stack",
    skills: ["MongoDB", "Express.js", "React", "Node.js", "Redux", "REST APIs", "JWT Auth"]
  },
  {
    icon: "🗄️",
    title: "Database & Storage",
    skills: ["MySQL", "SQLite", "MongoDB", "SQL queries", "SharedPreferences"]
  },
  {
    icon: "📱",
    title: "Mobile Development",
    skills: ["Flutter", "Dart", "Android Studio", "Mobile Sync"]
  },
  {
    icon: "🛠️",
    title: "Tools & Platforms",
    skills: ["Git", "GitHub", "VS Code", "Postman", "Google Maps API"]
  },
  {
    icon: "⚙️",
    title: "Other Skills",
    skills: ["Java", "C#", "Distributed Systems", "Offline-First Sync", "IoT"]
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-muted/30">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-16">
          <Badge variant="outline" className="mb-4">Tech Stack</Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Skills & Technologies</h2>
          <p className="mt-4 text-muted-foreground max-w-[700px]">
            Technologies I&apos;ve been working with and continuously learning
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group) => (
            <Card key={group.title} className="border-none shadow-sm bg-background/50 backdrop-blur-sm transition-all hover:bg-background hover:shadow-md hover:shadow-primary/20">
              <CardHeader className="pb-3">
                <div className="text-3xl mb-2">{group.icon}</div>
                <CardTitle className="text-xl font-bold tracking-tight">{group.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="font-medium">
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
