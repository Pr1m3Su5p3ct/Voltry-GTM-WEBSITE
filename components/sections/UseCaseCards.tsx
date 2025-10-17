'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

interface UseCase {
  id: string
  icon: React.ReactElement
  title: string
  tagline: string
  bulletPoints: string[]
  stat: string
  cta: string
}

const useCases: UseCase[] = [
  {
    id: 'data-centers',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
        <rect x="12" y="16" width="40" height="8" strokeWidth="2" strokeLinecap="round" />
        <rect x="12" y="28" width="40" height="8" strokeWidth="2" strokeLinecap="round" />
        <rect x="12" y="40" width="40" height="8" strokeWidth="2" strokeLinecap="round" />
        <circle cx="18" cy="20" r="1.5" fill="currentColor" />
        <circle cx="18" cy="32" r="1.5" fill="currentColor" />
        <circle cx="18" cy="44" r="1.5" fill="currentColor" />
        <circle cx="24" cy="20" r="1.5" fill="currentColor" />
        <circle cx="24" cy="32" r="1.5" fill="currentColor" />
        <circle cx="24" cy="44" r="1.5" fill="currentColor" />
      </svg>
    ),
    title: 'Data Centers',
    tagline: 'Mission-critical uptime at lower TCO',
    bulletPoints: [
      '99.999% uptime guarantee',
      'Real-time PUE reporting',
      'Cooling optimization',
      'Predictive maintenance'
    ],
    stat: '$2M+/year savings',
    cta: 'Explore Data Centers'
  },
  {
    id: 'utilities',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
        <path d="M32 8 L48 24 L40 24 L40 40 L48 40 L32 56 L16 40 L24 40 L24 24 L16 24 Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="32" cy="32" r="3" fill="currentColor" />
      </svg>
    ),
    title: 'Utilities & Substations',
    tagline: 'Grid resilience through predictive intelligence',
    bulletPoints: [
      'Transformer health monitoring',
      'NERC CIP compliance',
      'Arc flash prevention',
      'Load forecasting'
    ],
    stat: '2-5x asset life extension',
    cta: 'Explore Utilities'
  },
  {
    id: 'der-microgrids',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
        <circle cx="32" cy="20" r="8" strokeWidth="2" />
        <path d="M24 20 L16 32 M40 20 L48 32" strokeWidth="2" strokeLinecap="round" />
        <path d="M20 32 L20 44 M32 28 L32 44 M44 32 L44 44" strokeWidth="2" strokeLinecap="round" />
        <rect x="16" y="44" width="32" height="6" strokeWidth="2" strokeLinecap="round" />
        <path d="M28 14 L32 8 L36 14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="currentColor" />
      </svg>
    ),
    title: 'DER & Microgrids',
    tagline: 'Orchestrate distributed energy at scale',
    bulletPoints: [
      'IEEE 1547 compliance',
      'Solar + storage optimization',
      'Islanding detection',
      'Faster interconnection permits'
    ],
    stat: '40% faster permits',
    cta: 'Explore DER'
  },
  {
    id: 'industrial',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
        <rect x="20" y="24" width="24" height="24" strokeWidth="2" strokeLinecap="round" />
        <circle cx="32" cy="36" r="6" strokeWidth="2" />
        <path d="M32 14 L32 24" strokeWidth="2" strokeLinecap="round" />
        <path d="M26 18 L32 14 L38 18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20 36 L14 36 M44 36 L50 36" strokeWidth="2" strokeLinecap="round" />
        <circle cx="32" cy="36" r="2" fill="currentColor" />
      </svg>
    ),
    title: 'Industrial Facilities',
    tagline: 'Maximize production, minimize downtime',
    bulletPoints: [
      'Motor vibration analysis',
      'Power quality monitoring',
      'Energy cost optimization',
      'Process reliability'
    ],
    stat: '60%+ downtime reduction',
    cta: 'Explore Industrial'
  }
]

const UseCaseCards = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  return (
    <section className="relative py-20 bg-gray-50 overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0095ff05_1px,transparent_1px),linear-gradient(to_bottom,#0095ff05_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-voltry-navy mb-4">
            Built for Critical Infrastructure
          </h2>
          <p className="text-xl text-gray-600">
            Industry-specific solutions for the facilities that power modern life
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.id}
              className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-200 transition-all duration-300 cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onHoverStart={() => setHoveredCard(useCase.id)}
              onHoverEnd={() => setHoveredCard(null)}
              whileHover={{
                y: -8,
                boxShadow: '0 20px 40px rgba(0, 149, 255, 0.2)',
                borderColor: 'rgba(0, 149, 255, 0.3)'
              }}
            >
              {/* Icon */}
              <motion.div
                className={`w-16 h-16 mb-6 transition-colors duration-300 ${
                  hoveredCard === useCase.id ? 'text-voltry-blue' : 'text-gray-400'
                }`}
                animate={{
                  stroke: hoveredCard === useCase.id ? '#0095FF' : '#9CA3AF'
                }}
                transition={{ duration: 0.3 }}
              >
                {useCase.icon}
              </motion.div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-voltry-navy mb-2">
                {useCase.title}
              </h3>

              {/* Tagline */}
              <p className="text-gray-600 mb-6 text-sm">
                {useCase.tagline}
              </p>

              {/* Bullet Points */}
              <ul className="space-y-3 mb-6">
                {useCase.bulletPoints.map((point, idx) => (
                  <motion.li
                    key={idx}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 + idx * 0.05 }}
                  >
                    <span className="text-voltry-blue mt-1 flex-shrink-0">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span className="text-gray-700 text-sm">{point}</span>
                  </motion.li>
                ))}
              </ul>

              {/* Stat Highlight */}
              <div className="bg-gradient-to-r from-voltry-blue/10 to-voltry-purple/10 rounded-lg p-4 mb-6 border border-voltry-blue/20">
                <p className="text-voltry-blue font-bold text-xl text-center">
                  {useCase.stat}
                </p>
              </div>

              {/* CTA Button */}
              <motion.button
                className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                  hoveredCard === useCase.id
                    ? 'bg-voltry-blue text-white shadow-lg shadow-voltry-blue/30'
                    : 'bg-gray-100 text-voltry-navy hover:bg-gray-200'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {useCase.cta} →
              </motion.button>

              {/* Hover Accent Line */}
              <motion.div
                className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-voltry-blue to-voltry-purple rounded-t-2xl"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: hoveredCard === useCase.id ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-gray-600 mb-6">
            Don't see your use case? We support hospitals, manufacturing, cannabis grows, and more.
          </p>
          <motion.button
            className="px-8 py-4 bg-transparent border-2 border-voltry-blue text-voltry-blue hover:bg-voltry-blue hover:text-white rounded-lg font-semibold transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Talk to Our Solutions Team
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default UseCaseCards
