import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const experiences = [
  {
    date: "June 2025 — September 2025",
    role: "MERN Stack Developer Intern",
    company: "UptoSkills",
    desc: "Developed and optimized full-stack web applications using the MERN stack (MongoDB, Express, React, Node.js). Built responsive user interfaces, integrated RESTful APIs, and managed server-side logic for real-world projects.",
    tech: ["MongoDB", "Express.js", "React", "Node.js", "REST API"]
  },
  {
    date: "2024 — Present",
    role: "Active IEEE Member",
    company: "IEEE Student Branch, SUAS",
    desc: "Participating in technical events, workshops, and hackathons. Contributing to the student tech community and exploring cutting-edge research domains.",
    tech: ["Leadership", "Networking", "Technical Events"]
  },
  {
    date: "2024 — Present",
    role: "BTech CS Student & Builder",
    company: "Symbiosis University of Applied Sciences",
    desc: "Building projects, exploring distributed systems, mobile development with Flutter, and diving deep into Data Science and Machine Learning fundamentals.",
    tech: ["Flutter", "Python", "Distributed Systems", "ML"]
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-16 fade-in-up">
          <Badge variant="outline" className="mb-4 border-primary/30 bg-primary/5">Career</Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl gradient-text">Experience</h2>
          <p className="mt-4 text-muted-foreground max-w-[700px]">
            Professional journey and learning experiences
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto pl-8 space-y-12">
          {/* Glowing timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/50 via-secondary/30 to-primary/10" />

          {experiences.map((exp, index) => (
            <div key={index} className={`relative fade-in-left delay-${(index + 1) * 200}`}>
              {/* Timeline dot with glow */}
              <div className="absolute -left-[33px] top-1.5">
                <div className="h-4 w-4 rounded-full bg-primary border-4 border-background shadow-[0_0_12px_hsl(263,70%,50%,0.5)]" />
              </div>
              
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div className="text-sm font-bold text-primary uppercase tracking-widest">{exp.date}</div>
                  <div className="text-xl font-bold tracking-tight">{exp.company}</div>
                </div>

                <Card className="border border-primary/10 bg-background/50 backdrop-blur-sm shadow-sm hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-0.5 neon-border">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold mb-3 gradient-text-static inline-block">{exp.role}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{exp.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((t) => (
                        <Badge key={t} variant="outline" className="font-semibold border-primary/20 hover:border-primary/40 transition-colors">
                          {t}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
