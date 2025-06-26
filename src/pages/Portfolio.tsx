
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const portfolioItems = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Modern e-commerce solution with React and Node.js",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "Digital Marketing Dashboard",
      description: "Analytics dashboard for marketing campaigns",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
      technologies: ["React", "TypeScript", "Chart.js", "Firebase"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "Corporate Website Redesign",
      description: "Complete redesign and development of corporate website",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop",
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 4,
      title: "Drone Survey Application",
      description: "Web application for managing drone survey data",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
      technologies: ["React", "MapBox", "Python", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

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
            Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Portfolio</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our collection of successful projects that showcase our expertise in web development, digital transformation, and innovative solutions.
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item) => (
              <Card key={item.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-bold text-gray-900">{item.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {item.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {item.technologies.map((tech, index) => (
                        <span key={index} className="px-2 py-1 bg-blue-100 text-blue-600 text-sm rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" className="flex-1">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
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
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to Start Your Project?</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Let's discuss how we can bring your vision to life with our proven expertise and innovative approach.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 text-lg px-8 py-4 rounded-full">
              Get Started Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
