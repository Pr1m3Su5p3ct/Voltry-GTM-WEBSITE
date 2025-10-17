'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

const Footer = () => {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement newsletter signup
    setSubscribed(true)
    setTimeout(() => setSubscribed(false), 3000)
  }

  return (
    <footer className="bg-voltry-navy border-t border-voltry-blue/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-3 mb-4">
              <Image
                src="/Logo/voltry-icon-64.png"
                alt="Voltry"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <span className="text-white font-bold text-xl">Voltry</span>
            </Link>
            <p className="text-gray-400 text-sm mb-4">
              The nervous system of the modern grid
            </p>
            {/* Social Icons */}
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/company/voltry"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-voltry-blue transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="https://github.com/voltry"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-voltry-blue transition-colors"
                aria-label="GitHub"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
                </svg>
              </a>
              <a
                href="https://twitter.com/voltrytech"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-voltry-blue transition-colors"
                aria-label="Twitter"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a
                href="https://youtube.com/@voltrytech"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-voltry-blue transition-colors"
                aria-label="YouTube"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Platform Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Platform</h3>
            <ul className="space-y-2">
              <li><Link href="/platform/voltos" className="text-gray-400 hover:text-white text-sm transition-colors">Integration Layer</Link></li>
              <li><Link href="/platform/voltrypredict" className="text-gray-400 hover:text-white text-sm transition-colors">Prediction Intelligence</Link></li>
              <li><Link href="/platform/voltrycore" className="text-gray-400 hover:text-white text-sm transition-colors">Multi-Domain Sensors</Link></li>
              <li><Link href="/platform/voltryguard" className="text-gray-400 hover:text-white text-sm transition-colors">Active Control</Link></li>
              <li><Link href="/platform/mcp" className="text-gray-400 hover:text-white text-sm transition-colors">MCP Server</Link></li>
              <li><Link href="/docs" className="text-gray-400 hover:text-white text-sm transition-colors">Technical Docs</Link></li>
            </ul>
          </div>

          {/* Solutions Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li><Link href="/solutions/data-centers" className="text-gray-400 hover:text-white text-sm transition-colors">Data Centers</Link></li>
              <li><Link href="/solutions/utilities" className="text-gray-400 hover:text-white text-sm transition-colors">Utilities & Substations</Link></li>
              <li><Link href="/solutions/der-microgrids" className="text-gray-400 hover:text-white text-sm transition-colors">DER & Microgrids</Link></li>
              <li><Link href="/solutions/industrial" className="text-gray-400 hover:text-white text-sm transition-colors">Industrial Facilities</Link></li>
              <li><Link href="/resources/case-studies" className="text-gray-400 hover:text-white text-sm transition-colors">Case Studies</Link></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-white text-sm transition-colors">About Us</Link></li>
              <li><Link href="/team" className="text-gray-400 hover:text-white text-sm transition-colors">Team</Link></li>
              <li><Link href="/careers" className="text-gray-400 hover:text-white text-sm transition-colors">Careers</Link></li>
              <li><Link href="/press" className="text-gray-400 hover:text-white text-sm transition-colors">Press Kit</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white text-sm transition-colors">Contact</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-white text-sm transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-400 text-sm mb-4">
              Get monthly insights on grid intelligence
            </p>
            <form onSubmit={handleSubmit} className="space-y-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="w-full px-4 py-2 bg-voltry-navy border border-voltry-blue/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-voltry-blue text-sm"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-voltry-blue hover:bg-voltry-blue/90 text-white rounded-lg text-sm font-medium transition-colors"
              >
                {subscribed ? 'Subscribed!' : 'Subscribe'}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-voltry-blue/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2025 Voltry Technologies. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</Link>
              <Link href="/security" className="text-gray-400 hover:text-white text-sm transition-colors">Security</Link>
              <Link href="/accessibility" className="text-gray-400 hover:text-white text-sm transition-colors">Accessibility</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
