'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const DataCentersPage = () => {
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
              99.999% Uptime Demands{' '}
              <span className="bg-gradient-to-r from-voltry-blue to-voltry-purple bg-clip-text text-transparent">
                Intelligence
              </span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Mission-critical infrastructure requires predictive intelligence. VoltryOS delivers proactive monitoring, automated compliance, and 48-hour failure warnings for data center operations.
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
                <p className="text-3xl font-bold text-voltry-blue mb-2">99.999%</p>
                <p className="text-sm text-gray-400">Uptime Guarantee</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-voltry-purple mb-2">$2M+</p>
                <p className="text-sm text-gray-400">Avg Savings/Year</p>
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
              Data Center Challenges
            </h2>
            <p className="text-xl text-gray-600">
              Traditional monitoring fails when milliseconds matter
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12" stroke="currentColor">
                    <circle cx="32" cy="32" r="24" strokeWidth="2" />
                    <path d="M32 16 L32 32 L44 32" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                ),
                title: 'Reactive Maintenance',
                description: 'Equipment failures detected only after downtime begins, costing millions in SLA violations.'
              },
              {
                icon: (
                  <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12" stroke="currentColor">
                    <rect x="16" y="20" width="32" height="24" strokeWidth="2" />
                    <path d="M24 32 L32 40 L40 32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M32 40 L32 48" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                ),
                title: 'Inefficient Cooling',
                description: 'PUE above 1.6 due to lack of real-time optimization across HVAC and airflow systems.'
              },
              {
                icon: (
                  <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12" stroke="currentColor">
                    <rect x="20" y="16" width="24" height="32" strokeWidth="2" />
                    <path d="M26 24 L38 24 M26 30 L38 30 M26 36 L32 36" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                ),
                title: 'Manual Compliance',
                description: 'Hours spent on noise testing and environmental reporting for permits and audits.'
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
              VoltryOS for Data Center Infrastructure
            </h2>
            <p className="text-xl text-gray-400">
              Multi-domain intelligence purpose-built for five 9s operations
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
                  title: 'PUE Automation',
                  description: 'Real-time power usage effectiveness monitoring with AI-driven HVAC optimization. Achieve PUE of 1.2-1.3 automatically.',
                  metric: '30% cooling cost reduction'
                },
                {
                  title: 'Predictive Maintenance',
                  description: 'Multi-domain sensing detects failing UPS batteries, PDU anomalies, and generator issues 48 hours before failure.',
                  metric: '99.999% uptime guarantee'
                },
                {
                  title: 'Noise Compliance',
                  description: 'Automated acoustic monitoring and reporting for local noise ordinances. Generate compliance reports in seconds.',
                  metric: '91% faster permit renewals'
                },
                {
                  title: 'Capacity Planning',
                  description: 'AI-powered load forecasting and thermal mapping to optimize rack placement and prevent hot spots.',
                  metric: '20% capacity increase'
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
                  {/* Server Racks */}
                  {[0, 1, 2, 3, 4].map((i) => (
                    <g key={i}>
                      <rect
                        x={50 + i * 60}
                        y="150"
                        width="40"
                        height="300"
                        fill="none"
                        stroke="rgb(0, 149, 255)"
                        strokeWidth="2"
                        opacity="0.6"
                      />
                      {[0, 1, 2, 3, 4, 5, 6].map((j) => (
                        <motion.rect
                          key={`${i}-${j}`}
                          x={54 + i * 60}
                          y={160 + j * 40}
                          width="32"
                          height="30"
                          fill="rgb(0, 149, 255)"
                          opacity="0.3"
                          animate={{
                            opacity: [0.3, 0.8, 0.3],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.2 + j * 0.1,
                          }}
                        />
                      ))}
                    </g>
                  ))}

                  {/* Temperature Sensors */}
                  {[0, 1, 2, 3, 4].map((i) => (
                    <motion.circle
                      key={`temp-${i}`}
                      cx={70 + i * 60}
                      cy="120"
                      r="6"
                      fill="rgb(132, 204, 22)"
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.6, 1, 0.6],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.3,
                      }}
                    />
                  ))}

                  {/* Power Lines */}
                  <motion.path
                    d="M 200 470 L 200 520"
                    stroke="rgb(139, 92, 246)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    animate={{
                      strokeDasharray: ["0, 100", "100, 0"],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  />

                  {/* Status Labels */}
                  <text x="200" y="90" textAnchor="middle" fill="rgb(0, 149, 255)" fontSize="16" fontWeight="bold">
                    Data Center Floor
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
                    PUE: 1.25 | Temp: Optimal
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
              Enterprise-grade monitoring with AI-powered intelligence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: '⚡', title: 'Power Monitoring', description: 'Real-time PDU, UPS, and generator monitoring with <1% accuracy' },
              { icon: '❄️', title: 'Thermal Management', description: 'HVAC optimization with predictive cooling based on load forecasting' },
              { icon: '🔊', title: 'Acoustic Sensing', description: 'Continuous noise monitoring with automated compliance reporting' },
              { icon: '📊', title: 'PUE Analytics', description: 'Live PUE calculation with trend analysis and optimization recommendations' },
              { icon: '🔔', title: 'Smart Alerts', description: '48-hour early warnings with root cause analysis and remediation steps' },
              { icon: '🔒', title: 'Security & Compliance', description: 'SOC 2 Type II, ISO 27001, with audit-ready logs and reports' }
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
              Average Annual Savings: $2M+
            </h2>
            <p className="text-xl text-gray-400">
              Real ROI from real customers
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { value: '30%', label: 'Cooling Cost Reduction', color: 'voltry-blue' },
              { value: '99.999%', label: 'Uptime Achieved', color: 'voltry-lime' },
              { value: '48hrs', label: 'Failure Warning Time', color: 'voltry-purple' },
              { value: '91%', label: 'Faster Compliance', color: 'voltry-blue' }
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
                  DC
                </div>
              </div>
              <div>
                <p className="text-xl text-gray-700 mb-6 italic">
                  "VoltryOS helped us maintain 99.999% uptime while reducing our cooling costs by 32%. The predictive maintenance caught a failing UPS battery 2 days before it would have caused an outage. This system paid for itself in the first quarter."
                </p>
                <p className="text-voltry-navy font-bold">Director of Operations</p>
                <p className="text-gray-600">Enterprise Data Center, 15MW Facility</p>
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
                  Case Study: 15MW Colocation Facility
                </h2>
                <p className="text-xl text-gray-300 mb-6">
                  How VoltryOS helped a Tier III data center achieve 99.999% uptime while reducing operational costs by $2.4M annually.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    'Prevented 4 critical outages in first year',
                    'Reduced PUE from 1.67 to 1.24',
                    'Automated compliance reporting saved 200+ hours/year',
                    'ROI achieved in 3.2 months'
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
              Ready to Achieve Five 9s?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join those with 50M training hours using VoltryOS for mission-critical operations.
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

export default DataCentersPage
