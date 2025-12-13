import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Cloud Architect & Microsoft Azure Expert',
  description: 'Professional Cloud Architect specializing in Microsoft Azure, cloud-native solutions, and enterprise architecture. Expert in Azure Services, DevOps, Kubernetes, and cloud transformation.',
  keywords: ['Cloud Architect', 'Microsoft Azure', 'Azure Expert', 'Cloud Solutions', 'DevOps', 'Kubernetes', 'Microservices', 'Cloud Architecture'],
  authors: [{ name: 'Cloud Architect' }],
  openGraph: {
    title: 'Cloud Architect & Microsoft Azure Expert',
    description: 'Professional Cloud Architect specializing in Microsoft Azure, cloud-native solutions, and enterprise architecture.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cloud Architect & Microsoft Azure Expert',
    description: 'Professional Cloud Architect specializing in Microsoft Azure, cloud-native solutions, and enterprise architecture.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
