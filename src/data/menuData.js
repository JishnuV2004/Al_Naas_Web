export const MENU_CATEGORIES = [
  {
    id: 'al-faham-mandi',
    name: 'Al Fahm Mandi',
    tagline: 'Traditional Arabian grilled chicken served with specially seasoned authentic Mandi rice.',
    icon: 'Flame',
    image: '/images/al_faham.png',
    items: [
      {
        id: 'afm-1',
        name: 'BBQ Al Faham Mandi',
        description: 'Juicy chicken grilled over open coals infused with smoky BBQ marinade, served over aromatic Mandi basmati rice with garlic paste and tomato salsa.',
        badge: 'Bestseller',
        price: 340,
        portions: ['Quarter (₹220)', 'Half (₹340)', 'Full (₹620)'],
        spiceLevel: 'Mild',
        image: '/images/al_faham.png'
      },
      {
        id: 'afm-2',
        name: 'Jamaican Al Faham Mandi',
        description: 'Exotic Jamaican jerk-spiced Al Faham chicken paired with seasoned long-grain Mandi rice and house special dips.',
        badge: 'Chef Choice',
        price: 360,
        portions: ['Quarter (₹230)', 'Half (₹360)', 'Full (₹660)'],
        spiceLevel: 'Medium Spiced',
        image: '/images/al_faham.png'
      },
      {
        id: 'afm-3',
        name: 'Normal Al Faham Mandi',
        description: 'Signature classic. Mandi rice is prepared differently with traditional Al Faham Arabian charcoal grilled chicken.',
        detailNote: 'Mandi rice is prepared differently with al faham Arabian grilled chicken',
        badge: 'Authentic Classic',
        price: 320,
        portions: ['Quarter (₹200)', 'Half (₹320)', 'Full (₹590)'],
        spiceLevel: 'Authentic Mild',
        image: '/images/hero_mandi.png'
      },
      {
        id: 'afm-4',
        name: 'Peri Peri Al Faham Mandi',
        description: 'Tangy and fiery Peri Peri pepper rub grilled chicken served over golden saffron Mandi rice.',
        badge: 'Hot & Spicy',
        price: 350,
        portions: ['Quarter (₹220)', 'Half (₹350)', 'Full (₹640)'],
        spiceLevel: 'Spicy',
        image: '/images/al_faham.png'
      },
      {
        id: 'afm-5',
        name: 'Smokey Al Faham Mandi',
        description: 'Deep wood-smoked Arabian Al Faham chicken served on fragrant spiced basmati rice with signature pickle & mayonnaise.',
        badge: 'Smokey Deluxe',
        price: 350,
        portions: ['Quarter (₹220)', 'Half (₹350)', 'Full (₹650)'],
        spiceLevel: 'Medium',
        image: '/images/al_faham.png'
      }
    ]
  },
  {
    id: 'jallikattu-specials',
    name: 'Jallikattu Specials',
    tagline: 'Bold, fiery, and signature spice-infused signature dishes.',
    icon: 'Zap',
    image: '/images/jallikattu_beef.png',
    items: [
      {
        id: 'js-1',
        name: 'Beef Jallikattu Rib Piece',
        description: 'Thick succulent tender beef rib piece roasted in intense house secret Jallikattu pepper masala with crispy curry leaves.',
        badge: 'Signature Dish',
        price: 380,
        portions: ['Single Piece (₹380)', 'Double Piece (₹720)'],
        spiceLevel: 'Extra Spicy',
        image: '/images/jallikattu_beef.png'
      },
      {
        id: 'js-2',
        name: 'Beef Jallikattu Ribs Mandi',
        description: 'Slow-cooked prime beef ribs coated in dark fiery Jallikattu masala served on a mountain of flavorful Mandi rice.',
        badge: 'House Favorite',
        price: 490,
        portions: ['Half Mandi (₹490)', 'Full Platter (₹940)'],
        spiceLevel: 'Fiery Hot',
        image: '/images/jallikattu_beef.png'
      },
      {
        id: 'js-3',
        name: 'Jallikattu Al Faham',
        description: 'Spiced charcoal grilled chicken tossed with regional Tamil-Arabian fusion Jallikattu roasted spices.',
        badge: 'Fusion Special',
        price: 360,
        portions: ['Half (₹360)', 'Full (₹660)'],
        spiceLevel: 'Spicy',
        image: '/images/al_faham.png'
      },
      {
        id: 'js-4',
        name: 'Jallikattu Al Faham Mandi',
        description: 'Ultimate combination of Jallikattu Al Faham chicken with rich authentic Mandi rice and spicy tomato chutney.',
        badge: 'Top Rated',
        price: 420,
        portions: ['Half (₹420)', 'Full (₹780)'],
        spiceLevel: 'Fiery Hot',
        image: '/images/hero_mandi.png'
      }
    ]
  },
  {
    id: 'beef-mandi',
    name: 'Beef Mandi',
    tagline: 'Slow-cooked, tender beef cuts paired with fragrant Mandi rice.',
    icon: 'UtensilsCrossed',
    image: '/images/jallikattu_beef.png',
    items: [
      {
        id: 'bm-1',
        name: 'Ribs Mandi',
        description: 'Tender beef ribs slow-braised to fall off the bone perfection, served over fragrant spice-infused Mandi basmati rice.',
        badge: 'Customer Choice',
        price: 460,
        portions: ['Single Portion (₹460)', 'Full Mandi (₹880)'],
        spiceLevel: 'Medium',
        image: '/images/jallikattu_beef.png'
      },
      {
        id: 'bm-2',
        name: 'Rib Piece',
        description: 'Single large braised beef rib piece seasoned with dry roasted garlic and black pepper.',
        badge: 'Solo Portion',
        price: 320,
        portions: ['Single Rib Piece (₹320)'],
        spiceLevel: 'Medium',
        image: '/images/jallikattu_beef.png'
      },
      {
        id: 'bm-3',
        name: 'Tawah Mandi',
        description: 'Pan-seared spiced beef tawah cuts served over seasoned hot Mandi rice with caramelized onions and fried cashew garnish.',
        badge: 'Speciality',
        price: 440,
        portions: ['Half (₹440)', 'Full (₹840)'],
        spiceLevel: 'Medium Spiced',
        image: '/images/hero_mandi.png'
      },
      {
        id: 'bm-4',
        name: 'Tawah Piece',
        description: 'Juicy griddle-seared beef steak piece spiced with traditional Arabian tawah herbs.',
        badge: 'Quick Bite',
        price: 290,
        portions: ['Single Piece (₹290)'],
        spiceLevel: 'Medium',
        image: '/images/jallikattu_beef.png'
      }
    ]
  },
  {
    id: 'mutton-mandi',
    name: 'Mutton Mandi',
    tagline: 'Melt-in-your-mouth tender mutton cooked to perfection.',
    icon: 'Crown',
    image: '/images/mutton_mandi.png',
    items: [
      {
        id: 'mm-1',
        name: 'Mutton Mandi',
        description: 'Royal Arabian delicacy. Ultra-tender, melt-in-your-mouth mutton shank steamed under pressure with authentic cardamom and saffron Mandi rice.',
        badge: 'Royal Special',
        price: 520,
        portions: ['Single Shank Mandi (₹520)', 'Double Shank Mandi (₹990)'],
        spiceLevel: 'Mild & Aromatic',
        image: '/images/mutton_mandi.png'
      },
      {
        id: 'mm-2',
        name: 'Mutton Piece',
        description: 'Single succulent portion of slow-cooked braised mutton piece with natural pan juices.',
        badge: 'Chef Pick',
        price: 360,
        portions: ['Single Mutton Piece (₹360)'],
        spiceLevel: 'Mild',
        image: '/images/mutton_mandi.png'
      }
    ]
  }
];

export const FEATURES_DATA = [
  {
    id: 1,
    title: 'Authentic Charcoal Grill',
    description: 'Our Al Faham chicken is roasted slowly over 100% natural wood charcoal for an unmistakable smoky aroma.',
    icon: 'Flame'
  },
  {
    id: 2,
    title: 'Traditional Arabian Recipes',
    description: 'Heritage blends of Yemeni and Arabian spices, cooked in authentic hand-hammered copper vessels.',
    icon: 'Sparkles'
  },
  {
    id: 3,
    title: 'Fresh & Local Ingredients',
    description: '100% Halal certified, fresh daily cuts of meat and handpicked long-grain aged basmati rice.',
    icon: 'ShieldCheck'
  }
];

export const REVIEWS_DATA = [
  {
    id: 1,
    name: 'Prince Biju',
    rating: 5,
    comment: 'The Beef Jallikattu Ribs Mandi is out of this world! Spicy, tender, and the Mandi rice has that genuine Arabian smoke flavor.',
    date: '2 days ago'
  },
  {
    id: 2,
    name: 'Aby Shaji',
    rating: 5,
    comment: 'Best Al Faham in town. The Peri Peri and Jamaican Al Faham Mandi are so juicy. Highly recommended for family dining!',
    date: '1 week ago'
  },
  {
    id: 3,
    name: 'Asif S',
    rating: 5,
    comment: 'The Mutton Mandi literally melts in your mouth. Authentic hospitality and fast online order delivery.',
    date: '2 weeks ago'
  },
  {
    id: 4,
    name: 'Jishnu V',
    rating: 5,
    comment: 'The BBQ Al Faham paired with golden basmati rice is top notch. Super quick table service and amazing ambiance!',
    date: '3 weeks ago'
  },
  {
    id: 5,
    name: 'Adarsh',
    rating: 5,
    comment: 'Absolute paradise for Mandi lovers. The Jallikattu Beef and Mutton shank are cooked to absolute perfection.',
    date: '1 month ago'
  }
];
