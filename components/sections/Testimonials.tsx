'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'

interface Testimonial {
  quote: string
  author: string
  role: string
  company: string
  metric: string
  metricValue: string
}

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials: Testimonial[] = [
    {
      quote: "VoltryOS predicted our transformer failure 47 hours before it happened. The thermal and vibration patterns it detected were invisible to our legacy SCADA. This literally saved us $2.3M in emergency replacement costs and prevented a cascading outage.",
      author: "Dr. Sarah Chen",
      role: "VP of Operations",
      company: "Pacific Energy Grid",
      metric: "Prevented Downtime",
      metricValue: "$2.3M Saved"
    },
    {
      quote: "We went from juggling 6 different monitoring systems to one unified dashboard. The AI caught anomalies in our cooling systems that our team missed for months. Now we're actually predictive instead of reactive.",
      author: "Marcus Rodriguez",
      role: "Chief Engineer",
      company: "MidWest Power Authority",
      metric: "System Integration",
      metricValue: "6 → 1 Platform"
    },
    {
      quote: "The federated AI approach means we keep our data secure while still getting enterprise-grade insights. Setup took 36 hours - not weeks. Our compliance reporting time dropped from 40 hours to 4 hours per month.",
      author: "Jennifer Walsh",
      role: "Director of Infrastructure",
      company: "Northeast Utility Cooperative",
      metric: "Efficiency Gain",
      metricValue: "90% Faster Reporting"
    }
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="relative py-20 bg-voltry-navy overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0095ff08_1px,transparent_1px),linear-gradient(to_bottom,#0095ff08_1px,transparent_1px)] bg-[size:3rem_3rem]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Success Stories
          </h2>
          <p className="text-xl text-gray-400">
            Real results from real infrastructure operators
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl max-w-4xl mx-auto"
          >
            {/* Quote Icon */}
            <div className="flex justify-start mb-6">
              <svg className="w-12 h-12 text-voltry-blue/20" fill="currentColor" viewBox="0 0 32 32">
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
            </div>

            {/* Quote */}
            <blockquote className="text-xl md:text-2xl text-gray-800 font-serif leading-relaxed mb-8">
              "{testimonials[currentIndex].quote}"
            </blockquote>

            {/* Author Info and Metric */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
              <div>
                <p className="text-lg font-bold text-voltry-navy mb-1">
                  {testimonials[currentIndex].author}
                </p>
                <p className="text-gray-600">
                  {testimonials[currentIndex].role}
                </p>
                <p className="text-voltry-blue font-semibold">
                  {testimonials[currentIndex].company}
                </p>
              </div>

              <div className="bg-voltry-blue/10 rounded-lg px-6 py-4 text-center">
                <p className="text-sm text-gray-600 mb-1">
                  {testimonials[currentIndex].metric}
                </p>
                <p className="text-2xl font-bold text-voltry-blue">
                  {testimonials[currentIndex].metricValue}
                </p>
              </div>
            </div>

            {/* Read More CTA */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <button className="text-voltry-blue hover:text-voltry-blue/80 font-semibold flex items-center gap-2 transition-colors">
                Read Full Case Study
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 bg-white hover:bg-gray-100 rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6 text-voltry-navy" />
            </button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? 'w-8 bg-voltry-blue'
                      : 'w-2 bg-gray-400 hover:bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 bg-white hover:bg-gray-100 rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6 text-voltry-navy" />
            </button>
          </div>
        </div>

        {/* Static Grid Option - Alternative Layout */}
        {/* Uncomment to use static grid instead of carousel */}
        {/*
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl p-8 shadow-xl hover:shadow-2xl transition-shadow"
            >
              <blockquote className="text-lg text-gray-800 font-serif leading-relaxed mb-6">
                "{testimonial.quote}"
              </blockquote>
              <div className="mb-4">
                <p className="font-bold text-voltry-navy">{testimonial.author}</p>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
                <p className="text-sm text-voltry-blue font-semibold">{testimonial.company}</p>
              </div>
              <div className="bg-voltry-blue/10 rounded-lg px-4 py-3 mb-4">
                <p className="text-xs text-gray-600">{testimonial.metric}</p>
                <p className="text-xl font-bold text-voltry-blue">{testimonial.metricValue}</p>
              </div>
              <button className="text-voltry-blue hover:text-voltry-blue/80 font-semibold flex items-center gap-2 text-sm">
                Read More
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>
        */}
      </div>
    </section>
  )
}

export default Testimonials
