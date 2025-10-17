'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'

interface Feature {
  title: string
  description: string[]
  cta: {
    text: string
    href: string
  }
  imagePosition: 'left' | 'right'
}

const features: Feature[] = [
  {
    title: 'Electrical. Mechanical. Acoustic. Unified.',
    description: [
      'Multi-domain sensing captures what single-mode systems miss',
      'VoltryCore hardware at $200 per unit',
      'Real-time correlation across voltage, vibration, and sound signatures',
      'Detects failures invisible to traditional monitoring',
    ],
    cta: {
      text: 'Explore VoltryCore',
      href: '/products/voltrycore',
    },
    imagePosition: 'left',
  },
  {
    title: 'Every Facility Makes the Network Smarter',
    description: [
      'Federated learning trains models without exposing your data',
      'Privacy guaranteed - your data never leaves your premises',
      'NERC CIP compliant architecture',
      'Collective intelligence improves accuracy for everyone',
    ],
    cta: {
      text: 'Learn About Privacy',
      href: '/security',
    },
    imagePosition: 'right',
  },
  {
    title: "Don't Just Predict. Prevent.",
    description: [
      'VoltryGuard active control system',
      'Sub-10ms response time to emerging threats',
      'Autonomous intervention before cascading failures',
      'Human-in-the-loop override always available',
    ],
    cta: {
      text: 'See VoltryGuard in Action',
      href: '/products/voltryguard',
    },
    imagePosition: 'left',
  },
]

const FeatureHighlights = () => {
  return (
    <section className="relative py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-32">
          {features.map((feature, index) => (
            <FeatureBlock key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

const FeatureBlock = ({ feature, index }: { feature: Feature; index: number }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const illustrations = [
    '/Illustrations/voltry-illustration-27-waveform-analysis-diagram.png',
    'https://res.cloudinary.com/di54rmpjf/image/upload/v1759978087/Voltry_Media/Extras/voltry-extra-07-electric-grid-neon.png',
    'https://res.cloudinary.com/di54rmpjf/image/upload/v1759978077/Voltry_Media/Extras/voltry-extra-04-blackout-scenario-2.png',
  ]

  const imageContent = (
    <motion.div
      initial={{ opacity: 0, x: feature.imagePosition === 'left' ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: feature.imagePosition === 'left' ? -50 : 50 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="w-full h-full"
    >
      {/* Feature Image Card */}
      <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden group">
        {/* Full Illustration */}
        <img
          src={illustrations[index]}
          alt=""
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />

        {/* Subtle vignette only for feature 3 (blackout scenario) */}
        {index === 2 && (
          <div className="absolute inset-0 bg-gradient-to-t from-voltry-navy/40 via-transparent to-transparent" />
        )}

        {/* Minimal border */}
        <div className="absolute inset-0 border-2 border-voltry-blue/20 rounded-2xl group-hover:border-voltry-blue/40 transition-colors duration-300" />

        {/* Numbered Badge */}
        <div className="absolute top-6 right-6 w-16 h-16 bg-gradient-to-br from-voltry-blue to-voltry-purple rounded-full flex items-center justify-center shadow-2xl shadow-voltry-blue/50 border-4 border-white/30">
          <span className="text-white font-bold text-2xl">{index + 1}</span>
        </div>
      </div>
    </motion.div>
  )

  const textContent = (
    <motion.div
      initial={{ opacity: 0, x: feature.imagePosition === 'left' ? 50 : -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: feature.imagePosition === 'left' ? 50 : -50 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="flex flex-col justify-center"
    >
      <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-voltry-navy mb-6 leading-tight">
        {feature.title}
      </h3>

      <ul className="space-y-4 mb-8">
        {feature.description.map((item, itemIndex) => (
          <motion.li
            key={itemIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5, delay: 0.6 + itemIndex * 0.1 }}
            className="flex items-start space-x-3"
          >
            <svg
              className="w-6 h-6 text-voltry-blue flex-shrink-0 mt-0.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M5 13l4 4L19 7"></path>
            </svg>
            <span className="text-lg text-gray-700">{item}</span>
          </motion.li>
        ))}
      </ul>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <Link
          href={feature.cta.href}
          className="inline-flex items-center px-6 py-3 bg-voltry-blue hover:bg-voltry-blue/90 text-white rounded-lg text-lg font-semibold transition-all hover:shadow-lg hover:shadow-voltry-blue/50 hover:scale-105"
        >
          {feature.cta.text}
          <svg
            className="w-5 h-5 ml-2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
          </svg>
        </Link>
      </motion.div>
    </motion.div>
  )

  return (
    <div ref={ref} className="grid lg:grid-cols-2 gap-12 items-center">
      {feature.imagePosition === 'left' ? (
        <>
          <div className="order-2 lg:order-1">{imageContent}</div>
          <div className="order-1 lg:order-2">{textContent}</div>
        </>
      ) : (
        <>
          <div className="order-1">{textContent}</div>
          <div className="order-2">{imageContent}</div>
        </>
      )}
    </div>
  )
}

export default FeatureHighlights
