"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Rohan Khanna",
    role: "10th Class Parent",
    text: "Matrix Education has transformed my child’s attitude towards Science and Math. The conceptual clarity they provide is unmatched in the city.",
    rating: 5,
  },
  {
    name: "Isha Deshmukh",
    role: "JEE aspirant (12th)",
    text: "The Faculty at Matrix is incredibly supportive. Their doubt solving sessions are always help me clarify the toughest physics problems.",
    rating: 5,
  },
  {
    name: "Dr. Vinod Verma",
    role: "Parent",
    text: "Disciplined environment, structured weekly tests, and detailed reports for parents. Exactly what we were looking for in a coaching class.",
    rating: 5,
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((index + 1) % testimonials.length);
  const prev = () => setIndex((index - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [index]);

  return (
    <section className="py-24 bg-edu-secondary overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-16 h-16 bg-edu-accent/10 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <Quote className="text-edu-accent" size={32} />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Stories of <span className="text-edu-accent italic">Success</span>
          </motion.h2>
        </div>

        <div className="relative max-w-4xl mx-auto px-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="glass-morphism p-10 md:p-16 rounded-[40px] text-center border-white/5"
            >
              <div className="flex justify-center gap-1 mb-8">
                {[...Array(testimonials[index].rating)].map((_, i) => (
                  <Star key={i} className="text-edu-gold fill-edu-gold" size={20} />
                ))}
              </div>
              
              <blockquote className="text-2xl md:text-3xl font-display italic text-white/90 leading-relaxed mb-10">
                "{testimonials[index].text}"
              </blockquote>
              
              <div className="text-center">
                <div className="text-xl font-bold text-white mb-1">
                  {testimonials[index].name}
                </div>
                <div className="text-edu-accent font-medium text-sm">
                  {testimonials[index].role}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <button 
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass-morphism flex items-center justify-center text-white hover:bg-edu-accent transition-all z-10"
          >
            <ChevronLeft />
          </button>
          <button 
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass-morphism flex items-center justify-center text-white hover:bg-edu-accent transition-all z-10"
          >
            <ChevronRight />
          </button>
          
          {/* Progress indicators */}
          <div className="flex justify-center gap-2 mt-10">
            {testimonials.map((_, i) => (
              <button 
                key={i}
                onClick={() => setIndex(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  i === index ? "bg-edu-accent w-8" : "bg-white/10"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
