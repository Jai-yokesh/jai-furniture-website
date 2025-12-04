import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

// Real images from attached assets
import imgLiving from "@assets/product-image-2084-1_1764891712166.jpg";
import imgDining from "@assets/11_fae76192-38fb-46ed-8a47-041ecd14c53f_1764891712165.webp";
import imgStorage from "@assets/61yWeMBW59L._SX679__1764891723852.jpg";
import imgDressing from "@assets/honey-746x522_1764891723853.jpg";
import imgBedroom from "@assets/12_69d58778-0331-40d1-be1f-ecf0a08e5014_1764891712166.webp";
import imgDecor from "@assets/01-746x522_(1)_1764891723849.jpg";
import imgOutdoor from "@assets/product-image-2084-5_1764891712167.jpg";
import imgTvUnit from "@assets/honey-look-1-746x522_1764891723853.jpg";

const collections = [
  { title: "Living Room", count: "45+ designs", image: imgLiving, size: "col-span-1 md:col-span-2" },
  { title: "Dining", count: "38+ designs", image: imgDining, size: "col-span-1" },
  { title: "Storage", count: "32+ designs", image: imgStorage, size: "col-span-1" },
  { title: "Dressing", count: "28+ designs", image: imgDressing, size: "col-span-1 md:col-span-2" },
  { title: "Bedroom", count: "20+ designs", image: imgBedroom, size: "col-span-1 md:col-span-2" },
  { title: "Home Decor", count: "15+ designs", image: imgDecor, size: "col-span-1" },
  { title: "Outdoor", count: "10+ designs", image: imgOutdoor, size: "col-span-1" },
  { title: "TV Units", count: "12+ designs", image: imgTvUnit, size: "col-span-1 md:col-span-2" },
];

export default function Collections() {
  return (
    <section id="collections" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">Tile-Inlaid Furniture Collections</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Discover our exclusive range of premium 100% teakwood furniture adorned with handmade Athangudi tile artistry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {collections.map((col, idx) => (
            <Link key={col.title} href={`/collections/${encodeURIComponent(col.title)}`}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`group relative h-[400px] rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500 ${col.size}`}
              >
                <img 
                  src={col.image} 
                  alt={col.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <div className="flex items-end justify-between">
                    <div>
                      <h3 className="text-2xl font-serif font-bold text-white mb-1">{col.title}</h3>
                      <p className="text-white/80 font-medium">{col.count}</p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      <ArrowUpRight className="text-white w-5 h-5" />
                    </div>
                  </div>
                </div>

                {/* Corner Marker */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
