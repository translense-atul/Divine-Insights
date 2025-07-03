import { Button } from "@/components/ui/button"
import { Phone, Clock, IndianRupee, Stars, Sparkles } from "lucide-react";

import profileImage from "@/assests/PHOTO-2025-07-02-07-38-30_1751545660833.jpg";

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent("I got you from the website, I am interested in making a personal consultation.");
    window.open(`https://wa.me/919151074355?text=${message}`, '_blank');
  };

  return (
    <section id="home" className="cosmic-gradient celestial-pattern min-h-screen flex items-center relative overflow-hidden">
      {/* Floating cosmic elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 text-starlight opacity-30 animate-pulse">
          <Stars size={24} />
        </div>
        <div className="absolute top-40 right-20 text-mystic opacity-40 animate-bounce">
          <Sparkles size={20} />
        </div>
        <div className="absolute bottom-40 left-20 text-aurora opacity-35 animate-pulse">
          <Stars size={28} />
        </div>
        <div className="absolute bottom-20 right-10 text-starlight opacity-30 animate-bounce">
          <Sparkles size={16} />
        </div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <h1 className="text-6xl lg:text-7xl font-bold mystical-font starlight-text mb-6 text-cosmic-glow">
                Divine Insights
              </h1>
              <h2 className="text-3xl lg:text-4xl font-semibold text-white/90 heading-font">
                Unlock Your Cosmic Destiny
              </h2>
            </div>

            <p className="text-xl text-white/85 mb-8 leading-relaxed">
              Professional astrology, numerology, palmistry, and tarot readings guided by ancient wisdom and cosmic knowledge. Discover what the universe has planned for you.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={scrollToContact}
                className="mystical-button text-white border-0 px-8 py-6 text-lg font-semibold rounded-full"
              >
                <Phone className="mr-2 h-5 w-5" />
                Book Consultation
              </Button>

              <Button
                onClick={openWhatsApp}
                className="bg-green-600 hover:bg-green-700 text-white border-0 px-8 py-6 text-lg font-semibold rounded-full transition-all duration-300"
              >
                <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                </svg>
                WhatsApp Chat
              </Button>
            </div>

            <div className="cosmic-glass rounded-3xl p-8 mt-8 border border-white/30">
              <p className="text-white/90 mb-4 flex items-center text-lg">
                <Phone className="mr-3 h-6 w-6 text-starlight" />
                Immediate Consultation Available
              </p>
              <a
                href="tel:+919151074355"
                className="text-4xl font-bold text-starlight hover:text-mystic transition-colors mystical-font text-cosmic-glow"
              >
                ✨ +91 91 510 743 55
              </a>
              <div className="flex items-center mt-4 text-white/80 text-lg">
                <Clock className="mr-2 h-5 w-5 text-aurora" />
                <span>9 AM - 9 PM, Daily</span>
                <IndianRupee className="ml-6 mr-1 h-5 w-5 text-starlight" />
                <span>₹5 per minute</span>
              </div>
            </div>
          </div>

          <div className="text-center relative">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-starlight to-mystic rounded-full opacity-20 blur-2xl scale-110"></div>
              <img
                src={profileImage}
                alt="Your Spiritual Guide - Astrology Expert"
                className="relative rounded-full shadow-2xl max-w-sm mx-auto w-full border-4 border-starlight/30"
              />
              <div className="absolute -top-4 -right-4 text-starlight animate-spin-slow">
                <Stars size={32} />
              </div>
              <div className="absolute -bottom-4 -left-4 text-mystic animate-pulse">
                <Sparkles size={28} />
              </div>
            </div>

            {/* Cosmic Mandala Design */}
            <div className="mt-12 relative">
              <svg className="w-64 h-64 mx-auto opacity-30" viewBox="0 0 200 200">
                <defs>
                  <radialGradient id="cosmic-gradient" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#FFD700" stopOpacity="0.8" />
                    <stop offset="50%" stopColor="#DA70D6" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#4169E1" stopOpacity="0.4" />
                  </radialGradient>
                </defs>

                {/* Outer circle */}
                <circle cx="100" cy="100" r="90" fill="none" stroke="url(#cosmic-gradient)" strokeWidth="2" className="animate-spin-slow" />

                {/* Inner cosmic pattern */}
                <circle cx="100" cy="100" r="60" fill="none" stroke="url(#cosmic-gradient)" strokeWidth="1.5" className="animate-spin-reverse" />
                <circle cx="100" cy="100" r="30" fill="none" stroke="url(#cosmic-gradient)" strokeWidth="1" className="animate-spin-slow" />

                {/* Star points */}
                <g className="animate-pulse">
                  <circle cx="100" cy="40" r="3" fill="#FFD700" />
                  <circle cx="160" cy="100" r="3" fill="#DA70D6" />
                  <circle cx="100" cy="160" r="3" fill="#4169E1" />
                  <circle cx="40" cy="100" r="3" fill="#20B2AA" />
                  <circle cx="130" cy="70" r="2" fill="#FFD700" />
                  <circle cx="130" cy="130" r="2" fill="#DA70D6" />
                  <circle cx="70" cy="130" r="2" fill="#4169E1" />
                  <circle cx="70" cy="70" r="2" fill="#20B2AA" />
                </g>
              </svg>
            </div>

            <div className="mt-8 text-center">
              <h3 className="text-2xl font-bold text-starlight mystical-font mb-2">Master of Cosmic Arts</h3>
              <p className="text-white/80 text-lg">Guiding souls through celestial wisdom</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
