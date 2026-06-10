import Link from "next/link";
import { Heart } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";

export function Footer() {
  return (
    <footer className="border-t border-primary/10 py-12 bg-muted/20 relative">
      {/* Top glow line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-muted-foreground text-sm flex items-center gap-1">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-foreground">Abhisar Sharma</span>
          . Built with React &
          <Heart className="h-3.5 w-3.5 text-destructive fill-destructive inline-block animate-pulse" />
        </p>
        <div className="flex items-center gap-6">
          <Link 
            href="https://github.com/Abhisar-else" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-muted-foreground hover:text-primary transition-all hover:scale-110 hover:drop-shadow-[0_0_6px_hsl(263,70%,50%,0.4)]"
            aria-label="GitHub"
          >
            <GitHubIcon className="h-5 w-5" />
          </Link>
          <Link 
            href="https://www.linkedin.com/in/abhisar-sharma-670107321/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-muted-foreground hover:text-primary transition-all hover:scale-110 hover:drop-shadow-[0_0_6px_hsl(263,70%,50%,0.4)]"
            aria-label="LinkedIn"
          >
            <LinkedInIcon className="h-5 w-5" />
          </Link>
          <Link 
            href="mailto:abhisarsharma2006@gmail.com" 
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            Email
          </Link>
        </div>
      </div>
    </footer>
  );
}
