'use client'

import { motion } from 'framer-motion'
import { AlertTriangle, Clock, Building2 } from 'lucide-react'

const painPoints = [
  {
    id: 1,
    icon: Building2,
    title: '5-8 Vendor Systems',
    description: 'Dashboard chaos from multiple vendors creates an incomplete picture of your infrastructure health.'
  },
  {
    id: 2,
    icon: Clock,
    title: 'Failures in Milliseconds',
    description: 'Reactive alerts and threshold alarms can\'t predict cascading failures before they happen.'
  },
  {
    id: 3,
    icon: AlertTriangle,
    title: 'Each Facility Alone',
    description: 'Isolated failures with zero industry learning means you repeat the same mistakes others already made.'
  }
]

const ProblemStatement = () => {
  return (
    <section className="relative py-20 lg:py-32 bg-gray-50 overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0095ff08_1px,transparent_1px),linear-gradient(to_bottom,#0095ff08_1px,transparent_1px)] bg-[size:3rem_3rem]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-voltry-navy mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            $230 Billion Lost Annually to Power{' '}
            <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
              Infrastructure Failures
            </span>
          </motion.h2>

          <motion.p
            className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Your monitoring systems aren't helping. Here's why:
          </motion.p>
        </motion.div>

        {/* Pain Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {painPoints.map((point, index) => {
            const Icon = point.icon
            return (
              <motion.div
                key={point.id}
                className="relative group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                {/* Card */}
                <div className="relative h-full bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  {/* Icon with Glow Effect */}
                  <motion.div
                    className="relative mb-6 inline-block"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <div className="absolute inset-0 bg-voltry-blue/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                    <div className="relative w-16 h-16 bg-gradient-to-br from-voltry-blue to-voltry-blue/80 rounded-2xl flex items-center justify-center shadow-lg shadow-voltry-blue/30">
                      <Icon className="w-8 h-8 text-white" strokeWidth={2} />
                    </div>
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-voltry-navy mb-4 group-hover:text-voltry-blue transition-colors duration-300">
                    {point.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed text-lg">
                    {point.description}
                  </p>

                  {/* Hover Border Effect */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-voltry-blue/0 group-hover:border-voltry-blue/20 transition-all duration-300" />
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom Callout */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-lg text-gray-500 italic">
            The industry needs a fundamental shift from reactive monitoring to predictive intelligence.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default ProblemStatement
