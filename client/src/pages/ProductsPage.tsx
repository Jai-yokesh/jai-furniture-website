import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

import imgLiving from "@assets/product-image-2084-1_1764891712166.jpg";
import imgDining from "@assets/11_fae76192-38fb-46ed-8a47-041ecd14c53f_1764891712165.webp";
import imgStorage from "@assets/61yWeMBW59L._SX679__1764891723852.jpg";
import imgDressing from "@assets/honey-746x522_1764891723853.jpg";
import imgBedroom from "@assets/12_69d58778-0331-40d1-be1f-ecf0a08e5014_1764891712166.webp";
import imgDecor from "@assets/01-746x522_(1)_1764891723849.jpg";

const allProducts = [
  { id: 1, name: "Royal Living Set", category: "Living Room", image: imgLiving },
  { id: 2, name: "Heritage Dining Table", category: "Dining", image: imgDining },
  { id: 3, name: "Antique Sideboard", category: "Storage", image: imgStorage },
  { id: 4, name: "Elegant Vanity", category: "Dressing", image: imgDressing },
  { id: 5, name: "Maharaja Bed", category: "Bedroom", image: imgBedroom },
  { id: 6, name: "Wall Mirror Frame", category: "Home Decor", image: imgDecor },
  // Duplicates for demo purposes
  { id: 7, name: "Classic Sofa", category: "Living Room", image: imgLiving },
  { id: 8, name: "Family Dining Set", category: "Dining", image: imgDining },
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-secondary/30 py-12 border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <Link href="/">
            <a className="inline-flex items-center text-muted-foreground hover:text-primary mb-6 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
            </a>
          </Link>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground">All Products</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
            Browse our complete catalog of premium handcrafted furniture.
          </p>
        </div>
      </div>

      {/* Product Grid */}
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {allProducts.map((product) => (
            <div key={product.id} className="group bg-card rounded-xl overflow-hidden border border-border hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <p className="text-xs font-bold text-primary uppercase tracking-wider mb-2">{product.category}</p>
                <h3 className="text-lg font-serif font-bold text-foreground mb-4">{product.name}</h3>
                <Button className="w-full" variant="outline">View Details</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
