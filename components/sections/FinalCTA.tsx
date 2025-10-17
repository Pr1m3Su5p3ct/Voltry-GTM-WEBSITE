'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Mail, Phone, ArrowRight } from 'lucide-react'

const FinalCTA = () => {
  return (
    <section className="relative py-20 bg-white overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0095ff03_1px,transparent_1px),linear-gradient(to_bottom,#0095ff03_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-voltry-navy mb-6"
          >
            Ready to Unify Your{' '}
            <span className="bg-gradient-to-r from-voltry-blue to-voltry-purple bg-clip-text text-transparent">
              Infrastructure?
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto"
          >
            Get started with $50,000 in free monitoring or schedule a personalized demo to see VoltryOS in action.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Link
              href="/start-free"
              className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-voltry-blue to-voltry-purple hover:from-voltry-blue/90 hover:to-voltry-purple/90 text-white text-lg font-bold rounded-xl transition-all hover:shadow-2xl hover:shadow-voltry-blue/30 hover:scale-105"
            >
              Get $50K Free Install
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
            </Link>

            <Link
              href="/demo"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white border-2 border-voltry-navy text-voltry-navy hover:bg-voltry-navy hover:text-white text-lg font-bold rounded-xl transition-all hover:shadow-xl"
            >
              Schedule a Demo
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </Link>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            <p className="text-gray-600 font-semibold">
              Questions? Our team is here to help.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              {/* Email */}
              <motion.a
                href="mailto:sales@voltry.com"
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3 text-voltry-navy hover:text-voltry-blue transition-colors group"
              >
                <div className="w-12 h-12 bg-voltry-blue/10 rounded-full flex items-center justify-center group-hover:bg-voltry-blue/20 transition-colors">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <p className="text-sm text-gray-600">Email us</p>
                  <p className="font-semibold">sales@voltry.com</p>
                </div>
              </motion.a>

              <div className="hidden sm:block w-px h-12 bg-gray-300" />

              {/* Phone */}
              <motion.a
                href="tel:+18005551234"
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3 text-voltry-navy hover:text-voltry-blue transition-colors group"
              >
                <div className="w-12 h-12 bg-voltry-purple/10 rounded-full flex items-center justify-center group-hover:bg-voltry-purple/20 transition-colors">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <p className="text-sm text-gray-600">Call us</p>
                  <p className="font-semibold">1-800-VOLTRY-1</p>
                </div>
              </motion.a>
            </div>
          </motion.div>

          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 pt-8 border-t border-gray-200"
          >
            <div className="flex flex-wrap items-center justify-center gap-8 text-gray-600">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-voltry-lime" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm">48-hour setup guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-voltry-lime" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm">No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-voltry-lime" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm">Cancel anytime</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-20 left-10 w-64 h-64 bg-voltry-blue/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute bottom-20 right-10 w-64 h-64 bg-voltry-purple/10 rounded-full blur-3xl"
      />
    </section>
  )
}

export default FinalCTA
