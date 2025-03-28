import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface Event {
  year: string
  title: string
  description: string
}

const events: Event[] = [
  {
    year: '1995',
    title: 'Founding of Detelina Dairy',
    description: 'Detelina Dairy was founded by Costas Christou to bring naturally fermented dairy made with local Cyprus milk to life.',
  },
  {
    year: '1996',
    title: 'First Product Line Launch',
    description: 'Kefir and Tvorog enter the market — a milestone that introduced our unique flavors to Cypriot families.',
  },
  {
    year: '2004',
    title: 'EU Expansion',
    description: 'Expanded facilities and aligned with EU food safety standards.',
  },
  {
    year: '2024',
    title: 'Tvorog 250g',
    description: 'Now available in a convenient new size for all households.',
  },
  {
    year: '2025',
    title: 'Launch of Pro²',
    description: 'High-performance kefir enriched with natural protein.',
  },
]

export default function MorphingMilkTimeline() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end end"] })
  const path1 = "M100,0 Q100,150 100,300 Q100,450 100,600"
  const path2 = "M100,0 Q130,180 100,300 Q70,420 100,600"
  const path3 = "M100,0 Q90,180 110,300 Q130,420 100,600"
  const morph = useTransform(scrollYProgress, [0, 0.5, 1], [path1, path2, path3])

  return (
    <section ref={containerRef} className="relative bg-white min-h-[200vh] py-32 overflow-hidden">
      {/* SVG Morphing Line */}
      <svg className="absolute left-1/2 -translate-x-1/2 top-0 h-full w-64 z-0 pointer-events-none" viewBox="0 0 200 600" fill="none">
        <motion.path
          stroke="#c0e0ff"
          strokeWidth="4"
          strokeLinecap="round"
          d={path1}
          animate={{ d: morph }}
        />
      </svg>

      {/* Timeline Events */}
      <div className="relative z-10 container mx-auto px-6 md:px-16">
        {events.map((event, index) => (
          <div key={index} className={`relative flex flex-col md:flex-row items-center gap-6 py-24 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
            <div className="w-full md:w-1/2 text-center md:text-left">
              <div className="inline-block mb-2 px-3 py-1 text-xs font-semibold bg-primary/10 text-primary rounded-full">
                {event.year}
              </div>
              <h3 className="text-2xl font-bold font-playfair text-gray-800">{event.title}</h3>
              <p className="text-gray-600 mt-2">{event.description}</p>
            </div>
            <div className="w-4 h-4 rounded-full bg-primary border-4 border-white shadow-lg z-10" />
          </div>
        ))}
      </div>
    </section>
  )
}
