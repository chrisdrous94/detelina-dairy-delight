
import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

interface TimelineEventProps {
  year: string;
  title: string;
  description: string;
  image?: string;
  side: 'left' | 'right';
}

const TimelineEvent = ({ year, title, description, image, side }: TimelineEventProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });
  const controls = useAnimation();
  const [imageLoaded, setImageLoaded] = useState(!image);

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const contentVariants = {
    hidden: { 
      opacity: 0, 
      x: side === 'left' ? -50 : 50 
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1] 
      }
    }
  };

  return (
    <div ref={ref} className={`flex flex-col md:flex-row items-center md:items-start gap-4 w-full my-8 ${side === 'right' ? 'md:flex-row-reverse' : ''}`}>
      {/* Year display */}
      <div className="w-full md:w-1/12 md:p-4 flex justify-center md:justify-end">
        <motion.div 
          className="text-3xl font-bold text-primary flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.5 }}
        >
          {year}
        </motion.div>
      </div>
      
      {/* Line */}
      <div className="hidden md:flex items-center justify-center">
        <div className="w-px h-full bg-gray-300 relative">
          <motion.div 
            className="absolute w-3 h-3 rounded-full bg-primary top-0 left-1/2 transform -translate-x-1/2"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          />
        </div>
      </div>
      
      {/* Content */}
      <motion.div 
        className={`w-full md:w-5/12 p-4 bg-white rounded-xl shadow-sm ${side === 'left' ? 'md:ml-8' : 'md:mr-8'}`}
        variants={contentVariants}
        initial="hidden"
        animate={controls}
      >
        <h3 className="text-xl font-bold mb-2 font-playfair">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        {image && (
          <div className="overflow-hidden rounded-lg bg-gray-100">
            {!imageLoaded && (
              <div className="aspect-video bg-gray-100 shimmer" />
            )}
            <img 
              src={image} 
              alt={title} 
              className={`w-full h-auto object-cover transition-transform hover:scale-105 duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
              loading="lazy"
              decoding="async"
              onLoad={() => setImageLoaded(true)}
            />
          </div>
        )}
      </motion.div>
    </div>
  );
};

const Timeline = () => {
  const timelineRef = useRef(null);
  const isInView = useInView(timelineRef, { once: false, amount: 0.1 });

  const events: TimelineEventProps[] = [
    {
      year: '1995',
      title: 'Founding of Detelina Dairy',
      description: 'Detelina Dairy was established in Cyprus by Eastern European dairy experts with a vision to bring authentic fermented dairy products to the local market.',
      image: '/lovable-uploads/grandma old factory.jpg',
      side: 'left'
    },
    {
      year: '2008',
      title: 'First Product Line Launch',
      description: 'Launched our first line of products featuring Kefir and Tvorog, introducing Cypriots to traditional Eastern European dairy delicacies.',
      image: '/lovable-uploads/f862d90f-8abe-4fa3-91f9-24259a0cc277.png',
      side: 'right'
    },
    {
      year: '2012',
      title: 'Expansion of Production Facility',
      description: 'Expanded our production facility in Limassol to meet growing demand, increasing our capacity and introducing new product lines.',
      image: '/lovable-uploads/f83402e5-1e4f-4ac9-839d-9ef501da7c9f.png',
      side: 'left'
    },
    {
      year: '2015',
      title: 'Introduction of Pro² Protein Line',
      description: 'Developed and launched our innovative Pro² protein kefir line, targeting fitness enthusiasts and health-conscious consumers.',
      image: '/lovable-uploads/7abd7e0b-a875-459f-8832-f6ddc829be89.png',
      side: 'right'
    },
    {
      year: '2019',
      title: 'Island-wide Distribution',
      description: 'Achieved island-wide distribution across Cyprus, making Detelina products available in major supermarkets and specialty stores.',
      side: 'left'
    },
    {
      year: '2023',
      title: 'New Flavored Varieties',
      description: 'Expanded our product range with new flavored varieties, including strawberry kefir and innovative seasonal offerings.',
      image: '/lovable-uploads/985b2576-dab1-4283-8c2e-923d2a1b6e3a.png',
      side: 'right'
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
            Tracing our path from humble beginnings to becoming Cyprus' leading Eastern European dairy producer.
          </p>
        </div>
        
        <div 
          ref={timelineRef}
          className="relative pb-12"
        >
          {/* Vertical timeline line for desktop */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gray-300 top-0">
            <motion.div 
              className="absolute top-0 bottom-0 left-0 right-0 bg-primary"
              initial={{ scaleY: 0, originY: 0 }}
              animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </div>
          
          {/* Events */}
          <div className="space-y-12">
            {events.map((event, index) => (
              <TimelineEvent key={index} {...event} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
