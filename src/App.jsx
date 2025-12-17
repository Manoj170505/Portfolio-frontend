import './App.css'
import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import HomePage from './assets/Pages/HomePage'
import ProjectsPage from './assets/Pages/ProjectsPage'
import AdminPage from './assets/Pages/AdminPage'
import LoginPage from './assets/Pages/LoginPage'

function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </ThemeProvider>
  )
}

export default App
