import Experience from '@/components/Experience'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Experience - Cloud Architect & Microsoft Azure Expert',
  description: 'Discover my professional experience and projects in cloud architecture, Azure implementations, and enterprise-scale solutions.',
}

export default function ExperiencePage() {
  return <Experience />
}
