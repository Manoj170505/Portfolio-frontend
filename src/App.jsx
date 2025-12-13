import { useState } from 'react'
import './App.css'
import Home from './assets/Components/Home'
import About from './assets/Components/About'
import Navbar from './assets/Components/Navbar'
import Skills from './assets/Components/Skills'
import Projects from './assets/Components/Projects'
import DProjects from './assets/Components/DProjects'
import Contact from './assets/Components/Contact'
import Footer from './assets/Components/Footer'
import { ThemeProvider } from './context/ThemeContext'

function App() {
  const [view, setView] = useState('home');

  return (
    <ThemeProvider>
      {view === 'home' ? (
        <>
          <Navbar />
          <Home />
          <About />
          <Skills />
          <Projects onViewAll={() => setView('projects')} />
          <Contact />
          <Footer />
        </>
      ) : (
        <DProjects onBack={() => setView('home')} />
      )}
    </ThemeProvider>
  )
}

export default App
