import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowLeft, Bot, Brain, BarChart3, Target, CheckCircle, Star, Users, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import mockInterviewImage from "@/assets/mock-interview.jpg";

const MockInterview = () => {
  const features = [
    {
      icon: Bot,
      title: "AI-Powered Interviewer",
      description: "Advanced AI that conducts realistic interviews with natural conversation flow and adaptive questioning."
    },
    {
      icon: Brain,
      title: "Behavioral Analysis",
      description: "Real-time analysis of speech patterns, facial expressions, and body language for comprehensive feedback."
    },
    {
      icon: BarChart3,
      title: "Performance Analytics",
      description: "Detailed reports on communication skills, technical knowledge, and overall interview performance."
    },
    {
      icon: Target,
      title: "Industry-Specific Questions",
      description: "Customized question sets for different industries, roles, and experience levels."
    }
  ];

  const benefits = [
    "Practice unlimited interviews 24/7",
    "Instant feedback and improvement suggestions",
    "Reduces interview anxiety and builds confidence",
    "Tracks progress over time",
    "Prepares for real-world scenarios",
    "Cost-effective alternative to human coaches"
  ];

  const plans = [
    {
      name: "Basic",
      price: "$29",
      period: "/month",
      features: [
        "5 interviews per month",
        "Basic feedback reports",
        "General question database",
        "Email support"
      ]
    },
    {
      name: "Professional",
      price: "$79",
      period: "/month",
      features: [
        "Unlimited interviews",
        "Advanced analytics",
        "Industry-specific questions",
        "Video recording & playback",
        "Priority support",
        "Custom scenarios"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      features: [
        "Everything in Professional",
        "White-label solution",
        "API integration",
        "Custom AI training",
        "Dedicated account manager",
        "SLA guarantee"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-hero-gradient">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Link to="/" className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground mb-6 transition-colors">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              AI Mock Interview Platform
            </h1>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-3xl mx-auto">
              Master your interview skills with our advanced AI interviewer that provides real-time feedback, 
              behavioral analysis, and industry-specific preparation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="accent" size="lg" className="bg-background text-foreground hover:bg-background/90">
                Start Free Trial
              </Button>
              <Button variant="outline" size="lg" className="bg-white/10 backdrop-blur-sm border-white/30 text-primary-foreground hover:bg-white/20">
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Product Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                The Future of Interview Preparation
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Our AI Mock Interview platform uses cutting-edge artificial intelligence to simulate real interview 
                scenarios. With advanced natural language processing and computer vision, we provide the most 
                realistic interview practice experience available.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>95% accuracy in behavioral prediction</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Used by 10,000+ job seekers worldwide</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Trusted by Fortune 500 companies</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src={mockInterviewImage} 
                alt="AI Mock Interview Platform"
                className="w-full rounded-lg shadow-card"
              />
              <div className="absolute inset-0 bg-primary-gradient opacity-10 rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Advanced Features
            </h2>
            <p className="text-xl text-muted-foreground">
              Our platform combines multiple AI technologies to provide comprehensive interview training.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center bg-card-gradient border-0 shadow-card hover:shadow-glow transition-all duration-300">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-primary-gradient rounded-full flex items-center justify-center mb-4">
                    <feature.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">
                Why Choose Our AI Mock Interview?
              </h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Card className="text-center p-6 bg-card-gradient border-0">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-foreground mb-2">10K+</div>
                <div className="text-muted-foreground">Users Trained</div>
              </Card>
              <Card className="text-center p-6 bg-card-gradient border-0">
                <Star className="h-12 w-12 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-foreground mb-2">4.9/5</div>
                <div className="text-muted-foreground">User Rating</div>
              </Card>
              <Card className="text-center p-6 bg-card-gradient border-0">
                <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-foreground mb-2">24/7</div>
                <div className="text-muted-foreground">Available</div>
              </Card>
              <Card className="text-center p-6 bg-card-gradient border-0">
                <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-foreground mb-2">85%</div>
                <div className="text-muted-foreground">Success Rate</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Choose Your Plan
            </h2>
            <p className="text-xl text-muted-foreground">
              Select the perfect plan for your interview preparation needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card key={index} className={`relative bg-card-gradient border-0 shadow-card hover:shadow-glow transition-all duration-300 ${plan.popular ? 'ring-2 ring-primary transform scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-bold text-primary">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant={plan.popular ? "hero" : "default"} className="w-full">
                    {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary-gradient rounded-2xl p-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-6">
              Ready to Ace Your Next Interview?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Join thousands of successful candidates who have improved their interview skills with our AI platform.
            </p>
            <Button variant="accent" size="lg" className="bg-background text-foreground hover:bg-background/90">
              Start Your Free Trial Today
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MockInterview;