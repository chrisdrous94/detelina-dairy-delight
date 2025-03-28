import { useEffect, useState } from 'react';
import clsx from 'clsx';
import './milkDrop.css';

const WelcomeScreen = ({ onFinish }: { onFinish: () => void }) => {
  const [fadingOut, setFadingOut] = useState(false);

  const handleEnter = () => {
    setFadingOut(true);
    setTimeout(onFinish, 1000);
  };

  useEffect(() => {
    const auto = setTimeout(handleEnter, 5000);
    return () => clearTimeout(auto);
  }, []);

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

      {/* Realistic milk drop animation from CodePen */}
      <div className="drip-wrap">
        <div className="drip" />
      </div>

      {/* Logo */}
      <img
        src="/lovable-uploads/DETELINA LOGO 2025 white-02.png"
        alt="Detelina Logo"
        className="w-[580px] lg:w-[700px] mb-6"
      />

      {/* Tagline */}
      <p className="text-white text-xl md:text-2xl font-light mb-10">
        Naturally Fermented Dairy Since 1995
      </p>

      {/* Enter button */}
      <button
        onClick={handleEnter}
        className="px-6 py-3 text-lg bg-white text-black rounded-full hover:scale-105 hover:shadow-xl hover:ring hover:ring-white/20 transition-all duration-300"
      >
        Enter
      </button>
    </div>
  );
};

export default WelcomeScreen;
