import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import StoryBreakdownSection from './components/StoryBreakdownSection';
import AboutSection from './components/AboutSection';
// import SignatureSpotlightSection from './components/SignatureSpotlightSection';
// import MenuSection from './components/MenuSection';
import ExperienceSection from './components/ExperienceSection';
import FeaturesSection from './components/FeaturesSection';
import ReviewsSection from './components/ReviewsSection';
import CartDrawer from './components/CartDrawer';
import ReservationModal from './components/ReservationModal';
import Footer from './components/Footer';
import FloatingIcons from './components/FloatingIcons';
import LoginPage from './components/LoginPage';
import MenuPage from './components/MenuPage';

export default function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false); // For demonstrating the login page
  const [showMenuPage, setShowMenuPage] = useState(false);

  const handleAddToCart = (item) => {
    setCartItems(prevItems => {
      const existing = prevItems.find(i => i.id === item.id);
      if (existing) {
        return prevItems.map(i =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prevItems, { ...item, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (id, newQuantity) => {
    if (newQuantity <= 0) {
      handleRemoveItem(id);
      return;
    }
    setCartItems(prevItems =>
      prevItems.map(i => i.id === id ? { ...i, quantity: newQuantity } : i)
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems(prevItems => prevItems.filter(i => i.id !== id));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const scrollToCraftStory = () => {
    const el = document.getElementById('craft-story');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToMenu = () => {
    const el = document.getElementById('menu');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // if (showLogin) {
  //   return <LoginPage onLogin={() => setShowLogin(false)} />;
  // }

  if (showMenuPage) {
    return <MenuPage onBack={() => setShowMenuPage(false)} onOpenReservation={() => setIsReservationOpen(true)} />;
  }

  return (
    <div className="min-h-screen bg-cream-50 text-charcoal-900 font-sans flex flex-col antialiased selection:bg-amber-600 selection:text-white">


      <main className="flex-grow">
        {/* Hero & Header Wrapper for sticky behavior */}
        <div className="relative z-50">
          <div className="sticky top-0 z-50 h-0 overflow-visible">
            <Header
              cartCount={totalCartCount}
              onOpenCart={() => setIsCartOpen(true)}
              onOpenReservation={() => setIsReservationOpen(true)}
            />
          </div>
          {/* Apple-Style Buttonless Hero Section */}
          <Hero
            onScrollToNext={scrollToCraftStory}
          />
        </div>

        {/* Dedicated Story & Craft Breakdown Section Directly Below Hero */}
        <StoryBreakdownSection onViewMenu={() => setShowMenuPage(true)} />

        {/* About Section - Heritage & Team Members */}
        <AboutSection />

        {/* Golden Guest Reviews & Stats Section */}
        <ReviewsSection />

        {/* Traditional Majlis Dining Experience Section */}
        <ExperienceSection />

        {/* Why Choose Us / Core Pillars Section */}
        <FeaturesSection />
      </main>

      {/* Extended Footer */}
      <Footer
        onOpenReservation={() => setIsReservationOpen(true)}
      />

      {/* Cart Slide-Over Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Table Reservation Modal */}
      <ReservationModal
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
      />

      {/* Floating Action Buttons (WhatsApp & Go to top) */}
      <FloatingIcons />
    </div>
  );
}
