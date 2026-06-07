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
        <div className="flex flex-col items-center text-center mb-16">
          <Badge variant="outline" className="mb-4">Career</Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Experience</h2>
          <p className="mt-4 text-muted-foreground max-w-[700px]">
            Professional journey and learning experiences
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto pl-8 border-l border-primary/20 space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              <div className="absolute -left-[41px] top-1.5 h-4 w-4 rounded-full bg-primary border-4 border-background" />
              
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div className="text-sm font-bold text-primary uppercase tracking-widest">{exp.date}</div>
                  <div className="text-xl font-bold tracking-tight">{exp.company}</div>
                </div>

                <Card className="border-none bg-background/50 backdrop-blur-sm shadow-sm hover:shadow-md hover:shadow-primary/20 transition-all">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold mb-3">{exp.role}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{exp.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((t) => (
                        <Badge key={t} variant="outline" className="font-semibold">{t}</Badge>
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
