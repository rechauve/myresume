import { Mail, Linkedin, Github, MessageSquare } from 'lucide-react'

export default function Contact() {
  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      value: 'rechauve@gmail.com',
      href: 'mailto:rechauve@gmail.com',
      description: 'Send me an email anytime',
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      value: 'linkedin.com/in/remichauvet',
      href: 'https://linkedin.com/in/remichauvet',
      description: 'Connect with me professionally',
    },
    {
      icon: Github,
      title: 'GitHub',
      value: 'github.com/rechauve',
      href: 'https://github.com/rechauve',
      description: 'Check out my projects and contributions',
    },
    {
      icon: MessageSquare,
      title: 'Twitter',
      value: '@cloudarchitect',
      href: 'https://x.com/RmiChauvet',
      description: 'Follow me for cloud insights',
    },
  ]

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-slate-900 mb-4">
            Get In Touch
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            I&apos;m always open to discussing new projects, creative ideas, 
            or opportunities to contribute to your cloud initiatives
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {contactMethods.map((method) => {
            const Icon = method.icon
            return (
              <a
                key={method.title}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-lg shadow-md p-8 hover:shadow-xl transition-all hover:scale-105"
              >
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-azure-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Icon className="w-6 h-6 text-azure-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-1">
                      {method.title}
                    </h3>
                    <p className="text-azure-600 font-medium mb-2">
                      {method.value}
                    </p>
                    <p className="text-slate-600">
                      {method.description}
                    </p>
                  </div>
                </div>
              </a>
            )
          })}
        </div>

        {/* Contact Form Placeholder */}
        <div className="bg-white rounded-lg shadow-md p-8 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">
            Send Me a Message
          </h2>
          <div className="bg-azure-50 border-2 border-azure-200 rounded-lg p-8 text-center">
            <MessageSquare className="w-16 h-16 text-azure-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-slate-900 mb-2">
              Contact Form Coming Soon
            </h3>
            <p className="text-slate-600 mb-4">
              A contact form with Azure Functions backend integration will be available soon. 
              For now, please reach out to me directly via email or social media.
            </p>
            <a
              href="mailto:rechauve@gmail.com"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-azure-600 hover:bg-azure-700 transition-colors"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email Me Directly
            </a>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-azure-600 to-azure-800 rounded-lg shadow-lg p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Start Your Cloud Journey?
            </h2>
            <p className="text-xl mb-6 max-w-2xl mx-auto">
              Whether you&apos;re planning a cloud migration, need architecture consultation, 
              or want to optimize your existing Azure infrastructure, I&apos;m here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:rechauve@gmail.com"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-medium rounded-md text-white hover:bg-white hover:text-azure-600 transition-colors"
              >
                Schedule a Consultation
              </a>
              <a
                href="https://linkedin.com/in/remichauvet"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-medium rounded-md text-white hover:bg-white hover:text-azure-600 transition-colors"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
