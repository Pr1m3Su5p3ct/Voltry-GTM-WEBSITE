'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const IndustrialPage = () => {
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
              Reliable{' '}
              <span className="bg-gradient-to-r from-voltry-blue to-voltry-purple bg-clip-text text-transparent">
                Process Power
              </span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Downtime costs millions. VoltryOS delivers predictive motor monitoring, power quality optimization, and automated compliance to reduce industrial downtime by 60%+ while cutting energy costs.
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
                <p className="text-3xl font-bold text-voltry-blue mb-2">60%+</p>
                <p className="text-sm text-gray-400">Downtime Reduction</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-voltry-purple mb-2">25%</p>
                <p className="text-sm text-gray-400">Energy Cost Savings</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-voltry-lime mb-2">48hrs</p>
                <p className="text-sm text-gray-400">Early Warning</p>
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
              Industrial Facility Challenges
            </h2>
            <p className="text-xl text-gray-600">
              Unplanned downtime and energy waste drain profitability
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12" stroke="currentColor">
                    <rect x="20" y="24" width="24" height="24" strokeWidth="2" />
                    <circle cx="32" cy="36" r="6" strokeWidth="2" />
                    <path d="M32 14 L32 24" strokeWidth="2" strokeLinecap="round" />
                    <path d="M26 18 L32 14 L38 18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <motion.path
                      d="M 20 36 L 14 36"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      animate={{ x: [-2, 2, -2] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    />
                    <motion.path
                      d="M 44 36 L 50 36"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      animate={{ x: [2, -2, 2] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    />
                  </svg>
                ),
                title: 'Unexpected Motor Failures',
                description: 'Motors fail without warning, causing production line shutdowns and millions in lost revenue.'
              },
              {
                icon: (
                  <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12" stroke="currentColor">
                    <motion.path
                      d="M 16 32 Q 24 24, 32 32 T 48 32"
                      strokeWidth="2"
                      strokeLinecap="round"
                      animate={{
                        d: [
                          "M 16 32 Q 24 24, 32 32 T 48 32",
                          "M 16 32 Q 24 40, 32 32 T 48 32",
                          "M 16 32 Q 24 24, 32 32 T 48 32",
                        ],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <circle cx="32" cy="32" r="20" strokeWidth="2" opacity="0.3" />
                    <path d="M 32 12 L 32 20 M 32 44 L 32 52" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                ),
                title: 'Poor Power Quality',
                description: 'Voltage sags, harmonics, and transients damage sensitive equipment and reduce process efficiency.'
              },
              {
                icon: (
                  <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12" stroke="currentColor">
                    <rect x="16" y="20" width="32" height="28" strokeWidth="2" rx="2" />
                    <circle cx="24" cy="32" r="4" strokeWidth="2" />
                    <circle cx="40" cy="32" r="4" strokeWidth="2" />
                    <path d="M 24 40 Q 32 44, 40 40" strokeWidth="2" strokeLinecap="round" />
                    <motion.path
                      d="M 48 12 L 56 12"
                      strokeWidth="2"
                      strokeLinecap="round"
                      stroke="rgb(220, 38, 38)"
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    />
                  </svg>
                ),
                title: 'Energy Cost Waste',
                description: 'Without optimization, facilities pay peak demand charges and waste energy on inefficient operations.'
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
              VoltryOS for Industrial Facilities
            </h2>
            <p className="text-xl text-gray-400">
              Maximize uptime and minimize energy costs through predictive intelligence
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
                  title: 'Motor Vibration Analysis',
                  description: 'Multi-axis accelerometers detect bearing wear, misalignment, and imbalance weeks before failure. Schedule maintenance proactively.',
                  metric: '60%+ downtime reduction'
                },
                {
                  title: 'Power Quality Optimization',
                  description: 'Real-time harmonic filtering, voltage regulation, and transient suppression protect sensitive equipment and improve efficiency.',
                  metric: '15% equipment life extension'
                },
                {
                  title: 'Energy Efficiency Analytics',
                  description: 'AI-driven load profiling identifies waste, optimizes demand response, and reduces peak charges automatically.',
                  metric: '25% energy cost savings'
                },
                {
                  title: 'Compliance Automation',
                  description: 'Automated environmental monitoring, safety system validation, and regulatory reporting for OSHA, EPA, and local codes.',
                  metric: '90% faster audits'
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
                  {/* Production Line */}
                  <g>
                    {/* Motor 1 */}
                    <rect x="50" y="200" width="60" height="80" fill="none" stroke="rgb(0, 149, 255)" strokeWidth="2" rx="4" />
                    <motion.circle
                      cx="80"
                      cy="240"
                      r="20"
                      fill="none"
                      stroke="rgb(132, 204, 22)"
                      strokeWidth="2"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    />
                    <motion.circle
                      cx="80"
                      cy="240"
                      r="12"
                      fill="rgb(132, 204, 22)"
                      fillOpacity="0.3"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    />

                    {/* Motor 2 */}
                    <rect x="170" y="200" width="60" height="80" fill="none" stroke="rgb(0, 149, 255)" strokeWidth="2" rx="4" />
                    <motion.circle
                      cx="200"
                      cy="240"
                      r="20"
                      fill="none"
                      stroke="rgb(132, 204, 22)"
                      strokeWidth="2"
                      animate={{ rotate: -360 }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    />
                    <motion.circle
                      cx="200"
                      cy="240"
                      r="12"
                      fill="rgb(132, 204, 22)"
                      fillOpacity="0.3"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 1, repeat: Infinity, delay: 0.5 }}
                    />

                    {/* Motor 3 */}
                    <rect x="290" y="200" width="60" height="80" fill="none" stroke="rgb(0, 149, 255)" strokeWidth="2" rx="4" />
                    <motion.circle
                      cx="320"
                      cy="240"
                      r="20"
                      fill="none"
                      stroke="rgb(132, 204, 22)"
                      strokeWidth="2"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    />
                    <motion.circle
                      cx="320"
                      cy="240"
                      r="12"
                      fill="rgb(132, 204, 22)"
                      fillOpacity="0.3"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 1, repeat: Infinity, delay: 1 }}
                    />

                    {/* Vibration Sensors */}
                    {[
                      { x: 80, y: 180 },
                      { x: 200, y: 180 },
                      { x: 320, y: 180 }
                    ].map((pos, i) => (
                      <motion.circle
                        key={i}
                        cx={pos.x}
                        cy={pos.y}
                        r="6"
                        fill="rgb(139, 92, 246)"
                        animate={{
                          scale: [1, 1.4, 1],
                          opacity: [0.6, 1, 0.6],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          delay: i * 0.3,
                        }}
                      />
                    ))}

                    {/* Power Line */}
                    <motion.path
                      d="M 50 350 L 350 350"
                      stroke="rgb(0, 149, 255)"
                      strokeWidth="4"
                      strokeLinecap="round"
                      animate={{
                        strokeDasharray: ["0, 600", "600, 0"],
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />

                    {/* Power Quality Indicator */}
                    <rect x="150" y="370" width="100" height="80" fill="rgb(10, 22, 40)" stroke="rgb(0, 149, 255)" strokeWidth="1" rx="5" />
                    <text x="200" y="395" textAnchor="middle" fill="rgb(132, 204, 22)" fontSize="12" fontWeight="bold">
                      PQ: GOOD
                    </text>
                    <text x="200" y="415" textAnchor="middle" fill="rgb(0, 149, 255)" fontSize="10">
                      THD: 3.2%
                    </text>
                    <text x="200" y="435" textAnchor="middle" fill="rgb(0, 149, 255)" fontSize="10">
                      Voltage: 480V
                    </text>

                    {/* Status Monitors */}
                    <g>
                      <rect x="30" y="100" width="80" height="60" fill="rgb(10, 22, 40)" stroke="rgb(132, 204, 22)" strokeWidth="1" rx="4" />
                      <text x="70" y="120" textAnchor="middle" fill="rgb(132, 204, 22)" fontSize="10" fontWeight="bold">
                        Motor 1
                      </text>
                      <text x="70" y="135" textAnchor="middle" fill="rgb(156, 163, 175)" fontSize="9">
                        Healthy
                      </text>
                      <text x="70" y="150" textAnchor="middle" fill="rgb(156, 163, 175)" fontSize="9">
                        Vib: 0.2g
                      </text>
                    </g>

                    <g>
                      <rect x="160" y="100" width="80" height="60" fill="rgb(10, 22, 40)" stroke="rgb(132, 204, 22)" strokeWidth="1" rx="4" />
                      <text x="200" y="120" textAnchor="middle" fill="rgb(132, 204, 22)" fontSize="10" fontWeight="bold">
                        Motor 2
                      </text>
                      <text x="200" y="135" textAnchor="middle" fill="rgb(156, 163, 175)" fontSize="9">
                        Healthy
                      </text>
                      <text x="200" y="150" textAnchor="middle" fill="rgb(156, 163, 175)" fontSize="9">
                        Vib: 0.3g
                      </text>
                    </g>

                    <g>
                      <rect x="290" y="100" width="80" height="60" fill="rgb(10, 22, 40)" stroke="rgb(132, 204, 22)" strokeWidth="1" rx="4" />
                      <text x="330" y="120" textAnchor="middle" fill="rgb(132, 204, 22)" fontSize="10" fontWeight="bold">
                        Motor 3
                      </text>
                      <text x="330" y="135" textAnchor="middle" fill="rgb(156, 163, 175)" fontSize="9">
                        Healthy
                      </text>
                      <text x="330" y="150" textAnchor="middle" fill="rgb(156, 163, 175)" fontSize="9">
                        Vib: 0.1g
                      </text>
                    </g>
                  </g>

                  <text x="200" y="70" textAnchor="middle" fill="rgb(0, 149, 255)" fontSize="16" fontWeight="bold">
                    Production Line Monitoring
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
                    All Systems Operational | Energy Optimized
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
              Built for 24/7 industrial operations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: '🔧', title: 'Predictive Maintenance', description: 'Vibration, thermal, and electrical signatures detect failures weeks early' },
              { icon: '⚡', title: 'Power Quality', description: 'Real-time harmonics, sag/swell, and transient monitoring with IEEE 519 compliance' },
              { icon: '💰', title: 'Demand Response', description: 'Automated load shedding and peak shaving to minimize demand charges' },
              { icon: '📊', title: 'Energy Analytics', description: 'Machine-level energy profiling with AI-driven efficiency recommendations' },
              { icon: '🔔', title: 'Smart Alerts', description: 'Context-aware notifications with severity ranking and remediation guidance' },
              { icon: '📋', title: 'Compliance Reports', description: 'Automated OSHA, EPA, and safety system documentation for audits' }
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
              60%+ Downtime Reduction
            </h2>
            <p className="text-xl text-gray-400">
              Real results from industrial deployments
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { value: '60%+', label: 'Downtime Reduction', color: 'voltry-blue' },
              { value: '25%', label: 'Energy Cost Savings', color: 'voltry-lime' },
              { value: '48hrs', label: 'Failure Warning', color: 'voltry-purple' },
              { value: '90%', label: 'Faster Audits', color: 'voltry-blue' }
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
                  IN
                </div>
              </div>
              <div>
                <p className="text-xl text-gray-700 mb-6 italic">
                  "VoltryOS detected bearing wear in our main production motor 3 weeks before catastrophic failure. We scheduled a weekend replacement instead of facing a 5-day emergency shutdown. That one alert saved us $3.7M in lost production. Our downtime is down 68% year-over-year."
                </p>
                <p className="text-voltry-navy font-bold">Plant Manager</p>
                <p className="text-gray-600">Automotive Manufacturing, 400k sq ft Facility</p>
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
                  Case Study: Automotive Manufacturing Plant
                </h2>
                <p className="text-xl text-gray-300 mb-6">
                  How VoltryOS helped a 400k sq ft manufacturing facility reduce downtime by 68% and cut energy costs by 28%.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    'Prevented 11 motor failures in first year through predictive maintenance',
                    'Reduced energy costs by 28% through demand response optimization',
                    'Downtime reduced from 180 hours/year to 58 hours/year',
                    'ROI achieved in 5.8 months with $4.2M annual savings'
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
              Ready to Reduce Downtime?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join manufacturers using VoltryOS to maximize uptime and minimize energy costs.
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

export default IndustrialPage
