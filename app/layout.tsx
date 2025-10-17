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
  icons: {
    icon: [
      { url: '/Logo/voltry-icon-16.png', sizes: '16x16', type: 'image/png' },
      { url: '/Logo/voltry-icon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/Logo/voltry-icon-64.png', sizes: '64x64', type: 'image/png' },
    ],
    apple: [
      { url: '/Logo/voltry-icon-180.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'icon', url: '/Logo/Voltry_Favicon.png' },
    ],
  },
  openGraph: {
    title: 'Voltry - The Nervous System of the Modern Grid',
    description: 'Unify fragmented infrastructure. Predict failures 48 hours early. Prevent them autonomously.',
    type: 'website',
    locale: 'en_US',
    url: 'https://voltry.tech',
    siteName: 'Voltry Technologies',
    images: [
      {
        url: '/Logo/voltry-logo-large.png',
        width: 1200,
        height: 630,
        alt: 'Voltry Technologies',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Voltry - The Nervous System of the Modern Grid',
    description: 'Unify fragmented infrastructure. Predict failures 48 hours early. Prevent them autonomously.',
    images: ['/Logo/voltry-logo-large.png'],
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
