import uniqid from 'uniqid'
import { projects } from '../../portfolio'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
import { useLanguage } from '../../contexts/language'
import { useDropAnimation } from '../../hooks/useDropAnimation'
import './Projects.css'

const Projects = () => {
  const { strings } = useLanguage()
  const animationRef = useDropAnimation()
  if (!projects.length) return null

  return (
    <section id='projects' className='section projects' ref={animationRef}>
      <h2 className='section__title'>{strings.projectsTitle}</h2>

      <div className='projects__grid'>
        {projects.map((project) => (
          <ProjectContainer key={uniqid()} project={project} />
        ))}
      </div>
    </section>
  )
}

export default Projects
