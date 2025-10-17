'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import {
  Brain,
  Shield,
  TrendingUp,
  Lock,
  FileText,
  AlertTriangle,
  CheckCircle,
  Zap,
  Activity,
  Timer,
  Target,
  Network,
  Database,
  Eye,
  ArrowRight,
  BarChart3,
  Sparkles
} from 'lucide-react'
import { useState, useRef } from 'react'

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

// Accuracy Gauge Component
function AccuracyGauge({ accuracy = 95 }: { accuracy: number }) {
  const circumference = 2 * Math.PI * 90
  const offset = circumference - (accuracy / 100) * circumference

  return (
    <div className="relative w-64 h-64 mx-auto">
      <svg className="transform -rotate-90 w-64 h-64">
        <circle
          cx="128"
          cy="128"
          r="90"
          stroke="currentColor"
          strokeWidth="12"
          fill="transparent"
          className="text-slate-700"
        />
        <motion.circle
          cx="128"
          cy="128"
          r="90"
          stroke="url(#gradient)"
          strokeWidth="12"
          fill="transparent"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 2, ease: "easeOut" }}
          strokeLinecap="round"
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0095FF" />
            <stop offset="50%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#84CC16" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-6xl font-bold bg-gradient-to-r from-voltry-blue via-voltry-purple to-voltry-lime bg-clip-text text-transparent"
        >
          {accuracy}%
        </motion.div>
        <div className="text-gray-400 text-sm mt-2">Prediction Accuracy</div>
      </div>
    </div>
  )
}

// Prediction Timeline Component
function PredictionTimeline({ caseStudy }: { caseStudy: any }) {
  return (
    <div className="relative pl-8 border-l-2 border-voltry-blue/30">
      {caseStudy.timeline.map((event: any, index: number) => (
        <motion.div
          key={index}
          className="mb-8 relative"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <div className={`absolute -left-[33px] w-4 h-4 rounded-full ${
            event.type === 'prediction' ? 'bg-voltry-blue' :
            event.type === 'action' ? 'bg-voltry-purple' :
            event.type === 'avoided' ? 'bg-voltry-lime' :
            'bg-red-500'
          } border-4 border-voltry-navy`} />
          <div className="bg-slate-900 p-4 rounded-lg border border-slate-800">
            <div className="flex items-start justify-between mb-2">
              <span className={`text-sm font-mono ${
                event.type === 'prediction' ? 'text-voltry-blue' :
                event.type === 'action' ? 'text-voltry-purple' :
                event.type === 'avoided' ? 'text-voltry-lime' :
                'text-red-400'
              }`}>
                {event.time}
              </span>
              {event.type === 'avoided' && (
                <CheckCircle className="text-voltry-lime" size={20} />
              )}
            </div>
            <h4 className="font-semibold mb-1">{event.title}</h4>
            <p className="text-sm text-gray-400">{event.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

// Federated Learning Flow Diagram
function FederatedLearningDiagram() {
  const nodes = [
    { id: 1, label: 'Facility A', x: 50, y: 50, delay: 0 },
    { id: 2, label: 'Facility B', x: 50, y: 160, delay: 0.2 },
    { id: 3, label: 'Facility C', x: 50, y: 270, delay: 0.4 },
    { id: 4, label: 'Central Model', x: 380, y: 160, delay: 0.6 },
  ]

  return (
    <div className="relative h-[450px] bg-gradient-to-br from-slate-900 via-slate-950 to-voltry-navy rounded-2xl p-8 overflow-hidden border-2 border-voltry-blue/30">
      {/* Background Illustration */}
      <div className="absolute inset-0 opacity-10">
        <img
          src="/Illustrations/voltry-illustration-13-grid-node-network.png"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <svg className="absolute inset-0 w-full h-full">
        {/* Animated connections TO central model */}
        {[0, 1, 2].map((index) => (
          <motion.line
            key={`to-${index}`}
            x1={nodes[index].x + 140}
            y1={nodes[index].y + 35}
            x2={nodes[3].x + 20}
            y2={nodes[3].y + 50}
            stroke="url(#lineGradientTo)"
            strokeWidth="3"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: [0, 1], opacity: [0, 0.8, 0] }}
            transition={{ duration: 2, delay: index * 0.4, repeat: Infinity, repeatDelay: 3 }}
          />
        ))}
        {/* Return connections FROM central model */}
        {[0, 1, 2].map((index) => (
          <motion.line
            key={`from-${index}`}
            x1={nodes[3].x + 20}
            y1={nodes[3].y + 50}
            x2={nodes[index].x + 140}
            y2={nodes[index].y + 35}
            stroke="url(#lineGradientFrom)"
            strokeWidth="2"
            strokeDasharray="5,5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: [0, 1], opacity: [0, 0.6, 0] }}
            transition={{ duration: 2, delay: 2 + index * 0.3, repeat: Infinity, repeatDelay: 3 }}
          />
        ))}
        <defs>
          <linearGradient id="lineGradientTo" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0095FF" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="1" />
          </linearGradient>
          <linearGradient id="lineGradientFrom" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#84CC16" stopOpacity="1" />
            <stop offset="100%" stopColor="#84CC16" stopOpacity="0.2" />
          </linearGradient>
        </defs>
      </svg>

      {/* Facility nodes */}
      {nodes.slice(0, 3).map((node, index) => (
        <motion.div
          key={node.id}
          className="absolute bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-4 border-2 border-voltry-blue/40 flex items-center gap-3 shadow-lg"
          style={{ left: `${node.x}px`, top: `${node.y}px`, width: '200px' }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: node.delay }}
          whileHover={{ scale: 1.05, borderColor: 'rgba(0, 149, 255, 0.8)' }}
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          >
            <Database className="text-voltry-blue" size={28} />
          </motion.div>
          <div className="flex-1">
            <div className="text-sm font-bold">{node.label}</div>
            <div className="text-xs text-gray-400">Local Training</div>
            <motion.div
              className="mt-1 text-xs font-mono text-voltry-lime"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, delay: index * 0.3, repeat: Infinity }}
            >
              Training...
            </motion.div>
          </div>
          {/* Upload indicator */}
          <motion.div
            animate={{ opacity: [0, 1, 0], y: [-5, 5, -5] }}
            transition={{ duration: 2, delay: index * 0.4, repeat: Infinity, repeatDelay: 3 }}
          >
            <ArrowRight className="text-voltry-purple" size={20} />
          </motion.div>
        </motion.div>
      ))}

      {/* Central model with enhanced visuals */}
      <motion.div
        className="absolute bg-gradient-to-br from-voltry-blue/30 to-voltry-purple/30 rounded-xl p-6 border-4 border-voltry-purple flex flex-col items-center justify-center shadow-2xl backdrop-blur-md"
        style={{ left: `${nodes[3].x}px`, top: `${nodes[3].y}px`, width: '200px' }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: nodes[3].delay }}
      >
        {/* Pulsing glow effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-voltry-blue to-voltry-purple rounded-xl opacity-30"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
        />

        <motion.div
          className="relative z-10"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        >
          <Brain className="text-voltry-purple" size={40} />
        </motion.div>

        <div className="relative z-10 mt-3 text-center">
          <div className="text-base font-bold">{nodes[3].label}</div>
          <div className="text-xs text-gray-300 mt-1">Global Intelligence</div>
        </div>

        <motion.div
          className="relative z-10 mt-3 flex gap-1"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Sparkles className="text-voltry-lime" size={22} />
          <Sparkles className="text-voltry-blue" size={16} />
        </motion.div>

        {/* Accuracy counter */}
        <motion.div
          className="relative z-10 mt-2 bg-voltry-lime/20 border border-voltry-lime/40 rounded-full px-3 py-1"
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="text-xs font-mono font-bold text-voltry-lime">95% Accurate</div>
        </motion.div>
      </motion.div>

      {/* Data packets animation */}
      {[0, 1, 2].map((index) => (
        <motion.div
          key={`packet-${index}`}
          className="absolute w-2 h-2 bg-voltry-lime rounded-full shadow-lg shadow-voltry-lime/50"
          style={{
            left: `${nodes[index].x + 140}px`,
            top: `${nodes[index].y + 35}px`,
          }}
          animate={{
            x: [0, nodes[3].x - nodes[index].x - 120],
            y: [0, nodes[3].y - nodes[index].y + 15],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            delay: 1 + index * 0.4,
            repeat: Infinity,
            repeatDelay: 3,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Return knowledge packets */}
      {[0, 1, 2].map((index) => (
        <motion.div
          key={`return-${index}`}
          className="absolute w-2 h-2 bg-voltry-purple rounded-full shadow-lg shadow-voltry-purple/50"
          style={{
            left: `${nodes[3].x + 20}px`,
            top: `${nodes[3].y + 50}px`,
          }}
          animate={{
            x: [0, nodes[index].x - nodes[3].x + 120],
            y: [0, nodes[index].y - nodes[3].y - 15],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            delay: 3.5 + index * 0.3,
            repeat: Infinity,
            repeatDelay: 3,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Labels with animated arrows */}
      <div className="absolute bottom-6 left-4 right-4 flex justify-between items-center text-xs">
        <div className="flex items-center gap-2 bg-voltry-blue/10 border border-voltry-blue/30 rounded-lg px-4 py-2">
          <div className="w-2 h-2 bg-voltry-lime rounded-full" />
          <span className="text-gray-400">Data never leaves facilities</span>
        </div>
        <div className="flex items-center gap-2 bg-voltry-purple/10 border border-voltry-purple/30 rounded-lg px-4 py-2">
          <div className="w-2 h-2 bg-voltry-purple rounded-full" />
          <span className="text-gray-400">Model updates distributed</span>
        </div>
      </div>
    </div>
  )
}

// ROI Calculator Teaser
function ROICalculatorTeaser() {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      className="relative bg-gradient-to-br from-slate-900 to-slate-950 rounded-xl p-12 border-2 border-voltry-blue/30 overflow-hidden cursor-pointer"
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-voltry-blue/5 to-voltry-purple/5 opacity-0 hover:opacity-100 transition-opacity duration-300" />

      <div className="relative z-10 text-center">
        <BarChart3 className="mx-auto mb-4 text-voltry-blue" size={64} />
        <h3 className="text-3xl font-bold mb-4">Interactive ROI Calculator</h3>
        <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
          Calculate your potential savings based on your facility size, equipment value, and downtime costs.
        </p>

        <div className="grid grid-cols-3 gap-6 mb-8 max-w-3xl mx-auto">
          <div className="bg-slate-800/50 rounded-lg p-4 border border-voltry-blue/20">
            <div className="text-3xl font-bold text-voltry-blue mb-1">$2.4M</div>
            <div className="text-sm text-gray-400">Avg. Annual Savings</div>
          </div>
          <div className="bg-slate-800/50 rounded-lg p-4 border border-voltry-purple/20">
            <div className="text-3xl font-bold text-voltry-purple mb-1">87%</div>
            <div className="text-sm text-gray-400">Downtime Reduction</div>
          </div>
          <div className="bg-slate-800/50 rounded-lg p-4 border border-voltry-lime/20">
            <div className="text-3xl font-bold text-voltry-lime mb-1">3.2x</div>
            <div className="text-sm text-gray-400">ROI in Year 1</div>
          </div>
        </div>

        <motion.button
          className="bg-voltry-blue hover:bg-voltry-purple transition-colors duration-300 text-white px-8 py-4 rounded-lg text-lg font-semibold inline-flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Calculate Your ROI <ArrowRight size={20} />
        </motion.button>

        {hovered && (
          <motion.div
            className="absolute top-4 right-4"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <div className="bg-voltry-lime text-voltry-navy px-3 py-1 rounded-full text-xs font-bold">
              Coming Soon
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}

export default function VoltryPredictPage() {
  const caseStudies = [
    {
      id: 1,
      title: 'Transformer Failure Prediction',
      location: 'Houston Data Center',
      equipment: '2.5 MVA Transformer',
      savingsAmount: '$850K',
      timeline: [
        {
          time: 'T-48h',
          type: 'prediction',
          title: 'Anomaly Detected',
          description: 'VoltryPredict flags unusual thermal patterns and harmonic distortion in transformer T-3.'
        },
        {
          time: 'T-46h',
          type: 'prediction',
          title: 'Failure Probability: 89%',
          description: 'Model predicts critical failure within 48-72 hours based on 500+ similar historical cases.'
        },
        {
          time: 'T-42h',
          type: 'action',
          title: 'Emergency Maintenance Scheduled',
          description: 'Team dispatched, replacement transformer ordered from nearby facility.'
        },
        {
          time: 'T-18h',
          type: 'action',
          title: 'Controlled Shutdown & Replacement',
          description: 'Load transferred to backup systems. Transformer replaced during scheduled maintenance window.'
        },
        {
          time: 'T+0h',
          type: 'avoided',
          title: 'Critical Failure Avoided',
          description: 'Post-mortem confirms winding insulation failure would have occurred within predicted timeframe.'
        }
      ]
    },
    {
      id: 2,
      title: 'Cooling System Cascade',
      location: 'Singapore Manufacturing',
      equipment: 'Chiller Array (4 units)',
      savingsAmount: '$420K',
      timeline: [
        {
          time: 'T-32h',
          type: 'prediction',
          title: 'Compressor Degradation',
          description: 'ML model detects subtle vibration signature changes in Chiller 2 compressor.'
        },
        {
          time: 'T-28h',
          type: 'prediction',
          title: 'Cascade Risk Identified',
          description: 'System predicts failure would overload Chiller 3, causing chain reaction.'
        },
        {
          time: 'T-24h',
          type: 'action',
          title: 'Preventive Intervention',
          description: 'Compressor bearings replaced, refrigerant levels optimized.'
        },
        {
          time: 'T+0h',
          type: 'avoided',
          title: 'Multi-Unit Failure Prevented',
          description: 'Analysis confirms cascade failure prevented, avoiding 72+ hour production halt.'
        }
      ]
    },
    {
      id: 3,
      title: 'Arc Flash Prevention',
      location: 'Phoenix Distribution',
      equipment: 'Medium Voltage Switchgear',
      savingsAmount: '$1.2M',
      timeline: [
        {
          time: 'T-36h',
          type: 'prediction',
          title: 'Insulation Breakdown Warning',
          description: 'Partial discharge sensors + AI detect degradation in 15kV breaker contacts.'
        },
        {
          time: 'T-30h',
          type: 'prediction',
          title: 'Arc Flash Risk: High',
          description: 'Model predicts 82% probability of arc flash event during next switching operation.'
        },
        {
          time: 'T-24h',
          type: 'action',
          title: 'Emergency De-Energization',
          description: 'Circuit isolated, visual inspection confirms carbon tracking on insulators.'
        },
        {
          time: 'T-12h',
          type: 'action',
          title: 'Component Replacement',
          description: 'Breaker contacts and insulators replaced under controlled conditions.'
        },
        {
          time: 'T+0h',
          type: 'avoided',
          title: 'Catastrophic Event Prevented',
          description: 'Arc flash with potential for injury and $1M+ in equipment damage avoided.'
        }
      ]
    }
  ]

  return (
    <div className="bg-voltry-navy text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-voltry-blue/10 via-voltry-purple/5 to-transparent" />

        {/* Animated background particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-voltry-blue rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <motion.div
              className="inline-flex items-center gap-2 bg-voltry-blue/20 border border-voltry-blue/30 rounded-full px-4 py-2 mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Brain className="text-voltry-blue" size={20} />
              <span className="text-sm font-semibold">Powered by Federated AI</span>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-voltry-blue via-voltry-purple to-voltry-lime bg-clip-text text-transparent"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              VoltryPredict: See Failures Before They Happen
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              95% prediction accuracy. 24-48 hour early warning. Powered by federated AI learning from 500+ facilities.
            </motion.p>

            {/* Key metrics */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12"
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              {[
                { icon: Target, value: '95%', label: 'Prediction Accuracy' },
                { icon: Timer, value: '24-48h', label: 'Early Warning Window' },
                { icon: Network, value: '500+', label: 'Learning Facilities' }
              ].map((metric, index) => (
                <motion.div
                  key={metric.label}
                  variants={fadeInUp}
                  className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-voltry-blue/20 hover:border-voltry-blue/40 transition-all duration-300"
                >
                  <metric.icon className="mx-auto mb-3 text-voltry-blue" size={32} />
                  <div className="text-3xl font-bold text-voltry-blue mb-1">{metric.value}</div>
                  <div className="text-sm text-gray-400">{metric.label}</div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <button className="bg-gradient-to-r from-voltry-blue to-voltry-purple hover:from-voltry-purple hover:to-voltry-blue transition-all duration-300 text-white px-10 py-4 rounded-lg text-lg font-semibold shadow-lg hover:shadow-voltry-blue/50 hover:scale-105 transform inline-flex items-center gap-2">
                <Eye size={20} />
                See It In Action
                <ArrowRight size={20} />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* How It Works - Federated Learning */}
      <section className="py-20 px-6 bg-gradient-to-b from-voltry-navy to-slate-950">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              How It Works: Federated Learning
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Learn from everyone's data without anyone sharing their data.
              VoltryPredict trains on patterns across hundreds of facilities while keeping your data 100% private.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <FederatedLearningDiagram />
          </motion.div>

          <motion.div
            className="grid md:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                step: 1,
                title: 'Local Training',
                description: 'AI model trains on your facility data—never leaves your infrastructure.',
                icon: Database
              },
              {
                step: 2,
                title: 'Encrypted Updates',
                description: 'Only model weights are shared, encrypted end-to-end. No raw data transmitted.',
                icon: Lock
              },
              {
                step: 3,
                title: 'Global Aggregation',
                description: 'Central server combines learnings from 500+ facilities into master model.',
                icon: Brain
              },
              {
                step: 4,
                title: 'Enhanced Predictions',
                description: 'Improved model deployed back to your facility. Everyone benefits, privacy intact.',
                icon: TrendingUp
              }
            ].map((item, index) => (
              <motion.div
                key={item.step}
                variants={fadeInUp}
                className="bg-slate-900 p-6 rounded-xl border border-slate-800 hover:border-voltry-blue/50 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-voltry-blue/20 text-voltry-blue font-bold border-2 border-voltry-blue">
                    {item.step}
                  </div>
                  <item.icon className="text-voltry-blue" size={24} />
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Prediction Examples - Case Studies */}
      <section className="py-20 px-6 bg-slate-950">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Real Predictions, Real Savings
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Actual case studies from VoltryPredict deployments. These aren't hypotheticals—these failures were predicted and prevented.
            </p>
          </motion.div>

          <div className="space-y-16">
            {caseStudies.map((caseStudy, index) => (
              <motion.div
                key={caseStudy.id}
                className="bg-slate-900 rounded-xl overflow-hidden border border-voltry-blue/20"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="bg-gradient-to-r from-voltry-blue/20 to-voltry-purple/20 p-6 border-b border-voltry-blue/20">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{caseStudy.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                        <span className="flex items-center gap-1">
                          <Activity size={16} className="text-voltry-blue" />
                          {caseStudy.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Zap size={16} className="text-voltry-purple" />
                          {caseStudy.equipment}
                        </span>
                      </div>
                    </div>
                    <div className="bg-voltry-lime/20 border border-voltry-lime/30 rounded-lg px-6 py-3 text-center">
                      <div className="text-sm text-gray-400 mb-1">Estimated Savings</div>
                      <div className="text-3xl font-bold text-voltry-lime">{caseStudy.savingsAmount}</div>
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <PredictionTimeline caseStudy={caseStudy} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Accuracy Metrics */}
      <section className="py-20 px-6 bg-gradient-to-b from-slate-950 to-voltry-navy">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Validation: The Numbers Don't Lie
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              95% accuracy validated across 10,000+ predictions in production environments.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <AccuracyGauge accuracy={95} />
            </motion.div>

            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {[
                {
                  metric: 'True Positive Rate',
                  value: '93%',
                  description: 'Failures correctly predicted before occurrence',
                  color: 'voltry-lime'
                },
                {
                  metric: 'False Positive Rate',
                  value: '8%',
                  description: 'Unnecessary alerts (still worth investigating)',
                  color: 'voltry-purple'
                },
                {
                  metric: 'Average Warning Time',
                  value: '36 hours',
                  description: 'Time between prediction and actual failure',
                  color: 'voltry-blue'
                },
                {
                  metric: 'Equipment Coverage',
                  value: '47 types',
                  description: 'Transformers, switchgear, UPS, generators, HVAC, etc.',
                  color: 'voltry-lime'
                }
              ].map((item, index) => (
                <motion.div
                  key={item.metric}
                  className="bg-slate-900 p-6 rounded-xl border border-slate-800"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-lg">{item.metric}</h4>
                    <span className={`text-2xl font-bold text-${item.color}`}>{item.value}</span>
                  </div>
                  <p className="text-sm text-gray-400">{item.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div
            className="mt-16 bg-slate-900 rounded-xl p-8 border border-voltry-blue/20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-center">Validation Methodology</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Retrospective Analysis',
                  description: '5+ years of historical failure data from 200+ facilities used for model validation'
                },
                {
                  title: 'Live A/B Testing',
                  description: 'Real-time predictions compared against actual outcomes in production environments'
                },
                {
                  title: 'Third-Party Audit',
                  description: 'Independent verification by IEEE Power Engineering Society working group'
                }
              ].map((method, index) => (
                <div key={method.title} className="text-center">
                  <CheckCircle className="mx-auto mb-3 text-voltry-lime" size={32} />
                  <h4 className="font-semibold mb-2">{method.title}</h4>
                  <p className="text-sm text-gray-400">{method.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Privacy Guarantee */}
      <section className="py-20 px-6 bg-voltry-navy">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <Shield className="text-voltry-lime" size={48} />
              <Lock className="text-voltry-blue" size={48} />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Your Data Never Leaves Your Facility
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Differential privacy and federated learning ensure zero-knowledge training.
              We get smarter without ever seeing your data.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <motion.div
              className="bg-slate-900 rounded-xl p-8 border border-voltry-blue/20"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Lock className="text-voltry-blue" size={32} />
                What We DON'T See
              </h3>
              <ul className="space-y-4">
                {[
                  'Raw sensor readings or telemetry data',
                  'Equipment serial numbers or asset identifiers',
                  'Facility locations or network topology',
                  'Operational schedules or load profiles',
                  'Maintenance records or failure histories',
                  'Vendor-specific configurations or settings'
                ].map((item, index) => (
                  <motion.li
                    key={item}
                    className="flex items-start gap-3 text-gray-300"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  >
                    <AlertTriangle className="text-red-400 flex-shrink-0 mt-1" size={20} />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              className="bg-slate-900 rounded-xl p-8 border border-voltry-lime/20"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <CheckCircle className="text-voltry-lime" size={32} />
                What We DO Share
              </h3>
              <ul className="space-y-4">
                {[
                  'Encrypted model gradients (mathematical patterns only)',
                  'Anonymized feature importance rankings',
                  'Statistical aggregates across 500+ facilities',
                  'Differential privacy noise (ε=0.1, δ=10⁻⁵)',
                  'Model performance metrics (accuracy, latency)',
                  'Threat intelligence (attack patterns, anomalies)'
                ].map((item, index) => (
                  <motion.li
                    key={item}
                    className="flex items-start gap-3 text-gray-300"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  >
                    <CheckCircle className="text-voltry-lime flex-shrink-0 mt-1" size={20} />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.div
            className="bg-gradient-to-br from-slate-900 to-slate-950 rounded-xl p-8 border-2 border-voltry-blue"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-center">Differential Privacy Explained</h3>
            <div className="max-w-3xl mx-auto">
              <p className="text-gray-300 mb-6 text-center">
                Mathematical guarantee that your individual data cannot be reverse-engineered from the global model,
                even if an attacker has access to all other facilities' data.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-voltry-blue/20 rounded-lg p-4 mb-3">
                    <code className="text-voltry-blue font-mono">ε = 0.1</code>
                  </div>
                  <p className="text-sm text-gray-400">Privacy budget (stricter than Apple's)</p>
                </div>
                <div className="text-center">
                  <div className="bg-voltry-purple/20 rounded-lg p-4 mb-3">
                    <code className="text-voltry-purple font-mono">δ = 10⁻⁵</code>
                  </div>
                  <p className="text-sm text-gray-400">Failure probability (1 in 100,000)</p>
                </div>
                <div className="text-center">
                  <div className="bg-voltry-lime/20 rounded-lg p-4 mb-3">
                    <code className="text-voltry-lime font-mono">k = 5</code>
                  </div>
                  <p className="text-sm text-gray-400">Minimum anonymity set size</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ROI Calculator Teaser */}
      <section className="py-20 px-6 bg-gradient-to-b from-voltry-navy to-slate-950">
        <div className="max-w-6xl mx-auto">
          <ROICalculatorTeaser />
        </div>
      </section>

      {/* Technical Deep Dive CTA */}
      <section className="py-24 px-6 bg-slate-950">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="bg-gradient-to-br from-voltry-blue/10 via-voltry-purple/10 to-voltry-navy rounded-2xl p-12 border-2 border-voltry-blue/30 text-center relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-voltry-blue/5 to-voltry-purple/5" />

            <div className="relative z-10">
              <FileText className="mx-auto mb-6 text-voltry-blue" size={64} />
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Want the Technical Details?
              </h2>
              <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                Download our whitepaper: "Federated Learning for Predictive Maintenance in Critical Infrastructure"
              </p>

              <div className="bg-slate-900/70 rounded-xl p-6 mb-8 max-w-2xl mx-auto">
                <h3 className="font-bold mb-4 text-lg">Whitepaper Contents:</h3>
                <ul className="text-left space-y-2 text-gray-300">
                  {[
                    'Model architecture (temporal convolutional networks + LSTMs)',
                    'Training methodology (federated averaging with secure aggregation)',
                    'Privacy guarantees (differential privacy proofs)',
                    'Validation results (10,000+ production predictions)',
                    'Integration guide (API documentation, SDK examples)',
                    'Case studies (detailed analysis of 50+ deployments)'
                  ].map((item, index) => (
                    <motion.li
                      key={item}
                      className="flex items-start gap-2"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                    >
                      <CheckCircle className="text-voltry-lime flex-shrink-0 mt-1" size={16} />
                      <span className="text-sm">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  className="bg-gradient-to-r from-voltry-blue to-voltry-purple hover:from-voltry-purple hover:to-voltry-blue text-white px-8 py-4 rounded-lg text-lg font-semibold inline-flex items-center justify-center gap-2 shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FileText size={20} />
                  Download Whitepaper (PDF)
                </motion.button>
                <motion.button
                  className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 rounded-lg text-lg font-semibold inline-flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Brain size={20} />
                  Schedule Technical Demo
                </motion.button>
              </div>

              <p className="text-gray-500 text-sm mt-6">
                42-page technical paper • Peer-reviewed • Published in IEEE Transactions
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 bg-gradient-to-b from-slate-950 to-voltry-navy">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Stop Reacting and Start Predicting?
            </h2>
            <p className="text-xl text-gray-400 mb-12">
              Join 500+ facilities using VoltryPredict to prevent failures, reduce downtime, and save millions.
            </p>

            <motion.button
              className="bg-gradient-to-r from-voltry-blue via-voltry-purple to-voltry-lime text-white px-12 py-5 rounded-lg text-xl font-bold shadow-2xl hover:shadow-voltry-blue/50 transition-all duration-300 inline-flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Brain size={24} />
              Start Predicting Failures
              <ArrowRight size={24} />
            </motion.button>

            <p className="text-gray-500 text-sm mt-6">
              14-day proof of concept • Deploy on-premise or cloud • No data leaves your facility
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
