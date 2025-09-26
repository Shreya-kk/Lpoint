import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BookOpen, Code, Brain, Clock, Users, Award } from "lucide-react";
import pythonCourseImage from "@/assets/python-course.jpg";

const EducationSection = () => {
  const courses = [
    {
      title: "Python Data Science Mastery",
      description: "Comprehensive program covering data analysis, machine learning, and statistical modeling with Python.",
      duration: "12 weeks",
      level: "Beginner to Advanced",
      students: "2,500+",
      modules: [
        "Python Fundamentals & Libraries",
        "Data Analysis with Pandas & NumPy",
        "Machine Learning with Scikit-learn",
        "Deep Learning with TensorFlow",
        "Data Visualization & Statistics"
      ]
    },
    {
      title: "Large Language Models (LLM)",
      description: "Master the fundamentals and applications of Large Language Models, from GPT to custom implementations.",
      duration: "8 weeks",
      level: "Intermediate",
      students: "1,200+",
      modules: [
        "LLM Architecture & Transformers",
        "Fine-tuning & Transfer Learning",
        "Prompt Engineering & Optimization",
        "RAG Systems & Vector Databases",
        "Production Deployment & Scaling"
      ]
    }
  ];

  const internshipBenefits = [
    { icon: Code, title: "Real-world Projects", description: "Work on actual AI implementations" },
    { icon: Users, title: "Mentorship", description: "Guidance from industry experts" },
    { icon: Brain, title: "Cutting-edge Tech", description: "Latest AI tools and frameworks" },
    { icon: Award, title: "Certification", description: "Industry-recognized credentials" }
  ];

  return (
    <section id="education" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Future-Ready Education
          </h2>
          <p className="text-xl text-muted-foreground">
            Master the skills that matter with our comprehensive AI and data science programs designed 
            for the next generation of tech professionals.
          </p>
        </div>

        {/* Course Offerings */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {courses.map((course, index) => (
            <Card key={index} className="bg-card-gradient border-0 shadow-card hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <div className="relative overflow-hidden rounded-lg mb-6">
                  <img 
                    src={pythonCourseImage} 
                    alt={course.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      {course.level}
                    </span>
                  </div>
                </div>
                <CardTitle className="text-2xl font-bold mb-2">{course.title}</CardTitle>
                <CardDescription className="text-muted-foreground mb-4">
                  {course.description}
                </CardDescription>
                
                {/* Course Stats */}
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-primary" />
                    <span className="text-sm text-muted-foreground">{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-primary" />
                    <span className="text-sm text-muted-foreground">{course.students} enrolled</span>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <h4 className="font-semibold mb-3">Course Modules:</h4>
                <div className="space-y-2 mb-6">
                  {course.modules.map((module, moduleIndex) => (
                    <div key={moduleIndex} className="flex items-start gap-2">
                      <BookOpen className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{module}</span>
                    </div>
                  ))}
                </div>
                <Link to="/enrollment">
                  <Button variant="hero" className="w-full">
                    Enroll Now
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Internship Program */}
        <div className="bg-primary-gradient rounded-2xl p-8 sm:p-12 text-center mb-16">
          <h3 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-6">
            AI Internship Program
          </h3>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-3xl mx-auto">
            Get hands-on experience with cutting-edge AI projects while working alongside industry experts. 
            Build your portfolio and kickstart your AI career.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {internshipBenefits.map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <benefit.icon className="h-8 w-8 text-primary-foreground mx-auto mb-3" />
                <h4 className="font-semibold text-primary-foreground mb-2">{benefit.title}</h4>
                <p className="text-sm text-primary-foreground/70">{benefit.description}</p>
              </div>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/internships">
              <Button variant="accent" size="lg" className="bg-background text-foreground hover:bg-background/90">
                Explore Internships
              </Button>
            </Link>
            <Link to="/enrollment">
              <Button variant="outline" size="lg" className="bg-white/10 backdrop-blur-sm border-white/30 text-primary-foreground hover:bg-white/20">
                Enroll in Courses
              </Button>
            </Link>
          </div>
        </div>

        {/* Success Stories */}
        <div className="text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-8">
            Student Success Stories
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Sarah Chen", role: "ML Engineer at Google", quote: "LPOINT's Python course transformed my career path completely." },
              { name: "Raj Patel", role: "AI Researcher", quote: "The LLM program gave me the expertise to lead AI initiatives at my company." },
              { name: "Emily Rodriguez", role: "Data Scientist", quote: "The internship program provided invaluable real-world experience." }
            ].map((story, index) => (
              <Card key={index} className="bg-background border shadow-soft">
                <CardContent className="p-6 text-center">
                  <p className="text-muted-foreground italic mb-4">"{story.quote}"</p>
                  <h4 className="font-semibold text-foreground">{story.name}</h4>
                  <p className="text-sm text-primary">{story.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;