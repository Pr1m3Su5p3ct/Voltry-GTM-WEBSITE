'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const UtilitiesPage = () => {
  return (
    <div className="min-h-screen bg-voltry-navy">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-voltry-navy via-voltry-navy to-voltry-blue/20 pt-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0095ff10_1px,transparent_1px),linear-gradient(to_bottom,#0095ff10_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1
              className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Protect Aging{' '}
              <span className="bg-gradient-to-r from-voltry-blue to-voltry-purple bg-clip-text text-transparent">
                Infrastructure
              </span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              The grid is aging. VoltryOS predicts transformer failures, prevents arc flash events, and extends asset life 2-5x through continuous health monitoring and AI-driven maintenance.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link
                href="https://form.typeform.com/to/ezedDSEA" target="_blank" rel="noopener noreferrer"
                className="px-8 py-4 bg-voltry-blue hover:bg-voltry-blue/90 text-white rounded-lg text-lg font-semibold transition-all hover:shadow-lg hover:shadow-voltry-blue/50 hover:scale-105 text-center"
              >
                Get $50,000 Free Install
              </Link>
              <Link
                href="/demo"
                className="px-8 py-4 bg-transparent border-2 border-voltry-blue text-voltry-blue hover:bg-voltry-blue hover:text-white rounded-lg text-lg font-semibold transition-all text-center"
              >
                See Demo
              </Link>
            </motion.div>

            <motion.div
              className="grid grid-cols-3 gap-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="text-center">
                <p className="text-3xl font-bold text-voltry-blue mb-2">2-5x</p>
                <p className="text-sm text-gray-400">Asset Life Extension</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-voltry-purple mb-2">100%</p>
                <p className="text-sm text-gray-400">NERC CIP Compliant</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-voltry-lime mb-2">48hrs</p>
                <p className="text-sm text-gray-400">Failure Prediction</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Challenge Cards Section */}
      <section className="relative py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-voltry-navy mb-4">
              Utility Infrastructure Challenges
            </h2>
            <p className="text-xl text-gray-600">
              Decades-old equipment meets modern reliability demands
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12" stroke="currentColor">
                    <path d="M32 8 L48 24 L40 24 L40 40 L48 40 L32 56 L16 40 L24 40 L24 24 L16 24 Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="32" cy="32" r="4" fill="currentColor" />
                    <path d="M20 20 L44 44 M44 20 L20 44" strokeWidth="2" strokeLinecap="round" opacity="0.3" />
                  </svg>
                ),
                title: 'Transformer Failures',
                description: 'Aging transformers fail without warning, causing outages and costly emergency replacements.'
              },
              {
                icon: (
                  <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12" stroke="currentColor">
                    <rect x="20" y="16" width="24" height="32" strokeWidth="2" />
                    <path d="M26 24 L38 24 M26 30 L38 30 M26 36 L32 36" strokeWidth="2" strokeLinecap="round" />
                    <circle cx="50" cy="20" r="6" strokeWidth="2" fill="rgb(220, 38, 38)" fillOpacity="0.3" />
                  </svg>
                ),
                title: 'Compliance Burden',
                description: 'NERC CIP audits require constant documentation and manual data collection across substations.'
              },
              {
                icon: (
                  <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12" stroke="currentColor">
                    <circle cx="32" cy="32" r="20" strokeWidth="2" />
                    <path d="M32 12 L32 20 M32 44 L32 52 M12 32 L20 32 M44 32 L52 32" strokeWidth="2" strokeLinecap="round" />
                    <motion.circle
                      cx="32"
                      cy="32"
                      r="8"
                      strokeWidth="2"
                      animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </svg>
                ),
                title: 'Grid Instability',
                description: 'Voltage fluctuations and harmonics damage equipment and threaten grid stability.'
              }
            ].map((challenge, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0, 149, 255, 0.2)' }}
              >
                <div className="text-voltry-blue mb-4">{challenge.icon}</div>
                <h3 className="text-xl font-bold text-voltry-navy mb-3">{challenge.title}</h3>
                <p className="text-gray-600">{challenge.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* VoltryOS Solution Section */}
      <section className="relative py-20 bg-voltry-navy">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              VoltryOS for Utilities & Substations
            </h2>
            <p className="text-xl text-gray-400">
              Extend asset life and ensure grid reliability through predictive intelligence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {[
                {
                  title: 'Transformer Health Monitoring',
                  description: 'Multi-sensor monitoring detects partial discharge, overheating, and insulation breakdown before catastrophic failure.',
                  metric: '2-5x asset life extension'
                },
                {
                  title: 'NERC CIP Compliance',
                  description: 'Automated audit logs, anomaly detection, and compliance reporting. Always audit-ready with zero manual data entry.',
                  metric: 'Instant audit readiness'
                },
                {
                  title: 'Arc Flash Prevention',
                  description: 'Real-time detection of fault conditions and automatic protective device coordination to prevent arc flash incidents.',
                  metric: '99.7% incident prevention'
                },
                {
                  title: 'Grid Stability Analytics',
                  description: 'Continuous power quality monitoring with harmonic analysis and voltage regulation to maintain grid stability.',
                  metric: '85% fewer disturbances'
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-r from-voltry-blue/10 to-voltry-purple/10 rounded-xl p-6 border border-voltry-blue/30"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400 mb-3">{feature.description}</p>
                  <p className="text-voltry-lime font-semibold">{feature.metric}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative w-full h-[600px] rounded-2xl bg-gradient-to-br from-voltry-blue/20 to-voltry-purple/20 border border-voltry-blue/30 p-8 backdrop-blur-sm">
                <svg viewBox="0 0 400 600" className="w-full h-full">
                  {/* Substation Grid */}
                  <g>
                    {/* Transformer */}
                    <rect x="150" y="200" width="100" height="80" fill="none" stroke="rgb(0, 149, 255)" strokeWidth="2" />
                    <motion.circle
                      cx="200"
                      cy="240"
                      r="20"
                      fill="none"
                      stroke="rgb(132, 204, 22)"
                      strokeWidth="2"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    />

                    {/* Power Lines */}
                    <motion.path
                      d="M 200 150 L 200 200"
                      stroke="rgb(139, 92, 246)"
                      strokeWidth="3"
                      strokeLinecap="round"
                      animate={{
                        strokeDasharray: ["0, 100", "100, 0"],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <motion.path
                      d="M 200 280 L 200 350"
                      stroke="rgb(139, 92, 246)"
                      strokeWidth="3"
                      strokeLinecap="round"
                      animate={{
                        strokeDasharray: ["0, 100", "100, 0"],
                      }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                    />

                    {/* Sensors */}
                    {[
                      { x: 170, y: 190 },
                      { x: 230, y: 190 },
                      { x: 170, y: 290 },
                      { x: 230, y: 290 }
                    ].map((pos, i) => (
                      <motion.circle
                        key={i}
                        cx={pos.x}
                        cy={pos.y}
                        r="5"
                        fill="rgb(0, 149, 255)"
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.6, 1, 0.6],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.3,
                        }}
                      />
                    ))}

                    {/* Health Status */}
                    <rect x="260" y="210" width="100" height="60" fill="rgb(10, 22, 40)" stroke="rgb(0, 149, 255)" strokeWidth="1" rx="5" />
                    <text x="310" y="230" textAnchor="middle" fill="rgb(132, 204, 22)" fontSize="12" fontWeight="bold">
                      HEALTHY
                    </text>
                    <text x="310" y="250" textAnchor="middle" fill="rgb(0, 149, 255)" fontSize="10">
                      Temp: Normal
                    </text>
                    <text x="310" y="265" textAnchor="middle" fill="rgb(0, 149, 255)" fontSize="10">
                      PD: None
                    </text>

                    {/* Grid Connection Points */}
                    <circle cx="200" cy="150" r="8" fill="rgb(139, 92, 246)" />
                    <circle cx="200" cy="350" r="8" fill="rgb(139, 92, 246)" />

                    {/* Monitoring Waves */}
                    <motion.path
                      d="M 50 400 Q 100 380, 150 400 T 250 400 T 350 400"
                      stroke="rgb(0, 149, 255)"
                      strokeWidth="2"
                      fill="none"
                      opacity="0.6"
                      animate={{
                        d: [
                          "M 50 400 Q 100 380, 150 400 T 250 400 T 350 400",
                          "M 50 400 Q 100 420, 150 400 T 250 400 T 350 400",
                          "M 50 400 Q 100 380, 150 400 T 250 400 T 350 400",
                        ],
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                  </g>

                  <text x="200" y="90" textAnchor="middle" fill="rgb(0, 149, 255)" fontSize="16" fontWeight="bold">
                    Substation Monitoring
                  </text>
                  <motion.text
                    x="200"
                    y="550"
                    textAnchor="middle"
                    fill="rgb(132, 204, 22)"
                    fontSize="14"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    All Systems Normal | NERC CIP Compliant
                  </motion.text>
                </svg>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technical Features Section */}
      <section className="relative py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-voltry-navy mb-4">
              Technical Features
            </h2>
            <p className="text-xl text-gray-600">
              Purpose-built for utility-scale infrastructure
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: '⚡', title: 'Partial Discharge Detection', description: 'Ultrasonic and RF sensors detect insulation breakdown months early' },
              { icon: '🌡️', title: 'Thermal Monitoring', description: 'Infrared and contact sensors track transformer hot spots in real-time' },
              { icon: '📊', title: 'Power Quality Analysis', description: 'THD, voltage sag/swell, and flicker monitoring with IEEE 519 compliance' },
              { icon: '🔒', title: 'NERC CIP Automation', description: 'Automated CIP-002 through CIP-014 compliance with audit-ready logs' },
              { icon: '🔔', title: 'Predictive Alerts', description: '48-hour early warnings with asset-specific failure mode analysis' },
              { icon: '📈', title: 'Asset Life Analytics', description: 'AI-driven life expectancy modeling with maintenance optimization' }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-200"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, boxShadow: '0 15px 30px rgba(0, 149, 255, 0.15)' }}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-bold text-voltry-navy mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="relative py-20 bg-voltry-navy">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Asset Life Extension: 2-5x
            </h2>
            <p className="text-xl text-gray-400">
              Real results from utility deployments
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { value: '2-5x', label: 'Asset Life Extension', color: 'voltry-blue' },
              { value: '100%', label: 'NERC CIP Compliance', color: 'voltry-lime' },
              { value: '48hrs', label: 'Failure Warning', color: 'voltry-purple' },
              { value: '99.7%', label: 'Incident Prevention', color: 'voltry-blue' }
            ].map((metric, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <motion.p
                  className={`text-5xl font-bold text-${metric.color} mb-2`}
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                >
                  {metric.value}
                </motion.p>
                <p className="text-gray-400">{metric.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Testimonial Section */}
      <section className="relative py-20 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="bg-white rounded-2xl p-12 shadow-2xl border border-gray-200"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-gradient-to-br from-voltry-blue to-voltry-purple rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  UT
                </div>
              </div>
              <div>
                <p className="text-xl text-gray-700 mb-6 italic">
                  "VoltryOS detected partial discharge in a 40-year-old transformer 6 weeks before failure. We scheduled maintenance during a planned outage instead of facing an emergency replacement. This one alert saved us over $800K and prevented a multi-day outage."
                </p>
                <p className="text-voltry-navy font-bold">Chief Engineer</p>
                <p className="text-gray-600">Municipal Utility District, 50+ Substations</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Case Study Preview Section */}
      <section className="relative py-20 bg-voltry-navy">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="bg-gradient-to-r from-voltry-blue/20 to-voltry-purple/20 rounded-2xl p-12 border border-voltry-blue/30"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Case Study: Regional Utility District
                </h2>
                <p className="text-xl text-gray-300 mb-6">
                  How VoltryOS helped a 50-substation utility achieve 100% NERC CIP compliance while extending transformer life by 3.2x.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    'Prevented 7 transformer failures in first 18 months',
                    'Achieved continuous NERC CIP compliance',
                    'Reduced emergency maintenance calls by 78%',
                    'Extended average asset life from 32 to 102+ years'
                  ].map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-voltry-lime mt-1">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span className="text-gray-300">{point}</span>
                    </li>
                  ))}
                </ul>
                <motion.button
                  className="px-8 py-4 bg-voltry-blue hover:bg-voltry-blue/90 text-white rounded-lg font-semibold transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Read Full Case Study
                </motion.button>
              </div>
              <div className="relative h-80 bg-voltry-navy/50 rounded-xl flex items-center justify-center border border-voltry-blue/30">
                <p className="text-gray-500 text-lg">Case Study Diagram</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-20 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-voltry-navy mb-6">
              Ready to Extend Asset Life?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join utilities using VoltryOS to protect aging infrastructure and maintain grid reliability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://form.typeform.com/to/ezedDSEA" target="_blank" rel="noopener noreferrer"
                className="px-8 py-4 bg-voltry-blue hover:bg-voltry-blue/90 text-white rounded-lg text-lg font-semibold transition-all hover:shadow-lg hover:shadow-voltry-blue/50 hover:scale-105"
              >
                Get $50,000 Free Install
              </Link>
              <Link
                href="/demo"
                className="px-8 py-4 bg-transparent border-2 border-voltry-blue text-voltry-blue hover:bg-voltry-blue hover:text-white rounded-lg text-lg font-semibold transition-all"
              >
                Schedule Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default UtilitiesPage
