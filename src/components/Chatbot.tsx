
import { useState, useRef, useEffect } from 'react';
import { X, Send, MessageSquare, Loader } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  type: 'user' | 'bot';
  text: string;
  timestamp: Date;
}

const initialMessages: Message[] = [
  {
    type: 'bot',
    text: 'Hello! I\'m the Detelina Dairy assistant. How can I help you today? You can ask me about our products, where to find them, or nutritional information.',
    timestamp: new Date()
  }
];

// Predefined responses based on keywords
const responseMap: { keywords: string[]; replies: string[] }[] = [
  // 1. Greetings & Small Talk
  {
    keywords: ['hi', 'hello', 'hey', 'greetings', 'good morning', 'good afternoon'],
    replies: [
      'Hi there! 👋 How can I help you today?',
      'Hello! Need help with our products?',
      'Hey! I’m here for all things Detelina.',
      'Good to see you! Ask me anything about our dairy range.'
    ]
  },
  {
    keywords: ['how are you', 'what\'s up', 'how’s it going'],
    replies: [
      'I’m feeling fresh — just like our kefir! How can I help you today?',
      'Doing great! Ready to chat dairy. 😊',
      'Better than ever — powered by probiotics!'
    ]
  },

  // 2. Kefir
  {
    keywords: ['kefir', 'fermented milk', 'probiotic drink'],
    replies: [
      'Our kefir is made with fresh Cyprus milk and live cultures — tangy, creamy, and great for your gut!',
      'We offer classic, light, strawberry, and protein-packed kefir. Want help choosing one?',
      'Kefir is full of probiotics and low in lactose. It’s like a super drink in a bottle!'
    ]
  },
  {
    keywords: ['kefir light', 'light kefir'],
    replies: [
      'Kefir Light has all the probiotic benefits with less fat and fewer calories — ideal for everyday sipping!',
      'A lighter option, same Detelina flavor. Great post-meal drink!'
    ]
  },
  {
    keywords: ['kefir strawberry', 'flavored kefir', 'fruit kefir'],
    replies: [
      'Our Strawberry Kefir is kid-friendly, fruity, and packed with natural probiotics.',
      'Sweet and smooth — Strawberry Kefir is a favorite among all ages!'
    ]
  },
  {
    keywords: ['family pack', 'kefir 2l', 'bulk kefir'],
    replies: [
      'The Kefir Family Pack (2L) is perfect for households that drink kefir daily — it’s economical and delicious.',
      'Love kefir? Our 2L Family Pack has your fridge covered!'
    ]
  },

  // 3. Protein Line
  {
    keywords: ['protein', 'pro2', 'fitness', 'workout', 'gym'],
    replies: [
      '💪 Our Pro² Protein Kefir packs 28g of protein per bottle — perfect for muscle recovery and gut health!',
      'Made for active lifestyles — Pro² combines performance with live cultures.',
      'Vanilla-Banana or Cherry? Our Pro² line brings flavor and function together.'
    ]
  },

  // 4. Tvorog
  {
    keywords: ['tvorog', 'cottage cheese', 'fresh cheese', 'farmer cheese'],
    replies: [
      'Tvorog is our fresh cheese — creamy, slightly tangy, and super nutritious!',
      'We offer 9% (450g) and 5% (250g) Tvorog — great with fruit, honey, or in baking.',
      'Try making syrniki with our Tvorog — it’s a traditional treat!'
    ]
  },

  // 5. Smetana
  {
    keywords: ['smetana', 'sour cream'],
    replies: [
      'Smetana is our cultured sour cream — rich, tangy, and amazing on soups or blinis.',
      'Use Smetana in cooking or as a topping — it adds creaminess and probiotics to every dish!'
    ]
  },

  // 6. Ryazhenka
  {
    keywords: ['ryazhenka', 'baked milk'],
    replies: [
      'Ryazhenka is our caramelized baked milk — a silky, naturally sweet dairy drink.',
      'It’s perfect warm or cold — and gentle on the stomach.'
    ]
  },

  // 7. Where to Buy
  {
    keywords: ['where', 'buy', 'find', 'supermarket', 'store'],
    replies: [
      'You’ll find us in most supermarkets across Cyprus: AlphaMega, Papantoniou, Metro and more!',
      'Our products are sold island-wide — and at our factory shop in Limassol.',
      'Need something special? Message us and we’ll point you to the nearest stockist.'
    ]
  },

  // 8. Benefits
  {
    keywords: ['probiotic', 'benefit', 'healthy', 'good for', 'health'],
    replies: [
      'Our products are loaded with live cultures that improve digestion, immunity, and gut health.',
      'Fermented dairy = better gut, stronger you. 💪',
      'Kefir and Tvorog are high in protein and calcium — great for bones, muscles, and mood!'
    ]
  },

  // 9. Ingredients / Allergies
  {
    keywords: ['lactose', 'intolerant', 'allergy', 'ingredient'],
    replies: [
      'All our products contain milk. But fermented options like kefir are low in lactose and easier to digest.',
      'If you’re lactose-sensitive, start with kefir — many find it gentle on their system.',
      'Always check labels if you have allergies — or message us for details!'
    ]
  },

  // 10. Expiry / Storage
  {
    keywords: ['store', 'expire', 'expiry', 'shelf life', 'how long'],
    replies: [
      'Our products are refrigerated and stay fresh for up to 3 weeks. Check each label for best before date.',
      'Keep it cold and closed — that’s the key to long shelf life!',
      'If it smells fizzy and fresh, it’s probably still perfect!'
    ]
  },

  // 11. Recipes & Usage
  {
    keywords: ['recipe', 'cook', 'how to use', 'serve', 'eat'],
    replies: [
      'Try Tvorog in pancakes (syrniki), Smetana in soups, or drink kefir with breakfast!',
      'We’ve got a recipe section coming soon! Need one now?',
      'Want to make a probiotic smoothie? Just blend our kefir with banana and cinnamon!'
    ]
  },

  // 12. Kids / Family
  {
    keywords: ['children', 'kids', 'baby'],
    replies: [
      'Our Strawberry Kefir is a hit with kids — smooth, fruity, and natural.',
      'Fermented dairy is a great option for growing kids — consult your pediatrician if unsure.'
    ]
  },

  // 13. Contact & Location
  {
    keywords: ['contact', 'email', 'phone', 'reach', 'support'],
    replies: [
      'You can reach us at 📞 +357 25 715450 or ✉️ info@detelina-dairy.com',
      'Customer support is open Mon–Fri, 8AM–5PM — we’re here for you!'
    ]
  },
  {
    keywords: ['location', 'address', 'factory', 'limassol'],
    replies: [
      'Visit our factory shop at Akademias 2, Ypsonas, Limassol.',
      'Yes, we have a physical store! Come by for fresh products.'
    ]
  },

  // 14. Story & Brand
  {
    keywords: ['history', 'story', 'brand', 'who are you'],
    replies: [
      'Detelina was founded in 1995 by Costas Christou — inspired by traditional fermentation and local milk.',
      'We’re a family-run dairy in Cyprus, bringing Eastern European flavors to local tables.'
    ]
  },

  // 15. Thanks & Farewell
  {
    keywords: ['thank', 'thanks', 'thank you'],
    replies: [
      'You’re very welcome! 😊',
      'Anytime — feel free to ask me more.',
      'Glad I could help!'
    ]
  },
  {
    keywords: ['bye', 'goodbye', 'see you', 'later'],
    replies: [
      'Thanks for chatting — come back anytime! 👋',
      'Take care! I’ll be here if you need help.'
    ]
  },

  // 16. Default fallback
  {
    keywords: [],
    replies: [
      'I’m not sure how to answer that, but I can help with product info, store locations, or nutrition!',
      'Try asking about kefir, Tvorog, prices, or where to find us!',
      'Need help with anything specific? I’ve got answers on all things dairy. 🧀🥛'
    ]
  }
];


const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getResponse = (userMessage: string): string => {
    const input = userMessage.toLowerCase();
  
    for (const entry of responseMap) {
      if (entry.keywords.length === 0 || entry.keywords.some(keyword => input.includes(keyword))) {
        return entry.replies[Math.floor(Math.random() * entry.replies.length)];
      }
    }
  
    
    // Default response
    return "I'm not sure how to respond to that. Would you like to know about our products, where to find them, or nutritional information?";
  };

  const handleSendMessage = () => {
    if (inputValue.trim() === '') return;
    
    // Add user message
    const userMessage: Message = {
      type: 'user',
      text: inputValue,
      timestamp: new Date()
    };
    
    setMessages([...messages, userMessage]);
    setInputValue('');
    setIsTyping(true);
    
    // Simulate bot thinking and typing
    setTimeout(() => {
      const botResponse: Message = {
        type: 'bot',
        text: getResponse(userMessage.text),
        timestamp: new Date()
      };
      
      setMessages(prevMessages => [...prevMessages, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const formatTime = (date: Date): string => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <>
      {/* Chat button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-primary text-white rounded-full p-4 shadow-lg hover:bg-primary-dark transition-colors z-50"
        aria-label="Open chat"
      >
        <MessageSquare size={24} />
      </button>
      
      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed bottom-24 right-6 w-96 max-w-full bg-white rounded-xl shadow-2xl overflow-hidden z-50 border border-gray-200"
          >
            {/* Header */}
            <div className="bg-primary text-white p-4 flex justify-between items-center">
              <div className="flex items-center">
                <img 
                  src="/lovable-uploads/f83402e5-1e4f-4ac9-839d-9ef501da7c9f.png" 
                  alt="Detelina Dairy Logo" 
                  className="w-8 h-8 mr-2 rounded-full bg-white"
                />
                <h3 className="font-medium">Detelina Dairy Assistant</h3>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="rounded-full hover:bg-primary-dark transition-colors p-1"
                aria-label="Close chat"
              >
                <X size={18} />
              </button>
            </div>
            
            {/* Messages */}
            <div className="h-96 overflow-y-auto p-4 bg-gray-50">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`mb-4 flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`p-3 rounded-lg max-w-[80%] ${
                      message.type === 'user'
                        ? 'bg-primary text-white rounded-br-none'
                        : 'bg-white text-gray-800 rounded-bl-none shadow-sm'
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                    <span className={`text-xs mt-1 block ${message.type === 'user' ? 'text-primary-50' : 'text-gray-500'}`}>
                      {formatTime(message.timestamp)}
                    </span>
                  </div>
                </div>
              ))}
              
              {/* Typing indicator */}
              {isTyping && (
                <div className="flex justify-start mb-4">
                  <div className="p-3 rounded-lg bg-white shadow-sm rounded-bl-none">
                    <div className="flex items-center">
                      <div className="dot-typing"></div>
                    </div>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>
            
            {/* Input */}
            <div className="border-t border-gray-200 p-4 bg-white">
              <div className="flex items-center">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-l-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={inputValue.trim() === ''}
                  className={`px-4 py-2 rounded-r-full text-white ${
                    inputValue.trim() === '' ? 'bg-gray-400' : 'bg-primary hover:bg-primary-dark'
                  } transition-colors`}
                >
                  <Send size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* CSS for typing indicator */}
      <style jsx>{`
  .dot-typing {
    position: relative;
    left: -9999px;
    width: 6px;
    height: 6px;
    border-radius: 5px;
    background-color: #9880ff;
    color: #9880ff;
    box-shadow: 9984px 0 0 0 #9880ff, 9994px 0 0 0 #9880ff, 10004px 0 0 0 #9880ff;
    animation: dotTyping 1.5s infinite linear;
  }

  @keyframes dotTyping {
    0% {
      box-shadow: 9984px 0 0 0 #9880ff, 9994px 0 0 0 #9880ff, 10004px 0 0 0 #9880ff;
    }
    16.667% {
      box-shadow: 9984px -10px 0 0 #9880ff, 9994px 0 0 0 #9880ff, 10004px 0 0 0 #9880ff;
    }
    33.333% {
      box-shadow: 9984px 0 0 0 #9880ff, 9994px 0 0 0 #9880ff, 10004px 0 0 0 #9880ff;
    }
    50% {
      box-shadow: 9984px 0 0 0 #9880ff, 9994px -10px 0 0 #9880ff, 10004px 0 0 0 #9880ff;
    }
    66.667% {
      box-shadow: 9984px 0 0 0 #9880ff, 9994px 0 0 0 #9880ff, 10004px 0 0 0 #9880ff;
    }
    83.333% {
      box-shadow: 9984px 0 0 0 #9880ff, 9994px 0 0 0 #9880ff, 10004px -10px 0 0 #9880ff;
    }
    100% {
      box-shadow: 9984px 0 0 0 #9880ff, 9994px 0 0 0 #9880ff, 10004px 0 0 0 #9880ff;
    }
  }
`}</style>

    </>
  );
};

export default Chatbot;
