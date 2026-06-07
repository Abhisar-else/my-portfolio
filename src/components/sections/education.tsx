import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export function Education() {
  return (
    <section id="education" className="py-24">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-16">
          <Badge variant="outline" className="mb-4">Education</Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Academic Background</h2>
          <p className="mt-4 text-muted-foreground max-w-[700px]">
            Where I&apos;m building my foundation in Computer Science
          </p>
        </div>

        <Card className="max-w-3xl mx-auto border-none bg-background/50 backdrop-blur-sm shadow-sm hover:shadow-md hover:shadow-primary/20 transition-all">
          <CardContent className="p-8 md:p-12">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-4xl">
                🎓
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-bold tracking-tight">Bachelor of Technology</h3>
                  <div className="text-lg font-semibold text-primary">Symbiosis University of Applied Sciences</div>
                </div>
                
                <div className="text-sm font-bold uppercase tracking-widest text-muted-foreground">2024 — 2028 (Expected)</div>
                
                <p className="text-muted-foreground text-lg">
                  Computer Science & Information Technology • IV Semester
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                  <div className="flex items-center gap-2 text-sm font-medium">
                    <span className="text-xl">📍</span> Indore, MP
                  </div>
                  <div className="flex items-center gap-2 text-sm font-medium">
                    <span className="text-xl">🏅</span> IEEE Member
                  </div>
                  <div className="flex items-center gap-2 text-sm font-medium">
                    <span className="text-xl">🔬</span> KNIME Certified
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
