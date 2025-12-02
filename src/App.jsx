import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import Hero from './components/Hero'
import About from './components/About'
import Research from './components/Research'
import Publications from './components/Publications'
import Awards from './components/Awards'
import Contact from './components/Contact'
import PolaroidPreview from './components/PolaroidPreview'
import GalleryPage from './pages/GalleryPage'
import { ThemeProvider } from './context/ThemeContext'

function HomePage() {
  return (
    <>
      <Hero />
      <PolaroidPreview />
      <About />
      <Research />
      <Publications />
      <Awards />
      <Contact />
    </>
  )
}

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/images" element={<GalleryPage />} />
          </Routes>
        </main>
        <Footer />
        <BackToTop />
      </div>
    </ThemeProvider>
  )
}

export default App
