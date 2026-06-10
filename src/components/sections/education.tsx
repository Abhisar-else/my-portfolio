import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export function Education() {
  return (
    <section id="education" className="py-24">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-16 fade-in-up">
          <Badge variant="outline" className="mb-4 border-primary/30 bg-primary/5">Education</Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl gradient-text">Academic Background</h2>
          <p className="mt-4 text-muted-foreground max-w-[700px]">
            Where I&apos;m building my foundation in Computer Science
          </p>
        </div>

        <Card className="max-w-3xl mx-auto border border-primary/10 bg-background/50 backdrop-blur-xl shadow-sm hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 neon-border neon-glow-hover overflow-hidden relative group fade-in-scale">
          {/* Corner accents */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/5 to-transparent pointer-events-none group-hover:from-primary/10 transition-all duration-500" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-secondary/5 to-transparent pointer-events-none group-hover:from-secondary/10 transition-all duration-500" />

          <CardContent className="p-8 md:p-12 relative z-10">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 text-4xl border border-primary/10 group-hover:scale-105 transition-transform duration-300">
                🎓
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-bold tracking-tight">Bachelor of Technology</h3>
                  <div className="text-lg font-semibold gradient-text-static">Symbiosis University of Applied Sciences</div>
                </div>
                
                <div className="text-sm font-bold uppercase tracking-widest text-muted-foreground">2024 — 2028 (Expected)</div>
                
                <p className="text-muted-foreground text-lg">
                  Computer Science & Information Technology • IV Semester
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                  {[
                    { icon: "📍", text: "Indore, MP" },
                    { icon: "🏅", text: "IEEE Member" },
                    { icon: "🔬", text: "KNIME Certified" },
                  ].map((item) => (
                    <div key={item.text} className="flex items-center gap-2 text-sm font-medium p-2 rounded-lg bg-primary/5 border border-primary/10 hover:border-primary/20 transition-colors">
                      <span className="text-xl">{item.icon}</span> {item.text}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
