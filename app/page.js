'use client';
import React, { useState, useEffect } from 'react';
import { MessageCircle, Zap, TrendingUp, Globe, Shield, Star, Mail } from 'lucide-react';

export default function QiqeDomainSale() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/917828047646?text=Hi, I\'m interested in purchasing QIQE.com', '_blank');
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:shriyansh.mishra@zohomail.in?subject=Interested in QIQE.com&body=Hi, I\'m interested in purchasing QIQE.com';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-pink-950 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"
          style={{ 
            top: '10%', 
            left: '10%',
            transform: `translate(${scrollY * 0.1}px, ${scrollY * 0.15}px)`
          }}
        />
        <div 
          className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"
          style={{ 
            bottom: '10%', 
            right: '10%',
            transform: `translate(-${scrollY * 0.1}px, -${scrollY * 0.15}px)`
          }}
        />
      </div>

      {/* Hero Section */}
      <div className="relative z-10 container mx-auto px-6 pt-20 pb-32">
        <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Premium Badge */}
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-full mb-8 animate-bounce">
            <Star className="w-5 h-5 text-yellow-400" />
            <span className="text-yellow-300 font-semibold">Premium CVCV Domain</span>
          </div>

          {/* Main Domain Display */}
          <h1 className="text-8xl md:text-9xl font-black mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
            QIQE.COM
          </h1>

          {/* Price Section */}
          <div className="mb-12">
            <div className="inline-block bg-gradient-to-r from-red-500/20 to-pink-500/20 border-2 border-red-500/50 rounded-2xl p-8 backdrop-blur-sm">
              <div className="flex items-center justify-center gap-4 mb-4">
                <Zap className="w-8 h-8 text-yellow-400 animate-pulse" />
                <span className="text-3xl font-bold text-red-400">FLASH SALE - 50% OFF</span>
                <Zap className="w-8 h-8 text-yellow-400 animate-pulse" />
              </div>
              <div className="flex items-center justify-center gap-6">
                <span className="text-4xl text-gray-500 line-through">$10,000</span>
                <span className="text-7xl font-black bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                  $5,000
                </span>
              </div>
              <p className="text-xl text-gray-300 mt-4">Limited Time Offer - Act Fast!</p>
            </div>
          </div>

          {/* CTA Button */}
          <button
            onClick={handleWhatsAppClick}
            className="group relative inline-flex items-center gap-4 px-12 py-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full text-2xl font-bold shadow-2xl shadow-green-500/50 hover:shadow-green-500/80 hover:scale-110 transition-all duration-300 animate-pulse"
          >
            <MessageCircle className="w-8 h-8 group-hover:rotate-12 transition-transform" />
            Contact on WhatsApp
            <div className="absolute inset-0 bg-white/20 rounded-full blur-xl group-hover:blur-2xl transition-all" />
          </button>

          <div className="mt-6">
            <button
              onClick={handleEmailClick}
              className="group relative inline-flex items-center gap-4 px-12 py-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-2xl font-bold shadow-2xl shadow-blue-500/50 hover:shadow-blue-500/80 hover:scale-110 transition-all duration-300"
            >
              <Mail className="w-8 h-8 group-hover:rotate-12 transition-transform" />
              Email Us
              <div className="absolute inset-0 bg-white/20 rounded-full blur-xl group-hover:blur-2xl transition-all" />
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <h2 className="text-5xl font-black text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Why QIQE.com?
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Globe,
              title: "Premium CVCV Pattern",
              description: "Rare consonant-vowel-consonant-vowel structure makes it memorable and brandable"
            },
            {
              icon: TrendingUp,
              title: "High Value Asset",
              description: "4-letter .com domains are increasingly scarce and valuable in the digital economy"
            },
            {
              icon: Shield,
              title: "Instant Credibility",
              description: "Short, professional domain that builds trust and authority for any brand"
            }
          ].map((feature, index) => (
            <div
              key={index}
              className="group relative p-8 bg-gradient-to-br from-purple-900/30 to-blue-900/30 border border-purple-500/30 rounded-3xl backdrop-blur-sm hover:border-purple-400/60 hover:scale-105 transition-all duration-500"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.2}s both`
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
              <feature.icon className="w-16 h-16 mb-6 text-purple-400 group-hover:scale-110 group-hover:rotate-6 transition-transform" />
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-300 text-lg">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Final CTA Section */}
      <div className="relative z-10 container mx-auto px-6 py-20 text-center">
        <div className="bg-gradient-to-r from-purple-900/40 to-blue-900/40 border-2 border-purple-500/50 rounded-3xl p-12 backdrop-blur-sm">
          <h2 className="text-5xl font-black mb-6">Don't Miss This Opportunity</h2>
          <p className="text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Premium 4-letter .com domains rarely come to market. Secure QIQE.com today at 50% off.
          </p>
          <button
            onClick={handleWhatsAppClick}
            className="group inline-flex items-center gap-4 px-12 py-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full text-2xl font-bold shadow-2xl shadow-green-500/50 hover:shadow-green-500/80 hover:scale-110 transition-all duration-300"
          >
            <MessageCircle className="w-8 h-8 group-hover:rotate-12 transition-transform" />
            Get It Now - $5,000
          </button>
          <p className="text-gray-400 mt-6">
            <span className="block mb-2">📱 WhatsApp: +91 78280 47646</span>
            <span className="block">✉️ Email: shriyansh.mishra@zohomail.in</span>
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 border-t border-purple-500/20 py-8">
        <p className="text-center text-gray-400">
          © 2025 QIQE.com - Premium Domain For Sale
        </p>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </div>
  );
} 