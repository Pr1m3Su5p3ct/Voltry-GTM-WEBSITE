'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Star, GitFork, Users, Code } from 'lucide-react'

const OpenSource = () => {
  return (
    <section className="relative py-20 bg-white overflow-hidden">
      {/* Coming Soon Overlay */}
      <div className="absolute inset-0 bg-white/80 backdrop-blur-md z-30 flex items-center justify-center">
        <div className="text-center">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-voltry-blue to-voltry-purple text-white px-12 py-8 rounded-2xl shadow-2xl border-4 border-white"
          >
            <h3 className="text-4xl font-bold mb-2">Coming Soon</h3>
            <p className="text-xl opacity-90">Open Source Release Q2 2026</p>
          </motion.div>
        </div>
      </div>

      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-voltry-blue/5 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-block bg-voltry-blue/10 text-voltry-blue px-4 py-2 rounded-full text-sm font-semibold mb-6"
            >
              Open Source Commitment
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold text-voltry-navy mb-6"
            >
              Open Source Core.
              <br />
              <span className="bg-gradient-to-r from-voltry-blue to-voltry-purple bg-clip-text text-transparent">
                Enterprise Features.
              </span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-4 mb-8 text-gray-700 text-lg"
            >
              <p>
                <strong className="text-voltry-navy">VoltryOS is built on open source principles.</strong> Our core monitoring and data collection layer is MIT licensed, giving you complete transparency and control over your infrastructure data.
              </p>
              <p>
                We believe vendor lock-in is toxic to critical infrastructure. You should own your data, understand your systems, and have the freedom to modify your monitoring tools.
              </p>
              <p>
                Our business model is simple: the open source core handles monitoring. Enterprise features like federated AI, predictive analytics, and automated remediation are paid add-ons. No surprises. No bait-and-switch.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="https://github.com/voltry"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-voltry-navy hover:bg-voltry-navy/90 text-white rounded-lg font-semibold transition-all hover:shadow-lg hover:scale-105"
              >
                <Star className="w-5 h-5" />
                Star Us on GitHub
              </Link>
              <Link
                href="/open-source-philosophy"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-transparent border-2 border-voltry-navy text-voltry-navy hover:bg-voltry-navy hover:text-white rounded-lg font-semibold transition-all"
              >
                <Code className="w-5 h-5" />
                Our Open Source Philosophy
              </Link>
            </motion.div>
          </motion.div>

          {/* Right - GitHub Preview */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* GitHub Card */}
            <div className="bg-voltry-navy rounded-xl shadow-2xl overflow-hidden border border-voltry-blue/20">
              {/* Header */}
              <div className="bg-voltry-navy border-b border-gray-700 px-6 py-4 flex items-center gap-3">
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                <div>
                  <h3 className="text-white font-bold text-lg">voltry/voltryor-core</h3>
                  <p className="text-gray-400 text-sm">Public repository</p>
                </div>
              </div>

              {/* Stats */}
              <div className="px-6 py-6 space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  Open source infrastructure monitoring platform. Real-time sensor fusion, edge computing, and unified dashboards for critical infrastructure.
                </p>

                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-voltry-blue/20 text-voltry-blue rounded-full text-sm">
                    TypeScript
                  </span>
                  <span className="px-3 py-1 bg-voltry-purple/20 text-voltry-purple rounded-full text-sm">
                    Python
                  </span>
                  <span className="px-3 py-1 bg-voltry-lime/20 text-voltry-lime rounded-full text-sm">
                    Rust
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-700">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="text-center"
                  >
                    <div className="flex items-center justify-center gap-1 text-white mb-1">
                      <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                      <span className="text-2xl font-bold">12.4k</span>
                    </div>
                    <p className="text-gray-400 text-sm">Stars</p>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="text-center"
                  >
                    <div className="flex items-center justify-center gap-1 text-white mb-1">
                      <GitFork className="w-5 h-5 text-voltry-blue" />
                      <span className="text-2xl font-bold">1.8k</span>
                    </div>
                    <p className="text-gray-400 text-sm">Forks</p>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="text-center"
                  >
                    <div className="flex items-center justify-center gap-1 text-white mb-1">
                      <Users className="w-5 h-5 text-voltry-purple" />
                      <span className="text-2xl font-bold">247</span>
                    </div>
                    <p className="text-gray-400 text-sm">Contributors</p>
                  </motion.div>
                </div>

                {/* Recent Activity */}
                <div className="pt-4 border-t border-gray-700 space-y-3">
                  <h4 className="text-white font-semibold text-sm mb-3">Recent Activity</h4>

                  {[
                    { action: 'feat: Add Modbus TCP support', time: '2 hours ago', author: '@jsmith' },
                    { action: 'fix: MQTT reconnection logic', time: '5 hours ago', author: '@agarcia' },
                    { action: 'docs: Update installation guide', time: '1 day ago', author: '@mchen' }
                  ].map((activity, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                      className="flex items-start gap-3 text-sm"
                    >
                      <div className="w-2 h-2 bg-voltry-lime rounded-full mt-2 flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="text-gray-300 truncate">{activity.action}</p>
                        <p className="text-gray-500 text-xs">
                          {activity.author} • {activity.time}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="bg-voltry-navy/50 px-6 py-4 border-t border-gray-700">
                <p className="text-gray-400 text-sm">
                  <span className="text-voltry-lime">MIT License</span> • Updated 2 hours ago
                </p>
              </div>
            </div>

            {/* Floating Badge */}
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-4 -right-4 bg-white border-2 border-voltry-lime rounded-lg px-4 py-3 shadow-xl"
            >
              <p className="text-voltry-lime font-bold text-sm">100% Open Core</p>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Trust Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 pt-8 border-t border-gray-200 text-center"
        >
          <p className="text-gray-600 text-lg">
            Join <span className="text-voltry-navy font-bold">2,400+</span> developers building the future of infrastructure monitoring
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default OpenSource
