import { useState, useEffect } from 'react';

const WelcomeScreen = ({ onFinish }: { onFinish: () => void }) => {
  return (
    <div className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center text-white animate-fade-in">
      <img
        src="/lovable-uploads/DETELINA LOGO 2025 white-02.png"
        alt="Detelina Logo"
        className="w-[320px] md:w-[400px] lg:w-[480px] animate-zoom-in mb-12"
      />
      <button
        onClick={onFinish}
        className="px-6 py-3 bg-white text-black font-medium rounded-full shadow hover:bg-gray-100 transition"
      >
        Enter Site
      </button>
    </div>
  );
};

export default WelcomeScreen;
