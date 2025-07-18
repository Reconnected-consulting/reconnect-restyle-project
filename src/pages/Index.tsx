
import { ArrowRight, Users, Globe, Shield, Zap, Camera, Box, Brain, Printer, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { Link } from "react-router-dom";

const Index = () => {
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
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center justify-end space-x-8 flex-1">
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</a>
              <Link to="/portfolio" className="text-gray-700 hover:text-blue-600 transition-colors">Portfolio</Link>
              <Link to="/projects" className="text-gray-700 hover:text-blue-600 transition-colors">Projects</Link>
           
              <Link to="/contact">
                <Button className="bg-blue-600 hover:bg-blue-700">Connect</Button>
              </Link>
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden">
              <Drawer>
                <DrawerTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                  </Button>
                </DrawerTrigger>
                <DrawerContent>
                  <div className="flex flex-col space-y-6 p-6">
                    <a href="#services" className="text-lg text-gray-700 hover:text-blue-600 transition-colors">Services</a>
                    <Link to="/portfolio" className="text-lg text-gray-700 hover:text-blue-600 transition-colors">Portfolio</Link>
                    <Link to="/projects" className="text-lg text-gray-700 hover:text-blue-600 transition-colors">Projects</Link>
                    <Link to="/contact">
                      <Button className="bg-blue-600 hover:bg-blue-700 w-full">Connect</Button>
                    </Link>
                  </div>
                </DrawerContent>
              </Drawer>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Fern leaf background - flipped upside down and moved down 100px */}
        <img 
          src="/lovable-uploads/11f46d2a-3b98-4dd2-bbc1-822a3d377dd2.png" 
          alt="Fern leaf decoration" 
          className="absolute w-1/2 h-1/2 object-contain opacity-20 z-0"
          style={{ 
            transform: 'translate(-50%, -50%) scaleY(-1)', 
            left: '50%', 
            top: 'calc(50% + 100px)' 
          }}
        />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              Reconnect Your
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Digital World</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              We bridge the gap and save you time
            </p>
            <div className="flex flex-col items-center space-y-4">
              <div className="relative">
                {/* Central logo */}
                <img 
                  src="/lovable-uploads/30dd62ac-51c2-4f6c-ba98-3c576199de8c.png" 
                  alt="Reconnected Logo" 
                  className="h-[200px] w-auto object-contain relative z-10"
                />
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link to="/contact">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all">
                    Start Your Journey
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 relative">
        {/* Background New Zealand map for services section - positioned behind cards */}
        <img 
          src="/lovable-uploads/af5ac09f-b564-4f0e-9402-65b69aaf6f60.png" 
          alt="New Zealand Map Background" 
          className="absolute inset-0 w-[900px] h-[900px] object-contain opacity-5 z-0"
          style={{ transform: 'translate(-50%, -50%)', left: '50%', top: '50%' }}
        />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions designed to reconnect your business with its digital potential
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">Digital Transformation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-lg leading-relaxed">
                  Transform your business processes with cutting-edge digital solutions that enhance productivity and connectivity.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                  <Globe className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">Web Development</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-lg leading-relaxed">
                  Create stunning, responsive websites that connect your brand with your audience across all devices.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                  <Shield className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">Security Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-lg leading-relaxed">
                  Protect your digital assets with comprehensive security measures that ensure safe connections.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Drone & 3D Services Section */}
      <section id="specialties" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Specialized Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cutting-edge drone technology, 3D solutions, AI integration, and advanced manufacturing that push the boundaries of what's possible
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Drone Services */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                    <Camera className="h-6 w-6 text-orange-600" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900">Drone Services</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-lg leading-relaxed mb-6">
                  Professional aerial photography, videography, and surveying services using state-of-the-art drone technology for stunning perspectives and precise data collection.
                </CardDescription>
                <div className="aspect-video rounded-lg overflow-hidden bg-gradient-to-br from-green-50 to-cyan-50 flex items-center justify-center">
                  <img 
                    src="/lovable-uploads/76a36c86-88cf-464a-a3e1-62d938b4ef48.png" 
                    alt="Professional drone" 
                    className="h-64 w-auto object-contain"
                  />
                </div>
              </CardContent>
            </Card>

            {/* 3D Solutions */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center group-hover:bg-cyan-200 transition-colors">
                    <Box className="h-6 w-6 text-cyan-600" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900">3D Solutions</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-lg leading-relaxed mb-6">
                  Advanced 3D modeling, rendering, and visualization services that bring your ideas to life with photorealistic quality and immersive experiences.
                </CardDescription>
                <div className="aspect-video rounded-lg overflow-hidden bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center">
                  <img 
                    src="/lovable-uploads/e0efa479-b242-45ad-a3f1-c1fa4cf12db9.png" 
                    alt="3D wireframe modeling example" 
                    className="h-32 w-auto object-contain"
                  />
                </div>
              </CardContent>
            </Card>

            {/* AI Integration */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                    <Brain className="h-6 w-6 text-purple-600" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900">AI Integration</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-lg leading-relaxed mb-6">
                  Intelligent automation and machine learning solutions that enhance your business processes with predictive analytics and smart decision-making capabilities.
                </CardDescription>
                <div className="aspect-video rounded-lg overflow-hidden bg-gradient-to-br from-purple-50 to-blue-50 flex items-center justify-center">
                  <img 
                    src="/lovable-uploads/8326aaaf-9b8f-4701-85be-a15b8830e6d0.png" 
                    alt="AI-powered kiwi bird illustration" 
                    className="h-48 w-auto object-contain"
                  />
                </div>
              </CardContent>
            </Card>

            {/* 3D Printing */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-200 transition-colors">
                    <Printer className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900">3D Printing</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-lg leading-relaxed mb-6">
                  Rapid prototyping and custom manufacturing services using advanced 3D printing technology for precise, cost-effective production of complex designs.
                </CardDescription>
                <div className="aspect-video rounded-lg overflow-hidden bg-gradient-to-br from-green-50 to-cyan-50 flex items-center justify-center">
                  <img 
                    src="/lovable-uploads/9126ed57-f451-479d-a3c4-b2e6bda5c6f5.png" 
                    alt="3D printed kiwi bird model" 
                    className="h-48 w-auto object-contain"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 relative overflow-hidden">
        {/* Logo Watermark */}
        <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
          <img 
            src="/lovable-uploads/30dd62ac-51c2-4f6c-ba98-3c576199de8c.png" 
            alt="Reconnected Logo Watermark" 
            className="w-[1152px] h-[1152px] object-contain"
          />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                Reconnecting Business with Innovation
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                At Reconnected, we believe that technology should bring people closer together, not drive them apart. Our team of experts specializes in creating digital solutions that foster genuine connections through innovative drone technology and immersive 3D experiences.
              </p>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Zap className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovation First</h3>
                    <p className="text-gray-600">We stay ahead of technology trends to deliver cutting-edge solutions including drone and 3D technologies.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Users className="h-4 w-4 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Human-Centered Design</h3>
                    <p className="text-gray-600">Every solution is designed with the end user in mind, creating meaningful connections through technology.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative flex items-center justify-center">
              <div className="w-full h-96 bg-gradient-to-br from-blue-400 to-purple-600 rounded-2xl shadow-2xl"></div>
              <img 
                src="/lovable-uploads/e20542f0-a8d1-4563-b85d-a81c2de4146c.png" 
                alt="Global Innovation Network" 
                className="absolute w-full max-w-md h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to Reconnect?</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Let's discuss how we can help transform your digital presence and create meaningful connections with your audience through our comprehensive services including drone and 3D solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 text-lg px-8 py-4 rounded-full">
                Schedule a Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-8">
            <img 
              src="/lovable-uploads/30dd62ac-51c2-4f6c-ba98-3c576199de8c.png" 
              alt="Reconnected Logo" 
              className="h-8 w-auto object-contain"
            />
            <span className="text-2xl font-bold">Reconnected</span>
          </div>
          <p className="text-gray-400 mb-8">
            Bridging the gap between technology and human connection through innovation.
          </p>
          <div className="border-t border-gray-700 pt-8">
            <p className="text-gray-500">
              © 2024 Reconnected. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
