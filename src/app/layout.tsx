import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-sans" 
});

export const metadata: Metadata = {
  title: "Abhisar Sharma | Portfolio",
  description: "Aspiring Data Scientist and MERN Stack Developer building impactful digital experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable
        )}
      >
        {/* Animated background orbs */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] h-[40%] w-[40%] rounded-full bg-primary/20 blur-[120px] float" />
          <div className="absolute bottom-[10%] right-[-5%] h-[35%] w-[35%] rounded-full bg-secondary/10 blur-[100px] float-delayed" />
          <div className="absolute top-[20%] right-[10%] h-[25%] w-[25%] rounded-full bg-primary/10 blur-[80px] float" />
          {/* Extra subtle orb for depth */}
          <div className="absolute bottom-[40%] left-[20%] h-[20%] w-[20%] rounded-full bg-secondary/5 blur-[100px] float-delayed" />
        </div>

        {/* Subtle grid overlay */}
        <div 
          className="fixed inset-0 -z-10 opacity-[0.015]"
          style={{
            backgroundImage: `linear-gradient(hsl(263 70% 50%) 1px, transparent 1px), linear-gradient(90deg, hsl(263 70% 50%) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />

        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
