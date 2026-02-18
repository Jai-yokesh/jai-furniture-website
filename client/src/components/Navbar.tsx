import { Link, useLocation } from "wouter";
import { Menu, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Navbar() {
  const [location, setLocation] = useLocation();

  const scrollToSection = (id: string) => {
    // If not on home page, navigate to home first
    if (location !== "/") {
      setLocation("/");

      setTimeout(() => {
        if (id === "top") {
          window.scrollTo({ top: 0, behavior: "smooth" });
          return;
        }

        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: "smooth" });
      }, 250);

      return;
    }

    // If already on home page
    if (id === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const navItems = [
    { name: "Home", id: "top" },
    { name: "Collections", id: "collections" },
    { name: "About", id: "about" },
    { name: "Services", id: "services" },
    { name: "Contact", id: "contact" },
  ] as const;

  return (
    <nav className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border/40 shadow-sm">
      <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <Link
          href="/"
          className="font-[Playfair_Display] text-3xl md:text-4xl font-medium text-primary tracking-tight hover:opacity-90 transition-opacity cursor-pointer"
        >
          Jai Furniture
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.id)}
              className="font-[Playfair_Display] text-base font-medium tracking-normal text-muted-foreground hover:text-primary transition-colors bg-transparent border-none cursor-pointer"
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4 md:gap-6">
          
          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <button
                aria-label="Open menu"
                className="md:hidden inline-flex items-center justify-center rounded-full border border-border/60 h-11 w-11 hover:bg-muted/40"
              >
                <Menu className="h-5 w-5" />
              </button>
            </SheetTrigger>

            <SheetContent side="right" className="p-0">
              <div className="p-6 pt-14">
                <div className="font-[Playfair_Display] text-2xl font-medium text-primary">
                  Jai Furniture
                </div>

                <div className="mt-6 grid gap-2">
                  {navItems.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => scrollToSection(item.id)}
                      className="w-full text-left rounded-xl px-4 py-3 text-base font-[Playfair_Display] text-foreground hover:bg-muted/50"
                    >
                      {item.name}
                    </button>
                  ))}
                </div>

                <div className="mt-6 space-y-3">
                  <a
                    href="tel:+919597464680"
                    className="flex items-center gap-2 rounded-xl border border-border/60 px-4 py-3 text-sm font-semibold"
                  >
                    <Phone className="h-4 w-4 text-primary" />
                    <span>+91 95974 64680</span>
                  </a>

                  <Button
                    onClick={() => scrollToSection("contact")}
                    className="w-full rounded-xl"
                  >
                    Get Quote
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>

          {/* Desktop Phone */}
          <a
            href="tel:+919597464680"
            className="hidden lg:flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary transition-colors"
          >
            <Phone className="h-4 w-4 text-primary" />
            <span>+91 95974 64680</span>
          </a>

          {/* Desktop Button */}
          <Button
            onClick={() => scrollToSection("contact")}
            className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 px-6 font-medium"
          >
            GET QUOTE
          </Button>
        </div>
      </div>
    </nav>
  );
}
