import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroBg from "@assets/generated_images/blurred_luxury_wardrobe_background_for_hero_section.png";

export default function Hero() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Luxury Furniture Background" 
          className="w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-transparent" />
      </div>

      <div className="container relative z-10 px-4 md:px-6 pt-20">
        <div className="max-w-3xl space-y-8">
          {/* Animated Title */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-2"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl leading-tight">
              <span className="block font-serif font-light text-foreground">Traditional</span>
              <span className="block font-serif italic text-primary/80">Tile-Inlaid</span>
              <span className="block font-serif font-bold text-accent">Furniture</span>
            </h1>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed"
          >
            Experience the timeless elegance of hand-painted ceramic tiles embedded in premium sheesham wood. A heritage of craftsmanship for your modern home.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <Button 
              size="lg" 
              className="rounded-full text-base px-8 py-6 shadow-lg shadow-primary/20"
              onClick={() => scrollTo('collections')}
            >
              Explore Collections
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="rounded-full text-base px-8 py-6 border-primary/20 hover:bg-primary/5"
              onClick={() => scrollTo('contact')}
            >
              Visit Showroom
            </Button>
          </motion.div>
        </div>

        {/* Stats Row */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-24 pt-8 border-t border-primary/10 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl"
        >
          {[
            { label: "Years of Craft", value: "25+" },
            { label: "Happy Families", value: "5000+" },
            { label: "Sheesham Wood", value: "100%" },
            { label: "Warranty", value: "10 Years" },
          ].map((stat, index) => (
            <div key={index}>
              <p className="text-2xl md:text-3xl font-serif font-bold text-primary">{stat.value}</p>
              <p className="text-sm text-muted-foreground uppercase tracking-wider mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
