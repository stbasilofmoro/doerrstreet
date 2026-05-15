import { useState } from 'react'
import { Navbar }       from './components/Navbar'
import { HomePage }     from './pages/HomePage'
import { AboutPage }    from './pages/AboutPage'
import { ServicesPage } from './pages/ServicesPage'
import { TeamPage }     from './pages/TeamPage'
import { ContactPage }  from './pages/ContactPage'
import { LoginPage }    from './pages/LoginPage'
import './App.css'

export default function App() {
  const [page, setPage] = useState('home')

  const pages = {
    home:     <HomePage     onNavigate={setPage} />,
    about:    <AboutPage    onNavigate={setPage} />,
    services: <ServicesPage onNavigate={setPage} />,
    team:     <TeamPage     onNavigate={setPage} />,
    contact:  <ContactPage  onNavigate={setPage} />,
    login:    <LoginPage    onNavigate={setPage} />,
  }

  return (
    <div className="site-root">
      <Navbar onNavigate={setPage} currentPage={page} />
      {pages[page] ?? pages.home}
    </div>
  )
}
