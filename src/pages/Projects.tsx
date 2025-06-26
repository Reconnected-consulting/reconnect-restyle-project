
import { ArrowLeft, Calendar, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Smart City Infrastructure",
      description: "IoT-enabled infrastructure monitoring system for urban development",
      status: "Completed",
      duration: "6 months",
      location: "Auckland, New Zealand",
      team: 8,
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
      highlights: [
        "Reduced maintenance costs by 40%",
        "Real-time monitoring of 500+ sensors",
        "Improved response time by 60%"
      ]
    },
    {
      id: 2,
      title: "Agricultural Drone Mapping",
      description: "Precision agriculture solution using drone technology for crop monitoring",
      status: "In Progress",
      duration: "4 months",
      location: "Canterbury, New Zealand",
      team: 5,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
      highlights: [
        "Coverage of 10,000+ hectares",
        "95% accuracy in crop health detection",
        "30% increase in yield prediction"
      ]
    },
    {
      id: 3,
      title: "3D Architectural Visualization",
      description: "Immersive 3D modeling and virtual reality tours for real estate",
      status: "Completed",
      duration: "3 months",
      location: "Wellington, New Zealand",
      team: 6,
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
      highlights: [
        "50+ properties visualized",
        "Reduced sales cycle by 25%",
        "Enhanced customer engagement"
      ]
    },
    {
      id: 4,
      title: "Digital Transformation Initiative",
      description: "Complete digital overhaul for manufacturing company",
      status: "Planning",
      duration: "12 months",
      location: "Hamilton, New Zealand",
      team: 12,
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
      highlights: [
        "Enterprise-wide system integration",
        "Custom workflow automation",
        "Staff training and support"
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-600";
      case "In Progress":
        return "bg-blue-100 text-blue-600";
      case "Planning":
        return "bg-yellow-100 text-yellow-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/30dd62ac-51c2-4f6c-ba98-3c576199de8c.png" 
                alt="Reconnected Logo" 
                className="h-10 w-auto object-contain"
              />
              <span className="text-2xl font-bold text-gray-900">Reconnected</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/" className="flex items-center text-gray-700 hover:text-blue-600 transition-colors">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Link>
              <Link to="/contact">
                <Button className="bg-blue-600 hover:bg-blue-700">Connect</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the innovative projects we've delivered across New Zealand, from smart city solutions to precision agriculture and digital transformation.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-2xl font-bold text-gray-900">{project.title}</CardTitle>
                    <span className={`px-3 py-1 text-sm rounded-full ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                  </div>
                  <CardDescription className="text-gray-600 text-lg">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span className="text-sm">{project.duration}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span className="text-sm">{project.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Users className="h-4 w-4 mr-2" />
                      <span className="text-sm">{project.team} team</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Key Highlights:</h4>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-start text-gray-600">
                          <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Let's Create Something Amazing</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Ready to embark on your next project? Let's discuss how we can help you achieve your goals with our innovative solutions.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 text-lg px-8 py-4 rounded-full">
              Start Your Project
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Projects;
