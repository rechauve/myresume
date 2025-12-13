import Contact from '@/components/Contact'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact - Cloud Architect & Microsoft Azure Expert',
  description: 'Get in touch to discuss cloud architecture projects, Azure consulting, or collaboration opportunities.',
}

export default function ContactPage() {
  return <Contact />
}
