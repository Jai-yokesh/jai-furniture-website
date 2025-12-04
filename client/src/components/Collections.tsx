import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import imgLiving from "@assets/generated_images/living_room_furniture_collection.png";
import imgDining from "@assets/generated_images/dining_room_furniture_collection.png";
import imgStorage from "@assets/generated_images/storage_furniture_collection.png";
import imgDressing from "@assets/generated_images/dressing_table_furniture_collection.png";

const collections = [
  { title: "Living Room", count: "45+ designs", image: imgLiving, size: "col-span-1 md:col-span-2" },
  { title: "Dining", count: "38+ designs", image: imgDining, size: "col-span-1" },
  { title: "Storage", count: "32+ designs", image: imgStorage, size: "col-span-1" },
  { title: "Dressing", count: "28+ designs", image: imgDressing, size: "col-span-1 md:col-span-2" },
];

export default function Collections() {
  return (
    <section id="collections" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">Tile-Inlaid Furniture Collections</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Discover our exclusive range of premium sheesham wood furniture adorned with hand-painted ceramic tile artistry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {collections.map((col, idx) => (
            <motion.div
              key={col.title}
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
          ))}
        </div>
      </div>
    </section>
  );
}
