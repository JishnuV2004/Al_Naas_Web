import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MENU_CATEGORIES } from '../data/menuData';
import { Search, Flame, Plus, Check, Info, Sparkles, Utensils, Crown, Zap } from 'lucide-react';

export default function MenuSection({ onAddToCart }) {
  const [activeCategory, setActiveCategory] = useState(MENU_CATEGORIES[0].id);
  const [searchQuery, setSearchQuery] = useState('');
  const [addedItems, setAddedItems] = useState({});

  const categoryIcons = {
    'al-faham-mandi': Flame,
    'jallikattu-specials': Zap,
    'beef-mandi': Utensils,
    'mutton-mandi': Crown
  };

  const activeCategoryData = MENU_CATEGORIES.find(c => c.id === activeCategory) || MENU_CATEGORIES[0];

  const filteredItems = activeCategoryData.items.filter(item => {
    return item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
           item.description.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const handleAdd = (item, e) => {
    e.stopPropagation();
    onAddToCart(item);
    setAddedItems(prev => ({ ...prev, [item.id]: true }));
    setTimeout(() => {
      setAddedItems(prev => ({ ...prev, [item.id]: false }));
    }, 1500);
  };

  return (
    <section id="menu" className="py-20 lg:py-28 bg-cream-50 text-charcoal-900 border-b border-amber-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-12 space-y-3"
        >
          <span className="text-xs font-extrabold tracking-widest text-amber-700 uppercase bg-amber-100/80 px-3.5 py-1 rounded-full border border-amber-200 inline-block">
            Full Interactive Menu
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-charcoal-900">
            Explore All 4 Menu Categories
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            Savor Al Faham chicken, fiery Jallikattu ribs, tender beef, and royal mutton mandi.
          </p>
        </motion.div>

        {/* Category Tabs & Search */}
        <div className="mb-10 space-y-6">
          
          <div id="categories" className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto">
            {MENU_CATEGORIES.map((cat) => {
              const IconComponent = categoryIcons[cat.id] || Flame;
              const isActive = cat.id === activeCategory;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`relative flex flex-col items-center justify-center p-4 rounded-2xl border transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-charcoal-950 text-white border-amber-500 shadow-xl shadow-amber-950/20 scale-[1.02]'
                      : 'bg-white text-gray-700 border-gray-200 hover:border-amber-400 hover:bg-amber-50/50'
                  }`}
                >
                  <div className={`p-2.5 rounded-xl mb-2 transition-colors ${
                    isActive ? 'bg-amber-500 text-charcoal-950' : 'bg-amber-100/60 text-amber-700'
                  }`}>
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <span className={`text-sm font-bold text-center ${isActive ? 'text-amber-100' : 'text-gray-800'}`}>
                    {cat.name}
                  </span>
                  <span className={`text-[10px] mt-0.5 ${isActive ? 'text-amber-400' : 'text-gray-500'}`}>
                    {cat.items.length} Delicacies
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Input Bar */}
          <div className="max-w-md mx-auto relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
              <Search className="w-4 h-4 text-gray-400" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={`Search in ${activeCategoryData.name}...`}
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 shadow-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-xs text-gray-400 hover:text-gray-600"
              >
                Clear
              </button>
            )}
          </div>

        </div>

        {/* Category Description Banner */}
        <motion.div 
          key={activeCategory}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-gradient-to-r from-charcoal-950 via-charcoal-900 to-charcoal-950 p-6 rounded-2xl border border-amber-600/30 text-white mb-10 shadow-lg flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div className="space-y-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <h3 className="font-serif text-xl font-bold text-amber-100">{activeCategoryData.name}</h3>
            </div>
            <p className="text-amber-200/80 text-sm italic font-medium max-w-2xl">
              "{activeCategoryData.tagline}"
            </p>
          </div>
          <span className="text-xs font-semibold text-amber-400 bg-amber-950/80 px-3 py-1.5 rounded-lg border border-amber-500/30 whitespace-nowrap">
            Served with Mint Chutney & Garlic Mayonnaise
          </span>
        </motion.div>

        {/* Food Items Grid with Framer Motion */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory + searchQuery}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="bg-white rounded-2xl border border-amber-900/10 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group"
              >
                <div className="relative h-48 sm:h-52 bg-charcoal-900 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-transparent to-transparent"></div>
                  
                  {item.badge && (
                    <span className="absolute top-3 left-3 bg-amber-600 text-white font-extrabold text-[11px] px-2.5 py-1 rounded-full uppercase tracking-wider shadow-md">
                      {item.badge}
                    </span>
                  )}

                  {item.spiceLevel && (
                    <span className="absolute top-3 right-3 bg-charcoal-950/90 text-amber-400 font-semibold text-[10px] px-2.5 py-1 rounded-full border border-amber-500/30 backdrop-blur-sm">
                      {item.spiceLevel}
                    </span>
                  )}

                  <div className="absolute bottom-3 left-3">
                    <span className="text-2xl font-black text-amber-300 font-serif drop-shadow-md">
                      ₹{item.price}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-serif text-xl font-bold text-charcoal-900 group-hover:text-amber-700 transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                      {item.description}
                    </p>

                    {item.detailNote && (
                      <div className="mt-2 p-2.5 rounded-lg bg-amber-50 border border-amber-200/80 flex items-start gap-2">
                        <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                        <p className="text-[11px] font-semibold text-amber-900">
                          {item.detailNote}
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="pt-3 border-t border-gray-100 flex items-center justify-between gap-3">
                    <div className="text-left">
                      <span className="text-[10px] uppercase tracking-wider font-extrabold text-gray-400 block">Portion Options</span>
                      <span className="text-xs font-semibold text-gray-700">
                        {item.portions[0]}
                      </span>
                    </div>

                    <button
                      onClick={(e) => handleAdd(item, e)}
                      className={`px-4 py-2.5 rounded-xl font-bold text-xs flex items-center gap-1.5 transition-all duration-200 cursor-pointer shadow-md ${
                        addedItems[item.id]
                          ? 'bg-emerald-600 text-white'
                          : 'gold-gradient-bg text-white hover:shadow-amber-600/30'
                      }`}
                    >
                      {addedItems[item.id] ? (
                        <>
                          <Check className="w-4 h-4" />
                          <span>Added!</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-4 h-4" />
                          <span>Add to Order</span>
                        </>
                      )}
                    </button>
                  </div>

                </div>

              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
