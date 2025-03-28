import { useRef, useEffect, useState } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

interface TimelineEventProps {
  year: string;
  title: string;
  description: string;
  image?: string;
}

const TimelineEvent = ({ year, title, description, image }: TimelineEventProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [imageLoaded, setImageLoaded] = useState(!image);

  return (
    <motion.div
      ref={ref}
      className="relative flex flex-col lg:flex-row items-center gap-10 py-16"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <div className="absolute left-[calc(50%-2px)] top-12 w-4 h-4 rounded-full bg-detelina-green z-10 border-2 border-white shadow-lg" />

      <div className="w-full lg:w-1/2 space-y-4 text-center lg:text-left">
        <div className="inline-block px-4 py-1 bg-detelina-green/10 text-detelina-green text-xs font-medium rounded-full">
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
      image: '/lovable-uploads/product-line-first.jpg'
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

  const path1 = "M100,0 Q100,200 100,400 Q100,600 100,800";
  const path2 = "M100,0 Q130,250 80,400 Q70,600 100,800";
  const path3 = "M100,0 Q70,250 120,400 Q130,600 100,800";

  const morph = useTransform(scrollYProgress, [0, 0.5, 1], [path1, path2, path3]);

  return (
    <section className="relative py-24 bg-white" id="our-history" ref={timelineRef}>
      {/* Morphing animated SVG line */}
      <svg className="absolute left-1/2 -translate-x-1/2 top-0 h-full w-64 z-0 pointer-events-none" viewBox="0 0 200 800" fill="none">
        <motion.path
          stroke="#A4D65E" // Direct hex to match detelina.green
          strokeWidth="4"
          strokeLinecap="round"
          d={path1}
          animate={{ d: morph }}
        />
      </svg>

      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <span className="inline-block px-3 py-1 mb-4 bg-detelina-green/10 text-detelina-green text-sm font-medium rounded-full">
            Our Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-4">
            The Detelina Dairy Timeline
          </h2>
          <p className="text-gray-600 text-lg">
            Every step shaped by family, Cyprus tradition, and real dairy culture.
          </p>
        </div>

        <div className="relative z-10">
          {events.map((event, index) => (
            <div key={index} id={`event-${index}`} data-index={index}>
              <TimelineEvent {...event} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
