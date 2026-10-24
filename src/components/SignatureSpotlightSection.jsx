import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Flame, Crown, Utensils, Plus } from 'lucide-react';

export default function SignatureSpotlightSection({ onAddToCart, onOpenMenu }) {
  const spotlightItems = [
    {
      id: 'js-2',
      title: 'Beef Jallikattu Ribs Mandi',
      category: 'Jallikattu Special',
      description: 'Slow-cooked prime beef ribs coated in dark fiery Jallikattu masala served on a mountain of Mandi rice.',
      price: 490,
      image: '/images/jallikattu_beef.png',
      badge: 'Fiery Bestseller',
      spice: 'Fiery Hot'
    },
    {
      id: 'afm-1',
      title: 'BBQ Al Faham Mandi',
      category: 'Al Fahm Mandi',
      description: 'Juicy chicken grilled over open coals infused with smoky BBQ marinade, served over Mandi basmati rice.',
      price: 340,
      image: '/images/al_faham.png',
      badge: 'Crowd Favorite',
      spice: 'Mild'
    },
    {
      id: 'mm-1',
      title: 'Royal Mutton Mandi',
      category: 'Mutton Mandi',
      description: 'Ultra-tender mutton shank pressure-steamed under saffron basmati rice with toasted raisins and pine nuts.',
      price: 520,
      image: '/images/mutton_mandi.png',
      badge: 'Royal Dish',
      spice: 'Aromatic'
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-cream-50 text-amber-50 border-b border-amber-900/30 arabian-pattern relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-3"
        >
          <span className="text-xs font-extrabold tracking-widest text-amber-400 uppercase bg-amber-500/10 px-3.5 py-1 rounded-full border border-amber-500/30 inline-block">
            Chef's Spotlight
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-amber-50">
            Signature Delicacies You Must Experience
          </h2>
          <p className="text-gray-300 text-base sm:text-lg">
            Handpicked signature creations that define the legacy of Mandi Haven.
          </p>
        </motion.div>

        {/* Spotlight Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {spotlightItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="bg-[#18100B]/90 rounded-3xl border border-amber-500/20 shadow-xl overflow-hidden flex flex-col group hover:border-amber-500/50 hover:shadow-2xl transition-all duration-300 backdrop-blur-md"
            >
              <div className="relative h-64 overflow-hidden bg-charcoal-950">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#18100B] via-transparent to-transparent"></div>
                
                <span className="absolute top-4 left-4 bg-amber-600 text-white font-extrabold text-[11px] px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                  {item.badge}
                </span>

                <span className="absolute top-4 right-4 bg-charcoal-950/80 text-amber-300 font-semibold text-xs px-2.5 py-1 rounded-full border border-amber-500/30 backdrop-blur-sm">
                  {item.spice}
                </span>

                <div className="absolute bottom-4 left-4">
                  <span className="text-3xl font-extrabold text-amber-300 font-serif drop-shadow-md">
                    ₹{item.price}
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <span className="text-[11px] font-extrabold uppercase tracking-widest text-amber-400 block">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-amber-50 group-hover:text-amber-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-amber-900/30 flex items-center justify-between">
                  <button
                    onClick={onOpenMenu}
                    className="text-xs font-bold text-amber-400 hover:text-amber-300 underline underline-offset-4 cursor-pointer"
                  >
                    View Details &amp; Portions
                  </button>

                  <button
                    onClick={() => onAddToCart({
                      id: item.id,
                      name: item.title,
                      price: item.price,
                      image: item.image
                    })}
                    className="px-4 py-2 rounded-xl gold-gradient-bg text-white font-bold text-xs flex items-center gap-1.5 shadow-md hover:shadow-amber-600/30 transition-all cursor-pointer"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Quick Order</span>
                  </button>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
