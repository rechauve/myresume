import { Award, BookOpen, Target, Users } from 'lucide-react'

export default function About() {
  const coreValues = [
    {
      icon: Target,
      title: 'Strategic Thinking',
      description: 'Aligning technology decisions with business objectives to deliver maximum value and ROI.',
    },
    {
      icon: BookOpen,
      title: 'Continuous Learning',
      description: 'Staying current with emerging technologies and best practices in cloud architecture.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working closely with cross-functional teams to ensure successful project delivery.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Committed to delivering high-quality, scalable, and maintainable solutions.',
    },
  ]

  const certifications = [
    'Microsoft Certified: Azure Solutions Architect Expert',
    'Microsoft Certified: Azure Network Engineer Associate',
    'Microsoft Certified: Azure Administrator Associate',
  ]

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-slate-900 mb-4">
            About Me
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Passionate about transforming businesses through innovative cloud solutions
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Photo Placeholder */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-azure-600 to-azure-800 rounded-lg aspect-square flex items-center justify-center shadow-lg">
              <div className="text-center text-white">
                <div className="text-8xl mb-4">👨‍💻</div>
                <p className="text-xl font-semibold">Cloud Architect</p>
              </div>
            </div>
          </div>

          {/* Biography */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Professional Journey
              </h2>
              <div className="space-y-4 text-slate-700 text-lg">
                <p>
                  With over a decade of experience in cloud computing and enterprise architecture, 
                  I specialize in designing and implementing scalable, secure, and cost-effective 
                  solutions on Microsoft Azure. My journey in technology has been driven by a 
                  passion for solving complex problems and enabling businesses to leverage the 
                  full potential of cloud computing.
                </p>
                <p>
                  Throughout my career, I&apos;ve had the privilege of working with diverse organizations 
                  across finance, healthcare, e-commerce, and manufacturing sectors. I&apos;ve led 
                  numerous cloud transformation initiatives, migrating legacy systems to modern 
                  cloud-native architectures while ensuring business continuity and enhanced performance.
                </p>
                <p>
                  My approach combines deep technical expertise with strategic business thinking. 
                  I believe in building solutions that not only meet current requirements but are 
                  also designed to evolve with changing business needs. Security, scalability, and 
                  operational excellence are at the core of every architecture I design.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
            Core Values &amp; Approach
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value) => {
              const Icon = value.icon
              return (
                <div
                  key={value.title}
                  className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow"
                >
                  <div className="w-12 h-12 bg-azure-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-azure-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-slate-600">
                    {value.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Certifications */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">
            Certifications &amp; Credentials
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certifications.map((cert) => (
              <div
                key={cert}
                className="flex items-center p-4 bg-slate-50 rounded-lg hover:bg-azure-50 transition-colors"
              >
                <Award className="w-6 h-6 text-azure-600 mr-3 flex-shrink-0" />
                <span className="text-slate-700">{cert}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Personal Touch */}
        <div className="mt-16 bg-gradient-to-r from-azure-600 to-azure-800 rounded-lg shadow-lg p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">
            Let&apos;s Build Something Amazing Together
          </h2>
          <p className="text-xl mb-6 max-w-3xl mx-auto">
            I&apos;m always interested in discussing new projects, innovative ideas, 
            or opportunities to contribute to your organization&apos;s cloud journey.
          </p>
        </div>
      </div>
    </section>
  )
}
