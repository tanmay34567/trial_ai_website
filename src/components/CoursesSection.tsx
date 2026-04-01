"use client";

import { motion } from "framer-motion";
import { BookOpen, GraduationCap, Microscope, Rocket } from "lucide-react";

const courses = [
  {
    title: "Class 8-10 Foundation",
    description: "Building a rock-solid foundation for ICSE, CBSE & SSC boards with a focus on logic and conceptual clarity.",
    icon: <BookOpen className="text-edu-accent" size={32} />,
    color: "from-blue-500/20 to-cyan-500/20",
    features: ["Weekly Test Series", "Personal Attention", "Doubt Solving"]
  },
  {
    title: "Class 11-12 Science",
    description: "Intensive coaching for JEE (Main+Adv), NEET, and MHT-CET alongside State and Central boards.",
    icon: <Microscope className="text-edu-gold" size={32} />,
    color: "from-amber-500/20 to-orange-500/20",
    features: ["Expert Faculty", "Mock Test Analysis", "Study Material"]
  },
  {
    title: "Class 11-12 Commerce",
    description: "Comprehensive guidance for CA Foundation, CS, and CMA entries with core emphasis on Accounts & Eco.",
    icon: <Rocket className="text-green-400" size={32} />,
    color: "from-emerald-500/20 to-teal-500/20",
    features: ["Industry Insights", "Practical Accounting", "Career Guidance"]
  },
  {
    title: "Competitive Edge",
    description: "Specialized batches for Olympiads, NTSE, and KVPY preparation to sharpen your competitive edge.",
    icon: <GraduationCap className="text-purple-400" size={32} />,
    color: "from-fuchsia-500/20 to-pink-500/20",
    features: ["Advanced Curriculum", "Problem Sets", "National Ranking"]
  }
];

export default function CoursesSection() {
  return (
    <section id="courses" className="section-padding bg-edu-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 md:mb-16 gap-8 md:gap-6">
          <div className="max-w-xl">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="font-display text-3xl md:text-5xl font-bold text-white mb-6"
            >
              Academic Programs <br />
              <span className="text-gradient">Tailored for Success</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-edu-text/60 text-base md:text-lg"
            >
              Choose from our curated range of courses designed to bring out the 
              best in every student.
            </motion.p>
          </div>
          <button className="w-full sm:w-auto bg-edu-accent hover:bg-blue-600 px-8 py-3 rounded-full font-bold text-white transition-all whitespace-nowrap text-center">
            Download Prospectus
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative p-[1px] rounded-3xl overflow-hidden transition-all duration-300"
            >
              {/* Animated Gradient Border */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-edu-accent to-transparent group-hover:from-edu-accent group-hover:via-edu-gold group-hover:to-edu-accent transition-all duration-500" />
              
              <div className="relative h-full bg-edu-primary/90 rounded-3xl p-8 transition-colors group-hover:bg-edu-primary">
                <div className={`w-16 h-16 bg-gradient-to-br ${course.color} rounded-2xl flex items-center justify-center mb-6`}>
                  {course.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{course.title}</h3>
                <p className="text-edu-text/60 text-lg mb-8 leading-relaxed">
                  {course.description}
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {course.features.map(f => (
                    <div key={f} className="flex items-center gap-2 text-sm text-edu-text/40">
                      <div className="w-1.5 h-1.5 bg-edu-accent rounded-full" />
                      {f}
                    </div>
                  ))}
                </div>
                
                <button className="w-full py-3 rounded-xl border border-white/10 hover:border-edu-accent hover:text-edu-accent font-bold text-white transition-all">
                  Explore Course Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
