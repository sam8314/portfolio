import { useContext, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
} from 'react-router-dom'
import { ThemeContext } from './contexts/theme'
import Header from './components/Header/Header'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Education from './components/Education/Education'
import ProjectDetail from './components/ProjectDetail/ProjectDetail'
import './App.css'
import DarkVeilBackground from './components/Background/DarkVeilBackground'

const HomePage = () => (
  <>
    <About />
    <Projects />
    <Skills />
    <Contact />
  </>
)

const ScrollToHash = () => {
  const location = useLocation()

  useEffect(() => {
    if (!location.hash) return
    const id = location.hash.replace('#', '')
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [location.hash, location.pathname])

  return null
}

const App = () => {
  const [{ themeName }] = useContext(ThemeContext)

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <DarkVeilBackground speed={1.2} />
      <div id='top' className={`${themeName} app`}>
        <Header />
        <ScrollToHash />

        <main>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/education' component={Education} />
            <Route path='/project/:projectId' component={ProjectDetail} />
          </Switch>
        </main>

        <ScrollToTop />
        <Footer />
      </div>
    </Router>
  )
}

export default App
