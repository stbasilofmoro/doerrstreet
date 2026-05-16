import { useState, useEffect } from 'react'
import { Navbar }       from './components/Navbar'
import { HomePage }     from './pages/HomePage'
import { AboutPage }    from './pages/AboutPage'
import { ServicesPage } from './pages/ServicesPage'
import { TeamPage }     from './pages/TeamPage'
import { ContactPage }  from './pages/ContactPage'
import { LoginPage }    from './pages/LoginPage'
import './App.css'

const PATH_TO_PAGE = {
  '/':         'home',
  '/about':    'about',
  '/services': 'services',
  '/team':     'team',
  '/contact':  'contact',
  '/login':    'login',
}

const PAGE_TO_PATH = {
  home:     '/',
  about:    '/about',
  services: '/services',
  team:     '/team',
  contact:  '/contact',
  login:    '/login',
}

function getPageFromPath() {
  return PATH_TO_PAGE[window.location.pathname] ?? 'home'
}

export default function App() {
  const [page, setPage] = useState(getPageFromPath)

  const navigate = (newPage) => {
    const path = PAGE_TO_PATH[newPage] ?? '/'
    window.history.pushState({}, '', path)
    setPage(newPage)
  }

  useEffect(() => {
    const onPop = () => setPage(getPageFromPath())
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])

  const pages = {
    home:     <HomePage     onNavigate={navigate} />,
    about:    <AboutPage    onNavigate={navigate} />,
    services: <ServicesPage onNavigate={navigate} />,
    team:     <TeamPage     onNavigate={navigate} />,
    contact:  <ContactPage  onNavigate={navigate} />,
    login:    <LoginPage    onNavigate={navigate} />,
  }

  return (
    <div className="site-root">
      <Navbar onNavigate={navigate} currentPage={page} />
      {pages[page] ?? pages.home}
    </div>
  )
}
