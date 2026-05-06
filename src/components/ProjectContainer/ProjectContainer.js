import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import uniqid from 'uniqid'
import GitHubIcon from '@material-ui/icons/GitHub'
import GroupIcon from '@material-ui/icons/Group'
import DateRangeIcon from '@material-ui/icons/DateRange'
import './ProjectContainer.css'

const ProjectContainer = ({ project, allProjects }) => {
  const [hoveredSkill, setHoveredSkill] = useState(null)
  const history = useHistory()

  const handleCardClick = () => {
    if (project.id) {
      history.push(`/project/${project.id}`)
    }
  }

  const handleSkillHover = (skill) => {
    setHoveredSkill(skill)
    // Trigger global skill highlight
    document.querySelectorAll('.project__stack-item').forEach((item) => {
      if (item.textContent === skill) {
        item.classList.add('highlighted')
      }
    })
  }

  const handleSkillLeave = () => {
    setHoveredSkill(null)
    // Remove all highlights
    document.querySelectorAll('.project__stack-item').forEach((item) => {
      item.classList.remove('highlighted')
    })
  }

  return (
    <div className='project' onClick={handleCardClick}>

      {project.image && (
        <img
          src={
            project.image.startsWith('http')
              ? project.image
              : `${process.env.PUBLIC_URL}/images/${project.image}`
          }
          alt={`${project.name} screenshot`}
          className='project__image'
        />
      )}

      <div className='project__content'>
        <h3>{project.name}</h3>

        <div className='project__metadata'>
          <span className='metadata-badge' title='Team Size'>
            <GroupIcon className='metadata-icon' /> {project.teamSize}
          </span>
          <span className='metadata-badge' title='Role'>
            {project.role}
          </span>
          <span className='metadata-badge' title='Year'>
            <DateRangeIcon className='metadata-icon' /> {project.year}
          </span>
          {project.wip && (
            <span className='metadata-badge wip-badge' title='Work in Progress'>
              WIP
            </span>
          )}
        </div>

        <p className='project__description'>{project.description}</p>

        <div className='project__footer'>
          {project.stack && (
            <ul className='project__stack'>
              {project.stack.map((item) => (
                <li
                  key={uniqid()}
                  className='project__stack-item'
                  onMouseEnter={() => handleSkillHover(item)}
                  onMouseLeave={handleSkillLeave}
                >
                  {item}
                </li>
              ))}
            </ul>
          )}

          <div className='project__links'>
            {project.sourceCode && (
              <a
                href={project.sourceCode}
                aria-label='source code'
                className='link link--icon'
                onClick={(e) => e.stopPropagation()}
                target='_blank'
                rel='noopener noreferrer'
              >
                <GitHubIcon />
              </a>
            )}

            {project.livePreview && (
              <a
                href={project.livePreview}
                aria-label='live preview'
                className='btn btn--live-demo'
                onClick={(e) => e.stopPropagation()}
                target='_blank'
                rel='noopener noreferrer'
              >
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectContainer
