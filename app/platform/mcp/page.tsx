'use client'

import { motion } from 'framer-motion'
import { Bot, Code, Lock, Zap, Terminal, Server, CheckCircle, ArrowRight, Shield, Clock, DollarSign, BookOpen, Sparkles } from 'lucide-react'
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

export default function MCPServerPage() {
  const [activeUseCase, setActiveUseCase] = useState('optimization')

  const exampleQueries = [
    {
      query: '"What\'s the current power factor at Facility B?"',
      response: 'Power factor at Facility B is currently 0.92. Trending down from 0.95 over the past 3 hours. Recommend checking capacitor bank status.',
      agent: 'Claude',
      time: '280ms'
    },
    {
      query: '"Compare energy consumption across all sites this week"',
      response: 'Total consumption: 1.2 GWh. Site rankings: 1) Facility A (520 MWh, +12% vs last week), 2) Facility C (380 MWh, -5%), 3) Facility B (300 MWh, +2%).',
      agent: 'GPT-4',
      time: '420ms'
    },
    {
      query: '"Alert me if any transformer temperature exceeds 85°C"',
      response: 'Monitoring configured. Current highest temp: Transformer T-12 at 78°C. All within safe limits. Will notify via webhook if threshold exceeded.',
      agent: 'Custom Agent',
      time: '190ms'
    }
  ]

  const useCases = [
    {
      id: 'optimization',
      name: 'Load Optimization',
      description: 'AI agents continuously analyze and optimize load distribution',
      benefits: ['Reduce peak demand by 15-20%', 'Automated demand response', 'Predictive load balancing']
    },
    {
      id: 'predictive',
      name: 'Predictive Maintenance',
      description: 'Natural language queries for equipment health and failure prediction',
      benefits: ['Query equipment history conversationally', 'Automated anomaly detection', 'Maintenance scheduling optimization']
    },
    {
      id: 'reporting',
      name: 'Instant Reports',
      description: 'Generate complex energy reports through simple prompts',
      benefits: ['Natural language report generation', 'Automated compliance docs', 'Custom KPI dashboards']
    }
  ]

  const pricingTiers = [
    {
      name: 'Developer',
      price: 'Free',
      requests: '10K/month',
      features: ['Basic API access', 'Community support', 'Read-only queries', 'Standard rate limits'],
      color: 'voltry-blue'
    },
    {
      name: 'Production',
      price: '$499',
      requests: '1M/month',
      features: ['Full API access', 'Priority support', 'Read/write operations', 'Custom webhooks', 'SLA guarantee'],
      color: 'voltry-purple',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      requests: 'Unlimited',
      features: ['Dedicated infrastructure', '24/7 phone support', 'Custom integrations', 'On-premise option', 'Advanced security'],
      color: 'voltry-lime'
    }
  ]

  return (
    <div className="bg-voltry-navy text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-voltry-blue/10 via-voltry-purple/5 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(0,149,255,0.1),transparent_50%)]" />

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
              className="inline-flex items-center gap-3 bg-voltry-blue/20 border border-voltry-blue/50 px-6 py-3 rounded-full mb-8"
            >
              <Bot className="text-voltry-blue" size={24} />
              <span className="font-semibold text-voltry-blue">Model Context Protocol</span>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-voltry-blue via-voltry-purple to-voltry-lime bg-clip-text text-transparent"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              MCP Server: AI-Native Power Infrastructure
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Let Claude, GPT, and other AI agents query your facilities.
              <br />
              <span className="text-voltry-blue font-semibold">Natural language interface for grid intelligence.</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a href="https://form.typeform.com/to/ezedDSEA" target="_blank" rel="noopener noreferrer" className="bg-voltry-blue hover:bg-voltry-purple transition-all duration-300 text-white px-10 py-4 rounded-lg text-lg font-semibold shadow-lg hover:shadow-voltry-blue/50 hover:scale-105 transform">
                Join Beta Program <ArrowRight className="inline ml-2" size={20} />
              </a>
              <a href="https://form.typeform.com/to/ezedDSEA" target="_blank" rel="noopener noreferrer" className="bg-slate-800 hover:bg-slate-700 transition-all duration-300 text-white px-10 py-4 rounded-lg text-lg font-semibold border border-slate-700 hover:border-voltry-blue hover:scale-105 transform">
                Read Documentation <BookOpen className="inline ml-2" size={20} />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* What is MCP Explainer */}
      <section className="py-20 px-6 bg-gradient-to-b from-voltry-navy to-slate-950">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What is Model Context Protocol?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              MCP is an open protocol that lets AI models connect to your data.
              Think of it as a universal translator between AI agents and your power infrastructure.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Server,
                title: 'Your Infrastructure',
                description: 'SCADA systems, meters, sensors, and existing databases',
                color: 'voltry-blue'
              },
              {
                icon: Sparkles,
                title: 'MCP Server',
                description: 'Standardizes and exposes your data through a unified API',
                color: 'voltry-purple',
                highlight: true
              },
              {
                icon: Bot,
                title: 'AI Agents',
                description: 'Claude, GPT, or custom agents query in natural language',
                color: 'voltry-lime'
              }
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className={`bg-gradient-to-br ${
                    item.highlight
                      ? 'from-voltry-purple/20 to-voltry-blue/10 border-2 border-voltry-purple'
                      : 'from-slate-900 to-slate-950 border border-slate-800'
                  } p-8 rounded-2xl text-center relative`}
                >
                  {item.highlight && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-voltry-purple text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Voltry MCP
                      </span>
                    </div>
                  )}
                  <Icon className={`mx-auto mb-4 text-${item.color}`} size={64} />
                  <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </motion.div>
              )
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 bg-voltry-blue/10 border border-voltry-blue/30 rounded-xl p-6 text-center"
          >
            <p className="text-lg">
              <span className="text-voltry-blue font-bold">No more writing custom integrations</span>
              <span className="text-gray-400"> for every AI tool. One API, infinite possibilities.</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Example Queries */}
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
              Ask Questions. Get Answers.
            </h2>
            <p className="text-xl text-gray-400">
              Real examples of AI agents querying power infrastructure
            </p>
          </motion.div>

          <div className="space-y-8">
            {exampleQueries.map((example, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-gradient-to-br from-slate-900 to-slate-950 rounded-2xl overflow-hidden border border-slate-800 hover:border-voltry-blue/50 transition-all duration-300"
              >
                {/* Query */}
                <div className="bg-slate-800/50 p-6 border-b border-slate-700">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-voltry-blue/20 p-2 rounded-lg">
                      <Terminal className="text-voltry-blue" size={20} />
                    </div>
                    <span className="text-sm text-gray-400 font-mono">{example.agent}</span>
                    <span className="ml-auto text-xs text-voltry-lime bg-voltry-lime/10 px-3 py-1 rounded-full">
                      {example.time}
                    </span>
                  </div>
                  <code className="text-lg text-white font-mono">{example.query}</code>
                </div>

                {/* Response */}
                <div className="p-6">
                  <div className="flex items-start gap-3">
                    <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
                      <CheckCircle className="text-green-400" size={20} />
                    </div>
                    <p className="text-gray-300 leading-relaxed">{example.response}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 bg-slate-900 rounded-xl p-8 border border-voltry-purple/30"
          >
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <Code className="text-voltry-purple" size={28} />
              Code Example
            </h3>
            <pre className="bg-slate-950 p-6 rounded-lg overflow-x-auto">
              <code className="text-sm font-mono text-gray-300">
{`// Using MCP Server with Claude
import Anthropic from '@anthropic-ai/sdk';

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY
});

const response = await client.messages.create({
  model: "claude-3-5-sonnet-20241022",
  max_tokens: 1024,
  tools: [{
    type: "mcp_server",
    name: "voltry-mcp",
    server_url: "https://mcp.voltry.tech"
  }],
  messages: [{
    role: "user",
    content: "What's the current load at Facility B?"
  }]
});

console.log(response.content);
// => "Current load at Facility B is 2.4 MW..."`}
              </code>
            </pre>
          </motion.div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-6 bg-gradient-to-b from-slate-950 to-voltry-navy">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              AI Agents for Grid Operations
            </h2>
            <p className="text-xl text-gray-400">
              Transform your infrastructure with intelligent automation
            </p>
          </motion.div>

          {/* Use Case Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {useCases.map((useCase) => (
              <motion.button
                key={useCase.id}
                onClick={() => setActiveUseCase(useCase.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-8 py-4 rounded-lg font-semibold transition-all duration-300 ${
                  activeUseCase === useCase.id
                    ? 'bg-gradient-to-r from-voltry-blue to-voltry-purple text-white shadow-lg shadow-voltry-blue/50'
                    : 'bg-slate-800 text-gray-400 hover:bg-slate-700'
                }`}
              >
                {useCase.name}
              </motion.button>
            ))}
          </div>

          {/* Use Case Content */}
          {useCases.map((useCase) => (
            activeUseCase === useCase.id && (
              <motion.div
                key={useCase.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-br from-slate-900 to-slate-950 rounded-2xl p-10 border border-voltry-blue/30"
              >
                <h3 className="text-3xl font-bold mb-4">{useCase.name}</h3>
                <p className="text-xl text-gray-400 mb-8">{useCase.description}</p>

                <div className="grid md:grid-cols-3 gap-6">
                  {useCase.benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="bg-slate-800 p-6 rounded-xl border border-slate-700"
                    >
                      <CheckCircle className="text-green-400 mb-3" size={24} />
                      <p className="text-gray-300">{benefit}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )
          ))}
        </div>
      </section>

      {/* Security */}
      <section className="py-20 px-6 bg-voltry-navy">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Shield className="mx-auto mb-6 text-voltry-blue" size={64} />
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Enterprise-Grade Security
            </h2>
            <p className="text-xl text-gray-400">
              Your infrastructure data stays protected
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Lock,
                title: 'OAuth 2.0',
                description: 'Industry-standard authentication',
                details: ['JWT tokens', 'Refresh tokens', 'Scope-based access']
              },
              {
                icon: Shield,
                title: 'Rate Limiting',
                description: 'Prevent abuse and ensure availability',
                details: ['Per-key limits', 'Burst protection', 'Fair usage']
              },
              {
                icon: Server,
                title: 'Encrypted Transit',
                description: 'TLS 1.3 for all connections',
                details: ['End-to-end encryption', 'Certificate pinning', 'Zero-trust model']
              },
              {
                icon: Terminal,
                title: 'Audit Logs',
                description: 'Complete query history',
                details: ['Real-time logging', 'Compliance reports', 'Anomaly detection']
              }
            ].map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-slate-900 to-slate-950 p-6 rounded-xl border border-slate-800 hover:border-voltry-blue/50 transition-all duration-300"
                >
                  <Icon className="text-voltry-blue mb-4" size={40} />
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-400 mb-4 text-sm">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.details.map((detail) => (
                      <li key={detail} className="flex items-center gap-2 text-sm text-gray-500">
                        <CheckCircle className="text-green-400 flex-shrink-0" size={14} />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 bg-green-500/10 border border-green-500/30 rounded-xl p-6 text-center"
          >
            <p className="text-lg">
              <span className="text-green-400 font-bold">SOC 2 Type II certified</span>
              <span className="text-gray-400"> with annual penetration testing</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-20 px-6 bg-gradient-to-b from-voltry-navy to-slate-950">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Simple, Predictable Pricing
            </h2>
            <p className="text-xl text-gray-400">
              Start free. Scale as you grow.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative bg-gradient-to-br ${
                  tier.popular
                    ? 'from-voltry-purple/20 to-voltry-blue/10 border-2 border-voltry-purple scale-105'
                    : 'from-slate-900 to-slate-950 border border-slate-800'
                } p-8 rounded-2xl hover:scale-105 transition-transform duration-300`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-voltry-purple to-voltry-blue text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-4">{tier.name}</h3>
                  <div className="mb-2">
                    <span className={`text-5xl font-bold text-${tier.color}`}>{tier.price}</span>
                    {tier.price !== 'Free' && tier.price !== 'Custom' && (
                      <span className="text-gray-400 text-lg">/month</span>
                    )}
                  </div>
                  <p className="text-gray-400">{tier.requests} requests</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircle className={`text-${tier.color} flex-shrink-0 mt-1`} size={20} />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-4 rounded-lg font-semibold transition-all duration-300 ${
                    tier.popular
                      ? `bg-gradient-to-r from-voltry-purple to-voltry-blue text-white hover:shadow-lg hover:shadow-${tier.color}/50`
                      : `bg-slate-800 text-white hover:bg-slate-700 border border-slate-700 hover:border-${tier.color}`
                  }`}
                >
                  {tier.price === 'Free' ? 'Start Free' : tier.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
                </a>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 text-center text-gray-400"
          >
            <p>All plans include SSL, uptime SLA, and community support.</p>
            <p className="mt-2">Enterprise plans include dedicated support and custom SLAs.</p>
          </motion.div>
        </div>
      </section>

      {/* Developer Docs CTA */}
      <section className="py-20 px-6 bg-slate-950">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <BookOpen className="text-voltry-blue mb-6" size={64} />
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Comprehensive Documentation
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Everything you need to integrate MCP Server into your workflow.
                From quickstart guides to advanced API references.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  'Interactive API playground',
                  'SDK libraries for Python, Node.js, Go',
                  'Example implementations',
                  'WebSocket streaming guides',
                  'Migration from legacy APIs'
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="text-voltry-blue flex-shrink-0" size={20} />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>

              <a href="https://form.typeform.com/to/ezedDSEA" target="_blank" rel="noopener noreferrer" className="bg-voltry-blue hover:bg-voltry-purple transition-all duration-300 text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-lg hover:shadow-voltry-blue/50 hover:scale-105 transform">
                Explore Documentation <ArrowRight className="inline ml-2" size={20} />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-slate-900 to-slate-950 p-8 rounded-2xl border border-voltry-blue/30"
            >
              <div className="space-y-6">
                {[
                  { title: 'Quickstart Guide', time: '5 min', icon: Zap },
                  { title: 'Authentication', time: '10 min', icon: Lock },
                  { title: 'Query Syntax', time: '15 min', icon: Code },
                  { title: 'WebSocket Events', time: '12 min', icon: Server }
                ].map((doc, index) => {
                  const Icon = doc.icon
                  return (
                    <motion.div
                      key={doc.title}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-center gap-4 p-4 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors cursor-pointer group"
                    >
                      <Icon className="text-voltry-blue group-hover:text-voltry-purple transition-colors" size={24} />
                      <div className="flex-1">
                        <h4 className="font-semibold text-white">{doc.title}</h4>
                        <p className="text-sm text-gray-400">{doc.time} read</p>
                      </div>
                      <ArrowRight className="text-gray-600 group-hover:text-voltry-blue transition-colors" size={20} />
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Beta Program Signup */}
      <section className="py-24 px-6 bg-gradient-to-b from-slate-950 to-voltry-navy">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-voltry-blue/20 via-voltry-purple/10 to-transparent p-12 rounded-3xl border-2 border-voltry-blue/30 text-center"
          >
            <Bot className="mx-auto mb-6 text-voltry-blue" size={64} />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Join the MCP Server Beta
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Get early access to the most advanced AI integration platform for power infrastructure.
              Limited spots available.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                { label: 'Beta Access', value: 'Free', icon: DollarSign },
                { label: 'Setup Time', value: '<1 Hour', icon: Clock },
                { label: 'Support', value: 'Priority', icon: Shield }
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
              <h3 className="text-2xl font-bold mb-6">Beta Program Includes</h3>
              <div className="grid md:grid-cols-2 gap-4 text-left">
                {[
                  'Full API access (no rate limits)',
                  'Direct Slack channel with engineering',
                  'Early access to new features',
                  'Free for duration of beta',
                  'Migration assistance included',
                  'Shape the roadmap with feedback'
                ].map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3">
                    <Sparkles className="text-voltry-lime flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-voltry-blue via-voltry-purple to-voltry-lime text-white px-12 py-5 rounded-lg text-xl font-bold shadow-2xl hover:shadow-voltry-blue/50 transition-all duration-300"
            >
              Apply for Beta Access <ArrowRight className="inline ml-2" size={24} />
            </motion.button>

            <p className="text-gray-500 text-sm mt-6">
              Applications reviewed within 24 hours. Rolling acceptance.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
