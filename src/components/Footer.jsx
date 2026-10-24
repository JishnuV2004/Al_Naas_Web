import React from 'react';
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, Twitter, Utensils, Heart, ArrowUpRight } from 'lucide-react';

export default function Footer({ onOpenReservation }) {
  return (
    <footer id="contact" className="bg-gradient-to-b from-[#F3EAD9] via-[#FAF4EA] to-[#EFE3CD] text-charcoal-900 pt-16 pb-8 relative overflow-hidden">
      {/* Soft Ambient Gold & Amber Light Glows (No Dot Pattern) */}
      <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-amber-400/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/3 w-[450px] h-[450px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center text-white shadow-md shadow-amber-900/10">
                <Utensils className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="font-serif text-xl font-bold tracking-wide text-charcoal-900 block leading-tight">
                  AL NAAS MANDI
                </span>
                <span className="text-[10px] tracking-widest uppercase font-extrabold text-amber-700 block">
                  Authentic Yemeni &amp; Al Faham
                </span>
              </div>
            </div>
            <p className="text-gray-700 text-xs sm:text-sm leading-relaxed font-light">
              Serving the authentic taste of Yemeni Mandi, Al Faham grilled delicacies, and fiery Beef Jallikattu ribs to connoisseurs.
            </p>
            <div className="flex items-center space-x-2.5 pt-2">
              <a href="#" className="w-9 h-9 rounded-xl bg-white/90 border border-amber-200/90 flex items-center justify-center text-amber-700 hover:bg-amber-600 hover:text-white hover:border-amber-600 transition-all shadow-sm" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-xl bg-white/90 border border-amber-200/90 flex items-center justify-center text-amber-700 hover:bg-amber-600 hover:text-white hover:border-amber-600 transition-all shadow-sm" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-xl bg-white/90 border border-amber-200/90 flex items-center justify-center text-amber-700 hover:bg-amber-600 hover:text-white hover:border-amber-600 transition-all shadow-sm" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Operating Hours Card */}
          <div className="bg-white/80 backdrop-blur-md p-5 rounded-2xl border border-amber-200/80 shadow-sm space-y-3">
            <div className="flex items-center gap-2 text-amber-800 font-serif text-base font-bold">
              <Clock className="w-5 h-5 text-amber-600" />
              <h3>Operating Hours</h3>
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-700 font-light">
              <li className="flex justify-between border-b border-amber-900/10 pb-1.5">
                <span>Mon - Thu:</span>
                <span className="text-amber-800 font-semibold">11:30 AM - 11:30 PM</span>
              </li>
              <li className="flex justify-between border-b border-amber-900/10 pb-1.5">
                <span>Fri - Sun:</span>
                <span className="text-amber-800 font-semibold">11:30 AM - 12:00 AM</span>
              </li>
              <li className="flex justify-between pt-1">
                <span>Kitchen Last Order:</span>
                <span className="text-gray-600">11:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-amber-800 font-serif text-lg font-bold">
              <Phone className="w-5 h-5 text-amber-600" />
              <h3>Contact Us</h3>
            </div>
            <ul className="space-y-3 text-xs sm:text-sm text-gray-700 font-light">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-amber-100/80 border border-amber-200/80 flex items-center justify-center shrink-0 mt-0.5 text-amber-700">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="leading-snug">#42 Grand Palace Road, Near Royal Square, Culinary Hub</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-amber-100/80 border border-amber-200/80 flex items-center justify-center shrink-0 text-amber-700">
                  <Phone className="w-4 h-4" />
                </div>
                <span>+91 98765 43210 / 43211</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-amber-100/80 border border-amber-200/80 flex items-center justify-center shrink-0 text-amber-700">
                  <Mail className="w-4 h-4" />
                </div>
                <span>orders@mandihaven.com</span>
              </li>
            </ul>
          </div>

          {/* Location Map Box */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-amber-800 font-serif text-lg font-bold">
              <MapPin className="w-5 h-5 text-amber-600" />
              <h3>Find Our Restaurant</h3>
            </div>
            <a 
              href="https://maps.google.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="relative rounded-2xl overflow-hidden bg-white border border-amber-300/80 h-36 flex flex-col items-center justify-center text-center p-4 group shadow-sm hover:shadow-md transition-all block"
            >
              <div className="w-10 h-10 rounded-full bg-amber-100 border border-amber-300/80 flex items-center justify-center text-amber-700 mb-1.5 group-hover:scale-110 transition-transform">
                <MapPin className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold text-charcoal-900 relative z-10">Al Naas Mandi &amp; Al Faham House</span>
              <span className="text-[11px] font-bold text-amber-700 relative z-10 mt-1 inline-flex items-center gap-1 group-hover:underline">
                <span>View on Google Maps</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-amber-900/10 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-600 gap-4">
          <p>© {new Date().getFullYear()} Al Naas Mandi &amp; Al Faham House. All Rights Reserved.</p>
          <div className="flex items-center gap-1.5 text-gray-600">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>for authentic flavor lovers</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
