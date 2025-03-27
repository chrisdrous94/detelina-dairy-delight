
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
const predefinedResponses: Record<string, string> = {
  'hello': 'Hello! How can I help you today?',
  'hi': 'Hi there! What would you like to know about Detelina Dairy products?',
  'product': 'Our main products include Kefir, Tvorog (fresh cheese), Smetana (sour cream), Ryazhenka (baked milk), and our Pro² Protein Kefir line. Which one would you like to learn more about?',
  'kefir': 'Kefir is a fermented milk drink rich in probiotics. We offer classic Kefir, Light Kefir with reduced fat, flavored options like Strawberry, and our Pro² Protein Kefir for fitness enthusiasts.',
  'tvorog': 'Tvorog is a fresh cottage cheese popular in Eastern European cuisine. We offer it in 9% and 5% fat varieties. It\'s perfect for breakfast dishes, cheesecakes, and can be enjoyed with fruits and honey.',
  'smetana': 'Smetana is a thick, rich sour cream that adds depth to both savory and sweet dishes. It\'s essential for authentic borsch, blini, or as a topping for traditional Eastern European dishes.',
  'ryazhenka': 'Ryazhenka is a baked fermented milk product with a natural caramelized flavor and a velvety texture. It has a gentle effect on the digestive system and is often enjoyed as a calming evening drink.',
  'protein': 'Our Pro² Protein Kefir contains 28g of protein per serving and comes in delicious flavors like Banana+Vanilla and Cherry. It\'s perfect for fitness enthusiasts and active lifestyles.',
  'where': 'You can find Detelina Dairy products in major supermarkets across Cyprus, including Alpha-Mega, Metro, and Papantoniou. We also sell directly from our factory store in Limassol.',
  'benefit': 'Our fermented dairy products are rich in probiotics that support gut health, boost immunity, and improve digestion. They\'re also excellent sources of protein, calcium, and essential vitamins.',
  'price': 'Prices vary by product and size. Our standard Kefir bottles start around €2.20, while specialty products like our Pro² Protein Kefir are priced from €3.30. For current pricing, please check with your local retailer.',
  'address': 'Our factory is located at Akademias 2, Ypsonas, Limassol, Cyprus.',
  'contact': 'You can contact us at +357 25 715450 or email info@detelina-dairy.com. Our customer service is available Monday to Friday, 8:00 AM to 5:00 PM.',
  'probiotics': 'Probiotics are beneficial bacteria that support gut health. Our fermented dairy products are natural sources of these helpful microorganisms, contributing to better digestion and a stronger immune system.',
  'allergies': 'Our products contain milk. If you have lactose intolerance, our Kefir might be easier to digest as the fermentation process reduces lactose content, but please consult with your healthcare provider.',
  'recipe': 'We have many traditional recipes using our products! Try making syrniki (cheese pancakes) with our Tvorog, or use Smetana in borscht. Visit our website\'s recipe section for detailed instructions.',
  'thank': 'You\'re welcome! Is there anything else I can help you with?',
  'thanks': 'You\'re welcome! Is there anything else I can help you with?',
  'bye': 'Thank you for chatting with us! Feel free to return anytime you have questions about Detelina Dairy products.'
};

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
    const lowerCaseMessage = userMessage.toLowerCase();
    
    // Check for keyword matches
    for (const keyword in predefinedResponses) {
      if (lowerCaseMessage.includes(keyword)) {
        return predefinedResponses[keyword];
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
