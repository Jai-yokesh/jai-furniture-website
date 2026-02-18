import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

import imgSofa from "@assets/generated_images/convertible_sofa_cum_bed_product_shot.png";
import imgWardrobe from "@assets/generated_images/tile_inlaid_wardrobe_product_shot.png";
import imgDressing from "@assets/generated_images/dressing_table_furniture_collection.png"; // Reusing for product

const products = [
  {
    id: 1,
    name: "Convertible Sofa Cum Bed",
    category: "Living Room",
    price: "₹45,999",
    image: imgSofa,
    tag: "Bestseller"
  },
  {
    id: 2,
    name: "Heritage Dressing Table",
    category: "Bedroom",
    price: "₹38,500",
    image: imgDressing,
    tag: "New Arrival"
  },
  {
    id: 3,
    name: "Tile Wardrobe (2 Door)",
    category: "Storage",
    price: "₹52,000",
    image: imgWardrobe,
    tag: "Popular"
  }
];

export default function FeaturedProducts() {
  const { toast } = useToast();

  const handleAddToCart = (productName: string) => {
    toast({
      title: "Added to Cart",
      description: `${productName} has been added to your cart.`,
    });
  };

  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-2">
            <span className="text-primary font-bold tracking-widest text-xs uppercase">Featured Products</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">Customer Favorites</h2>
          </div>
          <Link href="/products">
            <a className="text-primary hover:text-primary/80 font-semibold group inline-flex items-center">
              View All Products <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 border border-border/50">
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary uppercase tracking-wide shadow-sm">
                  {product.tag}
                </div>
              </div>
              
              <div className="p-6 space-y-3">
                <p className="text-sm text-muted-foreground font-medium">{product.category}</p>
                <h3 className="text-xl font-serif font-bold text-foreground group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                {/* Removed Price and Add to Cart as requested */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
