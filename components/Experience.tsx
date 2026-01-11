import { Calendar, MapPin } from 'lucide-react'

export default function Experience() {
  const projects = [
    {
      title: 'Handover of existing Azure Cloud Infrastructure',
      role: 'Cloud Architect',
      company: 'Public Transportation System Operator',
      duration: '2025 - Today',
      location: 'Remote',
      description: 'Led the transfer of critical applications from an Azure cloud infrastructure, serving more than 180 million trips.',
      technologies: [
        'Azure Container Apps',
        'Azure MySQL',
        'Azure PostgreSQL',
        'Application Gateway',
        'API Management',
        'OpenTofu',
        'Datadog',
        'GitLab CI/CD',
      ],
      achievements: [
        'Recovery of control and management',
        'Reduced infrastructure costs by 40% through optimized resource allocation',
        'Implemented automated CI/CD pipelines reducing deployment time by 70%',
        'Achieved 99.99% uptime SLA across all production workloads',
      ],
    },
    {
      title: 'Microservices Platform Architecture',
      role: 'Senior Cloud Architect',
      company: 'E-Commerce Technology Leader',
      duration: '2020 - 2022',
      location: 'Hybrid',
      description: 'Designed and implemented a cloud-native microservices platform supporting high-traffic e-commerce operations.',
      technologies: [
        'Azure Kubernetes Service',
        'Service Bus',
        'API Management',
        'Azure Functions',
        'Event Grid',
        'Docker',
        'Helm',
      ],
      achievements: [
        'Architected scalable microservices handling 10K+ requests per second',
        'Implemented event-driven architecture reducing system coupling by 60%',
        'Established DevOps best practices adopted across 5 development teams',
        'Designed disaster recovery solution with RTO < 15 minutes',
      ],
    },
    {
      title: 'IoT Data Platform',
      role: 'Cloud Solutions Architect',
      company: 'Manufacturing Technology Firm',
      duration: '2019 - 2020',
      location: 'On-site',
      description: 'Built a real-time IoT data platform processing sensor data from 100K+ connected devices.',
      technologies: [
        'Azure IoT Hub',
        'Stream Analytics',
        'Cosmos DB',
        'Time Series Insights',
        'Azure Functions',
        'Power BI',
      ],
      achievements: [
        'Processed 5M+ events per day with sub-second latency',
        'Implemented predictive maintenance models reducing downtime by 35%',
        'Created real-time dashboards for operational insights',
        'Ensured GDPR and industry compliance across all data workflows',
      ],
    },
    {
      title: 'Zero Trust Security Implementation',
      role: 'Cloud Security Architect',
      company: 'Healthcare Solutions Provider',
      duration: '2018 - 2019',
      location: 'On-site',
      description: 'Implemented Zero Trust security architecture for healthcare applications handling sensitive patient data.',
      technologies: [
        'Azure AD / Entra ID',
        'Azure Security Center',
        'Key Vault',
        'Azure Policy',
        'Conditional Access',
        'Azure Sentinel',
      ],
      achievements: [
        'Achieved HIPAA and SOC 2 compliance certification',
        'Implemented identity-based access reducing security incidents by 80%',
        'Deployed automated security monitoring and threat detection',
        'Conducted security training for 200+ development and operations staff',
      ],
    },
  ]

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-slate-900 mb-4">
            Professional Experience
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Proven track record of delivering enterprise-scale cloud solutions 
            across diverse industries and complex technical challenges
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative bg-white rounded-lg shadow-md p-8 hover:shadow-xl transition-shadow"
            >
              {/* Timeline Line */}
              {index !== projects.length - 1 && (
                <div className="hidden lg:block absolute left-0 top-full h-12 w-1 bg-azure-200 ml-4"></div>
              )}
              
              {/* Timeline Dot */}
              <div className="hidden lg:block absolute left-0 top-8 w-3 h-3 bg-azure-600 rounded-full ml-3"></div>
              
              <div className="lg:ml-12">
                {/* Header */}
                <div className="mb-4">
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">
                    {project.title}
                  </h2>
                  <div className="flex flex-wrap items-center gap-4 text-slate-600">
                    <span className="font-semibold text-azure-600">
                      {project.role}
                    </span>
                    <span className="hidden sm:inline">•</span>
                    <span>{project.company}</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-slate-500">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {project.duration}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {project.location}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-700 mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-4">
                  <h3 className="text-sm font-semibold text-slate-900 mb-2">
                    Technologies:
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-azure-50 text-azure-700 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div>
                  <h3 className="text-sm font-semibold text-slate-900 mb-2">
                    Key Achievements:
                  </h3>
                  <ul className="space-y-2">
                    {project.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-azure-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-slate-700">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
