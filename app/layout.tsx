import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Voltry - The Nervous System of the Modern Grid',
  description: 'Unify fragmented infrastructure. Predict failures 48 hours early. Prevent them autonomously. From monitoring to intelligence to control — powered by multi-domain sensing + federated AI.',
  keywords: ['power infrastructure', 'predictive analytics', 'energy management', 'grid intelligence', 'multi-domain sensing'],
  authors: [{ name: 'Voltry Technologies' }],
  openGraph: {
    title: 'Voltry - The Nervous System of the Modern Grid',
    description: 'Unify fragmented infrastructure. Predict failures 48 hours early. Prevent them autonomously.',
    type: 'website',
    locale: 'en_US',
    url: 'https://voltry.tech',
    siteName: 'Voltry Technologies',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Voltry - The Nervous System of the Modern Grid',
    description: 'Unify fragmented infrastructure. Predict failures 48 hours early. Prevent them autonomously.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
