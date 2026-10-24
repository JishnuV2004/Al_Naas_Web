import React from 'react';
import { motion } from 'framer-motion';
import { FEATURES_DATA } from '../data/menuData';
import { Flame, Sparkles, ShieldCheck } from 'lucide-react';

export default function FeaturesSection() {
  const iconMap = {
    Flame: Flame,
    Sparkles: Sparkles,
    ShieldCheck: ShieldCheck
  };

  return (
    <section id="why-us" className="py-20 lg:py-28 text-white relative border-b border-amber-900/30 overflow-hidden">
      {/* Background Image with Light Vignette for Maximum Image Visibility */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/Gemini_Generated_Image_9te1xp9te1xp9te1.jpg"
          alt="Features Background"
          className="w-full h-full object-cover brightness-95"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/85 via-charcoal-950/40 to-charcoal-950/60 pointer-events-none"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-3"
        >
          <span className="text-xs font-extrabold tracking-widest text-amber-300 uppercase bg-charcoal-950/60 backdrop-blur-md px-4 py-1.5 rounded-full border border-amber-500/40 inline-block shadow-lg">
            Our Culinary Core
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white drop-shadow-lg">
            Why Food Lovers Choose Mandi Haven
          </h2>
          <p className="text-gray-200 text-base sm:text-lg drop-shadow-md font-light">
            We preserve centuries-old Arabian culinary traditions to bring you an unparalleled dining experience.
          </p>
        </motion.div>

        {/* 3 Structured Items without Solid Box Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12">
          {FEATURES_DATA.map((feature, idx) => {
            const IconComponent = iconMap[feature.icon] || Flame;
            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.15 }}
                className="space-y-5 group p-2"
              >
                <div className="w-14 h-14 rounded-2xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-300 backdrop-blur-md shadow-lg group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-charcoal-950 transition-all duration-300">
                  <IconComponent className="w-7 h-7" />
                </div>

                <div className="space-y-2">
                  <h3 className="font-serif text-2xl font-bold text-white group-hover:text-amber-300 transition-colors drop-shadow-md">
                    {feature.title}
                  </h3>

                  <p className="text-gray-200 text-sm sm:text-base leading-relaxed font-light drop-shadow-md">
                    {feature.description}
                  </p>
                </div>

                <div className="pt-2 flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider drop-shadow-md">
                  <span>Guaranteed Excellence</span>
                  <div className="h-0.5 w-8 bg-amber-400/80"></div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
