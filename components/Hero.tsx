import Link from 'next/link'
import { ArrowRight, Cloud } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-azure-900 to-slate-900">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        {/* Icon */}
        <div className="flex justify-center mb-8">
          <div className="w-20 h-20 bg-azure-600 rounded-2xl flex items-center justify-center shadow-lg">
            <Cloud className="w-10 h-10 text-white" />
          </div>
        </div>

        {/* Main Content */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
          Cloud Architect &amp;
          <span className="block text-azure-400 mt-2">Microsoft Azure Expert</span>
        </h1>
        
        <p className="text-xl sm:text-2xl text-slate-300 max-w-3xl mx-auto mb-8">
          Architecting scalable, secure, and innovative cloud solutions that transform businesses and drive digital excellence
        </p>
        
        <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-12">
          Specializing in enterprise-scale Azure implementations, cloud-native architectures, 
          DevOps automation, and strategic cloud transformation initiatives
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/experience"
            className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-white bg-azure-600 hover:bg-azure-700 transition-colors shadow-lg hover:shadow-xl"
          >
            View My Work
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-medium rounded-md text-white hover:bg-white hover:text-slate-900 transition-colors"
          >
            Get In Touch
          </Link>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-slate-400 rounded-full mt-2"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
