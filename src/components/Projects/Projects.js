import { useState, useMemo } from 'react'
import uniqid from 'uniqid'
import TuneIcon from '@mui/icons-material/Tune'
import { projects } from '../../portfolio'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
import { useLanguage } from '../../contexts/language'
import { useDropAnimation } from '../../hooks/useDropAnimation'
import './Projects.css'

const Projects = () => {
  const { strings } = useLanguage()
  const animationRef = useDropAnimation()
  const [selectedType, setSelectedType] = useState(null)
  const [showFilters, setShowFilters] = useState(false)

  // Extract unique types and their colors
  const projectTypes = useMemo(() => {
    const typesMap = new Map()
    projects.forEach((project) => {
      if (project.type && !typesMap.has(project.type)) {
        typesMap.set(project.type, project.typeColor)
      }
    })
    return Array.from(typesMap.entries()).map(([type, color]) => ({
      type,
      color,
    }))
  }, [])

  // Filter projects based on selected type
  const filteredProjects = useMemo(() => {
    if (!selectedType) return projects
    return projects.filter((project) => project.type === selectedType)
  }, [selectedType])

  if (!projects.length) return null

  return (
    <section id='projects' className='section projects' ref={animationRef}>
<div className='projects__header-top'>
  <h2 className='section__title'>
    {strings.projectsTitle}
    <button
      className='projects__filter-toggle'
      onClick={() => setShowFilters(!showFilters)}
      aria-label='Toggle filters'
      title='Toggle project type filters'
    >
      <TuneIcon />
    </button>
  </h2>
</div>

      {showFilters && (
        <ul className='projects__filters'>
          {projectTypes.map((item) => (
            <li key={item.type}>
              <button
                className={`btn btn--plain projects__filter-bubble ${selectedType === item.type ? 'active' : ''}`}
                onClick={() => setSelectedType(selectedType === item.type ? null : item.type)}
                style={{
                  '--dot-color': item.color,
                }}
              >
                <span className='filter-bubble__dot' style={{ backgroundColor: item.color }}></span>
                <span> </span>
                <span className='filter-bubble__text'>
                  {item.type.charAt(0).toUpperCase() + item.type.slice(1).replace(/([A-Z])/g, ' $1')}
                </span>
              </button>
            </li>
          ))}
        </ul>
      )}

      <div className='projects__grid'>
        {filteredProjects.map((project) => (
          <ProjectContainer key={uniqid()} project={project} />
        ))}
      </div>
    </section>
  )
}

export default Projects
