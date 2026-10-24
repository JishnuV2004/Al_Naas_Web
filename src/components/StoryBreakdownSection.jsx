import React from 'react';
import { motion } from 'framer-motion';
import { Flame, Sparkles, Utensils, ShieldCheck, Heart, Award } from 'lucide-react';

export default function StoryBreakdownSection({ onViewMenu }) {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section id="craft-story" className="py-24 lg:py-32 bg-cream-50 text-charcoal-900 relative overflow-hidden arabian-pattern">

      {/* Subtle Luxury Gold Ambient Glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-amber-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-24 lg:space-y-32">

        {/* Section Lead Title */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center max-w-4xl mx-auto space-y-4"
        >
          <span className="text-xs font-extrabold tracking-widest text-amber-700 uppercase bg-amber-100/80 px-4 py-1.5 rounded-full border border-amber-200 inline-block shadow-sm">
            The Culinary Craft
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-charcoal-900">
            How We Define <span className="gold-gradient-text">Authentic Mandi &amp; Al Faham</span> Excellence.
          </h2>
          <p className="text-gray-700 text-base sm:text-xl font-light leading-relaxed max-w-2xl mx-auto">
            Unlike quick fast-food grilling, our kitchen follows centuries-old Arabian pit-cooking methods. Every step is an art.
          </p>
        </motion.div>

        {/* Feature 1: The Charcoal Pit Ritual */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
        >
          <div className="lg:col-span-6 space-y-6 order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 text-amber-700 text-xs font-bold uppercase tracking-widest">
              <Flame className="w-4 h-4 text-amber-600" />
              <span>Step 01 &bull; 100% Wood Charcoal Roasting</span>
            </div>
            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal-900 leading-tight">
              Slow-Grilled Over Natural Hardwood Embers.
            </h3>
            <p className="text-gray-700 text-base leading-relaxed font-light">
              Our signature <strong className="text-amber-800 font-semibold">Al Faham chicken</strong> is marinated for 18 hours in Arabian yogurt and hand-ground spices, then slow-grilled over authentic wood coals. No gas burners, no shortcuts—just pure charcoal smoke and tenderness.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white/90 border border-amber-200/80 shadow-md backdrop-blur-md">
                <span className="block text-2xl font-extrabold text-amber-700 font-serif">18 Hours</span>
                <span className="text-xs text-gray-600">Yogurt Spice Infusion</span>
              </div>
              <div className="p-4 rounded-xl bg-white/90 border border-amber-200/80 shadow-md backdrop-blur-md">
                <span className="block text-2xl font-extrabold text-amber-700 font-serif">100% Coals</span>
                <span className="text-xs text-gray-600">Natural Hardwood Smoke</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="relative rounded-3xl overflow-hidden border border-amber-300/60 bg-white p-2 shadow-xl">
              <img
                src="/images/al_faham.png"
                alt="Al Faham Charcoal Grilling Process"
                className="w-full h-80 sm:h-96 object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 bg-charcoal-950/90 backdrop-blur-md p-3 rounded-xl border border-amber-500/30">
                <span className="text-xs font-bold text-amber-300">Flame &amp; Smoke Chemistry</span>
                <p className="text-[11px] text-gray-300">Sear lock technology seals moisture while rendering skin crisp.</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Feature 2: The Saffron & Meat Rendered Rice Steaming */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
        >
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden border border-amber-300/60 bg-white p-2 shadow-xl">
              <img
                src="/images/mutton_mandi.png"
                alt="Mutton Mandi Saffron Steaming"
                className="w-full h-80 sm:h-96 object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 bg-charcoal-950/90 backdrop-blur-md p-3 rounded-xl border border-amber-500/30">
                <span className="text-xs font-bold text-amber-300">Vessel Steam Seal (Taboon)</span>
                <p className="text-[11px] text-gray-300">Basmati grains absorb pure rendered juices from tender mutton shanks.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-amber-700 text-xs font-bold uppercase tracking-widest">
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span>Step 02 &bull; Meat-Dripped Basmati Steaming</span>
            </div>
            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal-900 leading-tight">
              Aged Basmati Steamed Under Meat Drippings.
            </h3>
            <p className="text-gray-700 text-base leading-relaxed font-light">
              Traditional Mandi rice is non-greasy and light. We suspend prime mutton shanks above extra-long aged basmati, sealing the pot with dough. As the meat tenderizes, its aromatic juices drip down into saffron-infused rice.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white/90 border border-amber-200/80 shadow-md backdrop-blur-md">
                <span className="block text-2xl font-extrabold text-amber-700 font-serif">Extra Long</span>
                <span className="text-xs text-gray-600">Aged Basmati Grains</span>
              </div>
              <div className="p-4 rounded-xl bg-white/90 border border-amber-200/80 shadow-md backdrop-blur-md">
                <span className="block text-2xl font-extrabold text-amber-700 font-serif">Saffron &amp; Clove</span>
                <span className="text-xs text-gray-600">Pure Essential Aromatics</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Feature 3: The Fiery Jallikattu Spice Alchemy */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
        >
          <div className="lg:col-span-6 space-y-6 order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 text-amber-700 text-xs font-bold uppercase tracking-widest">
              <Award className="w-4 h-4 text-amber-600" />
              <span>Step 03 &bull; Tamil-Arabian Fusion Masala</span>
            </div>
            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal-900 leading-tight">
              Fiery Beef Jallikattu Rib Fusion.
            </h3>
            <p className="text-gray-700 text-base leading-relaxed font-light">
              Our house signature <strong className="text-amber-800 font-semibold">Jallikattu Specials</strong> combine bold southern black pepper roast recipes with Yemeni rib braising methods. The result is fall-off-the-bone tender beef ribs with a rich, fiery crust.
            </p>
            <div className="p-4 rounded-xl bg-amber-100/80 border border-amber-300 text-amber-900 text-xs sm:text-sm font-medium shadow-sm">
              "A dish created for true spice connoisseurs who crave bold heat backed by depth of flavor."
            </div>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="relative rounded-3xl overflow-hidden border border-amber-300/60 bg-white p-2 shadow-xl">
              <img
                src="/images/jallikattu_beef.png"
                alt="Beef Jallikattu Ribs Craft"
                className="w-full h-80 sm:h-96 object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 bg-charcoal-950/90 backdrop-blur-md p-3 rounded-xl border border-amber-500/30">
                <span className="text-xs font-bold text-amber-300">Crushed Pepper &amp; Curry Leaf Roast</span>
                <p className="text-[11px] text-gray-300">Beef rib meat braised for 4 hours until bone-tender.</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* View All Menu Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 sm:mt-12 mb-4 text-center"
        >
          <button
            onClick={onViewMenu}
            className="group relative inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-600 via-amber-500 to-amber-700 text-white rounded-full font-serif font-bold text-sm sm:text-base uppercase tracking-wider shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <span>View More</span>
            <span className="text-amber-100 group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </motion.div>

      </div>
    </section>
  );
}
