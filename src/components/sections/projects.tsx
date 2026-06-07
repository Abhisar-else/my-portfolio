import Link from "next/link";
import { ExternalLink } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const projects = [
  {
    icon: "📱",
    title: "Survey Field App",
    desc: "A mobile-first distributed survey platform built with Flutter. Features offline-first sync, conflict resolution, and safe concurrent writes with a Node.js/Express backend.",
    tags: ["Flutter", "Node.js", "MySQL", "SQLite", "JWT"],
    lang: "JavaScript",
    langColor: "bg-yellow-400",
    github: "https://github.com/Abhisar-else/feild_survey_app"
  },
  {
    icon: "⚔️",
    title: "IdleQuest RPG",
    desc: "An idle RPG game with a .NET 8 backend. Features character progression, quest systems, and real-time game mechanics with a modern C# architecture.",
    tags: [".NET 8", "C#", "Game Dev", "REST API"],
    lang: "C#",
    langColor: "bg-purple-500",
    github: "https://github.com/Abhisar-else/Idlequest",
    stars: 1
  },
  {
    icon: "📊",
    title: "Job Market Analyzer",
    desc: "A Python-based analytical tool that processes and visualizes job market data to identify trends, in-demand skills, and salary insights for job seekers.",
    tags: ["Python", "Data Analysis", "Pandas", "Visualization"],
    lang: "Python",
    langColor: "bg-blue-500",
    github: "https://github.com/Abhisar-else/Job_Market_Analyizer-"
  },
  {
    icon: "🚀",
    title: "UptoSkills Project",
    desc: "Web development project built during the UptoSkills internship. Full-stack web application with modern JavaScript and responsive design principles.",
    tags: ["JavaScript", "HTML/CSS", "Full-Stack", "Responsive"],
    lang: "JavaScript",
    langColor: "bg-yellow-400",
    github: "https://github.com/Abhisar-else/uptoskills-project-"
  }
];

const GitHubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
);

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-muted/30">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-16">
          <Badge variant="outline" className="mb-4">Portfolio</Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Featured Projects</h2>
          <p className="mt-4 text-muted-foreground max-w-[700px]">
            A selection of projects I&apos;ve built and contributed to
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card key={project.title} className="flex flex-col h-full border-none shadow-sm bg-background/50 backdrop-blur-sm hover:shadow-md hover:shadow-primary/20 transition-all hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <div className="text-4xl">{project.icon}</div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon" asChild className="h-9 w-9 rounded-full">
                      <Link href={project.github} target="_blank" aria-label="GitHub Repository">
                        <GitHubIcon />
                      </Link>
                    </Button>
                    <Button variant="ghost" size="icon" asChild className="h-9 w-9 rounded-full">
                      <Link href={project.github} target="_blank" aria-label="Live Demo">
                        <ExternalLink className="h-5 w-5" />
                      </Link>
                    </Button>
                  </div>
                </div>
                <CardTitle className="text-2xl font-bold tracking-tight">{project.title}</CardTitle>
                <CardDescription className="text-base line-clamp-3">{project.desc}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="font-semibold uppercase text-[10px]">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="pt-0 border-t mt-6 flex items-center justify-between py-4">
                <div className="flex items-center gap-2">
                  <div className={`h-3 w-3 rounded-full ${project.langColor}`} />
                  <span className="text-sm font-medium text-muted-foreground">{project.lang}</span>
                </div>
                {project.stars && (
                  <div className="text-sm font-medium text-muted-foreground">
                    ⭐ {project.stars}
                  </div>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
