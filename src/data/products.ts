import { ProductProps } from "../components/ProductCard";

export const allProducts: ProductProps[] = [
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
    image: '/lovable-uploads/kefir-full-fat.jpg',
    category: 'Fermented Drink',
    nutritionFacts: {
      servingSize: "500ml",
      calories: 57,
      totalFat: "3g",
      saturatedFat: "1.4g",
      sodium: "0.05g",
      totalCarbs: "4.2g",
      sugars: "4.2g",
      protein: "3.2g",
    }
  },
  {
    id: 'kefir-family-pack',
    name: 'Kefir Family Pack',
    russianName: 'Кефир Семейный',
    description: 'A bulk 2L family-size bottle of our original kefir — perfect for households that enjoy probiotic-rich drinks daily.',
    benefits: [
      '1L size ideal for families',
      'Same probiotic-rich formula',
      'Cost-effective option',
      'Perfect for shared meals'
    ],
    image: '/lovable-uploads/kefir-full-fat.jpg', // replace with correct image when ready
    category: 'Fermented Drink',
    nutritionFacts: {
      servingSize: "1000ml",
      calories: 57,
      totalFat: "3g",
      saturatedFat: "1.4g",
      sodium: "0.05g",
      totalCarbs: "4.2g",
      sugars: "4.2g",
      protein: "3.2g",
    }
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
    image: '/lovable-uploads/kefir-light.jpg',
    category: 'Fermented Drink',
    nutritionFacts: {
      servingSize: "500ml",
      calories: 35,
      totalFat: "0.5g",
      saturatedFat: "0.25g",
      sodium: "0.05g",
      totalCarbs: "4.2g",
      sugars: "4.2g",
      protein: "3.2g",
    }
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
    image: '/lovable-uploads/strawberry.jpg',
    category: 'Fruit Drink',
    nutritionFacts: {
      servingSize: "500ml",
      calories: 68,
      totalFat: "1.3g",
      saturatedFat: "0.65g",
      sodium: "0.03mg",
      totalCarbs: "11.3g",
      sugars: "11.3g",
      protein: "2.7g",
    }
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
    image: '/lovable-uploads/riazhenka.jpg',
    category: 'Baked Milk',
    nutritionFacts: {
      servingSize: "500ml",
      calories: 57,
      totalFat: "3g",
      saturatedFat: "1.4g",
      sodium: "0.05g",
      totalCarbs: "4.2g",
      sugars: "4.2g",
      protein: "3.2g",
    }
  },
  {
    id: 'tvorog-9',
    name: 'Tvorog 9% 450g',
    russianName: 'Творог 9%',
    description: 'A fresh cottage cheese with 9% fat content and a slightly tangy flavor, perfect for breakfast dishes or as a base for desserts.',
    benefits: [
      'High in protein and calcium',
      'Medium fat content',
      'Versatile culinary use',
      'Contains essential amino acids'
    ],
    image: '/lovable-uploads/tvorog-450g.png',
    category: 'Fresh Cheese',
    nutritionFacts: {
      servingSize: "450g",
      calories: 155,
      totalFat: "9g",
      saturatedFat: "7g",
      sodium: "0mg",
      totalCarbs: "5g",
      sugars: "4g",
      protein: "15g",
    }
  },
  {
    id: 'tvorog-5',
    name: 'Tvorog 9% 250g',
    russianName: 'Творог 5%',
    description: 'A lighter version of our fresh cottage cheese with 5% fat content, ideal for those seeking a lower-fat option.',
    benefits: [
      'High in protein',
      'Reduced fat content',
      'Perfect for diets',
      'Versatile in recipes'
    ],
    image: '/lovable-uploads/tvorog-250g.png',
    category: 'Fresh Cheese',
    nutritionFacts: {
      servingSize: "250g",
      calories: 155,
      totalFat: "9g",
      saturatedFat: "7g",
      sodium: "0mg",
      totalCarbs: "5g",
      sugars: "4g",
      protein: "15g",
    }
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
    image: '/lovable-uploads/smetana.png',
    category: 'Sour Cream',
    nutritionFacts: {
      servingSize: "250g",
      calories: 155,
      totalFat: "9g",
      saturatedFat: "7g",
      sodium: "0mg",
      totalCarbs: "5g",
      sugars: "4g",
      protein: "15g",
    }
  }
];

// Export the first 4 as featured
export const featuredProducts = allProducts.slice(0, 4);
