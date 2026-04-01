"use client";

import { motion } from "framer-motion";
import { CheckCircle, Clock, Users, Zap } from "lucide-react";

const features = [
  {
    title: "Personal Attention",
    desc: "Small batch sizes to ensure every student gets the individual feedback they need to grow.",
    icon: <Users className="text-edu-accent" />,
  },
  {
    title: "Weekly Test Series",
    desc: "Rigorous testing schedules to track progress and identify weak areas early in the session.",
    icon: <Clock className="text-edu-gold" />,
  },
  {
    title: "Expert Faculty",
    desc: "Experienced teachers with deep domain expertise in board and competitive exam patterns.",
    icon: <Zap className="text-blue-400" />,
  },
  {
    title: "Conceptual Clarity",
    desc: "We focus on the 'Why' behind every concept, ensuring long-term retention and logic.",
    icon: <CheckCircle className="text-emerald-400" />,
  },
];

export default function FeaturesSection() {
  return (
    <section id="about" className="section-padding bg-edu-primary relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Content */}
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-3xl md:text-5xl font-bold text-white mb-6 md:mb-8"
            >
              Why Choose <br />
              <span className="text-edu-accent">Matrix Education?</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-edu-text/60 text-lg mb-12 max-w-lg"
            >
              We don’t just teach; we mentor. Our methodology is designed to 
              shape minds and build careers through a structured and 
              results-oriented approach.
            </motion.p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-edu-accent/20 transition-all">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-edu-text/40 text-sm leading-relaxed">
                    {feature.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden glass-morphism relative">
               <div className="absolute inset-x-0 bottom-0 top-0 bg-gradient-to-t from-edu-primary to-transparent z-10" />
               <img 
                 src="https://images.unsplash.com/photo-1523050353055-f11234e49156?auto=format&fit=crop&q=80&w=800&h=800" 
                 alt="Classroom"
                 className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000"
               />
               
               {/* Floating Stats */}
               <motion.div 
                 animate={{ y: [0, -10, 0] }}
                 transition={{ duration: 4, repeat: Infinity }}
                 className="absolute top-10 right-10 bg-edu-accent p-6 rounded-2xl shadow-2xl z-20"
               >
                 <div className="text-3xl font-bold text-white">15+</div>
                 <div className="text-sm text-white/60">Years Excellence</div>
               </motion.div>
               
               <motion.div 
                 animate={{ y: [0, 10, 0] }}
                 transition={{ duration: 3, repeat: Infinity }}
                 className="absolute bottom-20 left-10 glass-morphism p-6 rounded-2xl shadow-2xl z-20 border-white/10"
               >
                 <div className="text-3xl font-bold text-edu-gold">5000+</div>
                 <div className="text-sm text-edu-text/60">Students Mentored</div>
               </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
