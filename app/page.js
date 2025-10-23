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

  const handleWhatsAppClick = (domain = 'VUHI.com') => {
    window.open(`https://wa.me/917828047646?text=Hi, I'm interested in purchasing ${domain}`, '_blank');
  };

  const handleEmailClick = (domain = 'VUHI.com') => {
    window.location.href = `mailto:shriyansh.mishra@zohomail.in?subject=Interested in ${domain}&body=Hi, I'm interested in purchasing ${domain}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-pink-950 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"
          style={{ 
            top: '10%', 
            left: '10%',
            transform: `translate(${scrollY * 0.1}px, ${scrollY * 0.15}px)`
          }}
        />
        <div 
          className="absolute w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"
          style={{ 
            bottom: '10%', 
            right: '10%',
            transform: `translate(-${scrollY * 0.1}px, -${scrollY * 0.15}px)`
          }}
        />
      </div>

      {/* Hero Section */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 pt-12 sm:pt-16 lg:pt-20 pb-16 sm:pb-24 lg:pb-32">
        <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Premium Badge */}
          <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-full mb-6 sm:mb-8 animate-bounce">
            <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" />
            <span className="text-sm sm:text-base text-yellow-300 font-semibold">Premium VUHI Domain</span>
          </div>

          {/* Main Domain Display */}
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black mb-4 sm:mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
            VUHI.COM
          </h1>

          {/* Price Section */}
          <div className="mb-8 sm:mb-12">
            <div className="inline-block bg-gradient-to-r from-red-500/20 to-pink-500/20 border-2 border-red-500/50 rounded-2xl p-4 sm:p-6 lg:p-8 backdrop-blur-sm max-w-full">
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-3 sm:mb-4">
                <Zap className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-yellow-400 animate-pulse" />
                <span className="text-lg sm:text-2xl lg:text-3xl font-bold text-red-400">FLASH SALE - 50% OFF</span>
                <Zap className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-yellow-400 animate-pulse" />
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6">
                <span className="text-2xl sm:text-3xl lg:text-4xl text-gray-500 line-through">$30,000</span>
                <span className="text-5xl sm:text-6xl lg:text-7xl font-black bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                  $18,000
                </span>
              </div>
              <p className="text-base sm:text-lg lg:text-xl text-gray-300 mt-3 sm:mt-4">Limited Time Offer - Act Fast!</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center">
            <button
              onClick={() => handleWhatsAppClick()}
              className="group relative inline-flex items-center gap-2 sm:gap-4 px-6 sm:px-10 lg:px-12 py-4 sm:py-5 lg:py-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full text-lg sm:text-xl lg:text-2xl font-bold shadow-2xl shadow-green-500/50 hover:shadow-green-500/80 hover:scale-110 transition-all duration-300 animate-pulse w-full sm:w-auto"
            >
              <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 group-hover:rotate-12 transition-transform" />
              <span className="whitespace-nowrap">Contact on WhatsApp</span>
              <div className="absolute inset-0 bg-white/20 rounded-full blur-xl group-hover:blur-2xl transition-all" />
            </button>

            <button
              onClick={() => handleEmailClick()}
              className="group relative inline-flex items-center gap-2 sm:gap-4 px-6 sm:px-10 lg:px-12 py-4 sm:py-5 lg:py-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-lg sm:text-xl lg:text-2xl font-bold shadow-2xl shadow-blue-500/50 hover:shadow-blue-500/80 hover:scale-110 transition-all duration-300 w-full sm:w-auto"
            >
              <Mail className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 group-hover:rotate-12 transition-transform" />
              <span className="whitespace-nowrap">Email Us</span>
              <div className="absolute inset-0 bg-white/20 rounded-full blur-xl group-hover:blur-2xl transition-all" />
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-center mb-10 sm:mb-12 lg:mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Why VUHI.com?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
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
              className="group relative p-6 sm:p-8 bg-gradient-to-br from-purple-900/30 to-blue-900/30 border border-purple-500/30 rounded-3xl backdrop-blur-sm hover:border-purple-400/60 hover:scale-105 transition-all duration-500"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.2}s both`
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
              <feature.icon className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mb-4 sm:mb-6 text-purple-400 group-hover:scale-110 group-hover:rotate-6 transition-transform" />
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">{feature.title}</h3>
              <p className="text-gray-300 text-base sm:text-lg">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Final CTA Section */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20 text-center">
        <div className="bg-gradient-to-r from-purple-900/40 to-blue-900/40 border-2 border-purple-500/50 rounded-3xl p-6 sm:p-10 lg:p-12 backdrop-blur-sm">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4 sm:mb-6">Don't Miss This Opportunity</h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto">
            Premium 4-letter .com domains rarely come to market. Secure VUHI.com today at 50% off.
          </p>
          <button
            onClick={() => handleWhatsAppClick()}
            className="group inline-flex items-center gap-2 sm:gap-4 px-8 sm:px-10 lg:px-12 py-4 sm:py-5 lg:py-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full text-lg sm:text-xl lg:text-2xl font-bold shadow-2xl shadow-green-500/50 hover:shadow-green-500/80 hover:scale-110 transition-all duration-300"
          >
            <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 group-hover:rotate-12 transition-transform" />
            <span className="whitespace-nowrap">Get It Now - $18,000</span>
          </button>
          <div className="text-gray-400 mt-4 sm:mt-6 space-y-2">
            <p className="text-sm sm:text-base">📱 WhatsApp: +91 78280 47646</p>
            <p className="text-sm sm:text-base">✉️ Email: shriyansh.mishra@zohomail.in</p>
          </div>
        </div>
      </div>

      {/* Other Premium Domains Section */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-center mb-10 sm:mb-12 lg:mb-16 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
          Checkout Our Other Premium Domains
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {[
            { name: "RAVI.COM", description: "Popular Indian name - Perfect for personal branding" },
            { name: "MARKETONLINE.COM", description: "E-commerce powerhouse - Ideal for online marketplace" },
            { name: "POHU.COM", description: "Unique 4-letter domain - Memorable and brandable" },
            { name: "GASSAUDI.COM", description: "Energy sector domain - Perfect for Saudi market" }
          ].map((domain, index) => (
            <div
              key={index}
              className="group relative p-4 sm:p-6 bg-gradient-to-br from-indigo-900/40 to-purple-900/40 border-2 border-indigo-500/30 rounded-2xl backdrop-blur-sm hover:border-indigo-400/60 hover:scale-105 transition-all duration-500 cursor-pointer"
              onClick={() => handleWhatsAppClick(domain.name)}
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.15}s both`
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
              <div className="relative">
                <h3 className="text-xl sm:text-2xl font-black mb-2 sm:mb-3 bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent group-hover:scale-110 transition-transform inline-block">
                  {domain.name}
                </h3>
                <p className="text-gray-300 text-sm sm:text-base mb-3 sm:mb-4">{domain.description}</p>
                <div className="inline-flex items-center gap-2 text-green-400 font-semibold text-sm sm:text-base group-hover:gap-3 transition-all">
                  <span>Inquire Now</span>
                  <MessageCircle className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-300 mt-8 sm:mt-10 text-base sm:text-lg">
          Click any domain to inquire via WhatsApp or email us for bulk deals
        </p>
      </div>

      {/* Footer */}
      <div className="relative z-10 border-t border-purple-500/20 py-6 sm:py-8">
        <p className="text-center text-gray-400 text-sm sm:text-base px-4">
          © 2025 VUHI.com - Premium Domain For Sale
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