import { Cloud, Code2, Container, Shield } from 'lucide-react'

export default function Skills() {
  const skillCategories = [
    {
      title: 'Azure Services',
      icon: Cloud,
      color: 'azure',
      skills: [
        'Azure App Service',
        'Azure Functions',
        'Azure Kubernetes Service (AKS)',
        'Azure Storage',
        'Azure SQL Database',
        'Azure Cosmos DB',
        'Azure Service Bus',
        'Azure API Management',
      ],
    },
    {
      title: 'Architecture',
      icon: Code2,
      color: 'teal',
      skills: [
        'Microservices Architecture',
        'Serverless Computing',
        'Event-Driven Architecture',
        'Domain-Driven Design',
        'Cloud-Native Patterns',
        'API Design',
        'System Design',
      ],
    },
    {
      title: 'DevOps & IaC',
      icon: Container,
      color: 'indigo',
      skills: [
        'Azure DevOps',
        'GitHub Actions',
        'GitLab CI/CD',
        'Terraform',
        'OpenTofu',
        'Docker',
        'Kubernetes',
        'Helm Charts',
        'CI/CD Pipelines',
      ],
    },
    {
      title: 'Security & Compliance',
      icon: Shield,
      color: 'purple',
      skills: [
        'Zero Trust Architecture',
        'Azure AD / Entra ID',
        'Azure Security Center',
        'Azure Key Vault',
        'Role-Based Access Control (RBAC)',
        'Compliance Frameworks',
        'Security Best Practices',
        'Identity Management',
      ],
    },
  ]

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; text: string; hover: string }> = {
      azure: {
        bg: 'bg-azure-100',
        text: 'text-azure-600',
        hover: 'hover:border-azure-600',
      },
      teal: {
        bg: 'bg-teal-100',
        text: 'text-teal-600',
        hover: 'hover:border-teal-600',
      },
      indigo: {
        bg: 'bg-indigo-100',
        text: 'text-indigo-600',
        hover: 'hover:border-indigo-600',
      },
      purple: {
        bg: 'bg-purple-100',
        text: 'text-purple-600',
        hover: 'hover:border-purple-600',
      },
    }
    return colors[color] || colors.azure
  }

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-slate-900 mb-4">
            Technical Expertise
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive skills and experience across the Microsoft Azure ecosystem, 
            cloud architecture, DevOps practices, and security implementation
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category) => {
            const Icon = category.icon
            const colors = getColorClasses(category.color)
            
            return (
              <div
                key={category.title}
                className={`bg-white rounded-lg shadow-md p-8 border-2 border-transparent ${colors.hover} transition-all hover:shadow-xl`}
              >
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 ${colors.bg} rounded-lg flex items-center justify-center mr-4`}>
                    <Icon className={`w-6 h-6 ${colors.text}`} />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900">
                    {category.title}
                  </h2>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill}
                      className="flex items-center text-slate-700"
                    >
                      <div className={`w-2 h-2 ${colors.bg} rounded-full mr-3`}></div>
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Additional Skills Section */}
        <div className="mt-16 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">
            Additional Competencies
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              'Azure Monitor',
              'Application Insights',
              'Azure Logic Apps',
              'Azure Event Grid',
              'Azure Data Factory',
              'Azure Synapse',
              'PowerShell',
              'Azure CLI',
              'REST APIs',
              'GraphQL',
              'Message Queues',
              'Load Balancing',
              'Auto-scaling',
              'Disaster Recovery',
              'High Availability',
              'Cost Optimization',
            ].map((skill) => (
              <div
                key={skill}
                className="px-4 py-2 bg-slate-50 rounded-md text-center text-slate-700 hover:bg-azure-50 hover:text-azure-700 transition-colors"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
