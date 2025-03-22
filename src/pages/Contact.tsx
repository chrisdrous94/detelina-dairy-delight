
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Contact from '../components/Contact';

const ContactPage = () => {
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
              Get in Touch
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-playfair">
              Contact Detelina Dairy
            </h1>
            <p className="text-lg text-gray-700">
              Have questions or feedback? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Form Section */}
      <Contact />
      
      {/* Wholesale Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-3 py-1 mb-4 bg-primary/10 text-primary text-sm font-medium rounded-full">
                  Wholesale
                </span>
                <h2 className="text-3xl font-bold mb-4 font-playfair">
                  Interested in Wholesale?
                </h2>
                <p className="text-gray-700 mb-6">
                  We offer wholesale services to restaurants, cafes, hotels, and retail stores across Cyprus. Contact us to learn about our wholesale pricing and delivery options.
                </p>
                <ul className="space-y-3 text-gray-700 mb-6">
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <span className="ml-3">Competitive wholesale pricing</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <span className="ml-3">Regular delivery schedules</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <span className="ml-3">Customized product selection</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <span className="ml-3">Bulk packaging options</span>
                  </li>
                </ul>
                <div>
                  <a 
                    href="mailto:wholesale@detelina-dairy.com" 
                    className="inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-full transition-all hover:bg-primary-dark"
                  >
                    Email Wholesale Department
                  </a>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="/lovable-uploads/313fea23-3c0a-4bed-8169-f67c5deb519e.png" 
                  alt="Wholesale Products" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map and Visit Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="inline-block px-3 py-1 mb-4 bg-primary/10 text-primary text-sm font-medium rounded-full">
              Visit Us
            </span>
            <h2 className="text-3xl font-bold mb-4 font-playfair">
              Factory Store
            </h2>
            <p className="text-gray-600">
              Visit our factory store to see our production process and purchase fresh products directly from the source.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl overflow-hidden shadow-md h-80">
              {/* Placeholder for Google Map */}
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <svg className="w-12 h-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-2 font-playfair">Store Hours</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 - 19:00</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Saturday</span>
                    <span>9:00 - 15:00</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-2 font-playfair">Address</h3>
                <p className="text-gray-700">
                  15 Agias Zonis<br />
                  Limassol 3027<br />
                  Cyprus
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-2 font-playfair">Phone</h3>
                <p className="text-gray-700">
                  +357 25 123 456
                </p>
              </div>
              
              <div>
                <a 
                  href="https://maps.google.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-full transition-all hover:bg-primary-dark"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="inline-block px-3 py-1 mb-4 bg-primary/10 text-primary text-sm font-medium rounded-full">
              FAQ
            </span>
            <h2 className="text-3xl font-bold mb-4 font-playfair">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600">
              Find answers to our most commonly asked questions.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold mb-2 font-playfair">
                Where can I purchase Detelina Dairy products?
              </h3>
              <p className="text-gray-600">
                Our products are available at select grocery stores and supermarkets across Cyprus, as well as directly from our factory store in Limassol. Visit our "Where to Buy" section for a complete list of locations.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold mb-2 font-playfair">
                How long do your products stay fresh?
              </h3>
              <p className="text-gray-600">
                Each product has its own shelf life, which is clearly marked on the packaging. Generally, our fermented dairy products stay fresh for 7-14 days when properly refrigerated at 2-4°C.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold mb-2 font-playfair">
                Are your products suitable for people with lactose intolerance?
              </h3>
              <p className="text-gray-600">
                Many of our fermented products like Kefir contain reduced lactose due to the fermentation process, making them easier to digest for some people with mild lactose intolerance. However, they still contain some lactose, so they may not be suitable for everyone with this condition.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold mb-2 font-playfair">
                Do you offer factory tours?
              </h3>
              <p className="text-gray-600">
                Yes, we offer guided tours of our production facility by appointment. These tours provide an opportunity to see how our traditional dairy products are made. Please contact us to schedule a tour.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold mb-2 font-playfair">
                Are your products organic?
              </h3>
              <p className="text-gray-600">
                While we use high-quality, locally sourced milk and natural ingredients, not all of our products are certified organic. We prioritize traditional production methods and natural fermentation processes to create healthy, authentic products.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ContactPage;
