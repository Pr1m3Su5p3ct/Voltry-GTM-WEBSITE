'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Check } from 'lucide-react'

const FreeTierCTA = () => {
  const features = [
    'Unified dashboard for all your systems',
    'Real-time monitoring & alerts',
    'Basic predictive analytics',
    'Compliance reporting (NERC CIP, IEEE)',
    '90 days of dedicated support',
    'Free forever - no hidden fees'
  ]

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-voltry-navy via-voltry-blue to-voltry-purple py-20">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,149,255,0.05)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%] animate-[gradient_15s_ease_infinite]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          {/* Countdown Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-6"
          >
            <div className="bg-voltry-navy/80 backdrop-blur-sm border border-voltry-lime px-6 py-3 rounded-full">
              <p className="text-voltry-lime text-sm font-semibold">
                Only 847 spots remaining in our Free Tier program
              </p>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Get $50,000 in Free Monitoring
            <br />
            <span className="bg-gradient-to-r from-voltry-lime to-voltry-blue bg-clip-text text-transparent">
              On Us. Forever.
            </span>
          </motion.h2>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12"
          >
            VoltryOS unified dashboard for your facility. No credit card. No contracts.
            Just better visibility in 48 hours.
          </motion.p>
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 md:p-12 mb-10"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            What's Included in Your Free Install
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="flex items-start gap-3"
              >
                <div className="flex-shrink-0 w-6 h-6 bg-voltry-lime rounded-full flex items-center justify-center mt-1">
                  <Check className="w-4 h-4 text-voltry-navy" strokeWidth={3} />
                </div>
                <p className="text-gray-200 text-lg">{feature}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1 }}
            className="text-center"
          >
            <Link
              href="/start-free"
              className="inline-block px-12 py-6 bg-gradient-to-r from-voltry-lime to-voltry-blue hover:from-voltry-lime/90 hover:to-voltry-blue/90 text-voltry-navy text-xl md:text-2xl font-bold rounded-xl transition-all hover:shadow-2xl hover:shadow-voltry-lime/50 hover:scale-105"
            >
              Claim Your Free Install →
            </Link>
          </motion.div>
        </motion.div>

        {/* Trust Signals */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 text-center"
        >
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-voltry-lime/20 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-voltry-lime" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div className="text-left">
              <p className="text-white font-semibold">Setup in 48 hours</p>
              <p className="text-gray-400 text-sm">or we pay you $1,000</p>
            </div>
          </div>

          <div className="hidden md:block w-px h-12 bg-white/20" />

          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-voltry-blue/20 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-voltry-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <div className="text-left">
              <p className="text-white font-semibold">250+ facilities</p>
              <p className="text-gray-400 text-sm">trust VoltryOS</p>
            </div>
          </div>

          <div className="hidden md:block w-px h-12 bg-white/20" />

          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-voltry-purple/20 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-voltry-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
            </div>
            <div className="text-left">
              <p className="text-white font-semibold">No credit card</p>
              <p className="text-gray-400 text-sm">required to start</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FreeTierCTA
