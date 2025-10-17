'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const DERMicrogridsPage = () => {
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
              Accelerate{' '}
              <span className="bg-gradient-to-r from-voltry-blue to-voltry-purple bg-clip-text text-transparent">
                Interconnection
              </span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Interconnection delays cost millions. VoltryOS delivers IEEE 1547-compliant monitoring, automated power quality validation, and battery health analytics to get DER projects online 40% faster.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link
                href="/start-free"
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
                <p className="text-3xl font-bold text-voltry-blue mb-2">40%</p>
                <p className="text-sm text-gray-400">Faster Permits</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-voltry-purple mb-2">1547</p>
                <p className="text-sm text-gray-400">IEEE Compliant</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-voltry-lime mb-2">91%</p>
                <p className="text-sm text-gray-400">Uptime Achieved</p>
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
              DER & Microgrid Challenges
            </h2>
            <p className="text-xl text-gray-600">
              Interconnection delays and compliance complexity slow project deployment
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12" stroke="currentColor">
                    <circle cx="32" cy="20" r="8" strokeWidth="2" />
                    <path d="M24 20 L16 32 M40 20 L48 32" strokeWidth="2" strokeLinecap="round" />
                    <path d="M20 32 L20 44 M32 28 L32 44 M44 32 L44 44" strokeWidth="2" strokeLinecap="round" />
                    <rect x="16" y="44" width="32" height="6" strokeWidth="2" />
                    <path d="M28 14 L32 8 L36 14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <motion.circle cx="32" cy="20" r="12" strokeWidth="2" stroke="rgb(220, 38, 38)" strokeDasharray="4 4"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    />
                  </svg>
                ),
                title: 'Interconnection Delays',
                description: 'Utilities require months of power quality data before approving DER interconnection permits.'
              },
              {
                icon: (
                  <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12" stroke="currentColor">
                    <rect x="20" y="24" width="24" height="24" strokeWidth="2" />
                    <path d="M20 32 L28 36 L20 40" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="36" cy="36" r="4" strokeWidth="2" />
                    <path d="M32 12 L32 24 M44 20 L50 14 M50 20 L44 14" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                ),
                title: 'Solar + Storage Complexity',
                description: 'Coordinating inverters, batteries, and grid connection without real-time optimization wastes energy.'
              },
              {
                icon: (
                  <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12" stroke="currentColor">
                    <rect x="16" y="24" width="32" height="20" strokeWidth="2" rx="2" />
                    <motion.rect x="20" y="28" width="7" height="12" fill="rgb(0, 149, 255)"
                      animate={{ height: [12, 6, 12] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <motion.rect x="29" y="28" width="7" height="12" fill="rgb(139, 92, 246)"
                      animate={{ height: [8, 12, 8] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                    />
                    <motion.rect x="38" y="28" width="7" height="12" fill="rgb(132, 204, 22)"
                      animate={{ height: [10, 4, 10] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                    />
                  </svg>
                ),
                title: 'Battery Degradation',
                description: 'Without health monitoring, batteries fail prematurely, destroying project economics.'
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
              VoltryOS for DER & Microgrids
            </h2>
            <p className="text-xl text-gray-400">
              Get projects online faster with automated compliance and optimization
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
                  title: 'IEEE 1547 Compliance',
                  description: 'Automated power quality monitoring with voltage, frequency, and anti-islanding data. Generate utility-ready reports instantly.',
                  metric: '40% faster permit approval'
                },
                {
                  title: 'Solar Inverter Optimization',
                  description: 'Real-time MPPT tracking, string-level monitoring, and predictive maintenance to maximize energy harvest.',
                  metric: '15% energy yield increase'
                },
                {
                  title: 'Battery Health Analytics',
                  description: 'State of charge, state of health, and cycle life tracking with AI-driven degradation prediction.',
                  metric: '2x longer battery life'
                },
                {
                  title: 'Power Quality Validation',
                  description: 'Continuous THD, flicker, and voltage regulation monitoring ensures grid code compliance 24/7.',
                  metric: 'Zero compliance violations'
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
                  {/* Solar Panels */}
                  <g>
                    <circle cx="100" cy="100" r="30" fill="none" stroke="rgb(132, 204, 22)" strokeWidth="2" />
                    {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                      <motion.line
                        key={i}
                        x1="100"
                        y1="100"
                        x2={100 + Math.cos((angle * Math.PI) / 180) * 25}
                        y2={100 + Math.sin((angle * Math.PI) / 180) * 25}
                        stroke="rgb(132, 204, 22)"
                        strokeWidth="2"
                        animate={{
                          opacity: [0.3, 1, 0.3],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.1,
                        }}
                      />
                    ))}
                  </g>

                  {/* Inverter */}
                  <rect x="160" y="80" width="80" height="40" fill="none" stroke="rgb(0, 149, 255)" strokeWidth="2" rx="4" />
                  <text x="200" y="105" textAnchor="middle" fill="rgb(0, 149, 255)" fontSize="12">
                    Inverter
                  </text>

                  {/* Battery Storage */}
                  <g>
                    <rect x="170" y="200" width="60" height="80" fill="none" stroke="rgb(139, 92, 246)" strokeWidth="2" rx="4" />
                    <motion.rect
                      x="175"
                      y="205"
                      width="50"
                      height="70"
                      fill="rgb(139, 92, 246)"
                      fillOpacity="0.3"
                      animate={{
                        height: [70, 40, 70],
                        y: [205, 235, 205],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                      }}
                    />
                    <text x="200" y="320" textAnchor="middle" fill="rgb(139, 92, 246)" fontSize="12">
                      Battery
                    </text>
                  </g>

                  {/* Grid Connection */}
                  <g>
                    <path d="M 200 350 L 200 400" stroke="rgb(0, 149, 255)" strokeWidth="3" strokeLinecap="round" />
                    <motion.circle
                      cx="200"
                      cy="400"
                      r="20"
                      fill="none"
                      stroke="rgb(0, 149, 255)"
                      strokeWidth="2"
                      animate={{
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                    />
                    <text x="200" y="450" textAnchor="middle" fill="rgb(0, 149, 255)" fontSize="12">
                      Grid
                    </text>
                  </g>

                  {/* Energy Flow */}
                  {[0, 1, 2].map((i) => (
                    <motion.circle
                      key={`flow-${i}`}
                      r="4"
                      fill="rgb(132, 204, 22)"
                      animate={{
                        offsetDistance: ['0%', '100%'],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 1,
                      }}
                    >
                      <animateMotion
                        dur="3s"
                        repeatCount="indefinite"
                        begin={`${i}s`}
                        path="M 100 100 L 160 100 L 200 120 L 200 200 L 200 350"
                      />
                    </motion.circle>
                  ))}

                  {/* Status Panel */}
                  <rect x="280" y="150" width="100" height="120" fill="rgb(10, 22, 40)" stroke="rgb(0, 149, 255)" strokeWidth="1" rx="5" />
                  <text x="330" y="175" textAnchor="middle" fill="rgb(132, 204, 22)" fontSize="12" fontWeight="bold">
                    ONLINE
                  </text>
                  <text x="290" y="195" fill="rgb(156, 163, 175)" fontSize="10">
                    Solar: 45kW
                  </text>
                  <text x="290" y="215" fill="rgb(156, 163, 175)" fontSize="10">
                    Battery: 80%
                  </text>
                  <text x="290" y="235" fill="rgb(156, 163, 175)" fontSize="10">
                    Grid: Export
                  </text>
                  <text x="290" y="255" fill="rgb(156, 163, 175)" fontSize="10">
                    PQ: 1547✓
                  </text>

                  <text x="200" y="80" textAnchor="middle" fill="rgb(0, 149, 255)" fontSize="16" fontWeight="bold">
                    DER System
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
                    IEEE 1547 Compliant | Optimal Performance
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
              Purpose-built for distributed energy resources
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: '⚡', title: 'IEEE 1547 Monitoring', description: 'Automated compliance testing for voltage, frequency, and anti-islanding' },
              { icon: '☀️', title: 'MPPT Optimization', description: 'String-level monitoring with ML-driven maximum power point tracking' },
              { icon: '🔋', title: 'Battery Analytics', description: 'SOC, SOH, cycle counting, and degradation prediction' },
              { icon: '📊', title: 'Power Quality', description: 'Real-time THD, flicker, and voltage regulation monitoring' },
              { icon: '🔔', title: 'Predictive Alerts', description: 'Early warnings for inverter faults, battery issues, and grid events' },
              { icon: '📈', title: 'Energy Optimization', description: 'AI-driven charge/discharge scheduling for maximum ROI' }
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
              Permits 40% Faster
            </h2>
            <p className="text-xl text-gray-400">
              Real results from DER deployments
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { value: '40%', label: 'Faster Permits', color: 'voltry-blue' },
              { value: '15%', label: 'Energy Yield Increase', color: 'voltry-lime' },
              { value: '2x', label: 'Battery Life Extension', color: 'voltry-purple' },
              { value: '100%', label: 'IEEE 1547 Compliant', color: 'voltry-blue' }
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
                  DR
                </div>
              </div>
              <div>
                <p className="text-xl text-gray-700 mb-6 italic">
                  "VoltryOS cut our interconnection timeline from 9 months to 5.5 months. The automated IEEE 1547 reporting gave the utility everything they needed upfront. Battery health monitoring has extended our expected ROI by 3+ years. Worth every penny."
                </p>
                <p className="text-voltry-navy font-bold">VP of Engineering</p>
                <p className="text-gray-600">Solar + Storage Developer, 50MW Portfolio</p>
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
                  Case Study: 5MW Solar + 10MWh Storage
                </h2>
                <p className="text-xl text-gray-300 mb-6">
                  How VoltryOS helped a commercial microgrid achieve interconnection 4 months early and increase energy yield by 18%.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    'Interconnection approved in 5.5 months vs 9+ month average',
                    'Battery life extended from 8 to 15+ years projected',
                    'Zero grid code violations in 2+ years of operation',
                    '18% energy yield increase through MPPT optimization'
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
              Ready to Accelerate Interconnection?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join DER developers using VoltryOS to get projects online faster and maximize ROI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/start-free"
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

export default DERMicrogridsPage
