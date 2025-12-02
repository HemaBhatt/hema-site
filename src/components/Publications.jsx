import { useEffect, useRef } from 'react'
import { BookOpen, ExternalLink } from 'lucide-react'

const Publications = () => {
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

  const publications = [
    {
      title: 'Atmospheric Mercury Distribution and Transport Patterns in South Asia: A GEOS-Chem Modeling Study',
      journal: 'Atmospheric Chemistry and Physics',
      year: '2024',
      authors: 'Bhatt, H., et al.',
      type: 'Research Article',
      status: 'Published'
    },
    {
      title: 'Seasonal Variability of Mercury Emissions and Deposition in Asian Monsoon Regions',
      journal: 'Environmental Science & Technology',
      year: '2023',
      authors: 'Bhatt, H., Kumar, R., Singh, P.',
      type: 'Research Article',
      status: 'Published'
    }
  ]

  return (
    <section
      id="publications"
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50"
    >
      <div className="max-w-7xl mx-auto">
        <div className="section-fade-in text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Publications
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto"></div>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400">
            Peer-reviewed research contributions to the scientific community
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-6">
          {publications.map((pub, index) => (
            <div
              key={index}
              className="section-fade-in bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700 group"
            >
              <div className="p-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg group-hover:bg-primary-600 dark:group-hover:bg-primary-600 transition-colors duration-300">
                    <BookOpen className="w-6 h-6 text-primary-600 dark:text-primary-400 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                      <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300">
                        {pub.status}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                        {pub.year}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                      {pub.title}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-2">
                      <span className="font-medium">Authors:</span> {pub.authors}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 italic mb-4">
                      {pub.journal}
                    </p>
                    <div className="flex items-center gap-2 text-primary-600 dark:text-primary-400 font-medium hover:underline cursor-pointer">
                      <ExternalLink className="w-4 h-4" />
                      <span>View Publication</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="section-fade-in mt-12 text-center">
          <div className="inline-block bg-white dark:bg-gray-900 px-8 py-6 rounded-xl shadow-md">
            <p className="text-gray-700 dark:text-gray-300 text-lg">
              More publications are currently under review and will be updated soon.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Publications
