import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-hero-gradient opacity-90" />
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-background/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-8 animate-fade-in">
            <Sparkles className="h-4 w-4 text-tech-cyan animate-float" />
            <span className="text-sm font-medium text-primary-foreground">
              Custom AI Solutions with Generative AI
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight animate-slide-up">
            Custom AI Projects Built with{" "}
            <span className="bg-ai-gradient bg-clip-text text-transparent animate-float">
              Generative AI
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl sm:text-2xl text-primary-foreground/80 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in">
            We create custom AI solutions tailored to your business needs using cutting-edge Generative AI technology. 
            From intelligent interviews to facial recognition systems - we build what you envision. Plus, master AI/ML 
            skills with our comprehensive Python Data Science and LLM programs.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-scale-in">
            <Link to="/get-started">
              <Button variant="hero" size="lg" className="group shadow-ai hover:shadow-glow">
                Get Custom AI Solution
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/enrollment">
              <Button variant="outline" size="lg" className="bg-white/10 backdrop-blur-sm border-white/30 text-primary-foreground hover:bg-white/20 hover:shadow-glow">
                Learn AI/ML Skills
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto animate-fade-in">
            <div className="text-center transform hover:scale-105 transition-transform">
              <div className="text-3xl font-bold text-primary-foreground mb-2 bg-ai-gradient bg-clip-text text-transparent">100+</div>
              <div className="text-primary-foreground/70">Custom AI Projects</div>
            </div>
            <div className="text-center transform hover:scale-105 transition-transform">
              <div className="text-3xl font-bold text-primary-foreground mb-2 bg-ai-gradient bg-clip-text text-transparent">500+</div>
              <div className="text-primary-foreground/70">Satisfied Clients</div>
            </div>
            <div className="text-center transform hover:scale-105 transition-transform">
              <div className="text-3xl font-bold text-primary-foreground mb-2 bg-ai-gradient bg-clip-text text-transparent">24/7</div>
              <div className="text-primary-foreground/70">AI Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full p-1">
            <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mx-auto animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;