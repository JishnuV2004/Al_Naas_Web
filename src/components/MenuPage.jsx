import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowUp, Sparkles, Flame, Droplets, UtensilsCrossed, Search } from 'lucide-react';
import Footer from './Footer';

const FOOD_MENU = [
  {
    title: "Al Faham Mandi",
    subtitle: "Smoky Arabian Rice Combos & Fire-Roasted Specials",
    icon: Flame,
    subCategories: [
      {
        name: "Mandi Combos",
        items: [
          "Normal Al Faham Mandi", "Peri Peri Al Faham Mandi", "Smokey Al Faham Mandi",
          "Jamaican Al Faham Mandi", "BBQ Al Faham Mandi", "Chef Special Mexican Al Faham Mandi",
          "Kanthari Al Faham Mandi", "Juicy Al Faham Mandi", "Butter Creamy Al Faham Mandi"
        ]
      }
    ]
  },
  {
    title: "Al Faham Specials",
    subtitle: "Arabic Comfort",
    icon: Flame,
    subCategories: [
      {
        name: "Fire-Roasted Chicken",
        items: [
          "Normal Al Faham", "Peri Peri Alfaham", "Smokey Al Faham",
          "Jamaican Al Faham", "BBQ Al Faham", "Chef Special Mexican Al Faham",
          "Kanthari Al Faham", "Juicy Al Faham", "Butter Creamy Al Faham"
        ]
      }
    ]
  },
  {
    title: "Chef's Signature",
    subtitle: "Tender Authentic Arabian Taste",
    icon: Flame,
    subCategories: [
      {
        name: "Jallikattu Specials",
        items: ["Jallikattu Al Faham", "Jallikattu Al Faham Mandi", "Jallikattu Beef Rib Piece", "Jallikattu Beef Ribs Mandi"]
      },
      {
        name: "Mutton Special",
        items: ["Mutton Mandi", "Mutton Mandi Piece"]
      }
    ]
  },
  {
    title: "Shawai Specials",
    subtitle: "Tender Chicken with Smoky Flavour",
    icon: Sparkles,
    subCategories: [
      {
        name: "Shawai Classics",
        items: ["Chicken Shawai", "Masala Shawai", "Shawai Mandi", "Masala Shawai Mandi"]
      }
    ]
  },
  {
    title: "Arabian Royal",
    subtitle: "Royal Arabian Flavours Served with Perfection",
    icon: UtensilsCrossed,
    subCategories: [
      {
        name: "Beef Ribs & Tawa",
        items: ["Beef Ribs Mandi", "Beef Rib Piece", "Beef Tawa Mandi", "Beef Tawa Piece"]
      },
      {
        name: "Chicken Madhooth",
        items: ["Chicken Madhooth", "Chicken Madhooth Piece"]
      },
      {
        name: "Chicken Shuwa",
        items: ["Chicken Shuwa Mandi", "Chicken Shuwa Piece"]
      },
      {
        name: "Chicken Kuzhimandi",
        items: ["Chicken Kuzhimandi", "Chicken Kuzhimandi Piece"]
      }
    ]
  },
  {
    title: "Extras & Breads",
    subtitle: "From Flavoured Rice to Fresh Breads",
    icon: UtensilsCrossed,
    subCategories: [
      {
        name: "Sides",
        items: ["Mandi Rice", "Mayonnaise", "Kuboos", "Rumali Rotti"]
      }
    ]
  }
];

const BEVERAGES_MENU = [
  {
    title: "Refreshments",
    subtitle: "Fresh and Zesty Delights",
    icon: Droplets,
    subCategories: [
      {
        name: "Lime Delights",
        items: ["Fresh Lime", "Lime Soda", "Chilli Soda"]
      },
      {
        name: "Special Lime Delights",
        items: ["Mint Lime", "Ginger Lime", "Grape Lime", "Orange Lime", "Pineapple Lime"]
      },
      {
        name: "Juice Delights",
        items: ["Water Melon", "Orange", "Pineapple", "Grape", "Apple", "Anar"]
      }
    ]
  },
  {
    title: "Shakes & Mocktails",
    subtitle: "Sweet and Chilled",
    icon: Droplets,
    subCategories: [
      {
        name: "Chocolate Shakes",
        items: ["Boost Shake", "Sharjah Shake", "Chocolate Shake", "Dairy Milk Shake", "Gems Shake", "Kitkat Shake", "Oreo Shake", "Snickers Shake", "Monster Shake"]
      },
      {
        name: "Shakes Delights",
        items: ["Chikku Shake", "Mango Shake", "Shamam Shake", "Pista Shake", "Vanilla Shake", "Strawberry Shake", "Butterscotch Shake"]
      },
      {
        name: "Tender Specials",
        items: ["Tender Shake", "Tender Boost", "Tender Magic", "Tender Cashew", "Tender Banana", "Tender Chikku", "Tender Mango", "Tender Dry Fruits"]
      },
      {
        name: "Mocktails",
        items: ["Black Current", "Blue Curacao", "Blueberry", "Green Apple", "Guava", "Kiwi", "Litchi", "Mango", "Passion Fruit", "Pineapple", "Strawberry"]
      }
    ]
  },
  {
    title: "Desserts",
    subtitle: "Sweet Endings",
    icon: Sparkles,
    subCategories: [
      {
        name: "Falooda",
        items: ["Fruit Salad", "Normal Falooda", "Mango Falooda", "Pista Falooda", "Royal Falooda", "Dry Fruit Falooda"]
      },
      {
        name: "Ice Cream Scoops",
        items: ["Vanilla", "Pista", "Butterscotch", "Chocolate", "Mango", "Strawberry"]
      }
    ]
  }
];

export default function MenuPage({ onBack, onOpenReservation }) {
  const [activeTab, setActiveTab] = useState('food'); // 'food' or 'drinks'
  const [searchQuery, setSearchQuery] = useState('');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const filterMenu = (menu) => {
    if (!searchQuery.trim()) return menu;
    const lowerQuery = searchQuery.toLowerCase();

    return menu.map(category => {
      const filteredSubs = category.subCategories.map(sub => {
        const filteredItems = sub.items.filter(item => item.toLowerCase().includes(lowerQuery));
        if (filteredItems.length > 0 || sub.name.toLowerCase().includes(lowerQuery)) {
          return { ...sub, items: filteredItems.length > 0 ? filteredItems : sub.items };
        }
        return null;
      }).filter(Boolean);

      if (filteredSubs.length > 0 || category.title.toLowerCase().includes(lowerQuery)) {
        return { ...category, subCategories: filteredSubs.length > 0 ? filteredSubs : category.subCategories };
      }
      return null;
    }).filter(Boolean);
  };

  const displayedFood = filterMenu(FOOD_MENU);
  const displayedDrinks = filterMenu(BEVERAGES_MENU);

  return (
    <div className="min-h-screen bg-[#FAF5EC] text-charcoal-900 font-sans antialiased relative arabian-pattern flex flex-col">
      {/* Header Overlay */}
      <div className="relative z-50  ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-charcoal-900 hover:text-amber-700 font-bold uppercase tracking-wider text-sm transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="hidden sm:inline">Back</span>
          </button>

          <div className="flex items-center gap-3">
            <img
              src="/logo/al-naaz-mandi-logo-transparent.png"
              alt="Al Naaz Logo"
              className="w-10 sm:w-12 drop-shadow-md"
            />
            <h1 className="font-serif text-xl sm:text-2xl font-extrabold text-charcoal-950 uppercase tracking-widest">
              AL NAAZ
            </h1>
          </div>
          <div className="w-20 sm:w-24" /> {/* Spacer for centering */}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-16 flex-grow">

        {/* Navigation & Search Bar */}
        <div className="sticky top-0 z-40 bg-[#FAF5EC]/90 backdrop-blur-md pt-4 pb-4 border-b border-amber-900/10 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 mb-12 shadow-sm">
          {/* Tabs */}
          <div className="flex bg-white/50 p-1.5 rounded-full border border-amber-900/10 shadow-sm">
            <button
              onClick={() => setActiveTab('food')}
              className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 ${activeTab === 'food' ? 'bg-gradient-to-r from-charcoal-900 to-charcoal-950 text-amber-400 shadow-xl border border-amber-900/20' : 'text-charcoal-900/70 hover:text-charcoal-900'}`}
            >
              Main Course
            </button>
            <button
              onClick={() => setActiveTab('drinks')}
              className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 ${activeTab === 'drinks' ? 'bg-gradient-to-r from-charcoal-900 to-charcoal-950 text-amber-400 shadow-xl border border-amber-900/20' : 'text-charcoal-900/70 hover:text-charcoal-900'}`}
            >
              Drinks & Desserts
            </button>
          </div>

          {/* Search */}
          <div className="relative w-full md:w-80">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-amber-600/60" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search dishes, drinks..."
              className="w-full pl-12 pr-4 py-3 bg-white/80 backdrop-blur-sm border border-amber-900/10 rounded-full focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 outline-none transition-all text-charcoal-950 font-medium placeholder:text-charcoal-900/40 shadow-sm"
            />
          </div>
        </div>

        {/* FOOD SECTION */}
        {activeTab === 'food' && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-extrabold text-charcoal-950 uppercase tracking-widest mb-4">
                Culinary <span className="gold-gradient-text">Masterpieces</span>
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-transparent via-amber-600 to-transparent mx-auto" />
            </div>

            {displayedFood.length === 0 ? (
              <div className="text-center py-20 text-charcoal-900/50 font-medium">No main course items match your search.</div>
            ) : (
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="show"
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12"
              >
                {displayedFood.map((category, idx) => (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-amber-900/10 shadow-xl shadow-amber-900/5 hover:border-amber-500/30 transition-all duration-300"
                  >
                    <div className="flex items-center gap-4 mb-6 pb-6 border-b border-amber-900/10">
                      <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-amber-700">
                        <category.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-serif text-2xl font-bold text-charcoal-950 uppercase tracking-wider">
                          {category.title}
                        </h3>
                        <p className="text-amber-700 text-sm font-semibold tracking-wide">{category.subtitle}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                      {category.subCategories.map((sub, sIdx) => (
                        <div key={sIdx}>
                          <h4 className="text-sm font-extrabold text-charcoal-900 uppercase tracking-widest mb-4 bg-amber-500/10 inline-block px-3 py-1 rounded-md">
                            {sub.name}
                          </h4>
                          <ul className="space-y-3">
                            {sub.items.map((item, iIdx) => (
                              <li key={iIdx} className="text-charcoal-900/80 font-medium text-sm flex items-start gap-2">
                                <span className="text-amber-500 mt-1 text-[10px]">♦</span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </motion.div>
        )}

        {/* BEVERAGES & DESSERTS SECTION */}
        {activeTab === 'drinks' && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-extrabold text-charcoal-950 uppercase tracking-widest mb-4">
                Refreshments <span className="gold-gradient-text">&amp; Desserts</span>
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-transparent via-amber-600 to-transparent mx-auto" />
            </div>

            {displayedDrinks.length === 0 ? (
              <div className="text-center py-20 text-charcoal-900/50 font-medium">No drinks or desserts match your search.</div>
            ) : (
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="show"
                className="grid grid-cols-1 lg:grid-cols-3 gap-8"
              >
                {displayedDrinks.map((category, idx) => (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-amber-900/10 shadow-xl shadow-amber-900/5 hover:border-amber-500/30 transition-all duration-300"
                  >
                    <div className="flex items-center gap-4 mb-6 pb-6 border-b border-amber-900/10">
                      <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-amber-700">
                        <category.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-serif text-xl font-bold text-charcoal-950 uppercase tracking-wider">
                          {category.title}
                        </h3>
                        <p className="text-amber-700 text-xs font-semibold tracking-wide">{category.subtitle}</p>
                      </div>
                    </div>

                    <div className="space-y-8">
                      {category.subCategories.map((sub, sIdx) => (
                        <div key={sIdx}>
                          <h4 className="text-xs font-extrabold text-charcoal-900 uppercase tracking-widest mb-3 bg-amber-500/10 inline-block px-3 py-1 rounded-md">
                            {sub.name}
                          </h4>
                          <ul className="space-y-2">
                            {sub.items.map((item, iIdx) => (
                              <li key={iIdx} className="text-charcoal-900/80 font-medium text-sm flex items-center gap-2">
                                <span className="text-amber-500 text-[10px]">♦</span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </motion.div>
        )}
      </div>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 p-3 bg-gradient-to-br from-charcoal-900 to-charcoal-950 text-amber-400 rounded-full shadow-2xl border border-amber-500/20 hover:scale-110 transition-transform"
          >
            <ArrowUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Footer */}
      <Footer onOpenReservation={onOpenReservation} />
    </div>
  );
}
