'use client'

import { motion } from 'framer-motion'
import { Layers, Brain, Cpu, Shield, ArrowRight, CheckCircle } from 'lucide-react'
import Link from 'next/link'

const phases = [
  {
    id: 1,
    badge: '1',
    icon: Layers,
    name: 'VoltryOS',
    subtitle: 'Integration Layer',
    tagline: 'FREE FOREVER',
    price: 'Free',
    description: 'Unify 5-8 vendor systems into one dashboard. Connect everything you already own.',
    features: [
      'Universal vendor integration',
      'Single pane of glass',
      'Zero upfront cost'
    ],
    cta: 'Start Free',
    ctaLink: '/start-free',
    color: 'from-voltry-blue to-voltry-blue/80'
  },
  {
    id: 2,
    badge: '2',
    icon: Brain,
    name: 'VoltryPredict',
    subtitle: 'Intelligence Layer',
    tagline: '91% ACCURACY',
    price: '$50K/year',
    description: 'Predict failures 48 hours before they happen with federated AI learning from 50M training hours.',
    features: [
      '48-hour early warnings',
      'Cross-facility learning',
      'Anomaly detection'
    ],
    cta: 'Learn More',
    ctaLink: '/predict',
    color: 'from-voltry-purple to-voltry-purple/80'
  },
  {
    id: 3,
    badge: '3',
    icon: Cpu,
    name: 'VoltryCore',
    subtitle: 'Hardware Layer',
    tagline: 'MULTI-DOMAIN SENSING',
    price: '$200 vs $4,300',
    description: 'Patent-pending sensors that combine electrical, thermal, vibration, and acoustic monitoring in one device.',
    features: [
      '4 sensing modalities',
      '95% cost reduction',
      'Self-calibrating'
    ],
    cta: 'View Hardware',
    ctaLink: '/hardware',
    color: 'from-voltry-lime to-green-500'
  },
  {
    id: 4,
    badge: '4',
    icon: Shield,
    name: 'VoltryGuard',
    subtitle: 'Autonomous Control',
    tagline: 'AUTONOMOUS PREVENTION',
    price: '<10ms response',
    description: 'Closed-loop control system that prevents failures autonomously before humans can react.',
    features: [
      'Sub-10ms response time',
      'Zero-click prevention',
      'Autonomous failover'
    ],
    cta: 'Coming Soon',
    ctaLink: '/guard',
    color: 'from-red-500 to-orange-500',
    comingSoon: true
  }
]

const SolutionOverview = () => {
  return (
    <section className="relative py-20 lg:py-32 bg-voltry-navy overflow-hidden">
      {/* Background Illustration - Energy Distribution */}
      <div className="absolute inset-0 opacity-5">
        <img
          src="/Illustrations/voltry-illustration-04-energy-distribution-system.png"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0095ff15_1px,transparent_1px),linear-gradient(to_bottom,#0095ff15_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-voltry-blue/5 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            One Platform.{' '}
            <span className="bg-gradient-to-r from-voltry-blue to-voltry-purple bg-clip-text text-transparent">
              Four Evolutionary Layers.
            </span>
          </motion.h2>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We meet you where you are (fragmentation) and take you where you need to be (autonomous control).
          </motion.p>
        </motion.div>

        {/* Phase Cards - Desktop Grid */}
        <div className="hidden lg:grid lg:grid-cols-2 xl:grid-cols-4 gap-6 mb-12">
          {phases.map((phase, index) => {
            const Icon = phase.icon
            return (
              <motion.div
                key={phase.id}
                className="relative group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <motion.div
                  className="relative h-full bg-gradient-to-br from-voltry-navy/80 to-voltry-navy border border-voltry-blue/30 rounded-2xl p-6 hover:border-voltry-blue/60 transition-all duration-300 backdrop-blur-sm"
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {/* Badge Number */}
                  <div className="absolute -top-3 -left-3 w-10 h-10 bg-gradient-to-br from-voltry-blue to-voltry-purple rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-voltry-blue/50">
                    {phase.badge}
                  </div>

                  {/* Icon with Glow */}
                  <motion.div
                    className="relative mb-4 inline-block"
                    whileHover={{ rotate: [0, -5, 5, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${phase.color} rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300`} />
                    <div className={`relative w-14 h-14 bg-gradient-to-br ${phase.color} rounded-xl flex items-center justify-center shadow-lg`}>
                      <Icon className="w-7 h-7 text-white" strokeWidth={2} />
                    </div>
                  </motion.div>

                  {/* Tagline Badge */}
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 bg-voltry-blue/20 text-voltry-blue text-xs font-bold rounded-full border border-voltry-blue/30">
                      {phase.tagline}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {phase.name}
                  </h3>

                  <p className="text-voltry-blue text-sm font-semibold mb-3">
                    {phase.subtitle}
                  </p>

                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {phase.description}
                  </p>

                  {/* Price */}
                  <div className="mb-4">
                    <p className="text-white font-bold text-lg">{phase.price}</p>
                  </div>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {phase.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-gray-400 text-sm">
                        <CheckCircle className="w-4 h-4 text-voltry-lime mr-2 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link
                    href={phase.ctaLink}
                    className={`
                      inline-flex items-center justify-center w-full px-4 py-3 rounded-lg font-semibold text-sm transition-all duration-300
                      ${phase.comingSoon
                        ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
                        : `bg-gradient-to-r ${phase.color} text-white hover:shadow-lg hover:shadow-voltry-blue/50 hover:scale-105`
                      }
                    `}
                    onClick={(e) => phase.comingSoon && e.preventDefault()}
                  >
                    {phase.cta}
                    {!phase.comingSoon && <ArrowRight className="w-4 h-4 ml-2" />}
                  </Link>

                  {/* Hover Glow Effect */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${phase.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`} />
                </motion.div>

                {/* Connecting Line (except for last card) */}
                {index < phases.length - 1 && (
                  <motion.div
                    className="hidden xl:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-voltry-blue/50 to-transparent z-20"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 + 0.1 * index }}
                  />
                )}
              </motion.div>
            )
          })}
        </div>

        {/* Phase Cards - Mobile/Tablet Horizontal Scroll */}
        <div className="lg:hidden overflow-x-auto pb-6 mb-8 -mx-4 px-4">
          <div className="flex gap-6 min-w-max">
            {phases.map((phase, index) => {
              const Icon = phase.icon
              return (
                <motion.div
                  key={phase.id}
                  className="relative w-[320px] flex-shrink-0"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                >
                  <div className="relative h-full bg-gradient-to-br from-voltry-navy/80 to-voltry-navy border border-voltry-blue/30 rounded-2xl p-6 backdrop-blur-sm">
                    {/* Badge Number */}
                    <div className="absolute -top-3 -left-3 w-10 h-10 bg-gradient-to-br from-voltry-blue to-voltry-purple rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-voltry-blue/50">
                      {phase.badge}
                    </div>

                    {/* Icon with Glow */}
                    <div className="relative mb-4 inline-block">
                      <div className={`absolute inset-0 bg-gradient-to-r ${phase.color} rounded-xl blur-lg opacity-50`} />
                      <div className={`relative w-14 h-14 bg-gradient-to-br ${phase.color} rounded-xl flex items-center justify-center shadow-lg`}>
                        <Icon className="w-7 h-7 text-white" strokeWidth={2} />
                      </div>
                    </div>

                    {/* Tagline Badge */}
                    <div className="mb-3">
                      <span className="inline-block px-3 py-1 bg-voltry-blue/20 text-voltry-blue text-xs font-bold rounded-full border border-voltry-blue/30">
                        {phase.tagline}
                      </span>
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {phase.name}
                    </h3>

                    <p className="text-voltry-blue text-sm font-semibold mb-3">
                      {phase.subtitle}
                    </p>

                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                      {phase.description}
                    </p>

                    {/* Price */}
                    <div className="mb-4">
                      <p className="text-white font-bold text-lg">{phase.price}</p>
                    </div>

                    {/* Features */}
                    <ul className="space-y-2 mb-6">
                      {phase.features.map((feature, i) => (
                        <li key={i} className="flex items-start text-gray-400 text-sm">
                          <CheckCircle className="w-4 h-4 text-voltry-lime mr-2 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <Link
                      href={phase.ctaLink}
                      className={`
                        inline-flex items-center justify-center w-full px-4 py-3 rounded-lg font-semibold text-sm transition-all duration-300
                        ${phase.comingSoon
                          ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
                          : `bg-gradient-to-r ${phase.color} text-white hover:shadow-lg hover:shadow-voltry-blue/50`
                        }
                      `}
                      onClick={(e) => phase.comingSoon && e.preventDefault()}
                    >
                      {phase.cta}
                      {!phase.comingSoon && <ArrowRight className="w-4 h-4 ml-2" />}
                    </Link>
                  </div>

                  {/* Connecting Arrow (except for last card) */}
                  {index < phases.length - 1 && (
                    <div className="absolute top-1/2 -right-3 transform -translate-y-1/2 z-20">
                      <ArrowRight className="w-6 h-6 text-voltry-blue/50" />
                    </div>
                  )}
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Bottom Callout */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="inline-block bg-voltry-blue/10 border border-voltry-blue/30 rounded-2xl px-8 py-6 backdrop-blur-sm">
            <p className="text-gray-300 text-lg mb-2">
              <span className="text-voltry-blue font-bold">Start free today.</span> Upgrade as you scale.
            </p>
            <p className="text-gray-400 text-sm">
              No credit card required. No vendor lock-in. Own your infrastructure evolution.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default SolutionOverview
