import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ArrowLeft, 
  Calendar, 
  DollarSign, 
  Users, 
  BookOpen, 
  Award, 
  Briefcase,
  TrendingUp,
  Brain,
  Database,
  Code,
  BarChart3
} from "lucide-react";
import { Link } from "react-router-dom";

const Internships = () => {
  const [selectedDuration, setSelectedDuration] = useState("1-month");

  const internshipPrograms = {
    "1-month": {
      title: "1-Month Intensive Bootcamp",
      price: "$1,999",
      description: "Perfect for students wanting to explore AI and get hands-on experience",
      domains: [
        {
          icon: Brain,
          title: "Machine Learning Fundamentals",
          projects: ["Regression Models", "Classification Algorithms", "Feature Engineering"],
          skills: ["Python", "Scikit-learn", "Pandas", "NumPy"]
        },
        {
          icon: Database,
          title: "Data Science Essentials",
          projects: ["Data Analysis Dashboard", "Statistical Modeling", "Data Visualization"],
          skills: ["SQL", "Python", "Matplotlib", "Seaborn"]
        }
      ]
    },
    "2-month": {
      title: "2-Month Professional Track",
      price: "$3,499",
      description: "Comprehensive program for serious career transition into AI",
      domains: [
        {
          icon: Brain,
          title: "Advanced Machine Learning",
          projects: ["End-to-end ML Pipeline", "Model Deployment", "A/B Testing"],
          skills: ["TensorFlow", "PyTorch", "MLflow", "Docker"]
        },
        {
          icon: Code,
          title: "Deep Learning Specialization",
          projects: ["Neural Networks", "Computer Vision", "NLP Applications"],
          skills: ["TensorFlow", "Keras", "OpenCV", "Transformers"]
        },
        {
          icon: BarChart3,
          title: "Business Intelligence",
          projects: ["Predictive Analytics", "Business Metrics", "KPI Dashboards"],
          skills: ["Power BI", "Tableau", "Python", "R"]
        }
      ]
    },
    "4-month": {
      title: "4-Month Expert Certification",
      price: "$5,999",
      description: "Industry-ready program with guaranteed job placement assistance",
      domains: [
        {
          icon: Brain,
          title: "Machine Learning Engineering",
          projects: ["Production ML Systems", "MLOps Pipeline", "Model Monitoring"],
          skills: ["Kubernetes", "AWS/GCP", "Jenkins", "Terraform"]
        },
        {
          icon: Code,
          title: "Large Language Models",
          projects: ["LLM Fine-tuning", "RAG Systems", "Chatbot Development"],
          skills: ["Transformers", "LangChain", "Vector DBs", "OpenAI API"]
        },
        {
          icon: Database,
          title: "Advanced Data Engineering",
          projects: ["Data Pipelines", "Real-time Analytics", "Big Data Processing"],
          skills: ["Apache Spark", "Kafka", "Airflow", "Snowflake"]
        },
        {
          icon: BarChart3,
          title: "AI Product Management",
          projects: ["AI Strategy", "Product Roadmap", "Stakeholder Management"],
          skills: ["Product Strategy", "Analytics", "Leadership", "Communication"]
        }
      ]
    }
  };

  const benefits = [
    {
      icon: Award,
      title: "Industry Certification",
      description: "Receive recognized certificates upon completion"
    },
    {
      icon: Briefcase,
      title: "Job Placement Support",
      description: "Career guidance and interview preparation"
    },
    {
      icon: Users,
      title: "Mentorship Program",
      description: "1-on-1 guidance from industry experts"
    },
    {
      icon: TrendingUp,
      title: "Real Projects",
      description: "Work on actual industry problems and datasets"
    }
  ];

  const currentProgram = internshipPrograms[selectedDuration as keyof typeof internshipPrograms];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <Link to="/" className="inline-flex items-center text-primary hover:underline mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>

        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">AI Internship Programs</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Launch your AI career with our comprehensive paid internship programs. 
              Gain real-world experience in Machine Learning, Deep Learning, LLMs, and Data Science.
            </p>
          </div>

          {/* Duration Selection */}
          <div className="flex justify-center mb-8">
            <Tabs value={selectedDuration} onValueChange={setSelectedDuration} className="w-full max-w-2xl">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="1-month" className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>1 Month</span>
                </TabsTrigger>
                <TabsTrigger value="2-month" className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>2 Months</span>
                </TabsTrigger>
                <TabsTrigger value="4-month" className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>4 Months</span>
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          {/* Program Overview */}
          <Card className="mb-8">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl">{currentProgram.title}</CardTitle>
              <CardDescription className="text-lg">{currentProgram.description}</CardDescription>
              <div className="flex items-center justify-center space-x-6 mt-4">
                <div className="flex items-center space-x-2">
                  <DollarSign className="w-5 h-5 text-primary" />
                  <span className="text-2xl font-bold">{currentProgram.price}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span className="font-medium">{selectedDuration.replace('-', ' ').toUpperCase()}</span>
                </div>
              </div>
            </CardHeader>
          </Card>

          {/* Domain Tracks */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {currentProgram.domains.map((domain, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <domain.icon className="w-6 h-6 text-primary" />
                    <span>{domain.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Key Projects:</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                        {domain.projects.map((project, idx) => (
                          <li key={idx}>{project}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {domain.skills.map((skill, idx) => (
                          <Badge key={idx} variant="secondary">{skill}</Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Benefits */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-8">Program Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="text-center hover:shadow-md transition-shadow">
                  <CardContent className="pt-6">
                    <benefit.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Application Process */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-center">Application Process</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                    1
                  </div>
                  <h4 className="font-semibold mb-2">Apply Online</h4>
                  <p className="text-sm text-muted-foreground">Submit your application with academic details</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                    2
                  </div>
                  <h4 className="font-semibold mb-2">Technical Assessment</h4>
                  <p className="text-sm text-muted-foreground">Complete a skills evaluation test</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                    3
                  </div>
                  <h4 className="font-semibold mb-2">Interview</h4>
                  <p className="text-sm text-muted-foreground">Virtual interview with our team</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                    4
                  </div>
                  <h4 className="font-semibold mb-2">Start Learning</h4>
                  <p className="text-sm text-muted-foreground">Begin your AI journey with us</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA */}
          <div className="text-center">
            <Link to="/enrollment">
              <Button size="lg" className="mr-4">
                Apply Now
              </Button>
            </Link>
            <Link to="/get-started">
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Internships;