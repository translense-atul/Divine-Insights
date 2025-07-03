import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Star, Menu, Sparkles } from "lucide-react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { label: "Home", href: "home" },
    { label: "Services", href: "services" },
    { label: "About", href: "about" },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-deep-space/95 backdrop-blur-md border-b border-starlight/20 shadow-lg shadow-cosmic/20" 
          : "cosmic-gradient"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div 
            className="flex items-center space-x-3 cursor-pointer group" 
            onClick={() => scrollToSection("home")}
          >
            <div className="relative">
              <Star className="h-10 w-10 text-starlight group-hover:animate-spin-slow transition-all" />
              <Sparkles className="absolute -top-1 -right-1 h-4 w-4 text-mystic animate-pulse" />
            </div>
            <span className="text-3xl font-bold mystical-font starlight-text text-cosmic-glow">
              Divine Insights
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="relative text-white hover:text-starlight transition-all duration-300 font-medium text-lg group"
              >
                <span className="relative z-10">{link.label}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-starlight/20 to-mystic/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 opacity-0 group-hover:opacity-100"></div>
              </button>
            ))}
          </div>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="text-white hover:text-starlight">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent className="bg-deep-space text-white border-l border-starlight/30">
              <div className="flex flex-col space-y-8 mt-12">
                <div className="text-center mb-8">
                  <Star className="h-12 w-12 text-starlight mx-auto mb-3" />
                  <h3 className="text-xl font-bold mystical-font text-starlight">Divine Insights</h3>
                </div>
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => scrollToSection(link.href)}
                    className="text-left text-xl hover:text-starlight transition-colors py-2 border-b border-white/10 hover:border-starlight/50"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
