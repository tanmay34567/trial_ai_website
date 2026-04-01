"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export default function ContactCTA() {
  return (
    <section id="contact" className="py-24 bg-edu-primary relative">
      <div className="container mx-auto px-6">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="bg-gradient-to-br from-edu-secondary via-edu-primary to-edu-secondary rounded-[60px] p-10 md:p-20 relative overflow-hidden ring-1 ring-white/5"
        >
          {/* Background shapes */}
          <div className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-edu-accent/10 rounded-full blur-[100px]" />
          <div className="absolute -bottom-20 -left-20 w-[300px] h-[300px] bg-edu-gold/10 rounded-full blur-[80px]" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 relative z-10">
            {/* Left: Content */}
            <div className="flex flex-col justify-center">
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8">
                Ready to Join <span className="text-edu-gold italic">the Next Batch?</span>
              </h2>
              <p className="text-edu-text/60 text-lg mb-12 max-w-lg">
                Limited seats available for the upcoming session. Secure your 
                admission today and transform your future.
              </p>
              
              <div className="space-y-6">
                 <div className="flex items-center gap-4 text-white">
                   <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-edu-accent">
                     <Phone size={24} />
                   </div>
                   <div className="text-xl font-bold">+91 98765 43210</div>
                 </div>
                 <div className="flex items-center gap-4 text-white">
                   <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-edu-accent">
                     <Mail size={24} />
                   </div>
                   <div className="text-xl font-bold">admission@matrix.edu</div>
                 </div>
                 <div className="flex items-center gap-4 text-white">
                   <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-edu-accent">
                     <MapPin size={24} />
                   </div>
                   <div className="text-lg">City Center Mall, Pune, Maharashtra</div>
                 </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="glass-morphism p-10 rounded-[40px] border-white/5 border-t-white/10 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-8">Send an Inquiry</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-edu-text/60 mb-2">FULL NAME</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-edu-accent transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-edu-text/60 mb-2">PHONE NUMBER</label>
                  <input 
                    type="tel" 
                    placeholder="+91"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-edu-accent transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-edu-text/60 mb-2">TARGET COURSE</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-edu-accent transition-all">
                    <option className="bg-edu-primary">Class 8-10 Foundation</option>
                    <option className="bg-edu-primary">Class 11-12 Science</option>
                    <option className="bg-edu-primary">Class 11-12 Commerce</option>
                    <option className="bg-edu-primary">Competitive Edge</option>
                  </select>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-edu-accent hover:bg-blue-600 text-white font-bold py-5 rounded-2xl flex items-center justify-center gap-3 shadow-xl shadow-blue-500/20 transition-all"
                >
                  <Send size={20} />
                  Get Started Today
                </motion.button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Footer copyright */}
      <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-white/5 mt-12 opacity-40 text-sm">
        <div>© 2026 Matrix Education. All rights reserved.</div>
        <div className="flex gap-8">
           <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
           <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </section>
  );
}
