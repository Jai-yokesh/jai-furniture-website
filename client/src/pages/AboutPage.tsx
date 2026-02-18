import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

import jaiShankerImg from "@/assets/jai-shanker.jpg";
import krishnamoorthyImg from "@/assets/krishnamoorthy.jpg";
import shanthavigneshImg from "@/assets/shanthavignesh.jpg";
import yokeshwaranImg from "@/assets/yokeshwaran.jpg";
export default function AboutPage() {

  // 🔥 This forces page to start from top when opened
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const owners = [
    {
      name: "Jai Shanker",
      role: "Founder",
      image: jaiShankerImg,
      description:
        "I have spent over 40 years working with wood. Every piece I build carries my experience, my patience, and my commitment to doing the job right.",
    },
    {
      name: "Krishnamoorthy",
      role: "Co-Founder & Adviser",
      image: krishnamoorthyImg,
      description:
        "For 55 years, I have shaped wood with my hands and my heart, creating a legacy that will stand strong for generations.",
    },
    {
      name: "Shanthavignesh",
      role: "CEO & Adviser",
      image: shanthavigneshImg,
      description:
        "With an engineer’s mind and a craftsman’s heart, I combine knowledge and passion to shape furniture that reflects both tradition and innovation.",
    },
    {
      name: "Yokeshwaran",
      role: "Founder & Co-Worker",
      image: yokeshwaranImg,
      description:
        "With a background in technology and roots in carpentry, I began learning the craft inspired by my family. What started as curiosity has turned into passion — the texture, the finishing, and the transformation of wood now drive me every day.",
    },
  ];

  return (
    <main className="min-h-screen w-full bg-background">
      <Navbar />

      <div className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-16">
            The People Behind Jai Furniture
          </h1>

        {owners.map((owner, index) => (
  <motion.div
    key={index}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6, delay: index * 0.15 }}
    className={`flex flex-col md:flex-row items-center gap-10 mb-20 ${
      index % 2 !== 0 ? "md:flex-row-reverse" : ""
    }`}
  >

              <div className="md:w-1/2">
                <h2 className="text-2xl font-semibold">{owner.name}</h2>
                <p className="text-sm text-muted-foreground mb-4">
                  {owner.role}
                </p>
                <p className="text-lg leading-8 text-muted-foreground">
                  {owner.description}
                </p>
              </div>

              <div className="md:w-1/2 flex justify-center">
                <div className="w-72 h-72 rounded-2xl overflow-hidden shadow-lg border border-gray-200">
                  <img
                    src={owner.image}
                    alt={owner.name}
                    className="w-full h-full object-cover object-[center_0%]"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}
