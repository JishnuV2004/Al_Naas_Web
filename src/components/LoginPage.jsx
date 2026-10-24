import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Lock, Mail } from 'lucide-react';

export default function LoginPage({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onLogin) onLogin();
  };

  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row font-sans selection:bg-amber-600 selection:text-white">
      {/* LEFT PORTION - Brand & Logo */}
      <div className="w-full md:w-1/2 bg-[#141210] flex flex-col items-center justify-center p-12 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-600/10 rounded-full blur-[120px] pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 flex flex-col items-center justify-center text-center space-y-6"
        >
          <img
            src="/logo/al-naaz-mandi-logo-transparent.png"
            alt="Al Naaz Logo"
            className="w-48 md:w-64 drop-shadow-[0_0_30px_rgba(217,119,6,0.3)]"
          />
          <h1 className="font-serif text-4xl md:text-5xl font-extrabold text-white tracking-wide">
            AL NAAZ
          </h1>
          <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-amber-500/50 to-transparent mt-4" />
          <p className="text-amber-200/70 uppercase tracking-[0.3em] text-xs font-semibold">
            Authentic Arabian Experience
          </p>
        </motion.div>
      </div>

      {/* RIGHT PORTION - Login Form */}
      <div className="w-full md:w-1/2 bg-[#FAF5EC] flex flex-col items-center justify-center p-8 sm:p-12 lg:p-24 relative overflow-hidden">
        {/* Subtle pattern or glow on the light side */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full max-w-md bg-white p-8 sm:p-10 rounded-3xl shadow-2xl shadow-amber-900/5 border border-amber-900/10 relative z-10"
        >
          <div className="space-y-2 mb-10 text-center">
            <h2 className="font-serif text-3xl font-bold text-charcoal-950">Welcome Back</h2>
            <p className="text-charcoal-900/60 text-sm font-medium">Sign in to access your dashboard</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2 text-left">
              <label className="text-xs font-bold text-charcoal-900 uppercase tracking-wider pl-1">Email Address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-amber-600/60" />
                </div>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-12 pr-4 py-3.5 bg-[#FAF5EC]/50 border border-amber-900/10 rounded-xl focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 outline-none transition-all text-charcoal-950 font-medium placeholder:text-charcoal-900/30"
                  placeholder="admin@alnaaz.com"
                />
              </div>
            </div>

            <div className="space-y-2 text-left">
              <div className="flex items-center justify-between pl-1">
                <label className="text-xs font-bold text-charcoal-900 uppercase tracking-wider">Password</label>
                <a href="#" className="text-xs font-bold text-amber-600 hover:text-amber-700 transition-colors">Forgot?</a>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-amber-600/60" />
                </div>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-12 pr-4 py-3.5 bg-[#FAF5EC]/50 border border-amber-900/10 rounded-xl focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 outline-none transition-all text-charcoal-950 font-medium placeholder:text-charcoal-900/30"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-amber-600 hover:bg-amber-700 text-white rounded-xl font-bold text-sm tracking-wide uppercase transition-all shadow-lg shadow-amber-600/20 hover:shadow-amber-600/40 hover:-translate-y-0.5 flex items-center justify-center gap-2 group mt-8"
            >
              Sign In
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-xs font-medium text-charcoal-900/60">
              Don't have an account? <a href="#" className="text-amber-600 font-bold hover:text-amber-700">Contact Admin</a>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
