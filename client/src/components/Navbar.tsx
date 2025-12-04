import { Link } from "wouter";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border/40 shadow-sm">
      <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-serif text-2xl md:text-3xl font-bold text-primary tracking-tight hover:opacity-90 transition-opacity">
          Jai Furniture
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {["Home", "Collections", "About", "Services", "Contact"].map((item) => (
            <Link 
              key={item} 
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors uppercase tracking-wide"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4 md:gap-6">
          <a href="tel:+919876543210" className="hidden lg:flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary transition-colors">
            <Phone className="h-4 w-4 text-primary" />
            <span>+91 98765 43210</span>
          </a>
          <Button className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 px-6 font-medium">
            GET QUOTE
          </Button>
        </div>
      </div>
    </nav>
  );
}
