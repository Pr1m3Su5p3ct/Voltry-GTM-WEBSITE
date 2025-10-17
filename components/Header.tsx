'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const navigation = {
    platform: [
      { name: 'Integration Layer (VoltryOS)', href: '/platform/voltos' },
      { name: 'Prediction Intelligence (VoltryPredict)', href: '/platform/voltrypredict' },
      { name: 'Multi-Domain Sensors (VoltryCore)', href: '/platform/voltrycore' },
      { name: 'Active Control (VoltryGuard)', href: '/platform/voltryguard' },
      { name: 'MCP Server (For AI Agents)', href: '/platform/mcp' },
    ],
    solutions: [
      { name: 'Data Centers', href: '/solutions/data-centers' },
      { name: 'Utilities & Substations', href: '/solutions/utilities' },
      { name: 'DER & Microgrids', href: '/solutions/der-microgrids' },
      { name: 'Industrial Facilities', href: '/solutions/industrial' },
    ],
    resources: [
      { name: 'Documentation', href: '/docs' },
      { name: 'Case Studies', href: '/resources/case-studies' },
      { name: 'Technical Whitepapers', href: '/resources/whitepapers' },
      { name: 'API Reference', href: '/api' },
      { name: 'GitHub (Open Source)', href: 'https://github.com/voltry', external: true },
      { name: 'Blog', href: '/blog' },
    ],
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-voltry-navy/95 backdrop-blur-md border-b border-voltry-blue/20">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="https://res.cloudinary.com/di54rmpjf/image/upload/v1758908977/VOLTRY_Brand_Logo_Design_thsz3q.png"
                alt="Voltry"
                width={120}
                height={40}
                className="h-10 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {/* Platform Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('platform')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors">
                Platform
              </button>
              <AnimatePresence>
                {activeDropdown === 'platform' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 mt-2 w-80 bg-voltry-navy border border-voltry-blue/30 rounded-lg shadow-xl overflow-hidden"
                  >
                    {navigation.platform.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block px-4 py-3 text-sm text-gray-300 hover:bg-voltry-blue/10 hover:text-white transition-colors"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Solutions Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('solutions')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors">
                Solutions
              </button>
              <AnimatePresence>
                {activeDropdown === 'solutions' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 mt-2 w-64 bg-voltry-navy border border-voltry-blue/30 rounded-lg shadow-xl overflow-hidden"
                  >
                    {navigation.solutions.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block px-4 py-3 text-sm text-gray-300 hover:bg-voltry-blue/10 hover:text-white transition-colors"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/pricing" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors">
              Pricing
            </Link>

            {/* Resources Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('resources')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors">
                Resources
              </button>
              <AnimatePresence>
                {activeDropdown === 'resources' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 mt-2 w-72 bg-voltry-navy border border-voltry-blue/30 rounded-lg shadow-xl overflow-hidden"
                  >
                    {navigation.resources.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block px-4 py-3 text-sm text-gray-300 hover:bg-voltry-blue/10 hover:text-white transition-colors"
                        {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Link
              href="/login"
              className="text-gray-300 hover:text-white px-4 py-2 text-sm font-medium transition-colors"
            >
              Login
            </Link>
            <Link
              href="/start-free"
              className="bg-voltry-blue hover:bg-voltry-blue/90 text-white px-6 py-2 rounded-lg text-sm font-medium transition-all hover:shadow-lg hover:shadow-voltry-blue/50"
            >
              Start Free
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-voltry-blue/10"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? (
              <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
            >
              <div className="space-y-1 px-2 pb-3 pt-2">
                <div className="space-y-2">
                  <p className="text-gray-400 text-xs font-semibold uppercase px-3">Platform</p>
                  {navigation.platform.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-voltry-blue/10 rounded-md"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>

                <div className="space-y-2 pt-4">
                  <p className="text-gray-400 text-xs font-semibold uppercase px-3">Solutions</p>
                  {navigation.solutions.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-voltry-blue/10 rounded-md"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>

                <div className="pt-4">
                  <Link
                    href="/pricing"
                    className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-voltry-blue/10 rounded-md"
                  >
                    Pricing
                  </Link>
                </div>

                <div className="space-y-2 pt-4">
                  <p className="text-gray-400 text-xs font-semibold uppercase px-3">Resources</p>
                  {navigation.resources.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-voltry-blue/10 rounded-md"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>

                <div className="pt-4 space-y-2">
                  <Link
                    href="/login"
                    className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-voltry-blue/10 rounded-md"
                  >
                    Login
                  </Link>
                  <Link
                    href="/start-free"
                    className="block px-3 py-2 text-base font-medium bg-voltry-blue text-white hover:bg-voltry-blue/90 rounded-md text-center"
                  >
                    Start Free
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}

export default Header
