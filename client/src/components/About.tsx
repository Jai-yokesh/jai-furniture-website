import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import imgArtisan from "@assets/generated_images/artisan_working_on_wood_inlay.png";
import imgDetail from "@assets/generated_images/living_room_furniture_collection.png";

export default function About() {
  return (
    <section id="about" className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Image Composition */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img 
                src={imgArtisan} 
                alt="Artisan Working" 
                className="rounded-2xl shadow-lg w-full h-64 object-cover translate-y-8"
              />
              <div className="space-y-4">
                <div className="bg-primary p-6 rounded-2xl text-primary-foreground flex flex-col justify-center h-40 shadow-lg">
                  <span className="text-5xl font-serif font-bold">25</span>
                  <span className="text-sm font-medium uppercase tracking-wider opacity-80">Years of Craft</span>
                </div>
                <img 
                  src={imgDetail} 
                  alt="Furniture Detail" 
                  className="rounded-2xl shadow-lg w-full h-64 object-cover"
                />
              </div>
            </div>
            {/* Decor element */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-secondary/30 rounded-full blur-3xl opacity-50" />
          </div>

          {/* Right: Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-primary font-bold tracking-widest text-xs uppercase">About Us</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground leading-tight">
                Preserving the Art of <br/>
                <span className="text-primary italic">Tile-Inlaid Furniture</span>
              </h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              At Jai Furniture, we blend the durability of 100% solid Teakwood with the vibrant heritage of handmade Athangudi tiles. Each piece is not just furniture, but a canvas that tells a story of tradition, skill, and timeless beauty.
            </p>

            <ul className="space-y-4">
              {[
                "100% solid seasoned Teakwood",
                "Handmade Athangudi tile inlays",
                "Traditional craftsmanship",
                "50-year warranty on wood & structure"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4 text-accent" />
                  </div>
                  <span className="font-medium text-foreground/80">{item}</span>
                </li>
              ))}
            </ul>

            <Button size="lg" className="rounded-full px-8">
              Learn Our Story
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
}
