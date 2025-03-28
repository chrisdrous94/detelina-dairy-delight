import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import { allProducts } from '../data/products';
import { ProductProps } from './ProductCard';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';

const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();
  const [product, setProduct] = useState<ProductProps | null>(null);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [relatedProducts, setRelatedProducts] = useState<ProductProps[]>([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productId]);

  useEffect(() => {
    if (productId) {
      const foundProduct = allProducts.find(p => p.id === productId) || null;
      setProduct(foundProduct);
      if (foundProduct) {
        const sameCategory = allProducts
          .filter(p => p.category === foundProduct.category && p.id !== foundProduct.id)
          .slice(0, 3);
        setRelatedProducts(sameCategory);
      }
    }
  }, [productId]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
          <p className="mb-6">The product you're looking for doesn't exist or has been removed.</p>
          <Link to="/products" className="inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-full">
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="pt-32 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <div className="mb-8">
            <nav className="flex items-center text-sm">
              <Link to="/" className="text-gray-500 hover:text-gray-700">Home</Link>
              <ChevronRight className="h-4 w-4 mx-2 text-gray-400" />
              <Link to="/products" className="text-gray-500 hover:text-gray-700">Products</Link>
              <ChevronRight className="h-4 w-4 mx-2 text-gray-400" />
              <span className="text-gray-900 font-medium">{product.name}</span>
            </nav>
          </div>

          {/* Layout: Image + Details + Nutrition Facts */}
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            {/* Image */}
            <div className="relative rounded-xl overflow-hidden col-span-1">
              {!isImageLoaded && (
                <div className="absolute inset-0 bg-gray-100 shimmer rounded-xl" />
              )}
              <motion.img
                src={product.image}
                alt={product.name}
                className={`w-full rounded-xl ${isImageLoaded ? 'opacity-100' : 'opacity-0'}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: isImageLoaded ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                loading="eager"
                decoding="async"
                onLoad={() => setIsImageLoaded(true)}
              />
            </div>

            {/* Product Details */}
            <div className="col-span-1">
              <div className="mb-3">
                <span className="inline-block px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full">
                  {product.category}
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2 font-playfair">{product.name}</h1>
              {product.russianName && (
                <h2 className="text-lg text-gray-500 mb-6 italic">{product.russianName}</h2>
              )}
              <p className="text-gray-700 mb-8 leading-relaxed">{product.description}</p>

              <div className="border-t border-b border-gray-200 py-6 mb-8">
                <h3 className="text-lg font-bold mb-4">Benefits</h3>
                <div className="space-y-3">
                  {product.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="w-2 h-2 rounded-full bg-primary" />
                      </div>
                      <span className="text-gray-700 ml-3">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-bold mb-4">Where to Buy</h3>
                <p className="text-gray-700 mb-4">
                  Find {product.name} in selected retail stores across Cyprus or directly from our factory store in Limassol.
                </p>
                <Link
                  to="/#store-locator"
                  className="inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-full hover:bg-primary-dark transition-colors"
                >
                  Find Stores
                  <ChevronRight className="ml-1 h-5 w-5" />
                </Link>
              </div>
            </div>

            {/* Nutrition Facts */}
            {product.nutritionFacts && (
              <div className="col-span-1">
                <h2 className="text-2xl font-bold mb-6 font-playfair">Nutrition Facts</h2>
                <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6">
                  <div className="border-b-2 border-black pb-2 mb-2">
                    <h3 className="text-xl font-bold">Nutrition Facts</h3>
                  </div>
                  <div className="border-b border-gray-300 pb-1 mb-1">
                    <p><span className="font-medium">Serving Size:</span> {product.nutritionFacts.servingSize}</p>
                  </div>
                  <div className="border-b-8 border-black pb-1 mb-2">
                    <p className="text-lg font-bold">Nutritional Value Per 100ml</p>
                    <div className="flex justify-between">
                      <p className="text-xl font-bold">Calories</p>
                      <p className="text-xl font-bold">{product.nutritionFacts.calories}</p>
                    </div>
                  </div>
                  <div className="border-b border-gray-300 pb-1 mb-1">
                    <div className="flex justify-between">
                      <p className="font-bold">Total Fat</p>
                      <p>{product.nutritionFacts.totalFat}</p>
                    </div>
                  </div>
                  <div className="border-b border-gray-300 pb-1 mb-1 pl-4">
                    <div className="flex justify-between">
                      <p>Saturated Fat</p>
                      <p>{product.nutritionFacts.saturatedFat}</p>
                    </div>
                  </div>
                  <div className="border-b border-gray-300 pb-1 mb-1">
                    <div className="flex justify-between">
                      <p className="font-bold">Sodium</p>
                      <p>{product.nutritionFacts.sodium}</p>
                    </div>
                  </div>
                  <div className="border-b border-gray-300 pb-1 mb-1">
                    <div className="flex justify-between">
                      <p className="font-bold">Total Carbohydrates</p>
                      <p>{product.nutritionFacts.totalCarbs}</p>
                    </div>
                  </div>
                  <div className="border-b border-gray-300 pb-1 mb-1 pl-4">
                    <div className="flex justify-between">
                      <p>Sugars</p>
                      <p>{product.nutritionFacts.sugars}</p>
                    </div>
                  </div>
                  <div className="border-b-8 border-black pb-1 mb-2">
                    <div className="flex justify-between">
                      <p className="font-bold">Protein</p>
                      <p>{product.nutritionFacts.protein}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold mb-6 font-playfair">Related Products</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedProducts.map(product => (
                  <div key={product.id} className="h-full">
                    <Link to={`/products/${product.id}`} className="block h-full">
                      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden h-full hover:shadow-md transition-shadow">
                        <div>
                          <img 
                            src={product.image} 
                            alt={product.name} 
                            className="w-full rounded-t-xl"
                            loading="lazy"
                            decoding="async"
                          />
                        </div>
                        <div className="p-4">
                          <h3 className="font-bold">{product.name}</h3>
                          <p className="text-sm text-gray-600 line-clamp-2">{product.description}</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;
