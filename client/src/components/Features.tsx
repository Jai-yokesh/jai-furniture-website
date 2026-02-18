import { Gem, PenTool, Truck, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: Gem,
    title: "Handmade Athangudi Tiles",
    description: "Authentic handmade Athangudi tiles sourced directly from artisans."
  },
  {
    icon: PenTool,
    title: "Custom Designs",
    description: "Tailor-made furniture designed to fit your space and style requirements perfectly."
  },
  {
    icon: Truck,
    title: "Pan-India Delivery",
    description: "Safe and secure shipping across India with insurance and professional installation."
  },
  {
    icon: ShieldCheck,
    title: "50-Year Warranty",
    description: "Our promise of quality with a comprehensive 50-year warranty on wood and craftsmanship."
  }
];

export default function Features() {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-50 to-background z-0" />

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="text-center mb-16 space-y-4">
          <span className="text-primary font-bold tracking-widest text-xs uppercase">Why Choose Us</span>
          <h2 className="text-4xl font-serif font-bold text-foreground">The Jai Furniture Promise</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            We don't just build furniture; we craft heirlooms that last generations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-white/50 backdrop-blur-sm border border-white/50 p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 text-center group">
              <div className="w-14 h-14 mx-auto bg-primary/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <feature.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-serif font-bold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
