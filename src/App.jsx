import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import HomePage from './assets/Pages/HomePage'
import ProjectsPage from './assets/Pages/ProjectsPage'
import AdminPage from './assets/Pages/AdminPage'

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
