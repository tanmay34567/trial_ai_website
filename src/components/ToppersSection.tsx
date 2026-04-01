"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const toppers = [
  { name: "Aditya Sharma", score: "98.4%", class: "Class 10", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200&h=200" },
  { name: "Riya Patel", score: "97.2%", class: "Class 12", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200&h=200" },
  { name: "Arjun Mehta", score: "96.8%", class: "Class 10", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200" },
  { name: "Sneha Gupta", score: "96.5%", class: "Class 12", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200" },
];

export default function ToppersSection() {
  return (
    <section id="results" className="section-padding bg-edu-primary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-edu-accent/10 rounded-full blur-[100px] md:blur-[120px] -translate-y-1/2 translate-x-1/2" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
          >
            Proven Results <span className="text-edu-gold">That Speak</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-edu-text/80 text-lg max-w-2xl mx-auto"
          >
            Every year, our students break records and set new benchmarks in 
            academic excellence.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {toppers.map((topper, index) => (
            <motion.div
              key={topper.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="glass-morphism rounded-3xl p-6 group transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10"
            >
              <div className="relative w-32 h-32 mx-auto mb-6 rounded-2xl overflow-hidden ring-4 ring-edu-accent/20 group-hover:ring-edu-accent transition-all">
                <img 
                  src={topper.image} 
                  alt={topper.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-edu-primary/60 to-transparent" />
              </div>
              
              <div className="text-center">
                <h3 className="text-xl font-bold text-white mb-1">{topper.name}</h3>
                <p className="text-edu-text/60 text-sm mb-4">{topper.class}</p>
                
                <div className="inline-block px-4 py-2 bg-edu-gold/10 border border-edu-gold/20 rounded-full">
                  <span className="text-edu-gold font-bold text-xl">{topper.score}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button className="text-edu-accent font-bold hover:underline">
            View All Results →
          </button>
        </div>
      </div>
    </section>
  );
}
