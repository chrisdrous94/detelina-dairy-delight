import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import { allProducts } from '../data/products';
import Chatbot from '../components/Chatbot';

const Products = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredProducts = allProducts;

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-detelina-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-3 py-1 mb-4 bg-primary/10 text-primary text-sm font-medium rounded-full">
              Our Products
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-playfair">
              Naturally good.Proudly Cypriot.
            </h1>
            <p className="text-lg text-gray-700 mb-8">
            Naturally fermented, handcrafted with local milk, and rooted in family tradition for generations
            </p>

            {/* Search box (disabled) */}
            {/**
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
              />
            </div>
            **/}
          </div>
        </div>
      </section>

      {/* Products listing */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProducts.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium mb-2">No products found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* Info section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 font-playfair">
              Quality You Can Taste
            </h2>
            <p className="text-gray-600">
              All our products are made with fresh Cyprus milk and natural cultures, following traditional Eastern European fermentation methods that have been perfected over generations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <span className="text-primary text-xl font-bold">01</span>
              </div>
              <h3 className="text-xl font-bold mb-3 font-playfair">
                Natural Ingredients</h3>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <span className="text-primary text-xl font-bold">02</span>
              </div>
              <h3 className="text-xl font-bold mb-3 font-playfair">
                Traditional Method</h3>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <span className="text-primary text-xl font-bold">03</span>
              </div>
              <h3 className="text-xl font-bold mb-3 font-playfair">
                Small Batch Production</h3>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <Chatbot />
    </div>
  );
};

export default Products;
