import { useEffect, useState } from 'react';
import clsx from 'clsx';

const WelcomeScreen = ({ onFinish }: { onFinish: () => void }) => {
  const [fadingOut, setFadingOut] = useState(false);

  const handleEnter = () => {
    setFadingOut(true);
    setTimeout(onFinish, 1000); // wait for animation to finish
  };

  useEffect(() => {
    const auto = setTimeout(handleEnter, 5000); // optional auto skip
    return () => clearTimeout(auto);
  }, []);

  return (
    <div
      className={clsx(
        'fixed inset-0 z-50 bg-black text-white flex flex-col items-center justify-center transition-opacity duration-1000',
        fadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      )}
    >
      <img
        src="/lovable-uploads/DETELINA LOGO 2025 white-02.png"
        alt="Detelina Logo"
        className="w-[580px] lg:w-[700px] animate-zoom-in mb-12"
      />
      <button
        onClick={handleEnter}
        className="px-6 py-3 text-lg bg-white text-black rounded-full hover:scale-105 hover:shadow-lg transition-all duration-300"
      >
        Enter
      </button>
    </div>
  );
};

export default WelcomeScreen;
