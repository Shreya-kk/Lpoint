import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import EducationSection from "@/components/EducationSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import { StatsCounter, SuccessStories, ProgressTracker, FloatingCTA } from "@/components/InteractiveElements";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      
      {/* Interactive Stats Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatsCounter end={5000} label="Students Trained" />
            <StatsCounter end={95} label="Job Placement Rate" />
            <StatsCounter end={150} label="Partner Companies" />
            <StatsCounter end={24} label="Course Modules" />
          </div>
        </div>
      </section>

      <ServicesSection />
      
      {/* Success Stories Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
            <p className="text-muted-foreground">See how LPOINT transformed careers</p>
          </div>
          <div className="max-w-2xl mx-auto">
            <SuccessStories />
          </div>
        </div>
      </section>

      <EducationSection />
      
      {/* Application Process Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Your Journey Starts Here</h2>
            <p className="text-muted-foreground">Simple steps to transform your career</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <ProgressTracker />
          </div>
        </div>
      </section>

      <AboutSection />
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Index;
