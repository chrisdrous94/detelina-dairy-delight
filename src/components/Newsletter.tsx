
import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    // Simulate form submission
    setTimeout(() => {
      setStatus('success');
      setEmail('');
      
      // Reset status after 3 seconds
      setTimeout(() => {
        setStatus('idle');
      }, 3000);
    }, 1000);
  };

  return (
    <section className="py-16 bg-detelina-green">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto glass-panel bg-white/10 p-10 rounded-2xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-playfair">
                Join Our Newsletter
              </h2>
              <p className="text-white/90 mb-6">
                Subscribe for healthy recipes, new product announcements, and exclusive offers on our Eastern European dairy products.
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <span className="text-white">01</span>
                </div>
                <p className="text-white/90">Get exclusive recipes using our products</p>
              </div>
              <div className="flex items-center space-x-4 mt-4">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <span className="text-white">02</span>
                </div>
                <p className="text-white/90">Be the first to know about new products</p>
              </div>
              <div className="flex items-center space-x-4 mt-4">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <span className="text-white">03</span>
                </div>
                <p className="text-white/90">Receive special offers and promotions</p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg">
              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center py-8">
                  <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Thank You!</h3>
                  <p className="text-gray-600 text-center">
                    You've been successfully subscribed to our newsletter.
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="text-xl font-bold mb-6 font-playfair">
                    Sign Up for Updates
                  </h3>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <label htmlFor="newsletter-email" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="newsletter-email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                        placeholder="you@example.com"
                      />
                    </div>
                    
                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className={`w-full py-3 px-6 bg-primary text-white font-medium rounded-lg flex items-center justify-center transition-all ${
                        status === 'loading' ? 'opacity-80' : 'hover:bg-primary-dark'
                      }`}
                    >
                      {status === 'loading' ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Subscribing...
                        </>
                      ) : (
                        <>
                          Subscribe <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </button>
                  </form>
                  <p className="mt-4 text-xs text-gray-500">
                    By subscribing, you agree to our Privacy Policy and consent to receive updates from Detelina Dairy.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
