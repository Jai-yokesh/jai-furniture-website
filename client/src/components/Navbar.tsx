import { Link } from "wouter";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border/40 shadow-sm">
      <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-serif text-2xl md:text-3xl font-bold text-primary tracking-tight hover:opacity-90 transition-opacity cursor-pointer">
          Jai Furniture
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { name: "Home", id: "root" }, // Assuming top of page
            { name: "Collections", id: "collections" },
            { name: "About", id: "about" },
            { name: "Services", id: "services" },
            { name: "Contact", id: "contact" }
          ].map((item) => (
            <button 
              key={item.name} 
              onClick={() => scrollToSection(item.id === 'root' ? 'root' : item.id)}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors uppercase tracking-wide bg-transparent border-none cursor-pointer"
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4 md:gap-6">
          <a href="tel:+919597464680" className="hidden lg:flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary transition-colors">
            <Phone className="h-4 w-4 text-primary" />
            <span>+91 95974 64680</span>
          </a>
          <Button 
            onClick={() => scrollToSection('contact')}
            className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 px-6 font-medium"
          >
            GET QUOTE
          </Button>
        </div>
      </div>
    </nav>
  );
}
