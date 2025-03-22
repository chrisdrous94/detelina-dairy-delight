
import { useEffect } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Newsletter from '../components/Newsletter';
import Contact from '../components/Contact';
import StoreLocator from '../components/StoreLocator';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProductCard, { ProductProps } from '../components/ProductCard';

// Product data
const featuredProducts: ProductProps[] = [
  {
    id: 'kefir',
    name: 'Kefir',
    russianName: 'Кефир',
    description: 'A fermented milk drink with a unique tangy flavor, rich in probiotics and essential nutrients.',
    benefits: [
      'Rich in beneficial probiotics',
      'Supports digestive health',
      'High in protein and calcium',
      'Naturally low in lactose'
    ],
    image: '/lovable-uploads/2a26b134-2724-4bd1-8093-788f23e215b0.png',
    category: 'Fermented Drink'
  },
  {
    id: 'smetana',
    name: 'Smetana',
    russianName: 'Сметана',
    description: 'A thick, rich sour cream with a creamy texture that adds depth to both savory and sweet dishes.',
    benefits: [
      'Creates rich, creamy texture in dishes',
      'Versatile culinary ingredient',
      'Contains beneficial bacteria',
      'Source of essential vitamins'
    ],
    image: '/lovable-uploads/5de99ef6-bb87-44a5-8018-8a78cd7eaf0b.png',
    category: 'Sour Cream'
  },
  {
    id: 'tvorog',
    name: 'Tvorog',
    russianName: 'Творог',
    description: 'A fresh cottage cheese with a slightly tangy flavor, perfect for breakfast dishes or as a base for desserts.',
    benefits: [
      'High in protein and calcium',
      'Low in fat',
      'Versatile ingredient',
      'Contains essential amino acids'
    ],
    image: '/lovable-uploads/de5ba587-3def-4d3e-bde0-015732774c70.png',
    category: 'Fresh Cheese'
  },
  {
    id: 'ryazhenka',
    name: 'Ryazhenka',
    russianName: 'Ряженка',
    description: 'A baked fermented milk product with a natural caramelized flavor and a velvety texture.',
    benefits: [
      'Gentle on the digestive system',
      'Rich, nutty caramel flavor',
      'Contains beneficial probiotics',
      'Natural sleep aid'
    ],
    image: '/lovable-uploads/6f6222f5-7512-4eff-ba92-a82f28b5d78b.png',
    category: 'Baked Milk'
  }
];

const Index = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Featured Products */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="inline-block px-3 py-1 mb-4 bg-primary/10 text-primary text-sm font-medium rounded-full">
              Our Products
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-playfair">
              Eastern European Dairy Traditions
            </h2>
            <p className="text-gray-600">
              Discover our range of authentic, naturally fermented dairy products made using traditional Eastern European recipes.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="text-center">
            <Link 
              to="/products" 
              className="inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-full transition-all hover:bg-primary-dark"
            >
              View All Products
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <About />
      
      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="inline-block px-3 py-1 mb-4 bg-primary/10 text-primary text-sm font-medium rounded-full">
              Health Benefits
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-playfair">
              Why Choose Fermented Dairy
            </h2>
            <p className="text-gray-600">
              Our products not only taste delicious but also provide numerous health benefits through their natural fermentation process.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.75 8C6.75 5.10051 9.10051 2.75 12 2.75C14.8995 2.75 17.25 5.10051 17.25 8V10.0036C17.4945 10.0089 17.7494 10.0161 18 10.0254V8C18 4.68629 15.3137 2 12 2C8.68629 2 6 4.68629 6 8V12.7508C6.87761 11.7483 8.21558 11 9.5 11C11.8287 11 13.8132 12.7689 14.2242 15.0009C14.4017 15.0003 14.5805 15 14.7606 15C15.0992 15 15.4356 15.0062 15.7695 15.0185C15.2573 11.9163 12.6437 9.5 9.5 9.5C8.12769 9.5 6.85131 9.9066 5.81768 10.6178C5.71547 10.6896 5.61467 10.7646 5.51534 10.8425C5.20819 11.1 4.90711 11.3738 4.61446 11.6606C3.91292 12.3527 3.25 13.1047 2.62647 13.9135C2.16714 14.5302 2 14.9071 2 15.5C2 15.9659 2 16.25 2 16.25C2 16.25 2 16.9341 2 17.4C2 17.9929 2.16714 18.3698 2.62647 18.9865C3.25 19.7953 3.91292 20.5473 4.61446 21.2394C5.30659 21.9229 6.05108 22.5768 6.85007 23.1913C7.45769 23.6458 7.83218 24 8.5 24C9.06586 24 9.25 24 9.25 24C9.25 24 9.93414 24 10.5 24C11.1678 24 11.5423 23.6458 12.1499 23.1913C12.9489 22.5768 13.6934 21.9229 14.3855 21.2394C15.0871 20.5473 15.75 19.7953 16.3735 18.9865C16.8329 18.3698 17 17.9929 17 17.4C17 16.8071 16.8329 16.4302 16.3735 15.8135C15.9739 15.2969 15.5169 14.7652 15 14.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 font-playfair">
                Digestive Health
              </h3>
              <p className="text-gray-600">
                Our fermented dairy products are rich in beneficial probiotics that support a healthy gut microbiome and improve digestive function.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.7209 6.73731C18.1865 3.89046 14.6548 2.5 11.2533 2.5C6.29819 2.5 2.36673 5.52944 1.65059 10.7397C0.750241 17.2968 3.35384 20 5.97863 20C8.46684 20 9.06436 17.8814 9.42005 15.4426C9.81862 12.7482 10.5357 10 15.4948 10M13.0002 7L20.0002 7M20.0002 7L17.0002 4M20.0002 7L17.0002 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 font-playfair">
                Immune Support
              </h3>
              <p className="text-gray-600">
                The natural fermentation process enhances immune function by promoting beneficial gut bacteria and providing essential nutrients.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.3891 7.89408L15.4404 5.84408C16.9859 4.29958 19.5037 4.29958 21.0482 5.84408C22.5937 7.38857 22.5937 9.90539 21.0482 11.4499L18.585 13.9121M13.3891 7.89408C13.3891 7.89408 13.7006 9.54774 15.0139 10.861C16.3272 12.1743 17.9808 12.4858 17.9808 12.4858M13.3891 7.89408L6.61185 14.6703C5.68878 15.5934 5.22725 16.0549 4.89061 16.6108C4.55397 17.1667 4.36348 17.8012 3.98249 19.0702L3.49652 20.5282M19.0384 20.0142L17.5804 20.5002C16.3114 20.8812 15.6769 21.0717 15.121 21.4083C14.5651 21.745 14.1036 22.2065 13.1805 23.1296L6.40327 16.3524" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 font-playfair">
                Nutrient-Rich
              </h3>
              <p className="text-gray-600">
                Our products are packed with essential nutrients including protein, calcium, vitamins B and K2, and are easier to digest than regular dairy.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Store Locator */}
      <StoreLocator />
      
      {/* Newsletter */}
      <Newsletter />
      
      {/* Contact */}
      <Contact />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
