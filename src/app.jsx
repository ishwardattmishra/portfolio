import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Experience } from './components/Experience'
import { Skills } from './components/Skills'
import { Certifications } from './components/Certifications'
import { OSS } from './components/OSS'
import { Writing } from './components/Writing'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import './index.css'

export function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Certifications />
      <OSS />
      <Writing />
      <Contact />
      <Footer />
    </>
  )
}
