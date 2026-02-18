import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

// Reuse images from collections - in a real app these would come from a database
import imgLiving from "@assets/product-image-2084-1_1764891712166.jpg";
import imgDining from "@assets/11_fae76192-38fb-46ed-8a47-041ecd14c53f_1764891712165.webp";
import imgStorage from "@assets/61yWeMBW59L._SX679__1764891723852.jpg";
import imgDressing from "@assets/honey-746x522_1764891723853.jpg";
import imgBedroom from "@assets/12_69d58778-0331-40d1-be1f-ecf0a08e5014_1764891712166.webp";
import imgDecor from "@assets/01-746x522_(1)_1764891723849.jpg";
import imgOutdoor from "@assets/product-image-2084-5_1764891712167.jpg";
import imgTvUnit from "@assets/honey-look-1-746x522_1764891723853.jpg";

const categoryImages: Record<string, string> = {
  "Living Room": imgLiving,
  "Dining": imgDining,
  "Storage": imgStorage,
  "Dressing": imgDressing,
  "Bedroom": imgBedroom,
  "Home Decor": imgDecor,
  "Outdoor": imgOutdoor,
  "TV Units": imgTvUnit,
};

// Mock data generator
const generateProducts = (category: string) => {
  const baseImage = categoryImages[category] || imgLiving;
  return Array.from({ length: 8 }).map((_, i) => ({
    id: i + 1,
    name: `${category} Design ${i + 1}`,
    image: baseImage,
    description: `Premium handcrafted ${category.toLowerCase()} piece with intricate tile inlay work.`
  }));
};

export default function CategoryPage({ params }: { params: { category: string } }) {
  const categoryName = decodeURIComponent(params.category);
  const products = generateProducts(categoryName);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4 md:px-6">
          <Link href="/">
            <a className="inline-flex items-center text-primary-foreground/80 hover:text-white mb-6 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
            </a>
          </Link>
          <h1 className="text-4xl md:text-5xl font-serif font-bold">{categoryName} Collection</h1>
          <p className="mt-4 text-lg opacity-90 max-w-2xl">
            Explore our exclusive range of {categoryName.toLowerCase()} furniture, featuring traditional craftsmanship and modern design.
          </p>
        </div>
      </div>

      {/* Product Grid */}
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group bg-card rounded-xl overflow-hidden border border-border hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-square overflow-hidden bg-muted">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-serif font-bold text-foreground mb-2">{product.name}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2">{product.description}</p>
                <Button className="w-full mt-4" variant="outline">View Details</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
