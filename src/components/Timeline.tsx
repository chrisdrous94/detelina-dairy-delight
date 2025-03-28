import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

interface TimelineEvent {
  year: string
  title: string
  description: string
  image?: string
}

const events: TimelineEvent[] = [
  {
    year: '1995',
    title: 'Founding of Detelina Dairy',
    description: 'Detelina Dairy was founded by Costas Christou to bring naturally fermented dairy made with local Cyprus milk to life.',
    image: '/lovable-uploads/grandma-old-factory.jpg',
  },
  {
    year: '1996',
    title: 'First Product Line Launch',
    description: 'Kefir and Tvorog enter the market — a milestone that introduced our unique flavors to Cypriot families.',
    image: '/lovable-uploads/product-line-first.jpg',
  },
  {
    year: '2004',
    title: 'Facility Expansion & EU Alignment',
    description: 'We expanded our factory in Limassol and aligned production with EU food safety regulations.',
    image: '/lovable-uploads/new-factory-building.jpg',
  },
  {
    year: '2015',
    title: 'A Fresh New Look',
    description: 'Our packaging got a modern refresh — a new design that honored tradition and highlighted our quality.',
    image: '/lovable-uploads/product-line-first.jpg',
  },
  {
    year: '2024',
    title: 'Tvorog, Now in 250g',
    description: 'Our signature cottage cheese is now available in a smaller, more convenient size for every household.',
    image: '/lovable-uploads/tvorog-250g.png',
  },
  {
    year: '2025',
    title: 'Launch of Pro² Protein Line',
    description: 'We introduced our protein-enriched kefir line, blending high performance with natural fermentation.',
    image: '/lovable-uploads/pro²-protein-kefir-black-font.jpg',
  },
]

export default function ElegantTimelineCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeEvent = events[activeIndex]

  return (
    <section className="bg-white py-24 px-6 md:px-12 lg:px-20" id="our-history">
      <div className="max-w-4xl mx-auto text-center mb-16">
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

      <div className="max-w-5xl mx-auto space-y-10">
        {/* Main Card */}
        <div className="relative min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
            >
              <div className="space-y-4 text-center md:text-left">
                <div className="inline-block px-4 py-1 bg-detelina-green/10 text-detelina-green text-xs font-medium rounded-full">
                  {activeEvent.year}
                </div>
                <h3 className="text-2xl font-playfair font-bold text-gray-800">{activeEvent.title}</h3>
                <p className="text-gray-600 text-base leading-relaxed">{activeEvent.description}</p>
              </div>
              {activeEvent.image && (
                <div className="overflow-hidden rounded-xl">
                  <img
                    src={activeEvent.image}
                    alt={activeEvent.title}
                    className="w-full h-auto object-cover rounded-xl transition-transform duration-500 hover:scale-105"
                  />
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Year Slider */}
        <div className="flex justify-center flex-wrap gap-3 pt-4">
          {events.map((event, index) => (
            <button
              key={event.year}
              onClick={() => setActiveIndex(index)}
              className={`text-sm px-4 py-1 rounded-full border transition ${
                index === activeIndex
                  ? 'bg-detelina-green text-white border-detelina-green'
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-detelina-green hover:text-white'
              }`}
            >
              {event.year}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
