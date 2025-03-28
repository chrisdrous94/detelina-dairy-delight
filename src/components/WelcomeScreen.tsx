import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';

const WelcomeScreen = ({ onFinish }: { onFinish: () => void }) => {
  const [fadingOut, setFadingOut] = useState(false);
  const [dropCount, setDropCount] = useState(0);

  const handleEnter = () => {
    setFadingOut(true);
    setTimeout(onFinish, 1000);
  };

  useEffect(() => {
    const auto = setTimeout(handleEnter, 5000);
    return () => clearTimeout(auto);
  }, []);

  useEffect(() => {
    if (dropCount < 2) {
      const dropTimeout = setTimeout(() => setDropCount((c) => c + 1), 1500);
      return () => clearTimeout(dropTimeout);
    }
  }, [dropCount]);

  return (
    <div
      className={clsx(
        'fixed inset-0 z-50 bg-black text-white flex flex-col items-center justify-center transition-opacity duration-1000 overflow-hidden',
        fadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      )}
    >
      {/* Language selector */}
      <div className="absolute top-6 right-6 text-sm text-white/80 space-x-2 z-10">
        <button className="hover:text-white">EN</button>
        <span>|</span>
        <button className="hover:text-white">GR</button>
        <span>|</span>
        <button className="hover:text-white">RU</button>
      </div>

      {/* Milk drop and ripple animation */}
      <AnimatePresence>
        {dropCount < 2 && (
          <>
            {/* Milk drop */}
            <motion.svg
              key={`drop-${dropCount}`}
              className="absolute top-0 left-1/2 -translate-x-1/2"
              width="24"
              height="36"
              viewBox="0 0 24 36"
              xmlns="http://www.w3.org/2000/svg"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 180, opacity: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 1, ease: 'easeInOut' }}
              style={{ zIndex: 5 }}
            >
              <path
                d="M12 0C12 0 0 15 0 24C0 31.1797 5.37258 36 12 36C18.6274 36 24 31.1797 24 24C24 15 12 0 12 0Z"
                fill="white"
              />
            </motion.svg>

            {/* Ripple effect */}
            <motion.div
              key={`ripple-${dropCount}`}
              className="absolute top-[185px] left-1/2 -translate-x-1/2 rounded-full pointer-events-none"
              initial={{ scale: 0.2, opacity: 0.4, filter: 'blur(0px)' }}
              animate={{ scale: 3, opacity: 0, filter: 'blur(4px)' }}
              transition={{ duration: 1, ease: 'easeOut', delay: 1 }}
              style={{
                width: '50px',
                height: '50px',
                backgroundColor: 'rgba(255, 255, 255, 0.15)',
                zIndex: 3,
              }}
            />
          </>
        )}
      </AnimatePresence>

      {/* Logo */}
      <motion.img
        src="/lovable-uploads/DETELINA LOGO 2025 white-02.png"
        alt="Detelina Logo"
        className="w-[580px] lg:w-[700px] mb-6"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Tagline */}
      <motion.p
        className="text-white text-xl md:text-2xl font-light mb-10"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        Naturally Fermented Dairy Since 1995
      </motion.p>

      {/* Enter button */}
      <motion.button
        onClick={handleEnter}
        className="px-6 py-3 text-lg bg-white text-black rounded-full hover:scale-105 hover:shadow-xl hover:ring hover:ring-white/20 transition-all duration-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        Enter
      </motion.button>
    </div>
  );
};

export default WelcomeScreen;
