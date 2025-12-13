import About from '@/components/About'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About - Cloud Architect & Microsoft Azure Expert',
  description: 'Learn more about my journey as a Cloud Architect, my experience with Microsoft Azure, and my approach to building scalable cloud solutions.',
}

export default function AboutPage() {
  return <About />
}
