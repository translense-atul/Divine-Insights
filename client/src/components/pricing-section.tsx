import { Card, CardContent } from "@/components/ui/card";
import { Phone, Clock, IndianRupee, Stars, Sparkles } from "lucide-react";

export default function PricingSection() {
  const pricingTiers = [
    { duration: "10 mins", price: "₹50", popular: false },
    { duration: "20 mins", price: "₹100", popular: true },
    { duration: "30 mins", price: "₹150", popular: false },
    { duration: "60 mins", price: "₹300", popular: false }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-deep-space via-cosmic to-mystical text-white relative overflow-hidden">
      {/* Cosmic background elements */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-20 left-10 text-starlight animate-pulse">
          <Stars size={24} />
        </div>
        <div className="absolute top-40 right-20 text-mystic animate-bounce">
          <Sparkles size={20} />
        </div>
        <div className="absolute bottom-40 left-20 text-aurora animate-pulse">
          <Stars size={28} />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <Card className="cosmic-glass border-starlight/30 shadow-2xl">
            <CardContent className="p-12 lg:p-16">
              <h2 className="text-5xl lg:text-6xl font-bold mystical-font text-starlight mb-6 text-cosmic-glow">
                Sacred Consultation Rates
              </h2>
              
              <div className="mb-12">
                <div className="relative inline-block">
                  <div className="text-7xl lg:text-8xl font-bold mystical-font starlight-text mb-4 text-cosmic-glow">
                    ₹5
                  </div>
                  <div className="absolute -top-2 -right-8 text-mystic animate-spin-slow">
                    <Sparkles size={24} />
                  </div>
                </div>
                <div className="text-2xl text-white/90 mb-8 mystical-font">
                  per minute of cosmic guidance
                </div>
                <p className="text-xl text-white/85 max-w-3xl mx-auto leading-relaxed">
                  Professional spiritual guidance channeled through ancient wisdom. Invest only in the time you need for your cosmic journey.
                </p>
              </div>
              
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {pricingTiers.map((tier, index) => (
                  <div 
                    key={index} 
                    className={`relative text-center p-6 rounded-xl border transition-all duration-300 hover:scale-105 group ${
                      tier.popular 
                        ? "bg-gradient-to-b from-starlight/40 to-mystic/40 border-starlight/80 shadow-xl shadow-starlight/40" 
                        : "bg-gradient-to-b from-white/25 to-white/15 border-white/50 hover:bg-gradient-to-b hover:from-aurora/30 hover:to-celestial-blue/30 hover:border-aurora/70 shadow-lg shadow-white/20"
                    }`}
                  >
                    {tier.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <div className="bg-gradient-to-r from-starlight to-mystic px-4 py-2 rounded-full text-sm font-bold text-deep-space shadow-lg">
                          ⭐ Most Popular
                        </div>
                      </div>
                    )}
                    <div className="bg-black/40 rounded-lg p-3 mb-3 backdrop-blur-sm">
                      <div className={`font-bold text-2xl mystical-font ${
                        tier.popular 
                          ? 'text-starlight text-cosmic-glow' 
                          : 'text-starlight'
                      }`}>
                        {tier.duration}
                      </div>
                      <div className={`text-xl font-bold ${
                        tier.popular 
                          ? 'text-white' 
                          : 'text-white'
                      }`}>
                        {tier.price}
                      </div>
                    </div>
                    
                    {/* Add cosmic glow effect for non-popular items */}
                    {!tier.popular && (
                      <div className="absolute inset-0 bg-gradient-to-r from-aurora/10 to-celestial-blue/10 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 -z-10"></div>
                    )}
                  </div>
                ))}
              </div>
              
              <div className="bg-gradient-to-r from-starlight/20 via-mystic/20 to-aurora/20 rounded-3xl p-10 border border-starlight/30 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-starlight/5 to-mystic/5 rounded-3xl"></div>
                <div className="relative z-10">
                  <h4 className="text-3xl font-bold mystical-font mb-6 flex items-center justify-center text-starlight">
                    <Phone className="mr-3 h-8 w-8" />
                    Direct Cosmic Connection
                  </h4>
                  <a 
                    href="tel:+919151074355" 
                    className="text-5xl lg:text-6xl font-bold mystical-font text-starlight hover:text-mystic transition-colors text-cosmic-glow block mb-6"
                  >
                    ✨ +91 91 510 743 55
                  </a>
                  <div className="flex items-center justify-center text-white/80 text-lg">
                    <Clock className="mr-3 h-6 w-6 text-aurora" />
                    <span>Available for cosmic guidance • 9 AM to 9 PM Daily</span>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-6 mt-8 text-center">
                    <div className="flex flex-col items-center">
                      <IndianRupee className="h-8 w-8 text-starlight mb-2" />
                      <h5 className="font-semibold text-lg mb-1">Fair Pricing</h5>
                      <p className="text-white/70">Pay only for guidance received</p>
                    </div>
                    <div className="flex flex-col items-center">
                      <Phone className="h-8 w-8 text-mystic mb-2" />
                      <h5 className="font-semibold text-lg mb-1">Instant Access</h5>
                      <p className="text-white/70">No appointments needed</p>
                    </div>
                    <div className="flex flex-col items-center">
                      <Stars className="h-8 w-8 text-aurora mb-2" />
                      <h5 className="font-semibold text-lg mb-1">Authentic Reading</h5>
                      <p className="text-white/70">Genuine cosmic insights</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
