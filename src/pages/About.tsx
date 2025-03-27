
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Newsletter from '../components/Newsletter';
import Contact from '../components/Contact';
import Timeline from '../components/Timeline';
import Chatbot from '../components/Chatbot';
import { motion } from 'framer-motion';

const AboutPage = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-16 bg-detelina-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-3 py-1 mb-4 bg-primary/10 text-primary text-sm font-medium rounded-full">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-playfair">
              Our Eastern European Heritage
            </h1>
            <p className="text-lg text-gray-700">
              Detelina Dairy brings traditional Eastern European fermented dairy products to Cyprus, combining authentic recipes with modern production methods.
            </p>
          </div>
        </div>
      </section>
      
      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-3 py-1 mb-4 bg-primary/10 text-primary text-sm font-medium rounded-full">
                Our Story
              </span>
              <h2 className="text-3xl font-bold mb-6 font-playfair">
                From Eastern Europe to Cyprus
              </h2>
              <p className="text-gray-700 mb-6">
                Detelina Dairy was established in 2005 by a group of Eastern European dairy experts who recognized a need for authentic fermented dairy products in Cyprus. What began as a small operation has grown into a beloved brand known for quality and tradition.
              </p>
              <p className="text-gray-700 mb-6">
                Our founders brought with them generations of knowledge in dairy fermentation and a passion for the distinctive tastes of their homelands. Today, we continue to honor these traditions while embracing modern production standards.
              </p>
              <p className="text-gray-700">
                The name "Detelina" means "clover" in Bulgarian, symbolizing good fortune and our commitment to bringing the good fortune of health through natural dairy products to all our customers.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
              className="rounded-xl overflow-hidden shadow-lg"
            >
              <img 
                src="/lovable-uploads/f83402e5-1e4f-4ac9-839d-9ef501da7c9f.png" 
                alt="Detelina Dairy Factory" 
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Timeline */}
      <Timeline />
      
      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block px-3 py-1 mb-4 bg-primary/10 text-primary text-sm font-medium rounded-full">
              Our Mission
            </span>
            <h2 className="text-3xl font-bold mb-6 font-playfair">
              Quality & Tradition in Every Product
            </h2>
            <p className="text-lg text-gray-700">
              We are dedicated to preserving Eastern European dairy traditions while providing Cyprus with nutritious, delicious products that contribute to a healthy lifestyle.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 font-playfair">Quality First</h3>
              <p className="text-gray-600">
                We use only the finest ingredients and maintain strict quality control throughout our production process to ensure every product meets our high standards.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 font-playfair">Authentic Recipes</h3>
              <p className="text-gray-600">
                Our products follow traditional Eastern European recipes, using natural fermentation methods that have been perfected over generations.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 font-playfair">Health Focused</h3>
              <p className="text-gray-600">
                We believe in the natural health benefits of fermented dairy and are committed to providing products that contribute to our customers' wellbeing.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block px-3 py-1 mb-4 bg-primary/10 text-primary text-sm font-medium rounded-full">
              Our Team
            </span>
            <h2 className="text-3xl font-bold mb-6 font-playfair">
              The People Behind Detelina
            </h2>
            <p className="text-lg text-gray-700">
              Our dedicated team combines Eastern European dairy expertise with Cypriot hospitality to bring you the best of both worlds.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all">
              <div className="aspect-w-1 aspect-h-1">
                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" alt="CEO" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1 font-playfair">Nikolai Petrov</h3>
                <p className="text-primary font-medium mb-4">Founder & CEO</p>
                <p className="text-gray-600">
                  With over 30 years of experience in dairy production, Nikolai brought his passion for Eastern European dairy traditions to Cyprus.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all">
              <div className="aspect-w-1 aspect-h-1">
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" alt="Chief Production Officer" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1 font-playfair">Elena Dimitrova</h3>
                <p className="text-primary font-medium mb-4">Chief Production Officer</p>
                <p className="text-gray-600">
                  Elena oversees our production processes, ensuring that every batch meets our high standards for quality and authenticity.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all">
              <div className="aspect-w-1 aspect-h-1">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" alt="Head of Research" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1 font-playfair">Andreas Georgiou</h3>
                <p className="text-primary font-medium mb-4">Head of Research & Development</p>
                <p className="text-gray-600">
                  Andreas leads our innovation efforts, developing new products that blend traditional methods with modern nutritional science.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Newsletter />
      <Contact />
      <Footer />
      <Chatbot />
    </div>
  );
};

export default AboutPage;
