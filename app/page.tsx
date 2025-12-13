import Hero from '@/components/Hero'
import { Cloud, Code, Server, Shield } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Hero />
      
      {/* Featured Skills Preview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Cloud Architecture Excellence
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Delivering scalable, secure, and innovative cloud solutions with deep expertise in Microsoft Azure ecosystem
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 bg-slate-50 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-azure-100 rounded-lg flex items-center justify-center mb-4">
                <Cloud className="w-6 h-6 text-azure-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Azure Services</h3>
              <p className="text-slate-600">
                Expert in App Service, Functions, AKS, and comprehensive Azure platform services
              </p>
            </div>
            
            <div className="p-6 bg-slate-50 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <Code className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Architecture</h3>
              <p className="text-slate-600">
                Microservices, serverless, event-driven, and cloud-native patterns
              </p>
            </div>
            
            <div className="p-6 bg-slate-50 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <Server className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">DevOps & IaC</h3>
              <p className="text-slate-600">
                Azure DevOps, GitHub Actions, Terraform, Bicep, Docker, and Kubernetes
              </p>
            </div>
            
            <div className="p-6 bg-slate-50 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Security</h3>
              <p className="text-slate-600">
                Zero Trust, Azure AD, Security Center, Key Vault, and compliance frameworks
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link
              href="/skills"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-azure-600 hover:bg-azure-700 transition-colors"
            >
              View All Skills
            </Link>
          </div>
        </div>
      </section>
      
      {/* Brief Introduction */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Building the Future of Cloud Computing
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            With years of experience architecting enterprise-scale solutions on Microsoft Azure, 
            I specialize in transforming business requirements into robust, scalable, and cost-effective 
            cloud infrastructures. My approach combines technical excellence with strategic thinking to 
            deliver solutions that drive business value.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/about"
              className="inline-flex items-center justify-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-slate-900 transition-colors"
            >
              Learn More About Me
            </Link>
            <Link
              href="/experience"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-slate-900 bg-white hover:bg-slate-100 transition-colors"
            >
              View My Experience
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
