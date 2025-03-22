
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard, { ProductProps } from '../components/ProductCard';
import { Search } from 'lucide-react';

// Product data
const allProducts: ProductProps[] = [
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
    id: 'kefir-light',
    name: 'Kefir Light',
    russianName: 'Кефир легкий',
    description: 'A lighter version of our classic kefir with reduced fat content, perfect for those watching their calorie intake.',
    benefits: [
      'Lower fat content',
      'Same probiotic benefits',
      'Light, refreshing taste',
      'Ideal for daily consumption'
    ],
    image: '/lovable-uploads/a4a5e8d1-3687-49fd-bc34-81ebb8b93409.png',
    category: 'Fermented Drink'
  },
  {
    id: 'protein-kefir',
    name: 'Pro² Protein Kefir',
    russianName: 'Протеиновый Кефир',
    description: 'A protein-enriched kefir drink with delicious flavors, perfect for fitness enthusiasts and active lifestyles.',
    benefits: [
      'High protein content (28g)',
      'Post-workout recovery',
      'Muscle maintenance',
      'Great taste and nutrition'
    ],
    image: '/lovable-uploads/8040c74b-81ed-41c3-a04d-71ec03b50bfa.png',
    category: 'Fitness Drink'
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
    id: 'tvorog-9',
    name: 'Tvorog 9%',
    russianName: 'Творог 9%',
    description: 'A fresh cottage cheese with 9% fat content and a slightly tangy flavor, perfect for breakfast dishes or as a base for desserts.',
    benefits: [
      'High in protein and calcium',
      'Medium fat content',
      'Versatile culinary use',
      'Contains essential amino acids'
    ],
    image: '/lovable-uploads/de5ba587-3def-4d3e-bde0-015732774c70.png',
    category: 'Fresh Cheese'
  },
  {
    id: 'tvorog-5',
    name: 'Tvorog 5%',
    russianName: 'Творог 5%',
    description: 'A lighter version of our fresh cottage cheese with 5% fat content, ideal for those seeking a lower-fat option.',
    benefits: [
      'High in protein',
      'Reduced fat content',
      'Perfect for diets',
      'Versatile in recipes'
    ],
    image: '/lovable-uploads/11204adb-75b3-48e4-9ecb-08c3ef95f5ca.png',
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
  },
  {
    id: 'kefir-strawberry',
    name: 'Kefir Strawberry',
    russianName: 'Клубничный Кефир',
    description: 'A delicious fruity variation of our classic kefir, infused with natural strawberry flavor.',
    benefits: [
      'Natural strawberry flavor',
      'Same probiotic benefits',
      'No artificial additives',
      'Kid-friendly option'
    ],
    image: '/lovable-uploads/313fea23-3c0a-4bed-8169-f67c5deb519e.png',
    category: 'Fruit Drink'
  }
];

// Extract unique categories
const categories = ['All', ...Array.from(new Set(allProducts.map(p => p.category)))];

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(allProducts);

  // Filter products based on category and search query
  useEffect(() => {
    let result = allProducts;
    
    // Filter by category
    if (activeCategory !== 'All') {
      result = result.filter(product => product.category === activeCategory);
    }
    
    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(product => 
        product.name.toLowerCase().includes(query) || 
        (product.russianName && product.russianName.toLowerCase().includes(query)) ||
        product.description.toLowerCase().includes(query)
      );
    }
    
    setFilteredProducts(result);
  }, [activeCategory, searchQuery]);

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
              Our Products
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-playfair">
              Eastern European Dairy Traditions
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Discover our range of authentic, naturally fermented dairy products made using traditional Eastern European recipes and modern production standards.
            </p>
            
            {/* Search box */}
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
          </div>
        </div>
      </section>
      
      {/* Product filters and listing */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* Products grid */}
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
              <button
                onClick={() => {
                  setActiveCategory('All');
                  setSearchQuery('');
                }}
                className="mt-4 px-4 py-2 bg-primary text-white rounded-full"
              >
                Reset filters
              </button>
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
                Natural Ingredients
              </h3>
              <p className="text-gray-600">
                We use only fresh, locally sourced milk and natural fermentation cultures without any artificial additives or preservatives.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <span className="text-primary text-xl font-bold">02</span>
              </div>
              <h3 className="text-xl font-bold mb-3 font-playfair">
                Traditional Methods
              </h3>
              <p className="text-gray-600">
                Our production follows time-tested Eastern European recipes and fermentation techniques that preserve the authentic taste and health benefits.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <span className="text-primary text-xl font-bold">03</span>
              </div>
              <h3 className="text-xl font-bold mb-3 font-playfair">
                Small Batch Production
              </h3>
              <p className="text-gray-600">
                We produce in small batches to ensure optimal fermentation, quality control, and freshness of all our dairy products.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Products;
