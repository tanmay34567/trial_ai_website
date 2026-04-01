"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Courses", href: "#courses" },
    { name: "Results", href: "#results" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3 md:py-4 bg-edu-primary/80 backdrop-blur-md border-b border-white/10" : "py-5 md:py-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 md:w-10 md:h-10 bg-edu-accent rounded-lg md:rounded-xl flex items-center justify-center font-bold text-white text-lg md:text-xl group-hover:rotate-12 transition-transform shadow-lg shadow-blue-500/20">
            M
          </div>
          <span className="font-display text-xl md:text-2xl font-bold tracking-tight text-white">
            MATRIX <span className="text-edu-accent italic hidden sm:inline">EDUCATION</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-edu-text/80 hover:text-white font-medium text-sm tracking-wide uppercase transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-6 py-2 rounded-full font-bold text-sm transition-all shadow-xl"
          >
            Apply Now
          </motion.button>
        </div>

        {/* Mobile menu toggle */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={mobileMenuOpen ? "open" : "closed"}
        variants={{
          open: { height: "auto", opacity: 1 },
          closed: { height: 0, opacity: 0 }
        }}
        className="md:hidden bg-edu-secondary border-b border-white/10 overflow-hidden"
      >
        <div className="container mx-auto px-6 py-8 flex flex-col gap-6">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-xl font-medium text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <button className="bg-edu-accent w-full text-white py-4 rounded-xl font-bold text-lg">
            Apply Now
          </button>
        </div>
      </motion.div>
    </nav>
  );
}
