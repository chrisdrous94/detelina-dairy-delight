
import { useState, useRef, useEffect } from 'react';
import { Send, X, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { marked } from 'marked';

// Sample FAQ data
const faqData = [
  {
    question: "What makes Detelina Dairy products unique?",
    answer: "Detelina Dairy products are made using authentic Eastern European recipes with natural fermentation processes. We maintain traditional methods while ensuring high-quality standards."
  },
  {
    question: "Are your products suitable for people with lactose intolerance?",
    answer: "Many of our fermented products like kefir have reduced lactose content due to the fermentation process, making them easier to digest for some people with mild lactose intolerance. However, individual responses may vary."
  },
  {
    question: "Where can I buy Detelina Dairy products?",
    answer: "Our products are available in selected supermarkets across Cyprus including Papantoniou, AlphaMega, Metro, and Sklavenitis. You can also purchase directly from our factory store in Limassol."
  },
  {
    question: "Do your products contain preservatives?",
    answer: "No, we pride ourselves on making all-natural dairy products without artificial preservatives, colors, or flavors. The natural fermentation process helps preserve our products."
  },
  {
    question: "What is kefir and what are its benefits?",
    answer: "Kefir is a fermented milk drink that originates from Eastern Europe. It's rich in probiotics that support gut health, boost the immune system, and may improve digestion. It's also a good source of protein, calcium, and B vitamins."
  },
  {
    question: "How long do your products stay fresh?",
    answer: "Our products have a shelf life of 3-4 weeks when properly refrigerated. Always check the expiration date on the packaging and keep products refrigerated at 2-6°C."
  },
  {
    question: "What is tvorog and how can I use it?",
    answer: "Tvorog is a fresh farmer's cheese similar to cottage cheese but with a drier consistency. It's versatile and can be used in both sweet and savory dishes. Try it with honey and fruits for breakfast, use it in cheesecakes, or make traditional Eastern European dishes like syrniki (cheese pancakes)."
  },
  {
    question: "Are your products pasteurized?",
    answer: "Yes, all our milk is pasteurized before the fermentation process to ensure safety while preserving the ability to culture beneficial bacteria during fermentation."
  }
];

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{type: 'user' | 'bot', content: string}[]>([
    {type: 'bot', content: 'Hello! I\'m Detelina\'s assistant. How can I help you today with information about our dairy products?'}
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isThinking, setIsThinking] = useState(false);
  const messageEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Function to find answer from FAQ data
  const findAnswer = (question: string) => {
    const lowerQuestion = question.toLowerCase();
    
    // Score each FAQ question based on keyword matches
    const scoredFaqs = faqData.map(faq => {
      const faqLower = faq.question.toLowerCase();
      let score = 0;
      
      // Split user question into words
      const userWords = lowerQuestion.split(/\s+/).filter(word => word.length > 3);
      
      // Count matching words
      userWords.forEach(word => {
        if (faqLower.includes(word)) score += 1;
      });
      
      return { ...faq, score };
    });
    
    // Sort by score and get the highest
    const bestMatch = scoredFaqs.sort((a, b) => b.score - a.score)[0];
    
    // If the score is too low, return a generic response
    if (bestMatch.score < 1) {
      return "I'm not sure I understand your question. Could you please rephrase or ask about our products, where to buy them, or their benefits?";
    }
    
    return bestMatch.answer;
  };

  const handleSendMessage = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    
    if (inputValue.trim() === '') return;
    
    // Add user message
    const userMessage = inputValue.trim();
    setMessages(prev => [...prev, {type: 'user', content: userMessage}]);
    setInputValue('');
    setIsThinking(true);
    
    // Simulate processing time for more natural interaction
    setTimeout(() => {
      const botResponse = findAnswer(userMessage);
      setMessages(prev => [...prev, {type: 'bot', content: botResponse}]);
      setIsThinking(false);
    }, 600);
  };

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  
  // Focus input when chat opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  // Prevent body scroll when chat is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);
  
  // Render markdown in bot messages
  const renderMarkdown = (content: string) => {
    return { __html: marked.parse(content) };
  };

  return (
    <>
      {/* Chat toggle button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-primary text-white p-4 rounded-full shadow-lg hover:bg-primary-dark transition-colors z-50"
        aria-label="Open chat"
      >
        <MessageSquare className="h-6 w-6" />
      </button>
      
      {/* Chat modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              className="bg-white rounded-xl shadow-xl w-full max-w-md h-[80vh] flex flex-col overflow-hidden"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Chat header */}
              <div className="px-4 py-3 bg-primary text-white flex justify-between items-center">
                <h3 className="font-semibold">Detelina Dairy Assistant</h3>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-1 rounded-full hover:bg-white/20 transition-colors"
                  aria-label="Close chat"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              
              {/* Chat messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] p-3 rounded-lg ${
                        message.type === 'user'
                          ? 'bg-primary text-white rounded-tr-none'
                          : 'bg-gray-100 text-gray-800 rounded-tl-none'
                      }`}
                    >
                      {message.type === 'bot' ? (
                        <div dangerouslySetInnerHTML={renderMarkdown(message.content)} className="markdown" />
                      ) : (
                        <p>{message.content}</p>
                      )}
                    </div>
                  </div>
                ))}
                
                {isThinking && (
                  <div className="flex justify-start">
                    <div className="bg-gray-100 text-gray-800 p-3 rounded-lg rounded-tl-none max-w-[80%]">
                      <div className="flex space-x-2">
                        <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0ms' }}></div>
                        <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '150ms' }}></div>
                        <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '300ms' }}></div>
                      </div>
                    </div>
                  </div>
                )}
                
                <div ref={messageEndRef} />
              </div>
              
              {/* Input area */}
              <form onSubmit={handleSendMessage} className="p-3 border-t border-gray-200">
                <div className="flex space-x-2">
                  <input
                    ref={inputRef}
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Type your question..."
                    className="flex-1 border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <button
                    type="submit"
                    className="bg-primary text-white p-2 rounded-full hover:bg-primary-dark transition-colors"
                    disabled={isThinking}
                    aria-label="Send message"
                  >
                    <Send className="h-5 w-5" />
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <style>
        {`
          .markdown > * {
            margin-bottom: 0.5rem;
          }
          .markdown a {
            color: #3b82f6;
            text-decoration: underline;
          }
        `}
      </style>
    </>
  );
};

export default Chatbot;
