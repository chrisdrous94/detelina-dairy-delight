
import { useState } from 'react';
import { MapPin, Phone, Mail, Send, Check } from 'lucide-react';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
    submitted: false,
    loading: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState(prev => ({ ...prev, loading: true }));
    
    // Simulate form submission
    setTimeout(() => {
      setFormState(prev => ({ 
        ...prev, 
        loading: false,
        submitted: true,
        name: '',
        email: '',
        message: ''
      }));
      
      // Reset submitted state after 5 seconds
      setTimeout(() => {
        setFormState(prev => ({ ...prev, submitted: false }));
      }, 5000);
    }, 1500);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-2">
            {/* Contact Info */}
            <div className="bg-detelina-green p-10 text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 font-playfair">
                Get in Touch
              </h2>
              <p className="mb-8 opacity-90">
                Have questions or feedback? We'd love to hear from you. Fill out the form or reach out directly using the contact details below.
              </p>
              
              <div className="space-y-6">
                <div className="flex">
                  <MapPin className="w-6 h-6 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold mb-1">Visit Us</h3>
                    <p className="opacity-90">Akademias 2,Ypsonas,Limassol, Cyprus</p>
                  </div>
                </div>
                
                <div className="flex">
                  <Phone className="w-6 h-6 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold mb-1">Call Us</h3>
                    <p className="opacity-90">+357 25 715450</p>
                  </div>
                </div>
                
                <div className="flex">
                  <Mail className="w-6 h-6 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold mb-1">Email Us</h3>
                    <p className="opacity-90">info@detelina-dairy.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="p-10">
              <h2 className="text-2xl font-bold mb-6 font-playfair">Send a Message</h2>
              
              {formState.submitted ? (
                <div className="flex items-center p-4 mb-4 bg-green-50 text-green-800 rounded-lg">
                  <Check className="w-5 h-5 mr-2 text-green-600" />
                  <span>Thank you! Your message has been sent successfully.</span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all resize-none"
                      placeholder="Write your message here..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={formState.loading}
                    className={`w-full py-3 px-6 bg-primary text-white font-medium rounded-lg flex items-center justify-center transition-all ${
                      formState.loading ? 'opacity-80' : 'hover:bg-primary-dark'
                    }`}
                  >
                    {formState.loading ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
