"use client";

import { Mail, Send, ArrowUpRight } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const contactLinks = [
  {
    href: "mailto:abhisarsharma2006@gmail.com",
    icon: <Mail className="h-6 w-6" />,
    label: "Email",
    value: "abhisarsharma2006@gmail.com",
    external: false,
  },
  {
    href: "https://www.linkedin.com/in/abhisar-sharma-670107321/",
    icon: <LinkedInIcon className="h-6 w-6" />,
    label: "LinkedIn",
    value: "Abhisar Sharma",
    external: true,
  },
  {
    href: "https://github.com/Abhisar-else",
    icon: <GitHubIcon className="h-6 w-6" />,
    label: "GitHub",
    value: "Abhisar-else",
    external: true,
  },
];

export function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thanks for reaching out! I'll get back to you soon.");
  };

  return (
    <section id="contact" className="py-24 relative">
      {/* Section glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="container">
        <div className="flex flex-col items-center text-center mb-16 fade-in-up">
          <Badge variant="outline" className="mb-4 border-primary/30 bg-primary/5">Get in Touch</Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl gradient-text">Let&apos;s Work Together</h2>
          <p className="mt-4 text-muted-foreground max-w-[700px]">
            Open to internships, partnership opportunities, and collaborations
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8 fade-in-left">
            <h3 className="text-3xl font-bold tracking-tight">
              Let&apos;s create something{" "}
              <span className="gradient-text-static italic">amazing</span> together.
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I&apos;m always excited to connect with fellow developers, designers, and innovators.
              Whether you have a project idea, internship opportunity, or just want to chat about tech — drop me a message!
            </p>

            <div className="space-y-4">
              {contactLinks.map((link, i) => (
                <a 
                  key={link.label}
                  href={link.href} 
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className={`flex items-center gap-4 p-4 rounded-xl border border-primary/10 bg-muted/30 hover:bg-primary/5 hover:border-primary/30 transition-all duration-300 group neon-border fade-in-up delay-${(i + 1) * 100}`}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 text-primary group-hover:scale-110 group-hover:shadow-[0_0_15px_hsl(263,70%,50%,0.3)] transition-all duration-300">
                    {link.icon}
                  </div>
                  <div className="flex-1">
                    <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{link.label}</div>
                    <div className="font-bold">{link.value}</div>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>
              ))}
            </div>
          </div>

          <Card className="border border-primary/10 shadow-2xl bg-muted/20 backdrop-blur-xl neon-glow-hover overflow-hidden relative fade-in-right">
            {/* Gradient accent line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary via-secondary to-primary" />

            <CardContent className="p-8 md:p-10 relative z-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-semibold">Your Name</Label>
                  <Input 
                    id="name" 
                    placeholder="John Doe" 
                    required 
                    className="bg-background/50 border-primary/10 focus:border-primary/40 focus:ring-primary/20 transition-colors" 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-semibold">Your Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="john@example.com" 
                    required 
                    className="bg-background/50 border-primary/10 focus:border-primary/40 focus:ring-primary/20 transition-colors" 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm font-semibold">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell me about your project or opportunity..." 
                    required 
                    className="min-h-[150px] bg-background/50 border-primary/10 focus:border-primary/40 focus:ring-primary/20 resize-none transition-colors" 
                  />
                </div>
                <Button type="submit" className="w-full h-12 text-lg font-bold group neon-glow">
                  Send Message 
                  <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
