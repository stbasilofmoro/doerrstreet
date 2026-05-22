import { useState, useEffect } from 'react'
import { Navbar }       from './components/Navbar'
import { HomePage }     from './pages/HomePage'
import { AboutPage }    from './pages/AboutPage'
import { ServicesPage } from './pages/ServicesPage'
import { TeamPage }     from './pages/TeamPage'
import { ContactPage }  from './pages/ContactPage'
import { LoginPage }    from './pages/LoginPage'
import { PrivacyPage }  from './pages/PrivacyPage'

// Service landing pages
import { RailroadTrackInspectionPage }  from './pages/landing/RailroadTrackInspection'
import { FRATrackInspectionPage }       from './pages/landing/FRATrackInspection'
import { IndustrialTrackInspectionPage } from './pages/landing/IndustrialTrackInspection'
import { RailSidingInspectionPage }     from './pages/landing/RailSidingInspection'
import { RailroadTrackConsultingPage }  from './pages/landing/RailroadTrackConsulting'
import { TrackInspectionServicesPage }  from './pages/landing/TrackInspectionServices'
import { IndustrialRailCompliancePage } from './pages/landing/IndustrialRailCompliance'

// Geographic landing pages
import { NorthCarolinaPage } from './pages/landing/geo/NorthCarolina'
import { SouthCarolinaPage } from './pages/landing/geo/SouthCarolina'
import { GeorgiaPage }       from './pages/landing/geo/Georgia'
import { TennesseePage }     from './pages/landing/geo/Tennessee'
import { OhioPage }          from './pages/landing/geo/Ohio'

import './App.css'

const PATH_TO_PAGE = {
  '/':                                   'home',
  '/about':                              'about',
  '/services':                           'services',
  '/team':                               'team',
  '/contact':                            'contact',
  '/login':                              'login',
  '/privacy-policy':                     'privacy',
  '/railroad-track-inspection':          'lp-railroad-track-inspection',
  '/fra-track-inspection':               'lp-fra-track-inspection',
  '/industrial-track-inspection':        'lp-industrial-track-inspection',
  '/rail-siding-inspection':             'lp-rail-siding-inspection',
  '/railroad-track-consulting':          'lp-railroad-track-consulting',
  '/track-inspection-services':          'lp-track-inspection-services',
  '/industrial-rail-compliance':         'lp-industrial-rail-compliance',
  '/track-inspection-north-carolina':    'lp-nc',
  '/track-inspection-south-carolina':    'lp-sc',
  '/track-inspection-georgia':           'lp-ga',
  '/track-inspection-tennessee':         'lp-tn',
  '/track-inspection-ohio':              'lp-oh',
}

const PAGE_TO_PATH = Object.fromEntries(
  Object.entries(PATH_TO_PAGE).map(([path, page]) => [page, path])
)

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
    privacy:  <PrivacyPage  onNavigate={navigate} />,

    'lp-railroad-track-inspection':  <RailroadTrackInspectionPage  onNavigate={navigate} />,
    'lp-fra-track-inspection':       <FRATrackInspectionPage       onNavigate={navigate} />,
    'lp-industrial-track-inspection':<IndustrialTrackInspectionPage onNavigate={navigate} />,
    'lp-rail-siding-inspection':     <RailSidingInspectionPage     onNavigate={navigate} />,
    'lp-railroad-track-consulting':  <RailroadTrackConsultingPage  onNavigate={navigate} />,
    'lp-track-inspection-services':  <TrackInspectionServicesPage  onNavigate={navigate} />,
    'lp-industrial-rail-compliance': <IndustrialRailCompliancePage onNavigate={navigate} />,

    'lp-nc': <NorthCarolinaPage onNavigate={navigate} />,
    'lp-sc': <SouthCarolinaPage onNavigate={navigate} />,
    'lp-ga': <GeorgiaPage       onNavigate={navigate} />,
    'lp-tn': <TennesseePage     onNavigate={navigate} />,
    'lp-oh': <OhioPage          onNavigate={navigate} />,
  }

  return (
    <div className="site-root">
      <Navbar onNavigate={navigate} currentPage={page} />
      {pages[page] ?? pages.home}
    </div>
  )
}
