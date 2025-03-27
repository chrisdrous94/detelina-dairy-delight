
import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export interface ProductProps {
  id: string;
  name: string;
  russianName?: string;
  description: string;
  benefits: string[];
  image: string;
  category: string;
  nutritionFacts?: {
    servingSize: string;
    calories: number;
    totalFat: string;
    saturatedFat: string;
    cholesterol: string;
    sodium: string;
    totalCarbs: string;
    dietaryFiber: string;
    sugars: string;
    protein: string;
    calcium: string;
    vitaminD: string;
  };
}

const ProductCard = ({ product }: { product: ProductProps }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Use Intersection Observer to lazy load images
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { rootMargin: '200px 0px', threshold: 0.1 }
    );
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div ref={cardRef} className="product-card group h-full">
      <div className="aspect-square overflow-hidden relative bg-gray-100">
        {/* Image loading state */}
        {!isLoaded && (
          <div className="absolute inset-0 bg-gray-100 shimmer" />
        )}
        
        {/* Product image with optimized loading */}
        {isVisible && (
          <img
            src={product.image}
            alt={product.name}
            className={`product-image w-full h-full object-cover transition-opacity duration-300 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            loading="lazy"
            decoding="async"
            onLoad={() => setIsLoaded(true)}
            width="300" 
            height="300"
          />
        )}
        
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <Link
              to={`/products/${product.id}`}
              className="inline-flex items-center text-white font-medium"
            >
              Discover more
              <ChevronRight className="ml-1 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="mb-2">
          <span className="inline-block px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
            {product.category}
          </span>
        </div>
        <h3 className="text-xl font-bold mb-1 font-playfair">
          <Link to={`/products/${product.id}`} className="hover:text-primary transition-colors">
            {product.name}
          </Link>
        </h3>
        {product.russianName && (
          <h4 className="text-sm text-gray-500 mb-3 italic">
            {product.russianName}
          </h4>
        )}
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>
        <div className="space-y-2">
          {product.benefits.slice(0, 2).map((benefit, index) => (
            <div key={index} className="flex items-start">
              <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="w-2 h-2 rounded-full bg-primary" />
              </div>
              <span className="text-sm text-gray-600 ml-2">{benefit}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
