import { ChevronDown, Download, Mail } from 'lucide-react'

const Hero = () => {
  const scrollToSection = (e, href) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-primary-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 -z-10"></div>

      <div className="absolute inset-0 opacity-10 dark:opacity-5 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-300 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center md:text-left">
            <div className="space-y-2">
              <h2 className="text-lg font-medium text-primary-600 dark:text-primary-400 tracking-wide">
                PhD Scholar
              </h2>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
                Hema Bhatt
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-serif">
                Climate Change & Atmospheric Chemistry
              </p>
            </div>

            <p className="text-lg text-gray-700 dark:text-gray-400 max-w-2xl">
              Passionate researcher at IIT Hyderabad, investigating atmospheric mercury loads
              across Asia using advanced computational models and data-driven approaches to
              understand and mitigate environmental challenges.
            </p>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-4">
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, '#contact')}
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                <Mail className="w-5 h-5" />
                Contact Me
              </a>
              <a
                href="/HEMA PRAKASH BHATT_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary-600 text-primary-600 dark:text-primary-400 dark:border-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 rounded-lg font-medium transition-all duration-300 hover:scale-105"
              >
                <Download className="w-5 h-5" />
                View CV
              </a>

            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full blur-2xl opacity-30 animate-pulse"></div>
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-8 border-white dark:border-gray-800 shadow-2xl">
                <img
                  src="/Picture1.jpg"
                  alt="Hema Bhatt"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#about"
        onClick={(e) => scrollToSection(e, '#about')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
      >
        <ChevronDown className="w-8 h-8 text-primary-600 dark:text-primary-400" />
      </a>
    </section>
  )
}

export default Hero
