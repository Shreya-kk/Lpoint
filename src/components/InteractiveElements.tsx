import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  Users, 
  Award, 
  Clock,
  CheckCircle,
  Star,
  ArrowRight
} from "lucide-react";

export const StatsCounter = ({ end, label, duration = 2000 }: { end: number; label: string; duration?: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const increment = end / (duration / 50);
    const timer = setInterval(() => {
      setCount(prev => {
        if (prev >= end) {
          clearInterval(timer);
          return end;
        }
        return Math.min(prev + increment, end);
      });
    }, 50);

    return () => clearInterval(timer);
  }, [end, duration]);

  return (
    <div className="text-center">
      <div className="text-3xl font-bold text-primary">{Math.floor(count)}+</div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </div>
  );
};

export const SuccessStories = () => {
  const [currentStory, setCurrentStory] = useState(0);
  
  const stories = [
    {
      name: "Sarah Chen",
      role: "ML Engineer at Google",
      story: "LPOINT's internship program gave me the hands-on experience I needed to land my dream job.",
      rating: 5,
      company: "Google"
    },
    {
      name: "Alex Rodriguez",
      role: "Data Scientist at Microsoft",
      story: "The mentorship and real projects at LPOINT prepared me for the challenges in industry.",
      rating: 5,
      company: "Microsoft"
    },
    {
      name: "Priya Patel",
      role: "AI Researcher at OpenAI",
      story: "LPOINT's LLM specialization track was exactly what I needed to break into AI research.",
      rating: 5,
      company: "OpenAI"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStory(prev => (prev + 1) % stories.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [stories.length]);

  const story = stories[currentStory];

  return (
    <Card className="p-6 text-center hover:shadow-lg transition-shadow">
      <CardContent className="space-y-4">
        <div className="flex justify-center space-x-1">
          {Array.from({ length: story.rating }).map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-primary text-primary" />
          ))}
        </div>
        <blockquote className="text-lg italic">"{story.story}"</blockquote>
        <div>
          <div className="font-semibold">{story.name}</div>
          <div className="text-sm text-muted-foreground">{story.role}</div>
          <Badge variant="secondary" className="mt-2">{story.company}</Badge>
        </div>
        <div className="flex justify-center space-x-2">
          {stories.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentStory ? 'bg-primary' : 'bg-muted'
              }`}
              onClick={() => setCurrentStory(index)}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export const ProgressTracker = () => {
  const [currentStep, setCurrentStep] = useState(0);
  
  const steps = [
    { icon: Users, label: "Apply", description: "Submit your application" },
    { icon: Clock, label: "Assessment", description: "Technical evaluation" },
    { icon: Award, label: "Interview", description: "Meet our team" },
    { icon: CheckCircle, label: "Start", description: "Begin your journey" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStep(prev => (prev + 1) % steps.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [steps.length]);

  return (
    <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-4">
      {steps.map((step, index) => (
        <div key={index} className="flex flex-col items-center space-y-2 relative">
          <div className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-500 ${
            index <= currentStep 
              ? 'bg-primary text-primary-foreground shadow-glow scale-110' 
              : 'bg-muted text-muted-foreground'
          }`}>
            <step.icon className="w-6 h-6" />
          </div>
          <div className="text-center">
            <div className="font-semibold">{step.label}</div>
            <div className="text-xs text-muted-foreground">{step.description}</div>
          </div>
          {index < steps.length - 1 && (
            <ArrowRight className="hidden md:block absolute -right-8 top-6 w-4 h-4 text-muted-foreground" />
          )}
        </div>
      ))}
    </div>
  );
};

export const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      setIsVisible(scrollPosition > windowHeight * 0.5);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-fade-in">
      <Button 
        size="lg" 
        variant="hero" 
        className="shadow-lg hover:shadow-xl transition-all duration-300"
      >
        Get Started Now
        <ArrowRight className="w-4 h-4 ml-2" />
      </Button>
    </div>
  );
};