import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Target, Lightbulb, Award } from "lucide-react";

const AboutSection = () => {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Pushing the boundaries of AI technology to solve real-world business challenges."
    },
    {
      icon: Users,
      title: "People-First",
      description: "Empowering organizations and individuals through intelligent technology solutions."
    },
    {
      icon: Target,
      title: "Excellence",
      description: "Delivering cutting-edge solutions with the highest standards of quality and reliability."
    },
    {
      icon: Award,
      title: "Trust",
      description: "Building long-term partnerships through transparency, security, and proven results."
    }
  ];

  const achievements = [
    { metric: "100+", label: "Custom AI Projects" },
    { metric: "500+", label: "Satisfied Clients" },
    { metric: "99.9%", label: "Client Satisfaction" },
    { metric: "24/7", label: "AI Support Available" }
  ];

  const team = [
    {
      name: "Dr. Sarah Chen",
      role: "CEO & Co-Founder",
      background: "Former AI Research Director at Google, PhD in Computer Science from Stanford"
    },
    {
      name: "Michael Rodriguez",
      role: "CTO & Co-Founder", 
      background: "Ex-Microsoft Principal Engineer, 15+ years in enterprise AI solutions"
    },
    {
      name: "Dr. Priya Patel",
      role: "Head of AI Research",
      background: "Former Research Scientist at OpenAI, PhD in Machine Learning from MIT"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            About LPOINT
          </h2>
          <p className="text-xl text-muted-foreground">
            Since 2020, LPOINT specializes in building custom AI solutions using cutting-edge Generative AI technology. 
            We transform your unique business challenges into intelligent, automated solutions.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="bg-ai-gradient rounded-2xl p-12 text-center mb-16 shadow-ai animate-scale-in">
          <h3 className="text-2xl sm:text-3xl font-bold text-primary-foreground mb-6">
            Our Mission
          </h3>
          <p className="text-xl text-primary-foreground/80 max-w-4xl mx-auto leading-relaxed">
            To create custom AI solutions that perfectly match each client's unique requirements using state-of-the-art 
            Generative AI technology. We believe every business deserves AI solutions built specifically for their needs, 
            not one-size-fits-all products.
          </p>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Our Core Values
            </h3>
            <p className="text-lg text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center bg-card-gradient border-0 shadow-card hover:shadow-glow transition-all duration-300">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-primary-gradient rounded-full flex items-center justify-center mb-4">
                    <value.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-lg">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Our Impact
            </h3>
            <p className="text-lg text-muted-foreground">
              Trusted by organizations worldwide
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center p-8 bg-card-gradient border-0 shadow-card">
                <div className="text-4xl font-bold text-primary mb-2">{achievement.metric}</div>
                <div className="text-muted-foreground">{achievement.label}</div>
              </Card>
            ))}
          </div>
        </div>

        {/* Leadership Team */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Leadership Team
            </h3>
            <p className="text-lg text-muted-foreground">
              World-class experts driving AI innovation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="bg-card-gradient border-0 shadow-card hover:shadow-glow transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="w-24 h-24 bg-primary-gradient rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-12 w-12 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <Badge variant="secondary" className="mx-auto">
                    {member.role}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-muted-foreground">
                    {member.background}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Company Timeline */}
        <div className="text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-8">
            Our Journey
          </h3>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { year: "2020", event: "LPOINT Founded", description: "Started with a vision to democratize AI" },
                { year: "2021", event: "First Product Launch", description: "AI Mock Interview platform goes live" },
                { year: "2022", event: "Series A Funding", description: "$15M raised to expand product suite" },
                { year: "2024", event: "Global Expansion", description: "Serving 500+ companies worldwide" }
              ].map((milestone, index) => (
                <Card key={index} className="text-center p-6 bg-card-gradient border-0">
                  <div className="text-2xl font-bold text-primary mb-2">{milestone.year}</div>
                  <div className="font-semibold text-foreground mb-2">{milestone.event}</div>
                  <div className="text-sm text-muted-foreground">{milestone.description}</div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;