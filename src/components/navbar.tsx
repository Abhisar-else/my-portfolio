"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, Sparkles } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-500",
        isScrolled
          ? "glass py-3 shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
          : "bg-transparent py-6"
      )}
    >
      <div className="container flex items-center justify-between">
        {/* Logo / Brand */}
        <Link href="#hero" className="flex items-center gap-2 group">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-secondary text-xs font-bold text-primary-foreground group-hover:shadow-[0_0_15px_hsl(263,70%,50%,0.4)] transition-all duration-300">
            AS
          </div>
          <span className="font-bold text-lg hidden sm:inline-block group-hover:text-primary transition-colors">
            Abhisar
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="relative text-sm font-medium transition-colors hover:text-primary group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
          <Button asChild variant="default" size="sm" className="neon-glow group">
            <Link href="#contact">
              <Sparkles className="mr-1.5 h-3.5 w-3.5 group-hover:rotate-12 transition-transform" />
              Let&apos;s Talk
            </Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Toggle menu" className="hover:bg-primary/10">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="flex flex-col gap-8 pt-12 bg-background/95 backdrop-blur-xl border-primary/20">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-lg font-semibold transition-colors hover:text-primary hover:translate-x-1 transform"
                >
                  {item.label}
                </Link>
              ))}
              <Button asChild variant="default" className="mt-4 neon-glow">
                <Link href="#contact">
                  <Sparkles className="mr-1.5 h-4 w-4" />
                  Let&apos;s Talk
                </Link>
              </Button>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
