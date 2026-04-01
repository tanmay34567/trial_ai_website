"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion, useSpring } from "framer-motion";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const frameCount = 40;
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const scrollX = useTransform(scrollYProgress, [0, 1], [1, frameCount]);
  const smoothScroll = useSpring(scrollX, { stiffness: 300, damping: 30 });

  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    const imageUrls = Array.from({ length: frameCount }, (_, i) => {
      const frameIndex = (i + 1).toString().padStart(3, "0");
      return `/animation/ezgif-frame-${frameIndex}.jpg`;
    });

    imageUrls.forEach((url, index) => {
      const img = new Image();
      img.src = url;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === frameCount) {
          setIsLoaded(true);
        }
      };
      loadedImages[index] = img;
    });

    setImages(loadedImages);
  }, []);

  useEffect(() => {
    if (!isLoaded || !canvasRef.current) return;

    const render = (frame: number) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const context = canvas.getContext("2d");
      if (!context) return;

      const img = images[Math.floor(frame) - 1];
      if (img && img.complete) {
        // Clear canvas
        context.clearRect(0, 0, canvas.width, canvas.height);
        
        // Responsive fit
        const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
        const x = (canvas.width / 2) - (img.width / 2) * scale;
        const y = (canvas.height / 2) - (img.height / 2) * scale;
        
        context.drawImage(img, x, y, img.width * scale, img.height * scale);
      }
    };

    const unsubscribe = smoothScroll.on("change", (latest) => {
      render(latest);
    });

    // Initial render
    render(1);

    return () => unsubscribe();
  }, [isLoaded, images, smoothScroll]);

  // Handle Resize
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div ref={containerRef} className="relative h-[300vh] w-full bg-edu-primary">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 h-full w-full object-cover opacity-60"
        />
        
        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-radial-gradient from-transparent to-edu-primary/80 px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="z-10 max-w-4xl"
          >
            <h1 className="font-display mb-6 text-5xl font-bold md:text-7xl lg:text-8xl">
              <span className="text-white">Transform Your</span>
              <br />
              <span className="text-gradient">Academic Journey</span>
            </h1>
            <p className="font-sans mb-10 text-lg text-edu-text md:text-xl lg:text-2xl max-w-2xl mx-auto opacity-80">
              Expert Coaching for Classes 8–12. We build the foundation for 
              Board Exams and Competitive excellence.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-edu-accent hover:bg-blue-600 px-8 py-4 rounded-full font-bold text-lg text-white shadow-lg shadow-blue-500/20 transition-all"
              >
                Enroll Now
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-white/20 hover:bg-white/10 px-8 py-4 rounded-full font-bold text-lg text-white backdrop-blur-sm transition-all"
              >
                View Courses
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-sm font-medium uppercase tracking-widest text-edu-text opacity-40">Scroll to Explore</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-edu-accent to-transparent"></div>
        </motion.div>
      </div>
    </div>
  );
}
