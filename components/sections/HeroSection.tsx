'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-voltry-navy via-voltry-navy to-voltry-blue/20 pt-16">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0095ff10_1px,transparent_1px),linear-gradient(to_bottom,#0095ff10_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      {/* Animated Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => {
          const randomX1 = Math.random() * 100
          const randomY1 = Math.random() * 100
          const randomX2 = Math.random() * 100
          const randomY2 = Math.random() * 100

          return (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-voltry-blue rounded-full"
              style={{
                left: `${randomX1}%`,
                top: `${randomY1}%`,
              }}
              animate={{
                x: [`0%`, `${randomX2 - randomX1}%`],
                y: [`0%`, `${randomY2 - randomY1}%`],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          )
        })}
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              The Nervous System of the{' '}
              <span className="bg-gradient-to-r from-voltry-blue to-voltry-purple bg-clip-text text-transparent">
                Modern Grid
              </span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Unify fragmented infrastructure. Predict failures 48 hours early.
              Prevent them autonomously.
            </motion.p>

            <motion.p
              className="text-lg text-gray-400 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              From monitoring to intelligence to control — powered by multi-domain sensing + federated AI.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Link
                href="/start-free"
                className="px-8 py-4 bg-voltry-blue hover:bg-voltry-blue/90 text-white rounded-lg text-lg font-semibold transition-all hover:shadow-lg hover:shadow-voltry-blue/50 hover:scale-105 text-center"
              >
                Get $50,000 Free Install →
              </Link>
              <Link
                href="/demo"
                className="px-8 py-4 bg-transparent border-2 border-voltry-blue text-voltry-blue hover:bg-voltry-blue hover:text-white rounded-lg text-lg font-semibold transition-all text-center"
              >
                Watch 3-Min Demo
              </Link>
            </motion.div>

            {/* Social Proof */}
            <motion.div
              className="text-sm text-gray-400 flex flex-wrap items-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <span>Trusted by 250+ facilities</span>
              <span className="text-gray-600">|</span>
              <span>95% prediction accuracy</span>
              <span className="text-gray-600">|</span>
              <span>10+ patents filed</span>
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            {/* Animated Network Visualization */}
            <div className="relative w-full h-[500px] rounded-2xl bg-gradient-to-br from-voltry-blue/10 to-voltry-purple/10 border border-voltry-blue/30 p-8 backdrop-blur-sm">
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Central Node */}
                <motion.div
                  className="relative w-24 h-24 bg-gradient-to-br from-voltry-blue to-voltry-purple rounded-full flex items-center justify-center shadow-lg shadow-voltry-blue/50"
                  animate={{
                    boxShadow: [
                      '0 0 20px rgba(0, 149, 255, 0.5)',
                      '0 0 40px rgba(0, 149, 255, 0.8)',
                      '0 0 20px rgba(0, 149, 255, 0.5)',
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <span className="text-white font-bold text-2xl">V</span>
                </motion.div>

                {/* Orbiting Nodes */}
                {[0, 72, 144, 216, 288].map((angle, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-16 h-16 bg-voltry-navy border-2 border-voltry-blue rounded-full flex items-center justify-center"
                    style={{
                      left: '50%',
                      top: '50%',
                      marginLeft: '-32px',
                      marginTop: '-32px',
                    }}
                    animate={{
                      x: Math.cos((angle * Math.PI) / 180) * 150,
                      y: Math.sin((angle * Math.PI) / 180) * 150,
                      rotate: 360,
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: 'linear',
                      delay: i * 0.5,
                    }}
                  >
                    <div className="w-3 h-3 bg-voltry-blue rounded-full" />
                  </motion.div>
                ))}
              </div>

              {/* Animated Waveforms */}
              <div className="absolute bottom-8 left-8 right-8 space-y-2">
                {[0, 1, 2].map((i) => (
                  <div key={i} className="h-1 bg-voltry-blue/20 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-voltry-blue to-voltry-purple rounded-full"
                      initial={{ width: '0%' }}
                      animate={{ width: '100%' }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.3,
                        ease: 'easeInOut',
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Floating Metrics */}
            <motion.div
              className="absolute -top-4 -right-4 bg-voltry-navy border border-voltry-blue/30 rounded-lg p-4 shadow-lg"
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              <p className="text-voltry-blue font-bold text-2xl">95%</p>
              <p className="text-gray-400 text-sm">Accuracy</p>
            </motion.div>

            <motion.div
              className="absolute -bottom-4 -left-4 bg-voltry-navy border border-voltry-purple/30 rounded-lg p-4 shadow-lg"
              animate={{ y: [5, -5, 5] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            >
              <p className="text-voltry-purple font-bold text-2xl">48hrs</p>
              <p className="text-gray-400 text-sm">Early Warning</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <svg
          className="w-6 h-6 text-voltry-blue"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </motion.div>
    </section>
  )
}

export default HeroSection
