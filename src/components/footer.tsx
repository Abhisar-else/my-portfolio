import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t py-12 bg-muted/30">
      <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} <span className="font-semibold text-foreground">Abhisar Sharma</span>. Built with React & passion.
        </p>
        <div className="flex items-center gap-6 text-sm">
          <Link href="https://github.com/Abhisar-else" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            GitHub
          </Link>
          <Link href="https://www.linkedin.com/in/abhisar-sharma-670107321/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            LinkedIn
          </Link>
          <Link href="mailto:abhisarsharma2006@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
            Email
          </Link>
        </div>
      </div>
    </footer>
  );
}
