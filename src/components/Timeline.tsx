import { motion } from 'framer-motion';
import { useRef } from 'react';

interface TimelineEventProps {
  year: string;
  title: string;
  description: string;
  image?: string;
}

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

const TimelineSection = ({ year, title, description, image }: TimelineEventProps) => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background image */}
      {image && (
        <motion.div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: `url(${image})` }}
          initial={{ scale: 1.1, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 0.4 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        />
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />

      {/* Content */}
      <motion.div
        className="relative z-20 h-full flex flex-col justify-center items-center text-center text-white px-6"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <motion.span
          className="text-sm md:text-base bg-primary text-white px-4 py-1 rounded-full mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {year}
        </motion.span>
        <motion.h2 className="text-4xl md:text-5xl font-bold font-playfair mb-4 max-w-3xl">
          {title}
        </motion.h2>
        <motion.p className="text-lg max-w-2xl text-gray-200 leading-relaxed">
          {description}
        </motion.p>
      </motion.div>
    </section>
  );
};

const TimelineCinematic = () => {
  return (
    <main className="w-full">
      {events.map((event, idx) => (
        <TimelineSection key={idx} {...event} />
      ))}
    </main>
  );
};

export default TimelineCinematic;
