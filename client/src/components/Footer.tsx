import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#2D1B15] text-[#E6DCC8] pt-20 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="space-y-6">
            <h3 className="text-3xl font-serif font-bold text-white">Jai Furniture</h3>
            <p className="text-white/60 leading-relaxed">
              Crafting timeless teakwood furniture with traditional tile artistry. Bringing heritage to your home.
            </p>
            {/* Social icons removed as requested */}
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Collections</h4>
            <ul className="space-y-3 text-white/70">
              <li><a href="#" className="hover:text-primary transition-colors">Living Room</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Dining Room</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Bedroom</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Storage & Cabinets</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">New Arrivals</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-6">Company</h4>
            <ul className="space-y-3 text-white/70">
              <li><a href="#" className="hover:text-primary transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Showroom</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-6">Support</h4>
            <ul className="space-y-3 text-white/70">
              <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Shipping Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Returns & Warranty</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Care Instructions</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Track Order</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40">
          <p>© 2024 Jai Furniture. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
