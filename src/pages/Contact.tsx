
import { MapPin, Phone, Mail, Clock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/30dd62ac-51c2-4f6c-ba98-3c576199de8c.png" 
                alt="Reconnected Logo" 
                className="h-10 w-auto object-contain"
              />
              <span className="text-2xl font-bold text-gray-900">Reconnected</span>
            </Link>
            <Link to="/" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors">
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Contact Header */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Get in Touch</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to start your digital transformation journey? We'd love to hear from you and discuss how we can help bring your vision to life.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900">Contact Information</CardTitle>
                  <CardDescription className="text-lg text-gray-600">
                    Reach out to us through any of these channels
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Location</h3>
                      <p className="text-gray-600">35 Queen Street</p>
                      <p className="text-gray-600">Waimate, Canterbury, New Zealand</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
                      <p className="text-gray-600">+64 022 3200988</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                      <p className="text-gray-600">reconnectedit@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Business Hours</h3>
                      <p className="text-gray-600">Monday - Friday: 9:00 AM - 5:00 PM</p>
                      <p className="text-gray-600">Weekend consultations available</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Enhanced Map Section */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900">Visit Us in Waimate</CardTitle>
                  <CardDescription>
                    Located in the heart of Canterbury's beautiful South Island
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video bg-gradient-to-br from-blue-50 to-green-50 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-200">
                    <div className="text-center text-gray-600 p-8">
                      <MapPin className="h-16 w-16 mx-auto mb-4 text-blue-500" />
                      <h3 className="text-xl font-semibold mb-2 text-gray-800">35 Queen Street</h3>
                      <p className="text-lg mb-1">Waimate, Canterbury</p>
                      <p className="text-lg mb-4">New Zealand</p>
                      <p className="text-sm text-gray-500">Interactive map integration available</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900">Schedule a Consultation</CardTitle>
                  <CardDescription className="text-lg text-gray-600">
                    Tell us about your project and we'll get back to you within 24 hours
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="John" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Doe" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="john@example.com" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" placeholder="+64 21 XXX XXXX" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="service">Service Interest</Label>
                      <select 
                        id="service" 
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      >
                        <option value="">Select a service</option>
                        <option value="web-development">Web Development</option>
                        <option value="digital-transformation">Digital Transformation</option>
                        <option value="drone-services">Drone Services</option>
                        <option value="3d-solutions">3D Solutions</option>
                        <option value="security-solutions">Security Solutions</option>
                        <option value="consultation">General Consultation</option>
                      </select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Project Details</Label>
                      <textarea 
                        id="message" 
                        rows={4}
                        className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        placeholder="Tell us about your project, timeline, and any specific requirements..."
                      />
                    </div>
                    
                    <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-6">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
