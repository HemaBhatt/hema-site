import { useEffect, useRef } from 'react'
import { FlaskConical, Globe, Database, TrendingUp } from 'lucide-react'

const Research = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = sectionRef.current?.querySelectorAll('.section-fade-in')
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const researchHighlights = [
    {
      icon: Globe,
      title: 'Geographic Scope',
      description: 'Comprehensive analysis across Asian regions'
    },
    {
      icon: Database,
      title: 'Advanced Modeling',
      description: 'GEOS-Chem computational framework'
    },
    {
      icon: TrendingUp,
      title: 'Impact Assessment',
      description: 'Quantifying environmental and health impacts'
    }
  ]

  return (
    <section
      id="research"
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto">
        <div className="section-fade-in text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Research
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto"></div>
        </div>

        <div className="section-fade-in max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-primary-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-xl overflow-hidden border border-primary-100 dark:border-gray-700">
            <div className="p-8 md:p-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-primary-600 rounded-xl">
                  <FlaskConical className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                    Doctoral Dissertation
                  </h3>
                  <p className="text-primary-600 dark:text-primary-400 font-medium">
                    Ongoing Research at IIT Hyderabad
                  </p>
                </div>
              </div>

              <h4 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6 leading-relaxed">
                Assessment of Atmospheric Mercury Loads Across Asia Using GEOS-Chem Model
              </h4>

              <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  My doctoral research focuses on the comprehensive evaluation of atmospheric
                  mercury distribution and transport patterns across the Asian continent. Using
                  the state-of-the-art GEOS-Chem chemical transport model, I investigate the
                  sources, sinks, and transformation processes of mercury in the atmosphere.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  This research aims to quantify mercury emissions from anthropogenic and natural
                  sources, understand long-range transport mechanisms, and assess deposition
                  patterns across diverse geographic and climatic zones. The findings contribute
                  to developing evidence-based policies for mercury pollution mitigation and
                  environmental health protection.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {researchHighlights.map((highlight, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg w-fit mb-4">
                      <highlight.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                    </div>
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-2">
                      {highlight.title}
                    </h5>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {highlight.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl">
                <h5 className="font-semibold text-gray-900 dark:text-white mb-4">
                  Key Research Methodologies:
                </h5>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="text-primary-600 dark:text-primary-400 mt-1">•</span>
                    <span>High-resolution atmospheric chemistry modeling using GEOS-Chem</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary-600 dark:text-primary-400 mt-1">•</span>
                    <span>Satellite data integration and remote sensing analysis</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary-600 dark:text-primary-400 mt-1">•</span>
                    <span>Statistical analysis and validation with ground-based observations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary-600 dark:text-primary-400 mt-1">•</span>
                    <span>Scenario modeling for future emission projections</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="section-fade-in mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-400 italic">
            This research is being conducted under the guidance of esteemed faculty at IIT
            Hyderabad and is supported by UGC-NET JRF fellowship.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Research
