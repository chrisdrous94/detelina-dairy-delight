
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
    image: '/lovable-uploads/kefir full fat.jpg',
    category: 'Fermented Drink',
    nutritionFacts: {
      servingSize: "500ml",
      calories: 120,
      totalFat: "3g",
      saturatedFat: "2g",
      cholesterol: "15mg",
      sodium: "125mg",
      totalCarbs: "12g",
      dietaryFiber: "0g",
      sugars: "12g",
      protein: "8g",
      calcium: "30%",
      vitaminD: "25%"
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
    image: '/lovable-uploads/kefir light.jpg',
    category: 'Fermented Drink',
    nutritionFacts: {
      servingSize: "240ml",
      calories: 90,
      totalFat: "1.5g",
      saturatedFat: "1g",
      cholesterol: "10mg",
      sodium: "125mg",
      totalCarbs: "12g",
      dietaryFiber: "0g",
      sugars: "12g",
      protein: "8g",
      calcium: "30%",
      vitaminD: "25%"
    }
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
    image: '/lovable-uploads/pro² protein kefir black font.jpg',
    category: 'Fitness Drink',
    nutritionFacts: {
      servingSize: "240ml",
      calories: 180,
      totalFat: "3g",
      saturatedFat: "2g",
      cholesterol: "15mg",
      sodium: "140mg",
      totalCarbs: "13g",
      dietaryFiber: "0g",
      sugars: "12g",
      protein: "28g",
      calcium: "35%",
      vitaminD: "25%"
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
      servingSize: "30g",
      calories: 60,
      totalFat: "6g",
      saturatedFat: "4g",
      cholesterol: "20mg",
      sodium: "10mg",
      totalCarbs: "1g",
      dietaryFiber: "0g",
      sugars: "1g",
      protein: "1g",
      calcium: "4%",
      vitaminD: "2%"
    }
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
    image: '/lovable-uploads/tvorog 450g.png',
    category: 'Fresh Cheese',
    nutritionFacts: {
      servingSize: "100g",
      calories: 160,
      totalFat: "9g",
      saturatedFat: "5.5g",
      cholesterol: "30mg",
      sodium: "40mg",
      totalCarbs: "3g",
      dietaryFiber: "0g",
      sugars: "3g",
      protein: "18g",
      calcium: "15%",
      vitaminD: "6%"
    }
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
    image: '/lovable-uploads/tvorog 250g.png',
    category: 'Fresh Cheese',
    nutritionFacts: {
      servingSize: "100g",
      calories: 120,
      totalFat: "5g",
      saturatedFat: "3g",
      cholesterol: "20mg",
      sodium: "40mg",
      totalCarbs: "3g",
      dietaryFiber: "0g",
      sugars: "3g",
      protein: "18g",
      calcium: "15%",
      vitaminD: "6%"
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
    image: '/lovable-uploads/kefir full fat.jpg',
    category: 'Baked Milk',
    nutritionFacts: {
      servingSize: "240ml",
      calories: 150,
      totalFat: "5g",
      saturatedFat: "3g",
      cholesterol: "15mg",
      sodium: "120mg",
      totalCarbs: "15g",
      dietaryFiber: "0g",
      sugars: "15g",
      protein: "9g",
      calcium: "30%",
      vitaminD: "25%"
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
    image: '/lovable-uploads/kefir full light and strawberry together.jpg',
    category: 'Fruit Drink',
    nutritionFacts: {
      servingSize: "240ml",
      calories: 140,
      totalFat: "3g",
      saturatedFat: "2g",
      cholesterol: "15mg",
      sodium: "125mg",
      totalCarbs: "23g",
      dietaryFiber: "0g",
      sugars: "22g",
      protein: "8g",
      calcium: "30%",
      vitaminD: "25%"
    }
  }
];

export const featuredProducts = allProducts.slice(0, 4);
