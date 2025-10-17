'use client'

import { motion } from 'framer-motion'
import { Shield, Zap, Activity, Clock, CheckCircle, AlertTriangle, ArrowRight, Play, TrendingDown, Gauge } from 'lucide-react'
import { useState } from 'react'

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

export default function VoltryGuardPage() {
  const [activeSystemTab, setActiveSystemTab] = useState('harmonic')

  const activeSystems = [
    {
      id: 'harmonic',
      name: 'Harmonic Filtering',
      description: 'Real-time THD reduction through adaptive filter banks',
      metrics: { before: '15% THD', after: '<3% THD', response: '8ms' }
    },
    {
      id: 'vibration',
      name: 'Vibration Damping',
      description: 'Predictive damping for rotating machinery',
      metrics: { before: '12mm/s RMS', after: '2mm/s RMS', response: '6ms' }
    },
    {
      id: 'noise',
      name: 'Noise Cancellation',
      description: 'Active acoustic suppression in transformer rooms',
      metrics: { before: '85 dB', after: '65 dB', response: '9ms' }
    }
  ]

  return (
    <div className="bg-voltry-navy text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-voltry-purple/10 via-voltry-blue/5 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(139,92,246,0.1),transparent_50%)]" />

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, type: 'spring' }}
              className="inline-flex items-center gap-3 bg-voltry-purple/20 border border-voltry-purple/50 px-6 py-3 rounded-full mb-8"
            >
              <Shield className="text-voltry-purple" size={24} />
              <span className="font-semibold text-voltry-purple">Active Protection System</span>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-voltry-purple via-voltry-blue to-voltry-lime bg-clip-text text-transparent"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              VoltryGuard: Don't Just Predict. Prevent.
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Active harmonic filtering. Vibration damping. Noise cancellation.
              <br />
              <span className="text-voltry-blue font-semibold">Coordinated across all three domains in &lt;10ms.</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button className="bg-voltry-purple hover:bg-voltry-blue transition-all duration-300 text-white px-10 py-4 rounded-lg text-lg font-semibold shadow-lg hover:shadow-voltry-purple/50 hover:scale-105 transform">
                Apply for Pilot Program <ArrowRight className="inline ml-2" size={20} />
              </button>
              <button className="bg-slate-800 hover:bg-slate-700 transition-all duration-300 text-white px-10 py-4 rounded-lg text-lg font-semibold border border-slate-700 hover:border-voltry-blue hover:scale-105 transform">
                Watch Demo <Play className="inline ml-2" size={20} />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Video Demo Placeholder */}
      <section className="py-20 px-6 bg-gradient-to-b from-voltry-navy to-slate-950">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative aspect-video bg-gradient-to-br from-slate-900 to-slate-950 rounded-2xl overflow-hidden border-2 border-voltry-purple/30 shadow-2xl"
          >
            <div className="absolute inset-0 flex items-center justify-center bg-slate-900/50 backdrop-blur-sm">
              <div className="text-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="inline-flex items-center justify-center w-24 h-24 bg-voltry-purple hover:bg-voltry-blue rounded-full cursor-pointer mb-6 transition-colors duration-300 shadow-lg shadow-voltry-purple/50"
                >
                  <Play className="text-white ml-2" size={40} />
                </motion.div>
                <p className="text-xl font-semibold mb-2">VoltryGuard in Action</p>
                <p className="text-gray-400">Real-time demo of multi-domain protection</p>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent pointer-events-none" />
          </motion.div>
        </div>
      </section>

      {/* Before/After Waveforms */}
      <section className="py-20 px-6 bg-slate-950">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Active Harmonic Filtering Results
            </h2>
            <p className="text-xl text-gray-400">
              Real-time THD reduction without passive filter banks
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Before */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-red-500/10 to-red-600/5 p-8 rounded-2xl border border-red-500/30"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-red-400">Before VoltryGuard</h3>
                <AlertTriangle className="text-red-400" size={32} />
              </div>

              <div className="bg-slate-950 rounded-xl p-6 mb-6 h-48 flex items-center justify-center relative overflow-hidden">
                <svg className="w-full h-full" viewBox="0 0 400 150">
                  <defs>
                    <linearGradient id="redGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#ef4444" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#ef4444" stopOpacity="0.2" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0,75 Q10,55 20,75 T40,75 Q50,85 60,75 T80,75 Q90,65 100,75 T120,75 Q130,95 140,75 T160,75 Q170,60 180,75 T200,75 Q210,90 220,75 T240,75 Q250,70 260,75 T280,75 Q290,80 300,75 T320,75 Q330,68 340,75 T360,75 Q370,88 380,75 T400,75"
                    stroke="url(#redGradient)"
                    strokeWidth="3"
                    fill="none"
                    className="animate-pulse"
                  />
                </svg>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Total Harmonic Distortion:</span>
                  <span className="text-2xl font-bold text-red-400">15%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Equipment Stress:</span>
                  <span className="text-lg font-semibold text-red-400">High</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Compliance Status:</span>
                  <span className="text-lg font-semibold text-red-400">Non-compliant</span>
                </div>
              </div>
            </motion.div>

            {/* After */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-green-500/10 to-green-600/5 p-8 rounded-2xl border border-green-500/30"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-green-400">With VoltryGuard</h3>
                <CheckCircle className="text-green-400" size={32} />
              </div>

              <div className="bg-slate-950 rounded-xl p-6 mb-6 h-48 flex items-center justify-center relative overflow-hidden">
                <svg className="w-full h-full" viewBox="0 0 400 150">
                  <defs>
                    <linearGradient id="greenGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#22c55e" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#22c55e" stopOpacity="0.2" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0,75 Q50,45 100,75 T200,75 Q250,45 300,75 T400,75"
                    stroke="url(#greenGradient)"
                    strokeWidth="3"
                    fill="none"
                  />
                </svg>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Total Harmonic Distortion:</span>
                  <span className="text-2xl font-bold text-green-400">&lt;3%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Equipment Stress:</span>
                  <span className="text-lg font-semibold text-green-400">Minimal</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Compliance Status:</span>
                  <span className="text-lg font-semibold text-green-400">Compliant</span>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 bg-voltry-blue/10 border border-voltry-blue/30 rounded-xl p-6 text-center"
          >
            <p className="text-lg">
              <span className="text-voltry-blue font-bold">80% reduction in harmonics</span>
              <span className="text-gray-400"> with </span>
              <span className="text-voltry-lime font-bold">&lt;10ms response time</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Response Time Timeline */}
      <section className="py-20 px-6 bg-gradient-to-b from-slate-950 to-voltry-navy">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Lightning-Fast Response
            </h2>
            <p className="text-xl text-gray-400">
              From detection to correction in milliseconds
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="flex items-center justify-between relative">
              <div className="absolute top-8 left-0 right-0 h-1 bg-gradient-to-r from-voltry-purple via-voltry-blue to-voltry-lime" />

              {[
                { time: '0ms', label: 'Anomaly Detected', icon: AlertTriangle, color: 'voltry-purple' },
                { time: '2ms', label: 'Analysis Complete', icon: Activity, color: 'voltry-blue' },
                { time: '5ms', label: 'Filter Applied', icon: Zap, color: 'voltry-lime' },
                { time: '8ms', label: 'System Stabilized', icon: CheckCircle, color: 'green-400' }
              ].map((step, index) => {
                const Icon = step.icon
                return (
                  <motion.div
                    key={step.time}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="relative z-10 flex flex-col items-center"
                  >
                    <div className={`w-16 h-16 rounded-full bg-${step.color} flex items-center justify-center mb-4 shadow-lg shadow-${step.color}/50`}>
                      <Icon className="text-white" size={28} />
                    </div>
                    <div className="text-center bg-slate-900 p-4 rounded-lg border border-slate-800 min-w-[140px]">
                      <p className={`text-2xl font-bold text-${step.color} mb-1`}>{step.time}</p>
                      <p className="text-sm text-gray-400">{step.label}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 text-center"
          >
            <p className="text-gray-400 text-lg">
              Traditional passive filters: <span className="text-red-400 line-through">500-2000ms</span>
            </p>
            <p className="text-voltry-blue text-2xl font-bold mt-2">
              VoltryGuard: &lt;10ms
            </p>
          </motion.div>
        </div>
      </section>

      {/* Active Systems Tabs */}
      <section className="py-20 px-6 bg-voltry-navy">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Tri-Domain Protection
            </h2>
            <p className="text-xl text-gray-400">
              Electrical, mechanical, and acoustic systems working in harmony
            </p>
          </motion.div>

          {/* Tab Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {activeSystems.map((system) => (
              <motion.button
                key={system.id}
                onClick={() => setActiveSystemTab(system.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-8 py-4 rounded-lg font-semibold transition-all duration-300 ${
                  activeSystemTab === system.id
                    ? 'bg-gradient-to-r from-voltry-purple to-voltry-blue text-white shadow-lg shadow-voltry-blue/50'
                    : 'bg-slate-800 text-gray-400 hover:bg-slate-700'
                }`}
              >
                {system.name}
              </motion.button>
            ))}
          </div>

          {/* Tab Content */}
          {activeSystems.map((system) => (
            activeSystemTab === system.id && (
              <motion.div
                key={system.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-br from-slate-900 to-slate-950 rounded-2xl p-8 border border-voltry-blue/30"
              >
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-3xl font-bold mb-4">{system.name}</h3>
                    <p className="text-xl text-gray-400 mb-8">{system.description}</p>

                    <div className="space-y-6">
                      <div className="bg-slate-800 p-6 rounded-xl">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-gray-400">Before</span>
                          <span className="text-red-400 text-2xl font-bold">{system.metrics.before}</span>
                        </div>
                        <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
                          <div className="h-full bg-red-400" style={{ width: '85%' }} />
                        </div>
                      </div>

                      <div className="bg-slate-800 p-6 rounded-xl">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-gray-400">After</span>
                          <span className="text-green-400 text-2xl font-bold">{system.metrics.after}</span>
                        </div>
                        <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
                          <div className="h-full bg-green-400" style={{ width: '20%' }} />
                        </div>
                      </div>

                      <div className="flex items-center gap-3 bg-voltry-blue/10 border border-voltry-blue/30 p-4 rounded-xl">
                        <Clock className="text-voltry-blue" size={24} />
                        <span className="text-lg">Response Time: <span className="font-bold text-voltry-blue">{system.metrics.response}</span></span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-950 rounded-xl p-8 h-80 flex items-center justify-center border border-slate-800">
                    <div className="text-center">
                      <Gauge className="mx-auto mb-4 text-voltry-blue" size={80} />
                      <p className="text-gray-500 text-sm">Real-time monitoring visualization</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          ))}
        </div>
      </section>

      {/* Safety Compliance Badges */}
      <section className="py-20 px-6 bg-gradient-to-b from-voltry-navy to-slate-950">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Safety & Compliance Certified
            </h2>
            <p className="text-xl text-gray-400">
              Meeting the highest international standards
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
          >
            {[
              { name: 'IEC 61508', subtitle: 'SIL 3 Rated', color: 'voltry-blue' },
              { name: 'NERC CIP', subtitle: 'Grid Compliance', color: 'voltry-purple' },
              { name: 'UL 1741', subtitle: 'DER Standard', color: 'voltry-lime' },
              { name: 'ISO 50001', subtitle: 'Energy Mgmt', color: 'voltry-blue' },
              { name: 'IEEE 519', subtitle: 'Harmonic Control', color: 'voltry-purple' }
            ].map((cert, index) => (
              <motion.div
                key={cert.name}
                variants={fadeInUp}
                whileHover={{ scale: 1.05, rotate: 5 }}
                className="bg-gradient-to-br from-slate-900 to-slate-950 p-6 rounded-xl border-2 border-slate-800 hover:border-voltry-blue/50 transition-all duration-300 text-center"
              >
                <Shield className={`mx-auto mb-3 text-${cert.color}`} size={48} />
                <h3 className="text-xl font-bold mb-1">{cert.name}</h3>
                <p className="text-sm text-gray-400">{cert.subtitle}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 bg-green-500/10 border border-green-500/30 rounded-xl p-6 text-center"
          >
            <CheckCircle className="inline mr-2 text-green-400" size={24} />
            <span className="text-lg text-gray-300">
              Full compliance documentation and audit trails included
            </span>
          </motion.div>
        </div>
      </section>

      {/* Pilot Program Application */}
      <section className="py-24 px-6 bg-slate-950">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-voltry-purple/20 via-voltry-blue/10 to-transparent p-12 rounded-3xl border-2 border-voltry-purple/30 text-center"
          >
            <Shield className="mx-auto mb-6 text-voltry-purple" size={64} />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Join the VoltryGuard Pilot Program
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Limited availability for facilities experiencing power quality issues.
              Free installation and 6-month trial for qualified applicants.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                { label: 'Free Installation', value: '$0', icon: CheckCircle },
                { label: 'Trial Period', value: '6 Months', icon: Clock },
                { label: 'Support Level', value: '24/7', icon: Shield }
              ].map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.label} className="bg-slate-900 p-6 rounded-xl border border-slate-800">
                    <Icon className="mx-auto mb-3 text-voltry-blue" size={32} />
                    <p className="text-3xl font-bold text-voltry-blue mb-2">{item.value}</p>
                    <p className="text-gray-400">{item.label}</p>
                  </div>
                )
              })}
            </div>

            <div className="bg-slate-900 p-8 rounded-xl border border-voltry-blue/30 mb-8">
              <h3 className="text-2xl font-bold mb-6">Application Requirements</h3>
              <div className="grid md:grid-cols-2 gap-4 text-left">
                {[
                  'Industrial or commercial facility',
                  'Documented power quality issues',
                  'Existing monitoring infrastructure',
                  'Technical team for collaboration',
                  'Willingness to share anonymized data',
                  'Commitment to evaluation period'
                ].map((req) => (
                  <div key={req} className="flex items-start gap-3">
                    <CheckCircle className="text-green-400 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-300">{req}</span>
                  </div>
                ))}
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-voltry-purple via-voltry-blue to-voltry-lime text-white px-12 py-5 rounded-lg text-xl font-bold shadow-2xl hover:shadow-voltry-purple/50 transition-all duration-300"
            >
              Submit Application <ArrowRight className="inline ml-2" size={24} />
            </motion.button>

            <p className="text-gray-500 text-sm mt-6">
              Applications reviewed within 48 hours. Limited slots available.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
