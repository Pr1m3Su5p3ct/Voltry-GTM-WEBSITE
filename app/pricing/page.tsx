'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Check, Sparkles, Shield, Zap } from 'lucide-react'
import { useState } from 'react'

const PricingPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const pricingTiers = [
    {
      name: 'VoltryOS',
      subtitle: 'Free',
      price: 'FREE',
      period: 'Forever',
      description: 'Perfect for getting started',
      popular: false,
      darkCard: false,
      features: [
        'Unified dashboard',
        'All vendor integrations',
        'Real-time monitoring',
        'Basic analytics',
        'Compliance reporting',
        'Community support',
        'Up to 500 data points',
      ],
      cta: 'Start Free',
      ctaLink: '/start-free',
      bestFor: 'Testing Voltry, small facilities',
      icon: Zap,
    },
    {
      name: 'VoltryPredict',
      subtitle: 'Premium',
      price: '$50K - $150K',
      period: 'per year',
      description: 'Intelligence layer + predictions',
      popular: true,
      darkCard: false,
      features: [
        'Everything in Free, plus:',
        '24-48 hour failure predictions',
        'Federated AI learning',
        'Root cause analysis',
        'Advanced analytics',
        'API access',
        'Priority support',
        'Unlimited data points',
        'Custom dashboards',
      ],
      cta: 'Request Quote',
      ctaLink: '/contact',
      bestFor: 'Mid-market data centers, regional utilities',
      icon: Sparkles,
      note: 'Based on facility size',
    },
    {
      name: 'VoltryGuard',
      subtitle: 'Enterprise',
      price: '$150K - $250K+',
      period: 'per year',
      description: 'Full platform + active control',
      popular: false,
      darkCard: true,
      features: [
        'Everything in Premium, plus:',
        'VoltryCore sensor deployment',
        '200-300 sensors included',
        'Active harmonic filtering',
        'Vibration damping',
        'Noise cancellation',
        'MCP server access',
        'White-glove onboarding',
        'Dedicated success manager',
        'Custom integrations',
        'SLA guarantees',
      ],
      cta: 'Talk to Sales',
      ctaLink: '/contact',
      bestFor: 'Hyperscale data centers, utilities, critical infrastructure',
      icon: Shield,
      note: 'Custom pricing',
    },
  ]

  const addOns = [
    {
      name: 'VoltryCore Sensors',
      price: '$200 - $400',
      unit: 'per sensor',
      description: 'Volume discounts available',
      highlight: 'First 100 facilities: $150 each',
      savings: '70% off $500 MSRP',
    },
    {
      name: 'MCP Server Access',
      price: '$25K - $100K',
      unit: 'per year',
      description: 'Based on query volume',
      highlight: 'Enable AI agents',
      savings: null,
    },
    {
      name: 'Professional Services',
      price: 'Custom',
      unit: 'pricing',
      description: 'Dedicated implementation support',
      highlight: 'Tailored to your needs',
      savings: null,
    },
  ]

  const faqs = [
    {
      question: 'Is the free tier really free forever?',
      answer:
        'Yes! VoltryOS is 100% free forever with no hidden fees, no credit card required, and no automatic upgrades. We believe everyone should have access to unified infrastructure monitoring. The free tier includes full dashboard access, all vendor integrations, real-time monitoring, and basic analytics for up to 500 data points. You only pay when you need advanced predictive capabilities or active control features.',
    },
    {
      question: 'How is facility size determined?',
      answer:
        'Facility size is determined by a combination of factors including total connected load (kW/MW), number of critical systems being monitored, data point volume, and infrastructure complexity. During our initial consultation, we assess your specific environment to provide accurate pricing. Small facilities (under 1MW) typically fall in the lower range, while large data centers (10MW+) or complex utility substations fall in the upper range.',
    },
    {
      question: 'Can I switch between tiers?',
      answer:
        'Absolutely! You can upgrade or downgrade at any time. Start with VoltryOS Free to test the platform, then upgrade to VoltryPredict when you need failure predictions, or go all the way to VoltryGuard for active control. Downgrades take effect at the end of your billing cycle, and upgrades are prorated. There are no switching fees or penalties.',
    },
    {
      question: 'Do I need VoltryCore sensors to use VoltryPredict?',
      answer:
        'No, VoltryPredict works with your existing infrastructure and vendor systems without requiring VoltryCore sensors. Our platform integrates with electrical systems (Schweitzer, GE, ABB), mechanical systems (Trane, Carrier, Johnson Controls), and other monitoring tools you already have. However, adding VoltryCore sensors unlocks multi-domain sensing capabilities (electrical + mechanical + acoustic) that significantly improve prediction accuracy from 91% to 98%+.',
    },
    {
      question: 'What if I have 1000+ facilities?',
      answer:
        'For enterprise portfolios with 1000+ facilities, we offer custom enterprise agreements with volume discounts, dedicated support teams, and flexible deployment options. Contact our enterprise sales team for a tailored proposal that includes bulk sensor pricing, federated learning across your entire portfolio, and white-glove implementation services. Many of our largest customers see 40-60% cost reductions at scale.',
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-voltry-navy via-voltry-navy to-voltry-blue/10">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20">
        {/* Animated Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0095ff10_1px,transparent_1px),linear-gradient(to_bottom,#0095ff10_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Flexible Pricing.{' '}
              <span className="bg-gradient-to-r from-voltry-blue to-voltry-purple bg-clip-text text-transparent">
                Transparent Value.
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
              Start free. Upgrade as you scale. Enterprise custom pricing available.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="relative pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => {
              const Icon = tier.icon
              return (
                <motion.div
                  key={tier.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative"
                >
                  {/* Popular Badge */}
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                      <div className="bg-gradient-to-r from-voltry-blue to-voltry-purple px-6 py-2 rounded-full text-white text-sm font-bold shadow-lg">
                        Most Popular
                      </div>
                    </div>
                  )}

                  <motion.div
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className={`relative h-full rounded-2xl p-8 ${
                      tier.darkCard
                        ? 'bg-voltry-navy text-white border-2 border-voltry-blue/50'
                        : tier.popular
                        ? 'bg-white/5 backdrop-blur-md border-2 border-voltry-blue shadow-xl shadow-voltry-blue/20'
                        : 'bg-white/5 backdrop-blur-md border border-white/10'
                    } hover:shadow-2xl ${
                      tier.popular ? 'hover:shadow-voltry-blue/30' : 'hover:shadow-voltry-purple/20'
                    } transition-all`}
                  >
                    {/* Icon */}
                    <div
                      className={`inline-flex p-3 rounded-xl mb-6 ${
                        tier.darkCard
                          ? 'bg-voltry-blue/20'
                          : tier.popular
                          ? 'bg-voltry-blue/20'
                          : 'bg-voltry-purple/20'
                      }`}
                    >
                      <Icon
                        className={`w-8 h-8 ${
                          tier.darkCard
                            ? 'text-voltry-blue'
                            : tier.popular
                            ? 'text-voltry-blue'
                            : 'text-voltry-purple'
                        }`}
                      />
                    </div>

                    {/* Tier Name */}
                    <h3 className={`text-3xl font-bold mb-2 ${tier.darkCard ? 'text-white' : 'text-white'}`}>
                      {tier.name}
                    </h3>
                    <p className={`text-sm mb-6 ${tier.darkCard ? 'text-gray-300' : 'text-gray-400'}`}>
                      {tier.subtitle}
                    </p>

                    {/* Price */}
                    <div className="mb-6">
                      <div className="flex items-baseline mb-1">
                        <span
                          className={`text-4xl md:text-5xl font-bold ${
                            tier.darkCard ? 'text-white' : 'text-white'
                          }`}
                        >
                          {tier.price}
                        </span>
                      </div>
                      <p className={`text-sm ${tier.darkCard ? 'text-gray-300' : 'text-gray-400'}`}>
                        {tier.period}
                      </p>
                      {tier.note && (
                        <p className={`text-xs mt-1 ${tier.darkCard ? 'text-gray-400' : 'text-gray-500'}`}>
                          {tier.note}
                        </p>
                      )}
                    </div>

                    {/* Description */}
                    <p className={`text-lg mb-8 ${tier.darkCard ? 'text-gray-300' : 'text-gray-300'}`}>
                      {tier.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-4 mb-8">
                      {tier.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3">
                          <div
                            className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${
                              tier.darkCard
                                ? 'bg-voltry-blue/20'
                                : tier.popular
                                ? 'bg-voltry-blue/20'
                                : 'bg-voltry-purple/20'
                            }`}
                          >
                            <Check
                              className={`w-3 h-3 ${
                                tier.darkCard
                                  ? 'text-voltry-blue'
                                  : tier.popular
                                  ? 'text-voltry-blue'
                                  : 'text-voltry-purple'
                              }`}
                              strokeWidth={3}
                            />
                          </div>
                          <span
                            className={`text-sm ${
                              tier.darkCard
                                ? 'text-gray-200'
                                : feature.includes('Everything in')
                                ? 'text-gray-400 font-semibold'
                                : 'text-gray-300'
                            }`}
                          >
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* Best For */}
                    <div className={`mb-8 p-4 rounded-lg ${tier.darkCard ? 'bg-white/5' : 'bg-white/5'}`}>
                      <p className={`text-xs font-semibold mb-1 ${tier.darkCard ? 'text-gray-400' : 'text-gray-400'}`}>
                        MOST POPULAR FOR:
                      </p>
                      <p className={`text-sm ${tier.darkCard ? 'text-gray-200' : 'text-gray-200'}`}>{tier.bestFor}</p>
                    </div>

                    {/* CTA Button */}
                    <Link
                      href={tier.ctaLink}
                      className={`block w-full text-center px-6 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 ${
                        tier.darkCard
                          ? 'bg-voltry-blue hover:bg-voltry-blue/90 text-white shadow-lg shadow-voltry-blue/30'
                          : tier.popular
                          ? 'bg-gradient-to-r from-voltry-blue to-voltry-purple hover:from-voltry-blue/90 hover:to-voltry-purple/90 text-white shadow-lg shadow-voltry-blue/30'
                          : 'bg-voltry-purple hover:bg-voltry-purple/90 text-white shadow-lg shadow-voltry-purple/30'
                      }`}
                    >
                      {tier.cta}
                    </Link>
                  </motion.div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Add-Ons Section */}
      <section className="relative py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Add-Ons & Extensions</h2>
            <p className="text-xl text-gray-300">Enhance your Voltry platform with additional capabilities</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {addOns.map((addOn, index) => (
              <motion.div
                key={addOn.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="h-full bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:border-voltry-purple/50 hover:shadow-xl hover:shadow-voltry-purple/20 transition-all"
                >
                  <h3 className="text-2xl font-bold text-white mb-2">{addOn.name}</h3>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-3xl font-bold text-voltry-purple">{addOn.price}</span>
                    <span className="text-gray-400 text-sm">{addOn.unit}</span>
                  </div>
                  <p className="text-gray-300 mb-4">{addOn.description}</p>
                  {addOn.highlight && (
                    <div className="bg-voltry-purple/10 border border-voltry-purple/30 rounded-lg p-4 mb-4">
                      <p className="text-voltry-purple font-semibold text-sm">{addOn.highlight}</p>
                      {addOn.savings && <p className="text-gray-400 text-xs mt-1">{addOn.savings}</p>}
                    </div>
                  )}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-300">Everything you need to know about Voltry pricing</p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 text-left hover:border-voltry-blue/50 transition-all"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-white pr-8">{faq.question}</h3>
                    <motion.div
                      animate={{ rotate: openFaq === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0"
                    >
                      <svg
                        className="w-6 h-6 text-voltry-blue"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </motion.div>
                  </div>

                  <motion.div
                    initial={false}
                    animate={{
                      height: openFaq === index ? 'auto' : 0,
                      opacity: openFaq === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="text-gray-300 mt-4 leading-relaxed">{faq.answer}</p>
                  </motion.div>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-voltry-blue via-voltry-purple to-voltry-blue rounded-3xl p-12 text-center relative overflow-hidden"
          >
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%] animate-[gradient_15s_ease_infinite]" />

            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Join those with 50M training hours using Voltry to predict failures, reduce downtime, and optimize operations.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/start-free"
                  className="px-10 py-5 bg-white hover:bg-gray-100 text-voltry-navy rounded-xl text-lg font-bold transition-all hover:scale-105 shadow-xl"
                >
                  Start Free Today
                </Link>
                <Link
                  href="/contact"
                  className="px-10 py-5 bg-transparent border-2 border-white text-white hover:bg-white/10 rounded-xl text-lg font-bold transition-all"
                >
                  Talk to Sales
                </Link>
              </div>

              <p className="text-white/70 text-sm mt-6">
                No credit card required • Setup in 48 hours • Cancel anytime
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default PricingPage
