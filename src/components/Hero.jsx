import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import { Flame, ShieldCheck, Star, ChevronDown, Sparkles, Utensils, HeartHandshake } from 'lucide-react';

const TOTAL_FRAMES = 240;

// Format frame index to 3-digit string (e.g. 1 -> "001")
const getFrameUrl = (index) => {
  const paddedIndex = String(index).padStart(3, '0');
  return `/heroSection/ezgif-frame-${paddedIndex}.jpg`;
};

export default function Hero({ onScrollToNext }) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const imagesRef = useRef([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Map scroll 0 -> 1 to frame index 0 -> TOTAL_FRAMES - 1
  const currentFrameIndex = useTransform(scrollYProgress, [0, 1], [0, TOTAL_FRAMES - 1]);

  // Preload images on mount
  useEffect(() => {
    let loadedCount = 0;
    const images = [];

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = getFrameUrl(i);
      img.onload = () => {
        loadedCount++;
        setLoadProgress(Math.round((loadedCount / TOTAL_FRAMES) * 100));
        if (loadedCount === TOTAL_FRAMES) {
          setImagesLoaded(true);
        }
      };
      images.push(img);
    }
    imagesRef.current = images;

    // Draw initial frame as soon as frame 1 loads
    if (images[0]) {
      images[0].onload = () => {
        renderFrame(0);
      };
    }
  }, []);

  // Canvas render helper with object-fit: cover scaling
  const renderFrame = (index) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const frameIdx = Math.min(TOTAL_FRAMES - 1, Math.max(0, Math.floor(index)));
    const img = imagesRef.current[frameIdx];

    if (!img || !img.complete || img.naturalWidth === 0) return;

    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();

    if (canvas.width !== rect.width * dpr || canvas.height !== rect.height * dpr) {
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
    }

    const width = canvas.width;
    const height = canvas.height;

    const imgRatio = img.naturalWidth / img.naturalHeight;
    const canvasRatio = width / height;

    let renderW, renderH, offsetX, offsetY;

    if (canvasRatio > imgRatio) {
      renderW = width;
      renderH = width / imgRatio;
      offsetX = 0;
      offsetY = (height - renderH) / 2;
    } else {
      renderW = height * imgRatio;
      renderH = height;
      offsetX = (width - renderW) / 2;
      offsetY = 0;
    }

    ctx.clearRect(0, 0, width, height);
    ctx.drawImage(img, offsetX, offsetY, renderW, renderH);
  };

  // Re-render frame on scroll
  useMotionValueEvent(currentFrameIndex, "change", (latest) => {
    requestAnimationFrame(() => renderFrame(latest));
  });

  // Re-render frame on window resize
  useEffect(() => {
    const handleResize = () => {
      renderFrame(currentFrameIndex.get());
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Text overlay animation transforms for 4 scroll steps
  // Step 1: 0% to 22% (Top-Left)
  const opacity1 = useTransform(scrollYProgress, [0, 0.05, 0.18, 0.23], [1, 1, 1, 0]);
  const x1 = useTransform(scrollYProgress, [0, 0.05, 0.18, 0.23], [0, 0, 0, -40]);

  // Step 2: 25% to 48% (Bottom-Left)
  const opacity2 = useTransform(scrollYProgress, [0.24, 0.29, 0.43, 0.48], [0, 1, 1, 0]);
  const x2 = useTransform(scrollYProgress, [0.24, 0.29, 0.43, 0.48], [-40, 0, 0, -40]);

  // Step 3: 50% to 73% (Top-Right)
  const opacity3 = useTransform(scrollYProgress, [0.49, 0.54, 0.68, 0.73], [0, 1, 1, 0]);
  const x3 = useTransform(scrollYProgress, [0.49, 0.54, 0.68, 0.73], [40, 0, 0, 40]);

  // Step 4: 75% to 100% (Bottom-Right)
  const opacity4 = useTransform(scrollYProgress, [0.74, 0.79, 0.95, 1], [0, 1, 1, 1]);
  const x4 = useTransform(scrollYProgress, [0.74, 0.79, 0.95, 1], [40, 0, 0, 0]);

  return (
    <div ref={containerRef} id="home" className="relative h-[450vh] bg-charcoal-950 text-white">
      {/* Sticky Fullscreen Canvas Viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">

        {/* Bright Canvas Background */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full object-cover z-0 brightness-110 contrast-105"
        />

        {/* Minimal Vignette & Light Legibility Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/40 via-transparent to-charcoal-950/40 z-10 pointer-events-none" />



        {/* Content Container */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full">

          {/* OVERLAY 1: TOP-LEFT POSITION (0% -> 22%) - NO CARD CONTAINER */}
          <motion.div
            style={{ opacity: opacity1, x: x1 }}
            className="absolute left-4 sm:left-8 lg:left-12 top-24 sm:top-28 max-w-md sm:max-w-lg text-left pointer-events-auto space-y-3 drop-shadow-[0_4px_16px_rgba(0,0,0,0.85)]"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-950/80 border border-amber-500/40 text-amber-300 text-[11px] font-extrabold tracking-wider uppercase backdrop-blur-md">
              <Flame className="w-3.5 h-3.5 text-amber-400" />
              <span>Culinary Heritage</span>
            </div>

            <div>
              <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-white leading-tight drop-shadow-lg">
                Authentic Arabian <br />
                <span className="gold-gradient-text">Live Coal Masterclass</span>
              </h1>
              <p className="text-gray-100 text-sm sm:text-base font-medium leading-relaxed mt-2.5 max-w-md drop-shadow-md">
                Savor the finest Al Faham, Beef Jallikattu, and Tender Mutton Mandi prepared with centuries-old Yemeni spice recipes.
              </p>
            </div>

            <div className="pt-2 flex items-center gap-3 text-xs text-amber-200 font-bold">
              <span className="flex items-center gap-1.5 bg-charcoal-950/70 px-3 py-1 rounded-lg border border-amber-500/30">
                <ShieldCheck className="w-4 h-4 text-amber-400" /> 100% Halal
              </span>
              <span className="flex items-center gap-1.5 bg-charcoal-950/70 px-3 py-1 rounded-lg border border-amber-500/30">
                <Star className="w-4 h-4 text-amber-400 fill-amber-400" /> 4.9 (2.5k+ Diners)
              </span>
            </div>
          </motion.div>

          {/* OVERLAY 2: BOTTOM-LEFT POSITION (25% -> 48%) - NO CARD CONTAINER */}
          <motion.div
            style={{ opacity: opacity2, x: x2 }}
            className="absolute left-4 sm:left-8 lg:left-12 bottom-20 sm:bottom-24 max-w-md sm:max-w-lg text-left pointer-events-auto space-y-3 drop-shadow-[0_4px_16px_rgba(0,0,0,0.85)]"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-950/80 border border-amber-500/40 text-amber-300 text-[11px] font-extrabold tracking-wider uppercase backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Feature 01 · Rice &amp; Spices</span>
            </div>

            <div>
              <h2 className="font-serif text-2xl sm:text-4xl font-extrabold text-white leading-tight drop-shadow-lg">
                Pressure-Steamed <br />
                <span className="gold-gradient-text">Saffron Basmati</span>
              </h2>
              <p className="text-gray-100 text-sm sm:text-base font-medium leading-relaxed mt-2.5 max-w-md drop-shadow-md">
                Long basmati grains slowly absorbing rich bone marrow broth, toasted pine nuts, and golden Yemeni saffron.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap gap-2 text-xs text-amber-200 font-bold">
              <span className="bg-charcoal-950/70 px-3 py-1 rounded-lg border border-amber-500/30">
                ✨ Saffron Infused
              </span>
              <span className="bg-charcoal-950/70 px-3 py-1 rounded-lg border border-amber-500/30">
                🍖 Marrow Broth
              </span>
            </div>
          </motion.div>

          {/* OVERLAY 3: TOP-RIGHT POSITION (50% -> 73%) - NO CARD CONTAINER */}
          <motion.div
            style={{ opacity: opacity3, x: x3 }}
            className="absolute right-4 sm:right-8 lg:right-12 top-24 sm:top-28 max-w-md sm:max-w-lg text-left pointer-events-auto space-y-3 drop-shadow-[0_4px_16px_rgba(0,0,0,0.85)]"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-950/80 border border-amber-500/40 text-amber-300 text-[11px] font-extrabold tracking-wider uppercase backdrop-blur-md">
              <Flame className="w-3.5 h-3.5 text-amber-400" />
              <span>Feature 02 · Live Charcoal</span>
            </div>

            <div>
              <h2 className="font-serif text-2xl sm:text-4xl font-extrabold text-white leading-tight drop-shadow-lg">
                Smoky Charcoal <br />
                <span className="gold-gradient-text">Al Faham &amp; Fiery Ribs</span>
              </h2>
              <p className="text-gray-100 text-sm sm:text-base font-medium leading-relaxed mt-2.5 max-w-md drop-shadow-md">
                Slow-roasted over glowing charcoal embers to lock in juicy tenderness with signature dark spice crusts.
              </p>
            </div>

            <div className="pt-2 flex items-center gap-3 text-xs text-amber-200 font-bold">
              <span className="bg-charcoal-950/70 px-3 py-1 rounded-lg border border-amber-500/30">
                🔥 100% Charcoal Roasted
              </span>
              <span className="bg-charcoal-950/70 px-3 py-1 rounded-lg border border-amber-500/30">
                🍗 24h Secret Marinade
              </span>
            </div>
          </motion.div>

          {/* OVERLAY 4: BOTTOM-RIGHT POSITION (75% -> 100%) - NO CARD CONTAINER */}
          <motion.div
            style={{ opacity: opacity4, x: x4 }}
            className="absolute right-4 sm:right-8 lg:right-12 bottom-20 sm:bottom-24 max-w-md sm:max-w-lg text-left pointer-events-auto space-y-3 drop-shadow-[0_4px_16px_rgba(0,0,0,0.85)]"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-950/80 border border-amber-500/40 text-amber-300 text-[11px] font-extrabold tracking-wider uppercase backdrop-blur-md">
              <HeartHandshake className="w-3.5 h-3.5 text-amber-400" />
              <span>Feature 03 · Royal Gathering</span>
            </div>

            <div>
              <h2 className="font-serif text-2xl sm:text-4xl font-extrabold text-white leading-tight drop-shadow-lg">
                Gather Around the <br />
                <span className="gold-gradient-text">Grand Mandi Platter</span>
              </h2>
              <p className="text-gray-100 text-sm sm:text-base font-medium leading-relaxed mt-2.5 max-w-md drop-shadow-md">
                Traditional Majlis floor seating, plush carpets, brass tableware, and complimentary Sulaimani tea.
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={onScrollToNext}
                className="py-3 px-6 rounded-xl gold-gradient-bg text-xs font-extrabold flex items-center justify-center gap-2 shadow-xl hover:shadow-amber-500/40 transition-all cursor-pointer"
              >
                <Utensils className="w-4 h-4" />
                <span>Explore Menu &amp; Craft</span>
              </button>
            </div>
          </motion.div>

        </div>

        {/* Scroll Cue Indicator */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, repeat: Infinity, repeatType: "reverse" }}
          className="absolute bottom-6 z-30 flex flex-col items-center justify-center text-center cursor-pointer pointer-events-auto"
          onClick={onScrollToNext}
        >
          <span className="text-[10px] font-bold tracking-widest text-amber-400 uppercase mb-1 drop-shadow-md">
            Scroll to explore
          </span>
          <ChevronDown className="w-4 h-4 text-amber-400 drop-shadow-md" />
        </motion.div>

      </div>
    </div>
  );
}
