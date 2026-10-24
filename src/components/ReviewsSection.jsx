import React from 'react';
import { motion } from 'framer-motion';
import { REVIEWS_DATA } from '../data/menuData';
import { Star, Quote, Award, MapPin, Users, UtensilsCrossed } from 'lucide-react';

export default function ReviewsSection() {
  const stats = [
    {
      number: '1+',
      label: 'Years Experience',
      icon: Award
    },
    {
      number: '1',
      label: 'Outlets',
      icon: MapPin
    },
    {
      number: '10 lakh+',
      label: 'Customers Served',
      icon: Users
    },
    {
      number: '100+',
      label: 'Dishes',
      icon: UtensilsCrossed
    }
  ];

  return (
    <section className="text-charcoal-950 relative overflow-hidden">
      {/* Subtle background glow & texture overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(#78350f_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

      {/* 1. KEY EXPERIENCE STATS BANNER (FULL WIDTH DIVIDER) */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="w-full bg-[#141210] border-y border-amber-500/20 shadow-2xl relative overflow-hidden py-10 sm:py-14 z-20"
      >
        {/* Subtle Ambient Glow within Stats Banner */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-amber-500/5 blur-2xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 items-center relative z-10">
          {stats.map((stat, idx) => (
            <React.Fragment key={idx}>
              <div className="flex flex-col items-center justify-center text-center group py-2">
                <span className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white drop-shadow-md group-hover:scale-105 transition-transform duration-300">
                  {stat.number}
                </span>
                <span className="text-amber-200/90 text-xs sm:text-sm font-semibold tracking-wide mt-2">
                  {stat.label}
                </span>
              </div>

              {/* Vertical glowing divider between stat columns (hide on last item) */}
              {idx < stats.length - 1 && (
                <div className={`hidden lg:block absolute top-1/2 -translate-y-1/2 w-[2px] h-16 bg-gradient-to-b from-transparent via-amber-500/50 to-transparent`}
                  style={{ left: `${(idx + 1) * 25}%` }}
                >
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-8 bg-amber-400 rounded-full blur-[2px]" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16 py-16 sm:py-20 lg:py-24">
        {/* 2. GOOGLE STAR RATING BADGE & SECTION TITLES */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto px-4 space-y-4 pt-12"
        >
          {/* Google Rating Pill Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 sm:px-5 py-2 rounded-full bg-[#141210] text-amber-50 border border-amber-400/50 shadow-2xl backdrop-blur-md">
            <svg className="w-4 sm:w-5 h-4 sm:h-5" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
            </svg>

            <span className="text-xs sm:text-sm font-black uppercase tracking-widest text-amber-300">
              GOOGLE RATING
            </span>

            <span className="text-sm font-black text-white ml-0.5">4.5</span>

            <div className="flex items-center gap-0.5 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              ))}
            </div>

            <span className="text-[11px] text-amber-200/80 font-medium hidden sm:inline ml-0.5">
              (1,500+ Reviews)
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-black text-charcoal-950 tracking-tight leading-tight">
            Loved by Arabian Food Connoisseurs
          </h2>
          <p className="text-charcoal-950/80 text-sm sm:text-base max-w-xl mx-auto font-semibold leading-relaxed">
            See why thousands of happy patrons keep returning for our authentic Mandi rice &amp; Al Faham charcoal delicacies.
          </p>
        </motion.div>


        {/* 3. CONTINUOUS INFINITE MARQUEE WITH EDGE FADING & DECENT GAPS */}
        <div
          className="w-full max-w-[1280px] mx-auto overflow-hidden py-4 px-4 sm:px-8 lg:px-12"
          style={{
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 40px, black calc(100% - 40px), transparent)',
            maskImage: 'linear-gradient(to right, transparent, black 40px, black calc(100% - 40px), transparent)'
          }}
        >
          <div className="flex w-max animate-marquee">

            {/* Group 1 */}
            <div className="flex gap-6 sm:gap-8 pr-6 sm:pr-8">
              {REVIEWS_DATA.map((rev, idx) => (
                <div
                  key={`${rev.id}-${idx}-1`}
                  className="w-[310px] sm:w-[340px] md:w-[360px] lg:w-[370px] xl:w-[350px] flex-shrink-0 bg-[#141210]/95 p-6 sm:p-7 rounded-[28px] border border-amber-400/30 space-y-4 flex flex-col justify-between backdrop-blur-md group relative hover:border-amber-400/60 transition-colors"
                >
                  {/* Top Row: Stars + GOOGLE VERIFIED Badge & Quote Icon */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-amber-400">
                        {[...Array(rev.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                        ))}
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="text-[10px] uppercase font-bold tracking-widest px-3 py-0.5 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/30">
                          GOOGLE VERIFIED
                        </span>
                        <Quote className="w-8 h-8 text-amber-400/20 group-hover:text-amber-400/40 transition-colors" />
                      </div>
                    </div>

                    {/* Comment */}
                    <p className="text-amber-100/90 text-sm sm:text-base italic leading-relaxed font-light pt-2">
                      "{rev.comment}"
                    </p>
                  </div>

                  {/* Bottom Row: Name & Date */}
                  <div className="pt-4 border-t border-amber-900/40 flex items-center justify-between">
                    <span className="font-extrabold text-amber-300 text-sm sm:text-base">
                      {rev.name}
                    </span>
                    <span className="text-xs sm:text-sm text-amber-200/60 font-medium">
                      {rev.date}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Group 2 (Duplicate for seamless scroll) */}
            <div className="flex gap-6 sm:gap-8 pr-6 sm:pr-8">
              {REVIEWS_DATA.map((rev, idx) => (
                <div
                  key={`${rev.id}-${idx}-2`}
                  className="w-[310px] sm:w-[340px] md:w-[360px] lg:w-[370px] xl:w-[380px] flex-shrink-0 bg-[#141210]/95 p-6 sm:p-7 rounded-[28px] border border-amber-400/30 space-y-4 flex flex-col justify-between backdrop-blur-md group relative hover:border-amber-400/60 transition-colors"
                >
                  {/* Top Row: Stars + GOOGLE VERIFIED Badge & Quote Icon */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-amber-400">
                        {[...Array(rev.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                        ))}
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="text-[10px] uppercase font-bold tracking-widest px-3 py-0.5 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/30">
                          GOOGLE VERIFIED
                        </span>
                        <Quote className="w-8 h-8 text-amber-400/20 group-hover:text-amber-400/40 transition-colors" />
                      </div>
                    </div>

                    {/* Comment */}
                    <p className="text-amber-100/90 text-sm sm:text-base italic leading-relaxed font-light pt-2">
                      "{rev.comment}"
                    </p>
                  </div>

                  {/* Bottom Row: Name & Date */}
                  <div className="pt-4 border-t border-amber-900/40 flex items-center justify-between">
                    <span className="font-extrabold text-amber-300 text-sm sm:text-base">
                      {rev.name}
                    </span>
                    <span className="text-xs sm:text-sm text-amber-200/60 font-medium">
                      {rev.date}
                    </span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
