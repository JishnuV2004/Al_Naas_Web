import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Users, Award, HeartHandshake, ChevronLeft, ChevronRight, Store } from 'lucide-react';

const SLIDES = [
  {
    id: 1,
    image: '/images/storefront.jpg',
    title: 'Al Naas Mandi Storefront & Lounge',
    caption: 'Warm Arabian architecture & welcoming hospitality'
  },
  {
    id: 2,
    image: '/images/hero_mandi.png',
    title: 'Grand Mandi Platter Presentation',
    caption: 'Communion dining crafted for family gatherings'
  },
  {
    id: 3,
    image: '/images/al_faham.png',
    title: 'BBQ Al Faham Charcoal Masterpiece',
    caption: '18-hour yogurt marinade grilled over natural embers'
  },
  {
    id: 4,
    image: '/images/mutton_mandi.png',
    title: 'Royal Mutton Mandi Saffron Rice',
    caption: 'Marrow broth infused extra-long aged basmati'
  },
  {
    id: 5,
    image: '/images/jallikattu_beef.png',
    title: 'Fiery Beef Jallikattu Ribs',
    caption: 'Tamil-Arabian fusion braised until bone tender'
  }
];

export default function AboutSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Automatic 3-second photo scrolling
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  return (
    <section id="about" className="py-20 lg:py-28 text-charcoal-900 relative overflow-hidden">
      {/* Subtle background texture overlay matching ReviewsSection */}
      <div className="absolute inset-0 bg-[radial-gradient(#78350f_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* LEFT COLUMN: About Writings, Owner & Team Members Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100/90 border border-amber-300/80 text-amber-800 text-xs font-extrabold uppercase tracking-wider shadow-sm backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span>Our Journey &amp; Hospitality</span>
            </div>

            <div className="space-y-3">
              <span className="text-xs font-bold text-amber-800 uppercase tracking-widest block">
                Welcome to Foodie Paradise
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-charcoal-900 leading-tight">
                About <span className="gold-gradient-text">AL NAAS MANDI</span>
              </h2>
            </div>

            {/* Owner's Vision */}
            <div className="p-5 rounded-2xl bg-white/90 border border-amber-300/70 shadow-lg shadow-amber-900/5 backdrop-blur-md space-y-2 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-2 text-amber-800 font-serif font-bold text-base">
                <Store className="w-5 h-5 text-amber-600" />
                <span>Founding Vision &amp; Owner's Heritage</span>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed font-light">
                "Founded with a passion for genuine Yemeni culinary traditions, Al Naas Mandi was created to bring families and friends together around generous shared platters, rich coal aromas, and royal Arabian hospitality."
              </p>
            </div>

            {/* Team Members Narrative */}
            <div className="space-y-3">
              <h4 className="font-serif text-xl font-bold text-charcoal-900 flex items-center gap-2">
                <Users className="w-5 h-5 text-amber-600" />
                <span>Our Dedicated Culinary Team</span>
              </h4>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed font-light">
                Our kitchen is powered by master pit-chefs who bring decades of specialized experience in Yemeni taboon cooking, custom spice grinding, and live charcoal roasting. From 18-hour yogurt marinades to saffron-steamed aged basmati, our team prepares every dish fresh daily with uncompromising precision.
              </p>
            </div>

            {/* Key Metrics / Highlights Grid */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              <div className="p-3.5 rounded-2xl bg-white/80 border border-amber-200/90 text-center shadow-sm hover:border-amber-300 hover:shadow-md transition-all">
                <Award className="w-5 h-5 text-amber-700 mx-auto mb-1" />
                <span className="text-xs font-bold text-charcoal-900 block">Master Chefs</span>
                <span className="text-[10px] text-gray-600">Decades of Craft</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/80 border border-amber-200/90 text-center shadow-sm hover:border-amber-300 hover:shadow-md transition-all">
                <Sparkles className="w-5 h-5 text-amber-700 mx-auto mb-1" />
                <span className="text-xs font-bold text-charcoal-900 block">100% Authentic</span>
                <span className="text-[10px] text-gray-600">Yemeni Spices</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/80 border border-amber-200/90 text-center shadow-sm hover:border-amber-300 hover:shadow-md transition-all">
                <HeartHandshake className="w-5 h-5 text-amber-700 mx-auto mb-1" />
                <span className="text-xs font-bold text-charcoal-900 block">Majlis Seating</span>
                <span className="text-[10px] text-gray-600">Royal Service</span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Automatic 3-Second Photo Slideshow */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6"
          >
            <div className="relative rounded-3xl overflow-hidden border border-amber-300/80 bg-white p-3 shadow-2xl shadow-amber-950/10 group">
              <div className="relative h-80 sm:h-[420px] rounded-2xl overflow-hidden bg-charcoal-950">

                {/* Image Cross-Fade Carousel */}
                <AnimatePresence mode="wait">
                  <motion.img
                    key={SLIDES[currentSlide].id}
                    src={SLIDES[currentSlide].image}
                    alt={SLIDES[currentSlide].title}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.7 }}
                    className="w-full h-full object-cover"
                  />
                </AnimatePresence>

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/90 via-transparent to-transparent pointer-events-none" />

                {/* Top Badge Overlay */}
                <div className="absolute top-4 left-4 z-10 bg-charcoal-950/80 backdrop-blur-md px-3 py-1 rounded-full border border-amber-500/30 flex items-center gap-1.5 text-amber-300 text-[11px] font-bold">
                  <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                  <span>Gallery Showcase (Auto 3s)</span>
                </div>

                {/* Prev / Next Controls */}
                <button
                  onClick={handlePrev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-charcoal-950/80 border border-amber-500/30 text-amber-300 hover:text-white hover:bg-amber-600/40 flex items-center justify-center backdrop-blur-sm transition-all cursor-pointer"
                  aria-label="Previous photo"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-charcoal-950/80 border border-amber-500/30 text-amber-300 hover:text-white hover:bg-amber-600/40 flex items-center justify-center backdrop-blur-sm transition-all cursor-pointer"
                  aria-label="Next photo"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Bottom Caption Overlay */}
                <div className="absolute bottom-4 left-4 right-4 z-10 bg-charcoal-950/90 backdrop-blur-md p-3.5 rounded-xl border border-amber-500/30">
                  <h4 className="font-serif text-sm font-bold text-amber-300">
                    {SLIDES[currentSlide].title}
                  </h4>
                  <p className="text-xs text-gray-300">
                    {SLIDES[currentSlide].caption}
                  </p>
                </div>

              </div>

              {/* Navigation Indicators */}
              <div className="flex items-center justify-center gap-2 pt-3 pb-1">
                {SLIDES.map((slide, idx) => (
                  <button
                    key={slide.id}
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-2 rounded-full transition-all cursor-pointer ${currentSlide === idx ? 'w-8 bg-amber-600' : 'w-2 bg-amber-300/60 hover:bg-amber-500'
                      }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
