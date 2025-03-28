import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

const WelcomeScreen = ({ onFinish }: { onFinish: () => void }) => {
  const [fadingOut, setFadingOut] = useState(false);
  const [typedText, setTypedText] = useState('');
  const fullText = 'Naturally Fermented Dairy Since 1995';

  const handleEnter = () => {
    setFadingOut(true);
    setTimeout(onFinish, 1000);
  };

  // Auto-skip after 5 seconds
  useEffect(() => {
    const auto = setTimeout(handleEnter, 5000);
    return () => clearTimeout(auto);
  }, []);

  // Typewriter effect
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={clsx(
        'fixed inset-0 z-50 bg-black text-white flex flex-col items-center justify-center transition-opacity duration-1000',
        fadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      )}
    >
      {/* Language Selector */}
      <div className="absolute top-6 right-8 text-sm text-white/80 space-x-3">
        <button className="hover:text-white transition-colors">EN</button>
        <span>|</span>
        <button className="hover:text-white transition-colors">GR</button>
        <span>|</span>
        <button className="hover:text-white transition-colors">RU</button>
      </div>

      {/* Animated Logo */}
      <motion.img
        src="/lovable-uploads/DETELINA LOGO 2025 white-02.png"
        alt="Detelina Logo"
        className="w-[580px] lg:w-[700px] mb-6"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Animated Tagline */}
      <motion.p
        className="text-white text-xl md:text-2xl font-light mb-10 min-h-[2rem]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        {typedText}
      </motion.p>

      {/* Enter Button with hover effects */}
      <motion.button
        onClick={handleEnter}
        className="px-6 py-3 text-lg bg-white text-black rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl hover:ring hover:ring-white/20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
      >
        Enter
      </motion.button>
    </div>
  );
};

export default WelcomeScreen;
