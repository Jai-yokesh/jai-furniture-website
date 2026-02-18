import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#2D1B15] text-[#E6DCC8] pt-12 pb-6">
      <div className="container mx-auto px-4 md:px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-10 text-center md:text-left">
  
  {/* Brand */}
  <div className="space-y-6">
    <h3 className="text-3xl font-serif font-bold text-white">Jai Furniture</h3>
    <p className="text-white/60 leading-relaxed">
      Crafting timeless teakwood furniture with traditional tile artistry. Bringing heritage to your home.
    </p>
  </div>

  {/* Collections */}
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

  {/* Google Map */}
  <div>
    <h4 className="text-lg font-bold text-white mb-6">Showroom Location</h4>
    <div className="rounded-xl overflow-hidden border border-white/10 shadow-lg">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3911.351579266649!2d79.15048241529934!3d12.171230505078937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bacb935d104339b%3A0x75f81bc0adb1d504!2sJai%20furniture!5e0!3m2!1sen!2sin!4v1708278739000"
    width="100%"
    height="200"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
  ></iframe>
</div>


  </div>

</div>


        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-6">
<div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 text-center md:text-left">

            {/* LEFT SIDE */}
            <div className="flex flex-col gap-4">

              {/* Policy Links */}
<div className="flex gap-6 justify-center md:justify-start text-sm text-white/40">
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  Terms of Service
                </a>
              </div>

            </div>

            {/* RIGHT SIDE */}
            <p className="text-sm text-white/40 mt-4 md:mt-0">
              © 2024 Jai Furniture. All rights reserved.
            </p>

          </div>
        </div>

      </div>
    </footer>
  );
}
