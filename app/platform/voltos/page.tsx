'use client'

import { motion } from 'framer-motion'
import { Check, GitBranch, Github, ArrowRight, Zap, Clock, DollarSign, Network } from 'lucide-react'
import type { Metadata } from 'next'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function VoltryOSPage() {
  return (
    <div className="bg-voltry-navy text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-voltry-blue/10 via-voltry-purple/5 to-transparent" />
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-voltry-blue via-voltry-purple to-voltry-lime bg-clip-text text-transparent"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              VoltryOS: One Dashboard to Rule Them All
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Unify Schneider, ABB, Eaton, Siemens, Vertiv, and legacy systems.
              Free forever. Setup in 48 hours.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <a href="https://form.typeform.com/to/ezedDSEA" target="_blank" rel="noopener noreferrer" className="bg-voltry-blue hover:bg-voltry-purple transition-all duration-300 text-white px-10 py-4 rounded-lg text-lg font-semibold shadow-lg hover:shadow-voltry-blue/50 hover:scale-105 transform">
                Start Free Integration <ArrowRight className="inline ml-2" size={20} />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Supported Vendors Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-voltry-navy to-slate-950">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Supported Vendors
          </motion.h2>
          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              { name: 'Schneider Electric', color: 'from-green-500 to-green-600' },
              { name: 'ABB', color: 'from-red-500 to-red-600' },
              { name: 'Siemens', color: 'from-blue-500 to-blue-600' },
              { name: 'Eaton', color: 'from-purple-500 to-purple-600' },
              { name: 'Vertiv', color: 'from-yellow-500 to-yellow-600' },
              { name: 'Legrand', color: 'from-pink-500 to-pink-600' },
              { name: 'GE Digital', color: 'from-indigo-500 to-indigo-600' },
              { name: '20+ More', color: 'from-voltry-blue to-voltry-purple' },
            ].map((vendor, index) => (
              <motion.div
                key={vendor.name}
                variants={fadeInUp}
                className="relative group"
              >
                <div className={`bg-gradient-to-br ${vendor.color} p-8 rounded-lg shadow-lg flex flex-col items-center justify-center h-32 hover:scale-105 transition-transform duration-300`}>
                  <p className="text-white font-bold text-center text-sm md:text-base">{vendor.name}</p>
                  <Check className="absolute top-2 right-2 text-white" size={20} />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Protocol Support Table */}
      <section className="py-20 px-6 bg-slate-950">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            className="text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Protocol Support
          </motion.h2>
          <motion.div
            className="bg-slate-900 rounded-xl overflow-hidden shadow-2xl border border-voltry-blue/20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-voltry-blue/10">
                    <th className="px-6 py-4 text-left text-voltry-blue font-semibold">Protocol</th>
                    <th className="px-6 py-4 text-left text-voltry-blue font-semibold">Type</th>
                    <th className="px-6 py-4 text-center text-voltry-blue font-semibold">Support Status</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { protocol: 'Modbus TCP/RTU', type: 'Industrial' },
                    { protocol: 'BACnet IP/MSTP', type: 'Building Automation' },
                    { protocol: 'OPC UA', type: 'Industrial IoT' },
                    { protocol: 'IEC 61850', type: 'Power Utility' },
                    { protocol: 'DNP3', type: 'SCADA' },
                    { protocol: 'SNMP', type: 'Network Management' },
                    { protocol: 'SunSpec Modbus', type: 'Solar/Storage' },
                  ].map((item, index) => (
                    <motion.tr
                      key={item.protocol}
                      className="border-t border-slate-800 hover:bg-voltry-blue/5 transition-colors"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                    >
                      <td className="px-6 py-4 font-mono text-sm">{item.protocol}</td>
                      <td className="px-6 py-4 text-gray-400">{item.type}</td>
                      <td className="px-6 py-4 text-center">
                        <span className="inline-flex items-center gap-2 bg-green-500/20 text-green-400 px-4 py-1 rounded-full text-sm font-semibold">
                          <Check size={16} /> Full Support
                        </span>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Before/After Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-slate-950 to-voltry-navy">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            From Chaos to Clarity
          </motion.h2>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-8 lg:gap-12 items-center">
            {/* Before */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center mb-6">
                <span className="inline-block bg-red-500/20 text-red-400 px-4 py-2 rounded-lg font-semibold mb-4">Before VoltryOS</span>
                <h3 className="text-2xl font-bold text-red-400">5 Separate Dashboards</h3>
              </div>
              <div className="space-y-4">
                {['Schneider EcoStruxure', 'ABB Ability', 'Eaton Foreseer', 'Siemens Navigator', 'Legacy SCADA'].map((system, index) => (
                  <motion.div
                    key={system}
                    className="bg-gradient-to-r from-red-500/10 to-red-600/10 p-4 rounded-lg border border-red-500/30"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <p className="font-mono text-sm text-gray-300">{system}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Arrow - Always visible */}
            <div className="flex justify-center">
              <motion.div
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowRight className="text-voltry-blue" size={64} />
              </motion.div>
            </div>

            {/* After */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center mb-6">
                <span className="inline-block bg-green-500/20 text-green-400 px-4 py-2 rounded-lg font-semibold mb-4">With VoltryOS</span>
                <h3 className="text-2xl font-bold text-green-400">1 Unified Interface</h3>
              </div>
              <motion.div
                className="bg-gradient-to-br from-voltry-blue/20 via-voltry-purple/20 to-voltry-lime/20 p-12 rounded-xl border-2 border-voltry-blue shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-center">
                  <Network className="mx-auto mb-4 text-voltry-blue" size={64} />
                  <p className="text-xl font-bold mb-2">VoltryOS Dashboard</p>
                  <p className="text-gray-400 text-sm">All systems unified. All data normalized.</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Integration Process - 4 Steps */}
      <section className="py-20 px-6 bg-voltry-navy">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl font-bold text-center mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Integration Process
          </motion.h2>
          <motion.p
            className="text-center text-gray-400 text-lg mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            From connection to production in 48 hours
          </motion.p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: 1,
                title: 'Connect Existing Systems',
                description: 'Point us to your infrastructure. We handle the rest.',
                timeline: 'Day 1',
                color: 'voltry-blue'
              },
              {
                step: 2,
                title: 'Data Normalization',
                description: 'Automatically map and standardize all data sources.',
                timeline: 'Day 1-2',
                color: 'voltry-purple'
              },
              {
                step: 3,
                title: 'Dashboard Configuration',
                description: 'Customize views and alerts to your workflow.',
                timeline: 'Day 2',
                color: 'voltry-lime'
              },
              {
                step: 4,
                title: 'Team Training',
                description: 'Quick onboarding session. Start operating.',
                timeline: 'Day 2-3',
                color: 'voltry-blue'
              },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 hover:border-voltry-blue/50 transition-all duration-300 h-full hover:shadow-lg hover:shadow-voltry-blue/20">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-${item.color}/20 text-${item.color} font-bold text-xl mb-4 border-2 border-${item.color}`}>
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{item.description}</p>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock size={16} className="text-voltry-lime" />
                    <span className="text-voltry-lime font-semibold">{item.timeline}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Cards */}
      <section className="py-20 px-6 bg-gradient-to-b from-voltry-navy to-slate-950">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Why VoltryOS?
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Zap,
                stat: '90%',
                label: 'Less time switching dashboards',
                color: 'voltry-blue',
                gradient: 'from-voltry-blue/20 to-voltry-blue/5'
              },
              {
                icon: Network,
                stat: '100%',
                label: 'Vendor coverage',
                color: 'voltry-purple',
                gradient: 'from-voltry-purple/20 to-voltry-purple/5'
              },
              {
                icon: Clock,
                stat: '<48h',
                label: 'Setup time',
                color: 'voltry-lime',
                gradient: 'from-voltry-lime/20 to-voltry-lime/5'
              },
              {
                icon: DollarSign,
                stat: '$0',
                label: 'Forever (no tricks)',
                color: 'voltry-blue',
                gradient: 'from-voltry-blue/20 to-voltry-blue/5'
              },
            ].map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <motion.div
                  key={benefit.label}
                  className={`bg-gradient-to-br ${benefit.gradient} p-8 rounded-xl border border-${benefit.color}/30 text-center hover:scale-105 transition-transform duration-300`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Icon className={`mx-auto mb-4 text-${benefit.color}`} size={48} />
                  <div className={`text-5xl font-bold mb-2 text-${benefit.color}`}>
                    {benefit.stat}
                  </div>
                  <p className="text-gray-300 text-sm">{benefit.label}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Technical Docs CTA */}
      <section className="py-24 px-6 bg-slate-950">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Unify Your Infrastructure?
            </h2>
            <p className="text-xl text-gray-400 mb-12">
              Open source. Free forever. Production-ready in 48 hours.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <a
                href="https://docs.voltry.tech"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                <GitBranch size={20} />
                API Reference
              </a>
              <a
                href="https://github.com/voltry"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                <Github size={20} />
                View on GitHub
              </a>
            </div>

            <motion.button
              className="bg-gradient-to-r from-voltry-blue via-voltry-purple to-voltry-lime text-white px-12 py-5 rounded-lg text-xl font-bold shadow-2xl hover:shadow-voltry-blue/50 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Get Started Free <ArrowRight className="inline ml-2" size={24} />
            </motion.button>

            <p className="text-gray-500 text-sm mt-6">
              No credit card required. No hidden fees. Ever.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
