import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useScroll } from 'framer-motion';

interface TimelineEventProps {
  year: string;
  title: string;
  description: string;
  image?: string;
}

const TimelineEvent = ({ year, title, description, image }: TimelineEventProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <motion.div
      ref={ref}
      className="relative flex flex-col lg:flex-row items-center gap-10 py-12 border-t border-gray-200"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      {/* Animated dot */}
      <motion.div
        className="absolute left-1 top-12 w-4 h-4 rounded-full bg-primary z-10 border-2 border-white shadow-lg"
        animate={isInView ? { scale: [0.7, 1.2, 1] } : { scale: 0.7 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      />

      <div className="w-full lg:w-1/2 space-y-4 text-center lg:text-left">
        <div className="inline-block px-4 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
          {year}
        </div>
        <h3 className="text-2xl font-playfair font-bold text-gray-800">{title}</h3>
        <p className="text-gray-600 text-base leading-relaxed">{description}</p>
      </div>

      {image && (
        <div className="w-full lg:w-1/2 overflow-hidden rounded-xl">
          {!imageLoaded && <div className="aspect-video bg-gray-100 shimmer" />}
          <img
            src={image}
            alt={title}
            className={`w-full h-auto object-cover rounded-xl transition-transform duration-500 hover:scale-105 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
            loading="lazy"
            decoding="async"
            onLoad={() => setImageLoaded(true)}
          />
        </div>
      )}
    </motion.div>
  );
};

const Timeline = () => {
  const events: TimelineEventProps[] = [
    {
      year: '1995',
      title: 'Founding of Detelina Dairy',
      description: 'Detelina Dairy was founded by Costas Christou to bring naturally fermented dairy made with local Cyprus milk to life.',
      image: '/lovable-uploads/grandma-old-factory.jpg'
    },
    {
      year: '1996',
      title: 'First Product Line Launch',
      description: 'Kefir and Tvorog enter the market — a milestone that introduced our unique flavors to Cypriot families.',
      image: '/lovable-uploads/product-line-first.jpg'
    },
    {
      year: '2004',
      title: 'Facility Expansion & EU Alignment',
      description: 'We expanded our factory in Limassol and aligned production with EU food safety regulations.',
      image: '/lovable-uploads/new-factory-building.jpg'
    },
    {
      year: '2015',
      title: 'A Fresh New Look',
      description: 'Our packaging got a modern refresh — a new design that honored tradition and highlighted our quality.',
      image: '/lovable-uploads/old-detelina-products.png'
    },
    {
      year: '2024',
      title: 'Tvorog, Now in 250g',
      description: 'Our signature cottage cheese is now available in a smaller, more convenient size for every household.',
      image: '/lovable-uploads/tvorog-250g.png'
    },
    {
      year: '2025',
      title: 'Launch of Pro² Protein Line',
      description: 'We introduced our protein-enriched kefir line, blending high performance with natural fermentation.',
      image: '/lovable-uploads/pro²-protein-kefir-black-font.jpg'
    }
  ];

  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: timelineRef });
  const [activeIndex, setActiveIndex] = useState(0);

  // Intersection Observer for detecting active events
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('data-index');
            if (id !== null) setActiveIndex(Number(id));
          }
        });
      },
      { threshold: 0.5 }
    );

    const items = document.querySelectorAll('[data-index]');
    items.forEach((item) => observer.observe(item));

    return () => {
      items.forEach((item) => observer.unobserve(item));
    };
  }, []);

  return (
    <section className="relative py-24 bg-white" id="our-history" ref={timelineRef}>
      {/* Scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 h-1 bg-primary z-50"
        style={{ scaleX: scrollYProgress, transformOrigin: 'left' }}
      />

      {/* Floating year navigation */}
      <div className="hidden lg:flex fixed top-1/2 right-6 -translate-y-1/2 flex-col gap-2 z-40">
        {events.map((event, index) => (
          <a
            key={index}
            href={`#event-${index}`}
            className={`text-xs px-3 py-1 rounded-full border transition ${
              activeIndex === index
                ? 'bg-primary text-white border-primary'
                : 'bg-white border-gray-300 text-gray-700 hover:bg-primary hover:text-white'
            }`}
          >
            {event.year}
          </a>
        ))}
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <span className="inline-block px-3 py-1 mb-4 bg-primary/10 text-primary text-sm font-medium rounded-full">
            Our Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-4">
            The Detelina Dairy Timeline
          </h2>
          <p className="text-gray-600 text-lg">
            Every step shaped by family, Cyprus tradition, and real dairy culture.
          </p>
        </div>

        <div className="relative before:absolute before:left-3 before:top-0 before:bottom-0 before:w-1 before:bg-primary/20 before:rounded-full">
          <div className="space-y-16 pl-8">
            {events.map((event, index) => (
              <div key={index} id={`event-${index}`} data-index={index}>
                <TimelineEvent {...event} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
