import { Heart } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-sm">
              &copy; {currentYear} Hema Bhatt. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-2 text-sm">
            <span>Built with</span>
            <Heart className="w-4 h-4 text-primary-500 fill-current" />
            <span>for research and collaboration</span>
          </div>

          <div className="text-center md:text-right">
            <p className="text-sm text-gray-400">
              PhD Scholar, IIT Hyderabad
            </p>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-800 text-center">
          <p className="text-xs text-gray-500">
            Advancing research in Climate Change & Atmospheric Chemistry
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
