"use client";

import Link from "next/link";
import { ArrowDown, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useTypingEffect } from "@/hooks/use-typing-effect";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const GitHubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
);

const LinkedInIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

export function Hero() {
  const typedText = useTypingEffect([
    "Aspiring Data Scientist",
    "MERN Stack Developer",
    "Machine Learning Explorer",
    "Data Analyst",
    "Open Source Contributor",
  ]);

  return (
    <section id="hero" className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden py-32 md:py-48">
      {/* Background elements would go here if needed, keeping it minimal as per shadcn rules */}
      
      <div className="container relative z-10 flex flex-col items-center gap-12 text-center lg:flex-row lg:text-left">
        <div className="flex-1 space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border bg-background px-3 py-1 text-sm font-medium">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
            </span>
            Open to Opportunities
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl md:text-7xl">
            Hi, I&apos;m <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Abhisar Sharma</span>
          </h1>

          <p className="text-xl font-medium text-muted-foreground sm:text-2xl">
            <span className="text-foreground">{typedText}</span>
            <span className="ml-1 animate-pulse border-r-2 border-primary"></span>
          </p>

          <p className="max-w-[600px] text-lg text-muted-foreground lg:mx-0 mx-auto">
            Aspiring <strong>Data Scientist</strong> and <strong>BTech CSIT</strong> student at
            Symbiosis University, with a strong background as a <strong>MERN Stack Developer</strong>.
            Passionate about leveraging data-driven insights and building robust web applications.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            <Button asChild size="lg" className="shadow-[0_0_20px_rgba(124,58,237,0.3)]">
              <Link href="#projects">
                View Projects <ArrowDown className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="https://github.com/Abhisar-else" target="_blank">
                <GitHubIcon className="mr-2" /> GitHub
              </Link>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-6 pt-4 lg:justify-start">
            <Link href="https://github.com/Abhisar-else" target="_blank" className="text-muted-foreground transition-colors hover:text-primary">
              <GitHubIcon />
            </Link>
            <Link href="https://www.linkedin.com/in/abhisar-sharma-670107321/" target="_blank" className="text-muted-foreground transition-colors hover:text-primary">
              <LinkedInIcon />
            </Link>
            <Link href="mailto:abhisarsharma2006@gmail.com" className="text-muted-foreground transition-colors hover:text-primary">
              <Mail className="h-5 w-5" />
            </Link>
          </div>
        </div>

        <div className="flex-1 lg:max-w-md">
          <Card className="border-none bg-muted/50 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-2xl font-bold text-primary-foreground">
                  AS
                </div>
                <div>
                  <div className="text-xl font-bold">Abhisar Sharma</div>
                  <div className="text-sm text-muted-foreground">Data Science • MERN Stack</div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold">20+</div>
                  <div className="text-xs text-muted-foreground uppercase">Repos</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">4+</div>
                  <div className="text-xs text-muted-foreground uppercase">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">6+</div>
                  <div className="text-xs text-muted-foreground uppercase">Certs</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {["Python", "MERN Stack", "ML", "Pandas", "React", "SQL"].map((t) => (
                  <Badge key={t} variant="secondary">{t}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
