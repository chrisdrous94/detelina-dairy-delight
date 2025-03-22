
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Newsletter from '../components/Newsletter';

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
              Our Story
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-playfair">
              About Detelina Dairy
            </h1>
            <p className="text-lg text-gray-700">
              Bringing authentic Eastern European dairy traditions to Cyprus with passion and expertise.
            </p>
          </div>
        </div>
      </section>
      
      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 font-playfair">
                Our Journey
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Founded in 2007, Detelina Dairy began with a simple mission: to bring the unique flavors and health benefits of Eastern European fermented dairy products to Cyprus.
                </p>
                <p>
                  Our founder, who grew up enjoying these traditional dairy products, noticed they were missing from the local market. Drawing on family recipes and expertise from master dairy craftsmen, Detelina Dairy was born.
                </p>
                <p>
                  Starting with a small production facility in Limassol, we began crafting authentic Kefir, Ryazhenka, Smetana and Tvorog. The response was immediate—both Eastern European expats and local Cypriots appreciated the unique flavors and health benefits of our products.
                </p>
                <p>
                  Over the years, we've grown steadily, adding new products to our range while maintaining our commitment to traditional methods and quality. Today, Detelina Dairy products can be found in stores across Cyprus, but we remain true to our small-batch production philosophy.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="/lovable-uploads/313fea23-3c0a-4bed-8169-f67c5deb519e.png" 
                  alt="Detelina Dairy Products" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="inline-block px-3 py-1 mb-4 bg-primary/10 text-primary text-sm font-medium rounded-full">
              Our Values
            </span>
            <h2 className="text-3xl font-bold mb-4 font-playfair">
              What Drives Us
            </h2>
            <p className="text-gray-600">
              At Detelina Dairy, our core values guide everything we do, from production to customer service.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 font-playfair">
                Authenticity
              </h3>
              <p className="text-gray-600">
                We remain true to traditional Eastern European recipes and methods, never compromising on the authentic taste and quality of our products.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 font-playfair">
                Quality
              </h3>
              <p className="text-gray-600">
                We source the finest ingredients and maintain strict quality control throughout our production process to ensure exceptional products.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 font-playfair">
                Innovation
              </h3>
              <p className="text-gray-600">
                While respecting tradition, we continuously innovate to improve our products and develop new offerings that meet modern consumer needs.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Production Process */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="inline-block px-3 py-1 mb-4 bg-primary/10 text-primary text-sm font-medium rounded-full">
              Our Process
            </span>
            <h2 className="text-3xl font-bold mb-4 font-playfair">
              How We Make Our Products
            </h2>
            <p className="text-gray-600">
              Our production process combines traditional methods with modern standards to create authentic, high-quality fermented dairy products.
            </p>
          </div>
          
          <div className="space-y-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="rounded-2xl overflow-hidden">
                <img 
                  src="/lovable-uploads/a4a5e8d1-3687-49fd-bc34-81ebb8b93409.png" 
                  alt="Fresh Milk" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                    1
                  </div>
                  <h3 className="text-xl font-bold ml-4 font-playfair">
                    Selecting the Finest Milk
                  </h3>
                </div>
                <p className="text-gray-700">
                  We start with fresh, high-quality milk from local Cyprus farms. The milk is carefully tested to ensure it meets our strict standards for purity, fat content, and overall quality.
                </p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                    2
                  </div>
                  <h3 className="text-xl font-bold ml-4 font-playfair">
                    Traditional Fermentation
                  </h3>
                </div>
                <p className="text-gray-700">
                  We use authentic fermentation cultures and follow traditional recipes passed down through generations. Each product has its own unique fermentation process, temperature, and duration to achieve the perfect flavor and texture.
                </p>
              </div>
              <div className="order-1 md:order-2 rounded-2xl overflow-hidden">
                <img 
                  src="/lovable-uploads/2a26b134-2724-4bd1-8093-788f23e215b0.png" 
                  alt="Fermentation Process" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="rounded-2xl overflow-hidden">
                <img 
                  src="/lovable-uploads/5de99ef6-bb87-44a5-8018-8a78cd7eaf0b.png" 
                  alt="Quality Control" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                    3
                  </div>
                  <h3 className="text-xl font-bold ml-4 font-playfair">
                    Quality Control
                  </h3>
                </div>
                <p className="text-gray-700">
                  Each batch is carefully monitored and tested throughout the production process. Our team of dairy specialists ensures that every product meets our high standards for taste, texture, and nutritional value before it leaves our facility.
                </p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                    4
                  </div>
                  <h3 className="text-xl font-bold ml-4 font-playfair">
                    Packaging and Distribution
                  </h3>
                </div>
                <p className="text-gray-700">
                  Our products are packaged in environmentally responsible containers that preserve freshness and flavor. We ensure prompt delivery to stores across Cyprus so our customers can enjoy the freshest possible products.
                </p>
              </div>
              <div className="order-1 md:order-2 rounded-2xl overflow-hidden">
                <img 
                  src="/lovable-uploads/de5ba587-3def-4d3e-bde0-015732774c70.png" 
                  alt="Packaging Process" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Team */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="inline-block px-3 py-1 mb-4 bg-primary/10 text-primary text-sm font-medium rounded-full">
              Our Team
            </span>
            <h2 className="text-3xl font-bold mb-4 font-playfair">
              Meet the People Behind Detelina
            </h2>
            <p className="text-gray-600">
              Our dedicated team combines Eastern European dairy expertise with Cyprus craftsmanship to create exceptional products.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl overflow-hidden shadow-sm">
              <div className="aspect-square bg-gray-200">
                {/* Placeholder for team member photo */}
                <div className="w-full h-full flex items-center justify-center bg-primary/10">
                  <svg className="w-16 h-16 text-primary/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1 font-playfair">
                  Elena Petrova
                </h3>
                <p className="text-primary mb-3">Founder & CEO</p>
                <p className="text-gray-600">
                  With 20+ years of experience in dairy production, Elena brought Eastern European traditions to Cyprus, founding Detelina Dairy in 2007.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-sm">
              <div className="aspect-square bg-gray-200">
                {/* Placeholder for team member photo */}
                <div className="w-full h-full flex items-center justify-center bg-primary/10">
                  <svg className="w-16 h-16 text-primary/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1 font-playfair">
                  Mikhail Ivanov
                </h3>
                <p className="text-primary mb-3">Master Dairy Specialist</p>
                <p className="text-gray-600">
                  Mikhail ensures our products maintain traditional taste and quality, overseeing our fermentation processes with expert precision.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-sm">
              <div className="aspect-square bg-gray-200">
                {/* Placeholder for team member photo */}
                <div className="w-full h-full flex items-center justify-center bg-primary/10">
                  <svg className="w-16 h-16 text-primary/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1 font-playfair">
                  Maria Andreou
                </h3>
                <p className="text-primary mb-3">Quality Control Manager</p>
                <p className="text-gray-600">
                  Maria leads our quality control team, ensuring every product that leaves our facility meets our high standards for taste and nutrition.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Newsletter */}
      <Newsletter />
      
      <Footer />
    </div>
  );
};

export default AboutPage;
