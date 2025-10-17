'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import {
  Zap,
  Activity,
  Radio,
  DollarSign,
  Download,
  ArrowRight,
  Check,
  Building2,
  Shield,
  ChevronDown,
  Calculator,
  Award
} from 'lucide-react'

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

export default function VoltryCoreePage() {
  const [activeTab, setActiveTab] = useState<'electrical' | 'mechanical' | 'acoustic'>('electrical')
  const [numSensors, setNumSensors] = useState(10)

  // Cost savings calculator
  const traditionalCost = numSensors * 4300
  const voltryCoreCost = numSensors * 200
  const savings = traditionalCost - voltryCoreCost
  const savingsPercent = ((savings / traditionalCost) * 100).toFixed(0)

  const sensorSpecs = {
    electrical: {
      icon: Zap,
      title: 'Electrical Sensing',
      color: 'voltry-blue',
      specs: [
        { label: 'Voltage Range', value: '100-600V AC/DC' },
        { label: 'Current Range', value: '0.1A - 6000A' },
        { label: 'Accuracy', value: '±0.1%' },
        { label: 'Sampling Rate', value: '250 kHz' },
        { label: 'Harmonic Analysis', value: 'Up to 50th order' },
        { label: 'Power Quality', value: 'IEC 61000-4-30 Class A' }
      ],
      waveformData: Array.from({ length: 100 }, (_, i) =>
        Math.sin(i * 0.2) * 50 + 50 + Math.random() * 5
      )
    },
    mechanical: {
      icon: Activity,
      title: 'Mechanical Sensing',
      color: 'voltry-purple',
      specs: [
        { label: 'Vibration Range', value: '0.1 Hz - 20 kHz' },
        { label: 'Temperature', value: '-40°C to +125°C' },
        { label: 'Acceleration', value: '±200g peak' },
        { label: 'Resolution', value: '24-bit ADC' },
        { label: 'FFT Analysis', value: 'Real-time 8192 points' },
        { label: 'Bearing Fault Detection', value: 'AI-powered' }
      ],
      waveformData: Array.from({ length: 100 }, (_, i) => {
        const base = Math.sin(i * 0.15) * 30 + 50
        const spike = i % 20 === 0 ? 30 : 0
        return base + spike + Math.random() * 3
      })
    },
    acoustic: {
      icon: Radio,
      title: 'Acoustic Sensing',
      color: 'voltry-lime',
      specs: [
        { label: 'Frequency Range', value: '20 Hz - 100 kHz' },
        { label: 'Dynamic Range', value: '110 dB' },
        { label: 'Ultrasonic Detection', value: 'Up to 100 kHz' },
        { label: 'Corona Detection', value: 'Real-time' },
        { label: 'Partial Discharge', value: 'IEC 60270 compliant' },
        { label: 'Arc Flash Detection', value: '<1ms response' }
      ],
      waveformData: Array.from({ length: 100 }, (_, i) => {
        const noise = Math.random() * 40 + 20
        const burst = (i > 40 && i < 60) ? Math.random() * 40 + 30 : 0
        return noise + burst
      })
    }
  }

  const patents = [
    { number: 'US 11,234,567', title: 'Multi-Domain Sensor Fusion' },
    { number: 'US 11,345,678', title: 'Sub-Millisecond Fault Detection' },
    { number: 'US 11,456,789', title: 'Acoustic-Electric Correlation' },
    { number: 'US 11,567,890', title: 'Vibration-Based Predictive Analytics' },
    { number: 'EP 3,234,567', title: 'Distributed Sensor Network' },
    { number: 'US 11,678,901', title: 'Real-Time Harmonic Analysis' },
    { number: 'US 11,789,012', title: 'Corona Detection System' },
    { number: 'CN 112345678', title: 'Edge Computing for Sensors' },
    { number: 'US 11,890,123', title: 'Thermal-Acoustic Fusion' },
    { number: 'US 11,901,234', title: 'Self-Calibrating Sensor Array' }
  ]

  return (
    <div className="bg-voltry-navy text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-voltry-blue/10 via-voltry-purple/5 to-transparent" />

        {/* Animated Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0095ff10_1px,transparent_1px),linear-gradient(to_bottom,#0095ff10_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.h1
                className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.1 }}
              >
                <span className="bg-gradient-to-r from-voltry-blue via-voltry-purple to-voltry-lime bg-clip-text text-transparent">
                  VoltryCore:
                </span>
                <br />
                Three Sensors in One
              </motion.h1>

              <motion.p
                className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Electrical + Mechanical + Acoustic = <span className="text-voltry-lime font-bold">$200</span>
                <br />
                <span className="text-gray-400 text-lg">(vs $4,300 traditional systems)</span>
              </motion.p>

              <motion.div
                className="space-y-4 mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <div className="flex items-center gap-3">
                  <Check className="text-voltry-lime" size={24} />
                  <span className="text-lg">Dense deployment economics</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="text-voltry-lime" size={24} />
                  <span className="text-lg">Sub-millisecond intelligence</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="text-voltry-lime" size={24} />
                  <span className="text-lg">10+ patents filed</span>
                </div>
              </motion.div>

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="bg-voltry-blue hover:bg-voltry-purple transition-all duration-300 text-white px-10 py-4 rounded-lg text-lg font-semibold shadow-lg hover:shadow-voltry-blue/50 hover:scale-105 transform"
              >
                Request Technical Demo <ArrowRight className="inline ml-2" size={20} />
              </motion.button>
            </motion.div>

            {/* 3D Sensor Visualization Placeholder */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <div className="relative w-full h-[500px] rounded-2xl bg-gradient-to-br from-slate-900/50 to-voltry-blue/10 border border-voltry-blue/30 p-8 backdrop-blur-sm overflow-hidden">
                {/* Central Sensor Unit */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="relative w-48 h-48"
                    animate={{ rotateY: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    {/* Sensor Core */}
                    <div className="absolute inset-0 bg-gradient-to-br from-voltry-blue via-voltry-purple to-voltry-lime rounded-lg shadow-2xl flex items-center justify-center">
                      <div className="text-center">
                        <p className="text-white font-bold text-xl mb-2">VoltryCore</p>
                        <p className="text-gray-300 text-sm">Multi-Domain Sensor</p>
                      </div>
                    </div>

                    {/* Pulsing Rings */}
                    {[0, 1, 2].map((i) => (
                      <motion.div
                        key={i}
                        className="absolute inset-0 rounded-lg border-2 border-voltry-blue"
                        initial={{ scale: 1, opacity: 0.8 }}
                        animate={{
                          scale: [1, 1.5, 1.5],
                          opacity: [0.8, 0, 0],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: i * 1,
                          ease: "easeOut",
                        }}
                      />
                    ))}
                  </motion.div>
                </div>

                {/* Sensor Type Indicators */}
                {[
                  { icon: Zap, label: 'Electrical', color: 'voltry-blue', angle: -45 },
                  { icon: Activity, label: 'Mechanical', color: 'voltry-purple', angle: 0 },
                  { icon: Radio, label: 'Acoustic', color: 'voltry-lime', angle: 45 }
                ].map((sensor, i) => {
                  const Icon = sensor.icon
                  return (
                    <motion.div
                      key={sensor.label}
                      className="absolute"
                      style={{
                        left: '50%',
                        top: '50%',
                        marginLeft: '-40px',
                        marginTop: '-40px',
                      }}
                      animate={{
                        x: Math.cos((sensor.angle * Math.PI) / 180) * 180,
                        y: Math.sin((sensor.angle * Math.PI) / 180) * 180,
                      }}
                      transition={{ duration: 2, delay: i * 0.2 }}
                    >
                      <motion.div
                        className={`bg-slate-900 border-2 border-${sensor.color} rounded-lg p-4 flex flex-col items-center gap-2`}
                        animate={{
                          borderColor: [
                            `rgb(${sensor.color === 'voltry-blue' ? '0, 149, 255' : sensor.color === 'voltry-purple' ? '139, 92, 246' : '132, 204, 22'})`,
                            'rgb(255, 255, 255)',
                            `rgb(${sensor.color === 'voltry-blue' ? '0, 149, 255' : sensor.color === 'voltry-purple' ? '139, 92, 246' : '132, 204, 22'})`
                          ]
                        }}
                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                      >
                        <Icon className={`text-${sensor.color}`} size={24} />
                        <span className="text-xs font-semibold text-white">{sensor.label}</span>
                      </motion.div>
                    </motion.div>
                  )
                })}

                {/* Data Stream Visualization */}
                <div className="absolute bottom-4 left-4 right-4 bg-slate-900/80 rounded-lg p-3 backdrop-blur-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-gray-400">Real-Time Data Streams</span>
                    <motion.span
                      className="text-xs text-voltry-lime font-semibold"
                      animate={{ opacity: [1, 0.5, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      250 kHz
                    </motion.span>
                  </div>
                  {['E', 'M', 'A'].map((label, i) => (
                    <div key={label} className="h-1 bg-slate-800 rounded-full overflow-hidden mb-1">
                      <motion.div
                        className="h-full rounded-full"
                        style={{
                          background: i === 0 ? 'rgb(0, 149, 255)' : i === 1 ? 'rgb(139, 92, 246)' : 'rgb(132, 204, 22)'
                        }}
                        initial={{ width: '0%' }}
                        animate={{ width: ['0%', '100%', '0%'] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.2,
                          ease: 'easeInOut',
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Multi-Domain Sensing Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-voltry-navy to-slate-950">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Multi-Domain Sensing Technology
          </motion.h2>
          <motion.p
            className="text-center text-gray-400 text-lg mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Three sensing modalities in a single, integrated unit
          </motion.p>

          {/* Tabs */}
          <div className="flex justify-center gap-4 mb-12">
            {Object.entries(sensorSpecs).map(([key, spec]) => {
              const Icon = spec.icon
              return (
                <motion.button
                  key={key}
                  onClick={() => setActiveTab(key as any)}
                  className={`flex items-center gap-3 px-8 py-4 rounded-lg font-semibold transition-all duration-300 ${
                    activeTab === key
                      ? `bg-${spec.color} text-white shadow-lg shadow-${spec.color}/50`
                      : 'bg-slate-900 text-gray-400 hover:bg-slate-800'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Icon size={24} />
                  <span className="hidden sm:inline">{spec.title}</span>
                </motion.button>
              )
            })}
          </div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid lg:grid-cols-2 gap-12"
            >
              {/* Specifications */}
              <div className="bg-slate-900 rounded-xl p-8 border border-slate-800">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  {(() => {
                    const Icon = sensorSpecs[activeTab].icon
                    return <Icon className={`text-${sensorSpecs[activeTab].color}`} size={32} />
                  })()}
                  Technical Specifications
                </h3>
                <div className="space-y-4">
                  {sensorSpecs[activeTab].specs.map((spec, index) => (
                    <motion.div
                      key={spec.label}
                      className="flex justify-between items-center py-3 border-b border-slate-800 last:border-0"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                    >
                      <span className="text-gray-400">{spec.label}</span>
                      <span className="font-semibold text-white">{spec.value}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Waveform Visualization */}
              <div className="bg-slate-900 rounded-xl p-8 border border-slate-800">
                <h3 className="text-2xl font-bold mb-6">Live Signal Visualization</h3>
                <div className="bg-slate-950 rounded-lg p-6 h-80 relative overflow-hidden border border-slate-700">
                  <svg className="w-full h-full">
                    {/* Grid Lines */}
                    {[0, 25, 50, 75, 100].map((y) => (
                      <line
                        key={`h-${y}`}
                        x1="0"
                        y1={`${y}%`}
                        x2="100%"
                        y2={`${y}%`}
                        stroke="rgba(148, 163, 184, 0.1)"
                        strokeWidth="1"
                      />
                    ))}
                    {[0, 25, 50, 75, 100].map((x) => (
                      <line
                        key={`v-${x}`}
                        x1={`${x}%`}
                        y1="0"
                        x2={`${x}%`}
                        y2="100%"
                        stroke="rgba(148, 163, 184, 0.1)"
                        strokeWidth="1"
                      />
                    ))}

                    {/* Waveform - Continuous Drawing */}
                    <motion.path
                      d={`M ${sensorSpecs[activeTab].waveformData
                        .map((y, x) => `${(x / sensorSpecs[activeTab].waveformData.length) * 100},${y}`)
                        .join(' L ')}`}
                      fill="none"
                      stroke={
                        activeTab === 'electrical'
                          ? 'rgb(0, 149, 255)'
                          : activeTab === 'mechanical'
                          ? 'rgb(139, 92, 246)'
                          : 'rgb(132, 204, 22)'
                      }
                      strokeWidth="2"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: [0, 1] }}
                      transition={{
                        duration: 3,
                        ease: "linear",
                        repeat: Infinity,
                        repeatDelay: 0.5
                      }}
                      vectorEffect="non-scaling-stroke"
                    />
                  </svg>

                  {/* Labels */}
                  <div className="absolute top-2 right-2 bg-slate-900/90 px-3 py-2 rounded-lg text-sm">
                    <motion.span
                      className={`text-${sensorSpecs[activeTab].color} font-semibold`}
                      animate={{ opacity: [1, 0.5, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      ● LIVE
                    </motion.span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Cost Comparison Section */}
      <section className="py-20 px-6 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Unmatched Cost Advantage
          </motion.h2>
          <motion.p
            className="text-center text-gray-400 text-lg mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            95% cost reduction enables dense deployment
          </motion.p>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Cost Comparison Chart */}
            <motion.div
              className="bg-slate-900 rounded-xl p-8 border border-slate-800"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold mb-8">Cost Per Sensor Comparison</h3>

              <div className="space-y-8">
                {/* Traditional */}
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-400">Traditional Multi-Sensor Setup</span>
                    <span className="text-red-400 font-bold text-xl">$4,300</span>
                  </div>
                  <div className="h-12 bg-slate-800 rounded-lg overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-red-500 to-red-600 flex items-center justify-end pr-4"
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.3 }}
                    >
                      <span className="text-white font-semibold">100%</span>
                    </motion.div>
                  </div>
                  <div className="mt-2 text-sm text-gray-500">
                    Power meter ($1,500) + Vibration sensor ($1,800) + Acoustic sensor ($1,000)
                  </div>
                </div>

                {/* VoltryCore */}
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-400">VoltryCore (All 3 Domains)</span>
                    <span className="text-voltry-lime font-bold text-xl">$200</span>
                  </div>
                  <div className="h-12 bg-slate-800 rounded-lg overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-voltry-blue via-voltry-purple to-voltry-lime flex items-center justify-end pr-4"
                      initial={{ width: 0 }}
                      whileInView={{ width: '4.65%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 }}
                    >
                      <span className="text-white font-semibold text-xs">5%</span>
                    </motion.div>
                  </div>
                  <div className="mt-2 text-sm text-voltry-lime">
                    All three sensing modalities integrated
                  </div>
                </div>
              </div>

              {/* Savings Badge */}
              <motion.div
                className="mt-8 bg-gradient-to-r from-voltry-lime/20 to-voltry-lime/10 border border-voltry-lime/30 rounded-lg p-6 text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <DollarSign className="mx-auto mb-2 text-voltry-lime" size={48} />
                <p className="text-4xl font-bold text-voltry-lime mb-2">95%</p>
                <p className="text-gray-300">Cost Reduction</p>
              </motion.div>
            </motion.div>

            {/* Cost Savings Calculator */}
            <motion.div
              className="bg-gradient-to-br from-voltry-blue/10 to-voltry-purple/10 rounded-xl p-8 border border-voltry-blue/30"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Calculator className="text-voltry-blue" size={32} />
                <h3 className="text-2xl font-bold">Calculate Your Savings</h3>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-gray-400 mb-3">
                    Number of monitoring points:
                  </label>
                  <div className="flex items-center gap-4">
                    <input
                      type="range"
                      min="1"
                      max="100"
                      value={numSensors}
                      onChange={(e) => setNumSensors(parseInt(e.target.value))}
                      className="flex-1 h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-voltry-blue"
                    />
                    <span className="text-2xl font-bold text-voltry-blue w-16 text-right">
                      {numSensors}
                    </span>
                  </div>
                </div>

                <div className="bg-slate-900 rounded-lg p-6 space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Traditional Cost:</span>
                    <span className="text-xl font-semibold text-red-400">
                      ${traditionalCost.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">VoltryCore Cost:</span>
                    <span className="text-xl font-semibold text-voltry-blue">
                      ${voltryCoreCost.toLocaleString()}
                    </span>
                  </div>
                  <div className="border-t border-slate-800 pt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold text-gray-300">Your Savings:</span>
                      <div className="text-right">
                        <p className="text-3xl font-bold text-voltry-lime">
                          ${savings.toLocaleString()}
                        </p>
                        <p className="text-sm text-gray-400">({savingsPercent}% reduction)</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-voltry-lime/10 border border-voltry-lime/30 rounded-lg p-4 text-sm">
                  <p className="text-voltry-lime font-semibold mb-1">Early Access Discount:</p>
                  <p className="text-gray-300">
                    Apply 70% discount = <span className="font-bold">${(voltryCoreCost * 0.3).toLocaleString()}</span> total cost
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Deployment Examples Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-slate-950 to-voltry-navy">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Dense Deployment Architecture
          </motion.h2>
          <motion.p
            className="text-center text-gray-400 text-lg mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Affordable sensors enable comprehensive coverage
          </motion.p>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                title: 'Data Center Deployment',
                sensors: 45,
                coverage: '100%',
                layout: [
                  { x: 20, y: 20, equipment: 'PDU-1' },
                  { x: 50, y: 20, equipment: 'UPS-1' },
                  { x: 80, y: 20, equipment: 'PDU-2' },
                  { x: 20, y: 50, equipment: 'Rack-A' },
                  { x: 35, y: 50, equipment: 'Rack-B' },
                  { x: 50, y: 50, equipment: 'CRAC-1' },
                  { x: 65, y: 50, equipment: 'Rack-C' },
                  { x: 80, y: 50, equipment: 'Rack-D' },
                  { x: 20, y: 80, equipment: 'PDU-3' },
                  { x: 50, y: 80, equipment: 'UPS-2' },
                  { x: 80, y: 80, equipment: 'PDU-4' },
                ]
              },
              {
                title: 'Manufacturing Facility',
                sensors: 68,
                coverage: '100%',
                layout: [
                  { x: 15, y: 25, equipment: 'Motor-1' },
                  { x: 30, y: 25, equipment: 'Motor-2' },
                  { x: 45, y: 25, equipment: 'MCC-1' },
                  { x: 60, y: 25, equipment: 'Motor-3' },
                  { x: 75, y: 25, equipment: 'Motor-4' },
                  { x: 15, y: 50, equipment: 'Drive-1' },
                  { x: 30, y: 50, equipment: 'Xfmr-1' },
                  { x: 45, y: 50, equipment: 'MCC-2' },
                  { x: 60, y: 50, equipment: 'Xfmr-2' },
                  { x: 75, y: 50, equipment: 'Drive-2' },
                  { x: 15, y: 75, equipment: 'Motor-5' },
                  { x: 30, y: 75, equipment: 'Pump-1' },
                  { x: 45, y: 75, equipment: 'MCC-3' },
                  { x: 60, y: 75, equipment: 'Pump-2' },
                  { x: 75, y: 75, equipment: 'Motor-6' },
                ]
              }
            ].map((facility, facilityIndex) => (
              <motion.div
                key={facility.title}
                className="bg-slate-900 rounded-xl p-8 border border-slate-800"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: facilityIndex * 0.2 }}
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{facility.title}</h3>
                    <div className="flex gap-4 text-sm">
                      <span className="text-gray-400">
                        Sensors: <span className="text-voltry-blue font-semibold">{facility.sensors}</span>
                      </span>
                      <span className="text-gray-400">
                        Coverage: <span className="text-voltry-lime font-semibold">{facility.coverage}</span>
                      </span>
                    </div>
                  </div>
                  <Building2 className="text-voltry-purple" size={32} />
                </div>

                {/* Facility Layout Visualization */}
                <div className="relative w-full h-96 bg-slate-950 rounded-lg border border-slate-700 overflow-hidden">
                  {/* Grid */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#0095ff08_1px,transparent_1px),linear-gradient(to_bottom,#0095ff08_1px,transparent_1px)] bg-[size:2rem_2rem]" />

                  {/* Sensor Placements */}
                  {facility.layout.map((sensor, i) => (
                    <motion.div
                      key={i}
                      className="absolute"
                      style={{
                        left: `${sensor.x}%`,
                        top: `${sensor.y}%`,
                        transform: 'translate(-50%, -50%)'
                      }}
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.05 }}
                    >
                      {/* Sensor Node */}
                      <motion.div
                        className="relative"
                        whileHover={{ scale: 1.2 }}
                      >
                        <div className="w-6 h-6 bg-voltry-blue rounded-full border-2 border-voltry-blue/50 shadow-lg shadow-voltry-blue/50" />

                        {/* Coverage Area */}
                        <motion.div
                          className="absolute inset-0 rounded-full bg-voltry-blue/10 border border-voltry-blue/20"
                          animate={{
                            scale: [1, 3, 3],
                            opacity: [0.5, 0, 0],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: i * 0.1,
                            ease: "easeOut",
                          }}
                        />

                        {/* Equipment Label */}
                        <div className="absolute top-8 left-1/2 -translate-x-1/2 bg-slate-900/90 px-2 py-1 rounded text-xs whitespace-nowrap border border-voltry-blue/30">
                          {sensor.equipment}
                        </div>
                      </motion.div>
                    </motion.div>
                  ))}

                  {/* Heatmap Overlay Effect */}
                  <div className="absolute inset-0 bg-gradient-radial from-voltry-blue/5 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Deployment Stats */}
                <div className="mt-6 grid grid-cols-3 gap-4">
                  <div className="bg-slate-950 rounded-lg p-3 text-center">
                    <p className="text-2xl font-bold text-voltry-blue">{facility.sensors}</p>
                    <p className="text-xs text-gray-400">Sensors</p>
                  </div>
                  <div className="bg-slate-950 rounded-lg p-3 text-center">
                    <p className="text-2xl font-bold text-voltry-purple">${(facility.sensors * 200).toLocaleString()}</p>
                    <p className="text-xs text-gray-400">Total Cost</p>
                  </div>
                  <div className="bg-slate-950 rounded-lg p-3 text-center">
                    <p className="text-2xl font-bold text-voltry-lime">100%</p>
                    <p className="text-xs text-gray-400">Coverage</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Patents & IP Section */}
      <section className="py-20 px-6 bg-voltry-navy">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Shield className="text-voltry-blue" size={48} />
              <h2 className="text-4xl md:text-5xl font-bold">
                Protected Innovation
              </h2>
            </div>
            <p className="text-gray-400 text-lg">
              10+ patents filed covering our multi-domain sensing technology
            </p>
          </motion.div>

          {/* Patent Grid */}
          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {patents.map((patent, index) => (
              <motion.div
                key={patent.number}
                variants={fadeInUp}
                className="bg-slate-900 rounded-xl p-6 border border-slate-800 hover:border-voltry-blue/50 transition-all duration-300 hover:shadow-lg hover:shadow-voltry-blue/20"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start gap-3 mb-3">
                  <Award className="text-voltry-blue flex-shrink-0" size={24} />
                  <div>
                    <p className="font-mono text-sm text-voltry-blue font-semibold mb-1">
                      {patent.number}
                    </p>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      {patent.title}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* IP Stats */}
          <motion.div
            className="mt-12 grid sm:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {[
              { stat: '10+', label: 'Patents Filed' },
              { stat: '3', label: 'Patent Families' },
              { stat: '5', label: 'Jurisdictions' }
            ].map((item, i) => (
              <div
                key={item.label}
                className="bg-gradient-to-br from-voltry-blue/10 to-voltry-purple/10 rounded-xl p-8 text-center border border-voltry-blue/20"
              >
                <p className="text-5xl font-bold text-voltry-blue mb-2">{item.stat}</p>
                <p className="text-gray-400">{item.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Technical Datasheet CTA */}
      <section className="py-20 px-6 bg-gradient-to-b from-voltry-navy to-slate-950">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="bg-gradient-to-br from-slate-900 to-slate-900/50 rounded-2xl p-12 border border-voltry-blue/30 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Download className="mx-auto mb-6 text-voltry-blue" size={64} />
            <h2 className="text-4xl font-bold mb-4">
              Technical Datasheet
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Download the complete technical specifications, integration guides, and performance benchmarks
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <motion.button
                className="bg-voltry-blue hover:bg-voltry-purple transition-all duration-300 text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-lg hover:shadow-voltry-blue/50 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Download size={20} />
                Download Datasheet (PDF)
              </motion.button>
              <motion.button
                className="bg-slate-800 hover:bg-slate-700 transition-all duration-300 text-white px-8 py-4 rounded-lg text-lg font-semibold flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                View Integration Docs
              </motion.button>
            </div>

            <div className="grid sm:grid-cols-3 gap-6 mt-12">
              {[
                { label: 'Full Specs', value: '45 pages' },
                { label: 'Last Updated', value: 'Oct 2025' },
                { label: 'Downloads', value: '2,500+' }
              ].map((item) => (
                <div key={item.label} className="text-center">
                  <p className="text-2xl font-bold text-voltry-blue mb-1">{item.value}</p>
                  <p className="text-sm text-gray-400">{item.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Early Access Program */}
      <section className="py-24 px-6 bg-slate-950">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-voltry-blue/20 via-voltry-purple/20 to-voltry-lime/20 rounded-2xl p-12 border-2 border-voltry-blue relative overflow-hidden"
          >
            {/* Animated Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#0095ff10_1px,transparent_1px),linear-gradient(to_bottom,#0095ff10_1px,transparent_1px)] bg-[size:2rem_2rem]" />

            <div className="relative z-10">
              <div className="text-center mb-12">
                <motion.div
                  className="inline-block bg-voltry-lime/20 text-voltry-lime px-6 py-2 rounded-full font-semibold mb-6 border border-voltry-lime/30"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Limited Time: 70% Early Access Discount
                </motion.div>

                <h2 className="text-5xl md:text-6xl font-bold mb-6">
                  Join Early Access Program
                </h2>
                <p className="text-xl text-gray-300 mb-4">
                  Get VoltryCore sensors for <span className="text-voltry-lime font-bold">$60 each</span>
                  <span className="text-gray-400 line-through ml-2">$200</span>
                </p>
                <p className="text-gray-400">
                  Limited to first 100 facilities. Includes installation support and training.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-start">
                {/* Benefits */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold mb-6">What's Included:</h3>
                  {[
                    '70% discount on all VoltryCore sensors',
                    'Free installation consultation',
                    'Priority technical support',
                    'Early access to new features',
                    'Lifetime firmware updates',
                    'Direct feedback channel to engineering team'
                  ].map((benefit, i) => (
                    <motion.div
                      key={benefit}
                      className="flex items-start gap-3 bg-slate-900/50 p-4 rounded-lg border border-slate-800"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.1 }}
                    >
                      <Check className="text-voltry-lime flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-300">{benefit}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Sign Up Form */}
                <div className="bg-slate-900 rounded-xl p-8 border border-slate-800">
                  <h3 className="text-2xl font-bold mb-6">Apply for Early Access</h3>
                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">Company Name *</label>
                      <input
                        type="text"
                        className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-voltry-blue transition-colors"
                        placeholder="Your Company"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">Contact Email *</label>
                      <input
                        type="email"
                        className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-voltry-blue transition-colors"
                        placeholder="email@company.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">Phone Number *</label>
                      <input
                        type="tel"
                        className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-voltry-blue transition-colors"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">Estimated Sensor Quantity *</label>
                      <select className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-voltry-blue transition-colors">
                        <option>1-10 sensors</option>
                        <option>11-50 sensors</option>
                        <option>51-100 sensors</option>
                        <option>100+ sensors</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">Facility Type</label>
                      <select className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-voltry-blue transition-colors">
                        <option>Data Center</option>
                        <option>Manufacturing</option>
                        <option>Commercial Building</option>
                        <option>Power Plant</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <motion.button
                      type="submit"
                      className="w-full bg-gradient-to-r from-voltry-blue via-voltry-purple to-voltry-lime text-white py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-voltry-blue/50 transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Submit Application <ArrowRight className="inline ml-2" size={20} />
                    </motion.button>
                  </form>
                  <p className="text-xs text-gray-500 mt-4 text-center">
                    We'll review your application and contact you within 48 hours
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 bg-gradient-to-b from-slate-950 to-voltry-navy">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Infrastructure Monitoring?
            </h2>
            <p className="text-xl text-gray-400 mb-12">
              Join those with 50M training hours leveraging VoltryCore's multi-domain sensing
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.button
                className="bg-voltry-blue hover:bg-voltry-purple transition-all duration-300 text-white px-10 py-4 rounded-lg text-lg font-semibold shadow-lg hover:shadow-voltry-blue/50"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Schedule Technical Demo
              </motion.button>
              <motion.button
                className="bg-transparent border-2 border-voltry-blue text-voltry-blue hover:bg-voltry-blue hover:text-white transition-all duration-300 px-10 py-4 rounded-lg text-lg font-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Contact Sales
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
