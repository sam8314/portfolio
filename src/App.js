import { useContext } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ThemeContext } from './contexts/theme'
import Header from './components/Header/Header'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import ProjectDetail from './components/ProjectDetail/ProjectDetail'
import './App.css'

const HomePage = () => (
  <>
    <About />
    <Projects />
    <Skills />
    <Contact />
  </>
)

const App = () => {
  const [{ themeName }] = useContext(ThemeContext)

  return (
    <Router>
      <div id='top' className={`${themeName} app`}>
        <Header />

        <main>
          <Switch>
            <Route exact path='/' component={HomePage} />
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
