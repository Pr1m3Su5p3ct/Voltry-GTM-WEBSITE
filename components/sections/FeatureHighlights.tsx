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

  const imageContent = (
    <motion.div
      initial={{ opacity: 0, x: feature.imagePosition === 'left' ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: feature.imagePosition === 'left' ? -50 : 50 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="w-full h-full"
    >
      {/* Placeholder for images - will be replaced with actual images later */}
      <div className="relative h-[400px] lg:h-[500px] rounded-2xl bg-gradient-to-br from-voltry-blue/20 to-voltry-purple/20 border border-voltry-blue/30 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center space-y-4">
            <div className="w-24 h-24 mx-auto bg-gradient-to-br from-voltry-blue to-voltry-purple rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-4xl">
                {index + 1}
              </span>
            </div>
            <p className="text-voltry-blue font-semibold text-lg">
              [Feature Image {index + 1}]
            </p>
          </div>
        </div>

        {/* Animated background pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0095ff10_1px,transparent_1px),linear-gradient(to_bottom,#0095ff10_1px,transparent_1px)] bg-[size:3rem_3rem]" />
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
