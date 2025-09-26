import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowLeft, Users, Brain, BarChart3, Target, CheckCircle, TrendingUp, Calendar, Award, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";
import employeeManagementImage from "@/assets/employee-management.jpg";

const EmployeeManagement = () => {
  const modules = [
    {
      icon: Users,
      title: "Employee Profiles & Analytics",
      description: "Comprehensive employee database with performance tracking, skill assessments, and career progression analytics."
    },
    {
      icon: Brain,
      title: "AI-Powered Insights",
      description: "Machine learning algorithms that identify performance patterns, predict turnover risk, and suggest optimization strategies."
    },
    {
      icon: BarChart3,
      title: "Performance Dashboard",
      description: "Real-time visualization of KPIs, team performance metrics, and productivity analytics with customizable reports."
    },
    {
      icon: Target,
      title: "Goal Management",
      description: "Set, track, and analyze employee goals with automated progress monitoring and achievement recognition."
    },
    {
      icon: Calendar,
      title: "Workforce Planning",
      description: "Advanced scheduling, resource allocation, and capacity planning with AI-driven optimization recommendations."
    },
    {
      icon: Award,
      title: "Recognition & Rewards",
      description: "Automated recognition systems, peer nominations, and customizable reward programs to boost engagement."
    }
  ];

  const features = [
    "360-degree performance reviews",
    "Automated workflow management",
    "Skills gap analysis and training recommendations",
    "Predictive analytics for retention",
    "Compliance tracking and reporting",
    "Mobile-first employee self-service portal"
  ];

  const metrics = [
    { label: "Employee Satisfaction", value: "92%", icon: Users },
    { label: "Productivity Increase", value: "35%", icon: TrendingUp },
    { label: "Turnover Reduction", value: "60%", icon: Target },
    { label: "Time Savings", value: "15hrs/week", icon: Calendar }
  ];

  const industries = [
    "Technology & Software",
    "Healthcare & Pharmaceuticals", 
    "Financial Services",
    "Manufacturing",
    "Retail & E-commerce",
    "Education & Training"
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
              AI Employee Management Platform
            </h1>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-3xl mx-auto">
              Transform your HR operations with intelligent employee management. Leverage AI-driven insights to optimize 
              workforce performance, reduce turnover, and create exceptional employee experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="accent" size="lg" className="bg-background text-foreground hover:bg-background/90">
                Schedule Demo
              </Button>
              <Button variant="outline" size="lg" className="bg-white/10 backdrop-blur-sm border-white/30 text-primary-foreground hover:bg-white/20">
                Download Whitepaper
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                The Complete HR Solution
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Our AI-powered employee management platform provides a comprehensive suite of tools to streamline HR processes, 
                enhance employee engagement, and drive organizational success through data-driven decision making.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Integrated with 50+ HR tools and systems</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>SOC 2 Type II certified for data security</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Scales from 10 to 100,000+ employees</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src={employeeManagementImage} 
                alt="Employee Management Platform"
                className="w-full rounded-lg shadow-card"
              />
              <div className="absolute inset-0 bg-primary-gradient opacity-10 rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Core Modules */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Comprehensive Platform Modules
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to manage, develop, and optimize your workforce.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {modules.map((module, index) => (
              <Card key={index} className="bg-card-gradient border-0 shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-2">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary-gradient rounded-lg flex items-center justify-center mb-4">
                    <module.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">{module.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {module.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">
                Advanced Features & Capabilities
              </h2>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Button variant="hero" size="lg">
                  Explore All Features
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {metrics.map((metric, index) => (
                <Card key={index} className="text-center p-6 bg-card-gradient border-0 shadow-card hover:shadow-glow transition-all duration-300">
                  <metric.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <div className="text-3xl font-bold text-foreground mb-2">{metric.value}</div>
                  <div className="text-muted-foreground text-sm">{metric.label}</div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AI Capabilities */}
      <section className="py-20 bg-primary-gradient">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-6">
              AI-Powered Intelligence
            </h2>
            <p className="text-xl text-primary-foreground/80">
              Leverage cutting-edge artificial intelligence to transform your HR operations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center">
              <Brain className="h-12 w-12 text-primary-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-primary-foreground mb-4">Predictive Analytics</h3>
              <p className="text-primary-foreground/80">
                Predict employee turnover, identify flight risks, and recommend retention strategies using advanced ML models.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center">
              <Target className="h-12 w-12 text-primary-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-primary-foreground mb-4">Performance Optimization</h3>
              <p className="text-primary-foreground/80">
                AI-driven recommendations for performance improvement, skill development, and career pathing.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center">
              <Briefcase className="h-12 w-12 text-primary-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-primary-foreground mb-4">Smart Matching</h3>
              <p className="text-primary-foreground/80">
                Intelligent job matching, team formation, and project assignment based on skills and performance data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-muted-foreground">
              Tailored configurations and workflows for different industries and business models.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <Card key={index} className="p-6 bg-card-gradient border-0 shadow-card hover:shadow-glow transition-all duration-300 group cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary-gradient rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Briefcase className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{industry}</h3>
                    <p className="text-sm text-muted-foreground">Specialized features</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation & Support */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Seamless Implementation
            </h2>
            <p className="text-xl text-muted-foreground">
              Our expert team ensures a smooth transition with minimal disruption to your operations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery & Planning", description: "Analyze current processes and design custom implementation plan" },
              { step: "02", title: "Data Migration", description: "Secure transfer of existing employee data and system integration" },
              { step: "03", title: "Training & Onboarding", description: "Comprehensive training for administrators and end users" },
              { step: "04", title: "Go-Live & Support", description: "24/7 support during launch and ongoing optimization" }
            ].map((phase, index) => (
              <Card key={index} className="text-center p-6 bg-card-gradient border-0 shadow-card">
                <div className="w-16 h-16 bg-primary-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-primary-foreground">{phase.step}</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{phase.title}</h3>
                <p className="text-sm text-muted-foreground">{phase.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary-gradient rounded-2xl p-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-6">
              Ready to Transform Your HR Operations?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Join leading organizations that have revolutionized their employee management with our AI platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="accent" size="lg" className="bg-background text-foreground hover:bg-background/90">
                Schedule Consultation
              </Button>
              <Button variant="outline" size="lg" className="bg-white/10 backdrop-blur-sm border-white/30 text-primary-foreground hover:bg-white/20">
                Request Pricing
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EmployeeManagement;