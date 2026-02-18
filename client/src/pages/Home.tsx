import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Collections from "@/components/Collections";
import FeaturedProducts from "@/components/FeaturedProducts";
import About from "@/components/About";
import Features from "@/components/Features";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-background selection:bg-primary/20 selection:text-primary">
      <Navbar />
      <Hero />
      <Collections />
      <FeaturedProducts />
      <About />
      <Features />
      <Contact />
      <Footer />
    </main>
  );
}
