'use client'

import { motion, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

interface Metric {
  value: string
  label: string
  countUp?: {
    start: number
    end: number
    suffix?: string
  }
}

const metrics: Metric[] = [
  {
    value: '50M',
    label: 'Training Hours',
    countUp: { start: 0, end: 50, suffix: 'M' }
  },
  {
    value: '91%',
    label: 'Prediction Accuracy',
    countUp: { start: 0, end: 91, suffix: '%' }
  },
  {
    value: '10+',
    label: 'Patents Filed',
    countUp: { start: 0, end: 10, suffix: '+' }
  },
  {
    value: '24-48 hrs',
    label: 'Early Warning Average',
  }
]

// Placeholder partner logos (replace with actual logos later)
const partnerLogos = [
  'Partner 1',
  'Partner 2',
  'Partner 3',
  'Partner 4',
  'Partner 5',
  'Partner 6',
  'Partner 7',
  'Partner 8',
]

const CountUpNumber = ({ end, suffix = '', duration = 2 }: { end: number; suffix?: string; duration?: number }) => {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true)
      const startTime = Date.now()
      const endTime = startTime + duration * 1000

      const updateCount = () => {
        const now = Date.now()
        const progress = Math.min((now - startTime) / (endTime - startTime), 1)
        const easeOutQuad = 1 - Math.pow(1 - progress, 3)
        const currentCount = Math.floor(easeOutQuad * end)

        setCount(currentCount)

        if (progress < 1) {
          requestAnimationFrame(updateCount)
        } else {
          setCount(end)
        }
      }

      requestAnimationFrame(updateCount)
    }
  }, [isInView, end, duration, hasAnimated])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}

const SocialProof = () => {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: '-100px' })

  return (
    <section className="relative py-20 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Headline */}
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-voltry-navy mb-4">
            Proven at Scale
          </h2>
        </motion.div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-voltry-blue mb-4">
                {metric.countUp ? (
                  <CountUpNumber end={metric.countUp.end} suffix={metric.countUp.suffix} />
                ) : (
                  metric.value
                )}
              </div>
              <p className="text-lg text-gray-600 font-medium">{metric.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-xl text-gray-600 font-medium">
            Trusted by leaders in critical infrastructure
          </p>
        </motion.div>

        {/* Partner Logo Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="relative overflow-hidden"
        >
          <div className="flex animate-[scroll_30s_linear_infinite]">
            {/* Duplicate the logos for seamless loop */}
            {[...partnerLogos, ...partnerLogos].map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-40 h-24 mx-8 flex items-center justify-center"
              >
                <div className="w-full h-full rounded-lg bg-gray-200 flex items-center justify-center text-gray-400 font-semibold grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110 cursor-pointer">
                  {logo}
                </div>
              </div>
            ))}
          </div>

          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent pointer-events-none" />
        </motion.div>
      </div>

      {/* Add custom scrolling animation to tailwind config if needed */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  )
}

export default SocialProof
