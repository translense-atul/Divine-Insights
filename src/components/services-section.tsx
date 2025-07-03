import { Card, CardContent } from "@/components/ui/card";
import { Star, Calculator, Hand, Eye, Sparkles, Moon, Sun, Zap } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: Star,
      title: "Astrology",
      subtitle: "Cosmic Blueprint Reading",
      description: "Comprehensive birth chart analysis, planetary transits, and celestial guidance to unlock your cosmic destiny and future paths.",
      gradient: "from-starlight to-mystic",
      accent: "text-starlight"
    },
    {
      icon: Calculator,
      title: "Numerology", 
      subtitle: "Sacred Number Mysticism",
      description: "Discover the hidden power of numbers in your name, birth date, and life path for profound personal transformation.",
      gradient: "from-aurora to-celestial-blue",
      accent: "text-aurora"
    },
    {
      icon: Hand,
      title: "Palmistry",
      subtitle: "Ancient Hand Wisdom",
      description: "Read the sacred lines of your palms to reveal destiny, relationships, career prospects, and spiritual journey ahead.",
      gradient: "from-mystic to-starlight",
      accent: "text-mystic"
    },
    {
      icon: Eye,
      title: "Tarot Reading",
      subtitle: "Mystical Card Divination",
      description: "Intuitive tarot guidance for love, career, spiritual growth, and life's most profound questions through ancient card wisdom.",
      gradient: "from-celestial-blue to-aurora",
      accent: "text-celestial-blue"
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-deep-space via-nebula to-cosmic relative overflow-hidden">
      {/* Cosmic background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 text-starlight animate-pulse">
          <Moon size={32} />
        </div>
        <div className="absolute top-40 right-20 text-aurora animate-bounce">
          <Sun size={28} />
        </div>
        <div className="absolute bottom-40 left-20 text-mystic animate-pulse">
          <Zap size={24} />
        </div>
        <div className="absolute bottom-20 right-10 text-starlight animate-spin-slow">
          <Sparkles size={36} />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-bold mystical-font text-starlight mb-6 text-cosmic-glow">
            Cosmic Arts & Divination
          </h2>
          <p className="text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Journey through ancient wisdom and celestial knowledge
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="bg-white/95 backdrop-blur-sm border-2 border-white/20 h-full relative group hover:shadow-2xl transition-all duration-300 hover:border-starlight/50">
                <CardContent className="p-8 text-center h-full flex flex-col relative z-10">
                  <div className="mb-6 relative">
                    <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} rounded-full opacity-10 blur-lg scale-150 group-hover:opacity-20 transition-all duration-500`}></div>
                    <div className={`relative bg-gradient-to-r ${service.gradient} p-4 rounded-full w-20 h-20 mx-auto flex items-center justify-center shadow-lg`}>
                      <IconComponent className="h-10 w-10 text-white" />
                    </div>
                  </div>
                  
                  <h3 className={`text-2xl font-bold mystical-font text-deep-space mb-2 group-hover:${service.accent} transition-colors`}>
                    {service.title}
                  </h3>
                  
                  <h4 className="text-lg text-gray-600 font-medium mb-4 italic">
                    {service.subtitle}
                  </h4>
                  
                  <p className="text-gray-700 leading-relaxed flex-grow">
                    {service.description}
                  </p>
                  
                  <div className="mt-6 pt-4 border-t border-gray-200">
                    <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${service.gradient} bg-opacity-10 border border-gray-300`}>
                      <span className="text-gray-700 text-sm font-medium">Professional Reading</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <div className="cosmic-glass rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-starlight mystical-font mb-4">
              Why Choose Divine Insights?
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-white/90">
              <div>
                <Star className="h-8 w-8 text-starlight mx-auto mb-3" />
                <h4 className="font-semibold text-lg mb-2">Authentic Guidance</h4>
                <p>Genuine spiritual insights based on years of study and practice</p>
              </div>
              <div>
                <Sparkles className="h-8 w-8 text-mystic mx-auto mb-3" />
                <h4 className="font-semibold text-lg mb-2">Personalized Readings</h4>
                <p>Every consultation is tailored to your unique cosmic signature</p>
              </div>
              <div>
                <Eye className="h-8 w-8 text-aurora mx-auto mb-3" />
                <h4 className="font-semibold text-lg mb-2">Clear Answers</h4>
                <p>Practical guidance you can apply to transform your life</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
