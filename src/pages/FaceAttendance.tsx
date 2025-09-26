import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowLeft, Camera, Shield, BarChart3, Clock, CheckCircle, Users, Zap, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import faceAttendanceImage from "@/assets/face-attendance.jpg";

const FaceAttendance = () => {
  const features = [
    {
      icon: Camera,
      title: "Advanced Facial Recognition",
      description: "State-of-the-art computer vision technology with 99.9% accuracy in face detection and recognition."
    },
    {
      icon: Shield,
      title: "Anti-Spoofing Protection",
      description: "Advanced liveness detection prevents photo, video, and mask-based spoofing attempts."
    },
    {
      icon: BarChart3,
      title: "Real-Time Analytics",
      description: "Comprehensive dashboards with attendance patterns, tardiness reports, and productivity insights."
    },
    {
      icon: Clock,
      title: "Instant Processing",
      description: "Lightning-fast recognition in under 0.5 seconds with real-time attendance logging."
    }
  ];

  const benefits = [
    "Eliminate buddy punching and time theft",
    "Reduce administrative overhead by 80%",
    "Improve payroll accuracy",
    "Enable contactless attendance tracking",
    "Generate detailed compliance reports",
    "Integration with existing HR systems"
  ];

  const specifications = [
    { label: "Recognition Accuracy", value: "99.9%" },
    { label: "Processing Speed", value: "<0.5 seconds" },
    { label: "Database Capacity", value: "100,000+ faces" },
    { label: "Concurrent Users", value: "Unlimited" },
    { label: "Operating Temperature", value: "-10°C to 60°C" },
    { label: "Camera Resolution", value: "1080p HD" }
  ];

  const integrations = [
    "SAP SuccessFactors",
    "Workday",
    "BambooHR",
    "ADP Workforce",
    "Oracle HCM",
    "Microsoft Teams"
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
              AI Face Attendance System
            </h1>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-3xl mx-auto">
              Revolutionary facial recognition technology for seamless, secure, and accurate employee attendance tracking. 
              Eliminate time fraud and streamline workforce management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="accent" size="lg" className="bg-background text-foreground hover:bg-background/90">
                Request Demo
              </Button>
              <Button variant="outline" size="lg" className="bg-white/10 backdrop-blur-sm border-white/30 text-primary-foreground hover:bg-white/20">
                Download Brochure
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
                Next-Generation Attendance Tracking
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Our AI-powered face attendance system combines cutting-edge facial recognition technology with 
                advanced anti-spoofing measures to provide the most secure and accurate attendance tracking solution 
                in the market.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>GDPR and privacy compliant</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Works in various lighting conditions</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Cloud and on-premise deployment</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src={faceAttendanceImage} 
                alt="Face Attendance System"
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
              Advanced Technology Features
            </h2>
            <p className="text-xl text-muted-foreground">
              Built with enterprise-grade security and performance in mind.
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

      {/* Technical Specifications */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">
                Technical Specifications
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {specifications.map((spec, index) => (
                  <Card key={index} className="p-6 bg-card-gradient border-0">
                    <div className="text-2xl font-bold text-primary mb-2">{spec.value}</div>
                    <div className="text-muted-foreground">{spec.label}</div>
                  </Card>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">
                Key Benefits
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
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Enterprise-Grade Security
            </h2>
            <p className="text-xl text-muted-foreground">
              Your data security and employee privacy are our top priorities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-8 bg-card-gradient border-0 shadow-card">
              <Lock className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle className="text-xl mb-4">Data Encryption</CardTitle>
              <CardDescription>
                End-to-end encryption with AES-256 standard. All facial templates are encrypted and stored securely.
              </CardDescription>
            </Card>
            <Card className="text-center p-8 bg-card-gradient border-0 shadow-card">
              <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle className="text-xl mb-4">Privacy Compliance</CardTitle>
              <CardDescription>
                GDPR, CCPA, and BIPA compliant. Template-based recognition ensures no actual photos are stored.
              </CardDescription>
            </Card>
            <Card className="text-center p-8 bg-card-gradient border-0 shadow-card">
              <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle className="text-xl mb-4">Liveness Detection</CardTitle>
              <CardDescription>
                Advanced anti-spoofing technology prevents photo, video, and 3D mask attacks with 99.7% accuracy.
              </CardDescription>
            </Card>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Seamless Integrations
            </h2>
            <p className="text-xl text-muted-foreground">
              Connect with your existing HR and payroll systems effortlessly.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {integrations.map((integration, index) => (
              <Card key={index} className="p-6 text-center bg-card-gradient border-0 shadow-soft hover:shadow-card transition-all duration-300">
                <div className="font-semibold text-foreground">{integration}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-20 bg-primary-gradient">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-6">
              Calculate Your ROI
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8">
              See how much you can save with our face attendance system.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold text-primary-foreground mb-2">80%</div>
                <div className="text-primary-foreground/80">Reduction in Time Theft</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold text-primary-foreground mb-2">$50K+</div>
                <div className="text-primary-foreground/80">Annual Savings</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold text-primary-foreground mb-2">6 months</div>
                <div className="text-primary-foreground/80">Payback Period</div>
              </div>
            </div>
            
            <Button variant="accent" size="lg" className="bg-background text-foreground hover:bg-background/90">
              Get Custom ROI Report
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FaceAttendance;