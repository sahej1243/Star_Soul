import React from "react";
import { useNavigate } from "react-router-dom";
import { Avatar } from "../../components/ui/avatar";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Separator } from "../../components/ui/separator";

export const LandingPage = (): JSX.Element => {
  const navigate = useNavigate();

  // Scroll to Space Facts section
  const scrollToSpaceFacts = () => {
    const spaceFactsSection = document.getElementById('space-facts-section');
    if (spaceFactsSection) {
      spaceFactsSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Navigate to Star Date page
  const navigateToStarDate = () => {
    navigate('/star-date');
  };

  // Navigate to Space Chat page
  const navigateToSpaceChat = () => {
    navigate('/space-chat');
  };

  // Testimonial data
  const testimonials = [
    {
      quote: "A terrific piece of praise",
      avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
      name: "Alex Johnson",
      description: "Space Enthusiast",
    },
    {
      quote: "A fantastic bit of feedback",
      avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
      name: "Sarah Chen",
      description: "Astronomer",
    },
    {
      quote: "A genuinely glowing review",
      avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
      name: "Marcus Rivera",
      description: "Astrophysicist",
    },
  ];

  // Footer navigation data
  const footerNavigation = [
    {
      topic: "Explore",
      pages: ["Space Facts", "Galaxies", "Planets"],
    },
    {
      topic: "Learn",
      pages: ["Courses", "Articles", "Videos"],
    },
    {
      topic: "Connect",
      pages: ["Community", "Events", "Newsletter"],
    },
  ];

  // Navigation items
  const navItems = [
    { label: "Space Facts", href: "#", onClick: scrollToSpaceFacts },
    { label: "Meet Comet", href: "#", onClick: navigateToSpaceChat },
    { label: "Star Date", href: "#", onClick: navigateToStarDate },
  ];

  // Content sections
  const contentSections = [
    {
      title: "Cosmic Wonders",
      description:
        "Discover the breathtaking beauty and mysteries of our universe through stunning visuals and expert insights.",
    },
    {
      title: "Stellar Journey",
      description:
        "Embark on an incredible voyage through space and time, exploring distant worlds and cosmic phenomena.",
    },
    {
      title: "Universal Knowledge",
      description:
        "Expand your understanding of the cosmos with fascinating facts, theories, and the latest astronomical discoveries.",
    },
  ];

  // Image sections
  const imageSections = [
    {
      image: "https://images.pexels.com/photos/2150/sky-space-dark-galaxy.jpg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      title: "Deep Space Exploration",
      description:
        "Journey into the depths of space and discover the wonders that await beyond our solar system.",
    },
    {
      image: "https://images.pexels.com/photos/87651/earth-blue-planet-globe-planet-87651.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      title: "Planetary Sciences",
      description:
        "Study the formation, evolution, and characteristics of planets throughout our universe.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-x-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-2 h-2 bg-white rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-40 left-1/4 w-1 h-1 bg-blue-300 rounded-full animate-pulse opacity-40"></div>
        <div className="absolute top-60 right-1/3 w-1.5 h-1.5 bg-purple-300 rounded-full animate-pulse opacity-50"></div>
        <div className="absolute bottom-40 left-20 w-1 h-1 bg-white rounded-full animate-pulse opacity-30"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8">
        {/* Navigation */}
        <nav className="flex justify-center pt-12 pb-8">
          <div className="flex space-x-4 backdrop-blur-xl bg-white/10 rounded-full p-3 border border-white/20 shadow-2xl">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={(e) => {
                  if (item.onClick) {
                    e.preventDefault();
                    item.onClick();
                  }
                }}
                className="px-8 py-4 rounded-full text-white/90 hover:text-white hover:bg-white/20 transition-all duration-300 font-medium backdrop-blur-sm border border-transparent hover:border-white/30 hover:shadow-lg cursor-pointer"
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>

        {/* Hero Section */}
        <section className="text-center py-32 px-8">
          <div className="relative">
            {/* Comet decoration */}
            <div className="absolute top-0 right-10 w-16 h-16 opacity-80">
              <div className="w-8 h-8 bg-gradient-to-r from-orange-400 to-yellow-300 rounded-full animate-pulse"></div>
              <div className="absolute top-2 left-8 w-12 h-1 bg-gradient-to-r from-orange-400/60 to-transparent rounded-full"></div>
              <div className="absolute top-4 left-10 w-8 h-0.5 bg-gradient-to-r from-yellow-300/40 to-transparent rounded-full"></div>
            </div>

            <h1 className="text-9xl font-bold mb-12 bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-500 bg-clip-text text-transparent drop-shadow-2xl tracking-wider">
              STARSOUL
            </h1>
            <p className="text-4xl text-white/90 font-light mb-16 backdrop-blur-sm">
              A Date With the Universe
            </p>
            
            <div className="flex justify-center space-x-8">
              <Button className="px-12 py-6 bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-semibold rounded-full shadow-2xl backdrop-blur-sm border border-orange-400/30 transition-all duration-300 hover:scale-105 text-lg">
                Explore the Cosmos
              </Button>
              <Button 
                variant="outline" 
                className="px-12 py-6 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full backdrop-blur-xl border border-white/30 hover:border-white/50 transition-all duration-300 hover:scale-105 text-lg"
              >
                Learn More
              </Button>
            </div>
          </div>
        </section>

        {/* Space Facts Section */}
        <section id="space-facts-section" className="py-32 px-8">
          <div className="text-center mb-24">
            <h2 className="text-7xl font-bold bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent mb-8">
              Space-Related Facts
            </h2>
            <div className="w-40 h-2 bg-gradient-to-r from-orange-400 to-yellow-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-12 mb-24">
            {contentSections.map((section, index) => (
              <div
                key={index}
                className="backdrop-blur-xl bg-white/10 rounded-[3rem] p-12 border border-white/20 shadow-2xl hover:bg-white/15 transition-all duration-300 hover:scale-105"
              >
                <h3 className="text-3xl font-semibold text-white mb-6">
                  {section.title}
                </h3>
                <p className="text-white/80 leading-relaxed text-lg">
                  {section.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Content Section with Image */}
        <section className="py-32 px-8">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="text-6xl font-bold text-white mb-12">
                Discover the Universe
              </h2>
              <div className="space-y-12">
                {contentSections.map((section, index) => (
                  <div key={index} className="space-y-4">
                    <h3 className="text-3xl font-semibold text-white">
                      {section.title}
                    </h3>
                    <p className="text-white/70 text-xl leading-relaxed">
                      {section.description}
                    </p>
                  </div>
                ))}
              </div>
              <div className="flex space-x-8 mt-16">
                <Button className="px-12 py-6 bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-semibold rounded-full shadow-2xl transition-all duration-300 hover:scale-105 text-lg">
                  Get Started
                </Button>
                <Button 
                  variant="outline" 
                  className="px-12 py-6 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full backdrop-blur-xl border border-white/30 hover:border-white/50 transition-all duration-300 hover:scale-105 text-lg"
                >
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 to-yellow-400/20 rounded-[3rem] blur-3xl"></div>
              <img
                src="https://images.pexels.com/photos/2150/sky-space-dark-galaxy.jpg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Deep space galaxy"
                className="relative z-10 w-full h-[600px] object-cover rounded-[3rem] shadow-2xl"
              />
            </div>
          </div>
        </section>

        {/* Two Column Image Section */}
        <section className="py-32 px-8">
          <div className="text-center mb-24">
            <h2 className="text-6xl font-bold text-white mb-8">
              Explore the Cosmos
            </h2>
            <div className="w-40 h-2 bg-gradient-to-r from-orange-400 to-yellow-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {imageSections.map((section, index) => (
              <div
                key={index}
                className="backdrop-blur-xl bg-white/10 rounded-[3rem] overflow-hidden border border-white/20 shadow-2xl hover:bg-white/15 transition-all duration-300 hover:scale-105"
              >
                <img
                  src={section.image}
                  alt={section.title}
                  className="w-full h-80 object-cover"
                />
                <div className="p-12">
                  <h3 className="text-3xl font-semibold text-white mb-6">
                    {section.title}
                  </h3>
                  <p className="text-white/80 leading-relaxed text-lg">
                    {section.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-32 px-8">
          <div className="text-center mb-24">
            <h2 className="text-6xl font-bold text-white mb-8">
              What Explorers Say
            </h2>
            <div className="w-40 h-2 bg-gradient-to-r from-orange-400 to-yellow-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl hover:bg-white/15 transition-all duration-300 hover:scale-105 rounded-[3rem]"
              >
                <CardContent className="p-12">
                  <p className="text-white/90 text-xl mb-12 italic leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center space-x-6">
                    <Avatar className="w-16 h-16 border-2 border-orange-400/50 rounded-full">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-full h-full object-cover rounded-full"
                      />
                    </Avatar>
                    <div>
                      <div className="text-white font-semibold text-lg">
                        {testimonial.name}
                      </div>
                      <div className="text-white/70">
                        {testimonial.description}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 px-8">
          <div className="text-center backdrop-blur-xl bg-white/10 rounded-[4rem] p-20 border border-white/20 shadow-2xl">
            <h2 className="text-6xl font-bold text-white mb-8">
              Ready to Explore?
            </h2>
            <p className="text-2xl text-white/80 mb-16 max-w-3xl mx-auto leading-relaxed">
              Join thousands of space enthusiasts on an incredible journey through the cosmos. Discover, learn, and be amazed.
            </p>
            <div className="flex justify-center space-x-8">
              <Button className="px-16 py-8 bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-semibold rounded-full shadow-2xl text-xl transition-all duration-300 hover:scale-105">
                Start Your Journey
              </Button>
              <Button 
                variant="outline" 
                className="px-16 py-8 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full backdrop-blur-xl border border-white/30 hover:border-white/50 text-xl transition-all duration-300 hover:scale-105"
              >
                Learn More
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-24 px-8 border-t border-white/20">
          <div className="grid lg:grid-cols-4 gap-16 mb-16">
            <div>
              <h3 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent mb-6">
                STARSOUL
              </h3>
              <p className="text-white/70 leading-relaxed text-lg">
                Your gateway to the wonders of the universe. Explore, learn, and discover the cosmos like never before.
              </p>
            </div>
            
            {footerNavigation.map((section, index) => (
              <div key={index}>
                <h4 className="text-white font-semibold mb-6 text-xl">
                  {section.topic}
                </h4>
                <ul className="space-y-4">
                  {section.pages.map((page, pageIndex) => (
                    <li key={pageIndex}>
                      <a 
                        href="#" 
                        className="text-white/70 hover:text-white transition-colors duration-300 text-lg"
                      >
                        {page}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <Separator className="bg-white/20 mb-12" />
          
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 mb-6 md:mb-0 text-lg">
              © 2024 STARSOUL. All rights reserved.
            </p>
            <div className="flex space-x-8">
              <a href="#" className="text-white/60 hover:text-white transition-colors duration-300 text-lg">
                Privacy Policy
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors duration-300 text-lg">
                Terms of Service
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors duration-300 text-lg">
                Contact
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};