import React, { useState } from 'react';
import { X, ShoppingBag, Plus, Minus, Trash2, ArrowRight, CheckCircle2, Bike, Store } from 'lucide-react';

export default function CartDrawer({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem, onClearCart }) {
  const [deliveryType, setDeliveryType] = useState('delivery');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [orderPlaced, setOrderPlaced] = useState(false);

  if (!isOpen) return null;

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const deliveryFee = deliveryType === 'delivery' ? 50 : 0;
  const taxes = Math.round(subtotal * 0.05);
  const grandTotal = subtotal + deliveryFee + taxes;

  const handleCheckout = (e) => {
    e.preventDefault();
    if (!customerName || !customerPhone) {
      alert('Please enter your name and phone number to complete the order.');
      return;
    }
    setOrderPlaced(true);
    setTimeout(() => {
      onClearCart();
    }, 4000);
  };

  const handleClose = () => {
    setOrderPlaced(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-charcoal-950/80 backdrop-blur-sm transition-opacity"
        onClick={handleClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white text-charcoal-900 shadow-2xl flex flex-col">
          
          {/* Header */}
          <div className="p-6 bg-charcoal-950 text-white flex items-center justify-between border-b border-amber-600/30">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-amber-500 text-charcoal-950 font-bold">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h2 className="font-serif text-lg font-bold text-amber-100">Your Order Cart</h2>
                <p className="text-xs text-amber-300/80">{cartItems.length} unique dish(es)</p>
              </div>
            </div>
            <button
              onClick={handleClose}
              className="p-2 text-gray-400 hover:text-white rounded-lg hover:bg-charcoal-800"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Body */}
          {orderPlaced ? (
            <div className="flex-1 p-8 flex flex-col items-center justify-center text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center animate-bounce">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-charcoal-900">Order Confirmed!</h3>
              <p className="text-sm text-gray-600 max-w-xs">
                Thank you <strong className="text-charcoal-900">{customerName}</strong>! Your authentic Mandi order has been dispatched to our kitchen.
              </p>
              <div className="p-4 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 w-full space-y-1">
                <p><strong>Order ID:</strong> #MANDI-{Math.floor(1000 + Math.random() * 9000)}</p>
                <p><strong>Estimated Prep Time:</strong> 25 - 35 mins</p>
              </div>
              <button
                onClick={handleClose}
                className="w-full py-3 rounded-xl gold-gradient-bg font-bold text-sm"
              >
                Back to Menu
              </button>
            </div>
          ) : (
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              
              {cartItems.length === 0 ? (
                <div className="text-center py-16 space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-full bg-amber-50 flex items-center justify-center text-amber-600">
                    <ShoppingBag className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-gray-800">Your cart is empty</h3>
                  <p className="text-xs text-gray-500 max-w-xs mx-auto">
                    Explore our menu categories and add your favorite Al Faham or Mandi platter!
                  </p>
                </div>
              ) : (
                <>
                  {/* Delivery / Takeaway Switch */}
                  <div className="grid grid-cols-2 gap-2 p-1 bg-gray-100 rounded-xl">
                    <button
                      type="button"
                      onClick={() => setDeliveryType('delivery')}
                      className={`flex items-center justify-center gap-2 py-2 text-xs font-bold rounded-lg transition-all ${
                        deliveryType === 'delivery'
                          ? 'bg-amber-600 text-white shadow-sm'
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      <Bike className="w-4 h-4" />
                      <span>Delivery (₹50)</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setDeliveryType('takeaway')}
                      className={`flex items-center justify-center gap-2 py-2 text-xs font-bold rounded-lg transition-all ${
                        deliveryType === 'takeaway'
                          ? 'bg-amber-600 text-white shadow-sm'
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      <Store className="w-4 h-4" />
                      <span>Takeaway (Free)</span>
                    </button>
                  </div>

                  {/* Cart Items List */}
                  <div className="space-y-4">
                    {cartItems.map((item) => (
                      <div key={item.id} className="p-3 bg-cream-50 rounded-xl border border-gray-200 flex items-center gap-3">
                        <img src={item.image} alt={item.name} className="w-14 h-14 rounded-lg object-cover bg-charcoal-900" />
                        <div className="flex-1 min-w-0">
                          <h4 className="font-bold text-sm text-charcoal-900 truncate">{item.name}</h4>
                          <span className="text-xs text-amber-700 font-semibold">₹{item.price}</span>
                        </div>

                        {/* Quantity Controls */}
                        <div className="flex items-center border border-gray-300 rounded-lg bg-white">
                          <button
                            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                            className="p-1 text-gray-500 hover:text-charcoal-900"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="px-2 text-xs font-bold">{item.quantity}</span>
                          <button
                            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                            className="p-1 text-gray-500 hover:text-charcoal-900"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        {/* Delete */}
                        <button
                          onClick={() => onRemoveItem(item.id)}
                          className="text-gray-400 hover:text-rose-600 p-1"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>

                  {/* Customer Information Form */}
                  <form onSubmit={handleCheckout} className="space-y-3 pt-4 border-t border-gray-200">
                    <h4 className="text-xs font-extrabold uppercase tracking-wider text-amber-800">Customer Details</h4>
                    <input
                      type="text"
                      required
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      placeholder="Your Full Name *"
                      className="w-full px-3 py-2 text-xs border border-gray-300 rounded-lg focus:ring-1 focus:ring-amber-500 focus:outline-none"
                    />
                    <input
                      type="tel"
                      required
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      placeholder="Phone Number *"
                      className="w-full px-3 py-2 text-xs border border-gray-300 rounded-lg focus:ring-1 focus:ring-amber-500 focus:outline-none"
                    />
                    {deliveryType === 'delivery' && (
                      <textarea
                        required
                        rows="2"
                        value={deliveryAddress}
                        onChange={(e) => setDeliveryAddress(e.target.value)}
                        placeholder="Delivery Address *"
                        className="w-full px-3 py-2 text-xs border border-gray-300 rounded-lg focus:ring-1 focus:ring-amber-500 focus:outline-none resize-none"
                      />
                    )}

                    {/* Pricing Summary */}
                    <div className="pt-3 space-y-1.5 text-xs text-gray-600">
                      <div className="flex justify-between">
                        <span>Items Subtotal</span>
                        <span>₹{subtotal}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Delivery Charge</span>
                        <span>₹{deliveryFee}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>GST & Packaging (5%)</span>
                        <span>₹{taxes}</span>
                      </div>
                      <div className="flex justify-between font-extrabold text-sm text-charcoal-900 pt-2 border-t border-gray-200">
                        <span>Grand Total</span>
                        <span className="text-amber-700">₹{grandTotal}</span>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 mt-3 rounded-xl gold-gradient-bg font-bold text-sm flex items-center justify-center gap-2 shadow-lg"
                    >
                      <span>Place Order (₹{grandTotal})</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </form>
                </>
              )}

            </div>
          )}

        </div>
      </div>
    </div>
  );
}
