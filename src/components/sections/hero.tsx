"use client";

import Link from "next/link";
import { ArrowDown, Mail, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useTypingEffect } from "@/hooks/use-typing-effect";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";

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
      {/* Decorative radial glow behind hero */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-primary/5 blur-[150px] pointer-events-none" />

      <div className="container relative z-10 flex flex-col items-center gap-12 text-center lg:flex-row lg:text-left">
        <div className="flex-1 space-y-6 fade-in-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-sm font-medium neon-glow-hover backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400"></span>
            </span>
            Open to Opportunities
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl md:text-7xl">
            Hi, I&apos;m{" "}
            <span className="gradient-text">Abhisar Sharma</span>
          </h1>

          <p className="text-xl font-medium text-muted-foreground sm:text-2xl">
            <span className="text-foreground">{typedText}</span>
            <span className="ml-1 inline-block h-7 w-[3px] animate-pulse bg-primary rounded-full align-middle"></span>
          </p>

          <p className="max-w-[600px] text-lg text-muted-foreground lg:mx-0 mx-auto leading-relaxed">
            Aspiring <strong className="text-foreground">Data Scientist</strong> and{" "}
            <strong className="text-foreground">BTech CSIT</strong> student at
            Symbiosis University, with a strong background as a{" "}
            <strong className="text-foreground">MERN Stack Developer</strong>.
            Passionate about leveraging data-driven insights and building robust web applications.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 lg:justify-start fade-in-up delay-200">
            <Button asChild size="lg" className="neon-glow group">
              <Link href="#projects">
                View Projects <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-0.5 transition-transform" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="neon-glow-hover group border-primary/30">
              <Link href="https://github.com/Abhisar-else" target="_blank">
                <GitHubIcon className="mr-2 group-hover:scale-110 transition-transform" /> GitHub
              </Link>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-6 pt-4 lg:justify-start fade-in-up delay-300">
            <Link href="https://github.com/Abhisar-else" target="_blank" className="text-muted-foreground transition-all hover:text-primary hover:scale-110 hover:drop-shadow-[0_0_8px_hsl(263,70%,50%,0.5)]">
              <GitHubIcon />
            </Link>
            <Link href="https://www.linkedin.com/in/abhisar-sharma-670107321/" target="_blank" className="text-muted-foreground transition-all hover:text-primary hover:scale-110 hover:drop-shadow-[0_0_8px_hsl(263,70%,50%,0.5)]">
              <LinkedInIcon />
            </Link>
            <Link href="mailto:abhisarsharma2006@gmail.com" className="text-muted-foreground transition-all hover:text-primary hover:scale-110 hover:drop-shadow-[0_0_8px_hsl(263,70%,50%,0.5)]">
              <Mail className="h-5 w-5" />
            </Link>
          </div>
        </div>

        <div className="flex-1 lg:max-w-md fade-in-right delay-300">
          <Card className="border border-primary/20 bg-muted/30 backdrop-blur-xl neon-glow-hover neon-border overflow-hidden relative">
            {/* Shimmer overlay */}
            <div className="absolute inset-0 shimmer pointer-events-none" />
            <CardContent className="p-8 relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary text-2xl font-bold text-primary-foreground shadow-lg neon-glow">
                  AS
                </div>
                <div>
                  <div className="text-xl font-bold">Abhisar Sharma</div>
                  <div className="text-sm text-muted-foreground flex items-center gap-1">
                    <Sparkles className="h-3 w-3 text-secondary" />
                    Data Science • MERN Stack
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-8">
                {[
                  { value: "20+", label: "Repos" },
                  { value: "4+", label: "Projects" },
                  { value: "6+", label: "Certs" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center p-3 rounded-xl bg-primary/5 border border-primary/10">
                    <div className="text-2xl font-bold gradient-text-static">{stat.value}</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                {["Python", "MERN Stack", "ML", "Pandas", "React", "SQL"].map((t) => (
                  <Badge key={t} variant="secondary" className="border border-secondary/20 bg-secondary/10 text-secondary hover:bg-secondary/20 transition-colors">
                    {t}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
