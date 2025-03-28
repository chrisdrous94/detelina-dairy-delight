import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

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
      className="relative bg-white rounded-xl shadow-lg p-6 md:p-8 border-l-4 border-primary/80 flex flex-col gap-4"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="absolute -left-[30px] top-6 w-4 h-4 bg-primary rounded-full border-2 border-white shadow" />
      <div className="text-sm text-primary font-semibold tracking-wider">{year}</div>
      <h3 className="text-xl font-bold font-playfair">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
      {image && (
        <div className="overflow-hidden rounded-md">
          {!imageLoaded && <div className="aspect-video bg-gray-100 shimmer" />}
          <img
            src={image}
            alt={title}
            className={`w-full object-cover rounded transition-transform duration-500 hover:scale-105 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
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
      image: '/lovable-uploads/kefir-full-light-and-strawberry-together.jpg'
    },
    {
      year: '2024',
      title: 'Tvorog, Now in 250g',
      description: 'Our signature cottage cheese is now available in a smaller, more convenient size for every household.'
    },
    {
      year: '2025',
      title: 'Launch of Pro² Protein Line',
      description: 'We introduced our protein-enriched kefir line, blending high performance with natural fermentation.',
      image: '/lovable-uploads/protein-kefir-pro2.png'
    }
  ];

  return (
    <section className="py-20 bg-gray-50" id="our-history">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="inline-block px-3 py-1 mb-4 bg-primary/10 text-primary text-sm font-medium rounded-full">
            Our Journey
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-playfair">
            The Detelina Dairy Timeline
          </h2>
          <p className="text-gray-600">
            A walk through our milestones — from a family vision to a Cypriot household favorite.
          </p>
        </div>

        <div className="relative space-y-12 max-w-2xl mx-auto">
          {events.map((event, index) => (
            <TimelineEvent key={index} {...event} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;