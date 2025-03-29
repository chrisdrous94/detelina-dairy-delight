import { useState } from 'react';
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
    sodium: string;
    totalCarbs: string;
    sugars: string;
    protein: string;
  };
}

const ProductCard = ({ product }: { product: ProductProps }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="product-card group h-full">
      <div className="aspect-square overflow-hidden relative bg-gray-100">
        {/* Image loading state */}
        {!isLoaded && (
          <div className="absolute inset-0 bg-gray-100 shimmer" />
        )}

        {/* Product image with loading optimization */}
        <img
          src={product.image}
          alt={product.name}
          className={`product-image w-full h-full object-cover transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          loading="lazy"
          decoding="async"
          onLoad={() => setIsLoaded(true)}
        />

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

        {/* Display Benefits */}
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

        {/* Nutrition Facts Section */}
        {product.nutritionFacts && (
          <div className="mt-6 p-4 border-2 border-gray-300 rounded-xl bg-white shadow-lg">
            <h4 className="text-lg font-bold mb-4">Nutrition Facts</h4>
            <table className="w-full text-sm text-left text-gray-700">
              <tbody>
                <tr>
                  <td className="font-medium">Serving Size</td>
                  <td>{product.nutritionFacts.servingSize}</td>
                </tr>
                <tr>
                  <td className="font-medium">Calories</td>
                  <td>{product.nutritionFacts.calories}</td>
                </tr>
                <tr>
                  <td className="font-medium">Total Fat</td>
                  <td>{product.nutritionFacts.totalFat}</td>
                </tr>
                <tr>
                  <td className="font-medium">Saturated Fat</td>
                  <td>{product.nutritionFacts.saturatedFat}</td>
                </tr>
                <tr>
                  <td className="font-medium">Sodium</td>
                  <td>{product.nutritionFacts.sodium}</td>
                </tr>
                <tr>
                  <td className="font-medium">Total Carbs</td>
                  <td>{product.nutritionFacts.totalCarbs}</td>
                </tr>
                <tr>
                  <td className="font-medium">Sugars</td>
                  <td>{product.nutritionFacts.sugars}</td>
                </tr>
                <tr>
                  <td className="font-medium">Protein</td>
                  <td>{product.nutritionFacts.protein}</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
