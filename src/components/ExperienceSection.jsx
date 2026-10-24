import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Play, X, Store } from 'lucide-react';

export default function ExperienceSection() {
  const [isPlayingTour, setIsPlayingTour] = useState(false);
  const rawVirtualTourUrl = import.meta.env.VITE_VIRTUAL_TOUR_URL || 'https://kuula.co/share/hLv0L/collection/7ZxcR?logo=1&info=0&logosize=85&fs=1&vr=1&zoom=1&initload=0&autorotate=0.18&autop=30&autopalt=1&thumbs=3&alpha=0.60&inst=0';

  // Append unique timestamp parameter on every load to bypass browser iframe caching on refresh
  const freshVirtualTourUrl = useMemo(() => {
    const separator = rawVirtualTourUrl.includes('?') ? '&' : '?';
    return `${rawVirtualTourUrl}${separator}_t=${Date.now()}`;
  }, []);

  return (
    <section className="py-20 lg:py-28 bg-cream-50 relative overflow-hidden arabian-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="bg-gradient-to-br from-charcoal-900 via-charcoal-950 to-charcoal-900 p-3 sm:p-5 rounded-3xl border border-amber-500/30 shadow-2xl relative overflow-hidden">

          {/* Full-Area 360° Virtual Tour Showcase Container */}
          <div className="relative w-full h-[480px] sm:h-[580px] lg:h-[640px] rounded-2xl overflow-hidden bg-charcoal-950 border border-amber-500/20 shadow-inner group">

            {isPlayingTour ? (
              /* Active 360° Virtual Tour Player */
              <div className="relative w-full h-full">
                <div className="absolute top-4 left-4 z-20 flex items-center pointer-events-none">
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-charcoal-950/90 border border-amber-500/40 text-amber-300 text-xs font-extrabold uppercase tracking-wider backdrop-blur-md pointer-events-auto shadow-lg">
                    <Sparkles className="w-4 h-4 text-amber-400" />
                    <span>Live 360° Virtual Tour</span>
                  </div>
                </div>

                <button
                  onClick={() => setIsPlayingTour(false)}
                  className="absolute top-4 right-4 z-20 bg-charcoal-950/90 border border-amber-500/40 text-amber-300 hover:text-white hover:bg-amber-600/40 px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 shadow-xl backdrop-blur-md cursor-pointer transition-all"
                >
                  <X className="w-4 h-4 text-amber-400" />
                  <span>Close Tour</span>
                </button>

                <iframe
                  key={freshVirtualTourUrl}
                  src={freshVirtualTourUrl}
                  title="360° Virtual Tour"
                  className="w-full h-full border-0 relative z-10"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : (
              /* Storefront Image Preview with "View Shop Tour" Button */
              <>
                <img
                  src="/images/storefront.jpg"
                  alt="Al Naas Mandi Restaurant Storefront"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/50 to-charcoal-950/20"></div>

                {/* Top Badge Overlay */}
                <div className="absolute top-4 left-4 z-20 flex items-center gap-2 px-4 py-2 rounded-full bg-charcoal-950/80 border border-amber-500/40 text-amber-300 text-xs font-extrabold uppercase tracking-wider backdrop-blur-md shadow-lg">
                  <Store className="w-4 h-4 text-amber-400" />
                  <span>Al Naas Mandi Storefront</span>
                </div>

                {/* Center Action Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 text-center px-4 z-20">
                  <div className="space-y-2 max-w-xl">
                    <span className="text-xs font-bold text-amber-400 uppercase tracking-widest bg-amber-500/10 px-3.5 py-1 rounded-full border border-amber-500/30 inline-block">
                      360° Interactive Atmosphere
                    </span>
                    <h3 className="font-serif text-3xl sm:text-5xl font-extrabold text-amber-50 leading-tight drop-shadow-md">
                      Step Inside <span className="gold-gradient-text">Al Naas Mandi</span>
                    </h3>
                    <p className="text-gray-200 text-xs sm:text-sm font-light leading-relaxed max-w-md mx-auto drop-shadow-md">
                      Explore our traditional Majlis floor seating, warm lighting, and authentic Arabian decor in an interactive 360° tour.
                    </p>
                  </div>

                  {/* Primary CTA Button to View Shop Virtual Tour */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsPlayingTour(true)}
                    className="px-8 py-4 rounded-2xl gold-gradient-bg text-white text-sm font-extrabold flex items-center justify-center gap-3 shadow-2xl shadow-amber-500/30 hover:shadow-amber-500/50 transition-all cursor-pointer border border-amber-300/40"
                  >
                    <div className="w-8 h-8 rounded-full bg-charcoal-950/90 text-amber-400 flex items-center justify-center">
                      <Play className="w-4 h-4 fill-amber-400 ml-0.5" />
                    </div>
                    <span>View Shop 360° Virtual Tour</span>
                  </motion.button>
                </div>
              </>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
