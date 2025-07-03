import { Card, CardContent } from "@/components/ui/card";

export default function AboutSection() {
  const stats = [
    { number: "10+", label: "Years Experience" },
    { number: "5000+", label: "Consultations" },
    { number: "4", label: "Specializations" },
    { number: "98%", label: "Satisfaction Rate" }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-slate-100">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-midnight heading-font mb-8">
              About Your Spiritual Guide
            </h2>
            
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                With over a decade of experience in spiritual sciences, I have dedicated my life to helping individuals discover their true potential through ancient wisdom and modern insight.
              </p>
              
              <p>
                My journey began with a deep fascination for the cosmic connections that influence our daily lives. Through years of study and practice in astrology, numerology, palmistry, and tarot, I have developed a unique approach that combines traditional techniques with contemporary understanding.
              </p>
              
              <p>
                I believe that everyone deserves access to spiritual guidance that can illuminate their path and provide clarity during life's most challenging moments. My consultations are designed to empower you with knowledge and insight to make informed decisions about your future.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mt-12">
              <img 
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300" 
                alt="Zodiac wheel with astrological symbols" 
                className="rounded-lg shadow-lg"
              />
              <img 
                src="https://images.unsplash.com/photo-1551554781-c46200ea959d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300" 
                alt="Ancient numerology calculations" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="p-6">
                    <div className="text-4xl font-bold text-primary-purple heading-font mb-2">
                      {stat.number}
                    </div>
                    <div className="text-gray-600 font-medium">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="mt-8">
              <img 
                src="https://images.unsplash.com/photo-1573588028698-f4759befb09a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400" 
                alt="Crystal ball with mystical lighting" 
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
