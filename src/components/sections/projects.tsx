import Link from "next/link";
import { ExternalLink, Star } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GitHubIcon } from "@/components/icons";

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

export function Projects() {
return (
<section id="projects" className="py-24 bg-muted/30 relative">
{/* Section glow */}
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[1px] bg-gradient-to-r from-transparent via-secondary/50 to-transparent" />

<div className="container">    
    <div className="flex flex-col items-center text-center mb-16 fade-in-up">    
      <Badge variant="outline" className="mb-4 border-primary/30 bg-primary/5">Portfolio</Badge>    
      <h2 className="text-3xl font-bold tracking-tight sm:text-5xl gradient-text">Featured Projects</h2>    
      <p className="mt-4 text-muted-foreground max-w-[700px]">    
        A selection of projects I&apos;ve built and contributed to    
      </p>    
    </div>    

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">    
      {projects.map((project, i) => (    
        <Card     
          key={project.title}     
          className={`flex flex-col h-full border border-primary/10 shadow-sm bg-background/50 backdrop-blur-sm hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-2 neon-border overflow-hidden relative group fade-in-scale delay-${(i + 1) * 100}`}    
        >    
          {/* Hover gradient overlay */}    
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />    

          <CardHeader className="relative z-10">    
            <div className="flex items-start justify-between mb-2">    
              <div className="text-4xl p-2 rounded-xl bg-muted/50 group-hover:scale-110 transition-transform duration-300">{project.icon}</div>    
              <div className="flex gap-2">    
                <Button variant="ghost" size="icon" asChild className="h-9 w-9 rounded-full hover:bg-primary/10 hover:text-primary transition-colors">    
                  <Link href={project.github} target="_blank" aria-label="GitHub Repository">    
                    <GitHubIcon />    
                  </Link>    
                </Button>    
                <Button variant="ghost" size="icon" asChild className="h-9 w-9 rounded-full hover:bg-secondary/10 hover:text-secondary transition-colors">    
                  <Link href={project.github} target="_blank" aria-label="Live Demo">    
                    <ExternalLink className="h-5 w-5" />    
                  </Link>    
                </Button>    
              </div>    
            </div>    
            <CardTitle className="text-2xl font-bold tracking-tight group-hover:text-primary transition-colors">{project.title}</CardTitle>    
            <CardDescription className="text-base line-clamp-3">{project.desc}</CardDescription>    
          </CardHeader>    
          <CardContent className="flex-grow relative z-10">    
            <div className="flex flex-wrap gap-2">    
              {project.tags.map((tag) => (    
                <Badge key={tag} variant="secondary" className="font-semibold uppercase text-[10px] border border-border/50 hover:border-primary/30 transition-colors">    
                  {tag}    
                </Badge>    
              ))}    
            </div>    
          </CardContent>    
          <CardFooter className="pt-0 border-t border-primary/10 mt-6 flex items-center justify-between py-4 relative z-10">    
            <div className="flex items-center gap-2">    
              <div className={`h-3 w-3 rounded-full ${project.langColor} shadow-[0_0_6px_currentColor]`} />    
              <span className="text-sm font-medium text-muted-foreground">{project.lang}</span>    
            </div>    
            {project.stars && (    
              <div className="flex items-center gap-1 text-sm font-medium text-muted-foreground">    
                <Star className="h-3.5 w-3.5 text-yellow-400 fill-yellow-400" />    
                {project.stars}    
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
