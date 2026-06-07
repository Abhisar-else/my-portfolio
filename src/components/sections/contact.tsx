"use client";

import { Mail, Send } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thanks for reaching out! I'll get back to you soon.");
  };

  return (
    <section id="contact" className="py-24">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-16">
          <Badge variant="outline" className="mb-4">Get in Touch</Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Let&apos;s Work Together</h2>
          <p className="mt-4 text-muted-foreground max-w-[700px]">
            Open to internships, partnership opportunities, and collaborations
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <h3 className="text-3xl font-bold tracking-tight">
              Let&apos;s create something{" "}
              <span className="text-primary italic">amazing</span> together.
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I&apos;m always excited to connect with fellow developers, designers, and innovators.
              Whether you have a project idea, internship opportunity, or just want to chat about tech — drop me a message!
            </p>

            <div className="space-y-4">
              <a 
                href="mailto:abhisarsharma2006@gmail.com" 
                className="flex items-center gap-4 p-4 rounded-xl border bg-muted/30 hover:bg-muted/50 transition-colors group"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Email</div>
                  <div className="font-bold">abhisarsharma2006@gmail.com</div>
                </div>
              </a>

              <a 
                href="https://www.linkedin.com/in/abhisar-sharma-670107321/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl border bg-muted/30 hover:bg-muted/50 transition-colors group"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                  <LinkedInIcon className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">LinkedIn</div>
                  <div className="font-bold">Abhisar Sharma</div>
                </div>
              </a>

              <a 
                href="https://github.com/Abhisar-else" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl border bg-muted/30 hover:bg-muted/50 transition-colors group"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                  <GitHubIcon className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">GitHub</div>
                  <div className="font-bold">Abhisar-else</div>
                </div>
              </a>
            </div>
          </div>

          <Card className="border-none shadow-2xl bg-muted/20 backdrop-blur-sm">
            <CardContent className="p-8 md:p-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Your Name</Label>
                  <Input id="name" placeholder="John Doe" required className="bg-background" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Your Email</Label>
                  <Input id="email" type="email" placeholder="john@example.com" required className="bg-background" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell me about your project or opportunity..." 
                    required 
                    className="min-h-[150px] bg-background resize-none" 
                  />
                </div>
                <Button type="submit" className="w-full h-12 text-lg font-bold group">
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
