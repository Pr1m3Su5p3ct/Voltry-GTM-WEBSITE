'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

interface ComparisonRow {
  feature: string
  traditional: string
  voltry: string
  tooltip: string
}

const comparisonData: ComparisonRow[] = [
  {
    feature: 'Vendor Support',
    traditional: 'Single vendor only',
    voltry: 'All major vendors',
    tooltip: 'Voltry integrates with Schneider, Eaton, ABB, Siemens, and more - no vendor lock-in'
  },
  {
    feature: 'Prediction',
    traditional: 'Threshold alarms (reactive)',
    voltry: 'AI-powered forecasting (24-48hr early warning)',
    tooltip: 'Traditional systems only alert after thresholds are crossed. Voltry predicts failures before they happen'
  },
  {
    feature: 'Sensing Domains',
    traditional: 'Electrical only',
    voltry: 'Electrical + Mechanical + Acoustic',
    tooltip: 'Multi-domain sensing captures the full picture: vibration, temperature, harmonics, ultrasound, and more'
  },
  {
    feature: 'Cost per Point',
    traditional: '$4,300+',
    voltry: '$200',
    tooltip: 'Traditional DCIM costs $4,300+ per monitoring point. Voltry delivers 20x cost reduction'
  },
  {
    feature: 'Network Effects',
    traditional: 'Each facility alone',
    voltry: 'Federated learning',
    tooltip: 'Voltry learns from all facilities anonymously, improving predictions for everyone without sharing raw data'
  }
]

const ComparisonTable = () => {
  const [hoveredRow, setHoveredRow] = useState<number | null>(null)

  return (
    <section className="relative py-20 bg-gradient-to-b from-voltry-navy to-black overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0095ff08_1px,transparent_1px),linear-gradient(to_bottom,#0095ff08_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            How We Compare to Traditional DCIM
          </h2>
          <p className="text-xl text-gray-400">
            Modern infrastructure demands modern solutions
          </p>
        </motion.div>

        {/* Desktop Table */}
        <motion.div
          className="hidden lg:block"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="overflow-hidden rounded-2xl border border-voltry-blue/20 bg-black/40 backdrop-blur-sm">
            {/* Table Header */}
            <div className="grid grid-cols-3 gap-4 p-6 bg-voltry-navy/60 border-b border-voltry-blue/20">
              <div className="text-gray-400 font-semibold text-sm uppercase tracking-wide">
                Feature
              </div>
              <div className="text-gray-400 font-semibold text-sm uppercase tracking-wide text-center">
                Traditional DCIM
              </div>
              <div className="text-voltry-blue font-semibold text-sm uppercase tracking-wide text-center">
                Voltry Platform
              </div>
            </div>

            {/* Table Rows */}
            <div className="divide-y divide-voltry-blue/10">
              {comparisonData.map((row, index) => (
                <motion.div
                  key={index}
                  className={`grid grid-cols-3 gap-4 p-6 transition-all duration-300 cursor-pointer relative ${
                    hoveredRow === index
                      ? 'bg-voltry-blue/10'
                      : index % 2 === 0
                      ? 'bg-transparent'
                      : 'bg-white/5'
                  }`}
                  onHoverStart={() => setHoveredRow(index)}
                  onHoverEnd={() => setHoveredRow(null)}
                  whileHover={{ scale: 1.01 }}
                >
                  {/* Feature Name */}
                  <div className="flex items-center text-white font-medium">
                    {row.feature}
                  </div>

                  {/* Traditional DCIM */}
                  <div className="flex items-center justify-center gap-3 text-center bg-gray-800/40 rounded-lg p-4">
                    <span className="text-red-400 text-2xl flex-shrink-0">
                      {row.feature === 'Prediction' ? '~' : '❌'}
                    </span>
                    <span className="text-gray-400 text-sm">{row.traditional}</span>
                  </div>

                  {/* Voltry Platform */}
                  <div className="flex items-center justify-center gap-3 text-center bg-voltry-blue/10 border border-voltry-blue/30 rounded-lg p-4">
                    <span className="text-voltry-blue text-2xl flex-shrink-0">✓</span>
                    <span className="text-white font-medium text-sm">{row.voltry}</span>
                  </div>

                  {/* Tooltip */}
                  {hoveredRow === index && (
                    <motion.div
                      className="absolute left-1/2 -translate-x-1/2 -bottom-16 bg-voltry-navy border border-voltry-blue/30 rounded-lg p-4 shadow-xl z-20 max-w-md"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <p className="text-gray-300 text-sm">{row.tooltip}</p>
                      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-voltry-navy border-l border-t border-voltry-blue/30 rotate-45" />
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Mobile Cards */}
        <div className="lg:hidden space-y-6">
          {comparisonData.map((row, index) => (
            <motion.div
              key={index}
              className="bg-black/40 backdrop-blur-sm border border-voltry-blue/20 rounded-xl p-6 space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h3 className="text-white font-bold text-lg mb-4">{row.feature}</h3>

              {/* Traditional */}
              <div className="bg-gray-800/40 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-red-400 text-xl">
                    {row.feature === 'Prediction' ? '~' : '❌'}
                  </span>
                  <span className="text-gray-400 text-xs uppercase font-semibold">
                    Traditional DCIM
                  </span>
                </div>
                <p className="text-gray-400 text-sm">{row.traditional}</p>
              </div>

              {/* Voltry */}
              <div className="bg-voltry-blue/10 border border-voltry-blue/30 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-voltry-blue text-xl">✓</span>
                  <span className="text-voltry-blue text-xs uppercase font-semibold">
                    Voltry Platform
                  </span>
                </div>
                <p className="text-white font-medium text-sm">{row.voltry}</p>
              </div>

              {/* Tooltip as regular text on mobile */}
              <div className="bg-voltry-navy/60 border border-voltry-blue/20 rounded-lg p-3">
                <p className="text-gray-300 text-xs">{row.tooltip}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-gray-400 mb-6">
            Ready to modernize your infrastructure monitoring?
          </p>
          <motion.button
            className="px-8 py-4 bg-voltry-blue hover:bg-voltry-blue/90 text-white rounded-lg font-semibold transition-all hover:shadow-lg hover:shadow-voltry-blue/50"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Schedule a Demo
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default ComparisonTable
