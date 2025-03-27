
import { useState, useEffect, useRef } from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Images with preloading - using proper paths
const heroImages = [
  '/lovable-uploads/6f6222f5-7512-4eff-ba92-a82f28b5d78b.png',
  '/lovable-uploads/2a26b134-2724-4bd1-8093-788f23e215b0.png',
  '/lovable-uploads/5de99ef6-bb87-44a5-8018-8a78cd7eaf0b.png',
];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState<boolean[]>([false, false, false]);
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  
  // Track visibility for performance 
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    
    if (heroRef.current) {
      observer.observe(heroRef.current);
    }
    
    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  // Preload images with priority
  useEffect(() => {
    const imagePromises = heroImages.map((src, index) => {
      return new Promise<boolean>((resolve) => {
        const img = new Image();
        
        // Add loading priority
        if (index === 0) {
          img.fetchPriority = 'high';
        }
        
        img.src = src;
        img.onload = () => {
          setImagesLoaded(prev => {
            const newState = [...prev];
            newState[index] = true;
            return newState;
          });
          resolve(true);
        };
        img.onerror = () => resolve(false);
      });
    });

    Promise.all(imagePromises);
  }, []);

  // Only auto-rotate images when the component is visible
  useEffect(() => {
    if (!isVisible) return;
    
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isVisible]);

  const allImagesLoaded = imagesLoaded.every(loaded => loaded);

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background image with optimized loading */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              currentImage === index ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url(${img})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'brightness(0.8)',
            }}
            aria-hidden="true"
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
      </div>

      {/* Content - only animate when images are loaded */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`max-w-2xl transition-opacity duration-700 ${allImagesLoaded ? 'opacity-100' : 'opacity-0'}`}>
          <span className="inline-block px-3 py-1 mb-4 bg-white/10 backdrop-blur-sm text-white text-sm font-medium rounded-full">
            Tradition in Every Drop
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
            Eastern European Taste, <br /> Made in Cyprus
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-lg">
            Authentic recipes, natural fermentation, and traditional Eastern European dairy products crafted with passion in small batches.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/products"
              className="inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-full transition-all hover:bg-primary-dark"
            >
              Explore Products
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm text-white font-medium rounded-full transition-all hover:bg-white/30"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator - only show when content is loaded */}
      {allImagesLoaded && (
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
          <div className="flex flex-col items-center">
            <span className="text-white text-sm mb-2">Scroll to discover</span>
            <div className="w-[30px] h-[50px] border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse-soft" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
