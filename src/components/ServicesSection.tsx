import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bot, Camera, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import mockInterviewImage from "@/assets/mock-interview.jpg";
import faceAttendanceImage from "@/assets/face-attendance.jpg";
import employeeManagementImage from "@/assets/employee-management.jpg";

const ServicesSection = () => {
  const services = [
    {
      icon: Bot,
      title: "Custom AI Interview System",
      description: "Tailored AI-powered interview platform built specifically for your organization's requirements and culture.",
      image: mockInterviewImage,
      link: "/mock-interview",
      features: ["Custom question sets", "Brand-specific interface", "Advanced analytics", "Multi-language support"]
    },
    {
      icon: Camera,
      title: "Custom Facial Recognition System",
      description: "Bespoke facial recognition solutions designed for your specific security and attendance requirements.",
      image: faceAttendanceImage,
      link: "/face-attendance",
      features: ["Custom model training", "Privacy-compliant", "Hybrid cloud/edge deployment", "API integration"]
    },
    {
      icon: Users,
      title: "Custom AI Workforce Solutions",
      description: "Personalized AI-driven workforce management systems built to match your organizational workflow and goals.",
      image: employeeManagementImage,
      link: "/employee-management",
      features: ["Custom dashboards", "Workflow automation", "Intelligent recommendations", "Scalable architecture"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Custom AI Solutions with Generative AI
          </h2>
          <p className="text-xl text-muted-foreground">
            We build tailor-made AI projects according to your specific business needs using cutting-edge Generative AI technology. 
            From concept to deployment - your vision, our AI expertise.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-ai transition-all duration-300 hover:-translate-y-2 bg-card-gradient border-0 animate-scale-in">
              <CardHeader className="pb-4">
                <div className="relative overflow-hidden rounded-lg mb-6">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary-gradient opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary-gradient rounded-lg">
                    <service.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
                </div>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                <Link to={service.link}>
                  <Button variant="default" className="w-full group">
                    Learn More
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="bg-ai-gradient rounded-2xl p-8 sm:p-12 text-center shadow-ai">
            <h3 className="text-2xl sm:text-3xl font-bold text-primary-foreground mb-4">
              Ready for Your Custom AI Solution?
            </h3>
            <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
              Let's discuss your unique requirements and build a custom AI solution that perfectly fits your business needs.
            </p>
            <Link to="/get-started">
              <Button variant="accent" size="lg" className="bg-background text-foreground hover:bg-background/90 shadow-glow hover:shadow-ai transform hover:scale-105 transition-all">
                Get Your Custom AI Quote
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;