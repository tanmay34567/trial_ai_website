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
    <section className="section-padding bg-edu-secondary overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-12 h-12 md:w-16 md:h-16 bg-edu-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6"
          >
            <Quote className="text-edu-accent" size={24} />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-5xl font-bold text-white mb-4"
          >
            Stories of <span className="text-edu-accent italic">Success</span>
          </motion.h2>
        </div>

        <div className="relative max-w-4xl mx-auto md:px-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="glass-morphism p-8 md:p-16 rounded-[30px] md:rounded-[40px] text-center border-white/5"
            >
              <div className="flex justify-center gap-1 mb-6 md:mb-8">
                {[...Array(testimonials[index].rating)].map((_, i) => (
                  <Star key={i} className="text-edu-gold fill-edu-gold" size={16} />
                ))}
              </div>
              
              <blockquote className="text-lg md:text-3xl font-display italic text-white/90 leading-relaxed mb-8 md:mb-10">
                "{testimonials[index].text}"
              </blockquote>
              
              <div className="text-center">
                <div className="text-lg md:text-xl font-bold text-white mb-1">
                  {testimonials[index].name}
                </div>
                <div className="text-edu-accent font-medium text-xs md:text-sm">
                  {testimonials[index].role}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex justify-center md:block mt-8 md:mt-0 gap-4">
            <button 
              onClick={prev}
              className="md:absolute md:left-0 md:top-1/2 md:-translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full glass-morphism flex items-center justify-center text-white hover:bg-edu-accent transition-all z-10"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={next}
              className="md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full glass-morphism flex items-center justify-center text-white hover:bg-edu-accent transition-all z-10"
            >
              <ChevronRight size={20} />
            </button>
          </div>
          
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
