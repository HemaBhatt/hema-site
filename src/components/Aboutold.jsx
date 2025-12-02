import { useEffect, useRef } from 'react'
import { Microscope, Wind, Leaf, BookOpen, Code2, BarChart3, TrendingUp, Database, Cpu, FileText } from 'lucide-react'

const About = () => {
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

  const researchInterests = [
    {
      icon: Wind,
      title: 'Atmospheric Chemistry',
      description: 'Investigating chemical processes in the atmosphere and their environmental impacts'
    },
    {
      icon: Leaf,
      title: 'Air Pollution',
      description: 'Analyzing pollutant sources, transport, and mitigation strategies'
    },
    {
      icon: Microscope,
      title: 'Climate Modelling',
      description: 'Using computational models to understand climate systems and predict changes'
    }
  ]

  const skills = [
    { name: 'Python', icon: Code2, category: 'Programming' },
    { name: 'R Programming', icon: Database, category: 'Programming' },
    { name: 'GEOS-Chem', icon: Cpu, category: 'Tools' },
    { name: 'Data Analysis', icon: BarChart3, category: 'Research' },
    { name: 'Climate Modeling', icon: TrendingUp, category: 'Research' },
    { name: 'Research Writing', icon: FileText, category: 'Research' }
  ]

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50"
    >
      <div className="max-w-7xl mx-auto">
        <div className="section-fade-in text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="section-fade-in space-y-6">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                I am a dedicated PhD scholar at the Indian Institute of Technology Hyderabad,
                specializing in Climate Change and Atmospheric Chemistry. My research focuses on
                understanding the complex dynamics of atmospheric processes and their impact on
                our environment.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                With a strong foundation in computational modeling and data analysis, I employ
                advanced tools like GEOS-Chem to investigate atmospheric mercury loads across
                Asia. My work aims to contribute meaningful insights toward sustainable
                environmental solutions.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Beyond research, I am passionate about teaching, science communication, and
                mentoring aspiring researchers. I believe in the power of collaboration and
                interdisciplinary approaches to address the pressing environmental challenges
                of our time.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Hobbies & Interests
                </h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                Reading scientific literature, hiking in nature, photography, science
                communication, and exploring new data visualization techniques.
              </p>
            </div>
          </div>

          <div className="section-fade-in space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Research Interests
              </h3>
              <div className="space-y-4">
                {researchInterests.map((interest, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                        <interest.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                          {interest.title}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400">
                          {interest.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Technical Skills
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="group bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center cursor-default"
                  >
                    <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg mb-3 group-hover:bg-primary-200 dark:group-hover:bg-primary-800/50 transition-colors duration-300">
                      <skill.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                    </div>
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                      {skill.name}
                    </h4>
                    <span className="text-xs px-2 py-1 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 rounded-full">
                      {skill.category}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
