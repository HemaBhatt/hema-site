import { useEffect, useRef } from 'react'
import { Award, Trophy, Star } from 'lucide-react'

const Awards = () => {
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

  const awards = [
    {
      title: 'UGC-NET Junior Research Fellowship (JRF)',
      organization: 'University Grants Commission',
      year: '2021',
      description: 'Prestigious national fellowship for doctoral research'
    },
    {
      title: 'Dhirubhai Ambani Scholarship',
      organization: 'Reliance Foundation',
      year: '2020',
      description: 'Merit-based scholarship for academic excellence'
    },
    {
      title: 'Best Poster Presentation Award',
      organization: 'National Conference on Climate Science',
      year: '2022',
      description: 'Recognition for research communication and presentation skills'
    },
    {
      title: 'CSIR-NET Qualified',
      organization: 'Council of Scientific & Industrial Research',
      year: '2021',
      description: 'National eligibility test for research and lectureship'
    },
    {
      title: 'Institute Merit Scholarship',
      organization: 'IIT Hyderabad',
      year: '2021-Present',
      description: 'Academic excellence award throughout doctoral program'
    },
    {
      title: 'Young Scientist Award',
      organization: 'Indian Meteorological Society',
      year: '2023',
      description: 'Recognition for outstanding contribution to atmospheric sciences'
    }
  ]

  const getIcon = (index) => {
    const icons = [Trophy, Award, Star]
    const Icon = icons[index % icons.length]
    return Icon
  }

  return (
    <section
      id="awards"
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto">
        <div className="section-fade-in text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Awards & Honors
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto"></div>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400">
            Recognition for academic excellence and research contributions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {awards.map((award, index) => {
            const Icon = getIcon(index)
            return (
              <div
                key={index}
                className="section-fade-in bg-gradient-to-br from-white to-primary-50 dark:from-gray-800 dark:to-gray-900 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-primary-100 dark:border-gray-700 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-primary-600 dark:bg-primary-700 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-sm font-semibold text-primary-600 dark:text-primary-400 bg-primary-100 dark:bg-primary-900/30 px-3 py-1 rounded-full">
                      {award.year}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                    {award.title}
                  </h3>
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                    {award.organization}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {award.description}
                  </p>
                </div>
                <div className="h-1 bg-gradient-to-r from-primary-400 to-primary-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </div>
            )
          })}
        </div>

        <div className="section-fade-in mt-16 text-center">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-primary-50 to-primary-100 dark:from-gray-800 dark:to-gray-700 px-8 py-4 rounded-full shadow-md">
            <Trophy className="w-6 h-6 text-primary-600 dark:text-primary-400" />
            <p className="text-gray-700 dark:text-gray-300 font-medium">
              Committed to excellence in research and academic pursuits
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Awards
