import { useRef, useState } from 'react'
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

export default function ScrollableTimeline() {
  const [activeIndex, setActiveIndex] = useState(0)

  // Scroll animation settings
  const scrollRef = useRef(null)

  return (
    <section className="relative py-24 bg-white min-h-[200vh]" ref={scrollRef}>
      <div className="max-w-5xl mx-auto text-center mb-16">
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
        <div className="space-y-16">
          {events.map((event, index) => (
            <div
              key={index}
              className="relative flex flex-col md:flex-row items-center gap-10 py-16"
              style={{
                transform: `translateY(${activeIndex === index ? '0' : '-100px'})`,
                opacity: activeIndex === index ? 1 : 0.5,
                transition: 'all 0.5s ease-out',
              }}
            >
              <div className="space-y-4 text-center md:text-left">
                <div className="inline-block px-4 py-1 bg-detelina-green/10 text-detelina-green text-xs font-medium rounded-full">
                  {event.year}
                </div>
                <h3 className="text-2xl font-playfair font-bold text-gray-800">
                  {event.title}
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">{event.description}</p>
              </div>
              {event.image && (
                <div className="overflow-hidden rounded-xl">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-auto object-cover rounded-xl transition-transform duration-500 hover:scale-105"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Floating Year Navigation (Optional) */}
      <div className="fixed top-1/2 left-6 transform -translate-y-1/2 flex flex-col gap-2 z-40">
        {events.map((event, index) => (
          <button
            key={event.year}
            onClick={() => setActiveIndex(index)}
            className={`text-xs px-3 py-1 rounded-full border transition ${
              activeIndex === index
                ? 'bg-detelina-green text-white border-detelina-green'
                : 'bg-white text-gray-700 border-gray-300 hover:bg-detelina-green hover:text-white'
            }`}
          >
            {event.year}
          </button>
        ))}
      </div>
    </section>
  )
}
